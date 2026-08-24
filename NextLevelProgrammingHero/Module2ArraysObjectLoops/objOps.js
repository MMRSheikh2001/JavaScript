let student = {
    name: "Rahim",
    id: 102,
    marks: {
        bangla: 75,
        english: 82,
        math: 90,
    },
};

let totalMarks = 0;
let totalSubjects = 0;
for (let ele in student.marks) {

    totalMarks += student.marks[ele];
    totalSubjects++;
}

console.log(totalMarks);
console.log(totalSubjects);
let avg = totalMarks / totalSubjects;
console.log(totalMarks / totalSubjects);
console.log(avg.toFixed(2));

if (avg >= 80) {
    console.log("Got A+");
}


// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
    { name: "Shirt", price: 1200, quantity: 2 },
    { name: "Pants", price: 1800, quantity: 1 },
    { name: "Socks", price: 150, quantity: 3 },
];

let totalItem = 0;
let totalBill = 0;

for (let items of cart) {

    totalItem += items.quantity;
    totalBill += items.price;



}
console.log("================================================================================================");
console.log(`${totalItem} items`);
console.log(`Total Bill : ${totalBill} BDT`);