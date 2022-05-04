const numbers = [1, 2, 3];

numbers[numbers.length] = 4 //4
numbers; //[1,2,3,4];
numbers.push(5); //5
numbers; //[1,2,3,5];

//dodanie wielu elementów
numbers.push(6, 7); //7
numbers; //[1, 2, 3, 4, 5, 6, 7]

//push daje jeszcze jedną korzyść , otóż po dodaniu elementów do tablicy zwraca ona długość całej tablicy.
