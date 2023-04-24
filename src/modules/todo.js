// get items from local storage
function parseLocalStorage() {
  return JSON.parse(localStorage.getItem("toDos")) || [];
}
// render tasks from local storage
function render(list) {
  const inbox = document.querySelector(".todo");
  inbox.textContent = "";

  if (list) {
    const toDos = list;
    toDos.forEach((item, id) => {
      (() =>
        new Task(
          item.id,
          id,
          item.task,
          item.description,
          item.date,
          item.completed,
          item.project,
          item.priority
        ))();
    });
    return;
  }

  const toDos = parseLocalStorage();
  toDos.forEach((item, id) => {
    (() =>
      new Task(
        id,
        id,
        item.task,
        item.description,
        item.date,
        item.completed,
        item.project,
        item.priority
      ))();
    toDos[id].id = id;
    localStorage.setItem("toDos", JSON.stringify(toDos));
  });
}
// create tasks
class Task {
  constructor(
    id,
    listId,
    title,
    description,
    date,
    completed,
    project,
    priority
  ) {
    this.id = id;
    this.listId = listId;
    this.title = title;
    this.description = description;
    this.date = date;
    this.completed = completed;
    this.project = project;
    this.priority = priority;
    this.#create();
  }

  createTaskContainer(inbox) {
    // task container
    const task = document.createElement("div");
    task.classList.add("task-container");
    task.setAttribute("id", this.id);
    inbox.appendChild(task);
    switch (this.priority) {
      case "1":
        task.classList.add("prio1");
        break;
      case "2":
        task.classList.add("prio2");
        break;
      case "3":
        task.classList.add("prio3");
        break;
      default:
        console.log("black");
        break;
    }
    return task;
  }

  // create task ui and functions
  #create() {
    const inbox = document.querySelector(".todo");
    // task container
    const task = this.createTaskContainer(inbox);

    // task form
    const taskForm = document.createElement("form");
    taskForm.classList.add("task-form");
    task.appendChild(taskForm);

    // task title
    const title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "taskTitle");
    title.value = this.title;
    title.classList.add("task-title");
    title.readOnly = true;
    taskForm.appendChild(title);

    // task description
    const description = document.createElement("textarea");
    description.setAttribute("name", "taskDescription");
    description.setAttribute("rows", 1);
    description.value = this.description;
    description.classList.add("task-description");
    description.readOnly = true;
    taskForm.appendChild(description);

    // task date
    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("name", "taskDate");
    date.value = this.date;
    date.classList.add("task-date");
    date.readOnly = true;
    taskForm.appendChild(date);

    // project selector
    const projectSelect = document.createElement("select");
    projectSelect.classList.add("task-selector");
    projectSelect.disabled = true;
    taskForm.appendChild(projectSelect);
    const allOptions = document.querySelectorAll("#project-select option");
    allOptions.forEach((opt) => {
      const newOption = document.createElement("option");
      newOption.value = opt.value;
      newOption.textContent = opt.label;
      if (this.project === opt.value) {
        newOption.setAttribute("selected", "selected");
      }
      projectSelect.appendChild(newOption);
    });

    function disableButtons(itemId) {
      const selectForm = document.querySelectorAll(".task-form");
      selectForm.forEach((item, id) => {
        if (itemId !== id) {
          const selectEdit = item.querySelector(".edit-button");
          selectEdit.disabled = true;
          const selectDelete = item.querySelector(".delete-button");
          selectDelete.disabled = true;
        }
      });
    }

    // task edit button and functions
    const editBtn = document.createElement("input");
    editBtn.setAttribute("type", "submit");
    editBtn.value = "EDIT";
    editBtn.classList.add("edit-button");
    editBtn.classList.add("task-button");
    taskForm.appendChild(editBtn);

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      disableButtons(this.listId);
      editBtn.value = "SAVE";
      title.readOnly = false;
      title.classList.toggle("edit");
      description.readOnly = false;
      description.classList.toggle("edit");
      date.readOnly = false;
      date.classList.toggle("edit");
      projectSelect.disabled = false;

      editBtn.addEventListener("click", (event) => {
        event.preventDefault();
        editBtn.value = "EDIT";
        title.readOnly = true;
        title.classList.toggle("edit");
        description.readOnly = true;
        description.classList.toggle("edit");
        date.readOnly = true;
        projectSelect.disabled = true;

        date.classList.toggle("edit");
        const data = parseLocalStorage();
        data[this.id].task = taskForm.taskTitle.value;
        data[this.id].description = taskForm.taskDescription.value;
        data[this.id].date = taskForm.taskDate.value;
        data[this.id].project = projectSelect.value;
        localStorage.setItem("toDos", JSON.stringify(data));
        render();
      });
    });

    // task delete button and functions
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DONE";
    deleteBtn.classList.add("delete-button");
    deleteBtn.classList.add("task-button");
    taskForm.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", (del) => {
      del.preventDefault();
      const data = parseLocalStorage();
      data.splice(this.id, 1);
      document.querySelectorAll(".task-container")[this.listId].remove();
      localStorage.setItem("toDos", JSON.stringify(data));
      // render();
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
    project: form.projectselect.value,
    priority: form.priorityselect.value,
  };
  toDos.push(toDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
  render();
}

export { saveToDo, Task, render, parseLocalStorage };
