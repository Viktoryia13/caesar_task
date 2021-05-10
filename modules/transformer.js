const { Transform } = require('stream');
const { encode, decode } = require('./caesar');

class Transformer extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = +shift;
    this.result = '';
  }

  _transform(chunk, encoding, callback) {
    const text = chunk.toString('utf8');
   
    if (this.action === 'encode') {
        this.result = encode(text, this.shift)
    }

    if (this.action === 'decode') {
        this.result = decode(text, this.shift)
    }

    this.push(this.result);
    callback();
  }
}

module.exports = Transformer;