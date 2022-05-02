//rozszerzenie klasy

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return `Mam ${this.age} lat.`;
  }
}

//dodanie nowych metod i pól tylko dla klasy, która będzie posiadała te same pola i metody co person

class Swimmer extends Person {
  constructor(name, age, score) {
    super(name, age);
    this.score = score;
  }

  swim() {
    return `Pływam mój obecnt wynik to ${this.score}`;
  }
}

const swimmer = new Swimmer("Adam", 30, 10);
swimmer.swim();
swimmer.getAge();
