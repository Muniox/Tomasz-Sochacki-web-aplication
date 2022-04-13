const person = {
  firstName: 'Jan',
  lastname: 'kowalski',
};

for (const fieldName in person) {
  console.log(fieldName);
}

/** for in stosujemy w objektach i nigdy w tablicach ponieważ będzie nam iterować po indexach w formacie stringów
 * zdecydowanie lepiej jest korzystać z pętli for of w połączeniu z Object.keys, Object.values w obiektach, ponieważ Object.keys i Object.value zwraca tablicę
 *
 * output:
 * firstName
 * lastname
 *
 */
