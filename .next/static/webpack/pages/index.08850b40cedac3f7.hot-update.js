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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Card(props) {\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        picture: \"\"\n    });\n    // const [productPrice, setproductPrice] = useState();\n    const addtoCart = async (e)=>{\n        e.stopPropognation;\n        setProduct({\n            title: e.target.imagetitle,\n            description: e.target.Product_description,\n            picture: e.target.Product_picture\n        });\n        let cart = [];\n        cart.push(product);\n        let jsonCart = JSON.stringify(cart);\n        localStorage.setItem(\"cart\", jsonCart);\n        console.log(product.title);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: props.products.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imagecard\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            class: \"title\",\n                            className: \"imagetitle\",\n                            children: [\n                                \" \",\n                                c.Product_title.S\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"description\",\n                            name: \"description\",\n                            children: c.Product_description.S\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: c.Product_picture.S,\n                            className: \"image\",\n                            name: \"image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: addtoCart,\n                            children: \" Add to Cart \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Card, \"5XCH/ycC8Ed1nYfZXIrb3HQ5jJM=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNFLEtBQUtDLEtBQUssRUFBRTs7SUFDbkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3JDSyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztJQUNYO0lBRUEsc0RBQXNEO0lBRXRELE1BQU1DLFlBQVksT0FBT0MsSUFBTTtRQUM3QkEsRUFBRUMsZ0JBQWdCO1FBQ2xCTixXQUFXO1lBQ1RDLE9BQU9JLEVBQUVFLE1BQU0sQ0FBQ0MsVUFBVTtZQUMxQk4sYUFBYUcsRUFBRUUsTUFBTSxDQUFDRSxtQkFBbUI7WUFDekNOLFNBQVNFLEVBQUVFLE1BQU0sQ0FBQ0csZUFBZTtRQUNuQztRQUVBLElBQUlDLE9BQU8sRUFBRTtRQUViQSxLQUFLQyxJQUFJLENBQUNiO1FBQ1YsSUFBSWMsV0FBV0MsS0FBS0MsU0FBUyxDQUFDSjtRQUM5QkssYUFBYUMsT0FBTyxDQUFDLFFBQVFKO1FBQzdCSyxRQUFRQyxHQUFHLENBQUNwQixRQUFRRSxLQUFLO0lBQzNCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNtQjtzQkFDRXRCLE1BQU11QixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDbkIsOERBQUNIO29CQUFJSSxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdDLE9BQU07NEJBQVFGLFdBQVU7O2dDQUN6QjtnQ0FDQUQsRUFBRUksYUFBYSxDQUFDQyxDQUFDOzs7Ozs7O3NDQUVwQiw4REFBQ0M7NEJBQUVMLFdBQVU7NEJBQWNNLE1BQUs7c0NBQzdCUCxFQUFFZCxtQkFBbUIsQ0FBQ21CLENBQUM7Ozs7OztzQ0FFMUIsOERBQUNHOzRCQUFJQyxLQUFLVCxFQUFFYixlQUFlLENBQUNrQixDQUFDOzRCQUFFSixXQUFVOzRCQUFRTSxNQUFLOzs7Ozs7c0NBQ3RELDhEQUFDRzs7Ozs7c0NBQ0QsOERBQUNBOzs7OztzQ0FFRCw4REFBQ0M7NEJBQU9DLFNBQVMvQjtzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBL0NTUDtLQUFBQTtBQWdEVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeD9mNzFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDYXJkKHByb3BzKSB7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHtcbiAgICB0aXRsZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICBwaWN0dXJlOiBcIlwiLFxuICB9KTtcblxuICAvLyBjb25zdCBbcHJvZHVjdFByaWNlLCBzZXRwcm9kdWN0UHJpY2VdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBhZGR0b0NhcnQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BvZ25hdGlvbjtcbiAgICBzZXRQcm9kdWN0KHtcbiAgICAgIHRpdGxlOiBlLnRhcmdldC5pbWFnZXRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGUudGFyZ2V0LlByb2R1Y3RfZGVzY3JpcHRpb24sXG4gICAgICBwaWN0dXJlOiBlLnRhcmdldC5Qcm9kdWN0X3BpY3R1cmUsXG4gICAgfSk7XG5cbiAgICBsZXQgY2FydCA9IFtdO1xuXG4gICAgY2FydC5wdXNoKHByb2R1Y3QpO1xuICAgIGxldCBqc29uQ2FydCA9IEpTT04uc3RyaW5naWZ5KGNhcnQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBqc29uQ2FydCk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdC50aXRsZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAge3Byb3BzLnByb2R1Y3RzLm1hcCgoYykgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VjYXJkXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImltYWdldGl0bGVcIj5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICB7Yy5Qcm9kdWN0X3RpdGxlLlN9XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAge2MuUHJvZHVjdF9kZXNjcmlwdGlvbi5TfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9e2MuUHJvZHVjdF9waWN0dXJlLlN9IGNsYXNzTmFtZT1cImltYWdlXCIgbmFtZT1cImltYWdlXCI+PC9pbWc+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZHRvQ2FydH0+IEFkZCB0byBDYXJ0IDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsInByb3BzIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsImFkZHRvQ2FydCIsImUiLCJzdG9wUHJvcG9nbmF0aW9uIiwidGFyZ2V0IiwiaW1hZ2V0aXRsZSIsIlByb2R1Y3RfZGVzY3JpcHRpb24iLCJQcm9kdWN0X3BpY3R1cmUiLCJjYXJ0IiwicHVzaCIsImpzb25DYXJ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwicHJvZHVjdHMiLCJtYXAiLCJjIiwiY2xhc3NOYW1lIiwiaDUiLCJjbGFzcyIsIlByb2R1Y3RfdGl0bGUiLCJTIiwicCIsIm5hbWUiLCJpbWciLCJzcmMiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Card/cards.jsx\n"));

/***/ })

});