const moveZeroToEnd = (arr) => {
  let nonZeroIndex = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
      nonZeroIndex++;
    }
  }
  return arr;
};
console.log(moveZeroToEnd([0, 3, 2, 0, 4, 0, 1, 2, 3]));
