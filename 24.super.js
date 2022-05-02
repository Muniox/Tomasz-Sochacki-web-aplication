// super(name, age) zapis ten pozwala wywołać konstruktor z klasy nadrzędnej, czyli klasy znajdującej się
// po słowie extends

//nadpisywanie metody bazowej

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getAge() {
    return `Mam ${this.age} lat.`;
  }
}

class Swimmer extends Person {
  constructor(name, age, score) {
    super(name, age);
    this.score = score;
  }

  swim() {
    return `Pływam mój obecnt wynik to ${this.score}`;
  }
  //nadpisanie metody getAge
  getAge() {
    return `Jestem pływakiem. Mam${this.age} lat.`;
  }
}

//lepsze rozwiązanie z wykorzystaniem super:

class Swimmer2 extends Person {
  constructor(name, age, score) {
    super(name, age);
    this.score = score;
  }

  swim() {
    return `Pływam mój obecnt wynik to ${this.score}`;
  }
  //nadpisanie metody getAge
  getAge() {
    const text = super.getAge();
    return `Jestem pływakiem. ${text}`;
  }
}
