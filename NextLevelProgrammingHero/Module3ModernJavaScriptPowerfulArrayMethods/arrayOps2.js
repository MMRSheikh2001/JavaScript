let students = [
    { name: "Rahim", marks: 85 },
    { name: "Karim", marks: 45 },
    { name: "Fahim", marks: 70 },
];

let fruits = ["Apple", "Banana", "Mango", "jackfruit"];
let customFruit = fruits.find((f) => f.length > 5);
console.log(customFruit);

let exist = fruits.includes("orange");
console.log(exist);
console.log("==================================================");

let studentCheck = students.some((s) => s.marks > 70);
console.log(studentCheck);

let studentCheck1 = students.every((s) => s.marks > 70);

console.log("==================================================================================================");

console.log(studentCheck1);