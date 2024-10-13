document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    let tasks = [];

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            tasks.forEach(task => {
                createTaskElement(task);
            });
        }
    }

    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        listItem.classList.add('task-item');


        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');


        removeButton.onclick = function() {
            taskList.removeChild(listItem);
            removeTask(taskText);
        };
        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
            
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        tasks.push(taskText);
        createTaskElement(taskText);
        saveTasks();

        taskInput.value = "";
    }

    function removeTask(taskText) {
        tasks = tasks.filter(task => task !== taskText);
        saveTasks();
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
        });