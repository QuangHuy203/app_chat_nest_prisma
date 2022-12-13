import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class ConvertDateToTSInterceptor implements NestInterceptor {
  dateKeys: string[] = ['createdDate', 'updatedDate', 'deletedDate'];
  keyToDeep: string[] = ['user', 'data'];

  constructor(@Inject('DATE_KEYS') private dates: any = {}) {}

  /**
   *  walk algorithm
   *  scan all date key valided
   * @param obj
   */
  walkToConvertTime(obj: any) {
    // check v is instance of Array
    if (obj instanceof Array) {
      obj.forEach(i => {
        if (i instanceof Object) obj = this.walkToConvertTime(i);
      });
    }

    // else Object
    for (const [k, v] of Object.entries(obj)) {
      if (!this.dateKeys.includes(k) && !this.keyToDeep.includes(k)) continue;

      // check key deeper
      if (this.keyToDeep.includes(k)) {
        // check v is instance of Array
        if (v instanceof Array) {
          obj[k] = v.map(i => {
            if (i instanceof Object) obj = this.walkToConvertTime(i);
            return i;
          });
        }

        if (v instanceof Object) {
          obj = this.walkToConvertTime(v);
        }
      }

      // check date key
      if (this.dateKeys.includes(k)) {
        // declare regex
        const regex =
          /^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])\.[0-9]{3}Z$/;

        // case: type of value is string and regex valid
        // convert time
        if (typeof v === 'string' && regex.test(v)) {
          obj[k] = new Date(v).getTime();
        }
      }
    }
    return obj;
  }

  /**
   * handling date key list
   * date key list - static defined
   * response ISO string
   * @param context
   */
  private beforeHandle(context: ExecutionContext) {
    // get methods unit from request for check METHOD case (POST & PATCH)
    const request = context.switchToHttp().getRequest();
    const methods = request.route.methods;
    const body = request.body || {};

    // POST http method
    if (methods.post) {
      this.dateKeys.forEach(key => {
        if (body[key]) body[key] = new Date(body[key]).toISOString();
      });
      request.body = body;
    }

    // PACTH http method
    if (methods.patch) {
      this.dateKeys.forEach(key => {
        if (body[key]) body[key] = new Date(body[key]).toISOString();
      });
      request.body = body;
    }
  }

  /**
   * handling something at after
   * @param next
   * @returns
   */
  private afterHandle(next: CallHandler) {
    return next.handle().pipe(
      tap(v => {
        this.walkToConvertTime(v || {});
      }),
    );
  }

  /**
   * intercept handle
   * @param context
   * @param next
   * @returns
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    for (const key of this.dates[context.getClass().name] || [])
      if (!this.dateKeys.includes(key)) this.dateKeys.push(key);

    this.beforeHandle(context);
    return this.afterHandle(next);
  }
}
