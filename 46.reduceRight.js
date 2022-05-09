//Robi to samo co reduce tylko od końca
// tzn. od prawej do lewej sumuje tablicę 

const letters = ['a', 'b', 'c'];

letters.reduce((current, previous) => current + previous, ''); //abc
letters.reduceRight((current, previous) => current + previous, ''); //cba