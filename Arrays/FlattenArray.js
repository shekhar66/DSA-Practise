const flattenArray = (arr) => {
  return arr.reduce((flat, tobeFlatten) => {
    return flat.concat(
      Array.isArray(tobeFlatten) ? flattenArray(tobeFlatten) : tobeFlatten
    );
  }, []);
};
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8]]]]));
