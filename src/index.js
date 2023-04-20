import createStructure from "./modules/ui";
import buttonFunctions from "./modules/button-functions";
import { render } from "./modules/todo";
import Projects from "./modules/projects";

createStructure();
buttonFunctions();
render();
Projects.renderProjects();
