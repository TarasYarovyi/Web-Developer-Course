const data = 123;
export function getModuleData() {
  return data;
}

export let age = 35;
export function changeAge(newAge) {
  age = newAge;
}

export function add(a, b) {
  return a + b;
}
export const obj = {
  name: "Taras",
  surname: "Yarovyi",
};

export default {
  getModuleData: getModuleData,
  value: "Hello World",
};
