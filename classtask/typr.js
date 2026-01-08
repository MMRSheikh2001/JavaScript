function formValidate(){
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let remarks = document.getElementById("remarks").value;
    let location = document.getElementById("location").value;

    let sex = document.querySelector('input[name="sex"]:checked').value;
    let courses = document.querySelectorAll('input[name="courses"]:checked');

    let courseName = [];
    for(let i = 0 ; i < courses.length; i++){
        courseName.push(courses[i].value);
    }

        let output = "<br> Name : " + name + "<br> Contact : " + contact + "<br> Remarks : " + remarks 
        + "<br> Location : " + location
        + "<br> Sex : " + sex + "<br> Course Names : " + courseName ;
        
        let newWindow = window.open('' , '_blank');
        newWindow.document.writeln(output);

}