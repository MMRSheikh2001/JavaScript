let firstName="Mahbubur";

let lastName="Rahman";

let fullName=firstName+" "+lastName;

console.log(fullName);

fullName=`Md ${firstName} ${lastName} Sheikh \nLakshmipur`;

console.log(fullName);

let randomStr="I am a \" Student \"";

console.log(randomStr);

console.log(fullName.toUpperCase());

console.log(fullName.includes("Laksh"));

console.log(fullName.length);


//Question 3
function validateUsername(userName) {
    userName = userName.toLowerCase();
    if (userName.length < 4) {
        return "Too Short"
    } else if (userName.includes(" ")) {
        return "No Space Allowed";
    } else if (userName.includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }

}

console.log(validateUsername("hello"));