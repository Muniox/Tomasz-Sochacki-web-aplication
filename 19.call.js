const person1 = {
  age: 35,
  getAge: function () {
    return `Mam ${this.age} lat.`;
  },
};

const person2 = {
  age: 50,
};

console.log(person1.getAge());

//wywołanie metody wskazanej poptzez this w person1
//call zawsze łączymy z this
//call jest zadno używane i możemy znaleść te rowiązanie w starszych aplikacjach
console.log(person1.getAge.call(person2));

/**
 * w praktyce te rozwiązanie i może być podatne na błędy. Njważenijszy błąd popełniliśmy
 * na etapie budowania obiektów. Znacznie leiepsze w tym przypadku byłoby wykorzystanie klas
 *
 *
 */
