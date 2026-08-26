// reduce, sort, chaining

let products = [
    { title: "Mouse", price: 500, inStock: true },
    { title: "Keyboard", price: 1200, inStock: false },
    { title: "Monitor", price: 8000, inStock: true },
    { title: "Headphone", price: 1500, inStock: true },
];

console.log(products)
console.log("==================================================================================================");

let totalPrice = products.reduce((acc, currrent) => {
    return (acc += currrent.price);
}, 0);

console.log(totalPrice);

console.log(totalPrice);

let sorted1 = [10, 30, 600, 35, 900, 20].sort((a, b) => a - b);
console.log(sorted1);
let sorted2 = [10, 30, 600, 35, 900, 20].sort((a, b) => b - a);
console.log(sorted2);

console.log("==================================================================================================");

let sorted = products.sort((a, b) => a.price - b.price);
console.log(sorted);

let estPrice = products.filter((p) => p.inStock == true).reduce((acc, currrent) => {
    return acc += currrent.price
}, 0);
console.log(estPrice);