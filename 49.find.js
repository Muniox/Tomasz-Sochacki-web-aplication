//find używamy wtedy jeśli nie znamy danej nam wartość a jdynie jakieś założenia, reguły

const numbers = [5, 10, 15, 20];

numbers.find(n => n > 10); //15

const orders = [
    {type: 'A', price: 100},
    {type: 'A', price: 110},
    {type: 'B', price: 150},
    {type: 'B', price: 100}
];

const getRebate = type => type === 'A' ? 0.1 : 0.2;

orders.find(order => order.price * (1 - getRebate(order.type)) > 100); // {type: 'B', price: 150}

// jeśli nie znajdzie szukanego elementu zwróci nam undefind