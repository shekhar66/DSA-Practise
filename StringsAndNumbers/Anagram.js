const Anagram = (s1, s2) => {
  const [s1Obj, s2Obj] = [{}, {}];
  for (let i = 0; i < s1.length; i++) {
    s1Obj[s1[i]] = s1Obj[s1[i]] ? s1Obj[s1[i]] + 1 : 1;
  }
  for (let i = 0; i < s2.length; i++) {
    s2Obj[s2[i]] = s2Obj[s2[i]] ? s2Obj[s2[i]] + 1 : 1;
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1Obj[s1[i]] !== s2Obj[s1[i]]) {
      return false;
    }
  }
  return true;
};
console.log(Anagram("anagram", "nagaram"));
