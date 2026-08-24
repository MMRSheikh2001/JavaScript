let techStack = ["html", "css", "bootstrap", "js", "sql", "java", "ts", "angular", "SpringBoot", "Android", "Flutter"];

for (let tech of techStack) {
    console.log(`Learning ${tech}`);
}

let obj = {
    name: "Mr X",
    age: 45,
    address: "Dhaka"
};

for (let ele in obj) {
    console.log(ele, `--> ${obj[ele]}`);
}

let marks = 60;

for (let i = 0; i <= 100; i++) {
    if (i == marks) {
        break;
    }
    console.log(i);
}

console.log("===================================================================================================");

for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log(i);
}