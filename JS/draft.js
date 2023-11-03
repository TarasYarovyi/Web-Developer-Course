function convertToWrapper(prim) {
  if (typeof prim === "string") {
    prim = new String(prim);
  } else if (typeof prim === "number") {
    prim = new Number(prim);
  } else if (typeof prim === "boolean") {
    prim = new Boolean(prim);
  }
  return prim;
}
