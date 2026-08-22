const weight = process.argv[2];
const height = process.argv[3];

console.log(weight, height);


function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

const bmi = calculateBMI(weight, height);
console.log(bmi);

switch (true) {
    case bmi < 18.5 && bmi > 0:
        console.log("Underweight");

        break;

    case bmi >= 18.5 && bmi < 25:
        console.log("Normal Weight");
        break;

    case bmi >= 25 && bmi < 30:
        console.log("Overweight");
        break;

    case bmi > 30:
        console.log("Obese");
        break;


    default:
        console.log("Invalid");
        break;
}

