/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HeaderConteudo.js":
/*!**************************************!*\
  !*** ./components/HeaderConteudo.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeaderConteudo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/HeaderConteudo.module.css */ \"./styles/HeaderConteudo.module.css\");\n/* harmony import */ var _styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/HeaderConteudo.js\";\n\nfunction HeaderConteudo(_ref) {\n  var filtroTexto = _ref.filtroTexto,\n      setFiltroTexto = _ref.setFiltroTexto;\n\n  function handleFiltroTexto(busca) {\n    setFiltroTexto(busca);\n    console.log(busca);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n    className: (_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().header),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().conteudoHeaderInfo),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: (_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerNome),\n        children: \"Jaegar Resto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerData),\n        children: \"Tuesday, 2 Feb 2021\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerBuscador),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        className: (_styles_HeaderConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerBuscadorText),\n        type: \"text\",\n        placeholder: \"Search for food, coffe, etc..\",\n        value: filtroTexto,\n        onChange: function onChange(busca) {\n          handleFiltroTexto(busca.nativeEvent.data);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n_c = HeaderConteudo;\n\nvar _c;\n\n$RefreshReg$(_c, \"HeaderConteudo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJDb250ZXVkby5qcz82ZWJkIl0sIm5hbWVzIjpbIkhlYWRlckNvbnRldWRvIiwiZmlsdHJvVGV4dG8iLCJzZXRGaWx0cm9UZXh0byIsImhhbmRsZUZpbHRyb1RleHRvIiwiYnVzY2EiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibmF0aXZlRXZlbnQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsY0FBVCxPQUF1RDtBQUFBLE1BQTlCQyxXQUE4QixRQUE5QkEsV0FBOEI7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCOztBQUNsRSxXQUFTQyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDOUJGLGtCQUFjLENBQUNFLEtBQUQsQ0FBZDtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNIOztBQUNELHNCQUNJO0FBQVEsYUFBUyxFQUFFRyxpRkFBbkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsNkZBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSxxRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFFQSxxRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBSyxlQUFTLEVBQUVBLHlGQUFoQjtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBRUEsNkZBRGY7QUFFSSxZQUFJLEVBQUMsTUFGVDtBQUdJLG1CQUFXLEVBQUMsK0JBSGhCO0FBSUksYUFBSyxFQUFFTixXQUpYO0FBS0ksZ0JBQVEsRUFBRSxrQkFBQ0csS0FBRCxFQUFXO0FBQUNELDJCQUFpQixDQUFDQyxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLElBQW5CLENBQWpCO0FBQTBDO0FBTHBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7S0F2QnVCVCxjIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXJDb250ZXVkby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hlYWRlckNvbnRldWRvLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlckNvbnRldWRvKHtmaWx0cm9UZXh0bywgc2V0RmlsdHJvVGV4dG99KSB7XG4gICAgZnVuY3Rpb24gaGFuZGxlRmlsdHJvVGV4dG8oYnVzY2EpIHtcbiAgICAgICAgc2V0RmlsdHJvVGV4dG8oYnVzY2EpXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1c2NhKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRldWRvSGVhZGVySW5mb30+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlck5vbWV9PkphZWdhciBSZXN0bzwvaDE+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyRGF0YX0+VHVlc2RheSwgMiBGZWIgMjAyMTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJCdXNjYWRvcn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJCdXNjYWRvclRleHR9IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgZm9vZCwgY29mZmUsIGV0Yy4uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRyb1RleHRvfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGJ1c2NhKSA9PiB7aGFuZGxlRmlsdHJvVGV4dG8oYnVzY2EubmF0aXZlRXZlbnQuZGF0YSl9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HeaderConteudo.js\n");

/***/ })

});