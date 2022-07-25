function addTask() {}

function updateTodoList() {
    let todoList = document.getElementById("todo-list")
    todoList.innerHTML = "";
    todoTasksText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoTaskElement(task, index);
        todoList.appendChild(newTodoTaskElement);
    });
    }

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {}

let todoTasksText = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
updateTodoList();



let todoList = document.getElementById("todo-list");

function createNewToDoTaskElement(task, index) {    
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task; 
    ...
    todoList.appendChild(newTodoTaskElement);
    return newTodoTaskElement;

todoTasksText.forEach((task, index) => {
    createNewToDoTaskElement(task, index);
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
    }

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

});
    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Completed"
    newTodoTaskElement.appendChild(completeButtonElement);
    completeButtonElement.onclick = function () {
        toggleComplete(index)
    };

    function toggleComplete(index) {
        if (todoTasksStatus[index] == false) {
            todoTasksStatus[index] = true;
        } else {
            todoTasksStatus[index] = false;
        }
        console.log(todoTasksStatus);
    }
        
    ??newTodoTaskElement.appendChild(completeButtonElement);
    
});