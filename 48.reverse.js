//odwraca kolejność wszystkich elementów tablicy
//metoda jest mutowalana co zonacza, że zmnienia nasza bazową tablicę

//najlepiej zrobić wcześniej kopie tablicy

const numbers = [1, 2, 3];
const reversedNumbers = numbers.reverse();

reversedNumbers; //[3, 2, 1]
numbers; //[3, 2, 1] tablica została odwrócona

//najlepsza opcja, rozwiązanie

const numbers2 = [1, 2, 3];
const reversedNumbers2 = [...numbers2].reverse();

reversedNumbers2; //[3, 2, 1];
numbers2; //[1, 2, 3];