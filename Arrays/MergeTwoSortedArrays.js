const merge = (arr1, arr2) => {
  let [i, j] = [0, 0];
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return [...new Set(result.concat(arr1.slice(i)).concat(arr2.slice(j)))];
};
console.log(merge([1, 3, 5, 7, 9], [1, 2, 4, 6, 8, 9]));
