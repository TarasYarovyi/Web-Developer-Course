class Customer {
  constructor(name) {
    this.name = name;
  }
  notify(product) {
    console.log(`${this.name} dostał ofertę na ${product}`);
  }
}

class ProductStore {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    let index = this.observers.findIndex((el) => el === observer);
    this.observers.splice(index, 1);
  }
  addNewProduct(product) {
    this.observers.forEach((observer) => observer.notify(product));
  }
}
