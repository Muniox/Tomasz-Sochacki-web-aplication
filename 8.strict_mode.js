'use strict';

//konieczność deklarowania zmiennych
someText = 'Tomek';

function fn() {
  console.log(someText);
}
fn();

//duplikowanie parametrów
function overrideParametrs(a, b, a) {
  console.log(a);
}
overrideParametrs(1, 2, 3);

/**
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
 *
 *
 */
