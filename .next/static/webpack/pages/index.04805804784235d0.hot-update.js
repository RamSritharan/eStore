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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nlet cart = [];\nfunction Card(props) {\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        price: \"\",\n        picture: \"\"\n    });\n    const addtoCart = async ()=>{\n        cart.push(product);\n        let jsonCart = JSON.stringify(cart);\n        localStorage.setItem(\"cart\", jsonCart);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: props.products.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imagecard\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: `/${encodeURIComponent(c.slug)}`,\n                            className: \"imagetitle\",\n                            children: [\n                                \" \",\n                                c.Product_title.S\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"description\",\n                            children: c.Product_description.S\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"description\",\n                            children: [\n                                \"$\",\n                                c.Product_price.N\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: c.Product_picture.S,\n                            className: \"image\",\n                            name: \"image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                setProduct({\n                                    title: c.Product_title.S,\n                                    description: c.Product_description.S,\n                                    price: c.Product_price.N,\n                                    picture: c.Product_picture.S\n                                }), addtoCart();\n                            },\n                            children: [\n                                \" \",\n                                \"Add to Cart\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Card, \"7wL+GfLYYvKcn6lp/Vc3a8sI+Gs=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDWDtBQUM3QixJQUFJRyxPQUFPLEVBQUU7QUFFYixTQUFTQyxLQUFLQyxLQUFLLEVBQUU7O0lBQ25CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztRQUNyQ08sT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsU0FBUztJQUNYO0lBRUEsTUFBTUMsWUFBWSxVQUFZO1FBQzVCVCxLQUFLVSxJQUFJLENBQUNQO1FBQ1YsSUFBSVEsV0FBV0MsS0FBS0MsU0FBUyxDQUFDYjtRQUM5QmMsYUFBYUMsT0FBTyxDQUFDLFFBQVFKO0lBQy9CO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNLO3NCQUNFZCxNQUFNZSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDbkIsOERBQUNIO29CQUFJSSxXQUFVOztzQ0FDYiw4REFBQ3JCLGtEQUFJQTs0QkFDSHNCLE1BQU0sQ0FBQyxDQUFDLEVBQUVDLG1CQUFtQkgsRUFBRUksSUFBSSxFQUFFLENBQUM7NEJBQ3RDSCxXQUFVOztnQ0FFVDtnQ0FDQUQsRUFBRUssYUFBYSxDQUFDQyxDQUFDOzs7Ozs7O3NDQUVwQiw4REFBQ0M7NEJBQUVOLFdBQVU7c0NBQWVELEVBQUVRLG1CQUFtQixDQUFDRixDQUFDOzs7Ozs7c0NBQ25ELDhEQUFDQzs0QkFBRU4sV0FBVTs7Z0NBQWM7Z0NBQUVELEVBQUVTLGFBQWEsQ0FBQ0MsQ0FBQzs7Ozs7OztzQ0FDOUMsOERBQUNDOzRCQUFJQyxLQUFLWixFQUFFYSxlQUFlLENBQUNQLENBQUM7NEJBQUVMLFdBQVU7NEJBQVFhLE1BQUs7Ozs7OztzQ0FDdEQsOERBQUNDOzs7OztzQ0FDRCw4REFBQ0E7Ozs7O3NDQUVELDhEQUFDQzs0QkFDQ0MsU0FBUyxJQUFNO2dDQUNiaEMsV0FBVztvQ0FDVEMsT0FBT2MsRUFBRUssYUFBYSxDQUFDQyxDQUFDO29DQUN4Qm5CLGFBQWFhLEVBQUVRLG1CQUFtQixDQUFDRixDQUFDO29DQUNwQ2xCLE9BQU9ZLEVBQUVTLGFBQWEsQ0FBQ0MsQ0FBQztvQ0FDeEJyQixTQUFTVyxFQUFFYSxlQUFlLENBQUNQLENBQUM7Z0NBQzlCLElBQ0VoQixXQUFXOzRCQUNmOztnQ0FFQztnQ0FBSTtnQ0FDTzs7Ozs7OztzQ0FFZCw4REFBQ3lCOzs7OztzQ0FDRCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0FyRFNqQztLQUFBQTtBQXNEVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeD9mNzFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xubGV0IGNhcnQgPSBbXTtcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSh7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcHJpY2U6IFwiXCIsXG4gICAgcGljdHVyZTogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgYWRkdG9DYXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNhcnQucHVzaChwcm9kdWN0KTtcbiAgICBsZXQganNvbkNhcnQgPSBKU09OLnN0cmluZ2lmeShjYXJ0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwganNvbkNhcnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKGMpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlY2FyZFwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj17YC8ke2VuY29kZVVSSUNvbXBvbmVudChjLnNsdWcpfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdldGl0bGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHtjLlByb2R1Y3RfdGl0bGUuU31cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2MuUHJvZHVjdF9kZXNjcmlwdGlvbi5TfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+JHtjLlByb2R1Y3RfcHJpY2UuTn08L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17Yy5Qcm9kdWN0X3BpY3R1cmUuU30gY2xhc3NOYW1lPVwiaW1hZ2VcIiBuYW1lPVwiaW1hZ2VcIj48L2ltZz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFByb2R1Y3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGMuUHJvZHVjdF90aXRsZS5TLFxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGMuUHJvZHVjdF9kZXNjcmlwdGlvbi5TLFxuICAgICAgICAgICAgICAgICAgcHJpY2U6IGMuUHJvZHVjdF9wcmljZS5OLFxuICAgICAgICAgICAgICAgICAgcGljdHVyZTogYy5Qcm9kdWN0X3BpY3R1cmUuUyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIGFkZHRvQ2FydCgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0e1wiIFwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsImNhcnQiLCJDYXJkIiwicHJvcHMiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInBpY3R1cmUiLCJhZGR0b0NhcnQiLCJwdXNoIiwianNvbkNhcnQiLCJKU09OIiwic3RyaW5naWZ5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRpdiIsInByb2R1Y3RzIiwibWFwIiwiYyIsImNsYXNzTmFtZSIsImhyZWYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbHVnIiwiUHJvZHVjdF90aXRsZSIsIlMiLCJwIiwiUHJvZHVjdF9kZXNjcmlwdGlvbiIsIlByb2R1Y3RfcHJpY2UiLCJOIiwiaW1nIiwic3JjIiwiUHJvZHVjdF9waWN0dXJlIiwibmFtZSIsImJyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/cards.jsx\n"));

/***/ })

});