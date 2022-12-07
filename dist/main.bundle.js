/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cssDesign.js":
/*!**************************!*\
  !*** ./src/cssDesign.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newProjectItem)\n/* harmony export */ });\nconst createProjectItems = document.querySelector(\".create-projectItems\");\r\nconst projectItemTooltip = document.querySelector(\".new-projectItem\");\r\n\r\n\r\n\r\nfunction newProjectItem() {\r\n  createProjectItems.addEventListener(\"mouseover\",() => {\r\n    projectItemTooltip.style.visibility = \"visible\"\r\n  })\r\n\r\n  createProjectItems.addEventListener(\"mouseleave\",() => {\r\n    projectItemTooltip.style.visibility = \"hidden\"\r\n  })\r\n}\n\n//# sourceURL=webpack://todo-list/./src/cssDesign.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modalPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalPopup */ \"./src/modalPopup.js\");\n/* harmony import */ var _cssDesign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssDesign */ \"./src/cssDesign.js\");\n/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectItem */ \"./src/projectItem.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.closeModal)()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.createProjectItem)()\r\n;(0,_cssDesign__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.openModalItems)()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.closeModalItems)()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.addProjectItems)()\r\n;(0,_projectItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n\r\n\r\n\r\n\r\n\r\n// const closeProjectModal = document.getElementById(\"close-projectModal\")\r\n// const modalContainer = document.querySelector(\".project-modalContainer\")\r\n// console.log(\"yes\");\r\n\r\n\r\n// function closeModal() {\r\n//   closeProjectModal.addEventListener(\"click\",() => {\r\n//     console.log(\"close working\");\r\n//     modalContainer.style.visibility = \"hidden\"\r\n//   })\r\n// }\r\n\r\n// closeModal()\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modalPopup.js":
/*!***************************!*\
  !*** ./src/modalPopup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectItems\": () => (/* binding */ addProjectItems),\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"closeModalItems\": () => (/* binding */ closeModalItems),\n/* harmony export */   \"createProjectItem\": () => (/* binding */ createProjectItem),\n/* harmony export */   \"default\": () => (/* binding */ createModal),\n/* harmony export */   \"openModalItems\": () => (/* binding */ openModalItems)\n/* harmony export */ });\n//NEW PROJECT MODAL \r\n\r\nconst openProjectModal = document.querySelector(\".create-project\")\r\nconst modalContainer = document.querySelector(\".project-modalContainer\")\r\nconst titleInput = document.getElementById(\"project-title\")\r\nconst closeProjectModal = document.getElementById(\"close-projectModal\")\r\nconst createProject = document.querySelector(\".create-projectList\")\r\nconst addItem = document.querySelector(\".add-projectItem\")\r\n\r\n\r\nfunction createModal() {\r\n  openProjectModal.addEventListener(\"click\",() => {\r\n    modalContainer.style.visibility = \"visible\"\r\n  })\r\n}\r\n\r\nfunction closeModal() {\r\n  closeProjectModal.addEventListener(\"click\",() => {\r\n    modalContainer.style.visibility = \"hidden\"\r\n  })\r\n}\r\n\r\nfunction createProjectItem() {\r\n  createProject.addEventListener(\"click\",() => {\r\n    // const title = titleInput.value;\r\n    modalContainer.style.visibility = \"hidden\"\r\n    // console.log(title);\r\n    //reset Value\r\n    // titleInput.value = \"\"\r\n  })\r\n}\r\n\r\n\r\n// NEW PROJECT ITEM MODAL\r\nconst itemsContainer = document.querySelector(\".projectItem-modalContainer\")\r\nconst openItems = document.querySelector(\".create-projectItems\")\r\nconst closeItems = document.getElementById(\"close-projectModalItem\")\r\n//project Item form\r\nconst itemTitle = document.getElementById(\"item-title\");\r\nconst itemDescription = document.getElementById(\"item-description\");\r\nconst itemDate = document.getElementById(\"item-date\");\r\nconst itemSelect = document.getElementById(\"item-select\")\r\n\r\nfunction openModalItems() {\r\n  openItems.addEventListener(\"click\",() => {\r\n    itemsContainer.style.visibility = \"visible\";\r\n  })\r\n}\r\n\r\nfunction closeModalItems() {\r\n  closeItems.addEventListener(\"click\",() => {\r\n    itemsContainer.style.visibility = \"hidden\";\r\n  })\r\n}\r\n\r\nfunction addProjectItems() {\r\n  addItem.addEventListener(\"click\",() => {\r\n    itemsContainer.style.visibility = \"hidden\";\r\n    itemTitle.value = \"\"\r\n    itemDescription.value = \"\"\r\n    itemDate.value = \"\"\r\n    itemSelect.value = \"\"\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://todo-list/./src/modalPopup.js?");

/***/ }),

/***/ "./src/projectItem.js":
/*!****************************!*\
  !*** ./src/projectItem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createProjectFromClass)\n/* harmony export */ });\n//when create project is clicked, a project is created\r\n//project is added to array and dynamically created\r\n\r\nlet projectArrayList = [];\r\nlet dataId;\r\nclass NewProject {\r\n  constructor(title) {\r\n    this.title = title;\r\n  }\r\n\r\n\r\n  createProjectItem() {\r\n    const projectArray = {\r\n      title: this.title,\r\n      id: Date.now(),\r\n    };\r\n    projectArrayList.push(projectArray)\r\n    console.log(projectArrayList);\r\n    dataId = projectArray.id\r\n\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst createProjectList = document.querySelector(\".create-projectList\");\r\n\r\nfunction createProjectFromClass() {\r\n  createProjectList.addEventListener(\"click\",() => {\r\n\r\n    //Creates new class\r\n    const Titleinput = document.getElementById(\"project-title\");\r\n    const titleText = Titleinput.value.trim();\r\n\r\n    if (titleText !== \"\") {\r\n      const newProject = new NewProject(titleText);\r\n      newProject.createProjectItem()\r\n      console.log(dataId);\r\n      Titleinput.value = \"\";\r\n    }\r\n\r\n    //Append new class to projects list\r\n    function appendProject() {\r\n      const container = document.querySelector(\".projects\");\r\n      const createProject = document.querySelector(\".create-project\")\r\n      const projectList = document.createElement(\"div\");\r\n      projectList.setAttribute(\"class\",\"project-list project-dynamic\");\r\n      projectList.setAttribute(\"data-key\",dataId)\r\n\r\n\r\n      projectList.innerHTML = `\r\n        <p>Project name</p>\r\n        <i class=\"fa-solid fa-trash-can\"></i>\r\n      `\r\n      container.insertBefore(projectList,createProject);\r\n    }\r\n    appendProject()\r\n\r\n  })\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/projectItem.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;