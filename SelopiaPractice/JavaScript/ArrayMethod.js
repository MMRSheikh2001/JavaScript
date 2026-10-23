let nums = [12, 43, 23, 54, 67, 86, 34];

nums.map((num) => {
    console.log(num);
});

let evens = nums.filter((num) => {
    return num % 2 == 0;
});

console.log(evens);

let sum = nums.reduce((add, mark) => {
    return add + mark;
}, 0);

console.log(sum);

let odd = nums.find((num) => {
    return num % 2 == 1;

});

console.log(odd);

let greater = nums.some((num) => {
    return num > 70;
})
console.log(greater);

let every = nums.every((num) => {
    return num > 70;
})
console.log(every);

let include = nums.includes(44);
console.log(include);

let userName = null;

console.log(userName ?? "Mahbub");