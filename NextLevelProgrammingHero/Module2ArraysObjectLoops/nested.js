let user = {
    name: "Mahbub",
    age: 24,
    isAdult: true,
    address: {
        city: "Dhaka",
        area: "Basilla",
        postCode: 1207
    }
};

console.log(user);

console.log(user.address.area);
console.log(user["address"]["postCode"]);
console.log("=====================================================================");

let entry = Object.entries(user);


console.log(entry);
console.log("=====================================================================");

console.log(entry[0]);
console.log("=====================================================================");
console.log(entry[0][1]);

let student = [
    {
        name: "Rahim",
        id: 1
    },
    {
        name: "Sabbir",
        id: 12
    },
    {
        name: "Karim",
        id: 116
    },
    {
        name: "Badrul",
        id: 123,
        address: {
            thana: "Mirpur",
            zipCode: 1209
        }
    },
];

console.log("=====================================================================");
console.log(student[2].name);
console.log("=====================================================================");
console.log(student[3].address.thana);