function makeArray(...numbers) {
  console.log(numbers);
}

makeArray(1, 2, 3); // [1, 2, 3]

//reduce mozemy wykonać tylko na tablicy
function sum(...numbers) {
  return numbers.reduce((prev, curr) => prev + curr, 0);
}

sum(1, 2, 3, 4, 5); //15

/**
 * rest przekazany w funkcji tworzy nam tablicę
 *
 */
