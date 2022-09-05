const numbers = [4, 5, 7, 9];
const doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers);

const names = ["sam", "Alex"];
const namesUS = names.map(function (name) {
  return name.toUpperCase();
});
console.log(namesUS);
