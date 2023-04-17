function toDo(form) {
  const toDos = JSON.parse(localStorage.getItem("toDos")) || [];
  const toDo = {
    task: form.task.value,
    description: form.description.value,
    date: form.datum.value,
    completed: false,
  };
  console.log(toDo);
  toDos.push(toDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

export { toDo };
