const numbers = [5, 10, 15];

numbers.reduce((current, previous) => {
  current + previous, 0;
}); //30

//można wykorzystać ale lepszą praktyką jest metoda join('')
const letters = ["a", "b", "c"];
letters.reduce((c, p) => c + p, ""); //"abc"
