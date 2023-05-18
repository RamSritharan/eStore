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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n// estore.com/\n\nvar _s = $RefreshSig$();\n\n\nfunction CartPage() {\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [checkout, setCheckout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const productCodes = [\n        {\n            product: \"T-shirt\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Sweater\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        },\n        {\n            product: \"Shorts\",\n            description: \"\",\n            picture: \"\",\n            quantity: 0,\n            price: 0\n        }\n    ];\n    const formatter = new Intl.NumberFormat(\"en-US\", {\n        style: \"currency\",\n        currency: \"USD\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Perform localStorage action\n        let JSONitems = localStorage.getItem(\"cart\");\n        let items = JSON.parse(JSONitems);\n        console.log(\"Da items in the cart\", items);\n        if (items !== null) {\n            items.forEach((c)=>{\n                let priceInt = parseInt(c.price);\n                if (c.title == \"T-Shirt\") {\n                    productCodes[0].quantity += 1;\n                    productCodes[0].description = c.description;\n                    productCodes[0].price += priceInt; //Error right here\n                } else if (c.title == \"Sweater\") {\n                    productCodes[1].quantity += 1;\n                    productCodes[1].description = c.description;\n                    productCodes[1].price += priceInt;\n                } else if (c.title == \"Shorts\") {\n                    productCodes[2].quantity += 1;\n                    productCodes[2].description = c.description;\n                    productCodes[2].price += priceInt;\n                }\n            });\n        }\n        setCart(productCodes);\n    }, []);\n    console.log(cart);\n    const checkoutTerm = async ()=>{\n        setCheckout(JSON.stringify(cart));\n        fetch(\"/orderAdd\", {\n            method: \"POST\",\n            body: checkout\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    cart.map((c)=>c.quantity > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"imagecard\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"imagetitle\",\n                                    children: [\n                                        c.product,\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: c.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Quantity: \",\n                                        c.quantity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cartDescription\",\n                                    children: [\n                                        \"Total Price: \",\n                                        formatter.format(c.price)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this)),\n                    \";\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"description\",\n                        onClick: checkoutTerm,\n                        children: [\n                            \" \",\n                            \"Checkout\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/cart.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CartPage, \"mvoIWFzpCG3QouVu02ocozDsiBc=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDZCxFQUFFZixLQUFLOzs7Ozs7OzhDQUV4Qyw4REFBQzhCOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7Ozs7Ozs7aURBR0gsOERBQUNOOzs7O2dDQUNGO29CQUNEO2tDQUVGLDhEQUFDTzt3QkFBT0wsV0FBVTt3QkFBY00sU0FBU2I7OzRCQUN0Qzs0QkFBSTs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0FuRlM3QjtLQUFBQTtBQXFGVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2FydC5qcz9mZGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzdG9yZS5jb20vXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdi9OYXZcIjtcblxuZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XG4gIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NoZWNrb3V0LCBzZXRDaGVja291dF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgcHJvZHVjdENvZGVzID0gW1xuICAgIHsgcHJvZHVjdDogXCJULXNoaXJ0XCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBwaWN0dXJlOiBcIlwiLCBxdWFudGl0eTogMCwgcHJpY2U6IDAgfSxcbiAgICB7IHByb2R1Y3Q6IFwiU3dlYXRlclwiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGljdHVyZTogXCJcIiwgcXVhbnRpdHk6IDAsIHByaWNlOiAwIH0sXG4gICAgeyBwcm9kdWN0OiBcIlNob3J0c1wiLCBkZXNjcmlwdGlvbjogXCJcIiwgcGljdHVyZTogXCJcIiwgcXVhbnRpdHk6IDAsIHByaWNlOiAwIH0sXG4gIF07XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXG4gICAgLy8gVGhlc2Ugb3B0aW9ucyBhcmUgbmVlZGVkIHRvIHJvdW5kIHRvIHdob2xlIG51bWJlcnMgaWYgdGhhdCdzIHdoYXQgeW91IHdhbnQuXG4gICAgLy9taW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAsIC8vICh0aGlzIHN1ZmZpY2VzIGZvciB3aG9sZSBudW1iZXJzLCBidXQgd2lsbCBwcmludCAyNTAwLjEwIGFzICQyLDUwMC4xKVxuICAgIC8vbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAwLCAvLyAoY2F1c2VzIDI1MDAuOTkgdG8gYmUgcHJpbnRlZCBhcyAkMiw1MDEpXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUGVyZm9ybSBsb2NhbFN0b3JhZ2UgYWN0aW9uXG4gICAgbGV0IEpTT05pdGVtcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKTtcbiAgICBsZXQgaXRlbXMgPSBKU09OLnBhcnNlKEpTT05pdGVtcyk7XG4gICAgY29uc29sZS5sb2coXCJEYSBpdGVtcyBpbiB0aGUgY2FydFwiLCBpdGVtcyk7XG5cbiAgICBpZiAoaXRlbXMgIT09IG51bGwpIHtcbiAgICAgIGl0ZW1zLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgbGV0IHByaWNlSW50ID0gcGFyc2VJbnQoYy5wcmljZSk7XG4gICAgICAgIGlmIChjLnRpdGxlID09IFwiVC1TaGlydFwiKSB7XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzBdLnF1YW50aXR5ICs9IDE7XG4gICAgICAgICAgcHJvZHVjdENvZGVzWzBdLmRlc2NyaXB0aW9uID0gYy5kZXNjcmlwdGlvbjtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMF0ucHJpY2UgKz0gcHJpY2VJbnQ7IC8vRXJyb3IgcmlnaHQgaGVyZVxuICAgICAgICB9IGVsc2UgaWYgKGMudGl0bGUgPT0gXCJTd2VhdGVyXCIpIHtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMV0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMV0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1sxXS5wcmljZSArPSBwcmljZUludDtcbiAgICAgICAgfSBlbHNlIGlmIChjLnRpdGxlID09IFwiU2hvcnRzXCIpIHtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMl0ucXVhbnRpdHkgKz0gMTtcbiAgICAgICAgICBwcm9kdWN0Q29kZXNbMl0uZGVzY3JpcHRpb24gPSBjLmRlc2NyaXB0aW9uO1xuICAgICAgICAgIHByb2R1Y3RDb2Rlc1syXS5wcmljZSArPSBwcmljZUludDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHNldENhcnQocHJvZHVjdENvZGVzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKGNhcnQpO1xuXG4gIGNvbnN0IGNoZWNrb3V0VGVybSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRDaGVja291dChKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgZmV0Y2goXCIvb3JkZXJBZGRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IGNoZWNrb3V0LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjYXJ0Lm1hcCgoYykgPT5cbiAgICAgICAgICBjLnF1YW50aXR5ID4gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJpbWFnZXRpdGxlXCI+e2MucHJvZHVjdH0gPC9oNT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydERlc2NyaXB0aW9uXCI+e2MuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj5RdWFudGl0eToge2MucXVhbnRpdHl9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICBUb3RhbCBQcmljZToge2Zvcm1hdHRlci5mb3JtYXQoYy5wcmljZSl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICA7XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBvbkNsaWNrPXtjaGVja291dFRlcm19PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdiIsIkNhcnRQYWdlIiwiY2FydCIsInNldENhcnQiLCJjaGVja291dCIsInNldENoZWNrb3V0IiwicHJvZHVjdENvZGVzIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsInF1YW50aXR5IiwicHJpY2UiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIkpTT05pdGVtcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiYyIsInByaWNlSW50IiwicGFyc2VJbnQiLCJ0aXRsZSIsImNoZWNrb3V0VGVybSIsInN0cmluZ2lmeSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImRpdiIsIm1hcCIsImNsYXNzTmFtZSIsImg1IiwicCIsImZvcm1hdCIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/cart.js\n"));

/***/ })

});