const letters = ['a', 'b', 'c'];
for (const letter of letters) {
  console.log(letter);
}

const person = {
  firstName: 'Jan',
  lastname: 'kowalski',
};

//najlepsza opcja jeśli chodzi o obiekty
for (const fieldName of Object.keys(person)) {
  console.log(fieldName, person[fieldName]);
}

for (const [key, value] of Object.entries(person)) {
  console.log(key, value);
}

/**Zdecydowanie najlepsza pętla, pozwala na iterowanie po tablicach, a w połączeniu z Object.keys, Object.value, Object.entries
 * pozwala na iterowanie po obiektach :) Object.-//- zwraca tablicę z objektu
 *
 *
 * output:
 * a
 * b
 * c
 * firstName Jan
 * lastname kowalski
 * firstName Jan
 * lastname kowalski
 *
 *
 * */
