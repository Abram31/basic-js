const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(link) {
    this.chain.push(`( ${link} )`)
    return this;
  },
  removeLink(position) {
    if (typeof position == 'number' && this.chain[position - 1]) {
      this.chain.splice([position - 1],1) ;
      return this;
    } else {
      this.chain =[]; 
      throw new Error("You can\'t remove incorrect link!") }


  },
  reverseChain() {
    this.chain.reverse()
    return this;


  },
  finishChain() {
    let result = this.chain.filter(item => item != undefined).join('~~')
    this.chain = [];
    return result
  }
};

module.exports = {
  chainMaker
};
