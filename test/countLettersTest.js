const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const result1 = countLetters("LHL LHL");
const result2 = countLetters("Hello World");
console.log(countLetters(result2));
assertEqual(result1["L"], 4);
assertEqual(result1["H"], 2);
assertEqual(result1["a"], 1);