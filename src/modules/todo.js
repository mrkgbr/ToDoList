// get items from local storage
function parseLocalStorage() {
  return JSON.parse(localStorage.getItem("toDos")) || [];
}
// render tasks from local storage
function render() {
  const inbox = document.querySelector(".todo");
  inbox.textContent = "";
  const toDos = parseLocalStorage();
  toDos.forEach((item, id) => {
    (() =>
      new Task(id, item.task, item.description, item.date, item.completed))();
  });
}
// creat tasks
class Task {
  constructor(id, title, description, date, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.completed = completed;
    this.#create();
  }

  // create task ui and functions
  #create() {
    const inbox = document.querySelector(".todo");
    // task container
    const task = document.createElement("div");
    task.classList.add("task-container");
    task.setAttribute("id", this.id);
    inbox.appendChild(task);
    // task form
    const taskForm = document.createElement("form");
    taskForm.classList.add("task-form");
    task.appendChild(taskForm);
    // task title
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "taskTitle");
    title.readOnly = true;
    title.value = this.title;
    title.classList.add("task-title");
    taskForm.appendChild(title);
    // task description
    const description = document.createElement("textarea");
    description.setAttribute("name", "taskDescription");
    description.readOnly = true;
    description.value = this.description;
    description.classList.add("task-description");
    taskForm.appendChild(description);
    // task date
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("name", "taskDate");
    date.readOnly = true;
    date.value = this.date;
    date.classList.add("task-date");
    taskForm.appendChild(date);
    // task edit button and functions
    const editBtn = document.createElement("input");
    editBtn.setAttribute("type", "submit");
    editBtn.value = "EDIT";
    editBtn.classList.add("edit-button");
    taskForm.appendChild(editBtn);

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      editBtn.value = "SAVE";
      title.readOnly = false;
      title.classList.toggle("edit");
      description.readOnly = false;
      description.classList.toggle("edit");
      date.readOnly = false;
      date.classList.toggle("edit");

      editBtn.addEventListener("click", (event) => {
        event.preventDefault();
        editBtn.value = "EDIT";
        title.readOnly = true;
        title.classList.toggle("edit");
        description.readOnly = true;
        description.classList.toggle("edit");
        date.readOnly = true;
        date.classList.toggle("edit");
        const data = parseLocalStorage();
        data[this.id].task = taskForm.taskTitle.value;
        data[this.id].description = taskForm.taskDescription.value;
        data[this.id].date = taskForm.taskDate.value;
        localStorage.setItem("toDos", JSON.stringify(data));
        render();
      });
    });
    // task delete button and functions
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DEL";
    deleteBtn.classList.add("delete-button");
    taskForm.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (del) => {
      del.preventDefault();
      const data = parseLocalStorage();
      data.splice(this.id, 1);
      document.querySelectorAll(".task-container")[this.id].remove();
      localStorage.setItem("toDos", JSON.stringify(data));
      render();
    });
  }
}
// save new task to the locaL storage
function saveToDo(form) {
  const toDos = parseLocalStorage();
  const toDo = {
    task: form.task.value,
    description: form.description.value,
    date: form.datum.value,
    completed: false,
  };
  toDos.push(toDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

export { saveToDo, Task, render };
