const {UnsupportedTypeError} = require('../../errors');
const {nTimesNumber, filterEvenNumbers} = require('../../classwork/arrayUtils');

describe('Array utils', () => {
  describe('nTimesNumber', () => {
    it('Should through UnsupportedTypeError when input is not an array', () => {
      expect(() => {nTimesNumber('abc');}).toThrow(UnsupportedTypeError);
    });

    it('Should through UnsupportedTypeError when input is not an array of numbers', () => {
      expect(() => {nTimesNumber(['abc']);}).toThrow(UnsupportedTypeError);
    });

    it('Should through UnsupportedTypeError when multiplier is not a number', () => {
      expect(() => {nTimesNumber(['abc'], 'x');}).toThrow(UnsupportedTypeError);
    });

    it('Should return 2,4,6  when input is 1,2,3', () => {
      expect(nTimesNumber([1, 2, 3])).toEqual([2, 4, 6]);
    });

    it('Should return 3,6,9  when input is 1,2,3', () => {
      expect(nTimesNumber([1, 2, 3], 3)).toEqual([3, 6, 9]);
    });
  });

  describe('filterEvenNumbers', () => {
    it('Should through UnsupportedTypeError when input is not an array', () => {
      expect(() => {filterEvenNumbers('abc');}).toThrow(UnsupportedTypeError);
    });

    it('Should through UnsupportedTypeError when input is not an array of numbers', () => {
      expect(() => {filterEvenNumbers(['abc']);}).toThrow(UnsupportedTypeError);
    });

    it('Should return 2,4  when input is 1,2,3,4', () => {
      expect(filterEvenNumbers([1, 2, 3, 4])).toEqual([2, 4]);
    });
  });
});
