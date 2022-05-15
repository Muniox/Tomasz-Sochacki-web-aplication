const date = new Date(2019, 5, 1, 10, 30, 15);

date.getFullYear(); //2019
date.getMonth(); //5
date.getDate(); //1
date.getDay(); //6 //dni tygodnia liczone są od 0 do 6, wartość 0 oznacza niedzielę
date.getHours(); //10
date.getMinutes(); //30
date.getSeconds(); //15

//modyfikowanie istniejącej daty

const date2 = new Date(2019, 5, 1, 10, 30, 15);

date2.setFullYear(2022);
date2.setMonth(3);
date2.setDate(22);
date2.setHours(22, 22, 22);

console.log(date2);
