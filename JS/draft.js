function mutiplyArr(arr, multiplier) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= multiplier;
  }
}
const tab = [1, 2, 3, 4, 5, 6, 7];
mutiplyArr(tab, 3);
console.log(tab);
