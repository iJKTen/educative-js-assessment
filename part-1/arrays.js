// Test 1: Determine the location of an item in an array
const indexOf = function(arr, item) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] === item) {
          return mid;
      }

      if (arr[mid] > item) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return -1;
}

// Test 2: Add the values of an array
const sum = function(arr) {
  return arr.reduce((a, c) => a + c);
}

// Test 3: Return a new array after Removing all instances of a value from an array
// Returns a new array
const remove = function(arr, item) {
  const output = [];
  arr.forEach((c) => {
      if (c !== item) {
          output.push(c);
      }
  });

  return output;
}

// Test 4: Remove all instances of a value from an array (modify original array)
// Modifies the original array
const removeWithoutCopy = function(arr, item) {
  for (let index = arr.length - 1; index >= 0; index--) {
      if (arr[index] === item) {
          arr.splice(index, 1);
      }
  }
}

// Test 5: Add an item to the end of an array
// Appends to the original array
const append = function(arr, item) {
  arr.push(item);
}

// Test 6: Remove the last item of an array
// Modifies the original array
const truncate = function(arr) {
  arr.pop();
}

// Test 7: Add an item to the beginning of an array
// Prepends to the original array
const prepend = function(arr, item) {
  arr.unshift(item);
}

// Test 8: Remove the first item of an array
// Modifies the original array
const curtail = function(arr) {
  arr.shift();
}

// Test 9: Join together two arrays
// Returns a new array containg both arrays
const concat = function(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Test 10: Add an item anywhere in an array
// Inserts an element in the original array
const insert = function(arr, item, index) {
  arr.splice(index, 0, item);
}

// Test 11: Count the occurences of an item in an array
const count = function(arr, item) {
  let count = 0;
  for (let index = 0; index < arr.length; index++) {
      if (arr[index] === item) {
          count++;
      }
  }
  return count;
}

// Test 12: Find duplicates in an array
// return all elements that occur more than once
const duplicates = function(arr) {
  const map = {};
  const set = new Set();
  arr.forEach((c) => {
      if (map[c] === undefined) {
          map[c] = 1;
      } else {
        set.add(c);
      }
  });
  return [...set];
}

// Test 13: Square each number in an array
// return a new array with each item squared
const square = function(arr) {
  return arr.map((num) => {
      return Math.pow(num, 2);
  })
}

// Test 14: Find all occurrences of an item in an array
const findAllOccurrences = function(arr, target) {
  const output = [];
  for (let index = 0; index < arr.length; index++) {
      if (arr[index] === target) {
          output.push(index);
      }
  }
  return output;
}