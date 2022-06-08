const removeFromArray = function (myArray, ...removers) {


    let filteredArray = myArray.filter(val => !removers.includes(val))


    return filteredArray
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
