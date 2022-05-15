const date = new Date(2019, 5, 1);
console.log(date); //2019-05-31T22:00:00.000Z

//Mięsiące jako jedyne są liczone od 0

const date2 = new Date(2019, 5, 1, 10, 30, 15);
date2; //"2019-06-01T08:30:15.000Z"

const date3 = new Date(2019, 5, null);
date3; //"2019-05-30T22:00:00.000Z"

const date4 = new Date(2019, 5, null);
date4;
//mozna w ten sposob ustawić na ostani dzien poprzedniego miesiąca
//jest to dobry sposob ze wzgledu na luty ktory ma chyba 29 dni
