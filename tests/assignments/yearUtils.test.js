const {createTestsForFunction} = require('../testUtility');
const {isLeapYear, isLeapYearArrow} = require('../../assignments/yearUtils');

const isLeapYearTestCases = [
	{
		listOfargs: [2000],
		testCaseDescription: '2000 is a leap year',
		ans: true
	},
];

createTestsForFunction(isLeapYear, isLeapYearTestCases);
createTestsForFunction(isLeapYearArrow, isLeapYearTestCases);

