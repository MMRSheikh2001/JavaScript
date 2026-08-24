let marks = [12, 34, 56, 43, 23, 56, 67];
let max = marks[0];

for (let i = 1; i < marks.length; i++) {
    if (max < marks[i]) {
        max = marks[i];
    }
}
console.log(max);

let sum = 0;
for (let i = 0; i <= marks.length - 1; i++) {
    sum += marks[i];
}
console.log(sum);

console.log(marks);
let reMarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
    reMarks.push(marks[i]);
}
console.log(reMarks);