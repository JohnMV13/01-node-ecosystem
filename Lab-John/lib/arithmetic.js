const math = {};
module.exports = math;
math.add = function(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  } else {
    return a + b;
  }
}
math.sub = function(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  } else {
    return a - b;
  }
}