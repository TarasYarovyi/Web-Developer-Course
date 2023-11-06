function bindToContext(fn, context) {
  // body...
  return fn.bind(context);
}
const animal = {
  sound: "woof",
  makeSound: function () {
    return `This animal makes a ${this.sound} sound`;
  },
};
const boundMakeSound = bindToContext(animal.makeSound, animal);
