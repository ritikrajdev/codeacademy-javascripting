const {UnsupportedTypeError} = require('../errors');

const doubleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new UnsupportedTypeError('this datatype of input is not supported');
  }

  if (!numbers.every(num => Number.isFinite(num))) {
    throw new UnsupportedTypeError('this datatype of input is not supported');
  }

  return numbers.map(num => 2 * num);
};

module.exports = {doubleNumbers};
