function updateNumberInArray(arr, index, value) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1, value);
  }
  return arr;
}
