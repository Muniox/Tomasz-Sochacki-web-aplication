//klasy stary sposób:

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.getAge = function () {
  return `Mam ${this.age} lat.`;
};

//klasy nowy sposób:

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return `Mam ${this.age} lat.`;
  }
}
