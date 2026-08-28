console.log("App start");

let taskInput=document.getElementById("taskInput");
let addBtn =document.getElementById("addBtn");

let taskList=document.getElementById("taskList");

 // console.log(taskInput,addBtn,taskInput);

//  let addBtnAlt=document.querySelector("button");

// let addBtnAlt=document.querySelector("#addBtn");

//  console.log(addBtnAlt);

// addBtn.addEventListener("click",function(){
//     console.log("btn clicked");
// })

addBtn.addEventListener("click",()=>{
    console.log(taskInput.value);
    let li=document.createElement("li");
    // li.textContent=taskInput.value;
    

    let span=document.createElement("span");

    span.textContent=taskInput.value;

    let btnWrapper=document.createElement("span");

    let completeBtn=document.createElement("button");
completeBtn.textContent="✅";

    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="❌";

    li.appendChild(span);
    li.appendChild(btnWrapper);

    btnWrapper.appendChild(completeBtn);
    btnWrapper.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value="";
})

taskInput.addEventListener("keydown",(event)=>{
if(event.key==="Enter"){
    console.log("Enter Pressed\n",taskInput.value);
    let li=document.createElement("li");
    li.innerHTML="<strong>"+taskInput.value+"</strong>";
    taskList.appendChild(li);
    taskInput.value="";
}
})

//create element

// let li=document.createElement("li");
// li.textContent="Learn Js";
// console.log(li);
// taskList.appendChild(li)