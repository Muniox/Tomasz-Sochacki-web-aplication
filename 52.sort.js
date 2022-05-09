//prosta metoda sortująca tablicę
//dodatkowo można zapoznac się z róznymi algorytmami sortującymi

const numbers = [3, 1, 7, 2, 5];

const ascendingNumbers = numbers.sort((a, b) => a - b);
ascendingNumbers; //[1, 2, 3, 5, 7]
numbers; //[1, 2, 3, 5, 7]

//sort mutuje tablice numbers, w tym przypadku oryginalana tablica została równiez posortowana

//jeśli użyjemy samej funkcji sort bez parametrów  cyfry i wyrazy zostaną posortowane, ale nie po wartościach
// tylko po punktach kodowych w tablicy ASCII lub UNICODE


//Można też wykorzystać metodę localeCompare:
numbers.sort((a, b) => a.localeCompare(b, 'pl', {numeric: true})); //['2','3','10']
//więcej o metodzie localeCompare w MDN