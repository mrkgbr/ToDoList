class Task {
  constructor(id, title, description, date, completed) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.completed = completed;
    this.create();
  }

  create() {
    const inbox = document.querySelector(".todo");
    const task = document.createElement("div");
    task.classList.add("task-container");
    task.setAttribute("id", this.id);
    inbox.appendChild(task);
    const title = document.createElement("p");
    title.textContent = this.title;
    title.classList.add("task-title");
    task.appendChild(title);
    const description = document.createElement("p");
    description.textContent = this.description;
    description.classList.add("task-description");
    task.appendChild(description);
    const date = document.createElement("p");
    date.textContent = this.date;
    date.classList.add("task-date");
    task.appendChild(date);
    // console.log(this.id);
    // console.log(this.title);
    // console.log(this.description);
    // console.log(this.date);
    // console.log(this.completed);
  }
}

function saveToDo(form) {
  const toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  const toDo = {
    task: form.task.value,
    description: form.description.value,
    date: form.datum.value,
    completed: false,
  };
  // console.log(toDo);
  toDos.push(toDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function render() {
  const inbox = document.querySelector(".todo");
  inbox.textContent = "";
  const toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  toDos.forEach((item, id) => {
    (() =>
      new Task(id, item.task, item.description, item.date, item.completed))();
  });
}

export { saveToDo, Task, render };
