"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"68e103a8b471\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/Yjg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjY4ZTEwM2E4YjQ3MVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Header/HeaderLink/HeaderLink.jsx":
/*!*****************************************************!*\
  !*** ./components/Header/HeaderLink/HeaderLink.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst HeaderLink = (param)=>{\n    let { children , href , close , className  } = param;\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: href,\n            className: \"text-[18px]\" + \" \".concat(path === href ? \"border-b-[2px] border-[#FFC56D] \" : \"\"),\n            onClick: ()=>{\n                if (close) {\n                    close();\n                }\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLink/HeaderLink.jsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLink/HeaderLink.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeaderLink, \"kx72sda92+XlSh1QiZvq/YVQxpY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = HeaderLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderLink);\nvar _c;\n$RefreshReg$(_c, \"HeaderLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGluay9IZWFkZXJMaW5rLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2QjtBQUNpQjtBQUU5QyxNQUFNRSxhQUFhLFNBQTBDO1FBQXpDLEVBQUVDLFNBQVEsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFVBQVMsRUFBRTs7SUFDdEQsTUFBTUMsT0FBT04sNERBQVdBO0lBQ3hCLHFCQUNFLDhEQUFDTztRQUFHRixXQUFXQTtrQkFDYiw0RUFBQ04sa0RBQUlBO1lBQ0hJLE1BQU1BO1lBQ05FLFdBQ0UsZ0JBQ0EsSUFBNEQsT0FBeERDLFNBQVNILE9BQU8scUNBQXFDLEVBQUU7WUFFN0RLLFNBQVMsSUFBTTtnQkFDYixJQUFJSixPQUFPO29CQUNUQTtnQkFDRixDQUFDO1lBQ0g7c0JBRUNGOzs7Ozs7Ozs7OztBQUlUO0dBcEJNRDs7UUFDU0Qsd0RBQVdBOzs7S0FEcEJDO0FBc0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmsvSGVhZGVyTGluay5qc3g/MzFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBIZWFkZXJMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYsIGNsb3NlLCBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICBcInRleHQtWzE4cHhdXCIgK1xuICAgICAgICAgIGAgJHtwYXRoID09PSBocmVmID8gXCJib3JkZXItYi1bMnB4XSBib3JkZXItWyNGRkM1NkRdIFwiIDogXCJcIn1gXG4gICAgICAgIH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTGluaztcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJIZWFkZXJMaW5rIiwiY2hpbGRyZW4iLCJocmVmIiwiY2xvc2UiLCJjbGFzc05hbWUiLCJwYXRoIiwibGkiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Header/HeaderLink/HeaderLink.jsx\n"));

/***/ }),

/***/ "(app-client)/./components/Header/HeaderLoginButton/HeaderLoginButton.jsx":
/*!*******************************************************************!*\
  !*** ./components/Header/HeaderLoginButton/HeaderLoginButton.jsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-client)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _images_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/images/icons */ \"(app-client)/./images/icons/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_reducers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/reducers/User */ \"(app-client)/./services/reducers/User.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/token */ \"(app-client)/./utils/token.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/links */ \"(app-client)/./utils/links.js\");\n/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dropdown/Dropdown */ \"(app-client)/./components/Header/HeaderLoginButton/Dropdown/Dropdown.jsx\");\n/* harmony import */ var _HeaderLink_HeaderLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HeaderLink/HeaderLink */ \"(app-client)/./components/Header/HeaderLink/HeaderLink.jsx\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst HeaderLoginButton = (param)=>{\n    let { children , burger , close  } = param;\n    _s();\n    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.user);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    if (user && close) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderLink_HeaderLink__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                    href: _utils_links__WEBPACK_IMPORTED_MODULE_8__[\"default\"].controlTest,\n                    close: close,\n                    className: \"list-none my-[-50px]\",\n                    children: \"Тест ЕС - критерий контроля\"\n                }, void 0, false, {\n                    fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLoginButton/HeaderLoginButton.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-center gap-[6px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n                            href: _utils_links__WEBPACK_IMPORTED_MODULE_8__[\"default\"].profile,\n                            className: \"text-[#939393] text-[18px]\",\n                            onClick: ()=>{\n                                close();\n                            },\n                            children: user.username\n                        }, void 0, false, {\n                            fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLoginButton/HeaderLoginButton.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            src: _images_icons__WEBPACK_IMPORTED_MODULE_2__.exitButton,\n                            alt: \"стрелочка смотрит в сторону квадратика\",\n                            onClick: ()=>{\n                                dispatch((0,_services_reducers_User__WEBPACK_IMPORTED_MODULE_4__.setUser)(null));\n                                _utils_token__WEBPACK_IMPORTED_MODULE_6__[\"default\"].logOut();\n                                close();\n                                router.push(_utils_links__WEBPACK_IMPORTED_MODULE_8__[\"default\"].mainpage);\n                                window.location.reload();\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLoginButton/HeaderLoginButton.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLoginButton/HeaderLoginButton.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    if (user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            user: user\n        }, void 0, false, {\n            fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLoginButton/HeaderLoginButton.jsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n            href: _utils_links__WEBPACK_IMPORTED_MODULE_8__[\"default\"].login,\n            className: \"bg-white-orange py-[11px] w-[120px] lg:flex items-center justify-center \".concat(burger ? \"flex\" : \"hidden\", \" hover:drop-shadow-roundedButton active:bg-darker-orange\"),\n            onClick: ()=>{\n                if (close) {\n                    close();\n                }\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/igor/Desktop/projects/sansearch/components/Header/HeaderLoginButton/HeaderLoginButton.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(HeaderLoginButton, \"5wijxe7BD4WD3ltF5gsrxB5BCyA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = HeaderLoginButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderLoginButton);\nvar _c;\n$RefreshReg$(_c, \"HeaderLoginButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTG9naW5CdXR0b24vSGVhZGVyTG9naW5CdXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ1g7QUFDQTtBQUNPO0FBQ3BCO0FBQ0c7QUFDTDtBQUNLO0FBQ1M7QUFDTztBQUVsRCxNQUFNVyxvQkFBb0IsU0FBaUM7UUFBaEMsRUFBRUMsU0FBUSxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRTs7SUFDcEQsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR2Ysd0RBQVdBLENBQUMsQ0FBQ2dCLFFBQVVBLE1BQU1ELElBQUk7SUFDbEQsTUFBTUUsU0FBU2QsMERBQVNBO0lBQ3hCLE1BQU1lLFdBQVdqQix3REFBV0E7SUFDNUIsSUFBSWMsUUFBUUQsT0FBTztRQUNqQixxQkFDRTs7OEJBQ0UsOERBQUNKLCtEQUFVQTtvQkFDVFMsTUFBTVgsZ0VBQWlCO29CQUN2Qk0sT0FBT0E7b0JBQ1BPLFdBQVU7OEJBQ1g7Ozs7Ozs4QkFHRCw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDZCxrREFBSUE7NEJBQ0hZLE1BQU1YLDREQUFhOzRCQUNuQmEsV0FBVTs0QkFDVkcsU0FBUyxJQUFNO2dDQUNiVjs0QkFDRjtzQ0FFQ0MsS0FBS1UsUUFBUTs7Ozs7O3NDQUVoQiw4REFBQ3BCLG1EQUFLQTs0QkFDSnFCLEtBQUt4QixxREFBVUE7NEJBQ2Z5QixLQUFJOzRCQUNKSCxTQUFTLElBQU07Z0NBQ2JOLFNBQVNkLGdFQUFPQSxDQUFDLElBQUk7Z0NBQ3JCRSwyREFBWTtnQ0FDWlE7Z0NBQ0FHLE9BQU9ZLElBQUksQ0FBQ3JCLDZEQUFjO2dDQUMxQnVCLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTs0QkFDeEI7Ozs7Ozs7Ozs7Ozs7O0lBS1YsQ0FBQztJQUNELElBQUlsQixNQUFNO1FBQ1IscUJBQU8sOERBQUNOLDBEQUFRQTtZQUFDTSxNQUFNQTs7Ozs7O0lBQ3pCLENBQUM7SUFDRCxxQkFDRTtrQkFDRSw0RUFBQ1Isa0RBQUlBO1lBQ0hZLE1BQU1YLDBEQUFXO1lBQ2pCYSxXQUFXLDJFQUVWLE9BRENSLFNBQVMsU0FBUyxRQUFRLEVBQzNCO1lBQ0RXLFNBQVMsSUFBTTtnQkFDYixJQUFJVixPQUFPO29CQUNUQTtnQkFDRixDQUFDO1lBQ0g7c0JBRUNGOzs7Ozs7O0FBSVQ7R0EzRE1EOztRQUNhWCxvREFBV0E7UUFDYkcsc0RBQVNBO1FBQ1BGLG9EQUFXQTs7O0tBSHhCVTtBQTZETiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxvZ2luQnV0dG9uL0hlYWRlckxvZ2luQnV0dG9uLmpzeD83ZGZhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBleGl0QnV0dG9uIH0gZnJvbSBcIkAvaW1hZ2VzL2ljb25zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBzZXRVc2VyIH0gZnJvbSBcIkAvc2VydmljZXMvcmVkdWNlcnMvVXNlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdG9rZW4gZnJvbSBcIkAvdXRpbHMvdG9rZW5cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBsaW5rcyBmcm9tIFwiQC91dGlscy9saW5rc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL0Ryb3Bkb3duL0Ryb3Bkb3duXCI7XG5pbXBvcnQgSGVhZGVyTGluayBmcm9tIFwiLi4vSGVhZGVyTGluay9IZWFkZXJMaW5rXCI7XG5cbmNvbnN0IEhlYWRlckxvZ2luQnV0dG9uID0gKHsgY2hpbGRyZW4sIGJ1cmdlciwgY2xvc2UgfSkgPT4ge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGlmICh1c2VyICYmIGNsb3NlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxIZWFkZXJMaW5rXG4gICAgICAgICAgaHJlZj17bGlua3MuY29udHJvbFRlc3R9XG4gICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBteS1bLTUwcHhdXCJcbiAgICAgICAgPlxuICAgICAgICAgINCi0LXRgdGCINCV0KEgLSDQutGA0LjRgtC10YDQuNC5INC60L7QvdGC0YDQvtC70Y9cbiAgICAgICAgPC9IZWFkZXJMaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY2VudGVyIGdhcC1bNnB4XVwiPlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPXtsaW5rcy5wcm9maWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1bIzkzOTM5M10gdGV4dC1bMThweF1cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dXNlci51c2VybmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2V4aXRCdXR0b259XG4gICAgICAgICAgICBhbHQ9XCLRgdGC0YDQtdC70L7Rh9C60LAg0YHQvNC+0YLRgNC40YIg0LIg0YHRgtC+0YDQvtC90YMg0LrQstCw0LTRgNCw0YLQuNC60LBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcbiAgICAgICAgICAgICAgdG9rZW4ubG9nT3V0KCk7XG4gICAgICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKGxpbmtzLm1haW5wYWdlKTtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgaWYgKHVzZXIpIHtcbiAgICByZXR1cm4gPERyb3Bkb3duIHVzZXI9e3VzZXJ9IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e2xpbmtzLmxvZ2lufVxuICAgICAgICBjbGFzc05hbWU9e2BiZy13aGl0ZS1vcmFuZ2UgcHktWzExcHhdIHctWzEyMHB4XSBsZzpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAke1xuICAgICAgICAgIGJ1cmdlciA/IFwiZmxleFwiIDogXCJoaWRkZW5cIlxuICAgICAgICB9IGhvdmVyOmRyb3Atc2hhZG93LXJvdW5kZWRCdXR0b24gYWN0aXZlOmJnLWRhcmtlci1vcmFuZ2VgfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTG9naW5CdXR0b247XG4iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImV4aXRCdXR0b24iLCJ1c2VSb3V0ZXIiLCJzZXRVc2VyIiwiSW1hZ2UiLCJ0b2tlbiIsIkxpbmsiLCJsaW5rcyIsIkRyb3Bkb3duIiwiSGVhZGVyTGluayIsIkhlYWRlckxvZ2luQnV0dG9uIiwiY2hpbGRyZW4iLCJidXJnZXIiLCJjbG9zZSIsInVzZXIiLCJzdGF0ZSIsInJvdXRlciIsImRpc3BhdGNoIiwiaHJlZiIsImNvbnRyb2xUZXN0IiwiY2xhc3NOYW1lIiwiZGl2IiwicHJvZmlsZSIsIm9uQ2xpY2siLCJ1c2VybmFtZSIsInNyYyIsImFsdCIsImxvZ091dCIsInB1c2giLCJtYWlucGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Header/HeaderLoginButton/HeaderLoginButton.jsx\n"));

/***/ }),

/***/ "(app-client)/./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./links */ \"(app-client)/./utils/links.js\");\n/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token */ \"(app-client)/./utils/token.js\");\n/* harmony import */ var _apiToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiToken */ \"(app-client)/./utils/apiToken.js\");\n\n\n\nclass Auth {\n    register(name, email, password) {\n        return fetch(\"\".concat(_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backend, \"/api/auth/local/register\"), {\n            method: \"post\",\n            headers: this._headers,\n            body: JSON.stringify({\n                username: name,\n                email: email,\n                password: password\n            })\n        }).then((res)=>res.json());\n    }\n    login(email, password) {\n        return fetch(\"\".concat(_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backend, \"/api/auth/local\"), {\n            method: \"post\",\n            headers: this._headers,\n            body: JSON.stringify({\n                identifier: email,\n                password: password\n            })\n        }).then((res)=>res.json());\n    }\n    checkUser() {\n        const access = _token__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAccesToken();\n        return fetch(\"\".concat(_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backend, \"/api/users/me\"), {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(access)\n            }\n        }).then((res)=>res.json());\n    }\n    forgotPassword(email) {\n        return fetch(\"\".concat(_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backend, \"/api/auth/forgot-password\"), {\n            method: \"post\",\n            headers: this._headers,\n            body: JSON.stringify({\n                email: email\n            })\n        }).then((res)=>res.json());\n    }\n    ResetPassword(code, password) {\n        return fetch(\"\".concat(_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backend, \"/api/auth/reset-password\"), {\n            method: \"post\",\n            headers: this._headers,\n            body: JSON.stringify({\n                code: code,\n                password: password,\n                passwordConfirmation: password\n            })\n        }).then((res)=>res.json());\n    }\n    changeProfileData(data, id) {\n        return fetch(\"\".concat(_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"].backend, \"/api/users/\").concat(id), {\n            method: \"put\",\n            headers: this._headers,\n            body: JSON.stringify(data)\n        }).then((res)=>res.json());\n    }\n    constructor(){\n        this._headers = {\n            \"Content-Type\": \"application/json\",\n            Authorization: _apiToken__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        };\n    }\n}\nconst auth = new Auth();\n/* harmony default export */ __webpack_exports__[\"default\"] = (auth);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vdXRpbHMvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQTRCO0FBQ0E7QUFDTTtBQUVsQyxNQUFNRztJQU9KQyxTQUFTQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQzlCLE9BQU9DLE1BQU0sR0FBaUIsT0FBZFIsc0RBQWEsRUFBQyw2QkFBMkI7WUFDdkRVLFFBQVE7WUFDUkMsU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFDdEJDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJDLFVBQVVYO2dCQUNWQyxPQUFPQTtnQkFDUEMsVUFBVUE7WUFDWjtRQUNGLEdBQUdVLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQzNCO0lBQ0FDLE1BQU1kLEtBQUssRUFBRUMsUUFBUSxFQUFFO1FBQ3JCLE9BQU9DLE1BQU0sR0FBaUIsT0FBZFIsc0RBQWEsRUFBQyxvQkFBa0I7WUFDOUNVLFFBQVE7WUFDUkMsU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFDdEJDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJNLFlBQVlmO2dCQUNaQyxVQUFVQTtZQUNaO1FBQ0YsR0FBR1UsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDM0I7SUFDQUcsWUFBWTtRQUNWLE1BQU1DLFNBQVN0Qiw0REFBbUI7UUFDbEMsT0FBT08sTUFBTSxHQUFpQixPQUFkUixzREFBYSxFQUFDLGtCQUFnQjtZQUM1Q1csU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCYyxlQUFlLFVBQWlCLE9BQVBGO1lBQzNCO1FBQ0YsR0FBR04sSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDM0I7SUFDQU8sZUFBZXBCLEtBQUssRUFBRTtRQUNwQixPQUFPRSxNQUFNLEdBQWlCLE9BQWRSLHNEQUFhLEVBQUMsOEJBQTRCO1lBQ3hEVSxRQUFRO1lBQ1JDLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQ3RCQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CVCxPQUFPQTtZQUNUO1FBQ0YsR0FBR1csSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFDM0I7SUFDQVEsY0FBY0MsSUFBSSxFQUFFckIsUUFBUSxFQUFFO1FBQzVCLE9BQU9DLE1BQU0sR0FBaUIsT0FBZFIsc0RBQWEsRUFBQyw2QkFBMkI7WUFDdkRVLFFBQVE7WUFDUkMsU0FBUyxJQUFJLENBQUNDLFFBQVE7WUFDdEJDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJhLE1BQU1BO2dCQUNOckIsVUFBVUE7Z0JBQ1ZzQixzQkFBc0J0QjtZQUN4QjtRQUNGLEdBQUdVLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBQzNCO0lBQ0FXLGtCQUFrQkMsSUFBSSxFQUFFQyxFQUFFLEVBQUU7UUFDMUIsT0FBT3hCLE1BQU0sR0FBOEJ3QixPQUEzQmhDLHNEQUFhLEVBQUMsZUFBZ0IsT0FBSGdDLEtBQU07WUFDL0N0QixRQUFRO1lBQ1JDLFNBQVMsSUFBSSxDQUFDQyxRQUFRO1lBQ3RCQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNnQjtRQUN2QixHQUFHZCxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUMzQjtJQTlEQWMsYUFBYztRQUNaLElBQUksQ0FBQ3JCLFFBQVEsR0FBRztZQUNkLGdCQUFnQjtZQUNoQmEsZUFBZXZCLGlEQUFRQTtRQUN6QjtJQUNGO0FBMERGO0FBRUEsTUFBTWdDLE9BQU8sSUFBSS9CO0FBRWpCLCtEQUFlK0IsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hdXRoLmpzP2ViNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxpbmtzIGZyb20gXCIuL2xpbmtzXCI7XG5pbXBvcnQgdG9rZW4gZnJvbSBcIi4vdG9rZW5cIjtcbmltcG9ydCBhcGlUb2tlbiBmcm9tIFwiLi9hcGlUb2tlblwiO1xuXG5jbGFzcyBBdXRoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faGVhZGVycyA9IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgQXV0aG9yaXphdGlvbjogYXBpVG9rZW4sXG4gICAgfTtcbiAgfVxuICByZWdpc3RlcihuYW1lLCBlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7bGlua3MuYmFja2VuZH0vYXBpL2F1dGgvbG9jYWwvcmVnaXN0ZXJgLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IG5hbWUsXG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSksXG4gICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcbiAgfVxuICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7bGlua3MuYmFja2VuZH0vYXBpL2F1dGgvbG9jYWxgLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaWRlbnRpZmllcjogZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIH1cbiAgY2hlY2tVc2VyKCkge1xuICAgIGNvbnN0IGFjY2VzcyA9IHRva2VuLmdldEFjY2VzVG9rZW4oKTtcbiAgICByZXR1cm4gZmV0Y2goYCR7bGlua3MuYmFja2VuZH0vYXBpL3VzZXJzL21lYCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc31gLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICB9XG4gIGZvcmdvdFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke2xpbmtzLmJhY2tlbmR9L2FwaS9hdXRoL2ZvcmdvdC1wYXNzd29yZGAsIHtcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICB9KSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICB9XG4gIFJlc2V0UGFzc3dvcmQoY29kZSwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7bGlua3MuYmFja2VuZH0vYXBpL2F1dGgvcmVzZXQtcGFzc3dvcmRgLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICB9XG4gIGNoYW5nZVByb2ZpbGVEYXRhKGRhdGEsIGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke2xpbmtzLmJhY2tlbmR9L2FwaS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJwdXRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICB9XG59XG5cbmNvbnN0IGF1dGggPSBuZXcgQXV0aCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xuIl0sIm5hbWVzIjpbImxpbmtzIiwidG9rZW4iLCJhcGlUb2tlbiIsIkF1dGgiLCJyZWdpc3RlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZmV0Y2giLCJiYWNrZW5kIiwibWV0aG9kIiwiaGVhZGVycyIsIl9oZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VybmFtZSIsInRoZW4iLCJyZXMiLCJqc29uIiwibG9naW4iLCJpZGVudGlmaWVyIiwiY2hlY2tVc2VyIiwiYWNjZXNzIiwiZ2V0QWNjZXNUb2tlbiIsIkF1dGhvcml6YXRpb24iLCJmb3Jnb3RQYXNzd29yZCIsIlJlc2V0UGFzc3dvcmQiLCJjb2RlIiwicGFzc3dvcmRDb25maXJtYXRpb24iLCJjaGFuZ2VQcm9maWxlRGF0YSIsImRhdGEiLCJpZCIsImNvbnN0cnVjdG9yIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./utils/auth.js\n"));

/***/ })

});