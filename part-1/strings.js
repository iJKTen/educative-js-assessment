// Test 1: Reduce duplicate characters to a desired minimum
const reduceString = function(str, amount) {
  let prevChar = str[0], output = '', count = 0;
  for (let index = 0; index < str.length; index++) {
      if (prevChar === str[index]) {
          count++;
          if (count <= amount) {
              output += str[index];
          }
      } else {
          count = 1;
          output += str[index];
      }
      prevChar = str[index];
  }
  return output;
}

// Test 2: Wrap lines at a given number of columns, without breaking words
const wordWrap = function(str, cols) {

}

// Test 3: Reverse a string
const reverseString = function(str) {
  let output = '';
  for (let index = str.length - 1; index >= 0; index--) {
      output += str[index];
  }
  return output;
}