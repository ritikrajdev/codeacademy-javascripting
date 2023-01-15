// Q5
function isLeapYear(year) {
	return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
}

const isLeapYearArrow = (year) => year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;

module.exports = {
	isLeapYear,
	isLeapYearArrow
}
