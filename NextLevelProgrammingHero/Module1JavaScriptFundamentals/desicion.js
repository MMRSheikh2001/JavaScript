let age = 4;

if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Not a voter");
}

let mark = 80;

if (mark >= 80) {
    console.log("A+")
} else if (mark >= 70) {
    console.log("A")
} else if (mark >= 60) {
    console.log("A-")
} else {
    console.log("Failure");
}

switch (true) {
    case mark >= 80:
        console.log("A+");
        break;

    case mark >= 70:
        console.log("A");
        break;
    case mark >= 60:
        console.log("A-");
        break;
    default:
        console.log("Failure");
}

age>=18 ?console.log("Voter"):console.log("Minor");