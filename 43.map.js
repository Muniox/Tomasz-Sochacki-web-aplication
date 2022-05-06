const number = [2, 4, 6];

const squareNumbers = numbers.map(value => value**2);
squareNumbers; //[4,16,36];
numbers; //[2,4,6];

/**
 * Najwazniejsza róznica . Metodę forEach stosujemy, gdy chcemy użyć każdego elementu do wykoannia jakiejś akcji
 * niepowodującej powstania nowej tablicy, interesuje nas tylko ta akcja.
 * Z kolei metoda map służy do pobrania oryginalnej tablicy, zmodyfikowania jej elementów i zwrócenia nowej, zmodyfikowanej tablicy.
 * 
 * 
 */