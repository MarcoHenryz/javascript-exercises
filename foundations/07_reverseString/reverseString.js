const reverseString = function (string) {
  let solve = "";
  for (i = string.length - 1; i >= 0; i--) {
    solve = solve.concat(string[i]);
  }
  return solve;
};

let string = "abcdef";
let solve = reverseString(string);
console.log(solve);
// Do not edit below this line
module.exports = reverseString;
