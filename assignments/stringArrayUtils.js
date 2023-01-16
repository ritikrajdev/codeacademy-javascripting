// Q4
function maxLengthString(arrayOfString) {
  let maximumLengthString = '';
  arrayOfString.forEach(string => string.length > maximumLengthString.length ? maximumLengthString = string : null);
  return maximumLengthString;
}


const maxLengthStringArrow = (arrayOfString) => {
  let maximumLengthString = '';
  arrayOfString.forEach(string => string.length > maximumLengthString.length ? maximumLengthString = string : null);
  return maximumLengthString;
};

// Q7
function concatWithoutFirstCharacter(arrayOfStrings) {
  let concatenatedString = '';
  arrayOfStrings.forEach(string => {
    concatenatedString += string.slice(1);
  });
  return concatenatedString;
}

const concatWithoutFirstCharacterArrow = (arrayOfStrings) => {
  let concatenatedString = '';
  arrayOfStrings.forEach(string => {
    concatenatedString += string.slice(1);
  });
  return concatenatedString;
};

module.exports = {
  maxLengthString,
  maxLengthStringArrow,

  concatWithoutFirstCharacter,
  concatWithoutFirstCharacterArrow
};
