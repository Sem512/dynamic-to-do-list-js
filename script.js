document.addEventListener("DOMContentLoaded",function(){

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText == "") {
            alert("Please enter a task.");
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        document.getElementsByClassName("remove-btn").addEventListener("click",function(){    
        taskInput.value = "";
    })

    taskList.appendChild(listItem);
    listItem.appendChild(removeButton);
    }

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key == 'Enter') {
            addTask();
        }
    });
});