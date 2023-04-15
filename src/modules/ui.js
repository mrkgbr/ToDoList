const body = document.querySelector("body");

export default function createStructure() {
  createSidebar();
  createHeader();
  createTodo();
}

function createHeader() {
  const div = document.createElement("div");
  div.classList.add("header");
  div.textContent = "This is the header"; // for testing
  body.appendChild(div);
}

function createTodo() {
  const div = document.createElement("div");
  div.classList.add("todo");
  div.textContent = "This is the todo list"; // for testing
  body.appendChild(div);
}

function createSidebar() {
  const div = document.createElement("div");
  div.classList.add("sidebar");
  div.textContent = "This is the sidebar"; // for testing
  body.appendChild(div);
}
