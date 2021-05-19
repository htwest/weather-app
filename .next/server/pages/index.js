/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/hayden_west/Documents/Projects/weather-app/pages/index.js\";\nfunction Home({\n  geo\n}) {\n  console.log(geo);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"location\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"location-timezone\",\n        children: \"Timezone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"temperature\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"degree-section\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: \"temperature-degree\",\n          children: \"34\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"temperature-description\",\n        children: \"It's cold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticProps = async () => {\n  // const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n  // const data = await res.json();\n  // return {\n  //   props: { users: data },\n  // };\n  const API = \"e9cd3843d383b6b62076b7b7fa9c8c83d210725ad5332d8db4ef3e0a\";\n  const res = await fetch(`https://api.ipdata.co?api-key=${API}`);\n  const data = await res.json();\n  let lat = await data.latitude;\n  let long = await data.longitude;\n  return {\n    props: {\n      geo: {\n        latitude: lat,\n        longitude: long\n      }\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSG9tZSIsImdlbyIsImNvbnNvbGUiLCJsb2ciLCJnZXRTdGF0aWNQcm9wcyIsIkFQSSIsInByb2Nlc3MiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibGF0IiwibGF0aXR1ZGUiLCJsb25nIiwibG9uZ2l0dWRlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBdUI7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEO0FBRU0sTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU1DLEdBQUcsR0FBR0MsMERBQVo7QUFFQSxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLGlDQUFnQ0gsR0FBSSxFQUF0QyxDQUF2QjtBQUNBLFFBQU1JLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQSxNQUFJQyxHQUFHLEdBQUcsTUFBTUYsSUFBSSxDQUFDRyxRQUFyQjtBQUNBLE1BQUlDLElBQUksR0FBRyxNQUFNSixJQUFJLENBQUNLLFNBQXRCO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFBRWQsU0FBRyxFQUFFO0FBQUVXLGdCQUFRLEVBQUVELEdBQVo7QUFBaUJHLGlCQUFTLEVBQUVEO0FBQTVCO0FBQVA7QUFERixHQUFQO0FBR0QsQ0FoQk0iLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBnZW8gfSkge1xuICBjb25zb2xlLmxvZyhnZW8pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2NhdGlvbi10aW1lem9uZVwiPlRpbWV6b25lPC9oMT5cbiAgICAgICAgPHA+SWNvbjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlZ3JlZS1zZWN0aW9uXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlLWRlZ3JlZVwiPjM0PC9oMj5cbiAgICAgICAgICA8c3Bhbj5GPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZS1kZXNjcmlwdGlvblwiPkl0J3MgY29sZDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAvLyByZXR1cm4ge1xuICAvLyAgIHByb3BzOiB7IHVzZXJzOiBkYXRhIH0sXG4gIC8vIH07XG4gIGNvbnN0IEFQSSA9IHByb2Nlc3MuZW52LklQX0RBVEFfQVBJO1xuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5pcGRhdGEuY28/YXBpLWtleT0ke0FQSX1gKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGxldCBsYXQgPSBhd2FpdCBkYXRhLmxhdGl0dWRlO1xuICBsZXQgbG9uZyA9IGF3YWl0IGRhdGEubG9uZ2l0dWRlO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZ2VvOiB7IGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG9uZyB9IH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();