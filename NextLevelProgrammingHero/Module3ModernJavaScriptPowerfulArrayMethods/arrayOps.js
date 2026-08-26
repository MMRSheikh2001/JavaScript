// foreach
let fruits = ["Apple", "Banana", "Mango", "jackfruit"];
let newFruits = fruits.forEach((f, idx) => {
    console.log(`${idx + 1} -> ${f}`);

})



let newFruits1 = fruits.map((f) => f.toLowerCase())

console.log(newFruits1);

console.log(fruits);

let customFruit=fruits.filter((f)=>f.length>5);
console.log(customFruit);