const repeatString = function (string, number) {
  let x = "";
  for (i = 0; i < number; i++) {
    x += string;
  }

  return x;
};

result = repeatString("hey", 3);
console.log(result);

// Do not edit below this line
module.exports = repeatString;
