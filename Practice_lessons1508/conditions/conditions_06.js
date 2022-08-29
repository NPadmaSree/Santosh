"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
  score = Number.parseInt(score);
  if (score >= 90) {
    return "Grade A";
  } else if (score >= 80) {
    return "Grade B";
  } else if (score >= 70) {
    return "Grade C";
  } else if (score >= 60) {
    return "Grade D";
  } else if (score >= 40) {
    return "Grade P";
  } else if (score < 40) {
    return "Grade F";
  }
}

console.log("You got a " + assignGrade(95));
console.log("You got a " + assignGrade(65));
console.log("You got a " + assignGrade(35));
console.log("You got a " + assignGrade(70));
console.log("You got a " + assignGrade(82));
console.log("You got a " + assignGrade(54));
