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

