"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Card/cards.jsx":
/*!***************************************!*\
  !*** ./src/components/Card/cards.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"card-title\",\n                            children: [\n                                \" \",\n                                c.Product_title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"card-subtitle mb-2 text-muted\",\n                            children: [\n                                \" \",\n                                c.Product_Id,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"card-text\",\n                            children: c.Product_description\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsS0FBS0MsS0FBSyxFQUFFO0lBQ25CLHFCQUNFO2tCQUNHQSxNQUFNQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ1YsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVOztnQ0FBYTtnQ0FBRUYsRUFBRUksYUFBYTs7Ozs7OztzQ0FDNUMsOERBQUNDOzRCQUFHSCxXQUFVOztnQ0FBZ0M7Z0NBQUVGLEVBQUVNLFVBQVU7Z0NBQUM7Ozs7Ozs7c0NBQzdELDhEQUFDQzs0QkFBRUwsV0FBVTtzQ0FBYUYsRUFBRVEsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0Q7S0FkU1g7QUFlVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeD9mNzFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcHMubWFwKChjKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPiB7Yy5Qcm9kdWN0X3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4ge2MuUHJvZHVjdF9JZH0gPC9oNj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntjLlByb2R1Y3RfZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJwcm9wcyIsIm1hcCIsImMiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsIlByb2R1Y3RfdGl0bGUiLCJoNiIsIlByb2R1Y3RfSWQiLCJwIiwiUHJvZHVjdF9kZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/cards.jsx\n"));

/***/ })

});