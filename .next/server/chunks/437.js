exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 589:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6551));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5259));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 115));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 408, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 921));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3099));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4806));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2622))

/***/ }),

/***/ 8585:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9222, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3751, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8301, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5192, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4765, 23))

/***/ }),

/***/ 5259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3776);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2454);
/* harmony import */ var _hooks_useFindUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7941);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const AdvantageButton = ()=>{
    const user = (0,_hooks_useFindUser__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: user ? _utils_links__WEBPACK_IMPORTED_MODULE_1__/* ["default"].mainpage */ .Z.mainpage : _utils_links__WEBPACK_IMPORTED_MODULE_1__/* ["default"].login */ .Z.login,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            type: "secondary",
            className: "text-white uppercase",
            children: "Попробовать"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvantageButton);


/***/ }),

/***/ 115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdvantageList_AdvantageList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./images/icons/index.js + 6 modules
var icons = __webpack_require__(4956);
;// CONCATENATED MODULE: ./components/MainPage/Advantage/AdvantageList/AdvantageListItem/AdvantageListItem.jsx



const AdvantageListItem = ({ text  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "flex flex-row items-start mb-[18px] last:mb-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: "w-[20px] h-[20px] mt-[4px] mr-[9px] lg:h-[26px] lg:w-[26px] lg:mr-[18px]",
                src: icons/* doneSvg */.m8,
                alt: "начало пункта в виде галочки"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-[16px] leading-[156%] lg:text-[24px]",
                children: text
            })
        ]
    });
};
/* harmony default export */ const AdvantageListItem_AdvantageListItem = (AdvantageListItem);

;// CONCATENATED MODULE: ./components/MainPage/Advantage/AdvantageList/AdvantageList.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const AdvantageList = ({ list  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "max-w-[90%] mt-[28px] mb-[30px] lg:my-[52px]",
        children: list?.map((advantage, i)=>/*#__PURE__*/ jsx_runtime_.jsx(AdvantageListItem_AdvantageListItem, {
                text: advantage
            }, i))
    });
};
/* harmony default export */ const AdvantageList_AdvantageList = (AdvantageList);


/***/ }),

/***/ 2143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Default = ()=>{
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);


/***/ }),

/***/ 6399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./components/ui/Subtitle.jsx

const Subtitle = ({ children , className , type ="primary"  })=>{
    if (type === "secondary") {
        return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
            className: "font-bold text-base leading-4" + ` ${className}`,
            children: children
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
        className: "text-[24px] leading-[130%] uppercase lg:text-[36px] " + ` ${className}`,
        children: children
    });
};
/* harmony default export */ const ui_Subtitle = (Subtitle);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./components/MainPage/Advantage/AdvantageList/AdvantageList.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\MainPage\Advantage\AdvantageList\AdvantageList.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const AdvantageList = (__default__);
;// CONCATENATED MODULE: ./components/MainPage/Advantage/AdvantageButton/AdvantageButton.jsx

const AdvantageButton_proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\MainPage\Advantage\AdvantageButton\AdvantageButton.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AdvantageButton_esModule, $$typeof: AdvantageButton_$$typeof } = AdvantageButton_proxy;
const AdvantageButton_default_ = AdvantageButton_proxy.default;


/* harmony default export */ const AdvantageButton = (AdvantageButton_default_);
;// CONCATENATED MODULE: ./components/MainPage/Advantage/Advantage.jsx




const Advantage = ()=>{
    const advantages = [
        "Просмотр санкционных документов РФ, США, ЕС (включая разъяснения)",
        "Просмотр торговых ограничений РФ, США, ЕС",
        "Расчёт критерия контроля (ЕС)",
        "Расчёт критерия владения (критерий 50%)",
        "Проверка факта включения в санкционные списки"
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full pb-[30px] pt-[28px] bg-silver bg-no-repeat bg-cover bg-center lg:pt-[58px] lg:pb-[53px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "flex flex-col items-center w-[75%] mx-auto lg:w-[87%] lg:items-start",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ui_Subtitle, {
                    children: "Возможности"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AdvantageList, {
                    list: advantages
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(AdvantageButton, {})
            ]
        })
    });
};
/* harmony default export */ const Advantage_Advantage = (Advantage);

// EXTERNAL MODULE: ./components/Main/Main.jsx
var Main = __webpack_require__(8926);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(4212);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2208);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/MainPage/Valueables/VBlock/VBlock.jsx



const VBlock = ({ image , title , subtitle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "w-[280px] flex items-center justify-center flex-col gap-2 p-10 bg-white-grey rounded-2xl h-[240px] lg:h-[270px] lg:w-1/4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: image,
                alt: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_Subtitle, {
                type: "secondary",
                className: "text-center",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center leading-[15px] text-[12px] lg:text-[14px] lg:leading-[17px]",
                children: subtitle
            })
        ]
    });
};
/* harmony default export */ const VBlock_VBlock = (VBlock);

;// CONCATENATED MODULE: ./images/Mainpage/Valueables/access-card-form-svgrepo-com 1.svg
/* harmony default export */ const access_card_form_svgrepo_com_1 = ({"src":"/_next/static/media/access-card-form-svgrepo-com 1.8107b20c.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/Mainpage/Valueables/internet-speed-svgrepo-com 1.svg
/* harmony default export */ const internet_speed_svgrepo_com_1 = ({"src":"/_next/static/media/internet-speed-svgrepo-com 1.ee750226.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/Mainpage/Valueables/platform-program-svgrepo-com.svg
/* harmony default export */ const platform_program_svgrepo_com = ({"src":"/_next/static/media/platform-program-svgrepo-com.4c5ba009.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/Mainpage/Valueables/financial-report-svgrepo-com 1.svg
/* harmony default export */ const financial_report_svgrepo_com_1 = ({"src":"/_next/static/media/financial-report-svgrepo-com 1.b6c9bbdf.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/Mainpage/Valueables/index.js






;// CONCATENATED MODULE: ./components/MainPage/Valueables/Valueables.jsx





const Valueables = ()=>{
    const blockData = [
        {
            image: access_card_form_svgrepo_com_1,
            title: "Удобство",
            subtitle: "Поиск санкционных документов РФ, США, ЕС на одном ресурсе"
        },
        {
            image: internet_speed_svgrepo_com_1,
            title: "Время",
            subtitle: "Быстрый анализ информации относительно введенных ограничений"
        },
        {
            image: platform_program_svgrepo_com,
            title: "Доступность",
            subtitle: "Возможность доступа к информации в любое время"
        },
        {
            image: financial_report_svgrepo_com_1,
            title: "Снижение рисков",
            subtitle: "Помогаем найти нужную информацию для минимизации Ваших рисков"
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "w-[75%] lg:w-[87%] mx-auto my-0 flex items-center justify-center flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ui_Subtitle, {
                className: "w-[200px] mb-[15px] text-center lg:text-left lg:w-max lg:self-start",
                children: "наши ценности"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex items-center justify-center flex-col gap-5 lg:flex-row lg:gap-9",
                children: blockData.map((block)=>{
                    return /*#__PURE__*/ (0,react_shared_subset.createElement)(VBlock_VBlock, {
                        ...block,
                        key: block.title
                    });
                })
            })
        ]
    });
};
/* harmony default export */ const Valueables_Valueables = (Valueables);

;// CONCATENATED MODULE: ./app/page.js




function Home() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "flex items-center justify-center flex-col gap-[38px] lg:gap-[90px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Main/* default */.ZP, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Valueables_Valueables, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Advantage_Advantage, {})
        ]
    });
}


/***/ }),

/***/ 3881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy  } = __webpack_require__(5985);
module.exports = createProxy("D:\\Desktop\\sansearch\\node_modules\\next\\dist\\client\\image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 2208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(3881);


/***/ }),

/***/ 3099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/access-card-form-svgrepo-com 1.8107b20c.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 2622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/financial-report-svgrepo-com 1.b6c9bbdf.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/internet-speed-svgrepo-com 1.ee750226.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 4806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/platform-program-svgrepo-com.4c5ba009.svg","height":100,"width":100,"blurWidth":0,"blurHeight":0});

/***/ })

};
;