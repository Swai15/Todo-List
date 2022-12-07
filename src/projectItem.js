//when create project is clicked, a project is created
//project is added to array and dynamically created

let projectArrayList = [];

class NewProject {
  constructor(title) {
    this.title = title;
  }

  createProjectItem() {
    const projectArray = {
      title: this.title,
      id: Date.now(),
    };
    projectArrayList.push(projectArray)
    console.log(projectArrayList);
  }
}


const createProjectList = document.querySelector(".create-projectList");

export default function createProjectFromClass() {
  createProjectList.addEventListener("click",() => {

    const Titleinput = document.getElementById("project-title");
    const titleText = Titleinput.value.trim();

    if (titleText !== "") {
      const newProject = new NewProject(titleText);
      newProject.createProjectItem()
      Titleinput.value = "";
    }

    //Append to projects
    function appendProject() {
      const container = document.querySelector(".projects");
      const createProject = document.querySelector(".create-project")
      const projectList = document.createElement("div");
      projectList.setAttribute("class","project-list project-dynamic");
      projectList.setAttribute("data-key","newProject.id")
      projectList.innerHTML = `
        <p>Project name</p>
        <i class="fa-solid fa-trash-can"></i>
      `
      container.insertBefore(projectList,createProject);
    }
    appendProject()


  })
}

