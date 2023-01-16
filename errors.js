class UnsupportedTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnsupportedTypeError';
  }
}

module.exports = {
  UnsupportedTypeError
};
