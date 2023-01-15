// Q1
const isEven = num => num % 2 === 0

function largestEvenNumber(arrayOfNums) {
	let largestEvenNumber = -1;
	arrayOfNums.forEach(num => {
		isEven(num) ? largestEvenNumber = Math.max(largestEvenNumber, num) : null;
	});
	return largestEvenNumber;
}

const largestEvenNumberArrow = (arrayOfNums) => {
	let largestEvenNumber = -1;
	arrayOfNums.forEach(num => {
		isEven(num) ? largestEvenNumber = Math.max(largestEvenNumber, num) : null;
	});
	return largestEvenNumber;
}

module.exports = {
	largestEvenNumber,
	largestEvenNumberArrow
}
