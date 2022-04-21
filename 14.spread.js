const A = {
  x: 5,
  y: 10,
};

const B = {
  z: 100,
};

const point = {
  ...A,
  ...B,
};
console.log(point);
//--------------------------------------

//wyciąganie konkretnych pól z obiektu

const A2 = {
  coordinates: {
    x: 5,
    y: 10,
  },
  id: 123,
};

const B2 = { z: 100 };
const point2 = {
  ...A2.coordinates,
  ...B2,
};
console.log(point2);
//--------------------------------------

const numbers = [3, 5, 4];
Math.max(numbers); //NaN
Math.max(...numbers); //5

/**
 * Spread rozbija nam obiekt lub tablicę
 *
 */
