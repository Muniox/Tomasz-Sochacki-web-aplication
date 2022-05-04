//includes znajduje się w prototype

str = "jakiś przykładowy tekst.";

str.includes("przykładowy"); //true

//przyjmuje 2 parametr od którego ma rozpocząć wyszukiwanie

str.includes("przykładowy", 6); //true

//rozróżnia małe i duże litery
//najlepsza metoda uzycia:

str.toLowerCase().includes("przykładowy"); //true


//includes działa również na tablicach 
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false