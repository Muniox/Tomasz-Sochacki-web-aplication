/**
 * Obiekt daty możemy tworzyć również na kilka innych sposobów.
 * Konstruktor może przyjmować także inny rodzaj parametrów, na przykład jedną wartość liczbową,
 * który jest tzw. znacznik czasu (ang Unix Time Stamp, określnay często jako timestamp)
 * */

const date1 = new Date(2019, 5);
date1;
const date2 = new Date(1559340000000);
date2;

/**
 * Znacznik czasu jest to liczba milisekund od 1 stycznia 1970 roku od godz 00:00:00
 * dzięki temu znacznikowi możemy wykonywać proste obliczenia arytmetyczne
 *
 * */

//liczymy jaki czas minął między dwoma zdarzeniami

const startDate = new Date();
//const startDate = new Date.now(); //jeśli nie interesuje nas pełna data
//funkcja synchroniczna
let n = 0;
while (n < 900000) {
  n++;
}
const endDate = new Date();
//const endDate = new Date.now(); //jeśli nie interesuje nas pełna data

const difference = endDate - startDate;
difference;

//timestamp możemy wyciągnąć za pomocą .getTime()
const date3 = new Date();
date3.getTime();

//konstrukcja Date.now zwraca sam znacznik czasu jako wartość typu number
//przez co nie wykorzystamy zadnych metod obiektu Date()
