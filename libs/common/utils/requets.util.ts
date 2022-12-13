// import { ID_SPLIT } from '@apps/projects/src/projects.common';
import { HTTP } from '@common/http';
import { HttpStatus } from '@nestjs/common';
import { PaginationQueryDto } from '../dto';
import { Pagination } from '../types';
import { PrismaQuery } from './dto/query.prisma';
import { isKeyQueryValid } from './validates/key-query.util';

export type RESTfulParams = {
  list?: {
    dateScope?: string[];
    filterFields?: string[];
    searchFields?: string[];
    orderFields?: string[];
  };
  item?: {
    idParam?: string;
    defaultSystemFields?: boolean;
    created_date?: string;
    created_by?: string;
    modified_date?: string;
    modified_by?: string;
  };
};

export abstract class RESTfulService extends HTTP {
  protected params: RESTfulParams = {};
  protected abstract getDb(): PrismaQuery;
  protected async getLists(params: PaginationQueryDto): Promise<Pagination> {
    const queryDb = this.getDb();
    const paginationParams: Pagination = {
      skip: 0,
      take: 10,
      sort: [],
      search: [],
      cursor: 0,
    };
    const { page, limit, order, q } = params;

    // Check limit
    if (!isKeyQueryValid(limit || '-1', /^(-*)\d+$/g)) {
      throw this.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'limit value must be the number',
      );
    }

    // Check page
    if (!isKeyQueryValid(page || '1', /^\d+$/g)) {
      throw this.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'page value must be the positive number',
      );
    }

    // Check order
    if (
      !isKeyQueryValid(
        order || 'createdDate asc',
        /^((\w+ \w+)(,(\w+ \w+))*)+$/g,
      )
    ) {
      throw this.setHttpRequest(
        HttpStatus.BAD_REQUEST,
        'order value is not valid',
      );
    }

    let _limit = parseInt(limit);
    let _page = parseInt(page);

    if (_page < 1) {
      _page = 1;
    }

    if (_limit === -1) {
      _limit = 0;
    } else if (_limit < 1) {
      _limit = 10;
    }

    const offset = (_page - 1) * _limit;
    paginationParams.skip = offset ? offset : 0;
    paginationParams.take = _limit ? _limit : undefined;

    if (params?.startId) {
      paginationParams.skip = 1;
      paginationParams.cursor = params.startId
        ? parseInt(params.startId.toString())
        : 0;
    }

    // Xử lý search with prefix q in database
    const searchFields = this.params.list?.searchFields;
    if (q && searchFields?.length) {
      const orWhere: any = [];
      for (let field of searchFields) {
        const obj1: any = {};
        const obj2: any = {};

        if (field.includes('int-')) {
          field = field.split('-')[1];
          obj1['in'] = isNaN(parseInt(q)) ? undefined : parseInt(q);
        } else if (field.includes('float-')) {
          field = field.split('-')[1];
          obj1['in'] = isNaN(parseFloat(q)) ? undefined : parseFloat(q);
        } else {
          obj1['contains'] = q;
        }
        obj2[field] = obj1;
        orWhere.push(obj2);
      }
      if (orWhere.length) {
        queryDb.whereSearch(orWhere);
      }
    }

    // Xử lý filer with prefix [f]_[field]=test|hung in database]
    const filterFields = this.params.list?.filterFields;
    if (filterFields?.length) {
      const orWhereMulti: any = [];
      for (const field of filterFields) {
        const hasAlias = field.indexOf('.') !== -1;
        const fieldValue =
          params[`f_${hasAlias ? field.split('.')[1] : field}`];
        if (fieldValue) {
          const obj: any = {};
          if (fieldValue.indexOf('|') === -1) {
            if (field.includes('Id') || field.includes('id')) {
              obj[field] = parseInt(`${fieldValue}`);
            } else {
              obj[field] = `${fieldValue}`;
            }
            orWhereMulti.push(JSON.stringify(obj));
          } else {
            fieldValue.split('|').map(item => {
              if (field.includes('Id') || field.includes('id')) {
                obj[field] = parseInt(item);
              } else {
                obj[field] = item;
              }
              orWhereMulti.push(JSON.stringify(obj));
            });
          }
        }
      }

      if (orWhereMulti.length) {
        queryDb.whereFilter(orWhereMulti);
      }
    }

    // Xử lý orderFileds with prefix order=name asc, serialNumber desc in database]

    const orderFields = this.params?.list?.orderFields;
    if (order && orderFields?.length) {
      for (const o of order.split(/\s*,\s*/g)) {
        const _sort: any = {};

        let [ordering, direction] = o.split(/\s+/g);
        direction = direction.toLowerCase();

        if (!['asc', 'desc'].includes(direction)) {
          direction = 'asc';
        }

        if (ordering && orderFields.includes(ordering)) {
          _sort[ordering] = direction;
          queryDb.order_by(JSON.stringify(_sort));
        }
      }
    }

    const resultQuery = await queryDb.toRawPrismaDb();
    paginationParams.sort = resultQuery?.order;
    paginationParams.search = resultQuery?.where;
    // queryDb.reset();
    return paginationParams;
  }
}
