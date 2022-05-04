//Zwróć uwagę na dwie ważne kwestie. Po pierwsze słowo static, 
//które znajduje się przed nazwą tworzonej metody, a po drugie na sposób użycia metody sum

class MathOperations1 {
    static sum (...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    }
}

MathOperations1.sum(2,3,4);

//w języku Java Script możliwe jest tworzenie klasy posiadającej zarówno metody statyczne, jak i zwykłe. 
//Jednakże trzeba zwrócić na ich sposób wykonania

class MathOperations2 {
    static sum (...numbers) {
        return numbers.reduce((a, b) => a+b, 0);
    }

    addTwoNumbers(a, b) {
        return a + b;
    }
}

MathOperations2.sum(2, 3); //5
MathOperations2.addTwoNumbers(2, 3); //Error

const math = new MathOperations2();
math.addTwoNumbers(2, 3); //5