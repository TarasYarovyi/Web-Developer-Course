function callWithContext(fn, context, ...args) {
  return fn.call(context, ...args);
}
const circle = {
  radius: 7,
  calculateCircumference: function () {
    return 2 * Math.PI * this.radius;
  },
};
const circumference = callWithContext(circle.calculateCircumference, circle);
