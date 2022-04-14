//Tworzenie funkcji

//funkcja zwyczajna
function sum(a, b) {
  return a + b;
}

//wyrażenie funkcyjne
const sum = function sum(a, b) {
  return a + b;
};
//lub (przy wyrażeniach funkcyjnych najczęściej używa się wyrażeń anonimowych)
const sum = function (a, b) {
  return a + b;
};

//arrow function
const sum = (a, b) => {
  return a + b;
};

//mozna skrócić do (return jest przypisany automatycznie jeśli wszystko mamy w jednej linii)
const sum = (a, b) => a + b;

/**
 * Jeśli funkcja nie zawiera wartości return to domyślnie jest zwracana wartość undefined
 * Każde wywołanie funkcji return powoduje zakończenie działania funkcji
 */
