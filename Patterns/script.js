class Coffee {
  cost() {
    return 10;
  }
}

function addMilk(coffee) {
  const originalCost = coffee.cost();
  coffee.cost = function () {
    return originalCost + 2;
  };
}
function addSugar(coffee) {
  const originalCost = coffee.cost();
  coffee.cost = function () {
    return originalCost + 1;
  };
}
function addWhippedCream(coffee) {
  const originalCost = coffee.cost();
  coffee.cost = function () {
    return originalCost + 3;
  };
}
