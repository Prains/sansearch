"use strict";
exports.id = 366;
exports.ids = [366];
exports.modules = {

/***/ 5504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendPost = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(2990);
const store_1 = __webpack_require__(4190);
const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(target));
        });
        xhr.open('POST', store_1.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};
exports.sendPost = sendPost;


/***/ }),

/***/ 8808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
const init_1 = __webpack_require__(563);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return init_1.init; } });
const send_1 = __webpack_require__(9209);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return send_1.send; } });
const sendForm_1 = __webpack_require__(1453);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return sendForm_1.sendForm; } });
exports.ZP = {
    init: init_1.init,
    send: send_1.send,
    sendForm: sendForm_1.sendForm,
};


/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const store_1 = __webpack_require__(4190);
/**
 * Initiation
 * @param {string} publicKey - set the EmailJS public key
 * @param {string} origin - set the EmailJS origin
 */
const init = (publicKey, origin = 'https://api.emailjs.com') => {
    store_1.store._userID = publicKey;
    store_1.store._origin = origin;
};
exports.init = init;


/***/ }),

/***/ 1453:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendForm = void 0;
const store_1 = __webpack_require__(4190);
const validateParams_1 = __webpack_require__(2686);
const sendPost_1 = __webpack_require__(5504);
const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, publicKey) => {
    const uID = publicKey || store_1.store._userID;
    const currentForm = findHTMLForm(form);
    (0, validateParams_1.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.11.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send-form', formData);
};
exports.sendForm = sendForm;


/***/ }),

/***/ 9209:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.send = void 0;
const store_1 = __webpack_require__(4190);
const validateParams_1 = __webpack_require__(2686);
const sendPost_1 = __webpack_require__(5504);
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, publicKey) => {
    const uID = publicKey || store_1.store._userID;
    (0, validateParams_1.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.11.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};
exports.send = send;


/***/ }),

/***/ 2990:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse ? httpResponse.status : 0;
        this.text = httpResponse ? httpResponse.responseText : 'Network Error';
    }
}
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 4190:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
exports.store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ 2686:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateParams = void 0;
const validateParams = (publicKey, serviceID, templateID) => {
    if (!publicKey) {
        throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};
exports.validateParams = validateParams;


/***/ })

};
;