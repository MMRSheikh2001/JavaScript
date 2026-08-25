//DRY  ---Don't Repeat Yourself

function isValidPrice(price) {
    return typeof (price) == "number" && price > 0;
}

function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("mahabub@"))
console.log(isValidPrice("10"));

let calculateDiscountedPrice = (price, discountRate) => {
    if (!isValidPrice(price)) {
        console.log("Invlid Price");
        return null;
    }
    let discountAmount = price * discountRate / 100;
    return price - discountAmount;
}

function calculateFinalBill(price, vatPercentage = 15) {
    let vat = (price * vatPercentage) / 100;
    return price + vat;
}

let formatBDT = (amount) => {
    return `${amount.toFixed(2)} BDT`;
}
let finalPrice = calculateDiscountedPrice(500, 5);

let formattedPrice = formatBDT(finalPrice);
console.log(formattedPrice);

function capitalize(str) {
    if (!str) {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);

}

function processOrder(user, price, discountCode) {
    console.log(`============Processing Order for ${user.name}======================`);
    if (!isValidEmail(user.email)) {
        console.log("Invalid Email");
        return;
    }
    let currentPrice = price;

    if (discountCode == "WB") {

        currentPrice = calculateDiscountedPrice(currentPrice, 12);
        console.log(`12% discount Applied`);
        currentPrice = calculateFinalBill(currentPrice);
        console.log(`Final Amount to Pay ${formatBDT(currentPrice)}`);
        console.log("Order Completed");
    }
}
let user1 = {
    name: "Mahbub",
    email: "mahbub@gmail.com"
};
processOrder(user1, 3000, "WB");