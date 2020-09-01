// Test 1: Alter the context of an Object
// Call fn with obj as the context
const alterContext = function(fn, obj) {
  return fn.bind(obj)();
}

// Test 2: Alter multiple objects at once
// Add the greeting field to all objects
// created by the constructor
const alterObjects = function(constructor, greeting) {
  constructor.prototype.greeting = greeting;
}

// Test 3: Iterate over an object's "own" properties
// Return a string of object's own properties in 
// the following format
// [ 'foo: bar', 'baz: bim' ]
const iterate = function(obj) {
  const output = [];
  Object.getOwnPropertyNames(obj).forEach((key) => {
      output.push(`${key}: ${obj[key]}`);
  });
  return output;
}
