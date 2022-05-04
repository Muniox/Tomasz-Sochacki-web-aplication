const str = 'a-b-c-d';
str.split('-'); // ["a","b","c","d"]

const str2 = "a---b---c---d";
str2.split('---'); // ["a","b","c","d"]

//jęsli nie znajdzie separatora zwraca ały wyraz tablicy jako element tablicy
str2.split('x'); //["a---b---c---d"]


//najnowszy i najlepszy sposób jeśli nie ma separatorów

const myStr = 'abcd';
const strArray = [...myStr]; // ["a","b","c","d"]
//to samo tylko przy użyciu 
myStr.split(''); // ["a","b","c","d"]

//drugi opcjonalny parametr, którym jest limit określający 
//maksymalną liczbę elementów otrzymanej tablicy

str2.split('', 3); //["a","b,","c"]

//poniższe wyrażenie regularne umożliwa podział albo po znaku kropki, albo po znaku przecinka.
const price1 = '20,45';
const price2 = '20.45';
price1.split(/[,.]/); //["20","45"]
price2.split(/[,.]/); //["20","45"]