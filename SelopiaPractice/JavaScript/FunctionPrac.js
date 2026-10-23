let obj = {

    name: "Mahbub",
    greet() {
        console.log(this.name);
    }

}
obj.greet();

function say(name = "Sabbir") {
    console.log(`Hello ${name}`)
}
say(20);

function total(...marks) {
    return marks.reduce((sum, mark) => {
        return sum = sum + mark;
    }, 0);
}

console.log(total(1, 3, 5, 6));