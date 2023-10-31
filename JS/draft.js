function Journal() {
  this.adverts = [];
  this.addAdvert = function (name) {
    this.adverts.push({
      page: this.adverts.length,
      name: name,
    });
  };
  this.printAdverts = function () {
    this.adverts.forEach((el) => console.log(el));
  };
}

const maxim = new Journal();
maxim.addAdvert("Orlen");
maxim.addAdvert("Lotos");
maxim.addAdvert("BP");
