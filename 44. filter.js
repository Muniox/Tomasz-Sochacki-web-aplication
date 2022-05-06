const numbers = [1, 2, 3, 4, 5, 6];

numbers
    .filter(n => n % 2 == 0) //[2, 4, 6];
    .map(n => n**2); //[4, 16, 36];


    /**
     * metoda filter zawsze zwróci nową tablicę
     * jest nie mutowalna
     */