let names=["Mahbub","Mili","Sabbir","Badrul"];

console.log(names);
console.log(names.length);

console.log(names[0]);
try {
    console.log(names[3]);
} catch (error) {
    console.log("Error :"+error);
}

names.push("Emon");
names.push("Shaharan");
console.log(names);

names.pop();
console.log(names);

names.unshift("Emran");
console.log(names);

names.shift();

console.log(names);

names.splice(2,0,"Emran","Tanvir");
console.log(names);

let sliced=names.slice(2,5);
console.log(sliced);