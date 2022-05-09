//zmienna PI
//np obliczanie obwodu koła:

const calculateCircumference = (radius) => 2 * Math.PI * radius;

//zmienna PI:
Math.PI; // ~3.14

//Podstawa logarytmu naturalnego:
Math.E; //2.718281828459045

//Wartość pierwiastka z dwóch:
Math.SQRT2; //1.41422135623730951

//Wartość pierwiastkaz 1/2:
Math.SQRT1_2; //0.7071067811865476

//Szukanie wartości największej i najmniejszej

Math.min(5, 2, 3); //2
Math.max(5, 2, 3); //5

//metody działają poprawnie również gdy nie są stringami, dokładniej ujmując
//zostajena każdej wartość wywołany niejawny konstruktor Number

Math.min("5", "10", "2"); //2
Math.max("0.5", "0.3"); //"0.5"

/**
 * Najczęściej jednak będziemy chcieli znaleźćwartość najmniejszą lub największą nie spośród
 * kilku jawnie podanych wartość lecz wśród elementów tablicy
 * metoda ta jednak nie przyjmuje tablic jako parametru
 * jednak możemy sobie z tym poradzić używając operatora spread
 *
 * */

const numbers = [3, 1, 7, 2, 5];
Math.max(...numbers); //7
Math.min(...numbers); //1

//Zaokrąglanie liczb

Math.round(3.4); //3
Math.round(3.5); //4
Math.round(3.9); //4

//Zaokrąglenie w dół

Math.floor(3.1); //3
Math.floor(3.5); //3
Math.floor(3.9); //3

//Zaokrąglenie do góry

Math.ceil(3.1); //4
Math.ceil(3.5); //4
Math.ceil(3.9); //4

//Czasami zdarza się, że potrzebujemy wykonać zaokrąglenie z dokładnością do 0,5
//Można to osiągnąć wykonując poniższą sztuczkę polegającą na przemnożeniu przez 2 i pózniej podzieleniu przez 2

const roundHalf = (n) => Math.round(n * 2) / 2;

roundHalf(3); //3
roundHalf(3.2); //3.5
roundHalf(3.4); //3.5
roundHalf(3.8); //4

//liczby losowe
