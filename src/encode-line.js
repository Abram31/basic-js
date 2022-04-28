const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current = 1;
  let result = [];
  for (let i=0; i<str.length; i++) {
    if (str[i] == str[i+1]) {
      current++
    }
    if (str[i] != str[i + 1]) {
      if (current == 1) {
        result.push(`${str[i]}`)

      } else {
        result.push(`${current}${str[i]}`)

      }
      current=1;
    }
  }
  return result.join('')
}

module.exports = {
  encodeLine
};
