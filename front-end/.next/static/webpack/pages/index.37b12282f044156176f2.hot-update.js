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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Modal.module.css */ \"./styles/Modal.module.css\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/Modal.js\";\n\nfunction Modal(_ref) {\n  var produtoModal = _ref.produtoModal,\n      setModalAtivo = _ref.setModalAtivo,\n      carrinho = _ref.carrinho,\n      setCarrinho = _ref.setCarrinho;\n\n  function handleFecharModal() {\n    setModalAtivo(false);\n  }\n\n  function handleCarrinho() {\n    var posicao = carrinho.find(function (itemProduto) {\n      return itemProduto.produto.id == produtoModal.id;\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalBackground),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modal),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTop),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTopTitulo),\n          children: \"Teste\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          onClick: handleFecharModal,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTopAcao),\n          href: \"#\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalTopIcone),\n            src: \"../img/fechar.svg\",\n            alt: \"fechar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalHr)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalConteudo),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoImagem),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoImagemConteudo),\n            src: \"http://localhost:1337\" + produtoModal.image[0].url,\n            alt: produtoModal.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoInformacao),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Nome: \", produtoModal.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalProdutoDescricao),\n            children: [\"Descricao: \", produtoModal.description]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Quantidade: \", produtoModal.amount]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Pre\\xE7o: \", produtoModal.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalHr)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalAcoes),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: handleFecharModal,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalFechar),\n          children: \"Fechar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: handleCarrinho,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalAdicionar),\n          children: \"Adicionar ao carrinho\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n_c = Modal;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcz9kYzU0Il0sIm5hbWVzIjpbIk1vZGFsIiwicHJvZHV0b01vZGFsIiwic2V0TW9kYWxBdGl2byIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJoYW5kbGVGZWNoYXJNb2RhbCIsImhhbmRsZUNhcnJpbmhvIiwicG9zaWNhbyIsImZpbmQiLCJpdGVtUHJvZHV0byIsInByb2R1dG8iLCJpZCIsInN0eWxlcyIsIm1vZGFsSHIiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImFtb3VudCIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsS0FBVCxPQUFxRTtBQUFBLE1BQXJEQyxZQUFxRCxRQUFyREEsWUFBcUQ7QUFBQSxNQUF2Q0MsYUFBdUMsUUFBdkNBLGFBQXVDO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYzs7QUFDaEYsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekJILGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7O0FBRUQsV0FBU0ksY0FBVCxHQUEwQjtBQUN0QixRQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjLFVBQUNDLFdBQUQsRUFBaUI7QUFDM0MsYUFBT0EsV0FBVyxDQUFDQyxPQUFaLENBQW9CQyxFQUFwQixJQUEwQlYsWUFBWSxDQUFDVSxFQUE5QztBQUNILEtBRmUsQ0FBaEI7QUFHSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsaUZBQWhCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVBLHVFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsMEVBQWhCO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFFQSxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUcsaUJBQU8sRUFBRVAsaUJBQVo7QUFBK0IsbUJBQVMsRUFBRU8sOEVBQTFDO0FBQStELGNBQUksRUFBQyxHQUFwRTtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBRUEsK0VBQWhCO0FBQXNDLGVBQUcsRUFBQyxtQkFBMUM7QUFBOEQsZUFBRyxFQUFDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBT0k7QUFBSSxpQkFBUyxFQUFFQSx5RUFBY0M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKLGVBUUk7QUFBSyxpQkFBUyxFQUFFRCwrRUFBaEI7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUVBLG9GQUFoQjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBRUEsNEZBQWhCO0FBQW1ELGVBQUcsRUFBRSwwQkFBd0JYLFlBQVksQ0FBQ2EsS0FBYixDQUFtQixDQUFuQixFQUFzQkMsR0FBdEc7QUFBMkcsZUFBRyxFQUFFZCxZQUFZLENBQUNlO0FBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFFSix3RkFBaEI7QUFBQSxrQ0FDSTtBQUFBLGlDQUFVWCxZQUFZLENBQUNlLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcscUJBQVMsRUFBRUosdUZBQWQ7QUFBQSxzQ0FBd0RYLFlBQVksQ0FBQ2dCLFdBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQUEsdUNBQWdCaEIsWUFBWSxDQUFDaUIsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhKLGVBSUk7QUFBQSxxQ0FBV2pCLFlBQVksQ0FBQ2tCLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkosZUFtQkk7QUFBSSxpQkFBUyxFQUFFUCx5RUFBY0M7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CSixlQW9CSTtBQUFLLGlCQUFTLEVBQUVELDRFQUFoQjtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRVAsaUJBQWpCO0FBQW9DLG1CQUFTLEVBQUVPLDZFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQVEsaUJBQU8sRUFBRU4sY0FBakI7QUFBaUMsbUJBQVMsRUFBRU0sZ0ZBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7S0F4Q3VCWixLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Nb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL01vZGFsLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHtwcm9kdXRvTW9kYWwsIHNldE1vZGFsQXRpdm8sIGNhcnJpbmhvLCBzZXRDYXJyaW5ob30pIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVGZWNoYXJNb2RhbCgpIHtcbiAgICAgICAgc2V0TW9kYWxBdGl2byhmYWxzZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDYXJyaW5obygpIHtcbiAgICAgICAgY29uc3QgcG9zaWNhbyA9IGNhcnJpbmhvLmZpbmQoKGl0ZW1Qcm9kdXRvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbVByb2R1dG8ucHJvZHV0by5pZCA9PSBwcm9kdXRvTW9kYWwuaWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQmFja2dyb3VuZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVG9wfT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVG9wVGl0dWxvfT5UZXN0ZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2hhbmRsZUZlY2hhck1vZGFsfSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcEFjYW99IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsVG9wSWNvbmV9IHNyYz1cIi4uL2ltZy9mZWNoYXIuc3ZnXCIgYWx0PVwiZmVjaGFyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSHJ9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGV1ZG99PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsUHJvZHV0b0ltYWdlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsUHJvZHV0b0ltYWdlbUNvbnRldWRvfSBzcmM9e1wiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCIrcHJvZHV0b01vZGFsLmltYWdlWzBdLnVybH0gYWx0PXtwcm9kdXRvTW9kYWwubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFByb2R1dG9JbmZvcm1hY2FvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5vbWU6IHtwcm9kdXRvTW9kYWwubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFByb2R1dG9EZXNjcmljYW99PkRlc2NyaWNhbzoge3Byb2R1dG9Nb2RhbC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5RdWFudGlkYWRlOiB7cHJvZHV0b01vZGFsLmFtb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmXDp286IHtwcm9kdXRvTW9kYWwucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxIcn0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxBY29lc30+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRmVjaGFyTW9kYWx9IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsRmVjaGFyfT5GZWNoYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYXJyaW5ob30gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxBZGljaW9uYXJ9PkFkaWNpb25hciBhbyBjYXJyaW5obzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ })

});