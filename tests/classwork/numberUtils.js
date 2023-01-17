const {DivisionByZeroError, UnsupportedTypeError} = require('../../errors');
const {divide} = require('../../classwork/test');

describe('divide', () => {
  it('should return 1 when 2 is divide by 2', ()=> {
    expect(divide(2, 2)).toBe(1);
  });

  it('should return 2 when 4 is divide by 2', ()=> {
    expect(divide(4, 2)).toBe(2);
  });

  it('should throw unsupported typw error when \'a\' is divide by 0', ()=> {
    expect(() => {divide('a', 0)}).toThrow(UnsupportedTypeError);
  });

  it('should throw error when 2 is divide by 0', ()=> {
    expect(() => {divide(2, 0)}).toThrow(DivisionByZeroError);
  });
})
