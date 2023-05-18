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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [checkout, setCheckout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        }\n    ];\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        if (items !== null) {\n            items.forEach((c)=>{\n                let priceInt = parseInt(c.price);\n                if (c.title == \"T-Shirt\") {\n                    productCodes[0].quantity += 1;\n                    productCodes[0].description = c.description;\n                    productCodes[0].price += priceInt; //Error right here\n                } else if (c.title == \"Sweater\") {\n                    productCodes[1].quantity += 1;\n                    productCodes[1].description = c.description;\n                    productCodes[1].price += priceInt;\n                } else if (c.title == \"Shorts\") {\n                    productCodes[2].quantity += 1;\n                    productCodes[2].description = c.description;\n                    productCodes[2].price += priceInt;\n                }\n            });\n        }\n        setCart(productCodes);\n    }, []);\n    console.log(cart);\n    const checkoutTerm = async ()=>{\n        setCheckout(JSON.stringify(cart));\n        console.log(\"checkout\");\n        fetch(\"http://localhost:8080/orderAdd\", {\n            method: \"POST\",\n            body: checkout\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    cart.map((c)=>c.quantity > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"imagecard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"imagetitle\",\n                                    children: [\n                                        c.product,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: c.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Quantity: \",\n                                        c.quantity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Total Price: \",\n                                        formatter.format(c.price)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)),\n                    \";\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"description\",\n                        onClick: checkoutTerm,\n                        children: [\n                            \" \",\n                            \"Checkout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"mvoIWFzpCG3QouVu02ocozDsiBc=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWIsS0FBSzs7Ozs7Ozs4Q0FFeEMsOERBQUM4Qjs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs7Ozs7O2lEQUdILDhEQUFDTjs7OztnQ0FDRjtvQkFDRDtrQ0FFRiw4REFBQ087d0JBQU9MLFdBQVU7d0JBQWNNLFNBQVNiOzs0QkFDdEM7NEJBQUk7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBbkZTN0I7S0FBQUE7QUFxRlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhcnQuanM/ZmRiOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc3RvcmUuY29tL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXYvTmF2XCI7XG5cbmZ1bmN0aW9uIENhcnRQYWdlKCkge1xuICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjaGVja291dCwgc2V0Q2hlY2tvdXRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHByb2R1Y3RDb2RlcyA9IFtcbiAgICB7IHByb2R1Y3Q6IFwiVC1zaGlydFwiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGljdHVyZTogXCJcIiwgcXVhbnRpdHk6IDAsIHByaWNlOiAwIH0sXG4gICAgeyBwcm9kdWN0OiBcIlN3ZWF0ZXJcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9LFxuICAgIHsgcHJvZHVjdDogXCJTaG9ydHNcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9LFxuICBdO1xuXG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIHtcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuICAgIC8vIFRoZXNlIG9wdGlvbnMgYXJlIG5lZWRlZCB0byByb3VuZCB0byB3aG9sZSBudW1iZXJzIGlmIHRoYXQncyB3aGF0IHlvdSB3YW50LlxuICAgIC8vbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwLCAvLyAodGhpcyBzdWZmaWNlcyBmb3Igd2hvbGUgbnVtYmVycywgYnV0IHdpbGwgcHJpbnQgMjUwMC4xMCBhcyAkMiw1MDAuMSlcbiAgICAvL21heGltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gKGNhdXNlcyAyNTAwLjk5IHRvIGJlIHByaW50ZWQgYXMgJDIsNTAxKVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0gbG9jYWxTdG9yYWdlIGFjdGlvblxuICAgIGxldCBKU09OaXRlbXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIik7XG4gICAgbGV0IGl0ZW1zID0gSlNPTi5wYXJzZShKU09OaXRlbXMpO1xuXG4gICAgaWYgKGl0ZW1zICE9PSBudWxsKSB7XG4gICAgICBpdGVtcy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGxldCBwcmljZUludCA9IHBhcnNlSW50KGMucHJpY2UpO1xuICAgICAgICBpZiAoYy50aXRsZSA9PSBcIlQtU2hpcnRcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1swXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1swXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzBdLnByaWNlICs9IHByaWNlSW50OyAvL0Vycm9yIHJpZ2h0IGhlcmVcbiAgICAgICAgfSBlbHNlIGlmIChjLnRpdGxlID09IFwiU3dlYXRlclwiKSB7XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzFdLnF1YW50aXR5ICs9IDE7XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzFdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMV0ucHJpY2UgKz0gcHJpY2VJbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcIlNob3J0c1wiKSB7XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzJdLnF1YW50aXR5ICs9IDE7XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzJdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMl0ucHJpY2UgKz0gcHJpY2VJbnQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRDYXJ0KHByb2R1Y3RDb2Rlcyk7XG4gIH0sIFtdKTtcblxuICBjb25zb2xlLmxvZyhjYXJ0KTtcblxuICBjb25zdCBjaGVja291dFRlcm0gPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0Q2hlY2tvdXQoSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tvdXRcIik7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvb3JkZXJBZGRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IGNoZWNrb3V0LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXJ0Lm1hcCgoYykgPT5cbiAgICAgICAgICBjLnF1YW50aXR5ID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbWFnZXRpdGxlXCI+e2MucHJvZHVjdH0gPC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydERlc2NyaXB0aW9uXCI+e2MuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj5RdWFudGl0eToge2MucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBUb3RhbCBQcmljZToge2Zvcm1hdHRlci5mb3JtYXQoYy5wcmljZSl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICA7XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNsaWNrPXtjaGVja291dFRlcm19PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdiIsIkNhcnRQYWdlIiwiY2FydCIsInNldENhcnQiLCJjaGVja291dCIsInNldENoZWNrb3V0IiwicHJvZHVjdENvZGVzIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsInF1YW50aXR5IiwicHJpY2UiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIkpTT05pdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsIkpTT04iLCJwYXJzZSIsImZvckVhY2giLCJjIiwicHJpY2VJbnQiLCJwYXJzZUludCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImNoZWNrb3V0VGVybSIsInN0cmluZ2lmeSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImRpdiIsIm1hcCIsImNsYXNzTmFtZSIsImg1IiwicCIsImZvcm1hdCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});