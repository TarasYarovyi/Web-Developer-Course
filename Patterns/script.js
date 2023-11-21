function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old`;
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}
Employee.prototype = new Person(); //or Object.create(Person.prototype)
Employee.prototype.whatDoYouDo = function () {
  return `I work as a ${this.jobTitle}`;
};

const person1 = new Person("Taras", 35);
const employee1 = new Employee("Taras", 35, "Manager");

console.log(person1.introduce());
console.log(employee1.whatDoYouDo());
console.log(employee1);
