(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/count.js":
/*!**********************!*\
  !*** ./src/count.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return count; });\nfunction count(x,y) {\r\n    return  x-y;\r\n}\n\n//# sourceURL=webpack:///./src/count.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ \"./src/count.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"../../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n// import add from './add';\r\n\r\n\r\n\r\nconsole.log('index.js 文件被加载了');\r\n\r\n\r\n__webpack_require__.e(/*! import() | add */ \"add\").then(__webpack_require__.bind(null, /*! ./add.js */ \"./src/add.js\")).then(({default:add})=>{\r\n console.log(add(2,3));\r\n})\r\nconsole.log(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(8,5));\r\nconsole.log(jquery__WEBPACK_IMPORTED_MODULE_1___default.a)\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

},[["./src/index.js","runtime-main","vendors~main"]]]);