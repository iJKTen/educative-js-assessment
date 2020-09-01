// Test 1: Create a function that returns a module
// Return a Module that two fields first and second
// pointing to str1 and str2 respectively.
// In addition, module has a function 'myfunc' that
// return concatenation of first and second.
createModule = function(str1, str2) {
  return (function() {
      return {
          first: str1,
          second: str2,
          myfunc: function() {
              return this.first.concat(this.second);
          }
      }
  })();
}