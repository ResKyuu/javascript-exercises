const {sum} = require("../08_calculator/calculator");
const findTheOldest = function(people) {
    const yearsLived = people.sort((a, b) => {
            if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) return -1;

    });
    return yearsLived[0];
};

// Do not edit below this line
module.exports = findTheOldest;
