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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Card(props) {\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        picture: \"\"\n    });\n    // const [productPrice, setproductPrice] = useState();\n    const addtoCart = async (e)=>{\n        e.stopPropognation;\n        setProduct({\n            title: e.target.Product_title,\n            description: e.target.Product_description,\n            picture: e.target.Product_picture\n        });\n        let cart = [];\n        cart.push(product);\n        let jsonCart = JSON.stringify(cart);\n        localStorage.setItem(\"cart\", jsonCart);\n        console.log(product.title);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: props.products.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imagecard\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"imagetitle\",\n                            children: [\n                                \" \",\n                                c.Product_title.S\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"description\",\n                            name: \"description\",\n                            children: c.Product_description.S\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: c.Product_picture.S,\n                            className: \"image\",\n                            name: \"image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: (setProduct(c), addtoCart),\n                            children: \" Add to Cart \"\n                        }, void 0, false, {\n                            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/ramkishansritharan/Desktop/Software-Projects/Ecommerce site/estore/src/components/Card/cards.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Card, \"5XCH/ycC8Ed1nYfZXIrb3HQ5jJM=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkL2NhcmRzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLFNBQVNFLEtBQUtDLEtBQUssRUFBRTs7SUFDbkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3JDSyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztJQUNYO0lBRUEsc0RBQXNEO0lBRXRELE1BQU1DLFlBQVksT0FBT0MsSUFBTTtRQUM3QkEsRUFBRUMsZ0JBQWdCO1FBQ2xCTixXQUFXO1lBQ1RDLE9BQU9JLEVBQUVFLE1BQU0sQ0FBQ0MsYUFBYTtZQUM3Qk4sYUFBYUcsRUFBRUUsTUFBTSxDQUFDRSxtQkFBbUI7WUFDekNOLFNBQVNFLEVBQUVFLE1BQU0sQ0FBQ0csZUFBZTtRQUNuQztRQUVBLElBQUlDLE9BQU8sRUFBRTtRQUViQSxLQUFLQyxJQUFJLENBQUNiO1FBQ1YsSUFBSWMsV0FBV0MsS0FBS0MsU0FBUyxDQUFDSjtRQUM5QkssYUFBYUMsT0FBTyxDQUFDLFFBQVFKO1FBQzdCSyxRQUFRQyxHQUFHLENBQUNwQixRQUFRRSxLQUFLO0lBQzNCO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNtQjtzQkFDRXRCLE1BQU11QixRQUFRLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxrQkFDbkIsOERBQUNIO29CQUFJSSxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVU7O2dDQUFhO2dDQUFFRCxFQUFFZixhQUFhLENBQUNrQixDQUFDOzs7Ozs7O3NDQUM5Qyw4REFBQ0M7NEJBQUVILFdBQVU7NEJBQWNJLE1BQUs7c0NBQzdCTCxFQUFFZCxtQkFBbUIsQ0FBQ2lCLENBQUM7Ozs7OztzQ0FFMUIsOERBQUNHOzRCQUFJQyxLQUFLUCxFQUFFYixlQUFlLENBQUNnQixDQUFDOzRCQUFFRixXQUFVOzRCQUFRSSxNQUFLOzs7Ozs7c0NBQ3RELDhEQUFDRzs7Ozs7c0NBQ0QsOERBQUNBOzs7OztzQ0FFRCw4REFBQ0M7NEJBQU9DLFNBQVVqQyxDQUFBQSxXQUFXdUIsSUFBSW5CLFNBQVM7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RDtHQTVDU1A7S0FBQUE7QUE2Q1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC9jYXJkcy5qc3g/ZjcxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSh7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgcGljdHVyZTogXCJcIixcbiAgfSk7XG5cbiAgLy8gY29uc3QgW3Byb2R1Y3RQcmljZSwgc2V0cHJvZHVjdFByaWNlXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgYWRkdG9DYXJ0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wb2duYXRpb247XG4gICAgc2V0UHJvZHVjdCh7XG4gICAgICB0aXRsZTogZS50YXJnZXQuUHJvZHVjdF90aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBlLnRhcmdldC5Qcm9kdWN0X2Rlc2NyaXB0aW9uLFxuICAgICAgcGljdHVyZTogZS50YXJnZXQuUHJvZHVjdF9waWN0dXJlLFxuICAgIH0pO1xuXG4gICAgbGV0IGNhcnQgPSBbXTtcblxuICAgIGNhcnQucHVzaChwcm9kdWN0KTtcbiAgICBsZXQganNvbkNhcnQgPSBKU09OLnN0cmluZ2lmeShjYXJ0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwganNvbkNhcnQpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QudGl0bGUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5wcm9kdWN0cy5tYXAoKGMpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlY2FyZFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImltYWdldGl0bGVcIj4ge2MuUHJvZHVjdF90aXRsZS5TfTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICB7Yy5Qcm9kdWN0X2Rlc2NyaXB0aW9uLlN9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW1nIHNyYz17Yy5Qcm9kdWN0X3BpY3R1cmUuU30gY2xhc3NOYW1lPVwiaW1hZ2VcIiBuYW1lPVwiaW1hZ2VcIj48L2ltZz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KHNldFByb2R1Y3QoYyksIGFkZHRvQ2FydCl9PiBBZGQgdG8gQ2FydCA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJwcm9wcyIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBpY3R1cmUiLCJhZGR0b0NhcnQiLCJlIiwic3RvcFByb3BvZ25hdGlvbiIsInRhcmdldCIsIlByb2R1Y3RfdGl0bGUiLCJQcm9kdWN0X2Rlc2NyaXB0aW9uIiwiUHJvZHVjdF9waWN0dXJlIiwiY2FydCIsInB1c2giLCJqc29uQ2FydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImRpdiIsInByb2R1Y3RzIiwibWFwIiwiYyIsImNsYXNzTmFtZSIsImg1IiwiUyIsInAiLCJuYW1lIiwiaW1nIiwic3JjIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Card/cards.jsx\n"));

/***/ })

});