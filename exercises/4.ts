const isString = (data: unknown) => {
  return typeof data === "string";
};

const isNumber = (data: unknown) => {
  return typeof data === "number";
};

const isArray = (data: unknown) => {
  return Array.isArray(data);
};

const isObject = (data: unknown) => {
  return typeof data === "object";
};

function processData(data: unknown): void {
  return console.log(
    isString(data)
      ? `${data} is string`
      : isNumber(data)
      ? `${data} is number`
      : isArray(data)
      ? `${data} is array`
      : isObject(data)
      ? `${data} is object`
      : `${data} is something else`
  );
}

processData("Hello, TypeScript!");
processData(12345);
processData([1, 2, 3, 4, 5]);
processData({ name: "Alice", age: 30 });
processData(null);
processData(undefined);

export {};
