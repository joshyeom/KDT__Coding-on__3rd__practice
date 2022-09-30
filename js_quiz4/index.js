const person = {
  name: "Jake",
  age: 30,
  gender: "M",
  friends: ["Alex", "Ethan", "Kevin"],
};

person.city = "London";
person["age"] = 40;
person.friends.unshift("Tom");
console.log(person.city);
console.log(person.age);
console.log(person.friends);
