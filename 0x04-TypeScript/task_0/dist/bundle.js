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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// Create two students\nconst student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 20,\n    location: \"New York\",\n};\nconst student2 = {\n    firstName: \"Jane\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"Los Angeles\",\n};\n// Put them into an array\nconst studentsList = [student1, student2];\n// Create table element\nconst table = document.createElement(\"table\");\n// Create table header\nconst thead = table.createTHead();\nconst headerRow = thead.insertRow();\nconst headers = [\"First Name\", \"Last Name\", \"Age\", \"Location\"];\nheaders.forEach((headerText) => {\n    const th = document.createElement(\"th\");\n    th.textContent = headerText;\n    headerRow.appendChild(th);\n});\n// Create table body and add student rows\nconst tbody = table.createTBody();\nstudentsList.forEach((student) => {\n    const row = tbody.insertRow();\n    const cellFirstName = row.insertCell();\n    cellFirstName.textContent = student.firstName;\n    const cellLastName = row.insertCell();\n    cellLastName.textContent = student.lastName;\n    const cellAge = row.insertCell();\n    cellAge.textContent = student.age.toString();\n    const cellLocation = row.insertCell();\n    cellLocation.textContent = student.location;\n});\n// Append table to body\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;