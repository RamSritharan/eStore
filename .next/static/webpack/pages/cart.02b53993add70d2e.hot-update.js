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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0\n        }\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        console.log(items);\n        items.forEach((c)=>{\n            if (c.title == \"T-Shirt\") {\n                productCodes[0].quantity += 1;\n                productCodes[0].description = c.description;\n                productCodes[0].picture = c.picture;\n            } else if (c.title == \"Sweater\") {\n                productCodes[1].quantity += 1;\n                productCodes[1].description = c.description;\n                productCodes[1].picture = c.picture;\n            } else if (c.title == \"Shorts\") {\n                productCodes[2].quantity += 1;\n                productCodes[2].description = c.description;\n                productCodes[2].picture = c.picture;\n            }\n        });\n        const newProducts = productCodes.forEach((c)=>{\n            if (c.quantity == 0) {\n                delete productCodes[c];\n            }\n        });\n        setCart(newProducts);\n    }, []);\n    console.log(cart);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    cart.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"imagecard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"imagetitle\",\n                                    children: [\n                                        c.product,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"description\",\n                                    children: c.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"description\",\n                                    children: [\n                                        \"Quantity: \",\n                                        c.quantity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"image\",\n                                    src: c.picture\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"imagecard\",\n                        children: \" Checkout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"5+HPoxSo1E/C3go3F1eDhM/DDhE=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjOzs7QUFDOEI7QUFDSjtBQUV4QyxTQUFTRyxXQUFXOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNSyxlQUFlO1FBQ25CO1lBQUVDLFNBQVM7WUFBV0MsYUFBYTtZQUFJQyxTQUFTO1lBQUlDLFVBQVU7UUFBRTtRQUNoRTtZQUFFSCxTQUFTO1lBQVdDLGFBQWE7WUFBSUMsU0FBUztZQUFJQyxVQUFVO1FBQUU7UUFDaEU7WUFBRUgsU0FBUztZQUFVQyxhQUFhO1lBQUlDLFNBQVM7WUFBSUMsVUFBVTtRQUFFO0tBQ2hFO0lBRURWLGdEQUFTQSxDQUFDLElBQU07UUFDZCw4QkFBOEI7UUFDOUIsSUFBSVcsWUFBWUMsYUFBYUMsT0FBTyxDQUFDO1FBQ3JDLElBQUlDLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0w7UUFDdkJNLFFBQVFDLEdBQUcsQ0FBQ0o7UUFFWkEsTUFBTUssT0FBTyxDQUFDLENBQUNDLElBQU07WUFDbkIsSUFBSUEsRUFBRUMsS0FBSyxJQUFJLFdBQVc7Z0JBQ3hCZixZQUFZLENBQUMsRUFBRSxDQUFDSSxRQUFRLElBQUk7Z0JBQzVCSixZQUFZLENBQUMsRUFBRSxDQUFDRSxXQUFXLEdBQUdZLEVBQUVaLFdBQVc7Z0JBQzNDRixZQUFZLENBQUMsRUFBRSxDQUFDRyxPQUFPLEdBQUdXLEVBQUVYLE9BQU87WUFDckMsT0FBTyxJQUFJVyxFQUFFQyxLQUFLLElBQUksV0FBVztnQkFDL0JmLFlBQVksQ0FBQyxFQUFFLENBQUNJLFFBQVEsSUFBSTtnQkFDNUJKLFlBQVksQ0FBQyxFQUFFLENBQUNFLFdBQVcsR0FBR1ksRUFBRVosV0FBVztnQkFDM0NGLFlBQVksQ0FBQyxFQUFFLENBQUNHLE9BQU8sR0FBR1csRUFBRVgsT0FBTztZQUNyQyxPQUFPLElBQUlXLEVBQUVDLEtBQUssSUFBSSxVQUFVO2dCQUM5QmYsWUFBWSxDQUFDLEVBQUUsQ0FBQ0ksUUFBUSxJQUFJO2dCQUM1QkosWUFBWSxDQUFDLEVBQUUsQ0FBQ0UsV0FBVyxHQUFHWSxFQUFFWixXQUFXO2dCQUMzQ0YsWUFBWSxDQUFDLEVBQUUsQ0FBQ0csT0FBTyxHQUFHVyxFQUFFWCxPQUFPO1lBQ3JDLENBQUM7UUFDSDtRQUNBLE1BQU1hLGNBQWNoQixhQUFhYSxPQUFPLENBQUMsQ0FBQ0MsSUFBTTtZQUM5QyxJQUFJQSxFQUFFVixRQUFRLElBQUksR0FBRztnQkFDbkIsT0FBT0osWUFBWSxDQUFDYyxFQUFFO1lBQ3hCLENBQUM7UUFDSDtRQUNBZixRQUFRaUI7SUFDVixHQUFHLEVBQUU7SUFFTEwsUUFBUUMsR0FBRyxDQUFDZDtJQUVaLHFCQUNFOzswQkFDRSw4REFBQ0YsMkRBQUdBOzs7OzswQkFDSiw4REFBQ3FCOztvQkFDRW5CLEtBQUtvQixHQUFHLENBQUMsQ0FBQ0osa0JBQ1QsOERBQUNHOzRCQUFJRSxXQUFVOzs4Q0FDYiw4REFBQ0M7b0NBQUdELFdBQVU7O3dDQUFjTCxFQUFFYixPQUFPO3dDQUFDOzs7Ozs7OzhDQUN0Qyw4REFBQ29CO29DQUFFRixXQUFVOzhDQUFlTCxFQUFFWixXQUFXOzs7Ozs7OENBQ3pDLDhEQUFDbUI7b0NBQUVGLFdBQVU7O3dDQUFjO3dDQUFXTCxFQUFFVixRQUFROzs7Ozs7OzhDQUVoRCw4REFBQ2tCO29DQUFJSCxXQUFVO29DQUFRSSxLQUFLVCxFQUFFWCxPQUFPOzs7Ozs7OENBQ3JDLDhEQUFDcUI7Ozs7OzhDQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7a0NBR0wsOERBQUNDO3dCQUFPTixXQUFVO2tDQUFZOzs7Ozs7Ozs7Ozs7OztBQUl0QztHQTFEU3RCO0tBQUFBO0FBNERULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jYXJ0LmpzP2ZkYjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXN0b3JlLmNvbS9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L05hdlwiO1xuXG5mdW5jdGlvbiBDYXJ0UGFnZSgpIHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBwcm9kdWN0Q29kZXMgPSBbXG4gICAgeyBwcm9kdWN0OiBcIlQtc2hpcnRcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBwcm9kdWN0OiBcIlN3ZWF0ZXJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwIH0sXG4gICAgeyBwcm9kdWN0OiBcIlNob3J0c1wiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGljdHVyZTogXCJcIiwgcXVhbnRpdHk6IDAgfSxcbiAgXTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0gbG9jYWxTdG9yYWdlIGFjdGlvblxuICAgIGxldCBKU09OaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIik7XG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShKU09OaXRlbXMpO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcblxuICAgIGl0ZW1zLmZvckVhY2goKGMpID0+IHtcbiAgICAgIGlmIChjLnRpdGxlID09IFwiVC1TaGlydFwiKSB7XG4gICAgICAgIHByb2R1Y3RDb2Rlc1swXS5xdWFudGl0eSArPSAxO1xuICAgICAgICBwcm9kdWN0Q29kZXNbMF0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucGljdHVyZSA9IGMucGljdHVyZTtcbiAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcIlN3ZWF0ZXJcIikge1xuICAgICAgICBwcm9kdWN0Q29kZXNbMV0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgcHJvZHVjdENvZGVzWzFdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvZHVjdENvZGVzWzFdLnBpY3R1cmUgPSBjLnBpY3R1cmU7XG4gICAgICB9IGVsc2UgaWYgKGMudGl0bGUgPT0gXCJTaG9ydHNcIikge1xuICAgICAgICBwcm9kdWN0Q29kZXNbMl0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgcHJvZHVjdENvZGVzWzJdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvZHVjdENvZGVzWzJdLnBpY3R1cmUgPSBjLnBpY3R1cmU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgbmV3UHJvZHVjdHMgPSBwcm9kdWN0Q29kZXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgaWYgKGMucXVhbnRpdHkgPT0gMCkge1xuICAgICAgICBkZWxldGUgcHJvZHVjdENvZGVzW2NdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldENhcnQobmV3UHJvZHVjdHMpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coY2FydCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NhcnQubWFwKChjKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZWNhcmRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbWFnZXRpdGxlXCI+e2MucHJvZHVjdH0gPC9oNT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2MuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5RdWFudGl0eToge2MucXVhbnRpdHl9PC9wPlxuXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtjLnBpY3R1cmV9PjwvaW1nPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+IENoZWNrb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXYiLCJDYXJ0UGFnZSIsImNhcnQiLCJzZXRDYXJ0IiwicHJvZHVjdENvZGVzIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsInF1YW50aXR5IiwiSlNPTml0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJjIiwidGl0bGUiLCJuZXdQcm9kdWN0cyIsImRpdiIsIm1hcCIsImNsYXNzTmFtZSIsImg1IiwicCIsImltZyIsInNyYyIsImJyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});