const number = [1, 2, 3, 4, 5];

Math.max(numbers); //NaN

Math.max.apply(Math, numbers); //5
//lub
Math.max.apply(null, numbers);

//z apply i call korzysta się bardzo żadko
//Marginalne użycie apply lepiej użyć operatora spread

Math.max(...numbers); //5
