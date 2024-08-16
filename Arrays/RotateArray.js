const reverseArray = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};
const RotateArray = (arr, k) => {
  k = k % arr.length;
  arr.reverse();
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  return arr;
};
console.log(RotateArray([1, 2, 3, 4, 5], 2));
