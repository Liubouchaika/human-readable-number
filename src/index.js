const FROM_0_TO_19 = {
	0: 'zero',
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen'
};

const ENDS_WITH_10 = {
	10: 'ten',
	20: 'twenty',
	30: 'thirty',
	40: 'forty',
	50: 'fifty',
	60: 'sixty',
	70: 'seventy',
	80: 'eighty',
	90: 'ninety'
};

module.exports = function toReadable(number) {
	if (number == 10) {
		return ENDS_WITH_10[number];
	};
	if (number < 20) {
		return FROM_0_TO_19[number];
	};
	if (number >= 20 && number < 100) {
		if (number % 10 == 0) {
			return ENDS_WITH_10[number];
		} else {
			return ENDS_WITH_10[(number - (number % 10))]+' '+FROM_0_TO_19[number % 10];
		}
	};
	if (number >= 100) {
		if (number % 100 == 0) {
			return FROM_0_TO_19[number / 100] + ' hundred';
		} else {
			if (number % 100 < 20 && number % 100 !== 10) {
				return FROM_0_TO_19[(number - (number%100)) / 100] + ' hundred ' + FROM_0_TO_19[number % 100];
			}
		}
	};
	if (number % 100 >= 20 || number % 100 == 10) {
		let dec = number % 100;
		if (dec % 10 == 0) {
			return FROM_0_TO_19[(number - (number%100)) / 100] + ' hundred ' + ENDS_WITH_10[dec];
		} else {
			let one = dec % 10;
			return FROM_0_TO_19[(number - (number%100)) / 100] + ' hundred ' + ENDS_WITH_10[dec-one] +' '+ FROM_0_TO_19[one];
		}
	}
};
