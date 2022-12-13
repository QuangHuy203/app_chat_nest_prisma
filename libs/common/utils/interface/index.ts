export interface LooseObject {
  [key: string]: any;
}

export interface QueryRelationBase {
  alias: string;
  localField: string;
  referenceTable: string;
  referenceField: string;
  referenceFields: Array<string>;
  conditions: string | null;
}

export interface QueryRelationBridge {
  alias: string;
  localField: string;
  intermediateTable: string;
  intermediateField1: string;
  intermediateField2: string;
  referenceTable: string;
  referenceField: string;
  referenceFields: Array<string>;
  conditions: string | null;
}

export interface QueryPaginate {
  totalRows: number;
  page: number;
  limit: number;
  items: Array<LooseObject>;
}

export interface QueryRelations {
  belongsTo: QueryRelationBase[];
  hasMany: QueryRelationBase[];
  hasManyToMany: QueryRelationBridge[];
}
