class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this._age = 1;
    //static property emulation
    if (Car.countInstances === undefined) {
      Car.countInstances = 0;
    }
    Car.countInstances++;
  }
  printData() {
    console.log(this.brand);
    console.log(this.color);
  }
  //or an arrow, but with a difference
  //   printData = () => {
  //     console.log(this.brand);
  //     console.log(this.color);
  //   };

  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("Wrong age");
    }
  }
  get age() {
    return this._age;
  }
  static getDefaultCar() {
    return new Car();
  }
  static getNumbersOfInstances() {
    return Car.countInstances;
  }
}

//static methods, "static" properties of classes
console.log(Car.getNumbersOfInstances());
const bmw = new Car();
console.log(Car.getNumbersOfInstances());
