/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./loaders/css-loader2.js!./loaders/less-loader2.js!./src/index.less":
/*!***************************************************************************!*\
  !*** ./loaders/css-loader2.js!./loaders/less-loader2.js!./src/index.less ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = `
.box {
  color: red;
}
`

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


     let style = document.createElement('style');
     style.innerHTML = __webpack_require__(/*! !!../loaders/css-loader2.js!../loaders/less-loader2.js!./index.less */ "./loaders/css-loader2.js!./loaders/less-loader2.js!./src/index.less");
     document.head.appendChild(style);
   

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/


// import './index.less'

__webpack_require__(/*! ./index.less */ "./src/index.less");

// import API from "!../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js";

// import { a } from './index'

// import './index.css'
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map