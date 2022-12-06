//NEW PROJECT MODAL 

const openProjectModal = document.querySelector(".create-project")
const modalContainer = document.querySelector(".project-modalContainer")
const titleInput = document.getElementById("project-title")
const closeProjectModal = document.getElementById("close-projectModal")
const createProject = document.querySelector(".create-projectItem")
const addItem = document.querySelector(".add-projectItem")


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
    //reset Value
    titleInput.value = ""
  })
}


// NEW PROJECT ITEM MODAL
const itemsContainer = document.querySelector(".projectItem-modalContainer")
const openItems = document.querySelector(".create-projectItems")
const closeItems = document.getElementById("close-projectModalItem")
//project Item form
const itemTitle = document.getElementById("item-title");
const itemDescription = document.getElementById("item-description");
const itemDate = document.getElementById("item-date");
const itemSelect = document.getElementById("item-select")

export function openModalItems() {
  openItems.addEventListener("click",() => {
    itemsContainer.style.visibility = "visible";
  })
}

export function closeModalItems() {
  closeItems.addEventListener("click",() => {
    itemsContainer.style.visibility = "hidden";
  })
}

export function addProjectItems() {
  addItem.addEventListener("click",() => {
    itemsContainer.style.visibility = "hidden";
    itemTitle.value = ""
    itemDescription.value = ""
    itemDate.value = ""
    itemSelect.value = ""
  })
}
