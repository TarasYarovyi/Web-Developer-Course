function prependNumbers(arr) {
  for (let i = arr[0] - 1; i >= 0; i--) {
    arr.unshift(i);
  }
  return arr;
}
