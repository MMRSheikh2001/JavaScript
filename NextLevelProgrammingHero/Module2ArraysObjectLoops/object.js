let user = {
    name: "Mahbub",
    age: 24,
    isAdult: true
};

console.log(user);
console.log(user.age);

console.log(user["isAdult"]);

delete user.isAdult;

console.log(user);

user.canVote = true;
user.address={
    city:"Dhaka",
    area:"Basilla",
    postCode:1207
};

console.log(user);

console.log("=========================================================================");

console.log(Object.entries(user));

console.log("=========================================================================");

console.log(Object.keys(user));