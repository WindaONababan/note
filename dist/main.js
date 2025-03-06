/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (2:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| /* Global Styles */\\n> * {\\n|   padding: 0;\\n|   margin: 0;\");\n\n//# sourceURL=webpack://note-winda/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main.js */ \"./src/scripts/main.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js/src/toastify.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_scripts_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n})\n\n\n//# sourceURL=webpack://note-winda/./src/index.js?");

/***/ }),

/***/ "./src/scripts/components/card-item-archive.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/card-item-archive.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/scripts/main.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nclass CardItemArchive extends HTMLElement {\n  constructor() {\n    super()\n\n    this._blog = {\n      id: 0,\n      title: 'Title',\n      body: 'Content',\n      createdAt: '2022-07-28T10:03:12.594Z',\n    }\n\n    this._style = document.createElement('style')\n  }\n\n  setBlog(value) {\n    this._blog['id'] = value.id\n    this._blog['title'] = value.title\n    this._blog['body'] = value.body\n    this._blog['createdAt'] = value.createdAt\n\n    this.render()\n  }\n\n  connectedCallback() {\n    this.render()\n  }\n\n  render() {\n    this.setAttribute('data-id', this._blog.id)\n\n    this.innerHTML = `\n       ${this._style.outerHTML}\n         <div class=\"card_item\">\n          <div>\n            <h3>${this._blog.title}</h3>\n            <p>${this._blog.body}</p>\n          </div>\n          <p>${new Date(this._blog.createdAt).toLocaleDateString('id-ID', {\n            day: 'numeric',\n            month: 'long',\n            year: 'numeric',\n          })}</p>\n          <div>\n\n           <button id=\"action-unarchive\">\n            <img \n                src='unarchive.svg'\n                alt='unarchive-icon'\n            />\n          </button>\n          \n          <button id=\"action-delete\">\n            <img \n                src='trash.svg'\n                alt='trash-icon'\n            />\n          </button>\n\n          </div>\n        </div>\n          `\n\n    this.querySelector('#action-delete').addEventListener('click', async () => {\n      try {\n        const response = await fetch(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/notes/${this._blog.id}`, {\n          method: 'DELETE',\n        })\n        const results = await response.json()\n\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n          text: `${results?.message}`,\n          duration: 3000,\n        }).showToast()\n      } catch (error) {\n        console.log(error)\n      } finally {\n        window.location.reload()\n      }\n    })\n\n    this.querySelector('#action-unarchive').addEventListener(\n      'click',\n      async () => {\n        try {\n          const response = await fetch(\n            `${_main_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/notes/${this._blog.id}/unarchive`,\n            {\n              method: 'POST',\n            }\n          )\n          const results = await response.json()\n\n          Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n            text: `${results?.message}`,\n            duration: 3000,\n          }).showToast()\n        } catch (error) {\n          console.log(error)\n        } finally {\n          window.location.reload()\n        }\n      }\n    )\n  }\n}\n\ncustomElements.define('card-item-archive', CardItemArchive)\n\n\n//# sourceURL=webpack://note-winda/./src/scripts/components/card-item-archive.js?");

/***/ }),

/***/ "./src/scripts/components/card-item.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/card-item.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./src/scripts/main.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nclass CardItem extends HTMLElement {\n  constructor() {\n    super()\n\n    this._blog = {\n      id: 0,\n      title: 'Title',\n      body: 'Content',\n      createdAt: '2022-07-28T10:03:12.594Z',\n    }\n\n    this._style = document.createElement('style')\n  }\n\n  setBlog(value) {\n    this._blog['id'] = value.id\n    this._blog['title'] = value.title\n    this._blog['body'] = value.body\n    this._blog['createdAt'] = value.createdAt\n\n    this.render()\n  }\n\n  connectedCallback() {\n    this.render()\n  }\n\n  render() {\n    this.setAttribute('data-id', this._blog.id)\n\n    this.innerHTML = `\n       ${this._style.outerHTML}\n         <div class=\"card_item\">\n          <div>\n            <h3>${this._blog.title}</h3>\n            <p>${this._blog.body}</p>\n          </div>\n          <p>${new Date(this._blog.createdAt).toLocaleDateString('id-ID', {\n            day: 'numeric',\n            month: 'long',\n            year: 'numeric',\n          })}</p>\n          <div>\n          \n          <button id=\"action-archive\">\n            <img \n                src='archive.svg'\n                alt='archive-icon'\n            />\n          </button>\n          <button id=\"action-delete\"\n          >\n            <img \n                src='trash.svg'\n                alt='trash-icon'\n            />\n          </button>\n\n          </div>\n        </div>\n          `\n\n    this.querySelector('#action-delete').addEventListener('click', async () => {\n      try {\n        this.querySelector('#action-delete').disabled = true\n\n        const response = await fetch(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/notes/${this._blog.id}`, {\n          method: 'DELETE',\n        })\n        const results = await response.json()\n\n        Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n          text: `${results?.message}`,\n          duration: 3000,\n        }).showToast()\n      } catch (error) {\n        console.log(error)\n      } finally {\n        this.querySelector('#action-delete').disabled = false\n        window.location.reload()\n      }\n    })\n\n    this.querySelector('#action-archive').addEventListener(\n      'click',\n      async () => {\n        try {\n          this.querySelector('#action-archive').disabled = true\n\n          const response = await fetch(\n            `${_main_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/notes/${this._blog.id}/archive`,\n            {\n              method: 'POST',\n            }\n          )\n          const results = await response.json()\n\n          Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n            text: `${results?.message}`,\n            duration: 3000,\n          }).showToast()\n        } catch (error) {\n          console.log(error)\n        } finally {\n          this.querySelector('#action-archive').disabled = false\n          window.location.reload()\n        }\n      }\n    )\n  }\n}\n\ncustomElements.define('card-item', CardItem)\n\n\n//# sourceURL=webpack://note-winda/./src/scripts/components/card-item.js?");

/***/ }),

/***/ "./src/scripts/components/card-list-archive.js":
/*!*****************************************************!*\
  !*** ./src/scripts/components/card-list-archive.js ***!
  \*****************************************************/
/***/ (() => {

eval("class CardListArchive extends HTMLElement {\n  constructor() {\n    super()\n\n    this._blogList = []\n\n    this._style = document.createElement('style')\n  }\n\n  setBlogList(value) {\n    this._blogList = value\n\n    this.render()\n  }\n\n  connectedCallback() {\n    this.render()\n  }\n\n  updateStyle() {\n    this._style.textContent = `\n      card-list-archive {\n          display: grid;\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n        gap: 8px;\n        }\n          `\n  }\n  render() {\n    this.updateStyle()\n\n    const blogItemElement = this._blogList.map((item) => {\n      const blog = document.createElement('card-item-archive')\n      blog.setBlog(item)\n\n      return blog\n    })\n\n    this.innerHTML = ''\n    this.append(this._style, ...blogItemElement)\n  }\n}\n\ncustomElements.define('card-list-archive', CardListArchive)\n\n\n//# sourceURL=webpack://note-winda/./src/scripts/components/card-list-archive.js?");

/***/ }),

/***/ "./src/scripts/components/card-list.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/card-list.js ***!
  \*********************************************/
/***/ (() => {

eval("class CardList extends HTMLElement {\n  constructor() {\n    super()\n\n    this._blogList = []\n\n    this._style = document.createElement('style')\n  }\n\n  setBlogList(value) {\n    this._blogList = value\n\n    this.render()\n  }\n\n  connectedCallback() {\n    this.render()\n  }\n\n  updateStyle() {\n    this._style.textContent = `\n      card-list {\n          display: grid;\n        grid-template-columns: repeat(3, minmax(0, 1fr));\n        gap: 8px;\n        }\n          `\n  }\n  render() {\n    this.updateStyle()\n\n    const blogItemElement = this._blogList.map((item) => {\n      const blog = document.createElement('card-item')\n      blog.setBlog(item)\n\n      return blog\n    })\n\n    this.innerHTML = ''\n    this.append(this._style, ...blogItemElement)\n  }\n}\n\ncustomElements.define('card-list', CardList)\n\n\n//# sourceURL=webpack://note-winda/./src/scripts/components/card-list.js?");

/***/ }),

/***/ "./src/scripts/components/index.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _card_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-item.js */ \"./src/scripts/components/card-item.js\");\n/* harmony import */ var _card_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-list.js */ \"./src/scripts/components/card-list.js\");\n/* harmony import */ var _card_list_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_card_list_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_list_archive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-list-archive.js */ \"./src/scripts/components/card-list-archive.js\");\n/* harmony import */ var _card_list_archive_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_list_archive_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _card_item_archive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-item-archive.js */ \"./src/scripts/components/card-item-archive.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://note-winda/./src/scripts/components/index.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/scripts/components/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\nconst BASE_URL = 'https://notes-api.dicoding.dev/v2'\n\nconst main = () => {\n  const cardListElement = document.querySelector('card-list')\n  const cardListArchiveElement = document.querySelector('card-list-archive')\n  const formElement = document.querySelector('#form_add')\n  const judulElement = document.querySelector('#judul')\n  const bodyElement = document.querySelector('#body')\n  const formLoader = document.querySelector('#loader-submit')\n  const listLoader = document.querySelector('#loader-get')\n  const listContent = document.querySelector('#list-note')\n\n  const fetchNotes = async () => {\n    try {\n      listContent.classList.add('hidden')\n      listLoader.classList.remove('hidden')\n      // BISA PAKE PROMISE ALL\n      const response = await fetch(`${BASE_URL}/notes`)\n      const responseArchive = await fetch(`${BASE_URL}/notes/archived`)\n      const results = await response.json()\n      const resultsArchive = await responseArchive.json()\n\n      cardListElement.setBlogList(results?.data)\n      cardListArchiveElement.setBlogList(resultsArchive?.data)\n    } catch (error) {\n      console.log(error)\n    } finally {\n      listContent.classList.remove('hidden')\n      listLoader.classList.add('hidden')\n    }\n  }\n\n  fetchNotes()\n\n  formElement.addEventListener('submit', async (e) => {\n    e.preventDefault()\n\n    try {\n      formLoader.classList.remove('hidden')\n\n      const response = await fetch(`${BASE_URL}/notes`, {\n        method: 'POST',\n        headers: {\n          Accept: 'application/json',\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          title: judulElement.value,\n          body: bodyElement.value,\n        }),\n      })\n\n      const results = await response.json()\n\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n        text: `${results?.message}`,\n        duration: 3000,\n      }).showToast()\n\n      if (results.status === 'success') {\n        judulElement.value = ''\n        bodyElement.value = ''\n\n        window.location.reload()\n      }\n    } catch (error) {\n      Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'toastify-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({\n        text: `${results?.message}`,\n        duration: 3000,\n      }).showToast()\n    } finally {\n      formLoader.classList.add('hidden')\n    }\n  })\n\n  const customValidationTitleHandler = (e) => {\n    e.target.setCustomValidity('')\n    if (e.target.validity.valueMissing) {\n      e.target.setCustomValidity('Judul wajib diisi')\n      judulElement.classList.add('border-red')\n      return\n    }\n    if (e.target.validity.tooShort) {\n      e.target.setCustomValidity('Judul harus lebih dari 3 kalimat')\n      judulElement.classList.add('border-red')\n      return\n    }\n    if (e.target.validity.valid) {\n      judulElement.classList.remove('border-red')\n      return\n    }\n  }\n\n  const customValidationBodyHandler = (e) => {\n    e.target.setCustomValidity('')\n    if (e.target.validity.valueMissing) {\n      e.target.setCustomValidity('Body wajib diisi')\n      bodyElement.classList.add('border-red')\n      return\n    }\n    if (e.target.validity.tooShort) {\n      e.target.setCustomValidity('Body harus lebih dari 3 kalimat')\n      bodyElement.classList.add('border-red')\n      return\n    }\n    if (e.target.validity.valid) {\n      bodyElement.classList.remove('border-red')\n      return\n    }\n  }\n\n  const errorMessageRender = (e) => {\n    const isValid = e.target.validity.valid\n    const errorMessage = e.target.validationMessage\n\n    const connectedErrorElement = e.target.getAttribute('aria-describedby')\n\n    const connectedErrorElementValue = connectedErrorElement\n      ? document.getElementById(connectedErrorElement)\n      : null\n\n    if (connectedErrorElementValue && errorMessage && !isValid) {\n      connectedErrorElementValue.innerText = errorMessage\n    } else {\n      connectedErrorElementValue.innerText = ''\n    }\n  }\n\n  judulElement.addEventListener('change', customValidationTitleHandler)\n  judulElement.addEventListener('invalid', customValidationTitleHandler)\n  judulElement.addEventListener('blur', errorMessageRender)\n\n  bodyElement.addEventListener('change', customValidationBodyHandler)\n  bodyElement.addEventListener('invalid', customValidationBodyHandler)\n  bodyElement.addEventListener('blur', errorMessageRender)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n\n\n//# sourceURL=webpack://note-winda/./src/scripts/main.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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