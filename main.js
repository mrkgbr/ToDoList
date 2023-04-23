(()=>{"use strict";class t{static projects=[{name:"Inbox",protected:!0},{name:"Today",protected:!0},{name:"Late",protected:!0}];static renderProjects(){this.parseProjects().forEach((t=>{this.createProject(t)}))}static parseProjects(){let t=JSON.parse(localStorage.getItem("projectList"))||[];return 0===t.length&&(t=this.projects,localStorage.setItem("projectList",JSON.stringify(t))),t}static saveProjects(t){const e=JSON.parse(localStorage.getItem("projectList"));e.push(t),localStorage.setItem("projectList",JSON.stringify(e))}static createProject(t){const e=document.querySelector(".project-container"),n=document.createElement("p");if(n.textContent=t.name,n.classList.add("project"),n.setAttribute("id",t.name),e.appendChild(n),"Inbox"!==t.name&&"Today"!==t.name&&"Late"!==t.name){const e=document.querySelector("#project-select"),n=document.createElement("option");n.value=t.name.toLowerCase(),n.textContent=t.name,e.appendChild(n)}n.addEventListener("click",(()=>{console.log(n)}))}static newProject(t){this.createProject(t),this.saveProjects(t)}}const e=document.querySelector("body");function n(){return JSON.parse(localStorage.getItem("toDos"))||[]}function s(){document.querySelector(".todo").textContent="",n().forEach(((t,e)=>{new a(e,t.task,t.description,t.date,t.completed,t.project)}))}class a{constructor(t,e,n,s,a,c){this.id=t,this.title=e,this.description=n,this.date=s,this.completed=a,this.project=c,this.#t()}createTaskContainer(t){const e=document.createElement("div");return e.classList.add("task-container"),e.setAttribute("id",this.id),t.appendChild(e),e}#t(){const t=document.querySelector(".todo"),e=this.createTaskContainer(t),a=document.createElement("form");a.classList.add("task-form"),e.appendChild(a);const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("name","taskTitle"),c.readOnly=!0,c.value=this.title,c.classList.add("task-title"),a.appendChild(c);const o=document.createElement("textarea");o.setAttribute("name","taskDescription"),o.readOnly=!0,o.value=this.description,o.classList.add("task-description"),a.appendChild(o);const d=document.createElement("input");d.setAttribute("type","date"),d.setAttribute("name","taskDate"),d.readOnly=!0,d.value=this.date,d.classList.add("task-date"),a.appendChild(d);const i=document.createElement("input");i.setAttribute("type","submit"),i.value="EDIT",i.classList.add("edit-button"),a.appendChild(i),i.addEventListener("click",(t=>{t.preventDefault(),i.value="SAVE",c.readOnly=!1,c.classList.toggle("edit"),o.readOnly=!1,o.classList.toggle("edit"),d.readOnly=!1,d.classList.toggle("edit"),i.addEventListener("click",(t=>{t.preventDefault(),i.value="EDIT",c.readOnly=!0,c.classList.toggle("edit"),o.readOnly=!0,o.classList.toggle("edit"),d.readOnly=!0,d.classList.toggle("edit");const e=n();e[this.id].task=a.taskTitle.value,e[this.id].description=a.taskDescription.value,e[this.id].date=a.taskDate.value,localStorage.setItem("toDos",JSON.stringify(e)),s()}))}));const r=document.createElement("button");r.textContent="DEL",r.classList.add("delete-button"),a.appendChild(r),r.addEventListener("click",(t=>{t.preventDefault();const e=n();e.splice(this.id,1),document.querySelectorAll(".task-container")[this.id].remove(),localStorage.setItem("toDos",JSON.stringify(e)),s()}))}}!function(){const t=document.createElement("div");t.classList.add("sidebar"),e.appendChild(t);const n=document.createElement("button");n.classList.add("new-button"),n.textContent="Create Task",t.appendChild(n);const s=document.createElement("button");s.classList.add("project-button"),s.textContent="Add Project",t.appendChild(s);const a=document.createElement("div");a.classList.add("project-container"),t.appendChild(a)}(),function(){const t=document.createElement("div");t.classList.add("todo"),e.appendChild(t)}(),function(){const t=document.createElement("div");t.classList.add("form-container"),t.classList.add("hidden"),e.appendChild(t);const n=document.createElement("div");n.classList.add("form-main"),t.appendChild(n);const s=document.createElement("form");s.classList.add("form"),n.appendChild(s);const a=document.createElement("label");a.setAttribute("for","task"),a.textContent="Task Title",s.appendChild(a);const c=document.createElement("input");c.setAttribute("type","text"),c.setAttribute("id","task"),c.setAttribute("name","task"),c.setAttribute("placeholder","e.g. walk the dog"),c.setAttribute("required",""),s.appendChild(c);const o=document.createElement("label");o.setAttribute("for","description"),o.textContent="Description",s.appendChild(o);const d=document.createElement("textarea");d.setAttribute("id","description"),d.setAttribute("name","description"),d.setAttribute("rows","6"),d.setAttribute("maxlength","200"),s.appendChild(d);const i=document.createElement("label");i.setAttribute("for","datum"),i.textContent="Due date",s.appendChild(i);const r=document.createElement("input");r.setAttribute("type","date"),r.setAttribute("id","datum"),r.setAttribute("name","datum"),s.appendChild(r);const l=document.createElement("select");l.setAttribute("id","project-select"),l.setAttribute("name","projectselect"),s.appendChild(l);const u=document.createElement("option");u.value="default",u.textContent="-",l.appendChild(u);const p=document.createElement("input");p.setAttribute("type","submit"),p.setAttribute("id","submit"),p.setAttribute("value","Add"),s.appendChild(p);const m=document.createElement("button");m.setAttribute("id","cancel"),m.textContent="Cancel",s.appendChild(m)}(),document.querySelector("#cancel").addEventListener("click",(t=>{t.preventDefault(),document.querySelector(".form-container").classList.toggle("hidden");const e=document.querySelector(".form");e.task.value="",e.description.value="",e.datum.value=""})),document.querySelector("#submit").addEventListener("click",(t=>{t.preventDefault(),document.querySelector(".form-container").classList.toggle("hidden");const e=document.querySelector(".form");!function(t){const e=n(),s={task:t.task.value,description:t.description.value,date:t.datum.value,completed:!1,project:t.projectselect.value};e.push(s),localStorage.setItem("toDos",JSON.stringify(e))}(e),e.reset(),s()})),document.querySelector(".new-button").addEventListener("click",(()=>{document.querySelector(".form-container").classList.toggle("hidden")})),document.querySelector(".project-button").addEventListener("click",(()=>{const e={name:prompt("Please enter a project name:","New Project"),protected:!1};t.newProject(e)})),s(),t.renderProjects()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sVUFDL0IsTUFBTWtCLEVBQU9yRCxTQUFTQyxjQUFjLFVEbUd4QyxTQUFrQm9ELEdBQ2hCLE1BQU1TLEVBQVE1QyxJQUNSNkMsRUFBTyxDQUNYekMsS0FBTStCLEVBQUsvQixLQUFLWCxNQUNoQlksWUFBYThCLEVBQUs5QixZQUFZWixNQUM5QmEsS0FBTTZCLEVBQUtJLE1BQU05QyxNQUNqQmMsV0FBVyxFQUNYdkIsUUFBU21ELEVBQUtXLGNBQWNyRCxPQUU5Qm1ELEVBQU1oRSxLQUFLaUUsR0FDWHZFLGFBQWFJLFFBQVEsUUFBU04sS0FBS08sVUFBVWlFLEdBQy9DLENDN0dJRyxDQUFTWixHQUVUQSxFQUFLYSxRQUNML0MsR0FBUSxJQU1LbkIsU0FBU0MsY0FBYyxlQUMvQlksaUJBQWlCLFNBQVMsS0FDVGIsU0FBU0MsY0FBYyxtQkFDL0JJLFVBQVU4QixPQUFPLFNBQVMsSUFNdkJuQyxTQUFTQyxjQUFjLG1CQUMvQlksaUJBQWlCLFNBQVMsS0FDbkMsTUFDTXNELEVBQWEsQ0FDakJyRixLQUZrQnNGLE9BQU8sK0JBQWdDLGVBR3pEckYsV0FBVyxHQUViSCxFQUFTeUYsV0FBV0YsRUFBVyxJQzdDbkNoRCxJQUNBdkMsRUFBUzBGLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tb2R1bGVzL2J1dHRvbi1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuICBzdGF0aWMgcHJvamVjdHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJJbmJveFwiLFxuICAgICAgcHJvdGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJUb2RheVwiLFxuICAgICAgcHJvdGVjdGVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJMYXRlXCIsXG4gICAgICBwcm90ZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBzdGF0aWMgcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnBhcnNlUHJvamVjdHMoKTtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZVByb2plY3QoaXRlbSk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5uZXdQcm9qZWN0KHsgbmFtZTogXCJEdW1teVwiLCBwcm90ZWN0ZWQ6IGZhbHNlIH0pO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlUHJvamVjdHMoKSB7XG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKSB8fCBbXTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtcyA9IHRoaXMucHJvamVjdHM7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RMaXN0XCIsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIHN0YXRpYyBzYXZlUHJvamVjdHMoaXRlbSkge1xuICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RMaXN0XCIpKTtcbiAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdExpc3RcIiwgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0KGl0ZW0pIHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgaXRlbS5uYW1lKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIGlmIChcbiAgICAgIGl0ZW0ubmFtZSAhPT0gXCJJbmJveFwiICYmXG4gICAgICBpdGVtLm5hbWUgIT09IFwiVG9kYXlcIiAmJlxuICAgICAgaXRlbS5uYW1lICE9PSBcIkxhdGVcIlxuICAgICkge1xuICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNlbGVjdFwiKTtcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBuZXdPcHRpb24udmFsdWUgPSBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xuICAgIH1cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuZXdQcm9qZWN0KGl0ZW0pIHtcbiAgICB0aGlzLmNyZWF0ZVByb2plY3QoaXRlbSk7XG4gICAgdGhpcy5zYXZlUHJvamVjdHMoaXRlbSk7XG4gIH1cbn1cbiIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbi8vICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4vLyAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbi8vIH1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbygpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gIGNvbnN0IG5ld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LWJ1dHRvblwiKTtcbiAgbmV3QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuICBkaXYuYXBwZW5kQ2hpbGQobmV3QnV0dG9uKTtcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gIGRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcblxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgLy8gYWRkIGNvbnRhaW5lciBkaXZcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgLy8gYWRkIGNvbnRhaW5lciBkaXZcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uY2xhc3NMaXN0LmFkZChcImZvcm0tbWFpblwiKTtcbiAgLy8gY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyBhZGQgZm9ybVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgLy8gYWRkIHRhc2sgbmFtZVxuICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrXCIpO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgVGl0bGVcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza1wiKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza1wiKTtcbiAgdGFzay5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcImUuZy4gd2FsayB0aGUgZG9nXCIpO1xuICB0YXNrLnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRhc2spO1xuXG4gIC8vIGFkZCBkZXNjcmlwdGlvblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNlwiKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMjAwXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAvLyBhZGQgZGF0ZVxuICBjb25zdCBkYXR1bUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkYXR1bUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdHVtXCIpO1xuICBkYXR1bUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZVwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdHVtTGFiZWwpO1xuICBjb25zdCBkYXR1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0dW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGRhdHVtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0dW1cIik7XG4gIGRhdHVtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkYXR1bVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXR1bSk7XG4gIC8vIGFkZCBzZWxlY3RcbiAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgc2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1zZWxlY3RcIik7XG4gIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdHNlbGVjdFwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBjb25zdCBvcHRpb25EZWZhdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgb3B0aW9uRGVmYXVsdC52YWx1ZSA9IFwiZGVmYXVsdFwiO1xuICBvcHRpb25EZWZhdWx0LnRleHRDb250ZW50ID0gXCItXCI7XG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25EZWZhdWx0KTtcblxuICAvLyBhZGQgYnV0dG9uXG4gIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbiAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQWRkXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gIC8vIGNhbmNlbCBidXR0b25cbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsXCIpO1xuICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgY3JlYXRlU2lkZWJhcigpO1xuICAvLyBjcmVhdGVIZWFkZXIoKTtcbiAgY3JlYXRlVG9kbygpO1xuICBjcmVhdGVGb3JtKCk7XG59XG4iLCIvLyBnZXQgaXRlbXMgZnJvbSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBwYXJzZUxvY2FsU3RvcmFnZSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XG59XG4vLyByZW5kZXIgdGFza3MgZnJvbSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvXCIpO1xuICBpbmJveC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnN0IHRvRG9zID0gcGFyc2VMb2NhbFN0b3JhZ2UoKTtcbiAgdG9Eb3MuZm9yRWFjaCgoaXRlbSwgaWQpID0+IHtcbiAgICAoKCkgPT5cbiAgICAgIG5ldyBUYXNrKFxuICAgICAgICBpZCxcbiAgICAgICAgaXRlbS50YXNrLFxuICAgICAgICBpdGVtLmRlc2NyaXB0aW9uLFxuICAgICAgICBpdGVtLmRhdGUsXG4gICAgICAgIGl0ZW0uY29tcGxldGVkLFxuICAgICAgICBpdGVtLnByb2plY3RcbiAgICAgICkpKCk7XG4gIH0pO1xufVxuLy8gY3JlYXRlIHRhc2tzXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgY29tcGxldGVkLCBwcm9qZWN0KSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuI2NyZWF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlVGFza0NvbnRhaW5lcihpbmJveCkge1xuICAgIC8vIHRhc2sgY29udGFpbmVyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCB0aGlzLmlkKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIC8vIGNyZWF0ZSB0YXNrIHVpIGFuZCBmdW5jdGlvbnNcbiAgI2NyZWF0ZSgpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb1wiKTtcbiAgICAvLyB0YXNrIGNvbnRhaW5lclxuICAgIGNvbnN0IHRhc2sgPSB0aGlzLmNyZWF0ZVRhc2tDb250YWluZXIoaW5ib3gpO1xuICAgIC8vIHRhc2sgZm9ybVxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcbiAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICAvLyB0YXNrIHRpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tUaXRsZVwiKTtcbiAgICB0aXRsZS5yZWFkT25seSA9IHRydWU7XG4gICAgdGl0bGUudmFsdWUgPSB0aGlzLnRpdGxlO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAvLyB0YXNrIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi5yZWFkT25seSA9IHRydWU7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAvLyB0YXNrIGRhdGVcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza0RhdGVcIik7XG4gICAgZGF0ZS5yZWFkT25seSA9IHRydWU7XG4gICAgZGF0ZS52YWx1ZSA9IHRoaXMuZGF0ZTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRhdGVcIik7XG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgLy8gdGFzayBlZGl0IGJ1dHRvbiBhbmQgZnVuY3Rpb25zXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgZWRpdEJ0bi52YWx1ZSA9IFwiRURJVFwiO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGVkaXRCdG4udmFsdWUgPSBcIlNBVkVcIjtcbiAgICAgIHRpdGxlLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdFwiKTtcbiAgICAgIGRlc2NyaXB0aW9uLnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdFwiKTtcbiAgICAgIGRhdGUucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRcIik7XG5cbiAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlZGl0QnRuLnZhbHVlID0gXCJFRElUXCI7XG4gICAgICAgIHRpdGxlLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRcIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRcIik7XG4gICAgICAgIGRhdGUucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC50b2dnbGUoXCJlZGl0XCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gcGFyc2VMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgZGF0YVt0aGlzLmlkXS50YXNrID0gdGFza0Zvcm0udGFza1RpdGxlLnZhbHVlO1xuICAgICAgICBkYXRhW3RoaXMuaWRdLmRlc2NyaXB0aW9uID0gdGFza0Zvcm0udGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICBkYXRhW3RoaXMuaWRdLmRhdGUgPSB0YXNrRm9ybS50YXNrRGF0ZS52YWx1ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gdGFzayBkZWxldGUgYnV0dG9uIGFuZCBmdW5jdGlvbnNcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiREVMXCI7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChkZWwpID0+IHtcbiAgICAgIGRlbC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgZGF0YSA9IHBhcnNlTG9jYWxTdG9yYWdlKCk7XG4gICAgICBkYXRhLnNwbGljZSh0aGlzLmlkLCAxKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jb250YWluZXJcIilbdGhpcy5pZF0ucmVtb3ZlKCk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH0pO1xuICB9XG59XG4vLyBzYXZlIG5ldyB0YXNrIHRvIHRoZSBsb2NhTCBzdG9yYWdlXG5mdW5jdGlvbiBzYXZlVG9Ebyhmb3JtKSB7XG4gIGNvbnN0IHRvRG9zID0gcGFyc2VMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgdG9EbyA9IHtcbiAgICB0YXNrOiBmb3JtLnRhc2sudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IGZvcm0uZGVzY3JpcHRpb24udmFsdWUsXG4gICAgZGF0ZTogZm9ybS5kYXR1bS52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIHByb2plY3Q6IGZvcm0ucHJvamVjdHNlbGVjdC52YWx1ZSxcbiAgfTtcbiAgdG9Eb3MucHVzaCh0b0RvKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xufVxuXG5leHBvcnQgeyBzYXZlVG9EbywgVGFzaywgcmVuZGVyIH07XG4iLCJpbXBvcnQgeyBzYXZlVG9EbywgcmVuZGVyIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbi8vIGZ1bmN0aW9uIGZvciBjYW5jZWwgYnV0dG9uXG5mdW5jdGlvbiBjYW5jZWxCdXR0b24oKSB7XG4gIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsXCIpO1xuICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZG9uZVwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICAvLyBzZXQgdmFsdWVzIHRvIGRlZmF1bHRcbiAgICBmb3JtLnRhc2sudmFsdWUgPSBcIlwiO1xuICAgIGZvcm0uZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIGZvcm0uZGF0dW0udmFsdWUgPSBcIlwiO1xuICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gZm9yIGFkZCBidXR0b25cbmZ1bmN0aW9uIGFkZEJ1dHRvbigpIHtcbiAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRcIik7XG4gIGFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgc2F2ZVRvRG8oZm9ybSk7XG4gICAgLy8gc2V0IHZhbHVlcyB0byBkZWZhdWx0XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIHJlbmRlcigpO1xuICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gZm9yIG5ldyBidXR0b25cbmZ1bmN0aW9uIG5ld0J1dHRvbigpIHtcbiAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctYnV0dG9uXCIpO1xuICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gIH0pO1xufVxuXG4vLyBmdW5jdGlvbiBmb3IgcHJvamVjdCBidXR0b25cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYnV0dG9uXCIpO1xuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgYSBwcm9qZWN0IG5hbWU6XCIsIFwiTmV3IFByb2plY3RcIik7XG4gICAgY29uc3QgcHJvamVjdE9iaiA9IHtcbiAgICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgcHJvdGVjdGVkOiBmYWxzZSxcbiAgICB9O1xuICAgIFByb2plY3RzLm5ld1Byb2plY3QocHJvamVjdE9iaik7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidXR0b25GdW5jdGlvbnMoKSB7XG4gIGNhbmNlbEJ1dHRvbigpO1xuICBhZGRCdXR0b24oKTtcbiAgbmV3QnV0dG9uKCk7XG4gIGFkZFByb2plY3QoKTtcbn1cbiIsImltcG9ydCBjcmVhdGVTdHJ1Y3R1cmUgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xuaW1wb3J0IGJ1dHRvbkZ1bmN0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL2J1dHRvbi1mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL21vZHVsZXMvdG9kb1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHNcIjtcblxuY3JlYXRlU3RydWN0dXJlKCk7XG5idXR0b25GdW5jdGlvbnMoKTtcbnJlbmRlcigpO1xuUHJvamVjdHMucmVuZGVyUHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInN0YXRpYyIsIm5hbWUiLCJwcm90ZWN0ZWQiLCJ0aGlzIiwicGFyc2VQcm9qZWN0cyIsImZvckVhY2giLCJpdGVtIiwiY3JlYXRlUHJvamVjdCIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxlbmd0aCIsInByb2plY3RzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInB1c2giLCJwcm9qZWN0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic2VsZWN0IiwibmV3T3B0aW9uIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2F2ZVByb2plY3RzIiwiYm9keSIsInBhcnNlTG9jYWxTdG9yYWdlIiwicmVuZGVyIiwiaWQiLCJUYXNrIiwidGFzayIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImNvbXBsZXRlZCIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJjcmVhdGVUYXNrQ29udGFpbmVyIiwiaW5ib3giLCJ0YXNrRm9ybSIsInJlYWRPbmx5IiwiZWRpdEJ0biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsImV2ZW50IiwiZGF0YSIsInRhc2tUaXRsZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwiZGVsZXRlQnRuIiwiZGVsIiwic3BsaWNlIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZSIsImRpdiIsIm5ld0J1dHRvbiIsImFkZFByb2plY3RCdXR0b24iLCJjcmVhdGVTaWRlYmFyIiwiY3JlYXRlVG9kbyIsImNvbnRhaW5lciIsIm1haW4iLCJmb3JtIiwidGFza0xhYmVsIiwiZGVzY3JpcHRpb25MYWJlbCIsImRhdHVtTGFiZWwiLCJkYXR1bSIsIm9wdGlvbkRlZmF1bHQiLCJhZGRCdXR0b24iLCJjYW5jZWxCdXR0b24iLCJjcmVhdGVGb3JtIiwidG9Eb3MiLCJ0b0RvIiwicHJvamVjdHNlbGVjdCIsInNhdmVUb0RvIiwicmVzZXQiLCJwcm9qZWN0T2JqIiwicHJvbXB0IiwibmV3UHJvamVjdCIsInJlbmRlclByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==