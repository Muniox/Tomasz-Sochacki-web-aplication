isNaN(10);                 //false
Number.isNaN(10);          //false

isNaN(NaN);                //true
Number.isNaN(NaN);         //true

isNaN('abc');              //true
Number.isNaN('abc');       //false

isNaN('123');              //false
Number.isNaN('123');       //false

isNaN({});                 //true
Number.isNaN({});          //false

isNaN([1, 2, 3]);          //true
Number.isNaN([1, 2, 3]);   //false

/**
 * Nie ma konkretnej odpowiedzi na pytanie, której metody należy używać.
 * Wszystko zależy od konkretnej sytuacji. ja jednak jestem raczej zwolennikiem stosowania metody Number.isNaN
 * sprawdzającej wartość, o której wiemy, że może być albo prawidłową liczbą, albo wartością NaN.
 * 
 */
