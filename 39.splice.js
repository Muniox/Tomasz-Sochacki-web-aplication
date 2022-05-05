const numbers = ["a", "b", "c", "d"];
numbers.splice(2, 0, "X", "Y");
numbers; //["a", "b", "X", "Y", "c", "d"]

//splice przekzaliśmy cztery parametry. 
//Pierwszy - czli liczba 2 - oznacza, że nasz wskaźnik ustawiamy 
//na elemencie o indeksie 2, czyli na literze c
//Nastepnie wskazujemy, ile  elementów począwszy od tego indeksu chcemy usunąć.
//ustawiamy na 0 jeśli chcemy wstawic tylko elementy
//Dwa ostatnie parametry to wartości, które zostną dodane do tablicy
//na miejscie obecnego elementu o indeksie 2 


//metoda splice mozemy usuwać konkretne elementy