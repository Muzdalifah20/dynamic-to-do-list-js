document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  // Create the addTask Function (modified for Local Storage)
  function addTask(taskText, save = true) {
    // Use input value if no taskText provided
    const text = taskText || taskInput.value.trim();

    // Check if text is not empty
    if (!text) {
      alert("Please enter a task.");
      return;
    }

    // Task Creation and Removal
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.textContent = text;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";

    // Assign onclick event to remove button
    removeButton.onclick = function () {
      // Remove from DOM
      taskList.removeChild(taskItem);

      // Remove from Local Storage
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      const updatedTasks = storedTasks.filter((task) => task !== text);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Clear input if adding new task
    if (!taskText) {
      taskInput.value = "";
    }

    // Save to Local Storage
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(text);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Attach Event Listeners
  addButton.addEventListener("click", () => addTask());

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load existing tasks when page loads
  loadTasks();
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Select DOM Elements
//   const addButton = document.getElementById("add-task-btn");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");

//   // Create the addTask Function
//   function addTask() {
//     const taskText = taskInput.value.trim();

//     // Check if taskText is not empty
//     if (!taskText) {
//       alert("Please enter a task.");
//       return;
//     }

//     // Task Creation and Removal
//     const taskItem = document.createElement("li");
//     taskItem.textContent = taskText;

//     taskItem.classList.add("task-item");

//     const removeButton = document.createElement("button");
//     removeButton.classList.add("remove-btn");
//     removeButton.textContent = "Remove";

//     // Assign onclick event to remove button
//     removeButton.onclick = function () {
//       taskList.removeChild(taskItem);
//     };

//     taskItem.appendChild(removeButton);
//     taskList.appendChild(taskItem);

//     // Clear the task input field
//     taskInput.value = "";
//   }

//   // Attach Event Listeners
//   addButton.addEventListener("click", addTask);

//   taskInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
// });
