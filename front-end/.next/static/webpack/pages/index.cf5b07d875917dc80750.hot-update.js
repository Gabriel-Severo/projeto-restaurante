/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Inicio.js":
/*!*************************!*\
  !*** ./pages/Inicio.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Inicio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _styles_Inicio_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Inicio.module.css */ \"./styles/Inicio.module.css\");\n/* harmony import */ var _styles_Inicio_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Inicio_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n/* harmony import */ var _components_Conteudo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Conteudo */ \"./components/Conteudo.js\");\n/* harmony import */ var _components_Carrinho__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Carrinho */ \"./components/Carrinho.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/pages/Inicio.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Inicio() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      produtos = _useState[0],\n      setProdutos = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),\n      categorias = _useState2[0],\n      setCategorias = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      filtro = _useState3[0],\n      setFiltro = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    function getProdutos() {\n      return _getProdutos.apply(this, arguments);\n    }\n\n    function _getProdutos() {\n      _getProdutos = (0,_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        var response;\n        return _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"http://localhost:1337/products\");\n\n              case 2:\n                response = _context.sent;\n                _context.t0 = setProdutos;\n                _context.next = 6;\n                return response.json();\n\n              case 6:\n                _context.t1 = _context.sent;\n                (0, _context.t0)(_context.t1);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _getProdutos.apply(this, arguments);\n    }\n\n    function getCategorias() {\n      return _getCategorias.apply(this, arguments);\n    }\n\n    function _getCategorias() {\n      _getCategorias = (0,_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n        var response;\n        return _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return fetch(\"http://localhost:1337/categories\");\n\n              case 2:\n                response = _context2.sent;\n                _context2.t0 = setCategorias;\n                _context2.next = 6;\n                return response.json();\n\n              case 6:\n                _context2.t1 = _context2.sent;\n                (0, _context2.t0)(_context2.t1);\n\n              case 8:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n      return _getCategorias.apply(this, arguments);\n    }\n\n    getProdutos();\n    getCategorias();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Inicio_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Conteudo__WEBPACK_IMPORTED_MODULE_4__.default, {\n      produtos: produtos,\n      setProdutos: setProdutos,\n      categorias: categorias\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Carrinho__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Inicio, \"PAHaIicBNLJEpDman4lT5JqsEVU=\");\n\n_c = Inicio;\n\nvar _c;\n\n$RefreshReg$(_c, \"Inicio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSW5pY2lvLmpzPzkxMTEiXSwibmFtZXMiOlsiSW5pY2lvIiwidXNlU3RhdGUiLCJwcm9kdXRvcyIsInNldFByb2R1dG9zIiwiY2F0ZWdvcmlhcyIsInNldENhdGVnb3JpYXMiLCJmaWx0cm8iLCJzZXRGaWx0cm8iLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdXRvcyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZ2V0Q2F0ZWdvcmlhcyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFR0MsK0NBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUV0QkMsUUFGc0I7QUFBQSxNQUVaQyxXQUZZOztBQUFBLG1CQUdPRiwrQ0FBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR3RCRyxVQUhzQjtBQUFBLE1BR1ZDLGFBSFU7O0FBQUEsbUJBSURKLCtDQUFRLENBQUMsQ0FBRCxDQUpQO0FBQUEsTUFJdEJLLE1BSnNCO0FBQUEsTUFJZEMsU0FKYzs7QUFNN0JDLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFdBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlRBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJDLEtBQUssQ0FBQyxnQ0FBRCxDQURoQzs7QUFBQTtBQUNVQyx3QkFEVjtBQUFBLDhCQUVJUixXQUZKO0FBQUE7QUFBQSx1QkFFc0JRLFFBQVEsQ0FBQ0MsSUFBVCxFQUZ0Qjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBQUEsYUFLR0MsYUFMSDtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2VEFLWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUMyQkgsS0FBSyxDQUFDLGtDQUFELENBRGhDOztBQUFBO0FBQ1VDLHdCQURWO0FBQUEsK0JBRUlOLGFBRko7QUFBQTtBQUFBLHVCQUV3Qk0sUUFBUSxDQUFDQyxJQUFULEVBRnhCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxZO0FBQUE7QUFBQTs7QUFTWkgsZUFBVztBQUNYSSxpQkFBYTtBQUNoQixHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLDRFQUFoQjtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLDhEQUFDLHlEQUFEO0FBQ0ksY0FBUSxFQUFFWixRQURkO0FBRUksaUJBQVcsRUFBRUMsV0FGakI7QUFHSSxnQkFBVSxFQUFFQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFPSSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7R0E5QnVCSixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vcGFnZXMvSW5pY2lvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSW5pY2lvLm1vZHVsZS5jc3MnXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXG5pbXBvcnQgQ29udGV1ZG8gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXVkbydcbmltcG9ydCBDYXJyaW5obyBmcm9tICcuLi9jb21wb25lbnRzL0NhcnJpbmhvJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmljaW8oKSB7XG5cbiAgICBjb25zdCBbcHJvZHV0b3MsIHNldFByb2R1dG9zXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtjYXRlZ29yaWFzLCBzZXRDYXRlZ29yaWFzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtmaWx0cm8sIHNldEZpbHRyb10gPSB1c2VTdGF0ZSgwKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHV0b3MoKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L3Byb2R1Y3RzXCIpXG4gICAgICAgICAgICBzZXRQcm9kdXRvcyhhd2FpdCByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmlhcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjEzMzcvY2F0ZWdvcmllc1wiKVxuICAgICAgICAgICAgc2V0Q2F0ZWdvcmlhcyhhd2FpdCByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIH1cbiAgICAgICAgZ2V0UHJvZHV0b3MoKVxuICAgICAgICBnZXRDYXRlZ29yaWFzKClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxNZW51Lz5cbiAgICAgICAgICAgIDxDb250ZXVkbyBcbiAgICAgICAgICAgICAgICBwcm9kdXRvcz17cHJvZHV0b3N9IFxuICAgICAgICAgICAgICAgIHNldFByb2R1dG9zPXtzZXRQcm9kdXRvc31cbiAgICAgICAgICAgICAgICBjYXRlZ29yaWFzPXtjYXRlZ29yaWFzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJyaW5oby8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Inicio.js\n");

/***/ })

});