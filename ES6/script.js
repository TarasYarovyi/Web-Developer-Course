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
}

const cat = new Animal("Barsik");
cat.name = 1;
console.log(cat.name);
