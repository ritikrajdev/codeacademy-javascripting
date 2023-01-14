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
}

