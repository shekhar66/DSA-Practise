const duplicateChars = (str) => {
  str = str.toLowerCase();
  let res = "";
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (res.includes(str.charAt(i))) {
      output.push(str.charAt(i));
    } else {
      res += str.charAt(i);
    }
  }
  return output;
};
console.log(duplicateChars("Programming"));
