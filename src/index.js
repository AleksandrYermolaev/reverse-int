module.exports = function reverse (n) {
	let positiveN;
	let result = '';
	n < 0 ? positiveN = String(n * (-1)) : positiveN = String(n);
	for (let i = 0; i < positiveN.length; i++) {
	  result = positiveN[i] + result;
	}
	return Number(result);
}