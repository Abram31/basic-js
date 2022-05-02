const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.result;
  }

  get crypt () {
    if(this.reverse) {
      return this.result
    } else { return this.result.split('').reverse().join('') }
  }
  encrypt(string, k) {
     debugger
    if (string && k) {

    let key = k.toLowerCase()
    let originalString = string.split('').filter(item => item.toLowerCase().charCodeAt() >= 97 && item.toLowerCase().charCodeAt() <= 122).join('').toLowerCase()
    let result = "";
    for (let i = 0; i < originalString.length; i++) {
      if (originalString[i].charCodeAt() <= 122 && originalString[i].charCodeAt() >= 97) {
        let numberOriginal = originalString[i].toLowerCase().charCodeAt()
        let numberKey = key[i]?.charCodeAt() != undefined ? key[i].charCodeAt() : key[Math.abs(key.length * Math.floor((i) / key.length) - (i))].charCodeAt()

        let newNumber = numberKey - 97 + numberOriginal
        if (newNumber > 122) {
          newNumber = 97 + (newNumber - 123)
        }

        result += String.fromCharCode(newNumber).toUpperCase()
      } else {
        result += originalString[i]
      }

    }

    string.split('').forEach((element, index) => {
      if (element.toLowerCase().charCodeAt() < 97 || element.toLowerCase().charCodeAt() > 122) {
        let arr = result.split('')
        arr.splice(index, 0, element)
        result = arr.join('')
      }
    });

    this.result = result
    return this.crypt
    } else { throw new Error("Incorrect arguments!") }

  }
  decrypt(string, k) {
    debugger
    if (string && k) {

      let crypt = string.split('').filter(item => item.toLowerCase().charCodeAt() >= 97 && item.toLowerCase().charCodeAt() <= 122).join('').toLowerCase()
      let key = k.toLowerCase()
      let result = ""
      for (let i = 0; i < crypt.length; i++) {
        if (crypt[i].charCodeAt() <= 122 && crypt[i].charCodeAt() >= 97) {
          let numberCrypt = crypt[i].toLowerCase().charCodeAt()
          let numberKey = key[i]?.charCodeAt() != undefined ? key[i].charCodeAt() : key[Math.abs(key.length * Math.floor((i) / key.length) - (i))].charCodeAt()

          let newNumber = numberCrypt + (97 - numberKey)
          if (newNumber < 97) {
            newNumber = 123 + (newNumber - 97)
          }

          result += String.fromCharCode(newNumber).toUpperCase()
        } else {
          result += crypt[i]
        }

      }
      string.split('').forEach((element, index) => {
        if (element.toLowerCase().charCodeAt() < 97 || element.toLowerCase().charCodeAt() > 122) {
          let arr = result.split('')
          arr.splice(index, 0, element)
          result = arr.join('')
        }
      });
      this.result = result
      return this.crypt
    } else { throw new Error ("Incorrect arguments!") }

  }
}

module.exports = {
  VigenereCipheringMachine
};
