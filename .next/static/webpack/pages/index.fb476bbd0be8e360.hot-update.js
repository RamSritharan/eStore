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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(props) {\n    console.log(\"hello\", props.products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: props.products.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"imagecard\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"imagetitle\",\n                        children: [\n                            \" \",\n                            c.Product_title.S\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"card-subtitle mb-2 text-muted\",\n                        children: [\n                            \" \",\n                            c.Product_Id.N,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"card-text\",\n                        children: c.Product_description.S\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: c.Product_picture.S,\n                        className: \"image\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \" Add to Cart \"\n                    }, void 0, false, {\n                        fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsU0FBU0MsS0FBS0MsS0FBSyxFQUFFO0lBQ25CQyxRQUFRQyxHQUFHLENBQUMsU0FBU0YsTUFBTUcsUUFBUTtJQUNuQyxxQkFDRTtrQkFDR0gsTUFBTUcsUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0Msa0JBQ25CLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVOzs0QkFBYTs0QkFBRUYsRUFBRUksYUFBYSxDQUFDQyxDQUFDOzs7Ozs7O2tDQUM5Qyw4REFBQ0M7d0JBQUdKLFdBQVU7OzRCQUFnQzs0QkFBRUYsRUFBRU8sVUFBVSxDQUFDQyxDQUFDOzRCQUFDOzs7Ozs7O2tDQUMvRCw4REFBQ0M7d0JBQUVQLFdBQVU7a0NBQWFGLEVBQUVVLG1CQUFtQixDQUFDTCxDQUFDOzs7Ozs7a0NBQ2pELDhEQUFDTTt3QkFBSUMsS0FBS1osRUFBRWEsZUFBZSxDQUFDUixDQUFDO3dCQUFFSCxXQUFVOzs7Ozs7a0NBQ3pDLDhEQUFDWTs7Ozs7a0NBQ0QsOERBQUNDO2tDQUFPOzs7Ozs7Ozs7Ozs7O0FBS2xCO0tBaEJTckI7QUFpQlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9jYXJkcy5qc3g/ZjcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgY29uc29sZS5sb2coXCJoZWxsb1wiLCBwcm9wcy5wcm9kdWN0cyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKGMpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZWNhcmRcIj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiaW1hZ2V0aXRsZVwiPiB7Yy5Qcm9kdWN0X3RpdGxlLlN9PC9oNT5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSBtYi0yIHRleHQtbXV0ZWRcIj4ge2MuUHJvZHVjdF9JZC5OfSA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntjLlByb2R1Y3RfZGVzY3JpcHRpb24uU308L3A+XG4gICAgICAgICAgPGltZyBzcmM9e2MuUHJvZHVjdF9waWN0dXJlLlN9IGNsYXNzTmFtZT1cImltYWdlXCI+PC9pbWc+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJ1dHRvbj4gQWRkIHRvIENhcnQgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RzIiwibWFwIiwiYyIsImRpdiIsImNsYXNzTmFtZSIsImg1IiwiUHJvZHVjdF90aXRsZSIsIlMiLCJoNiIsIlByb2R1Y3RfSWQiLCJOIiwicCIsIlByb2R1Y3RfZGVzY3JpcHRpb24iLCJpbWciLCJzcmMiLCJQcm9kdWN0X3BpY3R1cmUiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Card/cards.jsx\n"));

/***/ })

});