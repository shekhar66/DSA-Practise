const CWMW = (arr) => {
  let [left, right, maxWater] = [0, arr.length - 1, 0];
  while (left < right) {
    // Find Current area
    // Either min of left height or right height * width(distance between right and left)
    const currentWater = Math.min(arr[left], arr[right]) * (right - left);
    maxWater = Math.max(maxWater, currentWater);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
};

console.log(CWMW([3, 1, 2, 4, 5])); //12
