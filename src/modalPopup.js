//open modal

const openProjectModal = document.querySelector(".create-project")
const modalContainer = document.querySelector(".project-modalContainer")
const titleValue = document.getElementById(".project-title")
const closeProjectModal = document.getElementById("close-projectModal")


export default function createModal() {
  openProjectModal.addEventListener("click",() => {
    modalContainer.style.visibility = "visible"
  })
}

export function closeModal() {
  closeProjectModal.addEventListener("click",() => {
    console.log("close working");
    modalContainer.style.visibility = "hidden"
  })
}

