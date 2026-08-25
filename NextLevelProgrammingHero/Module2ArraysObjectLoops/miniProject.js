//mini project
let students = [
    { id: 101, name: "Rahim", age: 20, department: "CSE" },
    { id: 102, name: "Karim", age: 22, department: "EEE" },
];

function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 100;
    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: dept
    };
    students.push(newStudent);
    console.log(" Student Added Successfully");

}

function getAll() {
    for (let stu of students) {
        console.log(stu);
    }
}
function findStudent(id) {
    let foundStudent = null;
    for (let stu of students) {
        if (stu.id == id) {
            foundStudent = stu;
            break;
        }


    }

    if (foundStudent) {
        console.log("Found Student ", foundStudent);
    } else {
        console.log("404 Not found");
    }
}

function deleteStudent(id) {
    let targetStudent = -1;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            targetStudent = i;
            break;
        }
    }

    if (targetStudent != -1) {
        console.log("Found Student .Now Deleting...", targetStudent);
        students.splice(targetStudent, 1);
    } else {
        console.log("404 Not found");
    }

}



addStudent("Mahbub", 25, "Statistics");
console.log(students);

console.log("+================================================");

getAll();

console.log("+================================================");

console.log(findStudent(102));
console.log("+==============================================================================");

deleteStudent(101);
deleteStudent(106);
console.log(students);
