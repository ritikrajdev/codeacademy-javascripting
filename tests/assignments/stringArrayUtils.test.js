const {createTestsForFunction} = require('../testUtility');
const {maxLengthString, maxLengthStringArrow, concatWithoutFirstCharacter, concatWithoutFirstCharacterArrow} = require('../../assignments/stringArrayUtils');

const maxLengthStringTestcases = [
  {
    listOfargs: [['we', 'love', 'code', 'academy']],
    testCaseDescription: 'from we,love,code,academy - academy is the longest one.',
    ans: 'academy'
  },
];

createTestsForFunction(maxLengthString,maxLengthStringTestcases);
createTestsForFunction(maxLengthStringArrow,maxLengthStringTestcases);


const concatWithoutFirstCharacterTestCases = [
  {
    listOfargs: [['code', 'academy']],
    testCaseDescription: 'code and academy when concatenated without first char gives odecademy',
    ans: 'odecademy'
  },
];

createTestsForFunction(concatWithoutFirstCharacter, concatWithoutFirstCharacterTestCases);
createTestsForFunction(concatWithoutFirstCharacterArrow, concatWithoutFirstCharacterTestCases);

