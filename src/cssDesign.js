const createProjectItems = document.querySelector(".create-projectItems");
const projectItemTooltip = document.querySelector(".new-projectItem");



export default function newProjectItem() {
  createProjectItems.addEventListener("mouseover",() => {
    projectItemTooltip.style.visibility = "visible"
  })

  createProjectItems.addEventListener("mouseleave",() => {
    projectItemTooltip.style.visibility = "hidden"
  })
}