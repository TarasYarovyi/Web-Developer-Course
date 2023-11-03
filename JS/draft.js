function squaredNumbers(arr) {
  const newArr = [];
  arr.forEach((el) => newArr.push(el ** 2));
  return newArr;
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(squaredNumbers(array));
