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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [checkout, setCheckout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        }\n    ];\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        if (items !== null) {\n            items.forEach((c)=>{\n                let priceInt = parseInt(c.price);\n                if (c.title == \"T-Shirt\") {\n                    productCodes[0].quantity += 1;\n                    productCodes[0].description = c.description;\n                    productCodes[0].price += priceInt; //Error right here\n                } else if (c.title == \"Sweater\") {\n                    productCodes[1].quantity += 1;\n                    productCodes[1].description = c.description;\n                    productCodes[1].price += priceInt;\n                } else if (c.title == \"Shorts\") {\n                    productCodes[2].quantity += 1;\n                    productCodes[2].description = c.description;\n                    productCodes[2].price += priceInt;\n                }\n            });\n        }\n        setCart(productCodes);\n    }, []);\n    let checkoutTerm = async (e)=>{\n        e.preventDefault();\n        let jsonCheckout = JSON.stringify(cart); //Cart works\n        console.log(\"vinotttth\", typeof jsonCheckout);\n        let fetchResponse = await fetch(\"http://localhost:8080/orderAdd\", {\n            method: \"POST\",\n            mode: \"no-cors\",\n            credentials: \"same-origin\",\n            headers: {\n                \"Content-Type\": \"text/plain\",\n                \"Access-Control-Allow-Methods\": \"GET, PUT, POST, DELETE, HEAD, OPTIONS\"\n            },\n            body: jsonCheckout\n        });\n        console.log(fetchResponse);\n    // let checkoutResponse = await fetchResponse.json(); // <-- decode fetch response\n    // console.log(\"STATUS\", checkoutResponse);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    cart.map((c)=>c.quantity > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"imagecard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"imagetitle\",\n                                    children: [\n                                        c.product,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: c.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Quantity: \",\n                                        c.quantity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Total Price: \",\n                                        formatter.format(c.price)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)),\n                    \";\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"description\",\n                        onClick: checkoutTerm,\n                        children: [\n                            \" \",\n                            \"Checkout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"mvoIWFzpCG3QouVu02ocozDsiBc=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage); // let jwt = localStorage.getItem(\"token\");\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRixXQUFVOzhDQUFtQnBCLEVBQUVoQixXQUFXOzs7Ozs7OENBQzdDLDhEQUFDc0M7b0NBQUVGLFdBQVU7O3dDQUFrQjt3Q0FBV3BCLEVBQUVkLFFBQVE7Ozs7Ozs7OENBQ3BELDhEQUFDb0M7b0NBQUVGLFdBQVU7O3dDQUFrQjt3Q0FDZmhDLFVBQVVtQyxNQUFNLENBQUN2QixFQUFFYixLQUFLOzs7Ozs7OzhDQUV4Qyw4REFBQ3FDOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7Ozs7Ozs7aURBR0gsOERBQUNOOzs7O2dDQUNGO29CQUNEO2tDQUVGLDhEQUFDTzt3QkFBT0wsV0FBVTt3QkFBY00sU0FBU3RCOzs0QkFDdEM7NEJBQUk7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBN0ZTM0I7S0FBQUE7QUErRlQsK0RBQWVBLFFBQVFBLEVBQUMsQ0FFeEIsMkNBQTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jYXJ0LmpzP2ZkYjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXN0b3JlLmNvbS9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L05hdlwiO1xuXG5mdW5jdGlvbiBDYXJ0UGFnZSgpIHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY2hlY2tvdXQsIHNldENoZWNrb3V0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBwcm9kdWN0Q29kZXMgPSBbXG4gICAgeyBwcm9kdWN0OiBcIlQtc2hpcnRcIiwgZGVzY3JpcHRpb246IFwiXCIsIHBpY3R1cmU6IFwiXCIsIHF1YW50aXR5OiAwLCBwcmljZTogMCB9LFxuICAgIHsgcHJvZHVjdDogXCJTd2VhdGVyXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgICB7IHByb2R1Y3Q6IFwiU2hvcnRzXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgXTtcblxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICAvLyBUaGVzZSBvcHRpb25zIGFyZSBuZWVkZWQgdG8gcm91bmQgdG8gd2hvbGUgbnVtYmVycyBpZiB0aGF0J3Mgd2hhdCB5b3Ugd2FudC5cbiAgICAvL21pbmltdW1GcmFjdGlvbkRpZ2l0czogMCwgLy8gKHRoaXMgc3VmZmljZXMgZm9yIHdob2xlIG51bWJlcnMsIGJ1dCB3aWxsIHByaW50IDI1MDAuMTAgYXMgJDIsNTAwLjEpXG4gICAgLy9tYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vIChjYXVzZXMgMjUwMC45OSB0byBiZSBwcmludGVkIGFzICQyLDUwMSlcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBQZXJmb3JtIGxvY2FsU3RvcmFnZSBhY3Rpb25cbiAgICBsZXQgSlNPTml0ZW1zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpO1xuICAgIGxldCBpdGVtcyA9IEpTT04ucGFyc2UoSlNPTml0ZW1zKTtcblxuICAgIGlmIChpdGVtcyAhPT0gbnVsbCkge1xuICAgICAgaXRlbXMuZm9yRWFjaCgoYykgPT4ge1xuICAgICAgICBsZXQgcHJpY2VJbnQgPSBwYXJzZUludChjLnByaWNlKTtcbiAgICAgICAgaWYgKGMudGl0bGUgPT0gXCJULVNoaXJ0XCIpIHtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1swXS5wcmljZSArPSBwcmljZUludDsgLy9FcnJvciByaWdodCBoZXJlXG4gICAgICAgIH0gZWxzZSBpZiAoYy50aXRsZSA9PSBcIlN3ZWF0ZXJcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzFdLnByaWNlICs9IHByaWNlSW50O1xuICAgICAgICB9IGVsc2UgaWYgKGMudGl0bGUgPT0gXCJTaG9ydHNcIikge1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5xdWFudGl0eSArPSAxO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5kZXNjcmlwdGlvbiA9IGMuZGVzY3JpcHRpb247XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzJdLnByaWNlICs9IHByaWNlSW50O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0Q2FydChwcm9kdWN0Q29kZXMpO1xuICB9LCBbXSk7XG5cbiAgbGV0IGNoZWNrb3V0VGVybSA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBqc29uQ2hlY2tvdXQgPSBKU09OLnN0cmluZ2lmeShjYXJ0KTsgLy9DYXJ0IHdvcmtzXG4gICAgY29uc29sZS5sb2coXCJ2aW5vdHR0dGhcIiwgdHlwZW9mIGpzb25DaGVja291dCk7XG4gICAgbGV0IGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9vcmRlckFkZFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgbW9kZTogXCJuby1jb3JzXCIsXG4gICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvcGxhaW5cIixcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiR0VULCBQVVQsIFBPU1QsIERFTEVURSwgSEVBRCwgT1BUSU9OU1wiLFxuICAgICAgICAvLyAvLyBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcbiAgICAgICAgLy8gXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCI6IFwiT3JpZ2luXCIsXG4gICAgICB9LFxuICAgICAgYm9keToganNvbkNoZWNrb3V0LFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGZldGNoUmVzcG9uc2UpO1xuICAgIC8vIGxldCBjaGVja291dFJlc3BvbnNlID0gYXdhaXQgZmV0Y2hSZXNwb25zZS5qc29uKCk7IC8vIDwtLSBkZWNvZGUgZmV0Y2ggcmVzcG9uc2VcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNUQVRVU1wiLCBjaGVja291dFJlc3BvbnNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2IC8+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y2FydC5tYXAoKGMpID0+XG4gICAgICAgICAgYy5xdWFudGl0eSA+IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlY2FyZFwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaW1hZ2V0aXRsZVwiPntjLnByb2R1Y3R9IDwvaDU+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnREZXNjcmlwdGlvblwiPntjLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydERlc2NyaXB0aW9uXCI+UXVhbnRpdHk6IHtjLnF1YW50aXR5fTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydERlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgVG90YWwgUHJpY2U6IHtmb3JtYXR0ZXIuZm9ybWF0KGMucHJpY2UpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgO1xuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgb25DbGljaz17Y2hlY2tvdXRUZXJtfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XG5cbi8vIGxldCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2IiwiQ2FydFBhZ2UiLCJjYXJ0Iiwic2V0Q2FydCIsImNoZWNrb3V0Iiwic2V0Q2hlY2tvdXQiLCJwcm9kdWN0Q29kZXMiLCJwcm9kdWN0IiwiZGVzY3JpcHRpb24iLCJwaWN0dXJlIiwicXVhbnRpdHkiLCJwcmljZSIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiSlNPTml0ZW1zIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIml0ZW1zIiwiSlNPTiIsInBhcnNlIiwiZm9yRWFjaCIsImMiLCJwcmljZUludCIsInBhcnNlSW50IiwidGl0bGUiLCJjaGVja291dFRlcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJqc29uQ2hlY2tvdXQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hSZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJkaXYiLCJtYXAiLCJjbGFzc05hbWUiLCJoNSIsInAiLCJmb3JtYXQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});