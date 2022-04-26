const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new NotImplementedError('Not implemented');

  let result = {
    seconds: 0,
    turns: 3,
  };
  if (disksNumber === 1) {
    result.turns = 2;
  } else if (disksNumber === 2) {
    result.turns = 3;
  } else {
    for (let i = 2; i < disksNumber; i++) {
      result.turns = result.turns * 2 + 1
    }
  }

  result.seconds = Math.floor(3600 / turnsSpeed * result.turns);

  return result;
}


module.exports = {
  calculateHanoi
};
