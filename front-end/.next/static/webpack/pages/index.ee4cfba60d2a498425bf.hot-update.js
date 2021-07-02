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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProdutoConteudo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/ProdutoConteudo.module.css */ \"./styles/ProdutoConteudo.module.css\");\n/* harmony import */ var _styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/ProdutoConteudo.js\";\n\nfunction ProdutoConteudo(_ref) {\n  var _this = this;\n\n  var produtos = _ref.produtos,\n      setOrdernarMetodo = _ref.setOrdernarMetodo,\n      setModalAtivo = _ref.setModalAtivo,\n      setProdutoModal = _ref.setProdutoModal;\n  var formatter = new Intl.NumberFormat('pt-BR', {\n    style: 'currency',\n    currency: 'BRL'\n  });\n\n  function handleOrdenar(metodo) {\n    setOrdernarMetodo(metodo.target.value);\n  }\n\n  function handleSelecionarProduto() {\n    console.log(produto);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtos),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().headerProdutos),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtosTitulo),\n        children: \"Choose Dishes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        onChange: function onChange(selecionado) {\n          handleOrdenar(selecionado);\n        },\n        className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtosOrdenar),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Menor Pre\\xE7o\",\n          children: \"Menor Pre\\xE7o\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Maior Pre\\xE7o\",\n          children: \"Maior Pre\\xE7o\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Menor Quantidade\",\n          children: \"Menor Quantidade\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n          value: \"Maior Quantidade\",\n          children: \"Maior Quantidade\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtosLista),\n      children: produtos.map(function (produto) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          onClick: function onClick() {\n            handleSelecionarProduto(produto);\n          },\n          className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoInfo),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoImagem),\n            src: \"http://localhost:1337\" + produto.image[0].url\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoNome),\n            children: produto.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoPreco),\n            children: formatter.format(produto.price)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_ProdutoConteudo_module_css__WEBPACK_IMPORTED_MODULE_1___default().produtoQuantidade),\n            children: [produto.amount, \" Bowls available\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 29\n          }, _this)]\n        }, produto.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n_c = ProdutoConteudo;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProdutoConteudo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdXRvQ29udGV1ZG8uanM/MTg2YSJdLCJuYW1lcyI6WyJQcm9kdXRvQ29udGV1ZG8iLCJwcm9kdXRvcyIsInNldE9yZGVybmFyTWV0b2RvIiwic2V0TW9kYWxBdGl2byIsInNldFByb2R1dG9Nb2RhbCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiaGFuZGxlT3JkZW5hciIsIm1ldG9kbyIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU2VsZWNpb25hclByb2R1dG8iLCJjb25zb2xlIiwibG9nIiwicHJvZHV0byIsInN0eWxlcyIsInNlbGVjaW9uYWRvIiwibWFwIiwiaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiZm9ybWF0IiwicHJpY2UiLCJhbW91bnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLGVBQVQsT0FBd0Y7QUFBQTs7QUFBQSxNQUE5REMsUUFBOEQsUUFBOURBLFFBQThEO0FBQUEsTUFBcERDLGlCQUFvRCxRQUFwREEsaUJBQW9EO0FBQUEsTUFBakNDLGFBQWlDLFFBQWpDQSxhQUFpQztBQUFBLE1BQWxCQyxlQUFrQixRQUFsQkEsZUFBa0I7QUFDbkcsTUFBSUMsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUMzQ0MsU0FBSyxFQUFFLFVBRG9DO0FBRTNDQyxZQUFRLEVBQUU7QUFGaUMsR0FBL0IsQ0FBaEI7O0FBS0EsV0FBU0MsYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFDM0JULHFCQUFpQixDQUFDUyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZixDQUFqQjtBQUNIOztBQUVELFdBQVNDLHVCQUFULEdBQW1DO0FBQy9CQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBWjtBQUNIOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFFQyxvRkFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsMEZBQWhCO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFQSwwRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxnQkFBUSxFQUFFLGtCQUFDQyxXQUFELEVBQWlCO0FBQUNULHVCQUFhLENBQUNTLFdBQUQsQ0FBYjtBQUEyQixTQUEvRDtBQUFpRSxpQkFBUyxFQUFFRCwyRkFBNUU7QUFBQSxnQ0FDSTtBQUFRLGVBQUssRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQVEsZUFBSyxFQUFDLGdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0k7QUFBUSxlQUFLLEVBQUMsa0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSTtBQUFRLGVBQUssRUFBQyxrQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJO0FBQUssZUFBUyxFQUFFQSx5RkFBaEI7QUFBQSxnQkFDS2pCLFFBQVEsQ0FBQ21CLEdBQVQsQ0FBYSxVQUFBSCxPQUFPLEVBQUk7QUFDckIsNEJBQ0k7QUFBSyxpQkFBTyxFQUFFLG1CQUFNO0FBQUNILG1DQUF1QixDQUFDRyxPQUFELENBQXZCO0FBQWlDLFdBQXREO0FBQXlFLG1CQUFTLEVBQUVDLHVGQUFwRjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBRUEseUZBQWhCO0FBQXNDLGVBQUcsRUFBRSwwQkFBd0JELE9BQU8sQ0FBQ0ksS0FBUixDQUFjLENBQWQsRUFBaUJDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFHLHFCQUFTLEVBQUVKLHVGQUFkO0FBQUEsc0JBQW1DRCxPQUFPLENBQUNNO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSTtBQUFHLHFCQUFTLEVBQUVMLHdGQUFkO0FBQUEsc0JBQW9DYixTQUFTLENBQUNtQixNQUFWLENBQWlCUCxPQUFPLENBQUNRLEtBQXpCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFHLHFCQUFTLEVBQUVQLDZGQUFkO0FBQUEsdUJBQXlDRCxPQUFPLENBQUNTLE1BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBLFdBQTZEVCxPQUFPLENBQUNVLEVBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFRSCxPQVRBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJIO0tBdkN1QjNCLGUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1dG9Db250ZXVkby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1Byb2R1dG9Db250ZXVkby5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdXRvQ29udGV1ZG8oe3Byb2R1dG9zLCBzZXRPcmRlcm5hck1ldG9kbywgc2V0TW9kYWxBdGl2bywgc2V0UHJvZHV0b01vZGFsfSkge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge1xuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgY3VycmVuY3k6ICdCUkwnLFxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVPcmRlbmFyKG1ldG9kbykge1xuICAgICAgICBzZXRPcmRlcm5hck1ldG9kbyhtZXRvZG8udGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjaW9uYXJQcm9kdXRvKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdXRvKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyUHJvZHV0b3N9PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvc1RpdHVsb30+Q2hvb3NlIERpc2hlczwvaDM+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KHNlbGVjaW9uYWRvKSA9PiB7aGFuZGxlT3JkZW5hcihzZWxlY2lvbmFkbyl9fSBjbGFzc05hbWU9e3N0eWxlcy5wcm9kdXRvc09yZGVuYXJ9PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVub3IgUHJlw6dvXCI+TWVub3IgUHJlw6dvPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWlvciBQcmXDp29cIj5NYWlvciBQcmXDp288L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lbm9yIFF1YW50aWRhZGVcIj5NZW5vciBRdWFudGlkYWRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNYWlvciBRdWFudGlkYWRlXCI+TWFpb3IgUXVhbnRpZGFkZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9zTGlzdGF9PlxuICAgICAgICAgICAgICAgIHtwcm9kdXRvcy5tYXAocHJvZHV0byA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtoYW5kbGVTZWxlY2lvbmFyUHJvZHV0byhwcm9kdXRvKX19IGtleT17cHJvZHV0by5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b0luZm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b0ltYWdlbX0gc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiK3Byb2R1dG8uaW1hZ2VbMF0udXJsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZHV0b05vbWV9Pntwcm9kdXRvLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9QcmVjb30+e2Zvcm1hdHRlci5mb3JtYXQocHJvZHV0by5wcmljZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2R1dG9RdWFudGlkYWRlfT57cHJvZHV0by5hbW91bnR9IEJvd2xzIGF2YWlsYWJsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProdutoConteudo.js\n");

/***/ })

});