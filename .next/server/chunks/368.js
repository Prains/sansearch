"use strict";
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 6551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Main_Main)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/ui/Title.jsx

const Title = ({ children , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
        className: "text-4xl uppercase" + ` ${className ? className : ""}`,
        children: children
    });
};
/* harmony default export */ const ui_Title = (Title);

;// CONCATENATED MODULE: ./images/Mainpage/Main/5583949 1.png
/* harmony default export */ const _5583949_1 = ({"src":"/_next/static/media/5583949 1.d4f85cbc.png","height":487,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAElBMVEXf6erm8PDa5ebT3t/J09Tu+Pf8x4FyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXJsRHAQBCEMGDv+2/ZY6UCn1FcbLfYBYyn9DeKILUPB7sASkQCeEgAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./images/Mainpage/Main/index.js



// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./components/Main/SearchBar/MainInput/MainInput.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const MainInput = ({ placeholder , htmlType ="text" , value , onChange , required =true  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        type: htmlType,
        placeholder: placeholder,
        minLength: 2,
        required: required,
        maxLength: 254,
        value: value,
        onChange: onChange,
        className: "w-[280px] pl-4 py-2 border-darker-orange border rounded-sm rounded-ee-none rounded-es-none lg:w-full lg:py-0 lg:h-[60px] lg:rounded-e-none lg:rounded-es-sm"
    });
};
/* harmony default export */ const MainInput_MainInput = (MainInput);

// EXTERNAL MODULE: ./hooks/useInput.js
var useInput = __webpack_require__(7160);
// EXTERNAL MODULE: ./components/ui/Button.jsx
var Button = __webpack_require__(2454);
// EXTERNAL MODULE: ./utils/links.js
var links = __webpack_require__(3776);
// EXTERNAL MODULE: ./images/icons/index.js + 6 modules
var icons = __webpack_require__(4956);
;// CONCATENATED MODULE: ./components/Main/SearchBar/SearchBar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const SearchBar = ({ searchingZone  })=>{
    const router = (0,navigation.useRouter)();
    const [inputValue, setInputValue] = (0,useInput/* default */.Z)("");
    const handleClickSearchButton = async (e)=>{
        if (inputValue.trim()) {
            e.preventDefault();
            if (searchingZone === "ru") {
                router.push(`${links/* default.sanctionsRussia */.Z.sanctionsRussia}/?search=${inputValue}`, undefined, {
                    shallow: true
                });
            }
            if (searchingZone === "eu") {
                router.push(`${links/* default.sanctionsES */.Z.sanctionsES}/?search=${inputValue}`, undefined, {
                    shallow: true
                });
            }
            if (searchingZone === "usa") {
                router.push(`${links/* default.sanctionsUsa */.Z.sanctionsUsa}/?search=${inputValue}`, undefined, {
                    shallow: true
                });
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "flex items-center justify-center flex-col lg:flex-row lg:w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MainInput_MainInput, {
                value: inputValue,
                onChange: setInputValue,
                placeholder: "Введите название документа"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                onClick: handleClickSearchButton,
                type: "secondary",
                htmlType: "submit",
                className: "text-white gap-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: icons/* searchIcon */.RL,
                        alt: "Белая лупа"
                    }),
                    "НАЙТИ"
                ]
            })
        ]
    });
};
/* harmony default export */ const SearchBar_SearchBar = (SearchBar);

;// CONCATENATED MODULE: ./components/Main/MainButtons/MainButtons.jsx


const buttons = [
    {
        id: "ru",
        title: "Санкции РФ"
    },
    {
        id: "usa",
        title: "Санкции США"
    },
    {
        id: "eu",
        title: "Санкции ЕС"
    }
];
const MainButtons = ({ zone , setZone  })=>{
    const extraStyleForButton = (id)=>id === zone && `!bg-white-orange`;
    return /*#__PURE__*/ jsx_runtime_.jsx("article", {
        className: "flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5",
        children: buttons.map((button)=>/*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                onClick: ()=>setZone(button.id),
                className: extraStyleForButton(button.id),
                type: "rounded",
                children: button.title
            }, button.id))
    });
};
/* harmony default export */ const MainButtons_MainButtons = (MainButtons);

;// CONCATENATED MODULE: ./components/Main/Main.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Main = ({ searchingZone , searchingZoneTitle  })=>{
    const [zone, setZone] = (0,react_.useState)(searchingZone ?? "ru");
    const classForTitle = searchingZoneTitle && "mx-auto";
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "flex items-center justify-center w-full mt-5",
        style: {
            background: `url('${_5583949_1.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[88%] my-[50px] mx-auto flex items-center justify-center flex-col lg:items-start",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ui_Title, {
                    className: `mb-10 lg:mb-5 ${classForTitle}`,
                    children: searchingZoneTitle || "поиск документа"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    className: "lg:w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SearchBar_SearchBar, {
                            searchingZone: zone
                        }),
                        !searchingZone && /*#__PURE__*/ jsx_runtime_.jsx(MainButtons_MainButtons, {
                            zone: zone,
                            setZone: setZone
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Main_Main = (Main);


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


/***/ }),

/***/ 8926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Desktop\sansearch\components\Main\Main.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;