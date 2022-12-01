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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modalPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalPopup */ \"./src/modalPopup.js\");\n/* harmony import */ var _cssDesign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssDesign */ \"./src/cssDesign.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.closeModal)()\r\n;(0,_modalPopup__WEBPACK_IMPORTED_MODULE_0__.createProjectItem)()\r\n;(0,_cssDesign__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\nconsole.log(\"Working\");\r\n\r\n\r\n\r\n// const closeProjectModal = document.getElementById(\"close-projectModal\")\r\n// const modalContainer = document.querySelector(\".project-modalContainer\")\r\n// console.log(\"yes\");\r\n\r\n\r\n// function closeModal() {\r\n//   closeProjectModal.addEventListener(\"click\",() => {\r\n//     console.log(\"close working\");\r\n//     modalContainer.style.visibility = \"hidden\"\r\n//   })\r\n// }\r\n\r\n// closeModal()\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modalPopup.js":
/*!***************************!*\
  !*** ./src/modalPopup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"createProjectItem\": () => (/* binding */ createProjectItem),\n/* harmony export */   \"default\": () => (/* binding */ createModal)\n/* harmony export */ });\n//open modal\r\n\r\nconst openProjectModal = document.querySelector(\".create-project\")\r\nconst modalContainer = document.querySelector(\".project-modalContainer\")\r\nconst titleInput = document.getElementById(\"project-title\")\r\nconst closeProjectModal = document.getElementById(\"close-projectModal\")\r\nconst createProject = document.querySelector(\".create-projectItem\")\r\n\r\n\r\nfunction createModal() {\r\n  openProjectModal.addEventListener(\"click\",() => {\r\n    modalContainer.style.visibility = \"visible\"\r\n  })\r\n}\r\n\r\nfunction closeModal() {\r\n  closeProjectModal.addEventListener(\"click\",() => {\r\n    modalContainer.style.visibility = \"hidden\"\r\n  })\r\n}\r\n\r\nfunction createProjectItem() {\r\n  createProject.addEventListener(\"click\",() => {\r\n    const title = titleInput.value;\r\n    modalContainer.style.visibility = \"hidden\"\r\n    console.log(title);\r\n    titleInput.value = \"\"\r\n  })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/modalPopup.js?");

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