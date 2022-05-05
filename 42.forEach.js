const letters = ["a", "b", "c"];

letters.forEach(val => console.log(val));
//a
//b
//c

letters.forEach((value, index, arr) => {
    console.log(`Wartość: ${value}, indeks: ${index}`);
});
//Wartość: a, index: 0
//Wartość: b, index: 1
//Wartość: c, index: 2