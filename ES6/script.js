async function* generator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
  yield await Promise.resolve(4);
}

let dataIter = generator();
dataIter.next().then((v) => console.log(v.value)); //1
dataIter.next().then((v) => console.log(v.value)); //2
dataIter.next().then((v) => console.log(v.value)); //3
dataIter.next().then((v) => console.log(v.value)); //4

//or
async function iterateGenerator() {
  let dataIter2 = generator();
  for await (let value of dataIter2) {
    console.log(value);
  }
}

iterateGenerator();
