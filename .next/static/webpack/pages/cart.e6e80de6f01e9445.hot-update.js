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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [checkout, setCheckout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        }\n    ];\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        if (items !== null) {\n            items.forEach((c)=>{\n                let priceInt = parseInt(c.price);\n                if (c.title == \"T-Shirt\") {\n                    productCodes[0].quantity += 1;\n                    productCodes[0].description = c.description;\n                    productCodes[0].price += priceInt; //Error right here\n                } else if (c.title == \"Sweater\") {\n                    productCodes[1].quantity += 1;\n                    productCodes[1].description = c.description;\n                    productCodes[1].price += priceInt;\n                } else if (c.title == \"Shorts\") {\n                    productCodes[2].quantity += 1;\n                    productCodes[2].description = c.description;\n                    productCodes[2].price += priceInt;\n                }\n            });\n        }\n        setCart(productCodes);\n    }, []);\n    console.log(cart);\n    const checkoutTerm = async (e)=>{\n        e.preventDefault();\n        let jwt = localStorage.getItem(\"token\");\n        setCheckout(JSON.stringify(cart));\n        fetch(\"http://localhost:8080/orderAdd\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"multipart/form-data\"\n            },\n            body: checkout\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    cart.map((c)=>c.quantity > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"imagecard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"imagetitle\",\n                                    children: [\n                                        c.product,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: c.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Quantity: \",\n                                        c.quantity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Total Price: \",\n                                        formatter.format(c.price)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)),\n                    \";\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"description\",\n                        onClick: checkoutTerm,\n                        children: [\n                            \" \",\n                            \"Checkout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"mvoIWFzpCG3QouVu02ocozDsiBc=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzhDQUNwRCw4REFBQ2lDO29DQUFFRixXQUFVOzt3Q0FBa0I7d0NBQ2Y3QixVQUFVZ0MsTUFBTSxDQUFDcEIsRUFBRWIsS0FBSzs7Ozs7Ozs4Q0FFeEMsOERBQUNrQzs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs7Ozs7O2lEQUdILDhEQUFDTjs7OztnQ0FDRjtvQkFDRDtrQ0FFRiw4REFBQ087d0JBQU9MLFdBQVU7d0JBQWNNLFNBQVNqQjs7NEJBQ3RDOzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXhGUzdCO0tBQUFBO0FBMEZULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jYXJ0LmpzP2ZkYjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXN0b3JlLmNvbS9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L05hdlwiO1xuXG5mdW5jdGlvbiBDYXJ0UGFnZSgpIHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2hlY2tvdXQsIHNldENoZWNrb3V0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcm9kdWN0Q29kZXMgPSBbXG4gICAgeyBwcm9kdWN0OiBcIlQtc2hpcnRcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9LFxuICAgIHsgcHJvZHVjdDogXCJTd2VhdGVyXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgICB7IHByb2R1Y3Q6IFwiU2hvcnRzXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgXTtcblxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICAvLyBUaGVzZSBvcHRpb25zIGFyZSBuZWVkZWQgdG8gcm91bmQgdG8gd2hvbGUgbnVtYmVycyBpZiB0aGF0J3Mgd2hhdCB5b3Ugd2FudC5cbiAgICAvL21pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gKHRoaXMgc3VmZmljZXMgZm9yIHdob2xlIG51bWJlcnMsIGJ1dCB3aWxsIHByaW50IDI1MDAuMTAgYXMgJDIsNTAwLjEpXG4gICAgLy9tYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vIChjYXVzZXMgMjUwMC45OSB0byBiZSBwcmludGVkIGFzICQyLDUwMSlcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQZXJmb3JtIGxvY2FsU3RvcmFnZSBhY3Rpb25cbiAgICBsZXQgSlNPTml0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpO1xuICAgIGxldCBpdGVtcyA9IEpTT04ucGFyc2UoSlNPTml0ZW1zKTtcblxuICAgIGlmIChpdGVtcyAhPT0gbnVsbCkge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBsZXQgcHJpY2VJbnQgPSBwYXJzZUludChjLnByaWNlKTtcbiAgICAgICAgaWYgKGMudGl0bGUgPT0gXCJULVNoaXJ0XCIpIHtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1swXS5wcmljZSArPSBwcmljZUludDsgLy9FcnJvciByaWdodCBoZXJlXG4gICAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcIlN3ZWF0ZXJcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzFdLnByaWNlICs9IHByaWNlSW50O1xuICAgICAgICB9IGVsc2UgaWYgKGMudGl0bGUgPT0gXCJTaG9ydHNcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzJdLnByaWNlICs9IHByaWNlSW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0Q2FydChwcm9kdWN0Q29kZXMpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coY2FydCk7XG5cbiAgY29uc3QgY2hlY2tvdXRUZXJtID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgICBzZXRDaGVja291dChKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvb3JkZXJBZGRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogY2hlY2tvdXQsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NhcnQubWFwKChjKSA9PlxuICAgICAgICAgIGMucXVhbnRpdHkgPiAwID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZWNhcmRcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImltYWdldGl0bGVcIj57Yy5wcm9kdWN0fSA8L2g1PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj57Yy5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnREZXNjcmlwdGlvblwiPlF1YW50aXR5OiB7Yy5xdWFudGl0eX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnREZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIFRvdGFsIFByaWNlOiB7Zm9ybWF0dGVyLmZvcm1hdChjLnByaWNlKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICAgIDtcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIG9uQ2xpY2s9e2NoZWNrb3V0VGVybX0+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIENoZWNrb3V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2IiwiQ2FydFBhZ2UiLCJjYXJ0Iiwic2V0Q2FydCIsImNoZWNrb3V0Iiwic2V0Q2hlY2tvdXQiLCJwcm9kdWN0Q29kZXMiLCJwcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJwaWN0dXJlIiwicXVhbnRpdHkiLCJwcmljZSIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiSlNPTml0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwiZm9yRWFjaCIsImMiLCJwcmljZUludCIsInBhcnNlSW50IiwidGl0bGUiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tvdXRUZXJtIiwiZSIsInByZXZlbnREZWZhdWx0Iiwiand0Iiwic3RyaW5naWZ5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImRpdiIsIm1hcCIsImNsYXNzTmFtZSIsImg1IiwicCIsImZvcm1hdCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});