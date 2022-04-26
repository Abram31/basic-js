const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if(s1 && s2) {
    let current = 0;
    debugger;
    let arr1 = s1.split('')
    s2.split('').forEach(item => {
      if (arr1.includes(item)) {
        current++;
        arr1.splice(arr1.indexOf(item), 1)
      }
    })
    return current
  } else {
    return 0
  }
}

module.exports = {
  getCommonCharacterCount
};
