"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./src/pages/cart.js":
/*!***************************!*\
  !*** ./src/pages/cart.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"t-shirt\",\n            quantity: 0\n        },\n        {\n            product: \"sweater\",\n            quantity: 0\n        },\n        {\n            product: \"shorts\",\n            quantity: 0\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        let itemsArr = Array(items);\n        console.log(itemsArr);\n        const newItems = items.forEach = (c)=>{\n            if (c.title == \"t-shirt\") {\n                productCodes[0].quantity++;\n            } else if (c.title == \"sweater\") {\n                productCodes[1].quantity++;\n            } else productCodes[2].quantity++;\n        };\n        setCart(newItems);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: cart.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"imagecard\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"imagetitle\",\n                                children: [\n                                    c.title,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"description\",\n                                children: c.description\n                            }, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"image\",\n                                src: c.picture\n                            }, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"5+HPoxSo1E/C3go3F1eDhM/DDhE=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjOzs7QUFDOEI7QUFDSjtBQUV4QyxTQUFTRyxXQUFXOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNSyxlQUFlO1FBQ25CO1lBQUVDLFNBQVM7WUFBV0MsVUFBVTtRQUFFO1FBQ2xDO1lBQUVELFNBQVM7WUFBV0MsVUFBVTtRQUFFO1FBQ2xDO1lBQUVELFNBQVM7WUFBVUMsVUFBVTtRQUFFO0tBQ2xDO0lBRURSLGdEQUFTQSxDQUFDLElBQU07UUFDZCw4QkFBOEI7UUFDOUIsSUFBSVMsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3JDLElBQUlDLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0w7UUFDdkIsSUFBSU0sV0FBV0MsTUFBTUo7UUFDckJLLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixNQUFNSSxXQUFZUCxNQUFNUSxPQUFPLEdBQUcsQ0FBQ0MsSUFBTTtZQUN2QyxJQUFJQSxFQUFFQyxLQUFLLElBQUksV0FBVztnQkFDeEJoQixZQUFZLENBQUMsRUFBRSxDQUFDRSxRQUFRO1lBQzFCLE9BQU8sSUFBSWEsRUFBRUMsS0FBSyxJQUFJLFdBQVc7Z0JBQy9CaEIsWUFBWSxDQUFDLEVBQUUsQ0FBQ0UsUUFBUTtZQUMxQixPQUFPRixZQUFZLENBQUMsRUFBRSxDQUFDRSxRQUFRO1FBQ2pDO1FBQ0FILFFBQVFjO0lBQ1Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNqQiwyREFBR0E7Ozs7OzBCQUNKLDhEQUFDcUI7MEJBQ0VuQixLQUFLb0IsR0FBRyxDQUFDLENBQUNILGtCQUNULDhEQUFDRTt3QkFBSUUsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOztvQ0FBY0osRUFBRUMsS0FBSztvQ0FBQzs7Ozs7OzswQ0FDcEMsOERBQUNLO2dDQUFFRixXQUFVOzBDQUFlSixFQUFFTyxXQUFXOzs7Ozs7MENBQ3pDLDhEQUFDQztnQ0FBSUosV0FBVTtnQ0FBUUssS0FBS1QsRUFBRVUsT0FBTzs7Ozs7OzBDQUNyQyw4REFBQ0M7Ozs7OzBDQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0F6Q1M3QjtLQUFBQTtBQTJDVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2FydC5qcz9mZGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzdG9yZS5jb20vXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdi9OYXZcIjtcblxuZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcm9kdWN0Q29kZXMgPSBbXG4gICAgeyBwcm9kdWN0OiBcInQtc2hpcnRcIiwgcXVhbnRpdHk6IDAgfSxcbiAgICB7IHByb2R1Y3Q6IFwic3dlYXRlclwiLCBxdWFudGl0eTogMCB9LFxuICAgIHsgcHJvZHVjdDogXCJzaG9ydHNcIiwgcXVhbnRpdHk6IDAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0gbG9jYWxTdG9yYWdlIGFjdGlvblxuICAgIGxldCBKU09OaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIik7XG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShKU09OaXRlbXMpO1xuICAgIGxldCBpdGVtc0FyciA9IEFycmF5KGl0ZW1zKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtc0Fycik7XG4gICAgY29uc3QgbmV3SXRlbXMgPSAoaXRlbXMuZm9yRWFjaCA9IChjKSA9PiB7XG4gICAgICBpZiAoYy50aXRsZSA9PSBcInQtc2hpcnRcIikge1xuICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucXVhbnRpdHkrKztcbiAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcInN3ZWF0ZXJcIikge1xuICAgICAgICBwcm9kdWN0Q29kZXNbMV0ucXVhbnRpdHkrKztcbiAgICAgIH0gZWxzZSBwcm9kdWN0Q29kZXNbMl0ucXVhbnRpdHkrKztcbiAgICB9KTtcbiAgICBzZXRDYXJ0KG5ld0l0ZW1zKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NhcnQubWFwKChjKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZWNhcmRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbWFnZXRpdGxlXCI+e2MudGl0bGV9IDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntjLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e2MucGljdHVyZX0+PC9pbWc+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdiIsIkNhcnRQYWdlIiwiY2FydCIsInNldENhcnQiLCJwcm9kdWN0Q29kZXMiLCJwcm9kdWN0IiwicXVhbnRpdHkiLCJKU09OaXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXRlbXMiLCJKU09OIiwicGFyc2UiLCJpdGVtc0FyciIsIkFycmF5IiwiY29uc29sZSIsImxvZyIsIm5ld0l0ZW1zIiwiZm9yRWFjaCIsImMiLCJ0aXRsZSIsImRpdiIsIm1hcCIsImNsYXNzTmFtZSIsImg1IiwicCIsImRlc2NyaXB0aW9uIiwiaW1nIiwic3JjIiwicGljdHVyZSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});