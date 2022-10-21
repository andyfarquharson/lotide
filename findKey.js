const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐸🐸🐸 Assertation Passed: ${actual} === ${expected}`);
  } else
    console.log(`🍄🍄🍄 Assertation Failed: ${actual} !== ${expected}`);
}
const findKey = (object, callback) => {
  // output = [];
  for (x in object) {
    // console.log(callback(object[x]));
    if (callback(object[x])) {
    return x;
    } 
  } 
  return undefined;
}

results = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 },
}, x => x.stars === 2));

console.log(assertEqual(results, 'noma'))
