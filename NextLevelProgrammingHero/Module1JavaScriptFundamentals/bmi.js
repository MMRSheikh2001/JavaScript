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

//Question 2
function getDayType(day) {
    day = day.toLowerCase().trim();

    switch (day) {
        case "saturday":
            return "Weekend";
            break;
        case "sunday":
            return "Working Day";

            break;
        case "monday":
            return "Working Day";

            break;
        case "tuesday":
            return "Working Day";

            break;
        case "wednesday":
            return "Working Day";

            break;
        case "thursday":
            return "Working Day";

            break;
        case "friday":
            return "Weekend";

            break;

        default:
            return "Invalid Day";
            break;
    }

}
console.log(getDayType("SaturDay"));