const countLetters = sentence => {
  let results = {};
  for (char of sentence) {
    if (char === ' '){
    continue;
    }
    // console.log(char);
    if (!results[char]) {
      results[char] = 0;
    } 
    results[char]++;
  }
  return results;
};

module.exports = countLetters;