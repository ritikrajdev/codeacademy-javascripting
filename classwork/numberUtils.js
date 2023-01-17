const {UnsupportedTypeError, DivisionByZeroError} = require('../errors');

const divide = (dividend, divisor) => {
  if (!Number.isFinite(divisor) || !Number.isFinite(dividend))
    throw new UnsupportedTypeError('dividend or divisor is not a number'); 

  if (divisor === 0)
    throw new DivisionByZeroError('divisor is 0');

  return dividend / divisor;
}

// const divideByZero = (x) => x/0
// console.log(divideByZero(2))

module.exports = {
  divide
};
