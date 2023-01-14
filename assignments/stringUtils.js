// Q3
function changeCaptialization(string) {
	let inversedLetters = string.split('').map(char => char === char.toUpperCase() ? char.toLowerCase(): char.toUpperCase());
	return inversedLetters.join('');
}

const changeCaptializationArrow = (string) => {
	let inversedLetters = string.split('').map(char => char === char.toUpperCase() ? char.toLowerCase(): char.toUpperCase());
	return inversedLetters.join('');
}

// Q6
function endsWithScript(string) {
	return string.endsWith('Script');
}

const endsWithScriptArray = (string) => string.endsWith('Script');


// Q7
function countVowels(string) {
	let numOfVowels = 0;
	string.split('').forEach(char => numOfVowels += 'aeiou'.includes(char))
	return numOfVowels;
}


const countVowelsArrow = (string) => {
	let numOfVowels = 0;
	string.split('').forEach(char => numOfVowels += 'aeiou'.includes(char))
	return numOfVowels;
}

