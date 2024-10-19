const findDuplicates = (arr) => {
  const res = [];
  const a = [];
  for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i])) {
      res.push(arr[i]);
    }
    a.push(arr[i]);
  }
  return [...new Set(res)];
};
console.log(findDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
