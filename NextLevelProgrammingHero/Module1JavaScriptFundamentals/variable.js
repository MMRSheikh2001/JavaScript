console.log("Hello World");

let name1="Mahbub";

name1="Mahbub R Rahman";

const age=40;

let isOld=true;


console.log(name1);

console.log(age);

console.log(typeof(name1));

console.log(typeof(age));

console.log(typeof(isOld));

function describeValue(value) {
    const type = typeof (value);

    if (value) {
        return `${type} | truthy`;
    } else {
        return `${type} | falsy`;
    }
}

console.log(describeValue(""));