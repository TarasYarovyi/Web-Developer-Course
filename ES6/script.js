function Car(name) {
  this.name = name;
  this.configuration = [];
}

Car.prototype.addConfiguration = function (prop, value, price) {
  this.configuration.push({ prop: prop, value: value, price: price });
};

function Truck(name, color) {
  Car.call(this, name);
  this.color = color;
}

Truck.prototype = Object.create(Car.prototype);
//or
Truck.prototype = new Car();
// Truck.prototype.constructor = Truck;
// console.log(Truck.prototype.constructor);

Truck.prototype.caountTotalPrice = function () {
  const totalPrice = this.configuration.reduce(
    (acc, cur) => acc + cur.price,
    0
  );
  console.log(totalPrice);
};

const daf = new Truck("DAF", "red");
daf.addConfiguration("capacity", "High", 1500);
daf.addConfiguration("floor", "low", 1500);
daf.addConfiguration("transmision", "auto", 1500);
console.log(daf);
daf.caountTotalPrice();
