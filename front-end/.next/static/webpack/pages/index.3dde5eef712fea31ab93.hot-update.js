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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoConteudo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ProdutoConteudo.module.css */ \"./styles/ProdutoConteudo.module.css\");\n/* harmony import */ var _styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/ProdutoConteudo.js\";\n\nfunction ProdutoConteudo(_ref) {\n  var _this = this;\n\n  var produtos = _ref.produtos,\n      setProdutos = _ref.setProdutos;\n  var formatter = new Intl.NumberFormat('pt-BR', {\n    style: 'currency',\n    currency: 'BRL'\n  });\n\n  function ordenarProdutos(valor) {\n    console.log(valor.target.value === \"Menor Preço\");\n\n    if (valor.target.value === \"Menor Preço\") {\n      produtos.sort(function (a, b) {\n        if (a.price > b.price) {\n          return 1;\n        } else if (a.price < b.price) {\n          return -1;\n        }\n\n        return 0;\n      });\n      setProdutos((0,_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(produtos));\n    } else if (valor.target.value === \"Maior Preço\") {\n      produtos.sort(function (a, b) {\n        if (a.price < b.price) {\n          return 1;\n        } else if (a.price > b.price) {\n          return -1;\n        }\n\n        return 0;\n      });\n      setProdutos((0,_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(produtos));\n    }\n\n    console.log(produtos);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtos),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().headerProdutos),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtosTitulo),\n        children: \"Choose Dishes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        onChange: function onChange(selecionado) {\n          ordenarProdutos(selecionado);\n        },\n        className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtosOrdenar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Menor Pre\\xE7o\",\n          children: \"Menor Pre\\xE7o\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Maior Pre\\xE7o\",\n          children: \"Maior Pre\\xE7o\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Maior Quantidade\",\n          children: \"Maior Quantidade\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Menor Quantidade\",\n          children: \"Menor Quantidade\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtosLista),\n      children: produtos.map(function (produto) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtoInfo),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtoImagem),\n            src: \"http://localhost:1337\" + produto.image[0].url\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtoNome),\n            children: produto.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtoPreco),\n            children: formatter.format(produto.price)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_2___default().produtoQuantidade),\n            children: [produto.amount, \" Bowls available\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 29\n          }, _this)]\n        }, produto.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n_c = ProdutoConteudo;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProdutoConteudo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdXRvQ29udGV1ZG8uanM/MTg2YSJdLCJuYW1lcyI6WyJQcm9kdXRvQ29udGV1ZG8iLCJwcm9kdXRvcyIsInNldFByb2R1dG9zIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJvcmRlbmFyUHJvZHV0b3MiLCJ2YWxvciIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsInByaWNlIiwic3R5bGVzIiwic2VsZWNpb25hZG8iLCJtYXAiLCJwcm9kdXRvIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZm9ybWF0IiwiYW1vdW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGVBQVQsT0FBa0Q7QUFBQTs7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjO0FBQzdELE1BQUlDLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDM0NDLFNBQUssRUFBRSxVQURvQztBQUUzQ0MsWUFBUSxFQUFFO0FBRmlDLEdBQS9CLENBQWhCOztBQUtBLFdBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzVCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsYUFBbkM7O0FBQ0EsUUFBR0osS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWIsS0FBdUIsYUFBMUIsRUFBeUM7QUFDckNaLGNBQVEsQ0FBQ2EsSUFBVCxDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ3BCLFlBQUdELENBQUMsQ0FBQ0UsS0FBRixHQUFVRCxDQUFDLENBQUNDLEtBQWYsRUFBc0I7QUFDbEIsaUJBQU8sQ0FBUDtBQUNILFNBRkQsTUFFTSxJQUFHRixDQUFD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bnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUHJvZHV0b0NvbnRldWRvLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1dG9Db250ZXVkbyh7cHJvZHV0b3MsIHNldFByb2R1dG9zfSkge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge1xuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgY3VycmVuY3k6ICdCUkwnLFxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvcmRlbmFyUHJvZHV0b3ModmFsb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2codmFsb3IudGFyZ2V0LnZhbHVlID09PSBcIk1lbm9yIFByZcOnb1wiKVxuICAgICAgICBpZih2YWxvci50YXJnZXQudmFsdWUgPT09IFwiTWVub3IgUHJlw6dvXCIpIHtcbiAgICAgICAgICAgIHByb2R1dG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZihhLnByaWNlID4gYi5wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGEucHJpY2UgPCBiLnByaWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldFByb2R1dG9zKFsuLi5wcm9kdXRvc10pXG4gICAgICAgIH1lbHNlIGlmKHZhbG9yLnRhcmdldC52YWx1ZSA9PT0gXCJNYWlvciBQcmXDp29cIil7XG4gICAgICAgICAgICBwcm9kdXRvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoYS5wcmljZSA8IGIucHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihhLnByaWNlID4gYi5wcmljZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRQcm9kdXRvcyhbLi4ucHJvZHV0b3NdKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1dG9zKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyUHJvZHV0b3N9PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvc1RpdHVsb30+Q2hvb3NlIERpc2hlczwvaDM+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KHNlbGVjaW9uYWRvKSA9PiB7b3JkZW5hclByb2R1dG9zKHNlbGVjaW9uYWRvKX19IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zT3JkZW5hcn0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZW5vciBQcmXDp29cIj5NZW5vciBQcmXDp288L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1haW9yIFByZcOnb1wiPk1haW9yIFByZcOnbzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWFpb3IgUXVhbnRpZGFkZVwiPk1haW9yIFF1YW50aWRhZGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lbm9yIFF1YW50aWRhZGVcIj5NZW5vciBRdWFudGlkYWRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b3NMaXN0YX0+XG4gICAgICAgICAgICAgICAge3Byb2R1dG9zLm1hcChwcm9kdXRvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdXRvLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvSW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvSW1hZ2VtfSBzcmM9e1wiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCIrcHJvZHV0by5pbWFnZVswXS51cmx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvTm9tZX0+e3Byb2R1dG8ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b1ByZWNvfT57Zm9ybWF0dGVyLmZvcm1hdChwcm9kdXRvLnByaWNlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b1F1YW50aWRhZGV9Pntwcm9kdXRvLmFtb3VudH0gQm93bHMgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProdutoConteudo.js\n");

/***/ })

});