import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CustomResponse } from '../http';
import { getI18nContextFromRequest } from 'nestjs-i18n';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    const i18n = getI18nContextFromRequest(request);

    return next.handle().pipe(
      tap((res: CustomResponse) => {
        if (!Array.isArray(res.message)) {
          res.message = i18n.t(res.message);
        }
        response.statusCode = res.code;
        return res;
      }),
      catchError((err: CustomResponse) =>
        throwError(() => {
          if (Array.isArray(err.message) && err.message.length > 0) {
            let errorMessages = err.message.join(', ');
            const length = 255;
            errorMessages =
              errorMessages.length > length
                ? errorMessages.substring(0, length - 3) + '...'
                : errorMessages;
            response.setHeader('errorMessages', errorMessages);
            err.message = 'Validation Error.';
          }
          return new HttpException(err, err?.code);
        }),
      ),
    );
  }
}
