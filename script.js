        // Wait for the DOM to fully load before running the script
        document.addEventListener('DOMContentLoaded', function() {
            // Select DOM elements
            const addButton = document.getElementById('add-task-btn');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');

            // Function to add a new task
            function addTask() {
                // Retrieve and trim the value from the task input field
                const taskText = taskInput.value.trim();

                // Check if the input is not empty
                if (taskText === "") {
                    alert("Please enter a task.");
                    return;
                }

                // Create a new list item (li) element
                const listItem = document.createElement('li');
                listItem.textContent = taskText;

                // Create a remove button for the task
                const removeButton = document.createElement('button');
                removeButton.textContent = "Remove";
                removeButton.className = 'remove-btn';

                // Add the remove functionality
                removeButton.onclick = function() {
                    taskList.removeChild(listItem);
                };

                // Append the remove button to the list item
                listItem.appendChild(removeButton);

                // Append the list item to the task list
                taskList.appendChild(listItem);

                // Clear the task input field
                taskInput.value = "";
            }

            // Attach event listeners
            addButton.addEventListener('click', addTask);

            // Add task when Enter key is pressed
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
        });
