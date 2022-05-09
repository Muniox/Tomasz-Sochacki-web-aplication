//czasami chcemy sprawdzić czy co najmniej jeden z naszych elementów w tablicy spełnia określony warunek

const numbers = [1, 2, 3, 4, 5];

//metoda some, mówi nam czy którys z elementów tablicy spełnia daną regułę
numbers.some(n => n > 3); //true

//metods every, mówi nam czy wszystkie elementy tablicy spełniają dana rregułę
numbers.every(n => n > 3); //false