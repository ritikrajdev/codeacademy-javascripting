const {UnsupportedTypeError} = require('../../errors');
const {doubleNumbers} = require('../../classwork/arrayUtils');

describe('Array utils', () => {
  describe('doubleNumbers', () => {
    it('Should through UnsupportedTypeError when input is not an array', () => {
      expect(() => {doubleNumbers('abc');}).toThrow(UnsupportedTypeError);
    });

    it('Should through UnsupportedTypeError when input is not an array number', () => {
      expect(() => {doubleNumbers('abc');}).toThrow(UnsupportedTypeError);
    });

    it('Should return 2,4,6  when input is 1,2,3', () => {
      expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
    });
  });
});
