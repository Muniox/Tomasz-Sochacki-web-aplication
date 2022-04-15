const Person = {
  name: 'Tomek',
  age: 35,
  address: {
    city: 'Poznań',
    country: 'Polska',
  },
};

//zmiana wartości pola obiektu
Person.name = 'Adam';
Person['name'] = 'Adam';

//w Wartościach bardziej zagnieżdżonych
Person.address.city = 'Warszawa';

//dodawanie pól do istniejącego obiektu
Person.id = 123;

//usuwanie pól obiektu
delete Person.id;

//Destrukturyzacja obiektu
const { name, age, address } = Person;
console.log(name, age, address);
