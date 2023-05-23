exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 3337:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9911))

/***/ }),

/***/ 9911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3776);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const ProtectedRoute = ({ children  })=>{
    const { user , status  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.user);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!user && status === "resolved" && path === _utils_links__WEBPACK_IMPORTED_MODULE_4__/* ["default"].profile */ .Z.profile) {
            router.push(_utils_links__WEBPACK_IMPORTED_MODULE_4__/* ["default"].mainpage */ .Z.mainpage);
        } else if (!user && status === "loading") {
            return null;
        } else if (!user && status === "resolved") {
            router.push("/access-error");
        } else if (user && user.subscribed === false && path !== _utils_links__WEBPACK_IMPORTED_MODULE_4__/* ["default"].profile */ .Z.profile) {
            router.push(`/access-error?name=${user.username}`);
        }
    }, [
        user,
        status,
        path,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProtectedRoute);


/***/ }),

/***/ 3912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./components/ProtectedRoute/ProtectedRoute.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\ProtectedRoute\ProtectedRoute.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ProtectedRoute = (__default__);
;// CONCATENATED MODULE: ./app/(protected)/layout.js


const Layout = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ProtectedRoute, {
        children: children
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;