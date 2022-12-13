import { MongoDBClient } from '@common/prisma/mongo_prisma_client';
import { MySQLClient } from '@common/prisma/mysql_prisma_client';
import { LooseObject } from '../interface';
export class PrismaQuery {
  protected connection: MySQLClient | MongoDBClient;
  protected _select: any = {};
  protected _from: string[] = [];
  protected _join: any = {};
  protected _group: any = [];
  protected _group_id: any = [];
  protected _condition: any = [];
  protected _where: LooseObject = {
    _search_or: [],
    _filter_and: [],
  };
  protected _order: string[] = [];
  protected _limit: any;
  protected _skip: any;
  protected params: LooseObject = {};

  public constructor(connection: MySQLClient | MongoDBClient) {
    this.connection = connection;
  }

  public reset(key: string) {
    if (typeof key === 'string') {
      switch (key) {
        case 'select':
          this._select = {};
          break;

        case 'condition':
          this._condition = [];
          break;

        case 'where':
          this._where['_search_or'] = [];
          this._where['_filter_and'] = [];
          break;

        case 'order':
          this._order = [];
          break;
      }

      return this;
    }

    return this;
  }

  public resetAll() {
    this._select = {};
    this._condition = [];
    this._where['_search_or'] = [];
    this._where['_filter_and'] = [];
    this._order = [];

    return this;
  }

  public select(statement: string | string[]) {
    (Array.isArray(statement) ? statement : [statement]).forEach(statement =>
      this._select.push(statement),
    );

    return this;
  }

  public join(statement: string | string[]) {
    (Array.isArray(statement) ? statement : [statement]).forEach(statement =>
      this._join.push(statement),
    );

    return this;
  }
  public where(statement: string | [] | LooseObject) {
    (Array.isArray(statement) ? statement : [statement]).forEach(statement =>
      this._condition.push(statement),
    );

    return this;
  }

  public whereSearch(statement: string | [] | LooseObject) {
    (Array.isArray(statement) ? statement : [statement]).forEach(statement =>
      this._where['_search_or'].push(statement),
    );
    return this;
  }
  public whereFilter(statement: string | [] | LooseObject) {
    Array.isArray(statement) ? statement : [statement];
    this._where['_filter_and'] = statement;

    return this;
  }

  public order_by = (statement: string | string[]) => {
    (Array.isArray(statement) ? statement : [statement]).forEach(statement =>
      this._order.push(statement),
    );
    return this;
  };

  public async toRawPrismaDb() {
    const queryFinalActive: any = {};
    const queryFinal: string[] = [];
    const orderBy: any = [];
    if (this._condition) {
      this._condition.forEach((item: any = {}) => {
        queryFinal.push(item);
      });
    }

    if (this._where) {
      const obj1: any = {};
      const obj2: any = {};
      const obj3: any = {};
      if (
        this._where['_search_or'].length > 0 &&
        this._where['_filter_and'].length === 0
      ) {
        obj1['OR'] = this._where['_search_or'];
        queryFinal.push(obj1);
      }

      if (
        this._where['_filter_and'].length > 0 &&
        this._where['_search_or'].length === 0
      ) {
        const arr: any = [];
        this._where['_filter_and'].forEach((item: any) => {
          arr.push(JSON.parse(item));
        });
        obj1['OR'] = arr;
        queryFinal.push(obj1);
      }

      if (
        this._where['_search_or'].length > 0 &&
        this._where['_filter_and'].length > 0
      ) {
        const arr: any = [];
        this._where['_filter_and'].forEach((item: any) => {
          arr.push(JSON.parse(item));
        });

        obj1['OR'] = this._where['_search_or'];
        obj2['OR'] = arr;
        obj3['AND'] = [obj1, obj2];
        queryFinal.push(obj3);
      }
    }

    if (this._order.length) {
      const arr: any = [];
      this._order.forEach((item: any) => {
        arr.push(JSON.parse(item));
      });
      orderBy.push(arr);
    }
    queryFinalActive['AND'] = queryFinal;
    this.resetAll();
    return { order: orderBy[0], where: queryFinalActive };
  }
}
