const reverseWords = (str) => {
  const splitStrArr = str.split(" ");
  const reverseArray = [];
  for (let i = splitStrArr.length - 1; i >= 0; i--) {
    reverseArray.push(splitStrArr[i]);
  }
  return reverseArray.join(" ");
};
// console.log(reverseWords("This is javascript language")); //language javascript is This

const reverseWords2 = (str) => {
  const splitStrArr = str.split(" ");
  const reverseArray = [];
  for (let i = 0; i < splitStrArr.length; i++) {
    reverseArray.push(splitStrArr[i].split("").reverse().join(""));
  }
  return reverseArray.join(" ");
};
console.log(reverseWords2("This is javascript language")); //sihT si tpircsavaj egaugnal
