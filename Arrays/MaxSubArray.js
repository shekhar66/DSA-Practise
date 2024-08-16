const maxSubArray = (arr) => {
  let maxSum = -Infinity;
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum = Math.max(arr[i], curSum + arr[i]);
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
