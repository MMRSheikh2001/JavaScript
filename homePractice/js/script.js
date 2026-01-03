function formDataSend(event) {

    event.preventDefault();

    let myName = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let subject = document.getElementById("subject").value;



    let gender = document.querySelector('input[name="gender"]:checked');

    
    let hobby = document.querySelectorAll('input[name="hobby"]:checked');

    let hobbyValue = [];
    for (let i = 0; i < hobby.length; i++) {
        hobbyValue.push(hobby[i].value);
    }

    let output = "<br> Name : " + myName + "<br> Phone Number : " + phoneNumber + "<br> Email : " + email
        + "<br> Password : " + password + "<br> Address : " + address + "<br> Subject : " + subject + "<br> Gender : " + gender.value +
        "<br> Hobby : " + hobbyValue;

    let newWindow = window.open('', '_blank');
    newWindow.document.writeln(output);

}
let myForm = document.getElementById("myForm");
myForm.addEventListener('submit',formDataSend);