const {UnsupportedTypeError} = require('../errors');

const isArrayOfNumbers = (numbers) => Array.isArray(numbers) && numbers.every(num => Number.isFinite(num));

const nTimesNumber = (numbers, multiplier = 2) => {
  if (!Number.isFinite(multiplier) || !isArrayOfNumbers(numbers)) {
    throw new UnsupportedTypeError('this datatype is not supported');
  }

  return numbers.map(num => multiplier * num);
};

const filterEvenNumbers = (numbers) => {
  if (!isArrayOfNumbers(numbers)) {
    throw new UnsupportedTypeError('this datatype is not supported');
  }

  return numbers.filter(num => num % 2 === 0);
};

// const nTimesAndFilterEven = (numbers, multiplier=3) => {
//   const nTimesNumbers = nTimesNumber(numbers, multiplier);
//   return filterEvenNumbers(nTimesNumbers);
// }

const nTimesAndFilterEven = (numbers, multiplier = 3) => {
  if (!Number.isFinite(multiplier) || !isArrayOfNumbers(numbers)) {
    throw new UnsupportedTypeError('this datatype is not supported');
  }

  return numbers.reduce((evenFilteredList, number) => {
    if ((number * multiplier) % 2 === 0) evenFilteredList.push(number * multiplier);
    return evenFilteredList;
  }, []);
}


module.exports = {nTimesNumber, filterEvenNumbers, nTimesAndFilterEven};
