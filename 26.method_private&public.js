//Zwróć uwagę na miejsce zadeklarowania funkcji isUserAge. Znajduje się ona poza naszą klasą
//Oznacza to, że nie stanie się metodą klasy, a więc nie będzie możliwa do wywołania spoza skryptu
// w którym znajdują się funkcja i klasa
function isUserOfAge(age) {
  return age >= 18;
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAge() {
    if (isUserOfAge(this.age)) {
      return `Mam ${this.age} lat więc jestem pełnoletni.`;
    }
    return `Mam ${this.age} lat więc jestem niepełnoletni.`;
  }
}

const person1 = new Person("Tomek, 35");
person1.getAge(); //Mam 35 lat więc jestem pełnoletni.
const person2 = new Person("Jan", 15);
person2.getAge(); //Mam 15 lat więc jestem niepełnoletni.

person1.isUserOfAge(15); // Error: person1.isUserAge is not a function
