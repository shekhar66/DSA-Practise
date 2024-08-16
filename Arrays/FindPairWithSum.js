const findPairWithGivenSum = (arr, sum) => {
  const results = new Set();
  const finalResults = [];
  for (let i = 0; i < arr.length; i++) {
    let compliment = sum - arr[i];
    if (results.has(compliment)) {
      finalResults.push([compliment, arr[i]]);
    }
    results.add(arr[i]);
  }
  return finalResults;
};
console.log(findPairWithGivenSum([1, 2, 3, 10, 5, 6, 3, 2, 6, 8, 4], 12));
