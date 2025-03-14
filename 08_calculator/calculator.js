const add = function(num_1, num_2) {
	return num_1 + num_2;
};

const subtract = function(num_1, num_2) {
	return num_1 - num_2;
};

const sum = function(sumArray) {
	return sumArray.reduce((a, b) => a + b, 0);
};

const multiply = function(multiplyArray) {
    return multiplyArray.reduce((a, b) => a * b);
};

const power = function(num_1, num_2) {
	return Math.pow(num_1, num_2);
};

const factorial = function(num_1) {
    let total = num_1;
	for (let i = 1; i < num_1; ++i) {
      total *= i;
    }
    return total === 0 ? 1 : total;


};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
