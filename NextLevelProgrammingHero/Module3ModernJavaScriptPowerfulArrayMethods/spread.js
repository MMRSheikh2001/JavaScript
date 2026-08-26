let cart = ["Fruits", "Rice"];

//  cart.push("Egg");

let cart1 = [...cart, "Egg"];


console.log(cart, cart1);

const user = {
    name: "Mahbub",
    age: 23
};
const contactInfo = {
    email: "mahbub@gmail.com",
    phone: "01715647575"
};

const fullProfile = {
    ...user,
    ...contactInfo
};
console.log(fullProfile);