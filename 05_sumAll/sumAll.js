const sumAll = function(startNum, endNum) {
    let sum = 0;

    if(startNum > 0 && endNum > 0 && Number.isInteger(startNum) && Number.isInteger(endNum)) {
        if (startNum < endNum) {
            while (startNum <= endNum) {
                sum = sum + startNum;
                startNum++
            }
        } else {
            while (startNum >= endNum) {
                sum = sum + endNum;
                endNum++
            }

        }
    } else {
        return "ERROR"
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
