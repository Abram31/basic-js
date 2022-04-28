const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
 let current = 0;
 matrix.forEach((arr,index) => {
   arr.forEach((number, index2) =>{
    if(index == 0) {
      current += number
    } else if (matrix[index - 1][index2] != 0) {
      current += number
    }
   } )
 })
 return current
}

module.exports = {
  getMatrixElementsSum
};
