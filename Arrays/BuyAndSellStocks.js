const maxProfit = (arr) => {
  let minSofar = arr[0];
  let res = 0;
  for (let i = 1; i < arr.length; i++) {
    minSofar = Math.min(minSofar, arr[i]);
    res = Math.max(res, arr[i] - minSofar);
    console.log(minSofar, res);
  }
  return res;
};

console.log(maxProfit([7, 10, 1, 3, 6, 9, 2])); //8
