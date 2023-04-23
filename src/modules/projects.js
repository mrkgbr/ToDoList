import { parseLocalStorage, render } from "./todo";

export default class Projects {
  static projects = [
    {
      name: "Inbox",
      protected: true,
    },
    {
      name: "Today",
      protected: true,
    },
  ];

  static renderProjects() {
    const items = this.parseProjects();
    items.forEach((item) => {
      this.createProject(item);
    });
    // this.newProject({ name: "Dummy", protected: false });
  }

  static parseProjects() {
    let items = JSON.parse(localStorage.getItem("projectList")) || [];
    if (items.length === 0) {
      items = this.projects;
      localStorage.setItem("projectList", JSON.stringify(items));
    }
    return items;
  }

  static addProjects(item) {
    const items = JSON.parse(localStorage.getItem("projectList"));
    items.push(item);
    localStorage.setItem("projectList", JSON.stringify(items));
  }

  static removeProjects(index) {
    const items = JSON.parse(localStorage.getItem("projectList"));
    items.splice(index, 1);
    localStorage.setItem("projectList", JSON.stringify(items));
    document.querySelectorAll(".project")[index].remove();
    document.querySelectorAll("#project-select option")[index - 1].remove();
    render();
  }

  static createProject(item) {
    const projectContainer = document.querySelector(".project-container");
    const projectItem = document.createElement("div");
    projectItem.classList.add("project");
    projectItem.setAttribute("id", item.name);
    projectContainer.appendChild(projectItem);
    const project = document.createElement("p");
    project.textContent = item.name;
    projectItem.appendChild(project);

    if (!item.protected) {
      const projectDelete = document.createElement("button");
      projectDelete.textContent = "DEL";
      projectItem.appendChild(projectDelete);
      projectDelete.addEventListener("click", () => {
        const projects = this.parseProjects();
        const index = projects.findIndex(
          (searchFor) => searchFor.name === item.name
        );
        this.removeProjects(index);
      });
    }

    if (
      item.name !== "Inbox" &&
      item.name !== "Today" &&
      item.name !== "Late"
    ) {
      const select = document.querySelector("#project-select");
      const newOption = document.createElement("option");
      newOption.value = item.name.toLowerCase();
      newOption.textContent = item.name;
      select.appendChild(newOption);
    }

    project.addEventListener("click", () => {
      const localList = parseLocalStorage();
      if (item.name === "Inbox") {
        render();
        return;
      }

      if (item.name === "Today") {
        const filteredList = localList.filter((localItem) => {
          const date = new Date().toJSON();
          const currentDate = Date.parse(date);
          const localItemDate = Date.parse(localItem.date);
          return localItemDate < currentDate;
        });
        render(filteredList);
        return;
      }

      const filteredList = localList.filter(
        (localItem) => localItem.project === item.name.toLowerCase()
      );
      render(filteredList);
    });
  }

  static newProject(item) {
    this.createProject(item);
    this.addProjects(item);
    render();
  }
}
