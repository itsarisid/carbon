"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(hero)/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/api/image.js":
/*!*********************************************!*\
  !*** ./node_modules/next/dist/api/image.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport default from dynamic */ _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default.a; }\n/* harmony export */ });\n/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/lib/image-external */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/image-external.js\");\n/* harmony import */ var _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _shared_lib_image_external__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n//# sourceMappingURL=image.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL2ltYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNWOztBQUU3QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9pbWFnZS5qcz8yNmViIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi4vc2hhcmVkL2xpYi9pbWFnZS1leHRlcm5hbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4uL3NoYXJlZC9saWIvaW1hZ2UtZXh0ZXJuYWxcIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/image.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/dist/shared/lib/image-external.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/image-external.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    default: function() {\n        return _default;\n    },\n    getImageProps: function() {\n        return getImageProps;\n    }\n});\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_interop_require_default.js\");\nconst _getimgprops = __webpack_require__(/*! ./get-img-props */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/get-img-props.js\");\nconst _imagecomponent = __webpack_require__(/*! ../../client/image-component */ \"(app-pages-browser)/./node_modules/next/dist/client/image-component.js\");\nconst _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! next/dist/shared/lib/image-loader */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/image-loader.js\"));\nfunction getImageProps(imgProps) {\n    const { props } = (0, _getimgprops.getImgProps)(imgProps, {\n        defaultLoader: _imageloader.default,\n        // This is replaced by webpack define plugin\n        imgConf: {\"deviceSizes\":[640,750,828,1080,1200,1920,2048,3840],\"imageSizes\":[16,32,48,64,96,128,256,384],\"path\":\"/_next/image\",\"loader\":\"default\",\"dangerouslyAllowSVG\":false,\"unoptimized\":false,\"domains\":[],\"remotePatterns\":[]}\n    });\n    // Normally we don't care about undefined props because we pass to JSX,\n    // but this exported function could be used by the end user for anything\n    // so we delete undefined props to clean it up a little.\n    for (const [key, value] of Object.entries(props)){\n        if (value === undefined) {\n            delete props[key];\n        }\n    }\n    return {\n        props\n    };\n}\nconst _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pbWFnZS1leHRlcm5hbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFpQ0FBLFNBQW9CO2VBQXBCQzs7SUFqQmdCQyxlQUFhO2VBQWJBOzs7O3lDQWJZOzRDQUNOO2tGQUdJO0FBU25CLFNBQVNBLGNBQWNDLFFBQW9CO0lBQ2hELE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdDLENBQUFBLEdBQUFBLGFBQUFBLFdBQVcsRUFBQ0YsVUFBVTtRQUN0Q0csZUFBQUEsYUFBQUEsT0FBYTtRQUNiLDRDQUE0QztRQUM1Q0MsU0FBU0MsME5BQTZCO0lBQ3hDO0lBQ0EsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx3REFBd0Q7SUFDeEQsS0FBSyxNQUFNLENBQUNHLEtBQUtDLE1BQU0sSUFBSUMsT0FBT0MsT0FBTyxDQUFDVixPQUFRO1FBQ2hELElBQUlRLFVBQVVHLFdBQVc7WUFDdkIsT0FBT1gsS0FBSyxDQUFDTyxJQUEwQjtRQUN6QztJQUNGO0lBQ0EsT0FBTztRQUFFUDtJQUFNO0FBQ2pCO01BRUFILFdBQWVlLGdCQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uLi9zcmMvc2hhcmVkL2xpYi9pbWFnZS1leHRlcm5hbC50c3g/ZThkYyJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiX2RlZmF1bHQiLCJnZXRJbWFnZVByb3BzIiwiaW1nUHJvcHMiLCJwcm9wcyIsImdldEltZ1Byb3BzIiwiZGVmYXVsdExvYWRlciIsImltZ0NvbmYiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/shared/lib/image-external.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Services.tsx":
/*!*************************************!*\
  !*** ./src/components/Services.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Services: function() { return /* binding */ Services; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./src/components/ui/card.tsx\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"(app-pages-browser)/./src/components/Icons.tsx\");\n/* harmony import */ var _assets_cube_leg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/cube-leg.png */ \"(app-pages-browser)/./src/assets/cube-leg.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ Services auto */ \n\n\n\n\nconst serviceList = [\n    {\n        title: \"Code Collaboration\",\n        description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.ChartIcon, {}, void 0, false, {\n            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n            lineNumber: 18,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        title: \"Project Management\",\n        description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.WalletIcon, {}, void 0, false, {\n            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n            lineNumber: 24,\n            columnNumber: 11\n        }, undefined)\n    },\n    {\n        title: \"Task Automation\",\n        description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.\",\n        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.MagnifierIcon, {}, void 0, false, {\n            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n            lineNumber: 30,\n            columnNumber: 11\n        }, undefined)\n    }\n];\nconst Services = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container py-24 sm:py-32\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl md:text-4xl font-bold\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text\",\n                                    children: [\n                                        \"Client-Centric\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"Services\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-muted-foreground text-xl mt-4 mb-8 \",\n                            children: \"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis dolor.\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-8\",\n                            children: serviceList.map((param)=>{\n                                let { icon, title, description } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                                        className: \"space-y-1 flex md:flex-row justify-start items-start gap-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-1 bg-primary/20 p-1 rounded-2xl\",\n                                                children: icon\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, {\n                                                        children: title\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_1__.CardDescription, {\n                                                        className: \"text-md mt-2\",\n                                                        children: description\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, title, false, {\n                                    fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    src: _assets_cube_leg_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    className: \"w-[300px] md:w-[500px] lg:w-[600px] object-contain\",\n                    alt: \"About services\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\equation\\\\src\\\\components\\\\Services.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Services;\nvar _c;\n$RefreshReg$(_c, \"Services\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3lFO0FBQ1Y7QUFDbEI7QUFDZDtBQVEvQixNQUFNUyxjQUE4QjtJQUNsQztRQUNFQyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsb0JBQU0sOERBQUNOLDZDQUFTQTs7Ozs7SUFDbEI7SUFDQTtRQUNFSSxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsb0JBQU0sOERBQUNQLDhDQUFVQTs7Ozs7SUFDbkI7SUFDQTtRQUNFSyxPQUFPO1FBQ1BDLGFBQ0U7UUFDRkMsb0JBQU0sOERBQUNSLGlEQUFhQTs7Ozs7SUFDdEI7Q0FDRDtBQUVNLE1BQU1TLFdBQVc7SUFDdEIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0M7O3NDQUNDLDhEQUFDQzs0QkFBR0YsV0FBVTs7OENBQ1osOERBQUNHO29DQUFLSCxXQUFVOzt3Q0FBNEU7d0NBQzNFOzs7Ozs7O2dDQUNWOzs7Ozs7O3NDQUlULDhEQUFDSTs0QkFBRUosV0FBVTtzQ0FBMkM7Ozs7OztzQ0FLeEQsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNaTixZQUFZVyxHQUFHLENBQUM7b0NBQUMsRUFBRVIsSUFBSSxFQUFFRixLQUFLLEVBQUVDLFdBQVcsRUFBZ0I7cURBQzFELDhEQUFDWCwwQ0FBSUE7OENBQ0gsNEVBQUNFLGdEQUFVQTt3Q0FBQ2EsV0FBVTs7MERBQ3BCLDhEQUFDQztnREFBSUQsV0FBVTswREFDWkg7Ozs7OzswREFFSCw4REFBQ0k7O2tFQUNDLDhEQUFDYiwrQ0FBU0E7a0VBQUVPOzs7Ozs7a0VBQ1osOERBQUNULHFEQUFlQTt3REFBQ2MsV0FBVTtrRUFDeEJKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBUkVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFpQmpCLDhEQUFDRixrREFBS0E7b0JBQ0phLEtBQUtkLDREQUFPQTtvQkFDWlEsV0FBVTtvQkFDVk8sS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZCxFQUFFO0tBNUNXVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlcy50c3g/ZWYzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IENhcmQsIENhcmREZXNjcmlwdGlvbiwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIi4vdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBNYWduaWZpZXJJY29uLCBXYWxsZXRJY29uLCBDaGFydEljb24gfSBmcm9tIFwiLi9JY29uc1wiO1xyXG5pbXBvcnQgY3ViZUxlZyBmcm9tIFwiLi4vYXNzZXRzL2N1YmUtbGVnLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmludGVyZmFjZSBTZXJ2aWNlUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBpY29uOiBKU1guRWxlbWVudDtcclxufVxyXG5cclxuY29uc3Qgc2VydmljZUxpc3Q6IFNlcnZpY2VQcm9wc1tdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvZGUgQ29sbGFib3JhdGlvblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmlzaSBuZXNjaXVudCBlc3Qgbm9zdHJ1bSBvbW5pcyBhYiBzYXBpZW50ZS5cIixcclxuICAgIGljb246IDxDaGFydEljb24gLz4sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJQcm9qZWN0IE1hbmFnZW1lbnRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE5pc2kgbmVzY2l1bnQgZXN0IG5vc3RydW0gb21uaXMgYWIgc2FwaWVudGUuXCIsXHJcbiAgICBpY29uOiA8V2FsbGV0SWNvbiAvPixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRhc2sgQXV0b21hdGlvblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmlzaSBuZXNjaXVudCBlc3Qgbm9zdHJ1bSBvbW5pcyBhYiBzYXBpZW50ZS5cIixcclxuICAgIGljb246IDxNYWduaWZpZXJJY29uIC8+LFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS0yNCBzbTpweS0zMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLVsxZnIsMWZyXSBnYXAtOCBwbGFjZS1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tcHJpbWFyeS82MCB0by1wcmltYXJ5IHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgQ2xpZW50LUNlbnRyaWN7XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgU2VydmljZXNcclxuICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHQteGwgbXQtNCBtYi04IFwiPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gVmVyaXRhdGlzXHJcbiAgICAgICAgICAgIGRvbG9yLlxyXG4gICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOFwiPlxyXG4gICAgICAgICAgICB7c2VydmljZUxpc3QubWFwKCh7IGljb24sIHRpdGxlLCBkZXNjcmlwdGlvbiB9OiBTZXJ2aWNlUHJvcHMpID0+IChcclxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e3RpdGxlfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT1cInNwYWNlLXktMSBmbGV4IG1kOmZsZXgtcm93IGp1c3RpZnktc3RhcnQgaXRlbXMtc3RhcnQgZ2FwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIGJnLXByaW1hcnkvMjAgcC0xIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGU+e3RpdGxlfTwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkRGVzY3JpcHRpb24gY2xhc3NOYW1lPVwidGV4dC1tZCBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2N1YmVMZWd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszMDBweF0gbWQ6dy1bNTAwcHhdIGxnOnctWzYwMHB4XSBvYmplY3QtY29udGFpblwiXHJcbiAgICAgICAgICBhbHQ9XCJBYm91dCBzZXJ2aWNlc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJDYXJkRGVzY3JpcHRpb24iLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiTWFnbmlmaWVySWNvbiIsIldhbGxldEljb24iLCJDaGFydEljb24iLCJjdWJlTGVnIiwiSW1hZ2UiLCJzZXJ2aWNlTGlzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiU2VydmljZXMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJzcGFuIiwicCIsIm1hcCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Services.tsx\n"));

/***/ })

});