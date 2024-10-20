const reverseString = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};
console.log(reverseString("rahkehS"));

// Using Recursion

const reverse = (str) => {
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
};
console.log(reverse("rahkehS"));
