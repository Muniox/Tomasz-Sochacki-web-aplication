//stare definiowanie wartości domyślnych
function getPriceWithDiscount(price, rebate) {
  const discount = 1 - (rebate || 0.1);
  return price * discount;
}

//Nowy sposób definiowania
function sum(a, b = 1, c) {
  return a + b + c;
}

//aby parametr domyślny był wzięty pod uwagę musi wystapić wartość undefined
sum(1, undefined, 2);

//jeśli podaby wartość null parametr domyślny nie będzie wzięty pod uwagę
