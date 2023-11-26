function Vehicle(name, numWheels) {
  this.name = name;
  this.numWheels = numWheels;
}

Vehicle.prototype.logInfo = function () {
  console.log(this.name, "numWheels: " + this.numWheels);
};

function Bike(name) {
  Vehicle.call(this, name, 2);
  this.electricFlag = false;
  this.isElectric = function () {
    return this.electricFlag;
  };
}

Bike.prototype = new Vehicle();
Bike.prototype.constructor = Bike;

// let bike1 = new Bike("Kross");
// console.log(bike1);
// bike1.logInfo();
function BikeFactory() {
  return new Bike("rower");
}

function Car(name) {
  Vehicle.call(this, name, 4);
  this.cartype = "sedan";
  this.setCarType = function (type) {
    this.cartype = type;
  };
}

Car.prototype = new Vehicle();
Car.prototype.constructor = Car;

// let car1 = new Car("BMW");
// console.log(car1);
// car1.logInfo();
function CarFactory() {
  return new Car("samochód");
}

console.log(CarFactory());

// abstract factory

const AbstractVehicleFactory = (function () {
  let types = [];
  return {
    registerType: function (type, factory) {
      let v = factory();
      if (v.numWheels && v.name) {
        types[type] = factory;
      }
    },
    getVehicle: function (type) {
      let vehicleType = types[type];
      if (vehicleType) {
        return vehicleType();
      } else {
        return null;
      }
    },
  };
})();

AbstractVehicleFactory.registerType("bike", BikeFactory);
AbstractVehicleFactory.registerType("car", CarFactory);
const car2 = AbstractVehicleFactory.getVehicle("car");
console.log(car2);
