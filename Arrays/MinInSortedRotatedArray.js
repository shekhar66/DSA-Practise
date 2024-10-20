const minInSortedArray = (arr) => {
  let [low, high, res] = [0, arr.length - 1, Infinity];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[low] <= arr[mid]) {
      res = Math.min(res, arr[low]);
      low = mid + 1;
    } else {
      res = Math.min(res, arr[mid]);
      high = mid - 1;
    }
  }
  return res;
};

console.log(minInSortedArray([4, 5, 6, 7, 2, 3])); //2
