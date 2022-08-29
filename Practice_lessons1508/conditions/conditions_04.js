"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
function evenOrOdd(number) {
  number = Number.parseInt(number);
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(evenOrOdd(4));
console.log(evenOrOdd(9));
