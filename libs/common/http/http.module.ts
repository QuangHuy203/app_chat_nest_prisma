import { Request, Response } from 'express';
import {
  Catch,
  HttpException,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { version } from '../../../package.json';
import { RpcException } from '@nestjs/microservices';
import { Observable, tap } from 'rxjs';
import { getI18nContextFromRequest } from 'nestjs-i18n';

export class CustomResponse {
  version: string;
  code: number;
  success: boolean;
  message: string | string[];
  data: any;
  totalRow: number;

  constructor(
    code: number,
    message: string | string[],
    data: any,
    totalRow: number,
    success = false,
  ) {
    this.version = version;
    this.code = code;
    this.message = message;
    if (totalRow > 0) this.totalRow = totalRow;
    this.data = data;
    this.success = success;
  }
}
export class HTTP {
  response: CustomResponse;

  setHttpRequest(
    code: number,
    message: string | string[],
    data: any = null,
    totalRow = 0,
    success = true,
  ) {
    if (code != HttpStatus.OK) success = false;
    this.response = new CustomResponse(code, message, data, totalRow, success);
    return this.response;
  }

  success(
    data = null,
    code = HttpStatus.OK,
    message = 'Đăng nhập thành công',
    success = true,
    totalRow = 0,
  ) {
    this.response = new CustomResponse(code, message, data, totalRow, success);
    return this.response;
  }

  notFound() {
    this.response = new CustomResponse(
      HttpStatus.NOT_FOUND,
      'Not found',
      null,
      0,
      false,
    );
    return this.response;
  }

  error(
    message: string | string[],
    code: number = HttpStatus.BAD_REQUEST,
    error: string = '',
  ) {
    const response = new CustomResponse(code, message, null, 0, false);
    throw new RpcException(response);
  }
}

@Catch(HttpException)
export class HttpExceptionFilter extends HTTP implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json(
      this.setHttpRequest(
        status,
        exception.message,
        {
          error: JSON.parse(JSON.stringify(exception.getResponse())).message[0],
        },
        0,
        false,
      ),
    );
  }
}

@Catch(HttpException)
export class RpcValidationFilter extends HTTP implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const data = JSON.parse(JSON.stringify(exception.getResponse())).message[0];
    return this.setHttpRequest(status, data, null, 0, false);
  }
}

@Injectable()
export class ErrorsInterceptor extends HTTP implements NestInterceptor {
  getKeyMessage(message) {
    let key = '';
    switch (message) {
      case 'File too large':
        key = 'systems.FILE_UPLOAD.FILE_TOO_LARGE';
        break;
      case 'Too many files':
        key = 'systems.FILE_UPLOAD.TOO_MANY_FILES';
        break;
      default:
        key = message;
        break;
    }
    return key;
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    const i18n = getI18nContextFromRequest(request);
    return next.handle().pipe(
      tap({
        error: err => {
          err.message = this.getKeyMessage(err.message);
          throw this.setHttpRequest(err.status, i18n.t(err.message), null, 0, false);
        },
      }),
    );
  }
}
