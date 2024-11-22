// taskmanager.js

// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskContainer = document.getElementById("taskContainer");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    // Add event listeners to buttons
    taskItem.querySelector(".complete-btn").addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskItem.remove();
    });

    // Add the new task to the list
    taskContainer.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
}

// Attach event listener to Add Task button
addTaskButton.addEventListener("click", addTask);

// Allow Enter key to add a task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
