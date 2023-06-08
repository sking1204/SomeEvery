/* 
ES5 Map Callback

function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }

ES2015 Arrow Functions Shorthand

Write an ES2015 Version
*/



function double (arr){
    return arr.map(val=>val*2)
}

//OR

// const double =arr =>arr.map(val => val *2);





/*
Refactor the following function to use arrow functions:
Replace all functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/


//result of 1st function.map
//result of 2nd function .filter

const squareAndFindEvens =numbers =>numbers.map(num =>num ** 2).filter (square=>square %2 ===0)

