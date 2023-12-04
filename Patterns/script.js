class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.collection = [];
  }
  addBook(book) {
    this.collection.push(book);
  }
  getIterator() {
    return new BookIterator(this.collection);
  }
}

class BookIterator {
  constructor(bookCollection) {
    this.index = 0;
    this.bookCollection = bookCollection;
  }
  first() {
    this.reset();
    return this.next();
  }

  next() {
    return this.bookCollection[this.index++];
  }
  hasNext() {
    return this.index <= this.bookCollection.length;
  }
  reset() {
    this.index = 0;
  }
  each(callback) {
    for (let element of this.bookCollection) {
      callback(element);
    }
  }
}
