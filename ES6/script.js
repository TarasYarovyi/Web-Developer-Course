// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.logInfo = function () {
//     console.log(this.name, this.color);
//   };
// }
// const nissan = new Car("Nissan", "Red");
// nissan.logInfo();
// nissan.tradeName = function () {
//   console.log(this.color, this.name);
// };
// nissan.tradeName();
//or

class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  logInfo() {
    console.log(this.name, this.color);
  }
}
const nissan = new Car("Nissan", "red");
nissan.logInfo();
nissan.tradeName = function () {
  console.log(this.color, this.name);
};
nissan.tradeName();

class Truck extends Car {
  constructor(name, color, type) {
    super(name, color);
    this.type = type;
  }
  logType() {
    console.log(this.type);
  }
  logInfo() {
    super.logInfo();
    this.logType();
  }
}

const man = new Truck("MAN", "Blue", "Standard");
man.logInfo();
