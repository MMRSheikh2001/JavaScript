function sendForm(event){
    event.preventDefault();

    let name = document.getElementById('name').value.trim();
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;


    let gender = document.querySelector("input[name = 'gender']:checked")    ;
    let subject = document.getElementById('subject').value;
    let hobby = document.querySelectorAll("input[name = 'hobby']:checked")  ;

    let hobbyValue = [];
    for (let i=0 ; i< hobbyValue.length; i++){
        hobbyValue.push(hobby[i].value);
    }





    if (name.length == 0) {

        document.getElementById("nameError").innerHTML = "Name can not be empty";
        document.getElementById("nameError").style.color = "red";
        return;
    } else if(name.length <3 || name.length>20){
        document.getElementById("nameError").innerHTML = "Name length must be between 3 to 20 character";
        document.getElementById("nameError").style.color = "red";
        return;
    }


    let output = "Name: " + name +"\n" + "Number: " + number +"\n" + 
    "Email: " + email +"\n" + "Password: " + password +"\n" + 
    "Address: " + address +"\n" + "Gender: " + gender.value +"\n" + 
    "Subject: " + subject +"\n" + "Hobby: " + hobbyValue +"\n" 

     let newWindow = window.open('','_blank');
   newWindow.document.writeln("<pre>" +output + "</pre>");


}
let form = document.getElementById('regForm')
regForm.addEventListener('submit', sendForm);