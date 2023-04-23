const body = document.querySelector("body");

// function createHeader() {
//   const div = document.createElement("div");
//   div.classList.add("header");
//   body.appendChild(div);
// }

function createTodo() {
  const div = document.createElement("div");
  div.classList.add("todo");
  body.appendChild(div);
}

function createSidebar() {
  const div = document.createElement("div");
  div.classList.add("sidebar");
  body.appendChild(div);

  const newButton = document.createElement("button");
  newButton.classList.add("new-button");
  newButton.textContent = "Create Task";
  div.appendChild(newButton);

  const addProjectButton = document.createElement("button");
  addProjectButton.classList.add("project-button");
  addProjectButton.textContent = "Add Project";
  div.appendChild(addProjectButton);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  div.appendChild(projectContainer);
}

function createForm() {
  // add container div
  const container = document.createElement("div");
  container.classList.add("form-container");
  container.classList.add("hidden");
  body.appendChild(container);
  // add container div
  const main = document.createElement("div");
  main.classList.add("form-main");
  // container.classList.add("hidden");
  container.appendChild(main);

  // add form
  const form = document.createElement("form");
  form.classList.add("form");
  main.appendChild(form);

  // add task name
  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", "task");
  taskLabel.textContent = "Task Title";
  form.appendChild(taskLabel);
  const task = document.createElement("input");
  task.setAttribute("type", "text");
  task.setAttribute("id", "task");
  task.setAttribute("name", "task");
  task.setAttribute("placeholder", "e.g. walk the dog");
  task.setAttribute("required", "");
  form.appendChild(task);

  // add description
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "description");
  descriptionLabel.textContent = "Description";
  form.appendChild(descriptionLabel);
  const description = document.createElement("textarea");
  description.setAttribute("id", "description");
  description.setAttribute("name", "description");
  description.setAttribute("rows", "6");
  description.setAttribute("maxlength", "200");
  form.appendChild(description);

  // add date
  const datumLabel = document.createElement("label");
  datumLabel.setAttribute("for", "datum");
  datumLabel.textContent = "Due date";
  form.appendChild(datumLabel);
  const datum = document.createElement("input");
  datum.setAttribute("type", "date");
  datum.setAttribute("id", "datum");
  datum.setAttribute("name", "datum");
  form.appendChild(datum);
  // add select
  const select = document.createElement("select");
  select.setAttribute("id", "project-select");
  select.setAttribute("name", "projectselect");
  form.appendChild(select);
  const optionDefault = document.createElement("option");
  optionDefault.value = "default";
  optionDefault.textContent = "-";
  select.appendChild(optionDefault);

  // add button
  const addButton = document.createElement("input");
  addButton.setAttribute("type", "submit");
  addButton.setAttribute("id", "submit");
  addButton.setAttribute("value", "Add");
  form.appendChild(addButton);
  // cancel button
  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("id", "cancel");
  cancelButton.textContent = "Cancel";
  form.appendChild(cancelButton);
}

export default function createStructure() {
  createSidebar();
  // createHeader();
  createTodo();
  createForm();
}
