// In Javascript, you can use function or class constructor

// typical function, example
function person() {}

// function constructor, example
function Person() {}

// function Constructor
function Book(title, price, cover, weight) {
  this.title = title;
  this.price = price;
  this.cover = cover;
  this.weight = weight;
  this.detail = function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  };
}

// Class constructor
class BookClass {
  constructor(title, price, cover, weight, author) {
    this.title = title;
    this.price = price;
    this.cover = cover;
    this.weight = weight;
    var author = author;
  }

  detail() {
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  }
}

// Create instance
const newBook1 = new BookClass("title1", 1000, "soft", "400g", "Bill");
const newBook2 = new Book("title2", 100);

console.log(newBook1, "--new book1");
