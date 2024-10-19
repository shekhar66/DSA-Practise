const PAES = (arr) => {
  const n = arr.length;
  if (n === 1) {
    return [1];
  }
  let left = new Array(n).fill(1);
  let right = new Array(n).fill(1);
  let res = new Array(n).fill(1);

  // construct left array
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }
  // Construct right array
  for (j = n - 2; j >= 0; j--) {
    right[j] = right[j + 1] * arr[j + 1];
  }
  // combine left and right
  for (let i = 0; i < n; i++) {
    res[i] = left[i] * right[i];
  }
  return res;
};

console.log(PAES([10, 3, 5, 6, 2])); //[ 180, 600, 360, 300, 900 ]
