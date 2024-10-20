// Search in Binary Sorted Array
const binarySearch = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    }
    if (item > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));

// Search in Rotated sorted array
const searchInRSA = (arr, item) => {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === item) {
      return mid;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= item && item <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= item && item <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

console.log(searchInRSA([7, 8, 9, 1, 2, 3, 4, 5, 6], 6)); //8
