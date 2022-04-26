const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  debugger
  if (Array.isArray(arr)) {

    let newArr = [...arr]

    let result = [];

    newArr.forEach((num, index) => {
      if (num == '--discard-next') {
        delete newArr[index + 1]
      }
      else if (num == '--discard-prev') {
        if (result[index - 1] == newArr[index - 1]) {
          delete result[index - 1]
        }
        delete newArr[index - 1]


      }
      else if (num == '--double-next') {
        if (newArr[index + 1] != undefined) {
          result.push(newArr[index + 1])
        }

      }
      else if (num == '--double-prev') {
        if (newArr[index - 1] != undefined)
          result.push(newArr[index - 1])

      } else if (num != undefined) {
        result.push(num)
      }
    })
    let resultfinish = result.filter(item => item != undefined)
    return resultfinish;
  } else { throw new Error("'arr' parameter must be an instance of the Array!") }

}
module.exports = {
  transform
};
