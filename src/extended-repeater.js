const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  debugger
  let { repeatTimes = 1, separator = '+', addition =  '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  if (addition === null) {
    addition = 'null'
  } 
  let arr = [str];
  let newAdittion = []
  let newArr = []

  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      newAdittion.push(addition);
      if (j == additionRepeatTimes - 1) {
        newArr.push(arr[0] + newAdittion.join(additionSeparator))
        newAdittion = [];
      }
    }

  }
  return newArr.join(separator);

}

// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));
module.exports = {
  repeater
};
