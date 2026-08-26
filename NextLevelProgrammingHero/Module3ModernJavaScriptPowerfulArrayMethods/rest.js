function add(...number) {
    let total = 0;
    for (const n of number) {
        total += n;
    }

    console.log(number);
    console.log(total);
    return total;
}
add(1, 2, 3.432);

const obj = {
    name: "Mahbub",
    age: 23,
    address: "Dhaka",
    occupation: "Coder"
};
const { name, ...remaining } = obj;

console.log(remaining);

const arr2 = [1, 2, 3, 5, 7.4];
const [, , , ...resting] = arr2;
console.log(resting);

function add(name, ...amount) {
    let sum = 0;
    for (const i of amount) {
        sum += i;
    }
    console.log(`${name} has earnt ${sum} BDT`);
}
add("Mahbub", 12, 45, 23, 76, 85);