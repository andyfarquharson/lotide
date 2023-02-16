const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  
  for (key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
  
    } else if (typeof object1[key] === 'object' && typeof object2[key] ==='object') {
      if (!eqObjects(object1[key], object2[key])) {
      return false;
      } 
  
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
}
results = eqObjects({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1});
console.log(results);

console.log(object1.key);
module.exports = eqObjects;