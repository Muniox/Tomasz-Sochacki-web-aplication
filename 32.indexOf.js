//last index of wyszukuje nam wystąpienie wyrazu i zwraca pierwszy index wyszukanego wyrazu
const str = "jakiś przykładowy tekst."

str.indexOf("przykładowy"); //6
str[6]; //p

//jeśli wyraz nie zostanie znaleziony zwraca -1
str.indexOf("xyz"); //-1

//zapamiętać, że indexOf może zwrócić wartość 0 indexu

str.indexOf('jakiś'); //0

//rozwiązanie podczas wykorzystania instrukcji if:

if (str.indexOf("przykładowy") !== -1){
    //instrukcja dla true
}
//lub
if (str.indexOf("przykładowy") >= 0) {
    //instrukcja dla true
}
