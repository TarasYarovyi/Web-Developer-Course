class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  printData() {
    console.log(this.brand);
    console.log(this.color);
  }
}

const bmw = new Car("BMW", "red");
bmw.printData();

let car2 = class {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this._age = 1;
  }
  printData() {
    console.log(this.brand);
    console.log(this.color);
  }

  set age(value) {
    if (value > 0) return this._age;
  }
  get age() {
    return this._age;
  }
  static getDefaultCar() {
    return new car2();
  }
};

const audi = new car2("Audi", "white");
audi.printData();
car2.age = 2;
console.log(car2.age);
console.log(car2.getDefaultCar());
