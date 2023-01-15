// could've only relied completely on json but isn't too usable in such small project

function createTestsForFunction(func, testcases, testDescription=undefined) {
	// 	testcases: [
	// 		{listOfargs, ans, testCaseDescription}
	// 	]

	if (!testDescription) {
		testDescription = `Test for ${func.name}`;
	}

	describe(testDescription, () => {
		testcases.forEach(({listOfargs, ans, testCaseDescription}) => {
			test(testCaseDescription, () => {
				expect(func(...listOfargs)).toBe(ans);
			});
		});
	});
}

module.exports = {
	createTestsForFunction
}
