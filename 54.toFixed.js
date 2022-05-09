//toFixed zaokrągla liczbę zmiennoprzecinkową do kilku miejsc po przecinku

const number = 3.654321;

number.toFixed(2); //"3.65"
number.toFixed(1); //"3.7"
number.toFixed(); //"4"
number.toFixed(10); //"3.6543210000"

//Zwróć jednak uwagę na istotny fakt że wartość zwracana przez tę metodę nie ma typu number
//lecz typ strting
