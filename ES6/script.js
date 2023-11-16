const obj = {
  brand: "Nissan",
  model: "Quashqai",
  year: 2014,
};

const handler = {
  get(target, prop, receiver) {
    if (typeof target[prop] !== "number") {
      return target[prop] + "!";
    } else return target[prop];
  },
  set(target, prop, value) {
    if (typeof value === "number") {
      console.log("Numbers can`t be added");
    } else target[prop] = value;
  },
};
const proxy1 = new Proxy(obj, handler);
console.log(proxy1.brand);
console.log(proxy1.year);
console.log(typeof obj.year);
proxy1.color = 1; //Numbers can`t be added"
proxy1.color = "Red";
console.log(proxy1.color);
