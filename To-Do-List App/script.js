const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

function addTask(taskText) {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskTextElement = document.createElement("span");
  taskTextElement.classList.add("task-text");
  taskTextElement.textContent = taskText;

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = "✔️";
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerHTML = "✏️";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", taskTextElement.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskTextElement.textContent = newText.trim();
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });

  taskActions.appendChild(completeBtn);
  taskActions.appendChild(editBtn);
  taskActions.appendChild(deleteBtn);

  taskItem.appendChild(taskTextElement);
  taskItem.appendChild(taskActions);

  taskList.appendChild(taskItem);
}