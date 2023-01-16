const {UnsupportedTypeError} = require('../errors');

const isArrayOfNumbers = (numbers) => Array.isArray(numbers) && numbers.every(num => Number.isFinite(num));

const nTimesNumber = (numbers, multiplier=2) => {
  if (!Number.isFinite(multiplier) || !isArrayOfNumbers(numbers)) {
    throw new UnsupportedTypeError('this datatype is not supported');
  }

  return numbers.map(num => multiplier * num);
};

const filterEvenNumbers = (numbers) =>{
  if (!isArrayOfNumbers(numbers)) {
    throw new UnsupportedTypeError('this datatype is not supported');
  }

  return numbers.filter(num => num % 2 === 0);
};

module.exports = {nTimesNumber, filterEvenNumbers};
