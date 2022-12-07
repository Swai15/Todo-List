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
    console.log("test complete");
  }
}

// export default function testWorking() {
//   const book1 = new NewProject("test")
//   book1.createProjectItem()
// }


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
  })
}

