//when create project is clicked, a project is created
//project is added to array and dynamically created

let projectArrayList = [];
let dataId;
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
    dataId = projectArray.id

  }


}









const createProjectList = document.querySelector(".create-projectList");

export default function createProjectFromClass() {
  createProjectList.addEventListener("click",() => {

    //Creates new class
    const Titleinput = document.getElementById("project-title");
    const titleText = Titleinput.value.trim();

    if (titleText !== "") {
      const newProject = new NewProject(titleText);
      newProject.createProjectItem()
      console.log(dataId);
      Titleinput.value = "";
    }

    //Append new class to projects list
    function appendProject() {
      const container = document.querySelector(".projects");
      const createProject = document.querySelector(".create-project")
      const projectList = document.createElement("div");
      projectList.setAttribute("class","project-list project-dynamic");
      projectList.setAttribute("data-key",dataId)


      projectList.innerHTML = `
        <p>Project name</p>
        <i class="fa-solid fa-trash-can"></i>
      `
      container.insertBefore(projectList,createProject);
    }
    appendProject()

  })
}




