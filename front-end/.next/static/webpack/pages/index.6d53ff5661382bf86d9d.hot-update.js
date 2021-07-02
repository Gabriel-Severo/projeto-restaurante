/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Modal.module.css */ \"./styles/Modal.module.css\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/Modal.js\";\n\nfunction Modal(_ref) {\n  var produtoModal = _ref.produtoModal,\n      setModalAtivo = _ref.setModalAtivo,\n      carrinho = _ref.carrinho,\n      setCarrinho = _ref.setCarrinho;\n\n  function handleFecharModal() {\n    setModalAtivo(false);\n  }\n\n  function handleCarrinho(produto) {}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalBackground),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modal),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTop),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTopTitulo),\n          children: \"Teste\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          onClick: handleFecharModal,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTopAcao),\n          href: \"#\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTopIcone),\n            src: \"../img/fechar.svg\",\n            alt: \"fechar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalHr)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalConteudo),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoImagem),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoImagemConteudo),\n            src: \"http://localhost:1337\" + produtoModal.image[0].url,\n            alt: produtoModal.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoInformacao),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Nome: \", produtoModal.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoDescricao),\n            children: [\"Descricao: \", produtoModal.description]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Quantidade: \", produtoModal.amount]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Pre\\xE7o: \", produtoModal.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalHr)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalAcoes),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: handleFecharModal,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalFechar),\n          children: \"Fechar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalAdicionar),\n          children: \"Adicionar ao carrinho\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\n_c = Modal;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcz9kYzU0Il0sIm5hbWVzIjpbIk1vZGFsIiwicHJvZHV0b01vZGFsIiwic2V0TW9kYWxBdGl2byIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJoYW5kbGVGZWNoYXJNb2RhbCIsImhhbmRsZUNhcnJpbmhvIiwicHJvZHV0byIsInN0eWxlcyIsIm1vZGFsSHIiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImFtb3VudCIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxPQUFxRTtBQUFBLE1BQXJEQyxZQUFxRCxRQUFyREEsWUFBcUQ7QUFBQSxNQUF2Q0MsYUFBdUMsUUFBdkNBLGFBQXVDO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYzs7QUFDaEYsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekJILGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7O0FBRUQsV0FBU0ksY0FBVCxDQUF3QkMsT0FBeEIsRUFBaUMsQ0FFaEM7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUVDLGlGQUFoQjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQSx1RUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBRUEsZ0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFHLGlCQUFPLEVBQUVILGlCQUFaO0FBQStCLG1CQUFTLEVBQUVHLDhFQUExQztBQUErRCxjQUFJLEVBQUMsR0FBcEU7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUVBLCtFQUFoQjtBQUFzQyxlQUFHLEVBQUMsbUJBQTFDO0FBQThELGVBQUcsRUFBQztBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU9JO0FBQUksaUJBQVMsRUFBRUEseUVBQWNDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVFJO0FBQUssaUJBQVMsRUFBRUQsK0VBQWhCO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxFQUFFQSxvRkFBaEI7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUVBLDRGQUFoQjtBQUFtRCxlQUFHLEVBQUUsMEJBQXdCUCxZQUFZLENBQUNTLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQXRHO0FBQTJHLGVBQUcsRUFBRVYsWUFBWSxDQUFDVztBQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUssbUJBQVMsRUFBRUosd0ZBQWhCO0FBQUEsa0NBQ0k7QUFBQSxpQ0FBVVAsWUFBWSxDQUFDVyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFHLHFCQUFTLEVBQUVKLHVGQUFkO0FBQUEsc0NBQXdEUCxZQUFZLENBQUNZLFdBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsdUNBQWdCWixZQUFZLENBQUNhLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISixlQUlJO0FBQUEscUNBQVdiLFlBQVksQ0FBQ2MsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQW1CSTtBQUFJLGlCQUFTLEVBQUVQLHlFQUFjQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKLGVBb0JJO0FBQUssaUJBQVMsRUFBRUQsNEVBQWhCO0FBQUEsZ0NBQ0k7QUFBUSxpQkFBTyxFQUFFSCxpQkFBakI7QUFBb0MsbUJBQVMsRUFBRUcsNkVBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxtQkFBUyxFQUFFQSxnRkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDtLQXRDdUJSLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTW9kYWwubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoe3Byb2R1dG9Nb2RhbCwgc2V0TW9kYWxBdGl2bywgY2FycmluaG8sIHNldENhcnJpbmhvfSkge1xuICAgIGZ1bmN0aW9uIGhhbmRsZUZlY2hhck1vZGFsKCkge1xuICAgICAgICBzZXRNb2RhbEF0aXZvKGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNhcnJpbmhvKHByb2R1dG8pIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJhY2tncm91bmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcFRpdHVsb30+VGVzdGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGZWNoYXJNb2RhbH0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUb3BBY2FvfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcEljb25lfSBzcmM9XCIuLi9pbWcvZmVjaGFyLnN2Z1wiIGFsdD1cImZlY2hhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhyfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRldWRvfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFByb2R1dG9JbWFnZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFByb2R1dG9JbWFnZW1Db250ZXVkb30gc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiK3Byb2R1dG9Nb2RhbC5pbWFnZVswXS51cmx9IGFsdD17cHJvZHV0b01vZGFsLm5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxQcm9kdXRvSW5mb3JtYWNhb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21lOiB7cHJvZHV0b01vZGFsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxQcm9kdXRvRGVzY3JpY2FvfT5EZXNjcmljYW86IHtwcm9kdXRvTW9kYWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UXVhbnRpZGFkZToge3Byb2R1dG9Nb2RhbC5hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlw6dvOiB7cHJvZHV0b01vZGFsLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSHJ9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQWNvZXN9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZlY2hhck1vZGFsfSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEZlY2hhcn0+RmVjaGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxBZGljaW9uYXJ9PkFkaWNpb25hciBhbyBjYXJyaW5obzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ })

});