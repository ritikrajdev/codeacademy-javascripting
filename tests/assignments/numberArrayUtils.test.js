const {createTestsForFunction} = require('../testUtility');
const {largestEvenNumber, largestEvenNumberArrow} = require('../../assignments/numberArrayUtils.js');

const largestEvenNumberTestcases = [
  {
    listOfargs: [[1, 2, 3, 4, 5]],
    testCaseDescription: 'largest even number in 1-5 is 4',
    ans: 4
  },
  {
    listOfargs: [[1, 3, 5, 7]],
    testCaseDescription: 'largest even number in 1,3,5,7 is -1 ',
    ans: -1
  },
];

createTestsForFunction(largestEvenNumber, largestEvenNumberTestcases);
createTestsForFunction(largestEvenNumberArrow, largestEvenNumberTestcases);

