export default function reverseArray(arr, left, right) {
  while (left < right) {
    [arr[right], arr[left]] = [arr[left], arr[right]];
    left++;
    right--;
  }
  return arr;
}
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array, 0, array.length - 1));
