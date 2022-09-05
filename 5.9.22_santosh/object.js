const user = {
  id: 1,
  firstName: "James",
  lastName: "Bond",
  age: 20,
};
console.log(user);

user.firstName = "Collins";
user.age = user.age + 1;
console.log(user);

console.log(user.isAdmin);
