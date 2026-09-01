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


function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let totalFare = 50 + 2 * waitingMinutes;
    if (distance > 2) {
        totalFare = totalFare + (distance - 2) * 15;
    }

    if (isNight) {
        totalFare = totalFare + (totalFare * 20 / 100);
    }

    return totalFare;

}

console.log(getCngFare(5, true, 10));


let getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }
    let requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict = "";
    if (requiredRate <= 6) {
        verdict = "Comfortable";
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    } else if (requiredRate > 12) {
        verdict = "Almost Impossible";

        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
    }


}

console.log(getChaseVerdict(100, 70, 12));