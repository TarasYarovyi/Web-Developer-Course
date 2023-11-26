class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} makes ${this.sound}`);
  }
}

class Cat extends Animal {
  constructor() {
    super("Cat", "meow");
  }
}
class Dog extends Animal {
  constructor() {
    super("Dog", "woof");
  }
}

class AnimalFactory {
  static createAnimal(type) {
    switch (type) {
      case "cat":
        return new Cat();
        break;
      case "dog":
        return new Dog();
        break;

      default:
        return null;
    }
  }
}
