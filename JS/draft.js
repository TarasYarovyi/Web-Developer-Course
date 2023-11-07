function createCounter() {
  let value = 0;
  return {
    increment: function () {
      value++;
    },
    getValue: function () {
      return value;
    },
  };
}
const count = createCounter();
count.increment();
count.increment();
count.increment();
console.log(count.getValue());
