const missingNumber = (arr) => {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return totalSum - arrSum;
};
console.log(missingNumber([1, 3, 4, 5, 6]));
