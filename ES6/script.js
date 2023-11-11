let car = {
  brand: "audi",
  color: "red",
  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("False age");
    }
  },
  get age() {
    return this._age;
  },
};
console.log(car);

for (key in car) {
  console.log(`${key}: ${car[key]}`); //brand: car, color: white, age: 1
}

console.log(Object.keys(car)); //(3) ['brand', 'color', 'age']

const { brand, color } = car;
console.log(brand, color); //car red 1

const engine = "V8";
const engineObj = { engine };

// for (key in engineObj) {
//   if (engineObj.hasOwnProperty(key)) {
//     car[key] = engineObj[key];
//   }
// }
//or
// car = { ...car, ...engineObj };
//or
Object.assign(car, engineObj);

car.age = 3;
console.log(car.age); //3
car.age = -1; //Wrong age
console.log(car.age); //still 3 becouse of setter
console.log(car);

const myObj = {
  data: "abc",
  loggerA: () => {
    console.log(this);
  },
  loggerB() {
    console.log(this);
  },
};

myObj.loggerA(); // undefined becouse "this" loggerA = window
myObj.loggerB(); // 'abc' becouse "this" loggerA = myObj
