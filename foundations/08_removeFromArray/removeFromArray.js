const removeFromArray = function (arr, number) {
  index = arr.indexOf(number, 0);
  arr.splice(index, 1);
};

let numbers = [1, 2, 3, 4];
console.log(numbers);
removeFromArray(numbers, 3);
console.log(numbers);

// Do not edit below this line
module.exports = removeFromArray;
