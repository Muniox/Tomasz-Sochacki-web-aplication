// Immediiately-Invoked Function Expression

(function () {
  console.log('funkcja IIFE');
})();

(() => {
  console.log('funkcja IIFE');
})();

//lub
(function () {
  console.log('funkcja IIFE');
})();

//Dzięki IIFE możemy stworzyć metodę prywatną przykład:

const CustomModule = (function () {
  const privateMethod = () => console.log('funkcja prywatna');

  return {
    publicFirstMethod: function () {
      privateMethod();
      console.log('pierwsza metoda publiczna');
    },
    publicSecondMethod: function () {
      console.log('druga metoda publiczna');
    },
  };
})();

CustomModule.publicFirstMethod();
//funkcja prywatna
//pierwsza metoda publiczna

CustomModule.publicSecondMethod();
//druga metoda publiczna

CustomModule.privateMethod();
//error
