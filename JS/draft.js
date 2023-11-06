function addPropertyUsingDefineProperty(
  obj,
  propName,
  propValue,
  writable = false,
  enumerable = false
) {
  Object.defineProperty(obj, propName, {
    value: propValue,
    writable: writable,
    enumerable: enumerable,
  });
  return obj;
}
