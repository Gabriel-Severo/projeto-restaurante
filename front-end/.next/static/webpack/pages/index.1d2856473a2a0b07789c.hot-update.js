/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Conteudo.js":
/*!********************************!*\
  !*** ./components/Conteudo.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Conteudo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Conteudo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Conteudo.module.css */ \"./styles/Conteudo.module.css\");\n/* harmony import */ var _styles_Conteudo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Conteudo_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_HeaderConteudo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HeaderConteudo */ \"./components/HeaderConteudo.js\");\n/* harmony import */ var _components_FiltroConteudo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FiltroConteudo */ \"./components/FiltroConteudo.js\");\n/* harmony import */ var _components_ProdutoConteudo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ProdutoConteudo */ \"./components/ProdutoConteudo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/Conteudo.js\";\n\n\n\n\nfunction Conteudo(_ref) {\n  var produtos = _ref.produtos,\n      categorias = _ref.categorias,\n      filtro = _ref.filtro,\n      setFiltro = _ref.setFiltro,\n      filtroTexto = _ref.filtroTexto,\n      setFiltroTexto = _ref.setFiltroTexto;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Conteudo_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerConteudo),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderConteudo__WEBPACK_IMPORTED_MODULE_1__.default, {\n      filtroTexto: filtroTexto,\n      setFiltroTexto: setFiltroTexto\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FiltroConteudo__WEBPACK_IMPORTED_MODULE_2__.default, {\n      categorias: categorias,\n      filtro: filtro,\n      setFiltro: setFiltro\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProdutoConteudo__WEBPACK_IMPORTED_MODULE_3__.default, {\n      produtos: produtos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, this);\n}\n_c = Conteudo;\n\nvar _c;\n\n$RefreshReg$(_c, \"Conteudo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZXVkby5qcz9jOWViIl0sIm5hbWVzIjpbIkNvbnRldWRvIiwicHJvZHV0b3MiLCJjYXRlZ29yaWFzIiwiZmlsdHJvIiwic2V0RmlsdHJvIiwiZmlsdHJvVGV4dG8iLCJzZXRGaWx0cm9UZXh0byIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBMEY7QUFBQSxNQUF2RUMsUUFBdUUsUUFBdkVBLFFBQXVFO0FBQUEsTUFBN0RDLFVBQTZELFFBQTdEQSxVQUE2RDtBQUFBLE1BQWpEQyxNQUFpRCxRQUFqREEsTUFBaUQ7QUFBQSxNQUF6Q0MsU0FBeUMsUUFBekNBLFNBQXlDO0FBQUEsTUFBOUJDLFdBQThCLFFBQTlCQSxXQUE4QjtBQUFBLE1BQWpCQyxjQUFpQixRQUFqQkEsY0FBaUI7QUFDckcsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLHNGQUFoQjtBQUFBLDRCQUNJLDhEQUFDLCtEQUFEO0FBQWdCLGlCQUFXLEVBQUVGLFdBQTdCO0FBQTBDLG9CQUFjLEVBQUVDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLCtEQUFEO0FBQWdCLGdCQUFVLEVBQUVKLFVBQTVCO0FBQXdDLFlBQU0sRUFBRUMsTUFBaEQ7QUFBd0QsZUFBUyxFQUFFQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyxnRUFBRDtBQUFpQixjQUFRLEVBQUVIO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9IO0tBUnVCRCxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250ZXVkby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0NvbnRldWRvLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZGVyQ29udGV1ZG8gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXJDb250ZXVkbydcbmltcG9ydCBGaWx0cm9Db250ZXVkbyBmcm9tICcuLi9jb21wb25lbnRzL0ZpbHRyb0NvbnRldWRvJ1xuaW1wb3J0IFByb2R1dG9Db250ZXVkbyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1dG9Db250ZXVkbydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGV1ZG8oe3Byb2R1dG9zLCBjYXRlZ29yaWFzLCBmaWx0cm8sIHNldEZpbHRybywgZmlsdHJvVGV4dG8sIHNldEZpbHRyb1RleHRvfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyQ29udGV1ZG99PlxuICAgICAgICAgICAgPEhlYWRlckNvbnRldWRvIGZpbHRyb1RleHRvPXtmaWx0cm9UZXh0b30gc2V0RmlsdHJvVGV4dG89e3NldEZpbHRyb1RleHRvfS8+XG4gICAgICAgICAgICA8RmlsdHJvQ29udGV1ZG8gY2F0ZWdvcmlhcz17Y2F0ZWdvcmlhc30gZmlsdHJvPXtmaWx0cm99IHNldEZpbHRybz17c2V0RmlsdHJvfS8+XG4gICAgICAgICAgICA8UHJvZHV0b0NvbnRldWRvIHByb2R1dG9zPXtwcm9kdXRvc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Conteudo.js\n");

/***/ })

});