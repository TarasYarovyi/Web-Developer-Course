const d = 99;

function bar() {
  const e = 12;

  function test() {
    const num = 45;
    console.log(d, e, num);
  }
  return test;
}

const show = bar();
console.log(show);
show();
