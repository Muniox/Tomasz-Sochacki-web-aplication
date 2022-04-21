// Traditional function example with closures
const obj = {
  count: 10,
  doSomethingLater: function (count) {
    setTimeout(function () {
      // funkcja pobiera zmienną która jest wyżej z zakresu leksykalnego
      count++;
      console.log(count);
    }, 300);
  },
};

obj.doSomethingLater(obj.count);

/**
 * przykład domknięcia czyli:
 * Domknięcie to dostęp do zmiennej która została stworzona wewnątrz zakresu innej funkcji, która
 * zakończyła już swoje działanie
 *
 */
