let taskList = document.getElementById("taskList");

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskText}
    <span>
      <button onclick="toggleComplete(this)">✓</button>
      <button onclick="deleteTask(this)">✗</button>
    </span>`;

  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function toggleComplete(btn) {
  btn.parentElement.parentElement.classList.toggle("completed");
  saveTasks();
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

window.onload = loadTasks;
