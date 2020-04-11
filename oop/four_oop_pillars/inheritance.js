// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Person extends People {
//   constructor(name, age, job, status) {
//     super(name, age); // this is how to get the inherit properties/methods
//     this.job = job;
//     var status = status;
//     this.showStatus = function () {
//       return status;
//     };
//   }
// }

// const personOld = new People("Bill", 15);
// console.log(personOld);

// const person1 = new Person("Ani", 15, "Software Engineer", "married");
// console.log(person1);

class People {
  constructor( obj = {}) {
    this.name = obj.name;
    this.age = obj.age;
  }
}

class Person extends People {
  constructor(obj = {}) {
    super(obj); // this is how to get the inherit properties/methods
    this.job = obj.job;
    const status = obj.status;
    this.showStatus = function () {
      return status;
    };
  }
}

const person = new Person ({
  name : "anonymus",
  age : "anonymus",
  job : "anonymus",
  status : "anonymus"
})

console.log(person);
person.showStatus();
// const personOld = new People("Bill", 15);
// console.log(personOld);

// const person1 = new Person("Ani", 15, "Software Engineer", "married");
// console.log(person1);
