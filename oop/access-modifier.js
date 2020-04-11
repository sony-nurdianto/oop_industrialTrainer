// function Constructor
function Book(title, price, cover, weight, author) {
  // public property
  this.title = title;
  this.price = price;
  this.cover = cover;
  this.weight = weight;

  // private property
  var author = author;

  // public method
  this.detail = function () {
    // method
    return (
      this.title + ", Rp" + this.price + ", " + this.cover + ", " + this.weight
    );
  };

  this.showAuthorTes = function () {
    return author;
  };

  // private method
  function showAuthor() {
    return author;
  }
}

const newBook1 = new Book("title1", 100, "hard", "500g", "author1");

// console.log(newBook1.showAuthorTes());

// Wallet
function Wallet() {
  // private property
  var balance = 100;

  var checkBalance = function () {
    return balance;
  };

  this.depositAmount = function (amount) {
    balance + amount;
  };
}

const wallet1 = new Wallet();
console.log(wallet1.checkBalance());
