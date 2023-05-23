"use strict";
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 4652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LabelNInput = ({ label , placeholder , htmlType , onChange , value , className , minLength  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        className: "flex-center justify-between w-full lg:text-[24px]",
        children: [
            label,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: placeholder,
                type: htmlType,
                onChange: onChange,
                value: value,
                minLength: minLength,
                className: "bg-transparent border-b border-b-[#939393] text-[#939393] w-[180px] lg:w-[351px] lg:placeholder:text-2xl lg:h-[45px] " + `${className}`,
                required: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelNInput);


/***/ }),

/***/ 9649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ErrorMessage = ({ children , className  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: "hover:red-yellow-500 w-full mb-2 select-none border-l-4 border-red-400 bg-red-100 p-4 font-medium" + ` ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);


/***/ }),

/***/ 7160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useInput = (initial)=>{
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);
    const onChange = (e)=>{
        setState(e.target.value);
    };
    return [
        state,
        onChange
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);


/***/ })

};
;