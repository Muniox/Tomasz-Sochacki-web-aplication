//slice przyjmuje 2 parametry index poczatkowy i koncowy

"abcde".slice(0, 2); //"ab"
"abcde".slice(0, 5); //"abcde"
"abcde".slice(0, 10); //"abcde"
"abcde".slice(2, 4); //"cd"
"abcde".slice(2, 10); //"cde"

"abcde".slice(-2); //"de"
"abcde".slice(-5); //"abcde"
"abcde".slice(-10); //"abcde"

"abcde".slice(-3, -1); //"cd"
"abcde".slice(-4, -2); //"bc"
"abcde".slice(-4, 1); //"bcd"

//bez podania parametrow zwraca cały ciąg znakowy
