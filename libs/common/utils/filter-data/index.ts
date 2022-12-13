const getNestedObjectValue = (obj: any, fields: string[]) => {
  for (const field of fields) {
    obj[field] = obj[field]?.map((data: any) => Object.values(data)[0]);
  }
  return obj;
};

export const removeRedundant = (target: any, fields: string[]) => {
  if (!target?.length) {
    return getNestedObjectValue(target, fields);
  }

  return target?.map((item: any) => {
    return getNestedObjectValue(item, fields);
  });
};

export const removeObjectProperties = (target: any, fields: string[]) => {
  for (const field of fields) {
    delete target[field];
  }
  return target;
};
