import { saveToDo, render } from "./todo";
import Projects from "./projects";

// function for cancel button
function cancelButton() {
  const cancel = document.querySelector("#cancel");
  cancel.addEventListener("click", (e) => {
    e.preventDefault();
    const formContainer = document.querySelector(".form-container");
    // console.log("done");
    formContainer.classList.toggle("hidden");
    const form = document.querySelector(".form");
    // set values to default
    form.task.value = "";
    form.description.value = "";
    form.datum.value = "";
  });
}

// function for add button
function addButton() {
  const add = document.querySelector("#submit");
  add.addEventListener("click", (e) => {
    e.preventDefault();
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.toggle("hidden");
    const form = document.querySelector(".form");
    saveToDo(form);
    // set values to default
    form.reset();
    render();
  });
}

// function for new button
function newButton() {
  const newBtn = document.querySelector(".new-button");
  newBtn.addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.toggle("hidden");
  });
}

// function for project button
function addProject() {
  const projectBtn = document.querySelector(".project-button");
  projectBtn.addEventListener("click", () => {
    const projectName = prompt("Please enter a project name:", "New Project");
    const projectObj = {
      name: projectName,
      protected: false,
    };
    Projects.newProject(projectObj);
  });
}

export default function buttonFunctions() {
  cancelButton();
  addButton();
  newButton();
  addProject();
}
