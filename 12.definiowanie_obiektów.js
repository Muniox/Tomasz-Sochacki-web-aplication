const MyObj = {
  myString: 'string',
  myNumber: 2,
  myArray: [1, 2, 3],
  myObj2: {
    ul: 'Błotna',
    nrDomu: 22,
    lokalizacja: [234, 543],
  },
  myMethod: function () {
    console.log('metoda w obiekcie');
  },
};

//Obiekt może posiadać metody, które może zadeklarować w następujący sposób:

const MathOperations = {
  //poprzez zadeklarowanie nazwy
  sum: function () {
    return a + b;
  },
  //poprzez arrow function
  substration: (a, b) => a - b,
  //z pominięciem nazwy metrody i jej implementacji po znaku ":"
  divide(a, b) {
    if (b === 0) {
      return 'Nie dziel przez zero!';
    }
    return a / b;
  },
};
