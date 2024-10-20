const vowelsAndConsonants = (str) => {
  let [vowels, consonants] = [0, 0];
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(str.charAt(i))) {
      vowels++;
    } else {
      consonants++;
    }
  }
  console.log(`Vowels are : ${vowels} and Consonants are : ${consonants}`);
};
console.log(vowelsAndConsonants("ReddisekharReddy"));
