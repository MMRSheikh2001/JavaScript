let price = 500;
let quantity = 5;

console.log(`${price * quantity} BDT\nPay the price to get it`);

function getDiscount(price) {
    return price * 0.1;
}
console.log(`You saved ${getDiscount(price)}BDT\nUse this as an Investment`);
console.log(`Your total bill is : ${price * quantity - getDiscount(price)} BDT`);

let stock = 2;
console.log(`${stock > 0 ? "In Stock: "+": "+stock : "Out of Stock"}`);