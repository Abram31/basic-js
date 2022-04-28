const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let regexp = /\d\d[-]\d[A-z][-]\d\d[-]\d\d[-]\d\d[-][A-z]\d/
  let regexp1 = /[A-z][A-z][-][A-z][A-z][-][A-z][A-z][-][A-z][A-z][-][A-z][A-z][-][A-z][A-z]/

  return regexp1.test(n) ||regexp.test(n) 
}
module.exports = {
  isMAC48Address
};
