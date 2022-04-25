const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(namesArr) {
  if (Array.isArray(namesArr)) {

    let newTeameName = namesArr.map(name => {
      if (typeof name === 'string') {
        return name.trim()[0].toUpperCase()
      }
    });
    return newTeameName.sort().join('')
  } else {return false}
}

module.exports = {
  createDreamTeam
};
