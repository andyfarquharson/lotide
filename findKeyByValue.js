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
const findKeyByValue = function(object, value) {
  for (key in object) {
    if (object[key] === value) {
      // console.log(value);
      return key
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);