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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(props) {\n    console.log(\"hello\", props.products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.products.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"imagecard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"upload_image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"imagetitle\",\n                            children: [\n                                \" \",\n                                c.Product_title.S\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"card-subtitle mb-2 text-muted\",\n                            children: [\n                                \" \",\n                                c.Product_Id.N,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"card-text\",\n                            children: c.Product_description.S\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsS0FBS0MsS0FBSyxFQUFFO0lBQ25CQyxRQUFRQyxHQUFHLENBQUMsU0FBU0YsTUFBTUcsUUFBUTtJQUNuQyxxQkFDRTtrQkFDR0gsTUFBTUcsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ25CLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTs7Z0NBQWE7Z0NBQUVGLEVBQUVJLGFBQWEsQ0FBQ0MsQ0FBQzs7Ozs7OztzQ0FDOUMsOERBQUNDOzRCQUFHSixXQUFVOztnQ0FDWDtnQ0FDQUYsRUFBRU8sVUFBVSxDQUFDQyxDQUFDO2dDQUFFOzs7Ozs7O3NDQUVuQiw4REFBQ0M7NEJBQUVQLFdBQVU7c0NBQWFGLEVBQUVVLG1CQUFtQixDQUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0Q7S0FsQlNYO0FBbUJULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmQvY2FyZHMuanN4P2Y3MWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIGNvbnNvbGUubG9nKFwiaGVsbG9cIiwgcHJvcHMucHJvZHVjdHMpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcHMucHJvZHVjdHMubWFwKChjKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfaW1hZ2VcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbWFnZXRpdGxlXCI+IHtjLlByb2R1Y3RfdGl0bGUuU308L2g1PlxuICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgbWItMiB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAge2MuUHJvZHVjdF9JZC5OfXtcIiBcIn1cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57Yy5Qcm9kdWN0X2Rlc2NyaXB0aW9uLlN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0cyIsIm1hcCIsImMiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsIlByb2R1Y3RfdGl0bGUiLCJTIiwiaDYiLCJQcm9kdWN0X0lkIiwiTiIsInAiLCJQcm9kdWN0X2Rlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/cards.jsx\n"));

/***/ })

});