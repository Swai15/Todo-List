//open modal

const openProjectModal = document.querySelector(".create-project")
const modalContainer = document.querySelector(".project-modalContainer")
const titleInput = document.getElementById("project-title")
const closeProjectModal = document.getElementById("close-projectModal")
const createProject = document.querySelector(".create-projectItem")


export default function createModal() {
  openProjectModal.addEventListener("click",() => {
    modalContainer.style.visibility = "visible"
  })
}

export function closeModal() {
  closeProjectModal.addEventListener("click",() => {
    modalContainer.style.visibility = "hidden"
  })
}

export function createProjectItem() {
  createProject.addEventListener("click",() => {
    const title = titleInput.value;
    modalContainer.style.visibility = "hidden"
    console.log(title);
    titleInput.value = ""
  })
}

