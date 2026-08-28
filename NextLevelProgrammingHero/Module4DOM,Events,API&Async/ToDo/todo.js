
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");

let taskList = document.getElementById("taskList");

let tasks = [];
let taskIdCounter = 1;

function render() {
    taskList.innerHTML = "";
    tasks.forEach((task) => {

        let li = document.createElement("li");
        li.classList.add("taskItem");

        let span = document.createElement("span");
        span.classList.add("taskText");

        span.textContent = task.text;

        let btnWrapper = document.createElement("span");
        btnWrapper.classList.add("taskButton");

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";

        completeBtn.addEventListener("click", () => {
            completeTask(task.id);
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        })


        btnWrapper.appendChild(completeBtn);
        btnWrapper.appendChild(deleteBtn);

        li.appendChild(span);
        li.appendChild(btnWrapper);

        taskList.appendChild(li);

        span.textContent = `task:${task.text}  ---->  Is Completed:${task.completed}`;




    });
}

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText == "") {
        return;
    }

    let newTask = {
        id: taskIdCounter++,
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = "";

    render();

}

function completeTask(id) {
    let task = tasks.find((task) => task.id == id);
    task.completed = !task.completed;

    render();
}

function deleteTask(id) {
    let task = tasks.filter((task) => task.id != id);
    tasks=task;

    render();
}

render();

addBtn.addEventListener("click", addTask);