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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/hayden_west/Documents/Projects/weather-app/pages/index.js\";\nfunction Home({\n  data\n}) {\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"location\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"location-timezone\",\n        children: \"Timezone\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"temperature\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"degree-section\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          className: \"temperature-degree\",\n          children: \"34\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"temperature-description\",\n        children: \"It's cold\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 5\n  }, this);\n}\nconst getStaticProps = async () => {\n  const geoAPI = \"e9cd3843d383b6b62076b7b7fa9c8c83d210725ad5332d8db4ef3e0a\";\n  const weatherAPI = \"cb6d985628fc4d55bee174349212005\"; // Obtain Geo Data\n\n  const geoRes = await fetch(`https://api.ipdata.co?api-key=${geoAPI}`);\n  const geoData = await geoRes.json();\n  const city = await geoData.city; // Obtain Weather Data\n\n  const weatherRes = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${city}&aqi=no`);\n  const weatherData = await weatherRes.json();\n  return {\n    props: {\n      data: weatherData\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGljUHJvcHMiLCJnZW9BUEkiLCJwcm9jZXNzIiwid2VhdGhlckFQSSIsImdlb1JlcyIsImZldGNoIiwiZ2VvRGF0YSIsImpzb24iLCJjaXR5Iiwid2VhdGhlclJlcyIsIndlYXRoZXJEYXRhIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBd0I7QUFDckNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLG9CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEO0FBRU0sTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsTUFBTSxHQUFHQywwREFBZjtBQUNBLFFBQU1DLFVBQVUsR0FBR0QsaUNBQW5CLENBRndDLENBSXhDOztBQUNBLFFBQU1FLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUUsaUNBQWdDSixNQUFPLEVBQXpDLENBQTFCO0FBQ0EsUUFBTUssT0FBTyxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csSUFBUCxFQUF0QjtBQUNBLFFBQU1DLElBQUksR0FBRyxNQUFNRixPQUFPLENBQUNFLElBQTNCLENBUHdDLENBU3hDOztBQUNBLFFBQU1DLFVBQVUsR0FBRyxNQUFNSixLQUFLLENBQzNCLGlEQUFnREYsVUFBVyxNQUFLSyxJQUFLLFNBRDFDLENBQTlCO0FBR0EsUUFBTUUsV0FBVyxHQUFHLE1BQU1ELFVBQVUsQ0FBQ0YsSUFBWCxFQUExQjtBQUVBLFNBQU87QUFDTEksU0FBSyxFQUFFO0FBQUVkLFVBQUksRUFBRWE7QUFBUjtBQURGLEdBQVA7QUFHRCxDQWxCTSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGRhdGEgfSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibG9jYXRpb24tdGltZXpvbmVcIj5UaW1lem9uZTwvaDE+XG4gICAgICAgIDxwPkljb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWdyZWUtc2VjdGlvblwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZS1kZWdyZWVcIj4zNDwvaDI+XG4gICAgICAgICAgPHNwYW4+Rjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVtcGVyYXR1cmUtZGVzY3JpcHRpb25cIj5JdCdzIGNvbGQ8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGdlb0FQSSA9IHByb2Nlc3MuZW52LklQX0RBVEFfQVBJO1xuICBjb25zdCB3ZWF0aGVyQVBJID0gcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEk7XG5cbiAgLy8gT2J0YWluIEdlbyBEYXRhXG4gIGNvbnN0IGdlb1JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5pcGRhdGEuY28/YXBpLWtleT0ke2dlb0FQSX1gKTtcbiAgY29uc3QgZ2VvRGF0YSA9IGF3YWl0IGdlb1Jlcy5qc29uKCk7XG4gIGNvbnN0IGNpdHkgPSBhd2FpdCBnZW9EYXRhLmNpdHk7XG5cbiAgLy8gT2J0YWluIFdlYXRoZXIgRGF0YVxuICBjb25zdCB3ZWF0aGVyUmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3dlYXRoZXJBUEl9JnE9JHtjaXR5fSZhcWk9bm9gXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhOiB3ZWF0aGVyRGF0YSB9LFxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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