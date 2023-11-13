function test1({ b = 1, a = 2 } = {}) {
  console.log(a);
  console.log(b);
}
test1();
