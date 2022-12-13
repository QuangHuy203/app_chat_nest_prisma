import { ArgumentMetadata } from '@nestjs/common';
import { Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { HTTP } from '@common/http';

@Injectable()
export class RpcValidationPipe extends HTTP implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.validateMetaType(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const filterErrors = errors.flatMap(err => {
        if (err.children.length !== 0)
          return err.children.flatMap(err =>
            err.children.flatMap(err => Object.values(err.constraints)),
          );
        return Object.values(err.constraints);
      });
      this.error(filterErrors);
    }

    return value;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private validateMetaType(metatype: Function): boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
