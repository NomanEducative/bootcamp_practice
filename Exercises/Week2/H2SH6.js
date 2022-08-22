
///Create an additional property (named modulo) in the operations object that computes the remainder of dividing a number by another number.
var operations = {
  sum: function(x, y){ return x + y; }, 
  subtract: function(x, y){ return x - y; }, 
  multiply: function(x, y){ return x * y; }, 
  divide: function(x, y){ return x / y; },
  modulo: function(x, y){ return x % y; }
};