document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (!taskText) {
      alert("Please enter a task.");
      return;
    }

    // Task Creation and Removal
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";

    // Assign onclick event to remove button
    removeButton.onclick = function () {
      taskList.removeChild(taskItem);
    };

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Clear the task input field
    taskInput.value = "";
  }

  // Attach Event Listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
