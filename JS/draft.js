function applyWithContext(fn, context, args) {
  return fn.apply(context, args);
}
const rectangle = {
  length: 10,
  width: 5,
  calculateArea: function () {
    return this.length * this.width;
  },
};
const area = applyWithContext(rectangle.calculateArea, rectangle);
