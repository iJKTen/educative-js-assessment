// Test 1: Use an array as arguments when calling a function
// Return what fn returns using arr as arguments
const argsAsArray = function(fn, arr) {
  return fn.apply(null, arr);
}

// Test 2: Change the context in which a function is called
// Return what fn returns with obj as its context
const speak = function(fn, obj) {
  return fn.bind(obj)();
}

// Test 3: Return a function from a function
// Return a function that takes an argument
// and concats 'str' and the argument
const functionFunction = function(str) {
  return function(str2) {
      return str.concat(str2)
  }
}

// Test 4: Use closures
// Return an array of closures calling fn on array items
const makeClosures = function(arr, fn) {
  return arr.map((item) => {
      return function () {
          return fn(item);
      }
  })
}

// Test 5: Create a "partial" function
// Return a function that takes one arg
// and return the result of fn with str1, 
// str2 and arg.
const partial = function(fn, str1, str2) {
  return function(str3) {
      return fn(str1, str2, str3)
  }
}

// Test 6: Use arguments object
// Returns sum of all arguments
const sumArguments = function() {
  const tempArr = [...arguments];
  return tempArr.reduce((a, c) => a + c);
}

// Test 7: Apply functions with arbitrary numbers of arguments
// Call fn with all the arguments
// and return results
const callIt = function(fn) {
  const tempArgs = [...arguments];
  tempArgs.shift();
  const f = fn.apply(null, tempArgs);
  return f;
}

// Test 8: Create a "partial" function for variable number of applied arguments
// Returns a function that takes calls 
// fn with all the arguments passed to this function
// and to the function that's returned.
const partialUsingArguments = function(fn) {
  const tempArr = [...arguments];
  tempArr.shift()
  return function() {
      const f = fn.apply(null, [...tempArr, ...arguments]);
      return f
  }
}