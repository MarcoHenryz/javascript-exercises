const sumAll = function (ini, fim) {
  let sum = 0;
  for (i = ini; i <= fim; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
