exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 5060:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9309));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2532));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5297));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3720));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 53, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3829));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1321))

/***/ }),

/***/ 4914:
/***/ (() => {



/***/ }),

/***/ 3829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2454);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useFindUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7941);
/* harmony import */ var _utils_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3776);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const FooterButton = ()=>{
    const user = (0,_hooks_useFindUser__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: user ? _utils_links__WEBPACK_IMPORTED_MODULE_4__/* ["default"].mainpage */ .Z.mainpage : _utils_links__WEBPACK_IMPORTED_MODULE_4__/* ["default"].login */ .Z.login,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            type: "secondary",
            className: "text-[#fff]",
            children: user ? "Найти" : "Войти"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterButton);


/***/ }),

/***/ 8488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4956);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const BurgerCloseButton = ({ className , close  })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: _images_icons__WEBPACK_IMPORTED_MODULE_2__/* .closeCross */ .pD,
        alt: "Черный крестик",
        className: className,
        onClick: ()=>{
            if (close) {
                close();
            } else {
                router.back();
            }
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerCloseButton);


/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const HeaderLink = ({ children , href , close , className  })=>{
    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            className: "text-[18px]" + ` ${path === href ? "border-b-[2px] border-[#FFC56D] " : ""}`,
            onClick: ()=>{
                if (close) {
                    close();
                }
            },
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderLink);


/***/ }),

/***/ 9309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HeaderLoginButton_HeaderLoginButton)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./images/icons/index.js + 6 modules
var icons = __webpack_require__(4956);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: ./services/reducers/User.js
var User = __webpack_require__(7432);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./utils/token.js
var token = __webpack_require__(8823);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/links.js
var links = __webpack_require__(3776);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 12 modules
var menu = __webpack_require__(6183);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 5 modules
var transition = __webpack_require__(2189);
;// CONCATENATED MODULE: ./components/Header/HeaderLoginButton/Dropdown/Dropdown.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Dropdown = ({ user  })=>{
    const exitProfile = ()=>{
        token/* default.logOut */.Z.logOut();
        window.history.pushState("", "", links/* default.mainpage */.Z.mainpage);
        window.location.reload();
    };
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
        as: "div",
        className: "relative hidden lg:inline-block text-left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden lg:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Button */.v.Button, {
                    className: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 hover:bg-gray-50",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hidden lg:flex-center gap-[22px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[18px] text-[#939393]",
                                children: user.username
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: icons/* profileIcon */.Zu,
                                alt: "Торс человечка внутри кружка"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                as: react_.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Items */.v.Items, {
                    className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "py-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: links/* default.profile */.Z.profile,
                                        className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                        children: "Личный кабинет"
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: links/* default.controlTest */.Z.controlTest,
                                        className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                        children: "Тест ЕС - критерий контроля"
                                    })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block w-full px-4 py-2 text-left text-sm"),
                                        onClick: exitProfile,
                                        children: "Выйти"
                                    })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Dropdown_Dropdown = (Dropdown);

// EXTERNAL MODULE: ./components/Header/HeaderLink/HeaderLink.jsx
var HeaderLink = __webpack_require__(2532);
;// CONCATENATED MODULE: ./components/Header/HeaderLoginButton/HeaderLoginButton.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const HeaderLoginButton = ({ children , burger , close  })=>{
    const { user  } = (0,lib.useSelector)((state)=>state.user);
    const router = (0,navigation.useRouter)();
    const dispatch = (0,lib.useDispatch)();
    if (user && close) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderLink["default"], {
                    href: links/* default.controlTest */.Z.controlTest,
                    close: close,
                    className: "list-none my-[-50px]",
                    children: "Тест ЕС - критерий контроля"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-center gap-[6px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: links/* default.profile */.Z.profile,
                            className: "text-[#939393] text-[18px]",
                            onClick: ()=>{
                                close();
                            },
                            children: user.username
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: icons/* exitButton */.$r,
                            alt: "стрелочка смотрит в сторону квадратика",
                            onClick: ()=>{
                                dispatch((0,User/* setUser */.a)(null));
                                token/* default.logOut */.Z.logOut();
                                close();
                                router.push(links/* default.mainpage */.Z.mainpage);
                                window.location.reload();
                            }
                        })
                    ]
                })
            ]
        });
    }
    if (user) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Dropdown_Dropdown, {
            user: user
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: links/* default.login */.Z.login,
            className: `bg-white-orange py-[11px] w-[120px] lg:flex items-center justify-center ${burger ? "flex" : "hidden"} hover:drop-shadow-roundedButton active:bg-darker-orange`,
            onClick: ()=>{
                if (close) {
                    close();
                }
            },
            children: children
        })
    });
};
/* harmony default export */ const HeaderLoginButton_HeaderLoginButton = (HeaderLoginButton);


/***/ }),

/***/ 5297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HeaderOpenBurgerButton_HeaderOpenBurgerButton)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./images/icons/index.js + 6 modules
var icons = __webpack_require__(4956);
// EXTERNAL MODULE: ./components/ui/Logo.jsx + 5 modules
var Logo = __webpack_require__(3720);
// EXTERNAL MODULE: ./components/Header/HeaderBurger/BurgerCloseButton/BurgerCloseButton.jsx
var BurgerCloseButton = __webpack_require__(8488);
// EXTERNAL MODULE: ./components/Header/HeaderLink/HeaderLink.jsx
var HeaderLink = __webpack_require__(2532);
;// CONCATENATED MODULE: ./components/Header/HeaderNavList/HeaderNavList.jsx


const HeaderNavList = ({ list , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: list.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(HeaderLink["default"], {
                href: item.link,
                close: close,
                children: item.name
            }, item.name);
        })
    });
};
/* harmony default export */ const HeaderNavList_HeaderNavList = (HeaderNavList);

// EXTERNAL MODULE: ./components/Header/HeaderLoginButton/HeaderLoginButton.jsx + 1 modules
var HeaderLoginButton = __webpack_require__(9309);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/Header/HeaderBurger/HeaderBurgerWrapper/HeaderBurgerWrapper.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const HeaderBurgerWrapper = ({ children  })=>{
    (0,react_.useEffect)(()=>{
        document.body.style.overflow = "hidden";
        return ()=>document.body.style.overflow = "unset";
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "w-full h-full fixed top-0 left-0 right-0 bg-white z-50",
        children: children
    });
};
/* harmony default export */ const HeaderBurgerWrapper_HeaderBurgerWrapper = (HeaderBurgerWrapper);

;// CONCATENATED MODULE: ./components/Header/HeaderBurger/HeaderBurger.jsx






const HeaderBurger = ({ close , list  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(HeaderBurgerWrapper_HeaderBurgerWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-[88%] flex items-center justify-center flex-col my-[25px] mx-auto gap-20",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    className: "flex items-center justify-between w-full",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo["default"], {
                            close: close
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(BurgerCloseButton["default"], {
                            close: close
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex items-center justify-center flex-col gap-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(HeaderNavList_HeaderNavList, {
                        list: list,
                        close: close
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderLoginButton["default"], {
                    href: "/",
                    burger: true,
                    close: close,
                    children: "Войти"
                })
            ]
        })
    });
};
/* harmony default export */ const HeaderBurger_HeaderBurger = (HeaderBurger);

;// CONCATENATED MODULE: ./components/Header/HeaderOpenBurgerButton/HeaderOpenBurgerButton.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const HeaderOpenBurgerButton = ({ list  })=>{
    const [isOpen, setIsOpen] = (0,react_.useState)(false);
    function closeBurgerMenu() {
        setIsOpen(false);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: icons/* burgerMenuIcon */.dC,
                alt: "Бургер меню - три короткие черные черточки",
                className: "lg:hidden",
                onClick: ()=>{
                    setIsOpen(true);
                }
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx(HeaderBurger_HeaderBurger, {
                list: list,
                close: closeBurgerMenu
            })
        ]
    });
};
/* harmony default export */ const HeaderOpenBurgerButton_HeaderOpenBurgerButton = (HeaderOpenBurgerButton);


/***/ }),

/***/ 1321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
// EXTERNAL MODULE: ./services/reducers/User.js
var User = __webpack_require__(7432);
;// CONCATENATED MODULE: ./services/store.js


const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        user: User/* default */.Z
    }
});
/* harmony default export */ const services_store = (store);

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./services/actions.js
var actions = __webpack_require__(9482);
// EXTERNAL MODULE: ./components/ui/Loader.jsx
var Loader = __webpack_require__(8973);
;// CONCATENATED MODULE: ./components/Providers/AuthProvider/AuthProvider.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const AuthProvider = ({ children  })=>{
    const dispatch = (0,lib.useDispatch)();
    const status = (0,lib.useSelector)((state)=>state.user.status);
    (0,react_.useEffect)(()=>{
        dispatch((0,actions/* fetchCurrentUser */.k)());
    }, [
        dispatch
    ]);
    if (status === "loading") {
        return /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "absolute top-0 left-0 h-full w-full flex-center",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Loader/* default */.Z, {
                className: "mt-[30px]"
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    });
};
/* harmony default export */ const AuthProvider_AuthProvider = (AuthProvider);

;// CONCATENATED MODULE: ./components/Providers/index.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Providers = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: services_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider_AuthProvider, {
            children: children
        })
    });
};
/* harmony default export */ const components_Providers = (Providers);


/***/ }),

/***/ 2454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
const Button = ({ children , onClick , className , htmlType ="button" , type ="primary" , disabled , required , ...rest })=>{
    if (type === "secondary") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "bg-white-orange flex items-center justify-center text-[20px] w-[280px] h-[40px] lg:w-[290px] lg:h-[60px] hover:drop-shadow-roundedButton active:bg-darker-orange" + ` ${className}`,
            type: htmlType,
            onClick: onClick,
            children: children
        });
    }
    if (type === "rounded") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: " w-[280px] lg:w-[120px] flex items-center justify-center py-3 text-sm leading-[14px] bg-white rounded-xl drop-shadow-roundedButton hover:bg-white-orange active:drop-shadow-none disabled:bg-transparent disabled:text-[#939393] disabled:border disabled:border-[#939393] disabled:border-solid" + ` ${className}`,
            type: htmlType,
            onClick: onClick,
            required: true,
            children: children
        });
    }
    if (type === "long") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            className: "text-[20px] w-[280px] h-[44px] mb-[16px] text-white-orange bg-white border-[1px] border-white-orange text-white md:rounded-[5px] xl:w-[416px]",
            ...rest,
            children: children
        });
    }
    if (type === "long-fill") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: onClick,
            className: "text-[20px] w-[280px] h-[44px] mb-[16px] bg-white-orange text-white disabled:text-white-black disabled:bg-white disabled:border-white-black disabled:border-[1px] md:rounded-[5px] xl:w-[416px]",
            disabled: disabled,
            ...rest,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "bg-white-orange flex items-center justify-center text-base leading-4 w-[120px] py-[11px] hover:drop-shadow-roundedButton active:bg-darker-orange" + ` ${className}`,
        type: htmlType,
        onClick: onClick,
        disabled: disabled,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 8973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9924);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @param {number}  size - размер лоадера
 * @param {string}  color - HEX-code цвета, пример: "#FFC56D"
 * @param {string}  className - стилизация для обертки над спиннером
 * @param {any}  rest - все остальное
 */ const Loader = ({ size =16 , color ="#FFC56D" , className , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full flex items-center justify-center ${className}`,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__.PulseLoader, {
            size: size,
            color: color
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 3720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_Logo)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./images/icons/logo/footerDesktop.svg
/* harmony default export */ const footerDesktop = ({"src":"/_next/static/media/footerDesktop.a72cdd8a.svg","height":59,"width":146,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/logo/footerMobile.svg
/* harmony default export */ const footerMobile = ({"src":"/_next/static/media/footerMobile.acb2b76f.svg","height":36,"width":81,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/logo/headerDesktop.svg
/* harmony default export */ const headerDesktop = ({"src":"/_next/static/media/headerDesktop.e4fc8fe5.svg","height":51,"width":127,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/logo/headerMobile.svg
/* harmony default export */ const headerMobile = ({"src":"/_next/static/media/headerMobile.d630c4c2.svg","height":36,"width":82,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/logo/index.js






// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ui/Logo.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Logo = ({ type ="primary" , href ="/" , close  })=>{
    if (type === "secondary") {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: href,
            onClick: ()=>{
                if (close) {
                    close();
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: footerMobile,
                    className: "md:hidden",
                    alt: "Логотип SanSearch - три книжки лежащие друг на друге и название компании"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: footerDesktop,
                    className: "hidden md:block",
                    alt: "Логотип SanSearch - три книжки лежащие друг на друге и название компании"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        onClick: ()=>{
            if (close) {
                close();
            }
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: headerMobile,
                className: "md:hidden",
                alt: "Логотип SanSearch - три книжки лежащие друг на друге и название компании"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: headerDesktop,
                className: "hidden md:block",
                alt: "Логотип SanSearch - три книжки лежащие друг на друге и название компании"
            })
        ]
    });
};
/* harmony default export */ const ui_Logo = (Logo);


/***/ }),

/***/ 7941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1560);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useFindUser = ()=>{
    const { user , status  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state)=>state.user);
    if (status === "loading") {
        return null;
    }
    if (!user && status === "resolved") {
        return null;
    }
    return user;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFindUser);


/***/ }),

/***/ 4956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dC": () => (/* reexport */ menu),
  "pD": () => (/* reexport */ icons_close),
  "m8": () => (/* reexport */ done),
  "$r": () => (/* reexport */ exitButton),
  "Zu": () => (/* reexport */ Profile_stroke),
  "RL": () => (/* reexport */ icons8_search_1)
});

;// CONCATENATED MODULE: ./images/icons/icons8-search 1.svg
/* harmony default export */ const icons8_search_1 = ({"src":"/_next/static/media/icons8-search 1.b66dcfe8.svg","height":20,"width":20,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/done.svg
/* harmony default export */ const done = ({"src":"/_next/static/media/done.ba8d67f0.svg","height":22,"width":26,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/menu.svg
/* harmony default export */ const menu = ({"src":"/_next/static/media/menu.5c5c11a1.svg","height":19,"width":37,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/close.svg
/* harmony default export */ const icons_close = ({"src":"/_next/static/media/close.c7731200.svg","height":28,"width":28,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/Profile-stroke.svg
/* harmony default export */ const Profile_stroke = ({"src":"/_next/static/media/Profile-stroke.68b45e14.svg","height":40,"width":40,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/exitButton.svg
/* harmony default export */ const exitButton = ({"src":"/_next/static/media/exitButton.250523f8.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/index.js









/***/ }),

/***/ 9482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ fetchCurrentUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2526);


const fetchCurrentUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("user/fetchCurrentUser", async ()=>{
    try {
        const responce = await _utils_auth__WEBPACK_IMPORTED_MODULE_0__/* ["default"].checkUser */ .Z.checkUser();
        if (responce.error) {
            return null;
        }
        return responce;
    } catch (error) {
        return null;
    }
});


/***/ }),

/***/ 7432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ setUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(668);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9482);


const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "user",
    initialState: {
        user: null,
        status: null
    },
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
        }
    },
    extraReducers: {
        [_actions__WEBPACK_IMPORTED_MODULE_0__/* .fetchCurrentUser.pending */ .k.pending]: (state)=>{
            state.status = "loading";
            state.error = null;
        },
        [_actions__WEBPACK_IMPORTED_MODULE_0__/* .fetchCurrentUser.fulfilled */ .k.fulfilled]: (state, action)=>{
            state.status = "resolved";
            state.user = action.payload;
        }
    }
});
const { setUser  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 2526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_auth)
});

// EXTERNAL MODULE: ./utils/links.js
var links = __webpack_require__(3776);
// EXTERNAL MODULE: ./utils/token.js
var token = __webpack_require__(8823);
;// CONCATENATED MODULE: ./utils/apiToken.js
const apiToken = `Bearer ${"9f1c0e11d151bef6a3c987d3670eeb015c2cd856337886a9ec8cf9ca456e7ab72823cdf96bef053584a31728544818566c66d5811a19bda2dc772cc2f932c7f0433daece538be83c8970c7987d5bbc9ccc34784e97d7c7db3b0df3facc1297de235292a9e05a68bc4bcde9217a7928a44a239d3f751b2f438dbfa8ea8b4bc5ad"}`;
/* harmony default export */ const utils_apiToken = (apiToken);

;// CONCATENATED MODULE: ./utils/auth.js



class Auth {
    constructor(){
        this._headers = {
            "Content-Type": "application/json",
            Authorization: utils_apiToken
        };
    }
    register(name, email, password) {
        return fetch(`${links/* default.backend */.Z.backend}/api/auth/local/register`, {
            method: "post",
            headers: this._headers,
            body: JSON.stringify({
                username: name,
                email: email,
                password: password
            })
        }).then((res)=>res.json());
    }
    login(email, password) {
        return fetch(`${links/* default.backend */.Z.backend}/api/auth/local`, {
            method: "post",
            headers: this._headers,
            body: JSON.stringify({
                identifier: email,
                password: password
            })
        }).then((res)=>res.json());
    }
    checkUser() {
        const access = token/* default.getAccesToken */.Z.getAccesToken();
        return fetch(`${links/* default.backend */.Z.backend}/api/users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access}`
            }
        }).then((res)=>res.json());
    }
    forgotPassword(email) {
        return fetch(`${links/* default.backend */.Z.backend}/api/auth/forgot-password`, {
            method: "post",
            headers: this._headers,
            body: JSON.stringify({
                email: email
            })
        }).then((res)=>res.json());
    }
    ResetPassword(code, password) {
        return fetch(`${links/* default.backend */.Z.backend}/api/auth/reset-password`, {
            method: "post",
            headers: this._headers,
            body: JSON.stringify({
                code: code,
                password: password,
                passwordConfirmation: password
            })
        }).then((res)=>res.json());
    }
    changeProfileData(data, id) {
        return fetch(`${links/* default.backend */.Z.backend}/api/users/${id}`, {
            method: "put",
            headers: this._headers,
            body: JSON.stringify(data)
        }).then((res)=>res.json());
    }
}
const auth = new Auth();
/* harmony default export */ const utils_auth = (auth);


/***/ }),

/***/ 3776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const links = {
    mainpage: "/",
    sanctionsRussia: "/sanctions/russia",
    sanctionsUsa: "/sanctions/usa",
    sanctionsES: "/sanctions/eu",
    about: "/about",
    profile: "/profile",
    document: "/document",
    privacy: "/privacy-policy",
    login: "/login",
    registration: "/register",
    forgotPassword: "/forgot-password",
    accessError: "/access-error",
    backend: "https://sansearch.ru/strapi",
    controlTest: "/control-test"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);


/***/ }),

/***/ 8823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Token {
    setAccessToken(token) {
        localStorage.setItem("access", token);
    }
    getAccesToken() {
        return localStorage.getItem("access");
    }
    logOut() {
        localStorage.clear();
    }
}
const token = new Token();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (token);


/***/ }),

/***/ 1697:
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

/***/ 9957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(5985);
;// CONCATENATED MODULE: ./components/ui/Logo.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\ui\Logo.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Logo = (__default__);
;// CONCATENATED MODULE: ./components/Header/HeaderLoginButton/HeaderLoginButton.jsx

const HeaderLoginButton_proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\Header\HeaderLoginButton\HeaderLoginButton.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: HeaderLoginButton_esModule, $$typeof: HeaderLoginButton_$$typeof } = HeaderLoginButton_proxy;
const HeaderLoginButton_default_ = HeaderLoginButton_proxy.default;


/* harmony default export */ const HeaderLoginButton = (HeaderLoginButton_default_);
// EXTERNAL MODULE: ./utils/links.js
var links = __webpack_require__(2966);
;// CONCATENATED MODULE: ./components/Header/HeaderLink/HeaderLink.jsx

const HeaderLink_proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\Header\HeaderLink\HeaderLink.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: HeaderLink_esModule, $$typeof: HeaderLink_$$typeof } = HeaderLink_proxy;
const HeaderLink_default_ = HeaderLink_proxy.default;


/* harmony default export */ const HeaderLink = (HeaderLink_default_);
;// CONCATENATED MODULE: ./components/Header/HeaderNavList/HeaderNavList.jsx


const HeaderNavList = ({ list , close  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: list.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(HeaderLink, {
                href: item.link,
                close: close,
                children: item.name
            }, item.name);
        })
    });
};
/* harmony default export */ const HeaderNavList_HeaderNavList = (HeaderNavList);

;// CONCATENATED MODULE: ./components/Header/HeaderOpenBurgerButton/HeaderOpenBurgerButton.jsx

const HeaderOpenBurgerButton_proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\Header\HeaderOpenBurgerButton\HeaderOpenBurgerButton.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: HeaderOpenBurgerButton_esModule, $$typeof: HeaderOpenBurgerButton_$$typeof } = HeaderOpenBurgerButton_proxy;
const HeaderOpenBurgerButton_default_ = HeaderOpenBurgerButton_proxy.default;


/* harmony default export */ const HeaderOpenBurgerButton = (HeaderOpenBurgerButton_default_);
;// CONCATENATED MODULE: ./components/Header/Header.jsx






const Header = ()=>{
    const menuList = [
        {
            name: "О сервисе",
            link: links/* default.mainpage */.Z.mainpage
        },
        {
            name: "Санкции РФ",
            link: links/* default.sanctionsRussia */.Z.sanctionsRussia
        },
        {
            name: "Санкции США",
            link: links/* default.sanctionsUsa */.Z.sanctionsUsa
        },
        {
            name: "Санкции ЕС",
            link: links/* default.sanctionsES */.Z.sanctionsES
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "w-[88%] my-0 mx-auto flex items-center justify-between mt-6 lg:w-[94%]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "w-2/4 hidden lg:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(HeaderNavList_HeaderNavList, {
                        list: menuList
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderOpenBurgerButton, {
                list: menuList
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderLoginButton, {
                href: "/",
                children: "Войти"
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2585);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer/FooterButton/FooterButton.jsx

const FooterButton_proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\Footer\FooterButton\FooterButton.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: FooterButton_esModule, $$typeof: FooterButton_$$typeof } = FooterButton_proxy;
const FooterButton_default_ = FooterButton_proxy.default;


/* harmony default export */ const FooterButton = (FooterButton_default_);
// EXTERNAL MODULE: ./utils/fetchData.js + 1 modules
var fetchData = __webpack_require__(807);
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx






const Footer = async ()=>{
    const policyUrl = await (0,fetchData/* getFileUrlForPrivacyDocuments */.D_)("policy");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "w-[88%] lg:w-[94%] my-0 mx-auto flex-center-col gap-[15px] lg:gap-5 mt-[30px] lg:mt-[57px] mb-2 lg:mb-7 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                type: "secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FooterButton, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                target: "_blank",
                href: links/* default.backend */.Z.backend + policyUrl,
                className: "text-[#939393]",
                children: "Политика конфиденциальности"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-[#000]",
                children: "\xa92023. SanSearch"
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Providers/index.jsx

const Providers_proxy = (0,module_proxy.createProxy)(String.raw`D:\Desktop\sansearch\components\Providers\index.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Providers_esModule, $$typeof: Providers_$$typeof } = Providers_proxy;
const Providers_default_ = Providers_proxy.default;


/* harmony default export */ const Providers = (Providers_default_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
;// CONCATENATED MODULE: ./app/layout.js





const metadata = {
    title: "SanSearch",
    description: "Сайт по поиску юридических документов"
};
function RootLayout({ children , auth  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "ru",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "font-text",
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Providers, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
                    children,
                    auth,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fJ": () => (/* binding */ fetchDocument),
  "Dh": () => (/* binding */ fetchDocuments),
  "qm": () => (/* binding */ getFileUrl),
  "D_": () => (/* binding */ getFileUrlForPrivacyDocuments)
});

;// CONCATENATED MODULE: ./utils/apiToken.js
const apiToken = `Bearer ${"9f1c0e11d151bef6a3c987d3670eeb015c2cd856337886a9ec8cf9ca456e7ab72823cdf96bef053584a31728544818566c66d5811a19bda2dc772cc2f932c7f0433daece538be83c8970c7987d5bbc9ccc34784e97d7c7db3b0df3facc1297de235292a9e05a68bc4bcde9217a7928a44a239d3f751b2f438dbfa8ea8b4bc5ad"}`;
/* harmony default export */ const utils_apiToken = (apiToken);

// EXTERNAL MODULE: ./utils/links.js
var links = __webpack_require__(2966);
;// CONCATENATED MODULE: ./utils/fetchData.js


async function fetchDocument(id) {
    const resp = await fetch(`${links/* default.backend */.Z.backend}/api/documents/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: utils_apiToken
        },
        next: {
            revalidate: 60
        }
    });
    const json = await resp.json();
    const data = await json.data;
    return data;
}
async function fetchDocuments(zone) {
    const resp = await fetch(`${links/* default.backend */.Z.backend}/api/documents`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: utils_apiToken
        },
        next: {
            revalidate: 60
        }
    });
    const data = await resp.json();
    const filterData = ()=>{
        const filteredData = data.data.filter((doc)=>doc.attributes.type === zone);
        return filteredData;
    };
    const filteredData = filterData();
    return filteredData;
}
async function getFileUrl(id) {
    const resp = await fetch(`${links/* default.backend */.Z.backend}/api/documents/${id}?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: utils_apiToken
        },
        next: {
            revalidate: 60
        }
    });
    const url = await resp.json().then((json)=>json.data).then((data)=>data.attributes).then((attributes)=>attributes.documentFile).then((dataFile)=>dataFile.data).then((fileAttributes)=>fileAttributes.attributes).then((url)=>url.url);
    return url;
}
/**
 * @param {string}  documentType - "policy" | "concentToData"
 */ async function getFileUrlForPrivacyDocuments(documentType) {
    const documentUrl = documentType === "policy" ? "confidential-policy" : "personal-data-processing";
    const resp = await fetch(`https://sansearch.ru/strapi/api/${documentUrl}/?populate=*`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: utils_apiToken
        },
        next: {
            revalidate: 60
        }
    });
    const url = await resp.json().then((json)=>json.data).then((data)=>data.attributes).then((attributes)=>attributes.pdfFile).then((pdfFile)=>pdfFile.data).then((fileAttributes)=>fileAttributes.attributes).then((url)=>url.url);
    return url;
}


/***/ }),

/***/ 2966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const links = {
    mainpage: "/",
    sanctionsRussia: "/sanctions/russia",
    sanctionsUsa: "/sanctions/usa",
    sanctionsES: "/sanctions/eu",
    about: "/about",
    profile: "/profile",
    document: "/document",
    privacy: "/privacy-policy",
    login: "/login",
    registration: "/register",
    forgotPassword: "/forgot-password",
    accessError: "/access-error",
    backend: "https://sansearch.ru/strapi",
    controlTest: "/control-test"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links);


/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2548);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;