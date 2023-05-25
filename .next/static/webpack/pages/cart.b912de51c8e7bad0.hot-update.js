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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        }\n    ];\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        if (items !== null) {\n            items.forEach((c)=>{\n                let priceInt = parseInt(c.price);\n                if (c.title == \"T-Shirt\") {\n                    productCodes[0].quantity += 1;\n                    productCodes[0].description = c.description;\n                    productCodes[0].price += priceInt; //Error right here\n                } else if (c.title == \"Sweater\") {\n                    productCodes[1].quantity += 1;\n                    productCodes[1].description = c.description;\n                    productCodes[1].price += priceInt;\n                } else if (c.title == \"Shorts\") {\n                    productCodes[2].quantity += 1;\n                    productCodes[2].description = c.description;\n                    productCodes[2].price += priceInt;\n                }\n            });\n        }\n        setCart(productCodes);\n    }, []);\n    let checkoutTerm = async (e)=>{\n        productCodes.forEach = (c)=>{\n            if (c.quantity == 0) {\n                delete productCodes[c];\n            }\n        };\n        setCart(productCodes);\n        e.preventDefault();\n        let jsonCheckout = JSON.stringify(cart); //Cart works\n        let fetchResponse = await fetch(\"http://localhost:8080/orderAdd\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: jsonCheckout\n        }).then((res)=>{\n            if (res.ok) return res.json(); //why was this needed?\n            return res.json().then((json)=>Promise.reject(json));\n        }).then(({ url  })=>{\n            window.location = url;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    cart.map((c)=>c.quantity > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"imagecard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"imagetitle\",\n                                    children: [\n                                        c.product,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: c.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Quantity: \",\n                                        c.quantity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Total Price: \",\n                                        formatter.format(c.price)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 91,\n                            columnNumber: 13\n                        }, this)),\n                    \";\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"description\",\n                        onClick: checkoutTerm,\n                        children: [\n                            \" \",\n                            \"Checkout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"5+HPoxSo1E/C3go3F1eDhM/DDhE=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage); // let jwt = localStorage.getItem(\"token\");\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQywyREFBR0E7Ozs7OzBCQUNKLDhEQUFDNkM7O29CQUNFM0MsS0FBSzRDLEdBQUcsQ0FBQyxDQUFDeEIsSUFDVEEsRUFBRWQsUUFBUSxHQUFHLGtCQUNYLDhEQUFDcUM7NEJBQUlFLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs7d0NBQWN6QixFQUFFakIsT0FBTzt3Q0FBQzs7Ozs7Ozs4Q0FDdEMsOERBQUM0QztvQ0FBRUYsV0FBVTs4Q0FBbUJ6QixFQUFFaEIsV0FBVzs7Ozs7OzhDQUM3Qyw4REFBQzJDO29DQUFFRixXQUFVOzt3Q0FBa0I7d0NBQVd6QixFQUFFZCxRQUFROzs7Ozs7OzhDQUNwRCw4REFBQ3lDO29DQUFFRixXQUFVOzt3Q0FBa0I7d0NBQ2ZyQyxVQUFVd0MsTUFBTSxDQUFDNUIsRUFBRWIsS0FBSzs7Ozs7Ozs4Q0FFeEMsOERBQUMwQzs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs7Ozs7O2lEQUdILDhEQUFDTjs7OztnQ0FDRjtvQkFDRDtrQ0FFRiw4REFBQ087d0JBQU9MLFdBQVU7d0JBQWNNLFNBQVMzQjs7NEJBQ3RDOzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQWpHU3pCO0tBQUFBO0FBbUdULCtEQUFlQSxRQUFRQSxFQUFDLENBRXhCLDJDQUEyQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2FydC5qcz9mZGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzdG9yZS5jb20vXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdi9OYXZcIjtcblxuZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcm9kdWN0Q29kZXMgPSBbXG4gICAgeyBwcm9kdWN0OiBcIlQtc2hpcnRcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9LFxuICAgIHsgcHJvZHVjdDogXCJTd2VhdGVyXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgICB7IHByb2R1Y3Q6IFwiU2hvcnRzXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgXTtcblxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICAvLyBUaGVzZSBvcHRpb25zIGFyZSBuZWVkZWQgdG8gcm91bmQgdG8gd2hvbGUgbnVtYmVycyBpZiB0aGF0J3Mgd2hhdCB5b3Ugd2FudC5cbiAgICAvL21pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gKHRoaXMgc3VmZmljZXMgZm9yIHdob2xlIG51bWJlcnMsIGJ1dCB3aWxsIHByaW50IDI1MDAuMTAgYXMgJDIsNTAwLjEpXG4gICAgLy9tYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vIChjYXVzZXMgMjUwMC45OSB0byBiZSBwcmludGVkIGFzICQyLDUwMSlcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQZXJmb3JtIGxvY2FsU3RvcmFnZSBhY3Rpb25cbiAgICBsZXQgSlNPTml0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpO1xuICAgIGxldCBpdGVtcyA9IEpTT04ucGFyc2UoSlNPTml0ZW1zKTtcblxuICAgIGlmIChpdGVtcyAhPT0gbnVsbCkge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBsZXQgcHJpY2VJbnQgPSBwYXJzZUludChjLnByaWNlKTtcbiAgICAgICAgaWYgKGMudGl0bGUgPT0gXCJULVNoaXJ0XCIpIHtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1swXS5wcmljZSArPSBwcmljZUludDsgLy9FcnJvciByaWdodCBoZXJlXG4gICAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcIlN3ZWF0ZXJcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzFdLnByaWNlICs9IHByaWNlSW50O1xuICAgICAgICB9IGVsc2UgaWYgKGMudGl0bGUgPT0gXCJTaG9ydHNcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzJdLnByaWNlICs9IHByaWNlSW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0Q2FydChwcm9kdWN0Q29kZXMpO1xuICB9LCBbXSk7XG5cbiAgbGV0IGNoZWNrb3V0VGVybSA9IGFzeW5jIChlKSA9PiB7XG4gICAgcHJvZHVjdENvZGVzLmZvckVhY2ggPSAoYykgPT4ge1xuICAgICAgaWYgKGMucXVhbnRpdHkgPT0gMCkge1xuICAgICAgICBkZWxldGUgcHJvZHVjdENvZGVzW2NdO1xuICAgICAgfVxuICAgIH07XG4gICAgc2V0Q2FydChwcm9kdWN0Q29kZXMpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBqc29uQ2hlY2tvdXQgPSBKU09OLnN0cmluZ2lmeShjYXJ0KTsgLy9DYXJ0IHdvcmtzXG4gICAgbGV0IGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9vcmRlckFkZFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBqc29uQ2hlY2tvdXQsXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7IC8vd2h5IHdhcyB0aGlzIG5lZWRlZD9cbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoanNvbikgPT4gUHJvbWlzZS5yZWplY3QoanNvbikpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IHVybCB9KSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXJ0Lm1hcCgoYykgPT5cbiAgICAgICAgICBjLnF1YW50aXR5ID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbWFnZXRpdGxlXCI+e2MucHJvZHVjdH0gPC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydERlc2NyaXB0aW9uXCI+e2MuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj5RdWFudGl0eToge2MucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBUb3RhbCBQcmljZToge2Zvcm1hdHRlci5mb3JtYXQoYy5wcmljZSl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICA7XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNsaWNrPXtjaGVja291dFRlcm19PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZTtcblxuLy8gbGV0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXYiLCJDYXJ0UGFnZSIsImNhcnQiLCJzZXRDYXJ0IiwicHJvZHVjdENvZGVzIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsInF1YW50aXR5IiwicHJpY2UiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIkpTT05pdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsIkpTT04iLCJwYXJzZSIsImZvckVhY2giLCJjIiwicHJpY2VJbnQiLCJwYXJzZUludCIsInRpdGxlIiwiY2hlY2tvdXRUZXJtIiwiZSIsInByZXZlbnREZWZhdWx0IiwianNvbkNoZWNrb3V0Iiwic3RyaW5naWZ5IiwiZmV0Y2hSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiZGl2IiwibWFwIiwiY2xhc3NOYW1lIiwiaDUiLCJwIiwiZm9ybWF0IiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});