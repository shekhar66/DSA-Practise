const swap = (a, b) => {
  b = b - a;
  a = a + b;
  b = a - b;
  console.log(a, b);
};
swap(1, 3);
