"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 8235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7160);
/* harmony import */ var _LabelNInput_LabelNInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4652);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2526);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1025);
/* harmony import */ var _components_ui_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9649);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const LoginForm = ()=>{
    const [email, emailChange] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [password, passwordChange] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("");
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const authHandling = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const inputList = [
        {
            label: "Почта:",
            htmlType: "email",
            placeholder: "Введите адрес эл.почты",
            onChange: (e)=>{
                emailChange(e);
            },
            value: email
        },
        {
            label: "Пароль:",
            htmlType: "password",
            placeholder: "Введите пароль",
            onChange: (e)=>{
                passwordChange(e);
            },
            value: password
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        className: "mb-[42px] lg:mb-5 flex-center-col gap-[17px] lg:gap-6 w-full",
        onSubmit: (e)=>{
            e.preventDefault();
            _utils_auth__WEBPACK_IMPORTED_MODULE_4__/* ["default"].login */ .Z.login(email, password).then((res)=>{
                authHandling(setError, res);
            });
        },
        children: [
            inputList.map((input)=>{
                return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_LabelNInput_LabelNInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    ...input,
                    key: input.label
                });
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                className: "bg-white-orange py-[8px] w-[160px] flex items-center justify-center hover:drop-shadow-roundedButton active:bg-darker-orange text-[20px] lg:text-[24px] lg:w-[318px] lg:mt-5",
                children: "Войти"
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: "Неправильный логин или пароль"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);


/***/ }),

/***/ 1025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8823);
/* harmony import */ var _services_reducers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7432);
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3776);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const useAuth = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return (setError, res)=>{
        if (res.error) {
            setError(true);
        } else {
            _utils_token__WEBPACK_IMPORTED_MODULE_1__/* ["default"].setAccessToken */ .Z.setAccessToken(res.jwt);
            dispatch((0,_services_reducers_User__WEBPACK_IMPORTED_MODULE_2__/* .setUser */ .a)(res.user));
            router.push(_utils_links__WEBPACK_IMPORTED_MODULE_3__/* ["default"].mainpage */ .Z.mainpage);
            setTimeout(()=>{
                router.push(_utils_links__WEBPACK_IMPORTED_MODULE_3__/* ["default"].profile */ .Z.profile);
            }, 200);
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);


/***/ }),

/***/ 7938:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return NoopParallelRouteDefault;
    }
}));
const _notfound = __webpack_require__(3716);
function NoopParallelRouteDefault() {
    (0, _notfound.notFound)();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parallel-route-default.js.map


/***/ })

};
;