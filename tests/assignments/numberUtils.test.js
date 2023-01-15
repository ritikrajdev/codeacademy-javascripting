const {createTestsForFunction} = require('../testUtility');
const {checkAllDigitSame, checkAllDigitSameArrow} = require('../../assignments/numberUtils');

const checkAllDigitSameTestcases = [
	{
		listOfargs: [22],
		testCaseDescription: '22 has all digits same',
		ans: true
	},
	{
		listOfargs: [23],
		testCaseDescription: '23 does not have all digits same',
		ans: false
	},
];

createTestsForFunction(checkAllDigitSame, checkAllDigitSameTestcases);
createTestsForFunction(checkAllDigitSameArrow, checkAllDigitSameTestcases);

