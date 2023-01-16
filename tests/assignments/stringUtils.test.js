const {createTestsForFunction} = require('../testUtility');
const {changeCaptialization, changeCaptializationArrow, endsWithScript,  endsWithScriptArrow, countVowels, countVowelsArrow, encryptCaesarCipherKey1, encryptCaesarCipherKey1Arrow} = require('../../assignments/stringUtils');

const changeCaptializationTestcases = [
  {
    listOfargs: ['MeRRy hAD a LITTle lAMp'],
    testCaseDescription:  '"MeRRy hAD a LITTle lAMp" -> "mErrY Had A littLE LamP"',
    ans: 'mErrY Had A littLE LamP'
  },
];

createTestsForFunction(changeCaptialization, changeCaptializationTestcases);
createTestsForFunction(changeCaptializationArrow, changeCaptializationTestcases);


const endsWithScriptTestCases = [
  {
    listOfargs: ['javaScript'],
    testCaseDescription:  'javaScript ends with Script',
    ans: true
  },
  {
    listOfargs: ['javascript'],
    testCaseDescription:  'javascript does not end with Script',
    ans: false
  },
];

createTestsForFunction(endsWithScript, endsWithScriptTestCases);
createTestsForFunction(endsWithScriptArrow, endsWithScriptTestCases);


const countVowelsTestcases = [
  {
    listOfargs: ['codeacademy'],
    testCaseDescription:  'codeacademy has  5 vowels',
    ans: 5
  },
];

createTestsForFunction(countVowels, countVowelsTestcases);
createTestsForFunction(countVowelsArrow, countVowelsTestcases);


const encryptCaesarCipherKey1TestCases = [
  {
    listOfargs: ['codeacademy'],
    testCaseDescription:  'codeacademy encoded to dpefbdbefnz',
    ans: 'dpefbdbefnz'
  },
  {
    listOfargs: ['lazyinterns'],
    testCaseDescription: 'lazyinterns encoded to mbazjoufsot',
    ans: 'mbazjoufsot'
  },
];

createTestsForFunction(encryptCaesarCipherKey1, encryptCaesarCipherKey1TestCases);
createTestsForFunction(encryptCaesarCipherKey1Arrow, encryptCaesarCipherKey1TestCases);

