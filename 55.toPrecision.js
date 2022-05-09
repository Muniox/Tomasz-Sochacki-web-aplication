const number = 3.654321;

number.toPrecision(); //"3.654321"
number.toPrecision(3); //"3.65"
number.toPrecision(2); //"3.7"
number.toPrecision(1); //"4"

//jednak gdy będzie więcej cyfr znaczących przed separatorem części dzisiętnej

const number2 = 555.256;
number.toPrecision(2); //"5.6e+2"

//dlatego najlepiej kożystać tylko z metody to Fixed
