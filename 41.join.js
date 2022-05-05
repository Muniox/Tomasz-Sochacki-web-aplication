//join jest odwrotnością split

const numbers = [1, 2, 3];
console.log(numbers.join()); //"1,2,3"
console.log(numbers.join('')); //"123"
console.log(numbers.join('_')); //"1_2_3"

//łączy ze sobą elementy w tablicy po podanym separatorze, domyslnym separatorem jest ','