const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  debugger
  let result = {}
  domains.forEach((adr, ind) => {
    let adress = adr.split('.').slice(0, -1).reverse().join('.')
    let index = adr.split('.').splice(-1, 1)

    for (key in result) {
      if (`.${index}.${adress}`.split('.').slice(2).includes(key.split('.').slice(2).join(''))) {
        result[key]++

      }
    }
    if (result[`.${index}`]) {
      result[`.${index}`]++
    } else {
      result[`.${index}`] = 1;
    }
    if (result[`.${index}.${adress}`]) {
      result[`.${index}.${adress}`]++
    } else {
      result[`.${index}.${adress}`] = 1;
    }

  })
  return result

}

module.exports = {
  getDNSStats
};
