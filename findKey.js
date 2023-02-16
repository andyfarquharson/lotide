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

module.exports = findKey;
