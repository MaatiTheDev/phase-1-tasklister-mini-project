document.addEventListener("DOMContentLoaded", () => {
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description");
    const task = taskInput.value.trim();

    if (task !== "") {
      addTaskToList(task);
      taskInput.value = "";
    }
  });
});

function addTaskToList(task) {
  const tasksList = document.getElementById("tasks");

  const li = document.createElement("li");
  li.textContent = task;

  tasksList.appendChild(li);
}
