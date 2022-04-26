const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // console.log(date);
  if (date instanceof Date) {
    if (date.toString() == new Date().toString()) {
      throw new Error ("Invalid date!")
    } else {
      return date.getMonth() < 2 || date.getMonth() === 11 ? 'winter' : date.getMonth() < 5 ? 'spring' : date.getMonth() < 8 ? 'summer' : 'autumn'
    }
  } 

  else if (arguments.length == 0) {
    return "Unable to determine the time of year!"

  } else { throw new Error("Invalid date!") }

}

module.exports = {
  getSeason
};
