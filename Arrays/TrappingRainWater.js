const findMaxTrap = (arr) => {
  let [leftMax, rightMax, total, left, right] = [0, 0, 0, 0, arr.length - 1];
  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (leftMax > arr[left]) {
        total += leftMax - arr[left];
      } else {
        leftMax = arr[left];
      }
      left++;
    } else {
      if (rightMax > arr[right]) {
        total += rightMax - arr[right];
      } else {
        rightMax = arr[right];
      }
      right--;
    }
  }
  return total;
};
console.log(findMaxTrap([3, 0, 1, 0, 4, 0, 2]));
