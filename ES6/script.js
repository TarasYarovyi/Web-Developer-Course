class Animal {
  constructor(name) {
    if (typeof name === "string") {
      this._name = name;
    } else {
      console.log("Wrong name");
    }
    if (Animal.count === undefined) Animal.count = 0;
    this.id = Animal.count;
    Animal.count++;
  }
  set name(value) {
    if (typeof value === "string") {
      this._name = value;
    } else {
      console.log("Wrong name");
    }
  }
  get name() {
    return this._name;
  }
  printData() {
    const entries = Object.entries(this);
    for (let [key, value] of entries) {
      console.log(`key: ${key}; value:${value}`);
    }
  }
}

const cat = new Animal("Barsik");

console.log(cat.name);
console.log(cat.id);

const dog = new Animal();
dog.name = "Leia";
console.log(dog.name);
console.log(dog.name);
dog.printData();
class Human extends Animal {
  constructor(name, surname) {
    super(name);
    this.surname = surname;
  }
}

let husband = new Human("Taras", "Yarovyi");
husband.printData();
