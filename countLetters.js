const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐸🐸🐸 Assertation Passed: ${actual} === ${expected}`);
  } else
    console.log(`🍄🍄🍄 Assertation Failed: ${actual} !== ${expected}`);
};
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Farquharson", "Farquharson");
// assertEqual(45, 4.5);

const countLetters = function(sentence) {
  let results = {};
  // sentence = sentence.replace(" ", "");
  for (const char of sentence) {
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

const result1 = countLetters("LHL LHL");
const result2 = countLetters("Hello World");
console.log(countLetters(result2));
assertEqual(result1["L"], 4);
assertEqual(result1["H"], 2);
assertEqual(result1["a"], 1);