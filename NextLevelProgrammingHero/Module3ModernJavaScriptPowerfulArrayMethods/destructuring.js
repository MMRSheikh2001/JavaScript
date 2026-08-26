const student = {
    name: "Mahbub",
    age: 20,
    address: "Dhaka,Bangladesh"
};

const oldName = student.name;
const { name, age:stuAge, address } = student;
console.log(name);

const student1 = {
      name: "Sabbir",
    age: 20,
    address: {
        city: "Dhaka",
        zipCode: 1207
    }
};

const {address:{city,zipCode},name:studentName,age}=student1;
console.log(studentName);

const arr=["1st item","2nd item","3rd item"];

const [first,second,third]=arr;
console.log(second);


const student2 = {
  name: "fahim",
  age: 20,
  address: {
    city: "Dhaka",
    zip: 1212,
  },
  hobbies: ["Gardening", "Painting"],
};

// const {name:stName,address{city,zipCode:zip},hobbies:[]}=student2;