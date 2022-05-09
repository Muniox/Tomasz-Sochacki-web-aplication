// findIndex jest bardzo podobny do find, róznica w tym że zamiast danej wartości zwraca nam jej index

const orders = [
    {type: 'A', price: 100},
    {type: 'A', price: 110},
    {type: 'B', price: 150},
    {type: 'B', price: 100}
];

const getRebate = type => type === 'A' ? 0.1 : 0.2;

function findOrderWithMinimumPrice(order, minPrice) {
    return order.price * (1 - getRebate(order.type) > minPrice);
}

orders.find(order => findOrderWithMinimumPrice(order, 100)); //{type: 'B', price: 150}

orders.findIndex(order => findOrderWithMinimumPrice(order, 100)); //2


//jeśli nie znajdzie danej wartości zwraca nam -1