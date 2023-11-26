function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-button" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}
