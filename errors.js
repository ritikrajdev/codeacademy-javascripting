class UnsupportedTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnsupportedTypeError';
  }
}

class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DivisionByZeroError ';
  }
}

module.exports = {
  UnsupportedTypeError,
  DivisionByZeroError
};
