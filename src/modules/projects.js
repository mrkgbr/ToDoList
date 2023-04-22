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
    {
      name: "Late",
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

  static saveProjects(item) {
    const items = JSON.parse(localStorage.getItem("projectList"));
    items.push(item);
    localStorage.setItem("projectList", JSON.stringify(items));
  }

  static createProject(item) {
    const projectContainer = document.querySelector(".project-container");
    const project = document.createElement("p");
    project.textContent = item.name;
    project.classList.add("project");
    project.setAttribute("id", item.name);
    projectContainer.appendChild(project);
    project.addEventListener("click", () => {
      console.log(project);
    });
  }

  static newProject(item) {
    this.createProject(item);
    this.saveProjects(item);
  }
}
