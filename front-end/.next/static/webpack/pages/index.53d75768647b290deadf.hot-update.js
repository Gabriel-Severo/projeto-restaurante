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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Modal.module.css */ \"./styles/Modal.module.css\");\n/* harmony import */ var _styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/user/Projetos/projeto-restaurante/front-end/components/Modal.js\";\n\nfunction Modal(_ref) {\n  var produtoModal = _ref.produtoModal,\n      setModalAtivo = _ref.setModalAtivo,\n      carrinho = _ref.carrinho,\n      setCarrinho = _ref.setCarrinho,\n      produtosLista = _ref.produtosLista,\n      setProdutosLista = _ref.setProdutosLista;\n\n  function handleFecharModal() {\n    setModalAtivo(false);\n  }\n\n  function handleCarrinho() {\n    var posicao = carrinho.findIndex(function (itemProduto) {\n      return itemProduto.produto.id == produtoModal.id;\n    }); // Verifica se já existe esse produto no carrinho\n\n    var posicaoItem = produtosLista.findIndex(function (produto) {\n      return produto.id == produtoModal.id;\n    });\n\n    if (produtosLista[posicaoItem].amount > 0) {\n      produtosLista[posicaoItem].amount -= 1;\n      setProdutosLista(produtosLista);\n\n      if (posicao != -1) {\n        carrinho[posicao].amount += 1;\n        setCarrinho((0,_home_user_Projetos_projeto_restaurante_front_end_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(carrinho));\n      } else {\n        carrinho.push({\n          amount: 1,\n          produto: produtoModal\n        });\n        setCarrinho(carrinho);\n      }\n    } else {\n      console.log(\"Não da\");\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalBackground),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalTop),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalTopTitulo),\n          children: \"Teste\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          onClick: handleFecharModal,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalTopAcao),\n          href: \"#\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalTopIcone),\n            src: \"../img/fechar.svg\",\n            alt: \"fechar\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalHr)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalConteudo),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalProdutoImagem),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalProdutoImagemConteudo),\n            src: \"http://localhost:1337\" + produtoModal.image[0].url,\n            alt: produtoModal.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalProdutoInformacao),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Nome: \", produtoModal.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalProdutoDescricao),\n            children: [\"Descricao: \", produtoModal.description]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Quantidade: \", produtoModal.amount]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"Pre\\xE7o: \", produtoModal.price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalHr)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalAcoes),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: handleFecharModal,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalFechar),\n          children: \"Fechar\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: handleCarrinho,\n          className: (_styles_Modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalAdicionar),\n          children: \"Adicionar ao carrinho\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n_c = Modal;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbC5qcz9kYzU0Il0sIm5hbWVzIjpbIk1vZGFsIiwicHJvZHV0b01vZGFsIiwic2V0TW9kYWxBdGl2byIsImNhcnJpbmhvIiwic2V0Q2FycmluaG8iLCJwcm9kdXRvc0xpc3RhIiwic2V0UHJvZHV0b3NMaXN0YSIsImhhbmRsZUZlY2hhck1vZGFsIiwiaGFuZGxlQ2FycmluaG8iLCJwb3NpY2FvIiwiZmluZEluZGV4IiwiaXRlbVByb2R1dG8iLCJwcm9kdXRvIiwiaWQiLCJwb3NpY2FvSXRlbSIsImFtb3VudCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibW9kYWxIciIsImltYWdlIiwidXJsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLEtBQVQsT0FBc0c7QUFBQSxNQUF0RkMsWUFBc0YsUUFBdEZBLFlBQXNGO0FBQUEsTUFBeEVDLGFBQXdFLFFBQXhFQSxhQUF3RTtBQUFBLE1BQXpEQyxRQUF5RCxRQUF6REEsUUFBeUQ7QUFBQSxNQUEvQ0MsV0FBK0MsUUFBL0NBLFdBQStDO0FBQUEsTUFBbENDLGFBQWtDLFFBQWxDQSxhQUFrQztBQUFBLE1BQW5CQyxnQkFBbUIsUUFBbkJBLGdCQUFtQjs7QUFDakgsV0FBU0MsaUJBQVQsR0FBNkI7QUFDekJMLGlCQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0g7O0FBRUQsV0FBU00sY0FBVCxHQUEwQjtBQUN0QixRQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ08sU0FBVCxDQUFtQixVQUFDQyxXQUFELEVBQWlCO0FBQ2hELGFBQU9BLFdBQVcsQ0FBQ0MsT0FBWixDQUFvQkMsRUFBcEIsSUFBMEJaLFlBQVksQ0FBQ1ksRUFBOUM7QUFDSCxLQUZlLENBQWhCLENBRHNCLENBR25COztBQUVILFFBQU1DLFdBQVcsR0FBR1QsYUFBYSxDQUFDSyxTQUFkLENBQXdCLFVBQUNF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGlCQUFPLEVBQUVYLGNBQWpCO0FBQWlDLG1CQUFTLEVBQUVXLGdGQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkJIO0tBOUR1Qm5CLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTW9kYWwubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoe3Byb2R1dG9Nb2RhbCwgc2V0TW9kYWxBdGl2bywgY2FycmluaG8sIHNldENhcnJpbmhvLCBwcm9kdXRvc0xpc3RhLCBzZXRQcm9kdXRvc0xpc3RhfSkge1xuICAgIGZ1bmN0aW9uIGhhbmRsZUZlY2hhck1vZGFsKCkge1xuICAgICAgICBzZXRNb2RhbEF0aXZvKGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNhcnJpbmhvKCkge1xuICAgICAgICBjb25zdCBwb3NpY2FvID0gY2FycmluaG8uZmluZEluZGV4KChpdGVtUHJvZHV0bykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1Qcm9kdXRvLnByb2R1dG8uaWQgPT0gcHJvZHV0b01vZGFsLmlkXG4gICAgICAgIH0pIC8vIFZlcmlmaWNhIHNlIGrDoSBleGlzdGUgZXNzZSBwcm9kdXRvIG5vIGNhcnJpbmhvXG5cbiAgICAgICAgY29uc3QgcG9zaWNhb0l0ZW0gPSBwcm9kdXRvc0xpc3RhLmZpbmRJbmRleCgocHJvZHV0byk9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZHV0by5pZCA9PSBwcm9kdXRvTW9kYWwuaWRcbiAgICAgICAgfSlcblxuICAgICAgICBpZihwcm9kdXRvc0xpc3RhW3Bvc2ljYW9JdGVtXS5hbW91bnQgPiAwKXtcbiAgICAgICAgICAgIHByb2R1dG9zTGlzdGFbcG9zaWNhb0l0ZW1dLmFtb3VudCAtPSAxXG4gICAgICAgICAgICBzZXRQcm9kdXRvc0xpc3RhKHByb2R1dG9zTGlzdGEpXG5cbiAgICAgICAgICAgIGlmKHBvc2ljYW8gIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjYXJyaW5ob1twb3NpY2FvXS5hbW91bnQgKz0gMVxuICAgICAgICAgICAgICAgIHNldENhcnJpbmhvKFsuLi5jYXJyaW5ob10pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjYXJyaW5oby5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdXRvOiBwcm9kdXRvTW9kYWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldENhcnJpbmhvKGNhcnJpbmhvKVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTsOjbyBkYVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJhY2tncm91bmR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcFRpdHVsb30+VGVzdGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtoYW5kbGVGZWNoYXJNb2RhbH0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUb3BBY2FvfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFRvcEljb25lfSBzcmM9XCIuLi9pbWcvZmVjaGFyLnN2Z1wiIGFsdD1cImZlY2hhclwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEhyfS8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRldWRvfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFByb2R1dG9JbWFnZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbFByb2R1dG9JbWFnZW1Db250ZXVkb30gc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiK3Byb2R1dG9Nb2RhbC5pbWFnZVswXS51cmx9IGFsdD17cHJvZHV0b01vZGFsLm5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxQcm9kdXRvSW5mb3JtYWNhb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21lOiB7cHJvZHV0b01vZGFsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxQcm9kdXRvRGVzY3JpY2FvfT5EZXNjcmljYW86IHtwcm9kdXRvTW9kYWwuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UXVhbnRpZGFkZToge3Byb2R1dG9Nb2RhbC5hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJlw6dvOiB7cHJvZHV0b01vZGFsLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSHJ9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQWNvZXN9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUZlY2hhck1vZGFsfSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEZlY2hhcn0+RmVjaGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2FycmluaG99IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQWRpY2lvbmFyfT5BZGljaW9uYXIgYW8gY2FycmluaG88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Modal.js\n");

/***/ })

});