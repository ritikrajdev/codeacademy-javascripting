// Q3
function changeCaptialization(string) {
  let inversedLetters = string.split('').map(char => char === char.toUpperCase() ? char.toLowerCase(): char.toUpperCase());
  return inversedLetters.join('');
}

const changeCaptializationArrow = (string) => {
  let inversedLetters = string.split('').map(char => char === char.toUpperCase() ? char.toLowerCase(): char.toUpperCase());
  return inversedLetters.join('');
};

// Q6
function endsWithScript(string) {
  return string.endsWith('Script');
}

const endsWithScriptArrow = (string) => string.endsWith('Script');


// Q7
function countVowels(string) {
  let numOfVowels = 0;
  string.split('').forEach(char => numOfVowels += 'aeiou'.includes(char));
  return numOfVowels;
}


const countVowelsArrow = (string) => {
  let numOfVowels = 0;
  string.split('').forEach(char => numOfVowels += 'aeiou'.includes(char));
  return numOfVowels;
};


// Q8
const asciiLowercase = 'abcdefghijklmnopqrstuvwxyz';
// const asciiUppercase = asciiLowercase.toUpperCase();

function encryptCaesarCipherKey1(string) {
  let individualEncodedChars = string.split('').map(char => asciiLowercase[(asciiLowercase.indexOf(char) + 1) % 26]);
  return individualEncodedChars.join('');
}

const encryptCaesarCipherKey1Arrow = (string) => {
  let individualEncodedChars = string.split('').map(char => asciiLowercase[(asciiLowercase.indexOf(char) + 1) % 26]);
  return individualEncodedChars.join('');
};


module.exports = {
  changeCaptialization,
  changeCaptializationArrow,

  endsWithScript,
  endsWithScriptArrow,

  countVowels,
  countVowelsArrow,

  encryptCaesarCipherKey1,
  encryptCaesarCipherKey1Arrow

};
