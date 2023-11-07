function add(x) {
  return function (y) {
    return x + y;
  };
}

const result = add(5);
console.log(result(10));
