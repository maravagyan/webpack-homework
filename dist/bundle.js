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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nclass Car {\r\n  constructor(name, year) {\r\n    this.name = name;\r\n    this.year = year;\r\n  }\r\n  age(x) {\r\n    return x - this.year;\r\n  }\r\n}\r\n\r\nlet date = new Date();\r\nlet year = date.getFullYear();\r\n\r\nlet myCar = new Car(\"Ford\", 2014);\r\ndocument.getElementById(\"test\").innerHTML=\r\n\"My car is \" + myCar.age(year) + \" years old.\";\r\n\r\n\n\n//# sourceURL=webpack://webpack-homework/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;