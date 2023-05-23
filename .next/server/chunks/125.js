exports.id = 125;
exports.ids = [125];
exports.modules = {

/***/ 8910:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2144, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6551));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1818))

/***/ }),

/***/ 1818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchingDocument_SearchingDocument)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./utils/links.js
var links = __webpack_require__(3776);
;// CONCATENATED MODULE: ./components/SanctionsPage/SearchingDocument/SearchingDocumentList/SearchingDocumentItem/SearchingDocumentItem.jsx



const SearchingDocumentItem = ({ document  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "mb-[10px] lg:mb-[30px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: links/* default.document */.Z.document + "/" + document.id,
            className: "line-clamp-4 lg:line-clamp-2",
            children: [
                document?.attributes?.title && /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    className: "text-[14px] lg:text-[20px]",
                    children: document.attributes.title
                }),
                document?.attributes?.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "inline ml-[10px] text-[14px] lg:text-[20px]",
                    children: document.attributes.description
                })
            ]
        })
    });
};
/* harmony default export */ const SearchingDocumentItem_SearchingDocumentItem = (SearchingDocumentItem);

;// CONCATENATED MODULE: ./components/SanctionsPage/SearchingDocument/SearchingDocumentList/SearchingDocumentList.jsx


const SearchingDocumentList = ({ slicedDocuments  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "list-disc mt-[20px] mb-[40px]",
        children: slicedDocuments?.map((document)=>/*#__PURE__*/ jsx_runtime_.jsx(SearchingDocumentItem_SearchingDocumentItem, {
                document: document
            }, document.id))
    });
};
/* harmony default export */ const SearchingDocumentList_SearchingDocumentList = (SearchingDocumentList);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/ui/Pagination/PaginationButton/PaginationButton.jsx

const PaginationButton = ({ isCurrentPage , onClick , children , disabled =false , ...rest })=>{
    const classForButton = `flex items-center justify-center w-full h-full font-text text-[16px] leading-[20px] bg-white rounded-[2px] hover:border-[2px] hover:border-white-orange ${disabled && "hover:!border-white"}  ${isCurrentPage && "bg-white-orange hover:!border-white-orange"}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "flex items-center justify-center w-[32px] h-[32px] mx-[2px]  cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: classForButton,
            onClick: onClick,
            disabled: disabled,
            ...rest,
            children: children
        })
    });
};
/* harmony default export */ const PaginationButton_PaginationButton = (PaginationButton);

;// CONCATENATED MODULE: ./utils/paginate.js
const paginate = (documents, currentPage, documentsPerPage)=>{
    const lastDocumentIndex = currentPage * documentsPerPage;
    const firstDocumentIndex = lastDocumentIndex - documentsPerPage;
    const currentDocuments = documents.slice(firstDocumentIndex, lastDocumentIndex);
    // возвращаем массив элементов, согласно текущей странице в пагинации
    return currentDocuments;
};

;// CONCATENATED MODULE: ./utils/variables.js
const DOCUMENTS_PER_PAGE = 10;

;// CONCATENATED MODULE: ./images/icons/arrows/arrow-active.svg
/* harmony default export */ const arrow_active = ({"src":"/_next/static/media/arrow-active.3273d14a.svg","height":12,"width":8,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/arrows/arrow-disabled.svg
/* harmony default export */ const arrow_disabled = ({"src":"/_next/static/media/arrow-disabled.79e52e4f.svg","height":12,"width":8,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./images/icons/arrows/index.js




;// CONCATENATED MODULE: ./components/ui/Pagination/Pagination.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






/**
 * @param {Array<Object>}  documents - принимает массив документов.
 * @param {Function (number) => Array}  setSlicedDocuments - функкция, для изменения состояния КОПИИ документов.
 */ const Pagination = ({ documents , setSlicedDocuments  })=>{
    const [currentPage, setCurrentPage] = (0,react_.useState)(1);
    const pageNumbers = [];
    const paginatePage = (pageNumber)=>setCurrentPage(pageNumber);
    const totalPage = Math.ceil(documents.length / DOCUMENTS_PER_PAGE);
    for(let i = 1; i <= totalPage; i++){
        pageNumbers.push(i);
    }
    const handleClickPage = (number)=>{
        paginatePage(number);
        setSlicedDocuments(paginate(documents, number, DOCUMENTS_PER_PAGE));
    };
    (0,react_.useEffect)(()=>{
        setSlicedDocuments(paginate(documents, currentPage, DOCUMENTS_PER_PAGE));
    }, [
        currentPage
    ]);
    const renderPaginationButtons = ()=>{
        let pageNumbers = Array.from({
            length: totalPage
        }, (_, i)=>i + 1);
        if (totalPage > 7) {
            const showingTrimPage = 5;
            if (currentPage <= showingTrimPage - 1) {
                pageNumbers = [
                    ...pageNumbers.slice(0, showingTrimPage),
                    "...",
                    totalPage
                ];
            } else if (currentPage >= totalPage - showingTrimPage + 2) {
                pageNumbers = [
                    1,
                    "...",
                    ...pageNumbers.slice(-showingTrimPage)
                ];
            } else {
                pageNumbers = [
                    1,
                    "...",
                    ...pageNumbers.slice(currentPage - 2, currentPage + 1),
                    "...",
                    totalPage
                ];
            }
        }
        return pageNumbers.map((number, i)=>number === "..." ? /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton_PaginationButton, {
                disabled: true,
                children: number
            }, i) : /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton_PaginationButton, {
                onClick: ()=>handleClickPage(number),
                isCurrentPage: currentPage === number,
                disabled: currentPage === number,
                children: number
            }, i));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "flex items-center justify-center gap-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "flex flex-row items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton_PaginationButton, {
                    disabled: currentPage === 1,
                    onClick: ()=>paginatePage((prev)=>prev - 1),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "fill-green-500",
                        src: currentPage === 1 ? arrow_disabled : arrow_active,
                        alt: "стрелочка назад"
                    })
                }),
                renderPaginationButtons(),
                /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton_PaginationButton, {
                    disabled: currentPage === pageNumbers.length,
                    onClick: ()=>paginatePage((prev)=>prev + 1),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "scale-x-[-1]",
                        src: currentPage === pageNumbers.length ? arrow_disabled : arrow_active,
                        alt: "стрелочка вперед"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Pagination_Pagination = (Pagination);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./utils/filterData.js
const filterData = (documents, searchValue)=>{
    const includedValue = documents.filter((doc)=>{
        if (doc?.attributes?.title?.toLowerCase().includes(searchValue.toLowerCase()) || doc?.attributes?.description?.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false;
    });
    return includedValue;
};

;// CONCATENATED MODULE: ./components/SanctionsPage/SearchingDocument/SearchTitle/SearchTitle.jsx

const SearchTitle = ({ search  })=>{
    if (search) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            className: "text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]",
            children: [
                "Результаты поиска по запросу: ",
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    children: search
                })
            ]
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: "text-[20px] mt-[-26px] mb-[20px] lg:mt-[-52px] lg:text-[28px]",
        children: "Результаты поиска"
    });
};
/* harmony default export */ const SearchTitle_SearchTitle = (SearchTitle);

;// CONCATENATED MODULE: ./components/SanctionsPage/SearchingDocument/SearchingDocument.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const SearchingDocument = ({ documents  })=>{
    const [updatedDocuments, setUpdatedDocuments] = (0,react_.useState)(documents);
    const [slicedDocuments, setSlicedDocuments] = (0,react_.useState)(updatedDocuments.slice(0, DOCUMENTS_PER_PAGE));
    const params = (0,navigation.useSearchParams)();
    const search = params.get("search");
    (0,react_.useEffect)(()=>{
        if (search === null) {
            return;
        }
        const updatedDocumentsAfterSearch = filterData(documents, search);
        setSlicedDocuments(updatedDocumentsAfterSearch.slice(0, DOCUMENTS_PER_PAGE));
        setUpdatedDocuments(updatedDocumentsAfterSearch);
    }, [
        search
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-[88%] mx-auto",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchTitle_SearchTitle, {
                search: search
            }),
            slicedDocuments.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Документов не найдено"
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchingDocumentList_SearchingDocumentList, {
                        slicedDocuments: slicedDocuments
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pagination_Pagination, {
                        documents: updatedDocuments,
                        setSlicedDocuments: setSlicedDocuments
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const SearchingDocument_SearchingDocument = (SearchingDocument);


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Desktop\sansearch\components\SanctionsPage\SearchingDocument\SearchingDocument.jsx`)

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