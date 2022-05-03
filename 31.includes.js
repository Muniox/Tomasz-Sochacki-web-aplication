str = "jakiś przykładowy tekst.";

str.includes("przykładowy"); //true

//przyjmuje 2 parametr od którego ma rozpocząć wyszukiwanie

str.includes("przykładowy", 6); //true

//rozróżnia małe i duże litery
//najlepsza metoda uzycia:

str.toLowerCase().includes("przykładowy"); //true
