//open modal

const openProjectModal = document.querySelector(".create-project")
const modalContainer = document.querySelector(".project-modalContainer")


export default function createModal() {
  openProjectModal.addEventListener("click",() => {
    modalContainer.style.visibility = "visible"
  })
}

