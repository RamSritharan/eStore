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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        let itemsArr = Array(items);\n        console.log(itemsArr);\n        const newItems = items.map = (c)=>{\n            if (c.title == \"T-shirt\") {\n                productCodes[0].quantity++;\n                productCodes[0].description = c.description;\n                productCodes[0].picture = c.picture;\n            } else if (c.title == \"Sweater\") {\n                productCodes[1].quantity++;\n                productCodes[1].description = c.description;\n                productCodes[1].picture = c.picture;\n            } else if (c.title == \"Shorts\") {\n                productCodes[2].quantity++;\n                productCodes[2].description = c.description;\n                productCodes[2].picture = c.picture;\n            }\n        };\n        setCart(newItems);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: cart.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"imagecard\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"imagetitle\",\n                                children: [\n                                    c.product,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"description\",\n                                children: c.description\n                            }, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"description\",\n                                children: [\n                                    \"Quantity: \",\n                                    c.quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"image\",\n                                src: c.picture\n                            }, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"5+HPoxSo1E/C3go3F1eDhM/DDhE=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjOzs7QUFDOEI7QUFDSjtBQUV4QyxTQUFTRyxXQUFXOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNSyxlQUFlO1FBQ25CO1lBQUVDLFNBQVM7WUFBV0MsYUFBYTtZQUFJQyxTQUFTO1lBQUlDLFVBQVU7UUFBRTtRQUNoRTtZQUFFSCxTQUFTO1lBQVdDLGFBQWE7WUFBSUMsU0FBUztZQUFJQyxVQUFVO1FBQUU7UUFDaEU7WUFBRUgsU0FBUztZQUFVQyxhQUFhO1lBQUlDLFNBQVM7WUFBSUMsVUFBVTtRQUFFO0tBQ2hFO0lBRURWLGdEQUFTQSxDQUFDLElBQU07UUFDZCw4QkFBOEI7UUFDOUIsSUFBSVcsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3JDLElBQUlDLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0w7UUFDdkIsSUFBSU0sV0FBV0MsTUFBTUo7UUFDckJLLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixNQUFNSSxXQUFZUCxNQUFNUSxHQUFHLEdBQUcsQ0FBQ0MsSUFBTTtZQUNuQyxJQUFJQSxFQUFFQyxLQUFLLElBQUksV0FBVztnQkFDeEJsQixZQUFZLENBQUMsRUFBRSxDQUFDSSxRQUFRO2dCQUN4QkosWUFBWSxDQUFDLEVBQUUsQ0FBQ0UsV0FBVyxHQUFHZSxFQUFFZixXQUFXO2dCQUMzQ0YsWUFBWSxDQUFDLEVBQUUsQ0FBQ0csT0FBTyxHQUFHYyxFQUFFZCxPQUFPO1lBQ3JDLE9BQU8sSUFBSWMsRUFBRUMsS0FBSyxJQUFJLFdBQVc7Z0JBQy9CbEIsWUFBWSxDQUFDLEVBQUUsQ0FBQ0ksUUFBUTtnQkFDeEJKLFlBQVksQ0FBQyxFQUFFLENBQUNFLFdBQVcsR0FBR2UsRUFBRWYsV0FBVztnQkFDM0NGLFlBQVksQ0FBQyxFQUFFLENBQUNHLE9BQU8sR0FBR2MsRUFBRWQsT0FBTztZQUNyQyxPQUFPLElBQUljLEVBQUVDLEtBQUssSUFBSSxVQUFVO2dCQUM5QmxCLFlBQVksQ0FBQyxFQUFFLENBQUNJLFFBQVE7Z0JBQ3hCSixZQUFZLENBQUMsRUFBRSxDQUFDRSxXQUFXLEdBQUdlLEVBQUVmLFdBQVc7Z0JBQzNDRixZQUFZLENBQUMsRUFBRSxDQUFDRyxPQUFPLEdBQUdjLEVBQUVkLE9BQU87WUFDckMsQ0FBQztRQUNIO1FBQ0FKLFFBQVFnQjtJQUNWO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDbkIsMkRBQUdBOzs7OzswQkFDSiw4REFBQ3VCOzBCQUNFckIsS0FBS2tCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDVCw4REFBQ0U7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTs7b0NBQWNILEVBQUVoQixPQUFPO29DQUFDOzs7Ozs7OzBDQUN0Qyw4REFBQ3FCO2dDQUFFRixXQUFVOzBDQUFlSCxFQUFFZixXQUFXOzs7Ozs7MENBQ3pDLDhEQUFDb0I7Z0NBQUVGLFdBQVU7O29DQUFjO29DQUFXSCxFQUFFYixRQUFROzs7Ozs7OzBDQUVoRCw4REFBQ21CO2dDQUFJSCxXQUFVO2dDQUFRSSxLQUFLUCxFQUFFZCxPQUFPOzs7Ozs7MENBQ3JDLDhEQUFDc0I7Ozs7OzBDQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0FuRFM1QjtLQUFBQTtBQXFEVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2FydC5qcz9mZGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzdG9yZS5jb20vXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdi9OYXZcIjtcblxuZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcm9kdWN0Q29kZXMgPSBbXG4gICAgeyBwcm9kdWN0OiBcIlQtc2hpcnRcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBwcm9kdWN0OiBcIlN3ZWF0ZXJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBwcm9kdWN0OiBcIlNob3J0c1wiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGljdHVyZTogXCJcIiwgcXVhbnRpdHk6IDAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0gbG9jYWxTdG9yYWdlIGFjdGlvblxuICAgIGxldCBKU09OaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIik7XG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShKU09OaXRlbXMpO1xuICAgIGxldCBpdGVtc0FyciA9IEFycmF5KGl0ZW1zKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtc0Fycik7XG4gICAgY29uc3QgbmV3SXRlbXMgPSAoaXRlbXMubWFwID0gKGMpID0+IHtcbiAgICAgIGlmIChjLnRpdGxlID09IFwiVC1zaGlydFwiKSB7XG4gICAgICAgIHByb2R1Y3RDb2Rlc1swXS5xdWFudGl0eSsrO1xuICAgICAgICBwcm9kdWN0Q29kZXNbMF0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucGljdHVyZSA9IGMucGljdHVyZTtcbiAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcIlN3ZWF0ZXJcIikge1xuICAgICAgICBwcm9kdWN0Q29kZXNbMV0ucXVhbnRpdHkrKztcbiAgICAgICAgcHJvZHVjdENvZGVzWzFdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvZHVjdENvZGVzWzFdLnBpY3R1cmUgPSBjLnBpY3R1cmU7XG4gICAgICB9IGVsc2UgaWYgKGMudGl0bGUgPT0gXCJTaG9ydHNcIikge1xuICAgICAgICBwcm9kdWN0Q29kZXNbMl0ucXVhbnRpdHkrKztcbiAgICAgICAgcHJvZHVjdENvZGVzWzJdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvZHVjdENvZGVzWzJdLnBpY3R1cmUgPSBjLnBpY3R1cmU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2V0Q2FydChuZXdJdGVtcyk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXJ0Lm1hcCgoYykgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaW1hZ2V0aXRsZVwiPntjLnByb2R1Y3R9IDwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntjLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+UXVhbnRpdHk6IHtjLnF1YW50aXR5fTwvcD5cblxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17Yy5waWN0dXJlfT48L2ltZz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2IiwiQ2FydFBhZ2UiLCJjYXJ0Iiwic2V0Q2FydCIsInByb2R1Y3RDb2RlcyIsInByb2R1Y3QiLCJkZXNjcmlwdGlvbiIsInBpY3R1cmUiLCJxdWFudGl0eSIsIkpTT05pdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsIkpTT04iLCJwYXJzZSIsIml0ZW1zQXJyIiwiQXJyYXkiLCJjb25zb2xlIiwibG9nIiwibmV3SXRlbXMiLCJtYXAiLCJjIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsInAiLCJpbWciLCJzcmMiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});