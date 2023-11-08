const test = {
  property1: "value1",
  property2: "value2",
  property3: "value3",
};

function serializeObject(obj) {
  const entries = Object.entries(obj);
  const result = [];
  for (let [key, value] of entries) {
    result.push(key + ": " + value);
  }
  return result.join(" | ");
}

function deserializeString(str) {
  const arr = str.split(" | ");
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(": ");
  }
  for (let [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
}
serializeObject(test);
const string = "property1: value1 | property2: value2 | property3: value3";

console.log(deserializeString(string));
console.log(Object.entries(test));
