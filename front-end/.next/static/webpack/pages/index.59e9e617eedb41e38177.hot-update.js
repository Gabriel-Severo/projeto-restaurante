/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ProdutoConteudo.js":
/*!***************************************!*\
  !*** ./components/ProdutoConteudo.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoConteudo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProdutoConteudo.module.css */ \"./styles/ProdutoConteudo.module.css\");\n/* harmony import */ var _styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/ProdutoConteudo.js\";\n\nfunction ProdutoConteudo(_ref) {\n  var _this = this;\n\n  var produtos = _ref.produtos,\n      setProdutos = _ref.setProdutos;\n  var formatador = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'BRL'\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtos),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerProdutos),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtosTitulo),\n        children: \"Choose Dishes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtosOrdenar),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Dine In\",\n          children: \"Dine In\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtosLista),\n      children: produtos.map(function (produto) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoInfo),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoImagem),\n            src: \"http://localhost:1337\" + produto.image[0].url\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoNome),\n            children: produto.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoPreco),\n            children: produto.price\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoQuantidade),\n            children: [produto.amount, \" Bowls available\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 29\n          }, _this)]\n        }, produto.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n_c = ProdutoConteudo;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProdutoConteudo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdXRvQ29udGV1ZG8uanM/MTg2YSJdLCJuYW1lcyI6WyJQcm9kdXRvQ29udGV1ZG8iLCJwcm9kdXRvcyIsInNldFByb2R1dG9zIiwiZm9ybWF0YWRvciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5Iiwic3R5bGVzIiwibWFwIiwicHJvZHV0byIsImltYWdlIiwidXJsIiwibmFtZSIsInByaWNlIiwiYW1vdW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULE9BQWtEO0FBQUE7O0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYztBQUM3RCxNQUFJQyxVQUFVLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzVDQyxTQUFLLEVBQUUsVUFEcUM7QUFFNUNDLFlBQVEsRUFBRTtBQUZrQyxHQUEvQixDQUFqQjtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxvRkFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsMEZBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSwwRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxpQkFBUyxFQUFFQSwyRkFBbkI7QUFBQSwrQkFDSTtBQUFRLGVBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0k7QUFBSyxlQUFTLEVBQUVBLHlGQUFoQjtBQUFBLGdCQUNLUCxRQUFRLENBQUNRLEdBQVQsQ0FBYSxVQUFBQyxPQUFPLEVBQUk7QUFDckIsNEJBQ0k7QUFBc0IsbUJBQVMsRUFBRUYsdUZBQWpDO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFFQSx5RkFBaEI7QUFBc0MsZUFBRyxFQUFFLDBCQUF3QkUsT0FBTyxDQUFDQyxLQUFSLENBQWMsQ0FBZCxFQUFpQkM7QUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUcscUJBQVMsRUFBRUosdUZBQWQ7QUFBQSxzQkFBbUNFLE9BQU8sQ0FBQ0c7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUcscUJBQVMsRUFBRUwsd0ZBQWQ7QUFBQSxzQkFBb0NFLE9BQU8sQ0FBQ0k7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQUcscUJBQVMsRUFBRU4sNkZBQWQ7QUFBQSx1QkFBeUNFLE9BQU8sQ0FBQ0ssTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUEsV0FBVUwsT0FBTyxDQUFDTSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBUUgsT0FUQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSDtLQTNCdUJoQixlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdXRvQ29udGV1ZG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Qcm9kdXRvQ29udGV1ZG8ubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHV0b0NvbnRldWRvKHtwcm9kdXRvcywgc2V0UHJvZHV0b3N9KSB7XG4gICAgdmFyIGZvcm1hdGFkb3IgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgY3VycmVuY3k6ICdCUkwnLFxuICAgICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclByb2R1dG9zfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b3NUaXR1bG99PkNob29zZSBEaXNoZXM8L2gzPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b3NPcmRlbmFyfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpbmUgSW5cIj5EaW5lIEluPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b3NMaXN0YX0+XG4gICAgICAgICAgICAgICAge3Byb2R1dG9zLm1hcChwcm9kdXRvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdXRvLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvSW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvSW1hZ2VtfSBzcmM9e1wiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCIrcHJvZHV0by5pbWFnZVswXS51cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvTm9tZX0+e3Byb2R1dG8ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b1ByZWNvfT57cHJvZHV0by5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b1F1YW50aWRhZGV9Pntwcm9kdXRvLmFtb3VudH0gQm93bHMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProdutoConteudo.js\n");

/***/ })

});