"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[productId]",{

/***/ "./src/pages/[productId].js":
/*!**********************************!*\
  !*** ./src/pages/[productId].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav/Nav */ \"./src/components/Nav/Nav.jsx\");\n/* harmony import */ var _components_bottomBar_bottomBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/bottomBar/bottomBar */ \"./src/components/bottomBar/bottomBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DetailPage(props) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        title: \"\",\n        description: \"\",\n        price: \"\",\n        picture: \"\"\n    });\n    const addtoCart = async ()=>{\n        cart.push(product);\n        let jsonCart = JSON.stringify(cart);\n        localStorage.setItem(\"cart\", jsonCart);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"detailPage\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: router.query.title\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: router.query.picture,\n                        className: \"imagePage\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \" $\",\n                            router.query.price,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: router.query.description\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>{\n                            setProduct({\n                                title: router.query.title,\n                                description: router.query.description,\n                                price: router.query.price,\n                                picture: router.query.picture\n                            }), addtoCart();\n                        },\n                        children: [\n                            \" \",\n                            \"Add to Cart\",\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bottomBar_bottomBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/pages/[productId].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(DetailPage, \"5GNZfvPty3PiMKJpu3msHkDoDDc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3Byb2R1Y3RJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUNrQjtBQUN6QjtBQUVqQyxTQUFTSSxXQUFXQyxLQUFLLEVBQUU7O0lBQ3pCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUV4QixNQUFNLENBQUNPLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7UUFDckNNLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLFlBQVksVUFBWTtRQUM1QkMsS0FBS0MsSUFBSSxDQUFDUjtRQUNWLElBQUlTLFdBQVdDLEtBQUtDLFNBQVMsQ0FBQ0o7UUFDOUJLLGFBQWFDLE9BQU8sQ0FBQyxRQUFRSjtJQUMvQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2YsMkRBQUdBOzs7OzswQkFDSiw4REFBQ29CO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7a0NBQUlqQixPQUFPa0IsS0FBSyxDQUFDZixLQUFLOzs7Ozs7a0NBQ3ZCLDhEQUFDZ0I7d0JBQUlDLEtBQUtwQixPQUFPa0IsS0FBSyxDQUFDWixPQUFPO3dCQUFFVSxXQUFVOzs7Ozs7a0NBQzFDLDhEQUFDSzs7NEJBQUc7NEJBQUdyQixPQUFPa0IsS0FBSyxDQUFDYixLQUFLOzRCQUFDOzs7Ozs7O2tDQUMxQiw4REFBQ2lCO2tDQUFHdEIsT0FBT2tCLEtBQUssQ0FBQ2QsV0FBVzs7Ozs7O2tDQUM1Qiw4REFBQ21CO3dCQUNDQyxTQUFTLElBQU07NEJBQ2J0QixXQUFXO2dDQUNUQyxPQUFPSCxPQUFPa0IsS0FBSyxDQUFDZixLQUFLO2dDQUN6QkMsYUFBYUosT0FBT2tCLEtBQUssQ0FBQ2QsV0FBVztnQ0FDckNDLE9BQU9MLE9BQU9rQixLQUFLLENBQUNiLEtBQUs7Z0NBQ3pCQyxTQUFTTixPQUFPa0IsS0FBSyxDQUFDWixPQUFPOzRCQUMvQixJQUNFQyxXQUFXO3dCQUNmOzs0QkFFQzs0QkFBSTs0QkFDTzs7Ozs7OztrQ0FFZCw4REFBQ2tCOzs7OztrQ0FDRCw4REFBQ0E7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBQ0QsOERBQUNBOzs7OztrQ0FDRCw4REFBQ0E7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBQ0QsOERBQUNBOzs7Ozs7Ozs7OzswQkFFSCw4REFBQzdCLHVFQUFTQTs7Ozs7OztBQUdoQjtHQWpEU0U7O1FBQ1FKLGtEQUFTQTs7O0tBRGpCSTtBQW1EVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3Byb2R1Y3RJZF0uanM/ODg1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2L05hdlwiO1xuaW1wb3J0IEJvdHRvbUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9ib3R0b21CYXIvYm90dG9tQmFyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBEZXRhaWxQYWdlKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBwcmljZTogXCJcIixcbiAgICBwaWN0dXJlOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBhZGR0b0NhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY2FydC5wdXNoKHByb2R1Y3QpO1xuICAgIGxldCBqc29uQ2FydCA9IEpTT04uc3RyaW5naWZ5KGNhcnQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBqc29uQ2FydCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxQYWdlXCI+XG4gICAgICAgIDxoMT57cm91dGVyLnF1ZXJ5LnRpdGxlfTwvaDE+XG4gICAgICAgIDxpbWcgc3JjPXtyb3V0ZXIucXVlcnkucGljdHVyZX0gY2xhc3NOYW1lPVwiaW1hZ2VQYWdlXCI+PC9pbWc+XG4gICAgICAgIDxoMj4gJHtyb3V0ZXIucXVlcnkucHJpY2V9IDwvaDI+XG4gICAgICAgIDxwPntyb3V0ZXIucXVlcnkuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvZHVjdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiByb3V0ZXIucXVlcnkudGl0bGUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByb3V0ZXIucXVlcnkuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIHByaWNlOiByb3V0ZXIucXVlcnkucHJpY2UsXG4gICAgICAgICAgICAgIHBpY3R1cmU6IHJvdXRlci5xdWVyeS5waWN0dXJlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGFkZHRvQ2FydCgpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgQWRkIHRvIENhcnR7XCIgXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJvdHRvbUJhciAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIk5hdiIsIkJvdHRvbUJhciIsInVzZVN0YXRlIiwiRGV0YWlsUGFnZSIsInByb3BzIiwicm91dGVyIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwaWN0dXJlIiwiYWRkdG9DYXJ0IiwiY2FydCIsInB1c2giLCJqc29uQ2FydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJxdWVyeSIsImltZyIsInNyYyIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[productId].js\n"));

/***/ })

});