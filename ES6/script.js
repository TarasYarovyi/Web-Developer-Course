function time1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
}
function time2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 2000);
  });
}
function time3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 3000);
  });
}

async function order() {
  time3().then(time2).then(time1);
}
order();

async function test() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("test1");
      resolve();
    }, 8000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("test2");
      resolve();
    }, 7000);
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("test3");
      resolve();
    }, 6000);
  });
}

test();
