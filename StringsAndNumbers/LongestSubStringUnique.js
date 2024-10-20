const longestSubString = (str) => {
  const n = str.length;
  let [left, right, maxLength] = [0, 0, 0];
  const filledArray = new Array(256).fill(-1);
  while (right < n) {
    // Check if the current character is already present in stack
    if (filledArray[str.charCodeAt(right)] !== -1) {
      // Update left only if exisiting char value is greater than left
      if (filledArray[str.charCodeAt(right)] >= left) {
        left = filledArray[str.charCodeAt(right)] + 1;
      }
    }
    maxLength = Math.max(maxLength, right - left + 1);
    filledArray[str.charCodeAt(right)] = right;
    right++;
  }
  return maxLength;
};
console.log(longestSubString("geeksforgeeks")); //7
