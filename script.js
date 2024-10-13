
        document.addEventListener('DOMContentLoaded', function() {
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            function addTask() {
                const taskText = taskInput.value.trim();

                if (taskText === "") {
                    alert("Please enter a task.");
                    return;
                }

                const listItem = document.createElement('li');
                listItem.textContent = taskText;
                listItem.classList.add('task-item');  // Add 'task-item' class to the task

                const removeButton = document.createElement('button');
                removeButton.textContent = "Remove";
                removeButton.classList.add('remove-btn');  // Add 'remove-btn' class to the button

                removeButton.onclick = function() {
                    taskList.removeChild(listItem);
                };

                listItem.appendChild(removeButton);

                // Append the list item to the task list
                taskList.appendChild(listItem);

                // Clear the task input field
                taskInput.value = "";
            }

            addButton.addEventListener('click', addTask);
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
        });