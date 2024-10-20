const firstNonRepeated = (str) => {
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return "";
};
console.log(firstNonRepeated("shekhar"));
