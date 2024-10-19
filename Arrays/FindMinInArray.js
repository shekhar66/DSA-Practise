const findMin = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // min = Math.min(min, arr[i]);
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};
console.log(findMin([5, 9, 2, -1, -100, 3, 122, 22, 2])); // -100
