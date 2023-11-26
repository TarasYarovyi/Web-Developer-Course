class Book {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class Toy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function BookFactory() {
  return new Book("Harry Potter", 20);
}
function ToyFactory() {
  return new Toy("Lego", 50);
}

const AbstractProductFactory = (function () {
  let types = [];
  return {
    registerType: function (type, factory) {
      let product = factory();
      if (product.name && product.price) {
        types[type] = factory;
      }
    },
    getProduct: function (type) {
      let productType = types[type];
      if (productType) {
        return productType();
      } else {
        return null;
      }
    },
  };
})();

AbstractProductFactory.registerType("book", BookFactory);
AbstractProductFactory.registerType("toy", ToyFactory);
console.log(AbstractProductFactory.getProduct("book"));
console.log(AbstractProductFactory.getProduct("toy"));
