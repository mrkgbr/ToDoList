import { saveToDo, render } from "./todo";

// function for cancel button
function cancelFunction() {
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
function addFunction() {
  const add = document.querySelector("#submit");
  add.addEventListener("click", (e) => {
    e.preventDefault();
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.toggle("hidden");
    const form = document.querySelector(".form");
    saveToDo(form);
    // set values to default
    form.task.value = "";
    form.description.value = "";
    form.datum.value = "";
    render();
  });
}

// function for new button
function newFunction() {
  const newButton = document.querySelector(".new-button");
  newButton.addEventListener("click", () => {
    const formContainer = document.querySelector(".form-container");
    formContainer.classList.toggle("hidden");
  });
}

export default function buttonFunctions() {
  cancelFunction();
  addFunction();
  newFunction();
}
