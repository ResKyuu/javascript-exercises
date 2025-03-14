const fibonacci = function(counter) {
    counter = parseInt(counter);

    // base case: if num is 0 or 1, return num
    if (counter < 0) return "OOPS";
    if (counter === 0) return counter;
    if (counter === 1) return counter;

    return fibonacci(counter - 1) + fibonacci(counter - 2);
};

// Do not edit below this line
module.exports = fibonacci;
