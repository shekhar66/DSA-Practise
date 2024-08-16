var containsDuplicate = function (nums) {
  const res = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (res.has(nums[i])) {
      return true;
    }
    res.add(nums[i]);
  }
  return false;
};
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
