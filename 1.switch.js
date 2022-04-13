const animal = 'pies';
switch (animal) {
  case 'krowa':
  case 'pies':
    console.log('To zwierzę żyje w gospodarstwie.');
    break;
  case 'lew':
    console.log('To zwierzę żyje w Afryce.');
    break;
  default:
    console.log('Nieznane zwierzę.');
}

/** instrukcja warunkowa switch, break można zamienić na return aby przerwać działanie instrukcji warunkowej i zwrócić jakąś wartość
 *
 *
 * output: To zwierzę żyje w gospodarstwie.
 */
