webpackJsonp([0,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_backend__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_post_data__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_post_config__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_post_comment__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__test_test__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_file__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_meta__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_category__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_progress__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_custom_browser_xhr__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__interface__, "_COMMENT")) __webpack_require__.d(__webpack_exports__, "_COMMENT", function() { return __WEBPACK_IMPORTED_MODULE_13__interface__["_COMMENT"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__interface__, "_POST")) __webpack_require__.d(__webpack_exports__, "_POST", function() { return __WEBPACK_IMPORTED_MODULE_13__interface__["_POST"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__interface__, "_POST_LIST_RESPONSE")) __webpack_require__.d(__webpack_exports__, "_POST_LIST_RESPONSE", function() { return __WEBPACK_IMPORTED_MODULE_13__interface__["_POST_LIST_RESPONSE"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__interface__, "ERROR_WRONG_SESSION_ID")) __webpack_require__.d(__webpack_exports__, "ERROR_WRONG_SESSION_ID", function() { return __WEBPACK_IMPORTED_MODULE_13__interface__["ERROR_WRONG_SESSION_ID"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__define__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ERROR_WRONG_SESSION_ID", function() { return __WEBPACK_IMPORTED_MODULE_14__define__["i"]; });
/* unused harmony reexport Backend */
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__model_user__, "User")) __webpack_require__.d(__webpack_exports__, "User", function() { return __WEBPACK_IMPORTED_MODULE_2__model_user__["User"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__model_post_config__, "PostConfig")) __webpack_require__.d(__webpack_exports__, "PostConfig", function() { return __WEBPACK_IMPORTED_MODULE_4__model_post_config__["PostConfig"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__model_post_data__, "PostData")) __webpack_require__.d(__webpack_exports__, "PostData", function() { return __WEBPACK_IMPORTED_MODULE_3__model_post_data__["PostData"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__model_post_comment__, "PostComment")) __webpack_require__.d(__webpack_exports__, "PostComment", function() { return __WEBPACK_IMPORTED_MODULE_5__model_post_comment__["PostComment"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__model_file__, "File")) __webpack_require__.d(__webpack_exports__, "File", function() { return __WEBPACK_IMPORTED_MODULE_7__model_file__["File"]; });
/* unused harmony reexport Meta */
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__model_category__, "Category")) __webpack_require__.d(__webpack_exports__, "Category", function() { return __WEBPACK_IMPORTED_MODULE_9__model_category__["Category"]; });
/* unused harmony reexport Test */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBackend", function() { return AngularBackend; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AngularBackend = (function () {
    function AngularBackend() {
    }
    return AngularBackend;
}());
AngularBackend = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [],
        imports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_1__model_backend__["Backend"],
            __WEBPACK_IMPORTED_MODULE_2__model_user__["User"],
            __WEBPACK_IMPORTED_MODULE_4__model_post_config__["PostConfig"],
            __WEBPACK_IMPORTED_MODULE_3__model_post_data__["PostData"],
            __WEBPACK_IMPORTED_MODULE_5__model_post_comment__["PostComment"],
            __WEBPACK_IMPORTED_MODULE_6__test_test__["a" /* Test */],
            __WEBPACK_IMPORTED_MODULE_7__model_file__["File"],
            __WEBPACK_IMPORTED_MODULE_8__model_meta__["Meta"],
            __WEBPACK_IMPORTED_MODULE_9__model_category__["Category"],
            __WEBPACK_IMPORTED_MODULE_10__services_progress__["a" /* ProgressService */],
            { provide: __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_12__services_custom_browser_xhr__["a" /* CustomBrowserXhr */] }]
    })
], AngularBackend);

//# sourceMappingURL=angular-backend.js.map

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export HEADER_HEIGHT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HEADER_HEIGHT = 120;
var App = (function () {
    function App(ngZone) {
        this.ngZone = ngZone;
        this.width = 0;
        this.scrollId = null;
        this.myEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    /**
    * Everytime window resizes, this is set.
    */
    App.prototype.setWidth = function (width) {
        this.width = width;
        this.renderPage();
        // console.log("setWidth(): ", this.width);
    };
    App.prototype.renderPage = function () {
        this.ngZone.run(function () {
            // console.log('ngZone.run()');
        });
    };
    App.prototype.getWidth = function () {
        return this.width;
    };
    Object.defineProperty(App.prototype, "widthSize", {
        get: function () {
            var size = 'small';
            if (this.getWidth() >= 768)
                size = 'big';
            // console.log('size: ', size);
            return size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App.prototype, "marginTop", {
        get: function () {
            return HEADER_HEIGHT;
            // let margin_top = HEADER_HEIGHT;
            // if ( this.widthSize == 'big' ) margin_top += BIG_HEADER_HEIGHT;
            // return margin_top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @warning This may return false if this is called before 'deviceready'event fired.
     *  so, be sure you call it after 'deviceready' event.
     */
    App.prototype.isCordova = function () {
        if (!!window['cordova'])
            return true;
        if (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1)
            return true;
        return false;
    };
    /**
     * @note No need to cache for speedup since it is only being called once every bounce time.
     */
    App.prototype.scrolled = function (event) {
        // console.log(event);
        var windowTop = this.getWindowOffset().top;
        // console.log(`windows offset: `, windowTop);
        var selectedId = null;
        var parts = this.getParts();
        // console.log(parts);
        if (parts && parts.length) {
            for (var i = 0, len = parts.length; i < len; i++) {
                var part = parts[i];
                selectedId = part.id;
                if (i < len - 1) {
                    var nextPart = parts[i + 1];
                    if (nextPart.top > windowTop + this.marginTop)
                        break;
                }
                // console.log( 'id:' + part.id + ', pos: ', pos);
            }
        }
        // console.log('selected: ', selectedId);
        this.scrollId = selectedId;
        this.renderPage();
        // console.log( this.getOffset(parts) );
    };
    /**
     * Returns the array of 'section#names' and its top position in the document.
     *
     */
    App.prototype.getParts = function () {
        var nodes = document.querySelectorAll('section.part');
        var nodesArray = Array.from(nodes);
        var parts = [];
        if (nodesArray && nodesArray.length) {
            for (var i = 0, len = nodesArray.length; i < len; i++) {
                var el = nodesArray[i];
                var pos = this.getOffset(el);
                if (el.id == 'intro')
                    pos.top = 0;
                parts.push({ id: el.id, top: pos.top });
            }
        }
        return parts;
    };
    App.prototype.scrollTo = function (id) {
        var parts = this.getParts();
        // console.log(parts);
        if (parts && parts.length) {
            for (var i = 0, len = parts.length; i < len; i++) {
                if (parts[i]['id'] == id) {
                    console.log("parts:i, ", parts[i]);
                    //  window.scrollTo( 0, parts[i]['top'] - HEADER_HEIGHT+1 );
                    this.scrollToY(parts[i]['top'] - HEADER_HEIGHT + 1, 2000, 'easeInOutQuint');
                    break;
                }
            }
        }
        return;
    };
    /**
     * To get offset of an element.
     */
    App.prototype.getOffset = function (el) {
        el = el.getBoundingClientRect();
        return {
            left: Math.round(el.left + window.pageYOffset),
            top: Math.round(el.top + window.pageYOffset)
        };
    };
    App.prototype.getWindowOffset = function () {
        return {
            top: window.pageYOffset || document.documentElement.scrollTop,
            left: window.pageXOffset || document.documentElement.scrollLeft
        };
    };
    App.prototype.alert = function (str) {
        alert(str);
    };
    /**
    *
    *
    * @code
    *          this.scrollToY( parts[i]['top'] - HEADER_HEIGHT );
    *          scrollToY(0, 1500, 'easeInOutQuint');
    * @endcode
    *
    * @attention the speed and ease does not look like working.
    * @param speed -
    * @param easing - easeOutSine, easeInOutSine, easeInOutQuint
    */
    App.prototype.scrollToY = function (scrollTargetY, speed, easing) {
        // first add raf shim
        // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
        window['requestAnimFrame'] = (function () {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window['mozRequestAnimationFrame'] ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
        // scrollTargetY: the target scrollY property of the window
        // speed: time in pixels per second
        // easing: easing equation to use
        var scrollY = window.pageYOffset, scrollTargetY = scrollTargetY || 0, speed = speed || 2000, easing = easing || 'easeOutSine', currentTime = 0;
        // min time .1, max time .8 seconds
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
        // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        var easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };
        // add animation loop
        function tick() {
            currentTime += 1 / 60;
            var p = currentTime / time;
            var t = easingEquations[easing](p);
            if (p < 1) {
                window['requestAnimFrame'](tick);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            }
            else {
                console.log('scroll done');
                window.scrollTo(0, scrollTargetY);
            }
        }
        // call it once to get started
        tick();
    };
    return App;
}());
App = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === "function" && _a || Object])
], App);

var _a;
//# sourceMappingURL=app.js.map

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ERROR_JSON_PARSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ERROR_NO_ERROR_CODE; });
/* unused harmony export ERROR_NO_INTERNET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ERROR_TIMEOUT; });
/* unused harmony export ERROR_MC_IS_EMPTY */
/* unused harmony export ERROR_INTERNAL_SERVER_ERROR */
/* unused harmony export ERROR_SESSION_ID_EXIST */
/* unused harmony export ERROR_USER_NOT_FOUND */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ERROR_WRONG_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ERROR_WRONG_SESSION_ID_NO_USER_DATA_BY_THAT_SESSION_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_KEY_SESSION_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ERROR_NO_FILE_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RES_ERROR_NO_FILE_SELECTED; });
/* unused harmony export ERROR_DISCONNECTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RES_ERROR_DISCONNECTED; });
var ERROR_JSON_PARSE = 'json-parse-error--maybe-server-error--maybe-php-error';
var ERROR_NO_ERROR_CODE = "no-error-code-on-isError()-is-considered-as-an-error";
var ERROR_NO_INTERNET = 'You have no Internet. Or the Internet is very slow.';
var ERROR_TIMEOUT = 'http-get-post-request-timeout';
var ERROR_MC_IS_EMPTY = 'mc-is-empty';
var ERROR_INTERNAL_SERVER_ERROR = 'internal-server-error';
var ERROR_SESSION_ID_EXIST = 'error-session-id-must-not-be-submitted';
var ERROR_USER_NOT_FOUND = -40108;
var ERROR_WRONG_SESSION_ID = -401081;
var ERROR_WRONG_SESSION_ID_NO_USER_DATA_BY_THAT_SESSION_ID = ERROR_WRONG_SESSION_ID;
var API_KEY_SESSION_INFO = 'user-session-id';
/**
 *
 *      N E W   E R R O R   RESPONSES
 *
 *
 */
var ERROR_NO_FILE_SELECTED = -40010;
var RES_ERROR_NO_FILE_SELECTED = { code: ERROR_NO_FILE_SELECTED, message: "no-file-selected-to-upload" };
var ERROR_DISCONNECTED = -80011;
var RES_ERROR_DISCONNECTED = { code: ERROR_DISCONNECTED, message: 'You have no internet. Please check if you are online.' };
//# sourceMappingURL=define.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { KEY_SESSION_ID } from './defines';
var User = (function (_super) {
    __extends(User, _super);
    function User(http) {
        return _super.call(this, http, 'user') || this;
    }
    /**
     *
     *
     * Gets user data from backend.
     *
     * @note User can only get his data. so, no need to get 'session_id' as parameter. Just get it from localStorage.
     *
     *
     * @code

        let req : USER_REGISTER_REQUEST_DATA = {
            id:         this.id,
            password:   this.password,
            name:       this.name,
            nickname:   this.nickname,
            email:      this.email,
            mobile:     this.mobile,
            landline:   this.landline,
            gender:     this.gender,
            birthday:   this.birthday,
            meta:       {
                type: this.type,
                classid: 'my-skype-id'
            }
        }
        console.log(req);
        this.user.register( req, ( res: USER_REGISTER_RESPONSE_DATA ) => {
            console.info('register success: ', res);
        },
        error => alert(error),
        () => console.log('user registration complete') );

     * @endcode
     */
    User.prototype.data = function (id) {
        // if id is empty, it will get self data.
        // if ( id === void 0 ) id = this.info.id;
        if (this.logged == false)
            return this.error(-420, 'login-first-before-get-user-info');
        return _super.prototype.data.call(this, id);
    };
    User.prototype.register = function (req) {
        var _this = this;
        if (req.id === void 0 || !req.id)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(this.errorResponse(-4291, 'user-id-is-required-for-register'));
        if (req.password === void 0 || req.password.length < 5)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(this.errorResponse(-4292, 'password-is-required-and-must-be-at-least-5-characters-long-for-register'));
        req.route = 'register';
        return this.post(req)
            .map(function (res) {
            _this.setSessionInfo(res);
            return res;
        });
    };
    User.prototype.edit = function (req) {
        var _this = this;
        console.log('edit::req', req);
        if (this.logged == false)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(this.errorResponse(-421, 'login-first-before-edit'));
        // if ( req['id'] !== void 0 ) return Observable.throw( this.errorResponse( -422, 'id-has-passed-over-form-submission--user-cannot-edit-id') );
        if (req['password'] !== void 0)
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(this.errorResponse(-423, 'password-has-passed-over-form-submission--user-cannot-edit-password-on-edit-form'));
        return _super.prototype.edit.call(this, req)
            .map(function (res) {
            //console.log('edit res: ', res );
            _this.setSessionInfo(res);
            return res;
        });
    };
    User.prototype.login = function (req) {
        var _this = this;
        req.route = 'login';
        return this.post(req)
            .map(function (res) {
            _this.setSessionInfo(res);
            return res;
        });
    };
    User.prototype.logout = function () {
        var req = {
            route: 'logout'
        };
        var observable = this.post(req);
        this.deleteSessionInfo();
        return observable;
    };
    User.prototype.changePassword = function (req) {
        var _this = this;
        req.route = 'change_password';
        return this.post(req)
            .map(function (res) {
            _this.deleteSessionInfo();
            return res;
        });
    };
    return User;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
User = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], User);

var _a;
//# sourceMappingURL=user.js.map

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

;
;
;
;
;
;
; // universal. all kinds of delete requst.
;
; // universal. all kinds of delete response.
;
;
;
;
; // user data table.
; // use it to get user data.
;
;
;
;
; // to get response of user edit. it is only session info and name, email, id.
;
;
;
;
; // to login
; // to log out. use 'RESPONSE' for the response.
;
;
;
;
;
;
;
;
;
;
;
;
;
; // to create a forum.
; // to update a forum.
; // to delete a forum.
; // to get a forum config fields.
; // to receive a complete forum config fields. Use this after create/update/get/delete a forum
; // to create a post
; // to update a post
;
;
; // to update a post
;
; // to create/update/get/delete a post.
; // to edit user data
;
;
;
;
;
;
; // universal. all kinds of delete requst.
; // universal. all kinds of delete response.
;
;
; // to login
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
//# sourceMappingURL=interface.js.map

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import { Optional } from '@angular/core';

var Base = (function (_super) {
    __extends(Base, _super);
    function Base(http, taxonomy) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.taxonomy = taxonomy;
        return _this;
    }
    /**
     *
     *
     *
     * @param req
     *
     * @code example code.
        this.config.list( {} ).subscribe( res => {
          
            console.log(res);
        }, err => {
            console.log(err);
        });
        
     *
     * @endcode
     *
     * @code
        this.config.list( {page: 2} ).subscribe( res => { } ); // get items of page no 2 of post_config
        this.user.list( { page: 2, limit: 3 } ).subscribe( res => { }); // get 2nd page of users. A pages has 3 users.
        this.config.list( { page: 1, limit: 3, where: 'id LIKE ?', bind: 'my%' } ).subscribe( res => { } ); // get upto 3 post_configs whose id begins with 'my'
        this.config.list( { limit: 1, where: 'id LIKE ?', bind: 'my%', order: 'idx DESC' } ).subscribe( res => {} ); // get the newly created post_config whose id begins with 'my'. only one data will be returned.
     * @endcode
     *
     */
    Base.prototype.list = function (req) {
        if (req === void 0) { req = {}; }
        req['route'] = this.taxonomy + '.list';
        /**
         * @deprecated code. // Pagination helper.
         *
         * To make it clear and easy understanding,
         *
         */
        // if ( ! req['limit'] ) req.limit = NO_OF_ITEMS_PER_PAGE;
        // if ( req['page'] ) {
        //     let page = req['page'] > 0 ? req['page'] : 1;
        //     let limit = req.limit;
        //     req.from =  ( page - 1 ) * limit;
        //     delete( req.page );
        // }
        //
        // req.session_id = this.getSessionId();
        return this.post(req);
    };
    Base.prototype.create = function (req) {
        if (req === void 0) { req = {}; }
        req['route'] = this.taxonomy + '.create';
        return this.post(req);
    };
    Base.prototype.delete = function (idx) {
        var req = {
            route: this.taxonomy + '.delete'
        };
        /// bug fix: if idx is numeric, then it is a number.
        var no = parseInt(idx);
        if (Number.isInteger(no))
            req.idx = idx;
        else
            req.id = idx;
        return this.post(req);
    };
    Base.prototype.edit = function (req) {
        if (req === void 0) { req = {}; }
        req['route'] = this.taxonomy + '.edit';
        return this.post(req);
    };
    Base.prototype.data = function (idx) {
        var req = {
            route: this.taxonomy + '.data'
        };
        if (idx) {
            if (!isNaN(idx))
                req.idx = idx;
            else
                req.id = idx;
        }
        return this.post(req);
    };
    Base.prototype.vote = function (idx, choice) {
        if (choice === void 0) { choice = 'G'; }
        var req = {
            route: this.taxonomy + '.vote',
            idx: idx,
            choice: choice
        };
        return this.post(req);
    };
    Base.prototype.report = function (idx) {
        var req = {
            route: this.taxonomy + '.report',
            idx: idx
        };
        return this.post(req);
    };
    /**
     *
     * Common api.
     *
     * @param idx
     */
    Base.prototype.fileUrl = function (idx) {
        return this.backendUrl() + '?route=download&idx=' + idx;
    };
    return Base;
}(__WEBPACK_IMPORTED_MODULE_0__api__["a" /* Api */]));

//# sourceMappingURL=base.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminService = (function () {
    function AdminService() {
        this.hidden_xs_down = "hidden-xs-down";
    }
    AdminService.prototype.onClickMenuMore = function () {
        this.hidden_xs_down = this.hidden_xs_down ? null : 'hidden-xs-down';
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AdminService);

//# sourceMappingURL=admin.service.js.map

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LMS_URL; });
/* unused harmony export LMS_ENDPOINT_URL */
/* unused harmony export domain */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LMS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LMS_URL = "//witheng.com";
var LMS_ENDPOINT_URL = LMS_URL + "/ajax.php";
var domain = 'englishfordevelopers.onlineenglish.kr';
;
var LMS = (function () {
    function LMS(http, user) {
        this.http = http;
        this.user = user;
        this.userData = null;
    }
    Object.defineProperty(LMS.prototype, "url", {
        get: function () {
            return LMS_URL;
        },
        enumerable: true,
        configurable: true
    });
    LMS.prototype.getTeachers = function (success) {
        try {
            var url = LMS_ENDPOINT_URL + "?function=teacher_list";
            this.http.get(url).subscribe(function (re) {
                // console.log(re);
                var json = null;
                try {
                    json = JSON.parse(re['_body']);
                }
                catch (e) {
                    alert("Parse ERROR on lms::getTeachers()");
                }
                //console.log(json);
                success(json['data']);
            });
        }
        catch (e) {
            alert(e);
        }
    };
    LMS.prototype.register = function (data, success, failure) {
        data = data.value;
        var domain = this.getDomain();
        console.log("res:", domain);
        var url = LMS_ENDPOINT_URL + ("?id=" + data['id'] + "&name=" + data['name'] + "&nickname=" + data['nickname'] + "&email=" + data['email'] + "&mobile=" + data['mobile'] + "&classid=" + data['classid'] + "&domain=" + domain + "&domain_key=empty&function=user_insert");
        this.http.get(url).subscribe(function (re) {
            console.log(' user_insert :: ' + re);
            if (re)
                success(re);
            else
                failure(' error on lms registration ');
        });
    };
    LMS.prototype.getDomain = function () {
        var hostname = window.location.hostname;
        var domain = '';
        if (hostname.indexOf("witheng.com") != -1) {
        }
        else if (hostname.indexOf("onfis.com") != -1) {
        }
        else if (hostname.indexOf('iamtalkative') != -1) {
            domain = 'talkative.onlineenglish.kr';
        }
        else if (hostname.indexOf("igoodtalk.com") != -1) {
            domain = 'igoodtalk.onlineenglish.kr';
        }
        else {
            var parts = hostname.split('.');
            domain = parts[0] == 'www' ? parts[1] : parts[0];
        }
        return domain;
    };
    LMS.prototype.update = function (data, success, failure) {
        data = data.value;
        var domain = this.getDomain();
        console.log("res:", domain);
        var url = LMS_ENDPOINT_URL + ("?id=" + data['id'] + "&name=" + data['name'] + "&nickname=" + data['nickname'] + "&email=" + data['email'] + "&mobile=" + data['mobile'] + "&classid=" + data['classid'] + "&domain=" + domain + "&domain_key=empty&function=user_update");
        this.http.get(url).subscribe(function (re) {
            console.log(' user_update :: ' + re);
            if (re)
                success(re);
            else
                failure(' error on lms update user ');
        });
    };
    LMS.prototype.loadUserData = function () {
        var _this = this;
        this.user.data().subscribe(function (res) {
            _this.userData = res.data.user;
        }, function (error) {
            _this.error(error);
        });
    };
    LMS.prototype.error = function (error) {
        console.log(error);
        return this.user.errorResponse(error);
    };
    LMS.prototype.getReservationsByMonthYear = function (data, success, error) {
        var _this = this;
        //update website
        try {
            if (this.user.logged) {
                this.loadUserData();
                setTimeout(function () {
                    var m = parseInt(data['m']) < 10 ? '0' + data['m'] : data['m'];
                    console.log(_this.userData);
                    var domain = _this.getDomain();
                    console.log("res:", domain);
                    var url = LMS_URL + ("/ajax.php?id=" + _this.userData.id + "&email=" + _this.userData.email + "&domain=" + domain + "&domain_key=empty&function=class_list_by_month&Y=" + data['Y'] + "&m=" + m + "&classid=" + data['classid']);
                    // let url = LMS_URL + `/ajax.php?id=k402486&email=k402486@naver.com&classid=${data['classid']}&domain=englishcoffeeonline.onlineenglish.kr&domain_key=empty&function=class_list_by_month&Y=${data['Y']}&m=${m}`;
                    _this.http.get(url).subscribe(function (re) {
                        console.log("URI:", re['url']);
                        var json = null;
                        try {
                            console.log('success:', json);
                            json = JSON.parse(re['_body']);
                        }
                        catch (e) {
                            alert("Parse ERROR on lms::getTeachers()");
                        }
                        if (json['code']) {
                            alert(json['message']);
                        }
                        else {
                            console.log(json);
                            success(json['data']);
                        }
                    }, function (err) {
                        error();
                        // alert("error on class list by month");
                    });
                }, 1000);
            }
            else {
                error();
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    return LMS;
}());
LMS = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend_angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend_angular_backend__["User"]) === "function" && _b || Object])
], LMS);

var _a, _b;
//# sourceMappingURL=lms.js.map

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(app, activeModal, lms, user, file, fb, modal) {
        ///////////////
        // this.form['gender'] = ""; //Default Select gender
        //////////////
        var _this = this;
        this.app = app;
        this.activeModal = activeModal;
        this.lms = lms;
        this.user = user;
        this.file = file;
        this.fb = fb;
        this.modal = modal;
        // src_photo: string = null;
        // form = <USER_REGISTER> {};
        // userData: USER_FIELDS = null;
        this.login = false;
        this.result = {};
        this.loading = false;
        this.userData = null;
        this.primary_photo_idx = null;
        this.formErrors = {
            id: '',
            password: '',
            name: '',
            email: ''
        };
        this.validationMessages = {
            id: {
                'required': 'ID is required.',
                'minlength': 'ID must be at least 3 characters long.',
                'maxlength': 'ID cannot be more than 32 characters long.'
            },
            name: {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 3 characters long.',
                'maxlength': 'Name cannot be more than 32 characters long.'
            },
            password: {
                'required': 'Password is required.',
                'minlength': 'Password must be at least 5 characters long.',
                'maxlength': 'Password cannot be more than 128 characters long.'
            },
            email: {
                'required': 'Email is required.',
                'minlength': 'Email must be at least 8 characters long.',
                'maxlength': 'Email cannot be more than 32 characters long.',
                'malformed': 'Email must be in valid format. valudator error'
            }
        };
        // this.onClickRegister();
        // this.register();
        // this.fakeData();
        /////////////////////////////////////////////////////
        if (this.user.logged)
            this.loadUserData();
        this.form = fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(32)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, this.emailValidator]],
            nickname: [],
            mobile: [],
            birthday: [],
            gender: []
        });
        if (!this.user.logged) {
            this.form.addControl('id', new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(32)]));
            this.form.addControl('password', new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* Validators */].maxLength(128)]));
        }
        this.form.valueChanges
            .debounceTime(1000)
            .subscribe(function (res) { return _this.onValueChanged(res); });
    }
    RegisterComponent.prototype.onClickChangePasswordr = function () {
        this.activeModal.close();
        this.modal.open(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordComponent */]);
    };
    RegisterComponent.prototype.onChangeFileUpload = function (fileInput) {
        var _this = this;
        var file = fileInput.files[0];
        this.file.uploadPrimaryPhoto(file).subscribe(function (res) {
            _this.primary_photo_idx = res.data.idx;
        }, function (err) {
            _this.file.alert(err);
        });
    };
    RegisterComponent.prototype.onEnterRegister = function (event) {
        var _this = this;
        if (event.keyCode == 13) {
            if (this.user.logged)
                this.updateProfile(function (callback) { return _this.updateLMSprofile(); });
            else
                this.register(function (callback) { return _this.lmsRegister(); });
        }
    };
    // fakeData() {
    //     let id = 'user' + (new Date).getHours() + (new Date).getMinutes() + (new Date).getSeconds();  
    //     this.form.id = id;
    //     this.form.email = id + '@gmail.com';
    //     this.form.nickname = id;
    //     this.form.name = id;
    //     this.form.password = id;
    //     this.form.mobile = '09174678000';
    //     this.form.gender = 'M';
    //     this.form.birthday = '1990-12-30';
    // }
    RegisterComponent.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    RegisterComponent.prototype.onClickRegister = function () {
        var _this = this;
        this.register(function (callback) { return _this.lmsRegister(); });
    };
    RegisterComponent.prototype.onClickUpdate = function () {
        var _this = this;
        this.updateProfile(function (callback) { return _this.updateLMSprofile(); });
    };
    RegisterComponent.prototype.onValueChanged = function (data) {
        if (!this.form)
            return;
        var form = this.form;
        for (var field in this.formErrors) {
            this.formErrors[field] = ''; // clear previous error message (if any)
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegisterComponent.prototype.loadUserData = function () {
        var _this = this;
        this.loading = true;
        this.user.data().subscribe(function (res) {
            _this.getDataSuccess(res);
        }, function (error) {
            _this.error(error);
        });
    };
    RegisterComponent.prototype.register = function (callback) {
        var _this = this;
        this.loading = true;
        var register = this.form.value;
        register.file_hooks = [this.primary_photo_idx];
        if (register['birthday']) {
            var date = this.splitBirthday(register['birthday']);
            delete register['birthday'];
            register.birth_year = date[0];
            register.birth_month = date[1];
            register.birth_day = date[2];
        }
        this.user.register(register).subscribe(function (res) {
            //this.successRegister( res );
            callback();
        }, function (error) {
            _this.error(error);
        });
    };
    RegisterComponent.prototype.getDataSuccess = function (res) {
        try {
            console.log(res);
            this.userData = res.data.user;
            this.form.patchValue(this.userData);
            var birthday = this.getConcatBirthdate();
            this.form.patchValue({ birthday: birthday });
            this.primary_photo_idx = this.userData.primary_photo.idx;
        }
        catch (e) {
        }
    };
    RegisterComponent.prototype.getConcatBirthdate = function () {
        if (this.userData.birth_month.length < 2)
            this.userData.birth_month = "0" + this.userData.birth_month;
        if (this.userData.birth_day.length < 2)
            this.userData.birth_day = "0" + this.userData.birth_day;
        return this.userData.birth_year + "-" + this.userData.birth_month + "-" + this.userData.birth_day;
    };
    RegisterComponent.prototype.successRegister = function (res) {
        console.log("user register success: ", res);
        this.loading = false;
        this.activeModal.close();
    };
    RegisterComponent.prototype.error = function (error) {
        this.loading = false;
        this.result = error;
        console.log(this.result);
        return this.user.errorResponse(error);
    };
    RegisterComponent.prototype.lmsRegister = function () {
        var _this = this;
        this.lms.register(this.form, function (res) {
            console.log(' registered on centerX ' + res);
            _this.activeModal.close();
        }, function (error) { return console.error(' error on registration ' + error); });
    };
    RegisterComponent.prototype.splitBirthday = function (date) {
        if (date) {
            var newdate = date.split("-");
            return newdate;
        }
    };
    RegisterComponent.prototype.updateProfile = function (callback) {
        var _this = this;
        this.loading = true;
        var edit = this.form.value;
        delete edit['password'];
        delete edit['id'];
        var date = this.splitBirthday(edit['birthday']);
        delete edit['birthday'];
        edit.birth_year = date[0];
        edit.birth_month = date[1];
        edit.birth_day = date[2];
        this.user.edit(edit).subscribe(function (res) {
            callback();
            _this.successUpdate(res);
        }, function (error) {
            _this.error(error);
        });
    };
    RegisterComponent.prototype.onClickDeletePhoto = function () {
        var _this = this;
        console.log("FileFormComponent::onClickDeleteFile(file): ", this.primary_photo_idx);
        this.file.delete(this.primary_photo_idx).subscribe(function (res) {
            console.log("file delete: ", res);
            _this.primary_photo_idx = {};
        }, function (err) { return _this.file.alert(err); });
    };
    RegisterComponent.prototype.successUpdate = function (res) {
        console.log("user update success: ", res);
        this.loading = false;
        this.activeModal.close();
    };
    RegisterComponent.prototype.updateLMSprofile = function () {
        var _this = this;
        this.lms.update(this.form, function (res) {
            console.log(' lms user updated ' + res);
            _this.activeModal.close();
        }, function (err) { });
    };
    RegisterComponent.prototype.validateError = function (name) {
        this.app.alert(name + ' is required ...');
        return false;
    };
    RegisterComponent.prototype.emailValidator = function (c) {
        if (c.value.length < 8) {
            return { 'minlength': '' };
        }
        if (c.value.length > 64) {
            return { 'maxlength': '' };
        }
        var re = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(c.value);
        if (re)
            return;
        else
            return { 'malformed': '' };
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'register-component',
        template: __webpack_require__(482),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_lms__["a" /* LMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_lms__["a" /* LMS */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["User"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["File"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* FormBuilder */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _g || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=register.js.map

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__find_id_find_id__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginModal = (function () {
    // form = {};
    function LoginModal(activeModal, app, modal, user) {
        this.activeModal = activeModal;
        this.app = app;
        this.modal = modal;
        this.user = user;
        this.loading = false;
        this.result = {};
        this.saveid = false;
        this.form = {};
        // this.onClickLogin();
    }
    LoginModal.prototype.onClickDismiss = function () {
        this.activeModal.close('close');
    };
    LoginModal.prototype.onClickForgotPassword = function () {
        this.activeModal.close();
        this.modal.open(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordComponent */]);
    };
    LoginModal.prototype.onClickFindId = function () {
        this.activeModal.close();
        this.modal.open(__WEBPACK_IMPORTED_MODULE_4__find_id_find_id__["a" /* FindIdModal */]);
    };
    LoginModal.prototype.onClickRegister = function () {
        this.activeModal.close();
        this.modal.open(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterComponent */]);
    };
    LoginModal.prototype.ngOnInit = function () {
        var id = localStorage.getItem('saveid');
        if (id) {
            this.form['id'] = id;
            this.saveid = true;
        }
    };
    LoginModal.prototype.onClickLogin = function () {
        var _this = this;
        if (this.validate() == false)
            return;
        this.loading = true;
        this.user.login(this.form).subscribe(function (res) {
            _this.success(res);
        }, function (error) {
            _this.error(error);
        });
    };
    LoginModal.prototype.success = function (res) {
        this.loading = false;
        this.activeModal.close('success');
    };
    LoginModal.prototype.error = function (error) {
        this.loading = false;
        this.result = error;
        console.log(this.result);
        return this.user.errorResponse(error);
    };
    LoginModal.prototype.onEnterLogin = function (event) {
        if (event.keyCode == 13) {
            this.onClickLogin();
        }
    };
    LoginModal.prototype.validate = function () {
        if (this.form.id && this.form.id.match(/[.#$\[\]]/g))
            return this.errorResult(' valid id ');
        if (!this.form.id)
            return this.errorResult('id ');
        if (!this.form.password)
            return this.errorResult('password ');
        return true;
    };
    LoginModal.prototype.errorResult = function (name) {
        this.result = { message: name + "is required ..." };
        return false;
    };
    LoginModal.prototype.validateError = function (name) {
        this.app.alert(name + ' is required ...');
        return false;
    };
    return LoginModal;
}());
LoginModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'login-component',
        template: __webpack_require__(480),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_model_user__["User"]) === "function" && _d || Object])
], LoginModal);

var _a, _b, _c, _d;
//# sourceMappingURL=login.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_lms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_class_info_class_info__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReservationComponent = (function () {
    function ReservationComponent(app, modal, user, lms) {
        this.app = app;
        this.modal = modal;
        this.user = user;
        this.lms = lms;
        this.data = [];
        this.maxDay = 42;
        this.calendarLoad = true;
        this.books = [];
        this.weeks = [];
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = parseInt(("0" + (this.date.getMonth() + 1)).slice(-2));
        this.prevMonths = [];
        this.nextMonths = [];
        this.listOfYears = [];
        this.classinformation = null;
        this.showPrevious = false;
        this.showNext = false;
        this.showYear = false;
        this.listenEvents();
    }
    ReservationComponent.prototype.listenEvents = function () {
        var _this = this;
        this.app.myEvent.subscribe(function (item) {
            if (item.eventType == 'login-success') {
                _this.getNewReservationData();
            }
        });
    };
    ReservationComponent.prototype.ngOnInit = function () {
        this.listCalendar(this.month, this.year);
        this.getNewCalendar();
    };
    ReservationComponent.prototype.getNewCalendar = function () {
        this.getNewReservationData();
        this.getPreviousMonths();
        this.getNextMonths();
        this.getListOfYears();
    };
    ReservationComponent.prototype.selectNewDate = function (data) {
        this.year = parseInt(data.Y);
        this.month = new Date(Date.parse(data.m + " +1, " + data.Y)).getMonth() + 1;
        this.getNewCalendar();
    };
    ReservationComponent.prototype.getPreviousMonths = function () {
        this.prevMonths = [];
        for (var i = 0; i < 13; i++) {
            var test = (new Date(this.year, this.month - i - 1, 1, 1, 10)).toDateString().split(" ");
            this.prevMonths.push({ m: test[1], Y: test[3] });
        }
    };
    ReservationComponent.prototype.getNextMonths = function () {
        this.nextMonths = [];
        for (var i = 0; i < 12; i++) {
            var test = (new Date(this.year, this.month + i, 1, 1, 10)).toDateString().split(" ");
            this.nextMonths.push({ m: test[1], Y: test[3] });
        }
    };
    ReservationComponent.prototype.getListOfYears = function () {
        var startingYear = this.year;
        --startingYear;
        this.listOfYears = [];
        for (var i = 0; i < 5; i++) {
            var test = (new Date(startingYear + i, this.month - 1, 1, 1, 10)).toDateString().split(" ");
            this.listOfYears.push({ m: test[1], Y: test[3] });
        }
    };
    ReservationComponent.prototype.getNewReservationData = function () {
        var _this = this;
        this.calendarLoad = true;
        this.lms.getReservationsByMonthYear({ m: this.month, Y: this.year }, function (res) {
            //Process gather data
            _this.classinformation = {
                first_class: res.first_class,
                next_class: res.next_class,
                no_of_past: res.no_of_past,
                no_of_reservation: res.no_of_reservation
            };
            res.books.forEach(function (res) {
                if (res.icon.match(/.\/data/g))
                    res.icon = res.icon.replace(/.\/data/g, __WEBPACK_IMPORTED_MODULE_1__providers_lms__["b" /* LMS_URL */] + '/data');
            });
            _this.data = res.books;
            _this.listCalendar(_this.month, _this.year);
            _this.calendarLoad = false;
        }, function () {
            _this.calendarLoad = false;
        });
    };
    ReservationComponent.prototype.add0 = function (n) {
        return n < 10 ? '0' + n : n.toString();
    };
    ReservationComponent.prototype.listCalendar = function (month, year) {
        if (this.data)
            this.data.forEach(function (book) {
                console.log("chemy chemy:", book);
            });
        this.books = [];
        var book;
        var empty_day = new Date(year + "-" + month + "-01").getDay(); // first date(day) of the month. 0~6
        var days_in_month = new Date(year, month, 0).getDate(); // last date(day) of the month. 28, 29, 30.
        for (var i = 0; i < empty_day; i++) {
            this.books.unshift(null);
        } // Fill all the empty days first
        var _loop_1 = function (i) {
            var date = this_1.year.toString() + this_1.add0(this_1.month) + this_1.add0(i);
            if (this_1.data)
                book = this_1.data.find(function (book) { return book['date'] == date; });
            if (book)
                book['myDate'] = i;
            else
                book = { myDate: i };
            this_1.books.push(book);
        };
        var this_1 = this;
        for (var i = 1; i <= days_in_month; i++) {
            _loop_1(i);
        }
        while (this.books.length < this.maxDay) {
            this.books.push(null);
        } // fill the remaining days
        this.weeks = this.chunk(this.books); //Chunk Date
    };
    ReservationComponent.prototype.chunk = function (arr) {
        var temp = [];
        for (var i = 0; i < arr.length; i = i + 7) {
            temp.push(this.pres(arr.slice(i, i + 7)));
        }
        return temp;
    };
    ReservationComponent.prototype.pres = function (arr) {
        var _this = this;
        return arr.map(function (e) { return _this.pre(e); });
    };
    ReservationComponent.prototype.pre = function (data) {
        return data;
    };
    ReservationComponent.prototype.onClickNext = function () {
        this.month++;
        if (this.month > 12) {
            this.year++;
            this.month = 1;
        }
        this.getNewCalendar();
    };
    ReservationComponent.prototype.onClickPrev = function () {
        this.month--;
        if (this.month < 1) {
            this.year--;
            this.month = 12;
        }
        this.getNewCalendar();
    };
    ReservationComponent.prototype.onClickClassInfo = function (data) {
        console.log("Data:", data);
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__modals_class_info_class_info__["a" /* ClassInfoModal */]).result.then(function () {
        }).catch(function (e) { return console.log('exit ' + e); });
        this.app.myEvent.emit({
            eventType: "post",
            data: data
        });
    };
    return ReservationComponent;
}());
ReservationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'reservation-component',
        template: __webpack_require__(484),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__providers_lms__["a" /* LMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_lms__["a" /* LMS */]) === "function" && _d || Object])
], ReservationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=reservation.js.map

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backend", function() { return Backend; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Backend = (function (_super) {
    __extends(Backend, _super);
    function Backend(http) {
        return _super.call(this, http, '') || this;
    }
    return Backend;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
Backend = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Backend);

var _a;
//# sourceMappingURL=backend.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProgressService = (function () {
    function ProgressService() {
        //downloadProgress: Subject<any> = new Subject();
        this.uploadProgress = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    return ProgressService;
}());
ProgressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ProgressService);

//# sourceMappingURL=progress.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_service__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumPostComponent = (function () {
    function ForumPostComponent(share, fb, file, postData, activeModal) {
        this.share = share;
        this.fb = fb;
        this.file = file;
        this.postData = postData;
        this.activeModal = activeModal;
        this.created = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.edited = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.post = {};
        this.files = [];
    }
    ForumPostComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ForumPostComponent.prototype.createForm = function () {
        if (this.isCreate()) {
            this.files = [];
            this.formGroup = this.fb.group({
                title: [],
                content: []
            });
        }
        else {
            this.files = this.post.files ? this.post.files : [];
            this.formGroup = this.fb.group({
                title: [this.post.title],
                content: [this.post.content]
            });
        }
    };
    ForumPostComponent.prototype.onSubmit = function () {
        console.log(this.formGroup.value);
        if (this.isCreate())
            this.createPost();
        else
            this.editPost();
    };
    ForumPostComponent.prototype.reset = function () {
        this.files = [];
        this.formGroup.get('title').patchValue('');
        this.formGroup.get('content').patchValue('');
    };
    ForumPostComponent.prototype.createSuccess = function (post) {
        this.reset();
        this.created.emit(post);
        this.activeModal.close();
    };
    ForumPostComponent.prototype.editSuccess = function (post) {
        this.reset();
        console.log("emit: ", post);
        this.edited.emit(post);
        this.activeModal.close();
    };
    ForumPostComponent.prototype.onClickCancel = function () {
        this.cancel.emit();
    };
    ForumPostComponent.prototype.createPost = function () {
        var _this = this;
        var create = this.formGroup.value;
        create.post_config_id = this.post_config_id;
        create.file_hooks = this.files.map(function (f) { return f.idx; });
        console.log("create:", create);
        this.postData.create(create).subscribe(function (res) {
            _this.share.posts.unshift(res.data);
            console.log(res);
            _this.createSuccess(res.data);
        }, function (err) { return _this.postData.alert(err); });
    };
    ForumPostComponent.prototype.editPost = function () {
        var _this = this;
        var edit = this.formGroup.value;
        edit.idx = this.post.idx;
        edit.file_hooks = this.files.map(function (f) { return f.idx; });
        console.log('post-form-conpoment::editPost()', edit);
        this.postData.edit(edit).subscribe(function (res) {
            console.log('after edit: ', res);
            Object.assign(_this.post, res.data); // two-way binding.
            //this.post = res.data;
            _this.editSuccess(res.data);
        }, function (err) { return _this.postData.alert(err); });
    };
    ForumPostComponent.prototype.isCreate = function () {
        return this.post === void 0 || this.post.idx === void 0;
    };
    ForumPostComponent.prototype.isEdit = function () {
        return !this.isCreate();
    };
    ForumPostComponent.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    return ForumPostComponent;
}());
ForumPostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'forum-post-component',
        template: __webpack_require__(479),
        styles: [__webpack_require__(408)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__providers_share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_share_service__["a" /* ShareService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["File"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["PostData"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _e || Object])
], ForumPostComponent);

var _a, _b, _c, _d, _e;
/////////////////////////////
// import { Component, OnInit } from '@angular/core';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { App } from '../../../providers/app';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import {
//     PostData,
//     File,
//     NUMBERS,
//     _FILE,
//     _POST, _POST_CREATE, _POST_CREATE_RESPONSE,
//     _POST_EDIT, _POST_EDIT_RESPONSE
// } from './../../../angular-backend/angular-backend';
// import { ShareService } from '../../../providers/share-service';
// @Component({
//     selector: 'forum-post-component',
//     templateUrl: 'forum-post.html',
//     styleUrls: ['forum-post.scss']
// })
// export class ForumPostComponent implements OnInit {
//     constructor(
//         private activeModal  : NgbActiveModal,
//         private app          : App,
//         private post         : PostData,
//     ) {
//     }
//     ngOnInit() {
//     }
//     onClickDismiss(){
//         this.activeModal.close();
//     }
//     onClickPost() {
//        this.post.create( this.form ).subscribe( (res) => {
//             console.log( res );
//             this.app.myEvent.emit( { eventType:"post" } );
//             this.onClickDismiss();
//         }, error => {
//             this.error( error );
//         } );
//     }
//     error( error ) {
//         return this.post.errorResponse( error );
//     }
// }
////////////////////////
//# sourceMappingURL=forum-post.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShareService = (function () {
    function ShareService() {
        this.post_config_id = '';
        this.posts = [];
    }
    return ShareService;
}());
ShareService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ShareService);

//# sourceMappingURL=share-service.js.map

/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_admin_index_index__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__pages_admin_index_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_user_list_list__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_admin_user_list_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_admin_user_edit_edit__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__pages_admin_user_edit_edit__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_forum_config_config__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_7__pages_admin_forum_config_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_forum_category_category__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_8__pages_admin_forum_category_category__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_admin_forum_post_post__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_9__pages_admin_forum_post_post__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_components_header_header__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_components_sidebar_sidebar__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_components_info_box_info_box__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_components_progress_group_progress_group__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_admin_services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_angular_backend_components_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_components_modal_post_edit_edit__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_backend_admin_routing__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AngularBackendAdmin; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AngularBackendAdmin = (function () {
    function AngularBackendAdmin() {
    }
    return AngularBackendAdmin;
}());
AngularBackendAdmin = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__pages_admin_index_index__["a" /* BackendAdminPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_admin_user_list_list__["a" /* BackendAdminUserListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_admin_user_edit_edit__["a" /* BackendAdminUserEditPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_admin_forum_config_config__["a" /* BackendAdminForumConfigPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_admin_forum_category_category__["a" /* BackendAdminForumCategoryPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_admin_forum_post_post__["a" /* BackendAdminForumPostPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_admin_components_header_header__["a" /* AdminHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_admin_components_sidebar_sidebar__["a" /* AdminSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_components_info_box_info_box__["a" /* InfoBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_components_progress_group_progress_group__["a" /* ProgressGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_admin_components_modal_post_edit_edit__["a" /* PostEditModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__modules_angular_backend_components_module__["a" /* AngularBackendComponentModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_backend_admin_routing__["a" /* AngularBackendAdminRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__pages_admin_services_admin_service__["a" /* AdminService */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__pages_admin_components_modal_post_edit_edit__["a" /* PostEditModalComponent */]
        ]
    })
], AngularBackendAdmin);

//# sourceMappingURL=angular-backend-admin.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Category = (function (_super) {
    __extends(Category, _super);
    function Category(http) {
        return _super.call(this, http, 'category') || this;
    }
    return Category;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
Category = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Category);

var _a;
//# sourceMappingURL=category.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__define__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_progress__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var File = (function (_super) {
    __extends(File, _super);
    function File(http, progress) {
        var _this = _super.call(this, http, 'file') || this;
        _this.progress = progress;
        _this.percentage = 0;
        return _this;
    }
    File.prototype.upload = function (req, file, callback) {
        var _this = this;
        if (file === void 0 || file.name === void 0) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(__WEBPACK_IMPORTED_MODULE_3__define__["f" /* RES_ERROR_NO_FILE_SELECTED */]);
        }
        var session_id = this.getSessionId();
        var formData = new FormData();
        formData.append('userfile', file, file.name);
        formData.append('route', 'upload');
        if (session_id)
            formData.append('session_id', session_id);
        if (req['model'])
            formData.append('model', req.model);
        if (req['model_idx'])
            formData.append('model_idx', req.model_idx);
        if (req['code'])
            formData.append('code', req.code);
        if (req['unique'])
            formData.append('unique', req.unique);
        if (req['finish'])
            formData.append('finish', req.finish);
        console.log(file);
        console.log(formData);
        var o = this.http.post(this.backendUrl(), formData);
        var subscription = this.progress.uploadProgress.subscribe(function (res) {
            // console.log("progress: ", res);
            // console.log('total::', res.total, 'Loaded::', res.loaded);
            _this.percentage = Math.round(res.loaded / res.total * 100);
            // console.log('this.percentage::',this.percentage);
            // console.log(subscription);
            if (callback)
                callback(_this.percentage);
            if (_this.percentage == 100)
                subscription.unsubscribe();
        });
        return this.processQuery(o);
    };
    File.prototype.url = function (idx) {
        return this.fileUrl(idx);
    };
    File.prototype.src = function (option) {
        var url = this.url(option.idx);
        if (option['width'])
            url += 'width=' + option.width;
        if (option['height'])
            url += 'height=' + option.height;
        if (option['quality'])
            url += 'quality=' + option.quality;
        if (option['resize'])
            url += 'resize=' + option.resize;
        console.log('file.src() returns: ', url);
        return url;
    };
    //// User Primary Photo Upload
    File.prototype.uploadAnonymousPrimaryPhoto = function (file, callback) {
        var req = {
            model: 'user',
            code: 'primary_photo'
        };
        return this.upload(req, file, callback);
    };
    File.prototype.uploadUserPrimaryPhoto = function (file, callback) {
        var req = {
            model: 'user',
            model_idx: this.info.idx,
            code: 'primary_photo',
            unique: 'Y',
            finish: 'Y'
        };
        console.log("uploadUserPrimaryPhoto : ", req);
        return this.upload(req, file, callback);
    };
    File.prototype.uploadPrimaryPhoto = function (file, callback) {
        console.log("uploadPrimaryPhoto: ");
        if (this.logged)
            return this.uploadUserPrimaryPhoto(file, callback);
        else
            return this.uploadAnonymousPrimaryPhoto(file, callback);
    };
    /**
     *
     * File upload for post
     *
     *
     * @param file
     * @param callback
     *
     * @code
  
      onChangeFile( _ ) {
          this.file.uploadPostFile( _.files[0], percentage => {
              console.log('percentage:', percentage);
          } ).subscribe( (res:_UPLOAD_RESPONSE) => {
              this.files.push( res.data );
              console.log('files: ', this.files);
          }, err => {
              console.log('err:', err);
              if ( this.file.isError(err) == ERROR_NO_FILE_SELECTED ) return;
              this.file.alert(err);
          });
      }
  
     * @endcode
     *
     */
    File.prototype.uploadPostFile = function (file, callback) {
        var req = {
            model: 'post_data',
            code: ''
        };
        return this.upload(req, file, callback);
    };
    return File;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
File = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_progress__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_progress__["a" /* ProgressService */]) === "function" && _b || Object])
], File);

var _a, _b;
//# sourceMappingURL=file.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Meta = (function (_super) {
    __extends(Meta, _super);
    function Meta(http) {
        return _super.call(this, http, 'meta') || this;
    }
    return Meta;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
Meta = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], Meta);

var _a;
//# sourceMappingURL=meta.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComment", function() { return PostComment; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostComment = (function (_super) {
    __extends(PostComment, _super);
    function PostComment(http) {
        return _super.call(this, http, 'post_comment') || this;
    }
    PostComment.prototype.create = function (req) {
        req['route'] = this.taxonomy + '.create';
        return this.post(req);
    };
    return PostComment;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
PostComment = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostComment);

var _a;
//# sourceMappingURL=post-comment.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostConfig", function() { return PostConfig; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostConfig = (function (_super) {
    __extends(PostConfig, _super);
    function PostConfig(http) {
        return _super.call(this, http, 'post_config') || this;
    }
    return PostConfig;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
PostConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostConfig);

var _a;
//# sourceMappingURL=post-config.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostData", function() { return PostData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostData = (function (_super) {
    __extends(PostData, _super);
    function PostData(http) {
        return _super.call(this, http, 'post_data') || this;
    }
    return PostData;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));
PostData = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PostData);

var _a;
//# sourceMappingURL=post-data.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pagination_pagination_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_form_basic_post_form_basic_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_post_view_basic_post_view_basic_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_comment_form_basic_comment_form_basic_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_comment_view_basic_comment_view_basic_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_form_basic_register_form_basic_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_form_basic_login_form_basic_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_password_change_form_basic_password_change_form_basic_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_file_form_basic_file_form_basic_component__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularBackendComponentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AngularBackendComponentModule = (function () {
    function AngularBackendComponentModule() {
    }
    return AngularBackendComponentModule;
}());
AngularBackendComponentModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_pagination_pagination_component__["a" /* PageNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_post_form_basic_post_form_basic_component__["a" /* PostFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_post_view_basic_post_view_basic_component__["a" /* PostViewBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_comment_form_basic_comment_form_basic_component__["a" /* CommentFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_comment_view_basic_comment_view_basic_component__["a" /* CommentViewBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_form_basic_register_form_basic_component__["a" /* RegisterFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_form_basic_login_form_basic_component__["a" /* LoginFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_file_form_basic_file_form_basic_component__["a" /* FileFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_password_change_form_basic_password_change_form_basic_component__["a" /* PaswordChangeFormBasicComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__components_pagination_pagination_component__["a" /* PageNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_post_form_basic_post_form_basic_component__["a" /* PostFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_post_view_basic_post_view_basic_component__["a" /* PostViewBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_comment_form_basic_comment_form_basic_component__["a" /* CommentFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_comment_view_basic_comment_view_basic_component__["a" /* CommentViewBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_form_basic_register_form_basic_component__["a" /* RegisterFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_form_basic_login_form_basic_component__["a" /* LoginFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_file_form_basic_file_form_basic_component__["a" /* FileFormBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_password_change_form_basic_password_change_form_basic_component__["a" /* PaswordChangeFormBasicComponent */]
        ]
    })
], AngularBackendComponentModule);

//# sourceMappingURL=angular-backend-components.module.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendAdminForumCategoryPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BackendAdminForumCategoryPage = (function () {
    function BackendAdminForumCategoryPage(admin, route, _category) {
        var _this = this;
        this.admin = admin;
        this.route = route;
        this._category = _category;
        this.searchCategoryForm = {};
        this.categories = [];
        this.categoryCreate = {};
        this.pageOption = {
            limitPerPage: 5,
            currentPage: 3,
            limitPerNavigation: 4,
            totalRecord: 0
        };
        this.searchQuery = {
            limit: this.pageOption['limitPerPage']
        };
        this.searchConfigChangeDebounce = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        console.log('category::');
        admin.onClickMenuMore();
        //
        // this.searchQuery = {
        //   //select: 'idx, title, created',
        //   order: 'idx DESC',
        //   //extra: { file: false, meta: true, post_config_id: 'qna' }
        // };
        //
        // this.searchQuery['order'] = 'idx DESC';
        //
        this.loadCategory();
        this.searchConfigChangeDebounce
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .subscribe(function () { return _this.onChangedCategorySearch(); });
    }
    BackendAdminForumCategoryPage.prototype.onConfigPageClick = function ($event) {
        console.log('onPageClick::$event', $event);
        this.pageOption['currentPage'] = $event;
        this.loadCategory();
    };
    BackendAdminForumCategoryPage.prototype.onClickCreateCategory = function () {
        var _this = this;
        this._category.create(this.categoryCreate).subscribe(function (res) {
            console.log(res);
        }, function (err) { return _this._category.alert(err); });
    };
    BackendAdminForumCategoryPage.prototype.onChangeConfigSearch = function () {
        this.searchConfigChangeDebounce.next();
    };
    BackendAdminForumCategoryPage.prototype.onChangedCategorySearch = function () {
        //console.log('onChangeSearch', this.searchCategoryForm);
        if (this.searchCategoryForm.id) {
            if (this.searchCategoryForm.id.length < 2)
                return;
        }
        if (this.searchCategoryForm.name) {
            if (this.searchCategoryForm.name.length < 2)
                return;
        }
        if (this.searchCategoryForm.description) {
            if (this.searchCategoryForm.description.length < 2)
                return;
        }
        var cond = '';
        var bind = '';
        if (this.searchCategoryForm.id)
            cond += "id LIKE ? ";
        if (this.searchCategoryForm.id)
            bind += "%" + this.searchCategoryForm.id + "%";
        if (this.searchCategoryForm.name)
            cond += cond ? "AND name LIKE ? " : "name LIKE ?";
        if (this.searchCategoryForm.name)
            bind += bind ? ",%" + this.searchCategoryForm.name + "%" : "%" + this.searchCategoryForm.name + "%";
        if (this.searchCategoryForm.description)
            cond += cond ? "AND description LIKE ? " : "description LIKE ? ";
        if (this.searchCategoryForm.description)
            bind += bind ? ",%" + this.searchCategoryForm.description + "%" : "%" + this.searchCategoryForm.description + "%";
        this.searchQuery.where = cond;
        this.searchQuery.bind = bind;
        this.searchQuery.order = 'idx DESC';
        this.pageOption.currentPage = 1;
        this.loadCategory();
    };
    BackendAdminForumCategoryPage.prototype.loadCategory = function () {
        var _this = this;
        console.log('loadCategory::');
        this.categories = [];
        this.searchQuery.page = this.pageOption.currentPage;
        this._category.list().subscribe(function (res) {
            console.log('_category::list', res);
            _this.categories = res.data.configs;
            _this.pageOption.totalRecord = parseInt(res.data.total);
            _this.categories.map(function (category) {
                category.created = (new Date(parseInt(category.created) * 1000)).toString();
            });
        }, function (err) { return _this._category.alert(err); });
    };
    BackendAdminForumCategoryPage.prototype.onClickConfigEdit = function (category) {
        var _this = this;
        console.log(category);
        var edit = {
            id: category.id,
            model: category.model,
            model_idx: category.model_idx,
            name: category.name,
            description: category.description,
            parent_idx: category.parent_idx
        };
        this._category.edit(edit).subscribe(function (res) {
            console.log("edit response::", res);
        }, function (err) { return _this._category.alert(err); });
    };
    BackendAdminForumCategoryPage.prototype.onClickConfigDelete = function (id) {
        var _this = this;
        console.log(id);
        this._category.delete(id).subscribe(function (res) {
            console.log("delete response: ", res);
            _this.categories = _this.categories.filter(function (category) { return category.id != id; });
        }, function (err) { return _this._category.alert(err); });
    };
    return BackendAdminForumCategoryPage;
}());
BackendAdminForumCategoryPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'backend-admin-forum-category-page',
        template: __webpack_require__(440),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["Category"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["Category"]) === "function" && _c || Object])
], BackendAdminForumCategoryPage);

var _a, _b, _c;
//# sourceMappingURL=category.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendAdminForumConfigPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackendAdminForumConfigPage = (function () {
    function BackendAdminForumConfigPage(admin, postData, postConfig) {
        var _this = this;
        this.admin = admin;
        this.postData = postData;
        this.postConfig = postConfig;
        this.config_idx = null;
        this.searchPostForm = {};
        this.posts = [];
        this.searchConfigForm = {};
        this.postConfigs = [];
        this.configCreate = {};
        this.pageOption = {
            limitPerPage: 5,
            currentPage: 1,
            limitPerNavigation: 4,
            totalRecord: 0
        };
        this.searchQuery = {
            limit: this.pageOption['limitPerPage']
        };
        this.searchConfigChangeDebounce = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.searchPostChangeDebounce = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        admin.onClickMenuMore();
        this.searchQuery['order'] = 'idx DESC';
        this.loadPostConfig();
        this.searchConfigChangeDebounce
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .subscribe(function () { return _this.onChangedConfigSearch(); });
    }
    BackendAdminForumConfigPage.prototype.onConfigPageClick = function ($event) {
        //console.log('onPageClick::$event',$event);
        this.pageOption['currentPage'] = $event;
        this.loadPostConfig();
    };
    BackendAdminForumConfigPage.prototype.onClickCreateForum = function () {
        var _this = this;
        this.postConfig.create(this.configCreate).subscribe(function (res) {
            console.log(res);
        }, function (err) { return _this.postConfig.alert(err); });
    };
    BackendAdminForumConfigPage.prototype.onChangeConfigSearch = function () {
        this.searchConfigChangeDebounce.next();
    };
    BackendAdminForumConfigPage.prototype.onChangedConfigSearch = function () {
        //console.log('onChangeSearch', this.searchConfigForm);
        if (this.searchConfigForm.id) {
            if (this.searchConfigForm.id.length < 2)
                return;
        }
        if (this.searchConfigForm.name) {
            if (this.searchConfigForm.name.length < 2)
                return;
        }
        if (this.searchConfigForm.description) {
            if (this.searchConfigForm.description.length < 2)
                return;
        }
        var cond = '';
        var bind = '';
        if (this.searchConfigForm.id)
            cond += "id LIKE ? ";
        if (this.searchConfigForm.id)
            bind += "%" + this.searchConfigForm.id + "%";
        if (this.searchConfigForm.name)
            cond += cond ? "AND name LIKE ? " : "name LIKE ?";
        if (this.searchConfigForm.name)
            bind += bind ? ",%" + this.searchConfigForm.name + "%" : "%" + this.searchConfigForm.name + "%";
        if (this.searchConfigForm.description)
            cond += cond ? "AND description LIKE ? " : "description LIKE ? ";
        if (this.searchConfigForm.description)
            bind += bind ? ",%" + this.searchConfigForm.description + "%" : "%" + this.searchConfigForm.description + "%";
        this.searchQuery.where = cond;
        this.searchQuery.bind = bind;
        this.searchQuery.order = 'idx DESC';
        this.pageOption.currentPage = 1;
        this.loadPostConfig();
    };
    BackendAdminForumConfigPage.prototype.loadPostConfig = function () {
        var _this = this;
        this.postConfigs = [];
        this.searchQuery.page = this.pageOption.currentPage;
        this.postConfig.list(this.searchQuery).subscribe(function (res) {
            console.log(res);
            _this.postConfigs = res.data.configs;
            _this.pageOption.totalRecord = parseInt(res.data.total);
            _this.postConfigs.map(function (config) {
                config.created = (new Date(parseInt(config.created) * 1000)).toString();
            });
        }, function (err) { return _this.postData.alert(err); });
    };
    BackendAdminForumConfigPage.prototype.onClickConfigEdit = function (config) {
        var _this = this;
        console.log(config);
        var edit = {
            id: config.id,
            name: config.name,
            description: config.description,
            moderators: config.moderators,
            level_list: config.level_list,
            level_view: config.level_view,
            level_write: config.level_write,
            level_comment: config.level_comment
        };
        this.postConfig.edit(edit).subscribe(function (res) {
            console.log("edit response::", res);
        }, function (err) { return _this.postConfig.alert(err); });
    };
    BackendAdminForumConfigPage.prototype.onClickConfigDelete = function (id) {
        var _this = this;
        console.log(id);
        this.postConfig.delete(id).subscribe(function (res) {
            console.log("delete response: ", res);
            _this.postConfigs = _this.postConfigs.filter(function (config) { return config.id != id; });
        }, function (err) { return _this.postConfig.alert(err); });
    };
    return BackendAdminForumConfigPage;
}());
BackendAdminForumConfigPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'backend-admin-forum-config-page',
        template: __webpack_require__(441),
        styles: [__webpack_require__(375)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostConfig"]) === "function" && _c || Object])
], BackendAdminForumConfigPage);

var _a, _b, _c;
//# sourceMappingURL=config.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendAdminForumPostPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';





var BackendAdminForumPostPage = (function () {
    function BackendAdminForumPostPage(admin, postData, file, postConfig, route) {
        var _this = this;
        this.admin = admin;
        this.postData = postData;
        this.file = file;
        this.postConfig = postConfig;
        this.route = route;
        this.post_config_id = '';
        this.postConfigs = [];
        this.searchPostForm = {};
        this.postCreate = {};
        this.posts = [];
        this.pageOption = {
            limitPerPage: 5,
            currentPage: 1,
            limitPerNavigation: 4,
            totalRecord: 0
        };
        this.searchQuery = {
            limit: this.pageOption['limitPerPage'],
            extra: { file: true }
        };
        this.photoIdxes = [];
        this.searchPostChangeDebounce = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        //
        this.showPostForm = false;
        this.postPostForm = {};
        admin.onClickMenuMore();
        //
        // this.searchQuery = {
        //   //select: 'idx, title, created',
        //   order: 'idx DESC',
        //   //extra: { file: false, meta: true, post_config_id: 'qna' }
        // };
        this.searchQuery['order'] = 'idx DESC';
        //
        // this.config_idx = this.route.snapshot.params['idx'];
        // if( this.config_idx ){
        //   console.log(this.config_idx);
        //   this.loadPostData( this.config_idx );
        // }
        route.params.subscribe(function (params) {
            if (params['post_config_id'] !== void 0) {
                _this.post_config_id = params['post_config_id'];
            }
        });
        this.postConfig.list({ limit: 20 }).subscribe(function (res) {
            console.log('postConfig.list::', res);
            _this.postConfigs = res.data.configs;
        });
        this.loadPostData();
        this.searchPostChangeDebounce
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .subscribe(function () { return _this.onChangedPostSearch(); });
    }
    BackendAdminForumPostPage.prototype.onPostPageClick = function ($event) {
        //console.log('onPageClick::$event',$event);
        this.pageOption['currentPage'] = $event;
        this.loadPostData();
    };
    BackendAdminForumPostPage.prototype.onClickCreatePost = function () {
        var _this = this;
        this.postCreate.file_hooks = this.photoIdxes;
        this.postData.create(this.postCreate).subscribe(function (res) {
            console.log(res);
        }, function (err) { return _this.postData.alert(err); });
    };
    BackendAdminForumPostPage.prototype.onChangePostSearch = function () {
        this.searchPostChangeDebounce.next();
    };
    BackendAdminForumPostPage.prototype.onChangedPostSearch = function () {
        //console.log('onChangeSearch', this.searchPostForm);
        if (this.searchPostForm.title) {
            if (this.searchPostForm.title.length < 2)
                return;
        }
        if (this.searchPostForm.content) {
            if (this.searchPostForm.content.length < 2)
                return;
        }
        var cond = '';
        var bind = '';
        if (this.searchPostForm.title)
            cond += "title LIKE ? ";
        if (this.searchPostForm.title)
            bind += "%" + this.searchPostForm.title + "%";
        if (this.searchPostForm.content)
            cond += cond ? "AND content LIKE ? " : "content LIKE ?";
        if (this.searchPostForm.content)
            bind += bind ? ",%" + this.searchPostForm.content + "%" : "%" + this.searchPostForm.content + "%";
        this.searchQuery.where = cond;
        this.searchQuery.bind = bind;
        this.searchQuery.order = 'idx DESC';
        this.pageOption.currentPage = 1;
        this.loadPostData();
    };
    BackendAdminForumPostPage.prototype.loadPostData = function () {
        var _this = this;
        this.posts = [];
        this.searchQuery.page = this.pageOption.currentPage;
        this.searchQuery.extra['post_config_id'] = this.post_config_id ? this.post_config_id : null;
        this.postData.list(this.searchQuery).subscribe(function (res) {
            console.log('this.postData.list::', res);
            _this.posts = res.data.posts;
            _this.pageOption.totalRecord = parseInt(res.data.total);
            _this.posts.map(function (post) {
                post.created = (new Date(parseInt(post.created) * 1000)).toString();
            });
        }, function (err) { return _this.postData.alert(err); });
    };
    BackendAdminForumPostPage.prototype.reloadPosts = function () {
        this.searchPostForm = {};
        this.onChangedPostSearch();
        //this.loadPostData();
    };
    BackendAdminForumPostPage.prototype.onClickPostEdit = function (_post) {
        var _this = this;
        if (_post.deleted == '1')
            return;
        console.log(_post);
        var edit = {
            idx: _post.idx,
            title: _post.title,
            content: _post.content
        };
        this.postData.edit(edit).subscribe(function (res) {
            console.log("edit response::", res);
        }, function (err) { return _this.postData.alert(err); });
    };
    BackendAdminForumPostPage.prototype.onClickPostDelete = function (_post) {
        var _this = this;
        if (_post.deleted == '1')
            return;
        console.log(_post.idx);
        this.postData.delete(parseInt(_post.idx)).subscribe(function (res) {
            console.log("delete response: ", res);
            _post.deleted = '1';
            //this.posts = this.posts.filter( ( post: POST ) => post.idx != _post.idx );
        }, function (err) { return _this.postData.alert(err); });
    };
    BackendAdminForumPostPage.prototype.onChangeFile = function (fileInput) {
        var _this = this;
        console.log("file changed: ", fileInput);
        var file = fileInput.files[0];
        var req = {};
        this.file.upload(req, file).subscribe(function (res) {
            console.log("file upload", res);
            _this.photoIdxes.push(res.data.idx);
        }, function (err) {
            console.log('error', err);
        });
    };
    BackendAdminForumPostPage.prototype.onClickShowPostDetail = function (idx) {
        var _this = this;
        console.log('onClickShowPostDetail::idx', idx);
        var query = {
            where: "idx = ?",
            bind: idx,
            extra: { file: true }
        };
        this.postData.list(query).subscribe(function (res) {
            console.log('onClickShowPostDetail::', res);
            _this.showPostDetail(res.data.posts[0]);
        }, function (err) { return _this.postData.alert(err); });
    };
    BackendAdminForumPostPage.prototype.showPostDetail = function (post) {
        var modalOption = {};
        //if ( option.class ) modalOption['windowClass'] = option.class;
        modalOption['windowClass'] = 'post-modal-view';
        // @attention (commented-out by JaeHo) - Do not make the code depending on 3rd party.
        // let modalRef = this.modal.open ( PostEditModalComponent, modalOption );
        // modalRef.componentInstance['post'] = post;
        // modalRef.result.then((result) => {
        //   console.info( `Closed with: ${result}` );
        // }, (reason) => {
        //   console.info( "dismissed", reason );
        // });
    };
    return BackendAdminForumPostPage;
}());
BackendAdminForumPostPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'backend-admin-forum-post-page',
        template: __webpack_require__(442),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["File"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostConfig"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], BackendAdminForumPostPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendAdminPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendAdminPage = (function () {
    function BackendAdminPage(admin, user, router) {
        var _this = this;
        this.admin = admin;
        this.user = user;
        this.router = router;
        if (user.logged && user.info.id == 'admin') {
            console.log(user.info);
            this.user.data().subscribe(function (res) {
                console.log(res);
            }, function (err) {
                if (err['code'] == __WEBPACK_IMPORTED_MODULE_2__angular_backend__["ERROR_WRONG_SESSION_ID"]) {
                    _this.user.logout();
                    _this.router.navigateByUrl('/');
                }
                _this.user.alert(err);
            });
        }
        else {
            alert("Please login as admin");
            this.router.navigateByUrl('/');
        }
        admin.onClickMenuMore();
    }
    return BackendAdminPage;
}());
BackendAdminPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'backend-admin-page',
        template: __webpack_require__(443),
        styles: [__webpack_require__(377)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["User"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], BackendAdminPage);

var _a, _b, _c;
//# sourceMappingURL=index.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendAdminUserEditPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackendAdminUserEditPage = (function () {
    function BackendAdminUserEditPage(admin, user, route, file) {
        this.admin = admin;
        this.user = user;
        this.route = route;
        this.file = file;
        this.idx = null;
        this.user_data = null;
        this.edit = {};
        this.user_photo_idx = 0;
        this.src_photo = null;
        this.edit_src_photo = null;
        this.percentage = 0;
        admin.onClickMenuMore();
        var id = this.route.snapshot.params['idx'];
        if (id) {
            this.loadData(id);
        }
    }
    BackendAdminUserEditPage.prototype.loadData = function (id) {
        var _this = this;
        this.user.data(id).subscribe(function (res) {
            _this.user_data = res.data.user;
            _this.edit.name = _this.user_data.name;
            _this.edit.email = _this.user_data.email;
            _this.edit.gender = _this.user_data.gender;
            _this.edit.id = _this.user_data.id;
            _this.edit_src_photo = _this.file.src({ idx: _this.user_data.primary_photo.idx });
            /** this.edit = res.data.user; **/
            console.log('onClickLoadData::res', res);
        }, function (err) { return _this.user.alert(err); });
    };
    BackendAdminUserEditPage.prototype.onClickUpdateProfile = function () {
        var _this = this;
        //console.log('onClickUpdateProfile::this.edit', this.edit );
        this.user.edit(this.edit).subscribe(function (res) {
            console.log(res);
        }, function (err) { return _this.user.alert(err); });
    };
    return BackendAdminUserEditPage;
}());
BackendAdminUserEditPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'backend-admin-user-edit',
        template: __webpack_require__(444),
        styles: [__webpack_require__(378)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend__["User"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend__["File"]) === "function" && _d || Object])
], BackendAdminUserEditPage);

var _a, _b, _c, _d;
//# sourceMappingURL=edit.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_admin_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendAdminUserListPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackendAdminUserListPage = (function () {
    function BackendAdminUserListPage(admin, user) {
        var _this = this;
        this.admin = admin;
        this.user = user;
        this._id = null;
        this._password = null;
        this.paginationUsers = [];
        this.searchForm = {};
        this.searchQuery = {};
        ///search options /////
        this.limitPerPage = 5;
        this.currentPage = 1;
        this.numberPerNav = 4;
        this.totalRecord = 0;
        this.searchChangeDebounce = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        admin.onClickMenuMore();
        //this.loadNewlyRegisteredUsers();
        this.onChangedSearch();
        this.searchChangeDebounce
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .subscribe(function () { return _this.onChangedSearch(); });
    }
    BackendAdminUserListPage.prototype.onPageClick = function ($event) {
        //console.log('onPageClick::$event',$event);
        this.currentPage = $event;
        this.loadSearchedData();
    };
    BackendAdminUserListPage.prototype.onChangeSearch = function () {
        this.searchChangeDebounce.next();
    };
    BackendAdminUserListPage.prototype.onChangedSearch = function () {
        //console.log('onChangeSearch', this.searchForm);
        if (this.searchForm.id) {
            if (this.searchForm.id.length < 2)
                return;
        }
        if (this.searchForm.name) {
            if (this.searchForm.name.length < 2)
                return;
        }
        if (this.searchForm.email) {
            if (this.searchForm.email.length < 2)
                return;
        }
        var cond = '';
        var bind = '';
        if (this.searchForm.id)
            cond += "id LIKE ? ";
        if (this.searchForm.id)
            bind += "%" + this.searchForm.id + "%";
        if (this.searchForm.name)
            cond += cond ? "AND ( name LIKE ? OR middle_name LIKE ? OR last_name LIKE ? ) " : "( name LIKE ? OR middle_name LIKE ? OR last_name LIKE ? )";
        if (this.searchForm.name)
            bind += bind ? ",%" + this.searchForm.name + "%,%" + this.searchForm.name + "%,%" + this.searchForm.name + "%" : "%" + this.searchForm.name + "%,%" + this.searchForm.name + "%,%" + this.searchForm.name + "%";
        if (this.searchForm.email)
            cond += cond ? "AND email LIKE ? " : "email LIKE ? ";
        if (this.searchForm.email)
            bind += bind ? ",%" + this.searchForm.email + "%" : "%" + this.searchForm.email + "%";
        this.searchQuery.where = cond;
        this.searchQuery.bind = bind;
        this.searchQuery.order = 'idx DESC';
        this.currentPage = 1;
        this.loadSearchedData();
    };
    BackendAdminUserListPage.prototype.loadSearchedData = function () {
        var _this = this;
        this.paginationUsers = [];
        this.searchQuery.from = this.limitPerPage * this.currentPage - this.limitPerPage;
        this.searchQuery.limit = this.limitPerPage;
        this.user.list(this.searchQuery).subscribe(function (res) {
            //console.info( 'loadSearchedData', res );
            _this.paginationUsers = res.data.users;
            _this.totalRecord = parseInt(res.data.total);
        }, function (err) { return _this.user.alert(err); });
    };
    BackendAdminUserListPage.prototype.onClickEdit = function (user) {
        var _this = this;
        console.log(user);
        var edit = { id: user.id, email: user.email };
        this.user.edit(edit).subscribe(function (res) {
            console.log("edit response: ", res);
        }, function (err) { return _this.user.alert(err); });
    };
    BackendAdminUserListPage.prototype.onClickDelete = function (id) {
        var _this = this;
        console.log(id);
        this.user.delete(id).subscribe(function (res) {
            console.log("delete response: ", res);
            _this.paginationUsers = _this.paginationUsers.filter(function (user) { return user.id != id; });
        }, function (err) { return _this.user.alert(err); });
    };
    return BackendAdminUserListPage;
}());
BackendAdminUserListPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'backend-admin-user-list',
        template: __webpack_require__(445),
        styles: [__webpack_require__(379)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_admin_service__["a" /* AdminService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_backend__["User"]) === "function" && _b || Object])
], BackendAdminUserListPage);

var _a, _b;
//# sourceMappingURL=list.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_backend__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Forum, CONFIG_CREATE, CONFIG_CREATE_RESPONSE } from './forum';
//import { URL_BACKEND_API } from './config';

var Test = (function () {
    function Test(
        // private forum: Forum,
        backend, user) {
        var _this = this;
        this.backend = backend;
        this.user = user;
        this.count = 0;
        this.form = {};
        this.session_id = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.login_session_id = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.update_session_id = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.my_session_id = null;
        console.info('Test::constructor()');
        setTimeout(function () { return _this.run(); }, 100);
    }
    Test.prototype.run = function () {
        var _this = this;
        this.api();
        this.register();
        this.session_id.subscribe(function (id) { return _this.login(); });
        this.login_session_id.subscribe(function (session_id) { return _this.getUserData(function () { return _this.userUpdate(); }); });
        this.update_session_id.subscribe(function (x) { return _this.logout(); });
        this.getPostList();
        // this.forumCreate( () => this.postCreate() );
    };
    Test.prototype.success = function (str) {
        var vars = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            vars[_i - 1] = arguments[_i];
        }
        this.count++;
        console.info("[" + this.count + "] SUCCESS: " + str, vars);
    };
    Test.prototype.getPostList = function () {
        // this.post.list().subscribe( re => {
        //     this.success("getPostList: " , re);
        // }, err => {
        //     this.error( err, "success getPostList: " );
        // } );
    };
    Test.prototype.api = function () {
        var _this = this;
        this.backend.successCall().subscribe(function (re) {
            _this.success("Version: " + re['data']['version']);
        }, function (err) {
            _this.error(err, "successCall Test: ");
        });
        this.backend.errorCall().subscribe(function (re) {
            _this.error(re, 'This should be an error. But success ' + _this.backend.getErrorString(re));
        }, function (error) {
            _this.success("errorCall() : This is fake error. " + _this.backend.getErrorString(error));
        });
        this.backend.internalServerError().subscribe(function (re) {
            _this.error("This must be 500 internal server error. but success");
        }, function (error) {
            console.log(error);
            if (_this.backend.isInternalServerError(error))
                _this.success("Internal Server Error: " + _this.backend.getErrorString(error));
            else
                _this.error(error, "This must be 500 - internal server error. but it is another error.");
        });
        setTimeout(function () {
            _this.backend.scriptError().subscribe(function (re) {
                console.log(re);
                _this.error(re, "scriptError() - This should be script error. But success.");
            }, function (error) {
                console.log(error);
                _this.success('This should be script error. This is PHP script error.');
            });
        }, 100);
        // this.backend.timeoutError().subscribe( re => {
        //     this.error( re, "This should be timeout error. But success." );
        // }, error => {
        //     if ( error.message == ERROR_TIMEOUT ) {
        //         this.success('This should be timeout error. ' + this.backend.getErrorString( error ));
        //     }
        //     else this.error( error, "This is not timeout error. But another error");
        // });
        // route error
        this.backend.routeMethodError().subscribe(function (re) {
            _this.error(re, "Must be error");
        }, function (error) {
            _this.success("Route Error");
            console.log(error);
        });
        this.backend.routeRequiredError().subscribe(function (re) {
            _this.error(re, "Must be error");
        }, function (error) {
            _this.success("Route required variable error: name is missing.");
            console.log(error);
        });
    };
    Test.prototype.error = function (error, message) {
        if (message === void 0) { message = ''; }
        this.count++;
        console.error("[" + this.count + "] ERROR: " + message + " - " + this.backend.getErrorString(error));
    };
    Test.prototype.register = function () {
        var _this = this;
        var id = 'user' + (new Date).getHours() + (new Date).getMinutes() + (new Date).getSeconds();
        this.form.id = id;
        this.form.email = id + '@gmail.com';
        this.form.name = id;
        this.form.password = id;
        this.form.mobile = '09174678000';
        this.form.gender = 'M';
        this.user.register(this.form).subscribe(function (res) {
            _this.success("User registration:\n " + res.data.session_id);
            _this.session_id.next(res.data.session_id);
        }, function (error) {
            _this.error(error);
        });
    };
    Test.prototype.login = function () {
        var _this = this;
        var sampleLoginData = {
            id: this.form.id,
            password: this.form.password
        };
        this.user.login(sampleLoginData).subscribe(function (res) {
            _this.success("User Login:\n " + res.data.session_id);
            _this.login_session_id.next(res.data.session_id);
        }, function (error) {
            _this.error(error);
        });
    };
    Test.prototype.getUserData = function (callback) {
        var _this = this;
        this.user.data().subscribe(function (res) {
            _this.success("User Get Data: ");
            console.log(res['data']['user']);
            callback();
        }, function (error) {
            _this.error(error, "getUserData() : error : ");
        });
    };
    Test.prototype.userUpdate = function () {
        var _this = this;
        var record = {};
        this.user.edit(record).subscribe(function (res) {
            _this.success("userUpdate() : ", res);
            _this.update_session_id.next(res.data.session_id);
        }, function (err) {
            _this.error(err, "userUpdate(): ");
        });
    };
    Test.prototype.logout = function () {
        var _this = this;
        this.user.logout().subscribe(function (res) {
            _this.success("logout() : ", res);
        }, function (err) {
            _this.error(err, "logout(): ");
        });
    };
    // forumCreate( callback ) {
    //     //console.log('forumCreate');
    //     let id = 'forum' + (new Date).getHours() + (new Date).getMinutes() + (new Date).getSeconds();
    //     let req: CONFIG_CREATE = {
    //         id: id
    //     };
    //     this.forum.create( req ).subscribe( (res: CONFIG_CREATE_RESPONSE) => {
    //         this.success("Forum create: " + res.data.idx );
    //         callback();
    //     }, error => {
    //         console.error( error );
    //     });
    // }
    Test.prototype.postCreate = function () {
        console.log('postCreate');
    };
    return Test;
}());
Test = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_backend__["Backend"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_backend__["Backend"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__model_user__["User"]) === "function" && _b || Object])
], Test);

var _a, _b;
//# sourceMappingURL=test.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_share_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_forum_post_forum_post__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostListComponent = (function () {
    function PostListComponent(share, postData, modal) {
        var _this = this;
        this.share = share;
        this.postData = postData;
        this.modal = modal;
        this.no_of_items_in_one_page = 0;
        this.post_config_id = '';
        this.posts = [];
        this.pageOption = {
            limitPerPage: 3,
            currentPage: 1,
            limitPerNavigation: 4,
            totalRecord: 0
        };
        this.searchPostForm = {};
        this.searchQuery = {
            limit: this.pageOption['limitPerPage'],
            extra: { file: true }
        };
        this.searchPostChangeDebounce = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.searchQuery['order'] = 'idx DESC';
        if (this.post_config_id !== void 0)
            this.post_config_id = 'qna';
        this.loadPostData();
        this.searchPostChangeDebounce
            .debounceTime(300) // wait 300ms after the last event before emitting last event
            .subscribe(function () { return _this.onChangedPostSearch(); });
    }
    PostListComponent.prototype.onClickEdit = function (_post) {
        if (_post.deleted == '1')
            return;
        console.log("My post:", _post);
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__modals_forum_post_forum_post__["a" /* ForumPostComponent */]);
        modalRef.componentInstance['post'] = _post;
        modalRef.result.then(function () {
        }).catch(function (e) { return console.log('exit ' + e); });
    };
    PostListComponent.prototype.onClickDelete = function (_post) {
        var _this = this;
        if (_post.deleted == '1')
            return;
        console.log(_post.idx);
        this.postData.delete(parseInt(_post.idx)).subscribe(function (res) {
            console.log("delete response: ", res);
            _post.deleted = '1';
            //this.posts = this.posts.filter( ( post: POST ) => post.idx != _post.idx );
        }, function (err) { return _this.postData.alert(err); });
    };
    PostListComponent.prototype.loadPostData = function () {
        var _this = this;
        this.posts = [];
        this.searchQuery.page = this.pageOption.currentPage;
        this.searchQuery.extra['post_config_id'] = this.post_config_id ? this.post_config_id : null;
        console.log("Meow:", this.searchQuery.extra['post_config_id']);
        this.postData.list(this.searchQuery).subscribe(function (res) {
            console.log('this.postData.list::', res);
            _this.posts = res.data.posts;
            _this.pageOption.totalRecord = parseInt(res.data.total);
            _this.posts.map(function (post) {
                post.created = (new Date(parseInt(post.created) * 1000)).toString();
            });
        }, function (err) { return _this.postData.alert(err); });
    };
    PostListComponent.prototype.onChangePostSearch = function () {
        this.searchPostChangeDebounce.next();
    };
    PostListComponent.prototype.onChangedPostSearch = function () {
        //console.log('onChangeSearch', this.searchPostForm);
        if (this.searchPostForm.title) {
            if (this.searchPostForm.title.length < 2)
                return;
        }
        if (this.searchPostForm.content) {
            if (this.searchPostForm.content.length < 2)
                return;
        }
        var cond = '';
        var bind = '';
        if (this.searchPostForm.title)
            cond += "title LIKE ? ";
        if (this.searchPostForm.title)
            bind += "%" + this.searchPostForm.title + "%";
        if (this.searchPostForm.content)
            cond += cond ? "AND content LIKE ? " : "content LIKE ?";
        if (this.searchPostForm.content)
            bind += bind ? ",%" + this.searchPostForm.content + "%" : "%" + this.searchPostForm.content + "%";
        this.searchQuery.where = cond;
        this.searchQuery.bind = bind;
        this.searchQuery.order = 'idx DESC';
        this.pageOption.currentPage = 1;
        this.loadPostData();
    };
    PostListComponent.prototype.onPostPageClick = function ($event) {
        //console.log('onPageClick::$event',$event);
        this.pageOption['currentPage'] = $event;
        this.loadPostData();
    };
    return PostListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PostListComponent.prototype, "no_of_items_in_one_page", void 0);
PostListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'post-list-component',
        template: __webpack_require__(466)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_share_service__["a" /* ShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_share_service__["a" /* ShareService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["PostData"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object])
], PostListComponent);

var _a, _b, _c;
//# sourceMappingURL=post-list-component.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(activeModal, fb, user) {
        this.activeModal = activeModal;
        this.fb = fb;
        this.user = user;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ChangePasswordComponent.prototype.createForm = function () {
        this.formGroup = this.fb.group({
            old_password: [],
            new_password: []
        });
    };
    ChangePasswordComponent.prototype.onClickCancel = function () {
        console.log("Change Password Click Cancel");
    };
    ChangePasswordComponent.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    ChangePasswordComponent.prototype.onClickChangePassword = function () {
        var _this = this;
        var req = {
            old_password: this.formGroup.get('old_password').value,
            new_password: this.formGroup.get('new_password').value
        };
        this.user.changePassword(req).subscribe(function (res) {
            console.log("Change Password Success");
            _this.activeModal.close();
        }, function (err) { return _this.user.alert(err); });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'change-password-component',
        template: __webpack_require__(475),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["User"]) === "function" && _c || Object])
], ChangePasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=change-password.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassInfoModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClassInfoModal = (function () {
    function ClassInfoModal(app, activeModal) {
        this.app = app;
        this.activeModal = activeModal;
        this.listenEvents();
    }
    ClassInfoModal.prototype.listenEvents = function () {
        var _this = this;
        this.app.myEvent.subscribe(function (item) {
            if (item.eventType == 'post') {
                console.log("Success:", item.data);
                _this.classInfo = item.data;
            }
        });
    };
    ClassInfoModal.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    return ClassInfoModal;
}());
ClassInfoModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'class-info-component',
        template: __webpack_require__(476),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _b || Object])
], ClassInfoModal);

var _a, _b;
//# sourceMappingURL=class-info.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindIdModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindIdModal = (function () {
    function FindIdModal(activeModal) {
        this.activeModal = activeModal;
        this.loading = false;
        this.id = '';
    }
    FindIdModal.prototype.ngOnInit = function () {
    };
    FindIdModal.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    FindIdModal.prototype.onClickFindID = function () {
        //   this.loading = true;
        //   this.user.get( 'email/'+this.email.replace('@', '+').replace('.', '-'), res =>{
        //       console.log('res ' + JSON.stringify(res))  
        //       this.id = res['id'];      
        //   }, error => console.error(' error ' +error ) )
    };
    return FindIdModal;
}());
FindIdModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'findID-component',
        template: __webpack_require__(477)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], FindIdModal);

var _a;
//# sourceMappingURL=find-id.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ForgotPasswordComponent.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    /**
     * @description: user needs to provide valid registered email.
     */
    ForgotPasswordComponent.prototype.onClickResetPassword = function () {
        // this.user.resetpassword( this.email , success =>{
        //     console.log( ' failed ' + success );
        // }, fail =>{
        //     console.log( ' error ' + fail );
        // }, complete =>{
        //     console.log( ' completed ' );
        //     this.activeModal.close();
        // })
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'forgotpassword-component',
        template: __webpack_require__(478)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], ForgotPasswordComponent);

var _a;
//# sourceMappingURL=forgot-password.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QnaPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Forum } from '../../../backend-angular-api/forum';
// import { FORUM_DATA_REQUEST_DATA } from '../../../backend-angular-api/interface';

//import { POST_CREATE, USER } from './../../../angular-backend/interface';
//import { Post } from './../../../angular-backend/post';
//import { User } from './../../../angular-backend/model/user';

var QnaPostComponent = (function () {
    // pageOption: PAGINATION_OPTION = {
    //     limitPerPage: 5,
    //     currentPage:1,
    //     numberPerNav: 4, //
    //     totalRecord: 0
    // };
    // searchQuery = <LIST>{
    //     limit: this.pageOption['limitPerPage']
    // };
    function QnaPostComponent(activeModal, app, post, user, postConfig) {
        this.activeModal = activeModal;
        this.app = app;
        this.post = post;
        this.user = user;
        this.postConfig = postConfig;
        this.form = {};
        this.postConfigs = [];
        // this.searchQuery['order'] = 'idx ASC';
    }
    QnaPostComponent.prototype.ngOnInit = function () {
        this.getQnaConfig();
        if (this.user.logged)
            this.getUserData();
    };
    QnaPostComponent.prototype.getQnaConfig = function () {
        // let qna = "qna";
        // let cond = '';
        // let bind = '';
        //  if ( qna ) cond += cond ? "AND name LIKE ? " : "name LIKE ?";
        // if ( qna ) bind += bind ? `,%${qna}%` : `%${qna}%`;
        // this.searchQuery.where = cond;
        // this.searchQuery.bind = bind;
        // this.searchQuery.order= 'idx DESC';
        // this.pageOption.currentPage = 1;
        this.loadQnaPostConfig();
    };
    QnaPostComponent.prototype.loadQnaPostConfig = function () {
        // this.postConfigs = [];
        // this.searchQuery.page = this.pageOption.currentPage;
        // this.postConfig.list( this.searchQuery ).subscribe( (res: POST_LIST_RESPONSE ) => {
        // console.log("config list:",res);
        // this.postConfigs = res.data.configs;
        // this.pageOption.totalRecord = parseInt(res.data.total);
        // this.postConfigs.map( (config: CONFIG) => {
        //     config.created = ( new Date( parseInt(config.created) * 1000 ) ).toString();
        // });
        // //Change the form config idx to post config idx
        // this.form.post_config_id = this.postConfigs[0].idx.toString();
        // }, err => this.error( err ) );
    };
    QnaPostComponent.prototype.getUserData = function () {
        var _this = this;
        this.user.data().subscribe(function (res) {
            _this.getDataSuccess(res);
        }, function (error) {
            _this.error(error);
        });
    };
    QnaPostComponent.prototype.getDataSuccess = function (res) {
        console.log(res['data']['user']);
        this.form.name = res['data']['user'].nickname;
        this.form.password = res['data']['user'].nickname;
    };
    QnaPostComponent.prototype.onClickDismiss = function () {
        this.activeModal.close();
    };
    QnaPostComponent.prototype.onClickPost = function () {
        var _this = this;
        this.post.create(this.form).subscribe(function (res) {
            console.log(res);
            _this.app.myEvent.emit({ eventType: "post" });
            _this.onClickDismiss();
        }, function (error) {
            _this.error(error);
        });
    };
    QnaPostComponent.prototype.error = function (error) {
        return this.post.errorResponse(error);
    };
    return QnaPostComponent;
}());
QnaPostComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'qna-post-component',
        template: __webpack_require__(481),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["PostData"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["User"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["PostConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend_angular_backend__["PostConfig"]) === "function" && _e || Object])
], QnaPostComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=post.js.map

/***/ }),
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 246;


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(304);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularBackendAdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModuleRouting = [
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["a" /* BackendAdminUserListPage */] },
    { path: 'admin/user/edit/:idx', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["d" /* BackendAdminUserEditPage */] },
    { path: 'admin/forum', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["e" /* BackendAdminForumConfigPage */] },
    { path: 'admin/forum/configs', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["e" /* BackendAdminForumConfigPage */] },
    { path: 'admin/forum/categories', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["f" /* BackendAdminForumCategoryPage */] },
    { path: 'admin/forum/posts', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["g" /* BackendAdminForumPostPage */] },
    { path: 'admin/forum/posts/:post_config_id', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["g" /* BackendAdminForumPostPage */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__angular_backend_admin__["b" /* BackendAdminPage */] },
];
var AngularBackendAdminRoutingModule = (function () {
    function AngularBackendAdminRoutingModule() {
    }
    return AngularBackendAdminRoutingModule;
}());
AngularBackendAdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(AdminModuleRouting)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AngularBackendAdminRoutingModule);

//# sourceMappingURL=angular-backend-admin.routing.js.map

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__define__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });







var Api = (function () {
    function Api(http) {
        this.http = http;
    }
    Api.prototype.backendUrl = function () {
        if (window['url_backend_api'] !== void 0)
            return window['url_backend_api'];
        else
            return __WEBPACK_IMPORTED_MODULE_2__config__["a" /* URL_BACKEND_API */];
    };
    /**
     *
     * @param error_code
     * @param error_message
     *
     * @code
     *      this.errorResponse( 'error-code' ); // Simply put error code
     *      this.errorResponse( -1234, 'error-message' ); // Error code with message. error code must be less than 0
     * @endcode
     *
     */
    Api.prototype.errorResponse = function (error_code, error_message) {
        if (error_message === void 0) { error_message = ''; }
        if (error_message) {
            return { code: error_code, message: error_message };
        }
        else {
            return {
                code: -999,
                message: error_code
            };
        }
    };
    /**
     *
     *
     *
     * @param code
     * @param message
     */
    Api.prototype.error = function (code, message) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(this.errorResponse(-420, "user-not-logged-in"));
    };
    Object.defineProperty(Api.prototype, "requestOptions", {
        get: function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({ headers: headers });
            return options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "logged", {
        get: function () {
            if (this.getSessionId())
                return true;
            else
                return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "admin", {
        get: function () {
            if (this.getSessionId()) {
                if (this.info.admin)
                    return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @deprecated use session info.
     * @param res
     */
    /*
    setSessionId( res: USER_LOGIN_RESPONSE ) {
      if ( res === void 0 || res.data === void 0 || res.data.session_id === void 0 ) {
        alert("CRITICAL ERROR: sessionSessionId() - please report this to admin.");
        return;
      }
      localStorage.setItem( API_KEY_SESSION_INFO, res.data.session_id );
    }
    */
    /**
     *
     * @param res - it can by any interface ( type ) as long as it has res.data.sessoin_id
     */
    Api.prototype.setSessionInfo = function (res) {
        if (res === void 0 || res.data === void 0 || res.data.session_id === void 0) {
            // No session_id will be returned if admin edits user info.
            // alert("CRITICAL ERROR: sessionSessionId() - please report this to admin.");
            return;
        }
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__define__["a" /* API_KEY_SESSION_INFO */], JSON.stringify(res.data));
    };
    // getSessionInfo() : SESSION_INFO {
    //     let data = localStorage.getItem( API_KEY_SESSION_INFO );
    //     //console.log(data);
    //     if ( data ) {
    //         try {
    //             return JSON.parse( data );
    //         }
    //         catch (e) {
    //             return null;
    //         }
    //     }
    //     else return null;
    // }
    Api.prototype.getSessionId = function () {
        return this.info.session_id;
        // let info = this.getSessionInfo();
        // // console.info(info);
        // if ( info ) return info.session_id;
        // // return localStorage.getItem( API_KEY_SESSION_INFO );
        // else return null;
    };
    Object.defineProperty(Api.prototype, "info", {
        /**
         * this.info.id
         */
        get: function () {
            var data = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__define__["a" /* API_KEY_SESSION_INFO */]);
            //console.log(data);
            if (data) {
                try {
                    return JSON.parse(data);
                }
                catch (e) {
                }
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    Api.prototype.deleteSessionInfo = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_3__define__["a" /* API_KEY_SESSION_INFO */]);
    };
    /**
     *
     *
     * Returns 'Observable' which gives an Object of 'sucess' or 'error' from PHP Backend.
     *
     */
    Api.prototype.post = function (data, option) {
        if (option === void 0) { option = {}; }
        var session_id = this.getSessionId();
        console.log('post session_id: ', session_id);
        if (session_id) {
            data['session_id'] = session_id;
        }
        else {
            console.log("session id is undefiend. so, it not set.");
            console.log(data);
        }
        data = this.buildQuery(data);
        var url = this.backendUrl() + '?' + data;
        console.log("post: ", url); // debug in console
        var o = this.http.post(this.backendUrl(), data, this.requestOptions);
        return this.processQuery(o, option);
    };
    /**
     *
     * Returns 'Observable' which gives an Object of 'sucess' or 'error' from PHP Backend.
     *
     * @attension If there is error on json(), then 'error' callback will be called on subscribe.
     *      만약, json() 또는 JSON.parse() 에서 에러가 발생하면, subscribe() 을 에러 콜백이 호출된다.
     */
    Api.prototype.get = function (url, option) {
        if (option === void 0) { option = {}; }
        //return this.http.get( url )
        return this.processQuery(this.http.get(url), option);
    };
    Api.prototype.processQuery = function (o, option) {
        var _this = this;
        if (option === void 0) { option = {}; }
        var timeout = __WEBPACK_IMPORTED_MODULE_2__config__["b" /* BACKEND_API_CONNECTION_TIMEOUT */];
        if (option['timeout'] !== void 0)
            timeout = option['timeout'];
        return o
            .timeout(timeout)
            .catch(function (err) {
            //console.log("catch() after .timeout()");
            //console.log(err);
            if (err instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["TimeoutError"]) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(_this.errorResponse(__WEBPACK_IMPORTED_MODULE_3__define__["b" /* ERROR_TIMEOUT */]));
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err);
        })
            .map(function (e) {
            ///
            // console.log('response body:', e['_body']); // debug. comment out to see errors from server.
            if (e['_body'] == '')
                throw _this.errorResponse(-408, 'response-is-empty.');
            if (e['_body'].charAt(0) != '{') {
                console.info("Maybe error");
                console.log(e['_body']);
            }
            var re = e.json();
            if (_this.isError(re)) {
                throw re;
            }
            else
                return re;
        })
            .catch(function (err) {
            console.log('Api::processQuery(): caught an error: ', err);
            if (err instanceof SyntaxError) {
                console.error(err); // debug
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(_this.errorResponse(__WEBPACK_IMPORTED_MODULE_3__define__["c" /* ERROR_JSON_PARSE */])); // JSON 에러
            }
            else if (err && err['code'] !== void 0 && err['code'] < 0)
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err); // 프로그램 적 에러
            else if (err['_body'] && err['_body']['total'] == 0 && err['_body']['type'] == 'error') {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(__WEBPACK_IMPORTED_MODULE_3__define__["d" /* RES_ERROR_DISCONNECTED */]);
            }
            else
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(err);
        });
    };
    /**
     * return true if the obj is error ( or error response )
     *
     *
     *
     * @param obj
     *      obj must be a form of "{ code: -123, message: 'error message'}"
     *      if 'code' does not exist, it is considered as an ERROR.
     *      if 'code' is less than 0, then it is an error.
     *
     *      { code: ... } 에서 code 값이 없거나 참의 값이면 에러로 간주한다.
     *
     * 참고로 internal sever error 의 경우에는 code 값이 없으로 '참'을 리턴한다.
     *
     * @return
     *      truthy value if the object is an error response.
     *      false if no error.
     * @code
     *
            if ( this.file.isError(err) ) return;

     * @endcode
     *
     */
    Api.prototype.isError = function (obj) {
        if (obj) {
            if (obj['code'] === void 0)
                return __WEBPACK_IMPORTED_MODULE_3__define__["e" /* ERROR_NO_ERROR_CODE */]; // if obj.code not exist.
            if (obj['code'])
                return obj['code']; // if obj.code is not 0.
        }
        return false;
    };
    /**
     * Returns true if it is an internal server error response.
     *
     *
     * @param obj
     */
    Api.prototype.isInternalServerError = function (obj) {
        return typeof obj['status'] !== void 0 && obj['status'] == 500;
    };
    Api.prototype.getErrorString = function (error) {
        if (error['status'] !== void 0 && error['status']) {
            if (error['status'] == 500)
                return "500 ( INTERNAL SERVER ERROR ) : It is a server error.";
            else
                return "ERROR RESPONSE CODE: " + error['status'];
        }
        else if (error === void 0) {
            return 'No error data';
        }
        else if (error['code'] == void 0) {
            return "No error code";
        }
        else if (error['message'] == __WEBPACK_IMPORTED_MODULE_3__define__["c" /* ERROR_JSON_PARSE */]) {
            return "ERROR: JSON PARSE ERROR: This may be PHP script error. " + error['message'];
        }
        else if (error['message'] == __WEBPACK_IMPORTED_MODULE_3__define__["b" /* ERROR_TIMEOUT */]) {
            return "ERROR: JSON PARSE ERROR: This may be PHP script error. " + error['message'];
        }
        else if (typeof error['code'] != 'undefined') {
            return ("ERROR: " + error['code'] + " : " + error['message']);
        }
        else {
            return "unhandled error: ";
            // alert("CRITICAL - UNHANDLED ERROR"); // this should never happen
        }
    };
    /**
     *
     * This simply alerts error message on browser.
     *
     * @param error
     */
    Api.prototype.alert = function (error) {
        alert(this.getErrorString(error));
    };
    // errorHandler( error ) {
    //     if ( error['code'] !== void 0 ) {
    //         console.info( "ERROR: ", error['message'] );
    //     }
    //     else if ( error['status'] !== void 0 ) {
    //         if ( error['status'] == 500 ) console.info("INTERNAL ERROR: It is a server error.");
    //         else console.info("ERROR RESPONSE CODE: ", error['status'] );
    //     }
    //     else if ( error == df.ERROR_JSON_PARSE ) {
    //       console.info("ERROR: JSON PARSE ERROR: ", error);
    //     }
    //     else {
    //         console.log("unhandled error:", error );
    //         alert("CRITICAL - UNHANDLED ERROR"); // this should never happen
    //     }
    // }
    Api.prototype.version = function () {
        return this.get(this.backendUrl() + '?route=version');
    };
    Api.prototype.errorCall = function () {
        return this.get(this.backendUrl() + '?route=system.error');
    };
    Api.prototype.successCall = function () {
        return this.version();
    };
    Api.prototype.scriptError = function () {
        return this.get(this.backendUrl() + '?route=system.scriptError');
    };
    Api.prototype.timeoutError = function () {
        return this.get(this.backendUrl() + '?route=system.timeoutError', { 'timeout': 1000 });
    };
    Api.prototype.internalServerError = function () {
        return this.get(this.backendUrl() + '?route=system.internalServerError');
    };
    Api.prototype.routeMethodError = function () {
        return this.get(this.backendUrl() + '?route=system.routeMethodError');
    };
    Api.prototype.routeRequiredError = function () {
        return this.get(this.backendUrl() + '?route=system.routeRequiredError');
    };
    /**
     * Returns the body of POST method.
     *
     * @attention This addes 'module', 'submit'. If you don't needed just user http_build_query()
     *
     * @param params must be an object.
     */
    Api.prototype.buildQuery = function (params) {
        // params[ 'module' ] = 'ajax'; // 'module' must be ajax.
        // params[ 'submit' ] = 1; // all submit must send 'submit'=1
        return this.http_build_query(params);
    };
    Api.prototype.http_build_query = function (formdata, numericPrefix, argSeparator) {
        if (numericPrefix === void 0) { numericPrefix = ''; }
        if (argSeparator === void 0) { argSeparator = ''; }
        var urlencode = this.urlencode;
        var value;
        var key;
        var tmp = [];
        var _httpBuildQueryHelper = function (key, val, argSeparator) {
            var k;
            var tmp = [];
            if (val === true) {
                val = '1';
            }
            else if (val === false) {
                val = '0';
            }
            if (val !== null) {
                if (typeof val === 'object') {
                    for (k in val) {
                        if (val[k] !== null) {
                            tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator));
                        }
                    }
                    return tmp.join(argSeparator);
                }
                else if (typeof val !== 'function') {
                    return urlencode(key) + '=' + urlencode(val);
                }
                else {
                    throw new Error('There was an error processing for http_build_query().');
                }
            }
            else {
                return '';
            }
        };
        if (!argSeparator) {
            argSeparator = '&';
        }
        for (key in formdata) {
            value = formdata[key];
            if (numericPrefix && !isNaN(key)) {
                key = String(numericPrefix) + key;
            }
            var query = _httpBuildQueryHelper(key, value, argSeparator);
            if (query !== '') {
                tmp.push(query);
            }
        }
        return tmp.join(argSeparator);
    };
    Api.prototype.urlencode = function (str) {
        str = (str + '');
        return encodeURIComponent(str)
            .replace(/!/g, '%21')
            .replace(/'/g, '%27')
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29')
            .replace(/\*/g, '%2A')
            .replace(/%20/g, '+');
    };
    /**
     *
     * It gets 'YYYY-MM-DD' input value from form 'date' input and splits into 'birth_year', 'birth_month', 'birth_day'.
     *
     *
     * @param u - user form.
     */
    Api.prototype.splitBirthdays = function (u) {
        u.birth_year = 0;
        u.birth_month = 0;
        u.birth_day = 0;
        if (u['birthday'] !== void 0 && u['birthday'] && u['birthday'].indexOf('-') != -1) {
            var dates = u['birthday'].split('-');
            if (dates.length == 3) {
                u.birth_year = dates[0];
                u.birth_month = dates[1];
                u.birth_day = dates[2];
            }
        }
        return u;
    };
    Api.prototype.mk2c = function (d) {
        if (d < 10)
            return '0' + d;
        else
            return d;
    };
    Api.prototype.composeBirthday = function (u) {
        if (u['birth_day'] !== void 0) {
            u['birthday'] = u['birth_year'] + '-' + this.mk2c(u['birth_month']) + '-' + this.mk2c(u['birth_day']);
        }
        return u;
    };
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_BACKEND_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BACKEND_API_CONNECTION_TIMEOUT; });
/* unused harmony export NO_OF_ITEMS_PER_PAGE */
var URL_BACKEND_API = 'https://englishfordevelopers.com/index.php';
// export const URL_BACKEND_API = 'http://backend.dev/index.php';
//export const URL_BACKEND_API = 'http://localhost/www/backend/index.php';
// export const URL_BACKEND_API = 'http://localhost:8000/index.php';
//
//export const URL_BACKEND_API = '//backend.sonub.com/index.php'; // real server
// export const URL_BACKEND_API = 'http://backend.org/index.php'; // Mr. Song's test server.
var BACKEND_API_CONNECTION_TIMEOUT = 45000; // request time out
// request time out
var NO_OF_ITEMS_PER_PAGE = 5;
//# sourceMappingURL=config.js.map

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentFormBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/debounceTime';

var CommentFormBasicComponent = (function () {
    function CommentFormBasicComponent(fb, postComment, file) {
        this.fb = fb;
        this.postComment = postComment;
        this.file = file;
        this.mode = 'create';
        this.comment = {}; /// only for editing comment.
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.create = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.files = [];
    }
    CommentFormBasicComponent.prototype.ngOnInit = function () {
        console.log('parent post: ', this.post);
        this.createForm();
    };
    CommentFormBasicComponent.prototype.createForm = function () {
        console.log("CommentFormComponent::createForm() : mode: ", this.mode);
        console.log("CommentFormComponent::createForm()", this.comment);
        if (this.mode == 'create') {
            this.formGroup = this.fb.group({
                content: []
            });
        }
        else {
            this.files = this.comment.files ? this.comment.files : [];
            this.formGroup = this.fb.group({
                content: [this.comment.content]
            });
        }
    };
    CommentFormBasicComponent.prototype.onSubmit = function () {
        if (this.mode == 'create')
            this.createComment();
        else
            this.editComment();
    };
    CommentFormBasicComponent.prototype.createComment = function () {
        var _this = this;
        console.log("CommentFormComponent::createComment() Going to create a comment: ", this.formGroup.value);
        var req = {
            parent_idx: this.parent_idx,
            content: this.formGroup.get('content').value
        };
        req.file_hooks = this.files.map(function (f) { return f.idx; });
        this.postComment.create(req).subscribe(function (res) {
            console.log('comment create: ', res);
            /// inserting comment into the proper position.
            //let post = this.list.data.posts.find( (post: _POST) => post.idx == res.data.root_idx );
            var post = _this.post;
            console.log('parent post: ', post);
            if (post === void 0)
                return;
            if (post.comments === void 0)
                post.comments = [];
            var i = post.comments.findIndex(function (c) { return c.idx == res.data.parent_idx; });
            if (i == -1)
                post.comments.unshift(res.data);
            else {
                post.comments.splice(i + 1, 0, res.data);
            }
            _this.createSuccess(res.data);
        }, function (err) { return _this.postComment.alert(err); });
    };
    CommentFormBasicComponent.prototype.editComment = function () {
        var _this = this;
        console.log("CommentFormComponent::editComment() Going to edit a comment: ", this.formGroup.value);
        var req = {
            idx: this.comment.idx,
            content: this.formGroup.get('content').value
        };
        req.file_hooks = this.files.map(function (f) { return f.idx; });
        console.log('files: ', this.files);
        console.log('file_hooks', req.file_hooks);
        this.postComment.edit(req).subscribe(function (res) {
            console.log('editComment():', res.data);
            Object.assign(_this.comment, res.data); // two-way binding. pass-by-reference.
            _this.editSuccess(res.data);
        }, function (err) { return _this.postComment.alert(err); });
    };
    CommentFormBasicComponent.prototype.reset = function () {
        this.files = [];
        this.formGroup.get('content').patchValue('');
    };
    CommentFormBasicComponent.prototype.createSuccess = function (comment) {
        this.reset();
        this.create.emit(comment);
    };
    CommentFormBasicComponent.prototype.editSuccess = function (comment) {
        this.reset();
        this.edit.emit(comment);
    };
    CommentFormBasicComponent.prototype.onClickCancel = function () {
        this.cancel.emit();
    };
    return CommentFormBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], CommentFormBasicComponent.prototype, "mode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], CommentFormBasicComponent.prototype, "parent_idx", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_COMMENT"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_COMMENT"]) === "function" && _a || Object)
], CommentFormBasicComponent.prototype, "comment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], CommentFormBasicComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], CommentFormBasicComponent.prototype, "create", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], CommentFormBasicComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST"]) === "function" && _b || Object)
], CommentFormBasicComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST_LIST_RESPONSE"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST_LIST_RESPONSE"]) === "function" && _c || Object)
], CommentFormBasicComponent.prototype, "list", void 0);
CommentFormBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'comment-form-basic-component',
        template: __webpack_require__(428)
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostComment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostComment"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["File"]) === "function" && _f || Object])
], CommentFormBasicComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=comment-form-basic-component.js.map

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interface__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentViewBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentViewBasicComponent = (function () {
    function CommentViewBasicComponent(postComment, domSanitizer) {
        this.postComment = postComment;
        this.domSanitizer = domSanitizer;
        this.mode = '';
    }
    CommentViewBasicComponent.prototype.onClickLike = function (choice) {
        var _this = this;
        this.postComment.vote(this.comment.idx, choice).subscribe(function (res) {
            console.log('res: ', res);
            _this.comment.vote_good = res.data.vote_good;
            _this.comment.vote_bad = res.data.vote_bad;
        }, function (err) { return _this.postComment.alert(err); });
    };
    CommentViewBasicComponent.prototype.onClickReport = function () {
        var _this = this;
        this.postComment.report(this.comment.idx).subscribe(function (res) {
            console.log('res: ', res);
            _this.comment.report = res.data.report;
        }, function (err) { return _this.postComment.alert(err); });
    };
    Object.defineProperty(CommentViewBasicComponent.prototype, "myComment", {
        get: function () {
            return this.comment.user.id == this.postComment.info.id;
        },
        enumerable: true,
        configurable: true
    });
    CommentViewBasicComponent.prototype.sanitize = function (obj) {
        if (obj === void 0 || obj['content'] === void 0 || !obj['content'])
            return '';
        var c = obj['content'].replace(/\n/g, "<br>");
        return this.domSanitizer.bypassSecurityTrustHtml(c);
    };
    return CommentViewBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__interface__["_COMMENT"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interface__["_COMMENT"]) === "function" && _a || Object)
], CommentViewBasicComponent.prototype, "comment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__interface__["_POST"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interface__["_POST"]) === "function" && _b || Object)
], CommentViewBasicComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__interface__["_POST_LIST_RESPONSE"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interface__["_POST_LIST_RESPONSE"]) === "function" && _c || Object)
], CommentViewBasicComponent.prototype, "list", void 0);
CommentViewBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'comment-view-basic-component',
        template: __webpack_require__(429)
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostComment"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostComment"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object])
], CommentViewBasicComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=comment-view-basic-component.js.map

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__define__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFormBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileFormBasicComponent = (function () {
    function FileFormBasicComponent(file, ngZone) {
        this.file = file;
        this.ngZone = ngZone;
        this.percentage = 0;
    }
    FileFormBasicComponent.prototype.onChangeFile = function (_) {
        var _this = this;
        this.percentage = 1;
        this.file.uploadPostFile(_.files[0], function (percentage) {
            console.log('percentage:', percentage);
            _this.percentage = percentage;
            _this.ngZone.run(function () { });
        }).subscribe(function (res) {
            _this.files.push(res.data);
            console.log('files: ', _this.files);
            _this.percentage = 0;
        }, function (err) {
            console.log('err:', err);
            if (_this.file.isError(err) == __WEBPACK_IMPORTED_MODULE_2__define__["g" /* ERROR_NO_FILE_SELECTED */])
                return;
            _this.file.alert(err);
        });
    };
    FileFormBasicComponent.prototype.onClickDeleteFile = function (file) {
        var _this = this;
        console.log("FileFormComponent::onClickDeleteFile(file): ", file);
        this.file.delete(file.idx).subscribe(function (res) {
            console.log("file delete: ", res);
            var i = _this.files.findIndex(function (f) { return f.idx == res.data.idx; });
            // Object.assign( this.files, files );
            _this.files.splice(i, 1);
            console.log('files: ', _this.files);
        }, function (err) { return _this.file.alert(err); });
    };
    return FileFormBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], FileFormBasicComponent.prototype, "files", void 0);
FileFormBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'file-form-basic-component',
        template: __webpack_require__(430),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend__["File"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === "function" && _b || Object])
], FileFormBasicComponent);

var _a, _b;
//# sourceMappingURL=file-form-basic-component.js.map

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormBasicComponent = (function () {
    function LoginFormBasicComponent(user) {
        this.user = user;
        this.login = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.form = {};
    }
    LoginFormBasicComponent.prototype.onClickLogin = function () {
        var _this = this;
        this.user.login(this.form).subscribe(function (res) {
            console.log(res);
            _this.login.emit(res);
        }, function (err) {
            _this.error.emit(_this.user.getErrorString(err));
            //this.user.alert(err);
            console.log(err);
        });
    };
    LoginFormBasicComponent.prototype.onClickCancel = function () {
        this.cancel.emit();
    };
    return LoginFormBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], LoginFormBasicComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], LoginFormBasicComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], LoginFormBasicComponent.prototype, "error", void 0);
LoginFormBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'login-form-basic-component',
        template: __webpack_require__(431)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend__["User"]) === "function" && _a || Object])
], LoginFormBasicComponent);

var _a;
//# sourceMappingURL=login-form-basic-component.js.map

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNavigationComponent = (function () {
    function PageNavigationComponent() {
        this.numbers = [];
        this.no_of_total_pages = 0;
        this.currentDisplay = 0;
        this.no_of_total_items = null;
        this.no_of_items_in_one_page = null;
        this.no_of_pages_in_navigator = null;
        this.no_of_current_page = 1;
        this.show_prev_next = true;
        this.show_first_last = true;
        this.text_prev = '&lsaquo;';
        this.text_next = '&rsaquo;';
        this.text_first = '&laquo;';
        this.text_last = '&raquo;';
        this.structureClass = {
            ul: 'pagination',
            li: 'page-item',
            a: 'page-link',
            active: 'active',
            pageIn: 'page-indicator'
        };
        this.pageClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        //console.log('pagination::constructor()');
    }
    PageNavigationComponent.prototype.ngOnChanges = function () {
        //console.log("ngOnChanges: ...");
        if (this.no_of_total_items > 0)
            this.showPagination();
    };
    PageNavigationComponent.prototype.showPagination = function () {
        //console.log('this.no_of_total_items:', this.no_of_total_items);
        //console.log('this.no_of_items_in_one_page:', this.no_of_items_in_one_page);
        //console.log('this.no_of_pages_in_navigator:', this.no_of_pages_in_navigator);
        this.no_of_total_pages = Math.ceil(this.no_of_total_items / this.no_of_items_in_one_page);
        this.currentDisplay = Math.floor((this.no_of_current_page - 1) / this.no_of_pages_in_navigator);
        this.numbers = [];
        for (var i = 0; i < this.no_of_pages_in_navigator; i++) {
            var current_page_no = this.currentDisplay * this.no_of_pages_in_navigator + i;
            var next_block_page_no = (this.currentDisplay + 1) * this.no_of_pages_in_navigator;
            if (current_page_no < this.no_of_total_pages && current_page_no < next_block_page_no) {
                this.numbers.push(current_page_no + 1);
            }
        }
        //console.log('numbers: ', this.numbers);
    };
    PageNavigationComponent.prototype.nextPage = function () {
        var nextPage = (this.currentDisplay + 1) * this.no_of_pages_in_navigator + 1;
        //console.log('nextPage: ', nextPage);
        this.pageClick.emit(nextPage);
    };
    PageNavigationComponent.prototype.previousPage = function () {
        var prevPage = (this.currentDisplay) * this.no_of_pages_in_navigator;
        //console.log('prev: ', prevPage);
        this.pageClick.emit(prevPage);
    };
    PageNavigationComponent.prototype.gotoPage = function (page) {
        //console.log('page: ', page);
        this.pageClick.emit(page);
    };
    PageNavigationComponent.prototype.gotoLast = function () {
        this.pageClick.emit(this.no_of_total_pages);
    };
    PageNavigationComponent.prototype.gotoFirst = function () {
        this.pageClick.emit(1);
    };
    return PageNavigationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PageNavigationComponent.prototype, "no_of_total_items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PageNavigationComponent.prototype, "no_of_items_in_one_page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PageNavigationComponent.prototype, "no_of_pages_in_navigator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PageNavigationComponent.prototype, "no_of_current_page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], PageNavigationComponent.prototype, "show_prev_next", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], PageNavigationComponent.prototype, "show_first_last", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PageNavigationComponent.prototype, "text_prev", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PageNavigationComponent.prototype, "text_next", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PageNavigationComponent.prototype, "text_first", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PageNavigationComponent.prototype, "text_last", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], PageNavigationComponent.prototype, "structureClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PageNavigationComponent.prototype, "pageClick", void 0);
PageNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'page-navigation',
        template: __webpack_require__(432),
        styles: [__webpack_require__(426)]
    }),
    __metadata("design:paramtypes", [])
], PageNavigationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaswordChangeFormBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaswordChangeFormBasicComponent = (function () {
    function PaswordChangeFormBasicComponent(fb, user) {
        this.fb = fb;
        this.user = user;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    PaswordChangeFormBasicComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    PaswordChangeFormBasicComponent.prototype.createForm = function () {
        this.formGroup = this.fb.group({
            old_password: [],
            new_password: []
        });
    };
    PaswordChangeFormBasicComponent.prototype.onClickCancel = function () {
        this.cancel.emit();
    };
    PaswordChangeFormBasicComponent.prototype.onClickChangePassword = function () {
        var _this = this;
        var req = {
            old_password: this.formGroup.get('old_password').value,
            new_password: this.formGroup.get('new_password').value
        };
        this.user.changePassword(req).subscribe(function (res) {
            _this.update.emit();
        }, function (err) { return _this.user.alert(err); });
    };
    return PaswordChangeFormBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PaswordChangeFormBasicComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PaswordChangeFormBasicComponent.prototype, "update", void 0);
PaswordChangeFormBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'password-change-form-basic-component',
        template: __webpack_require__(433)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["User"]) === "function" && _b || Object])
], PaswordChangeFormBasicComponent);

var _a, _b;
//# sourceMappingURL=password-change-form-basic-component.js.map

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFormBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostFormBasicComponent = (function () {
    function PostFormBasicComponent(fb, file, postData) {
        this.fb = fb;
        this.file = file;
        this.postData = postData;
        this.create = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.post = {}; // post data to edit. this is only used when editing.
        this.files = [];
    }
    PostFormBasicComponent.prototype.ngOnInit = function () {
        /// test
        //this.post_config_id = 'qna'; // test
        this.createForm();
        //this.createPost(); // test
    };
    PostFormBasicComponent.prototype.createForm = function () {
        console.log('post config id: ', this.post_config_id);
        if (this.isCreate()) {
            console.log("creating");
            this.files = [];
            this.formGroup = this.fb.group({
                post_config_id: [this.post_config_id],
                title: [],
                content: [],
                link: []
            });
        }
        else {
            this.files = this.post.files ? this.post.files : [];
            this.formGroup = this.fb.group({
                // post_config_id: [],
                title: [this.post.title],
                content: [this.post.content],
                link: [this.post.link]
            });
        }
        console.log(this.formGroup.value);
    };
    PostFormBasicComponent.prototype.onSubmit = function () {
        console.log(this.formGroup.value);
        if (this.isCreate())
            this.createPost();
        else
            this.editPost();
    };
    PostFormBasicComponent.prototype.reset = function () {
        this.files = [];
        this.formGroup.get('title').patchValue('');
        this.formGroup.get('content').patchValue('');
    };
    PostFormBasicComponent.prototype.createSuccess = function (post) {
        this.reset();
        this.create.emit(post);
    };
    PostFormBasicComponent.prototype.editSuccess = function (post) {
        this.reset();
        console.log("emit: ", post);
        this.edit.emit(post);
    };
    PostFormBasicComponent.prototype.onClickCancel = function () {
        this.cancel.emit();
    };
    /**
     *
     * Emits the newly created post. Meaning, the post list page should take it and unshift it.
     *
     */
    PostFormBasicComponent.prototype.createPost = function () {
        var _this = this;
        var create = this.formGroup.value;
        //create.post_config_id = this.post_config_id;
        create.file_hooks = this.files.map(function (f) { return f.idx; });
        this.postData.create(create).subscribe(function (res) {
            console.log(res);
            _this.createSuccess(res.data);
        }, function (err) { return _this.postData.alert(err); });
    };
    /**
     * After edit, it assigns to original reference. Meaning, it does two-way binding.
     */
    PostFormBasicComponent.prototype.editPost = function () {
        var _this = this;
        var edit = this.formGroup.value;
        edit.idx = this.post.idx;
        edit.file_hooks = this.files.map(function (f) { return f.idx; });
        console.log('post-form-conpoment::editPost()', edit);
        this.postData.edit(edit).subscribe(function (res) {
            console.log('after edit: ', res);
            Object.assign(_this.post, res.data); // two-way binding since it is pass-by-reference.
            //this.post = res.data;
            _this.editSuccess(res.data);
        }, function (err) { return _this.postData.alert(err); });
    };
    PostFormBasicComponent.prototype.isCreate = function () {
        return this.post === void 0 || this.post.idx === void 0;
    };
    PostFormBasicComponent.prototype.isEdit = function () {
        return !this.isCreate();
    };
    return PostFormBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PostFormBasicComponent.prototype, "create", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PostFormBasicComponent.prototype, "edit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PostFormBasicComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], PostFormBasicComponent.prototype, "post_config_id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST"]) === "function" && _a || Object)
], PostFormBasicComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], PostFormBasicComponent.prototype, "option", void 0);
PostFormBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'post-form-basic-component',
        template: __webpack_require__(434)
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["File"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"]) === "function" && _d || Object])
], PostFormBasicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-form-basic-component.js.map

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostViewBasicComponent = (function () {
    function PostViewBasicComponent(postData, domSanitizer) {
        this.postData = postData;
        this.domSanitizer = domSanitizer;
        this.showPostEditForm = false;
        this.showCommentForm = false;
    }
    PostViewBasicComponent.prototype.ngOnInit = function () {
        //console.log("post-view-basic-component: post: ", this.post);
    };
    PostViewBasicComponent.prototype.onClickLike = function (choice) {
        var _this = this;
        this.postData.vote(this.post.idx, choice).subscribe(function (res) {
            console.log('res: ', res);
            _this.post.vote_good = res.data.vote_good;
            _this.post.vote_bad = res.data.vote_bad;
        }, function (err) { return _this.postData.alert(err); });
    };
    PostViewBasicComponent.prototype.onClickReport = function () {
        var _this = this;
        this.postData.report(this.post.idx).subscribe(function (res) {
            console.log('res: ', res);
            _this.post.report = res.data.report;
        }, function (err) { return _this.postData.alert(err); });
    };
    Object.defineProperty(PostViewBasicComponent.prototype, "myPost", {
        get: function () {
            if (this.post.user === void 0)
                return false; // 'post data' may not have user information.
            return this.post.user.id == this.postData.info.id;
        },
        enumerable: true,
        configurable: true
    });
    PostViewBasicComponent.prototype.sanitize = function (obj) {
        if (obj === void 0 || obj['content'] === void 0 || !obj['content'])
            return '';
        var c = obj['content'].replace(/\n/g, "<br>");
        return this.domSanitizer.bypassSecurityTrustHtml(c);
    };
    return PostViewBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST"]) === "function" && _a || Object)
], PostViewBasicComponent.prototype, "post", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST_LIST_RESPONSE"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["_POST_LIST_RESPONSE"]) === "function" && _b || Object)
], PostViewBasicComponent.prototype, "list", void 0);
PostViewBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'post-view-basic-component',
        template: __webpack_require__(435)
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend__["PostData"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], PostViewBasicComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=post-view-basic-component.js.map

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__define__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterFormBasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterFormBasicComponent = (function () {
    function RegisterFormBasicComponent(router, fb, user, ngZone, 
        //private router: Router,
        file) {
        var _this = this;
        this.router = router;
        this.fb = fb;
        this.user = user;
        this.ngZone = ngZone;
        this.file = file;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.data = {};
        this.percentage = 0;
        this.formErrors = {
            id: '',
            password: '',
            name: '',
            email: ''
        };
        this.validationMessages = {
            id: {
                'required': 'ID is required.',
                'minlength': 'ID must be at least 3 characters long.',
                'maxlength': 'ID cannot be more than 32 characters long.'
            },
            name: {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 3 characters long.',
                'maxlength': 'Name cannot be more than 32 characters long.'
            },
            password: {
                'required': 'Password is required.',
                'minlength': 'Password must be at least 5 characters long.',
                'maxlength': 'Password cannot be more than 128 characters long.'
            },
            email: {
                'required': 'Email is required.',
                'minlength': 'Email must be at least 8 characters long.',
                'maxlength': 'Email cannot be more than 32 characters long.',
                'malformed': 'Email must be in valid format. valudator error'
            }
        };
        this.form = fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(32)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, this.emailValidator]],
            mobile: [],
            gender: [],
            birthday: []
        });
        if (!this.user.logged) {
            this.form.addControl('id', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(32)]));
            this.form.addControl('password', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(128)]));
        }
        this.form.valueChanges
            .debounceTime(500)
            .subscribe(function (res) { return _this.onValueChanged(res); });
        if (this.user.logged)
            this.loadUserData();
    }
    RegisterFormBasicComponent.prototype.emailValidator = function (c) {
        if (!c.value)
            return;
        if (c.value.length < 8) {
            return { 'minlength': '' };
        }
        if (c.value.length > 64) {
            return { 'maxlength': '' };
        }
        var re = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(c.value);
        if (re)
            return;
        else
            return { 'malformed': '' };
    };
    RegisterFormBasicComponent.prototype.onValueChanged = function (data) {
        if (!this.form)
            return;
        var form = this.form;
        for (var field in this.formErrors) {
            this.formErrors[field] = ''; // clear previous error message (if any)
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    RegisterFormBasicComponent.prototype.loadUserData = function () {
        var _this = this;
        this.user.data().subscribe(function (res) {
            _this.data = res.data.user;
            _this.data = _this.user.composeBirthday(_this.data);
            // console.log(this.data);
            _this.form.patchValue(_this.data);
        }, function (err) {
            console.log('err: ', err);
            if (err.code == __WEBPACK_IMPORTED_MODULE_4__define__["h" /* ERROR_WRONG_SESSION_ID_NO_USER_DATA_BY_THAT_SESSION_ID */]) {
                _this.user.deleteSessionInfo();
                alert("WARNING: Your login had invalidated. Please login again.");
                _this.router.navigate(['/']);
            }
            else
                _this.user.alert(err);
        });
    };
    RegisterFormBasicComponent.prototype.onChangeFileUpload = function (_) {
        var _this = this;
        this.file.uploadPrimaryPhoto(_.files[0], function (p) {
            _this.percentage = p;
            _this.ngZone.run(function () { });
            console.log('p: ', _this.percentage);
        })
            .subscribe(function (res) {
            console.log("Register::onChangeFileUpload:: success: ", res);
            _this.data.primary_photo = res.data;
            _this.percentage = 0;
        }, function (err) {
            _this.percentage = 0;
            _this.file.alert(err);
        });
    };
    /**
     * @see readme#registration
     */
    RegisterFormBasicComponent.prototype.onClickRegister = function () {
        var _this = this;
        console.log(this.form.value);
        var register = this.user.splitBirthdays(this.form.value);
        if (this.data.primary_photo)
            register.file_hooks = [this.data.primary_photo.idx];
        this.user.register(register).subscribe(function (res) {
            // console.log('register: ', register);
            //this.router.navigate( [ '/' ] );
            _this.register.emit();
        }, function (err) { return _this.user.alert(err); });
    };
    RegisterFormBasicComponent.prototype.onClickUpdate = function () {
        var _this = this;
        var edit = this.user.splitBirthdays(this.form.value);
        /// When register, "id, password" exist. If the user registers, then it must be deleted. But if the user does not register, (only update, already register), id, pw does not exists.
        if (edit['id'] !== void 0)
            delete edit['id'];
        if (edit['password'] !== void 0)
            delete edit['password'];
        this.user.edit(edit).subscribe(function (res) {
            console.log(res);
            _this.update.emit();
        }, function (err) { return _this.user.alert(err); });
    };
    RegisterFormBasicComponent.prototype.onClickDeletePhoto = function () {
        var _this = this;
        console.log("FileFormComponent::onClickDeleteFile(file): ", this.data.primary_photo);
        this.file.delete(this.data.primary_photo.idx).subscribe(function (res) {
            console.log("file delete: ", res);
            _this.data.primary_photo = {};
        }, function (err) { return _this.file.alert(err); });
    };
    ////
    RegisterFormBasicComponent.prototype.onClickCancel = function () {
        this.cancel.emit();
    };
    return RegisterFormBasicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], RegisterFormBasicComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], RegisterFormBasicComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], RegisterFormBasicComponent.prototype, "update", void 0);
RegisterFormBasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'register-form-basic-component',
        template: __webpack_require__(436)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend__["User"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_backend__["File"]) === "function" && _e || Object])
], RegisterFormBasicComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register-form-basic-component.js.map

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminHeaderComponent = (function () {
    function AdminHeaderComponent(user, admin) {
        this.user = user;
        this.admin = admin;
        this.isLogged = null;
        this.navclass = "collapse navbar-collapse";
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        if (!this.user.logged)
            return;
        // This needs internet connection every load.
        // We must limit internet connection as much as possible.
        // this.user.data().subscribe( res =>{
        //   this.usertype = res.data.user.id;
        // });
    };
    AdminHeaderComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.user.logout().subscribe(function (res) {
            console.log(res);
        }, function (err) {
            _this.user.alert(err);
        });
    };
    AdminHeaderComponent.prototype.onClickMore = function () {
        this.navclass = this.navclass ? null : "collapse navbar-collapse";
    };
    return AdminHeaderComponent;
}());
AdminHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'admin-header',
        template: __webpack_require__(437),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_admin_service__["a" /* AdminService */]) === "function" && _b || Object])
], AdminHeaderComponent);

var _a, _b;
//# sourceMappingURL=header.js.map

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostEditModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

var PostEditModalComponent = (function () {
    function PostEditModalComponent(postData
        // public activeModal: NgbActiveModal
    ) {
        //
        // if (  ! this.idx ) activeModal.close('idx is empty');
        // else {
        //     this.loadPostData();
        // }
        this.postData = postData;
        this.post = [];
        this.posts = [];
    }
    return PostEditModalComponent;
}());
PostEditModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'post-edit-modal',
        template: __webpack_require__(438),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend__["PostData"]) === "function" && _a || Object])
], PostEditModalComponent);

var _a;
//# sourceMappingURL=edit.js.map

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSidebarComponent = (function () {
    function AdminSidebarComponent() {
    }
    return AdminSidebarComponent;
}());
AdminSidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'admin-sidebar',
        template: __webpack_require__(439),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [])
], AdminSidebarComponent);

//# sourceMappingURL=sidebar.js.map

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoBoxComponent = (function () {
    function InfoBoxComponent() {
        this.infoBoxClass = null;
        this.iconclass = null;
        this.iClass = 'fa-gear fa-3x';
        this.textClass = null;
        this.titleClass = null;
        this.contentClass = null;
        this.titleInnerHTML = 'Title';
        this.contentInnerHTML = 'Content';
    }
    return InfoBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "infoBoxClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "iconclass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "iClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "textClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "titleClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "contentClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "titleInnerHTML", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String)
], InfoBoxComponent.prototype, "contentInnerHTML", void 0);
InfoBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'info-box',
        template: __webpack_require__(446),
        styles: [__webpack_require__(380)]
    }),
    __metadata("design:paramtypes", [])
], InfoBoxComponent);

//# sourceMappingURL=info-box.js.map

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressGroupComponent = (function () {
    function ProgressGroupComponent() {
    }
    return ProgressGroupComponent;
}());
ProgressGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'progress-group',
        template: __webpack_require__(447),
        styles: [__webpack_require__(381)]
    }),
    __metadata("design:paramtypes", [])
], ProgressGroupComponent);

//# sourceMappingURL=progress-group.js.map

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomBrowserXhr; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomBrowserXhr = (function (_super) {
    __extends(CustomBrowserXhr, _super);
    function CustomBrowserXhr(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    CustomBrowserXhr.prototype.build = function () {
        var _this = this;
        var xhr = _super.prototype.build.call(this);
        // xhr.onprogress = (event) => {            
        //   this.service.downloadProgress.next(event);
        // };
        xhr.upload.onprogress = function (event) {
            if (_this.service)
                _this.service.uploadProgress.next(event);
        };
        return (xhr);
    };
    return CustomBrowserXhr;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* BrowserXhr */]));
CustomBrowserXhr = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__progress__["a" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__progress__["a" /* ProgressService */]) === "function" && _a || Object])
], CustomBrowserXhr);

var _a;
//# sourceMappingURL=custom-browser-xhr.js.map

/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(app) {
        var _this = this;
        this.app = app;
        app.setWidth(window.innerWidth);
        document.addEventListener("deviceready", function () { return _this.onDevinceReady(); }, false);
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(window, 'scroll')
            .debounceTime(100)
            .subscribe(function (event) {
            app.scrolled(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.app.scrolled(event); }, 10);
    };
    AppComponent.prototype.onDevinceReady = function () {
        console.log("yes, I am running in cordova.");
    };
    AppComponent.prototype.onResize = function (event) {
        this.app.setWidth(window.innerWidth);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: "\n    <router-outlet (window:resize)=\"onResize($event)\"></router-outlet>\n    <template ngbModalContainer></template>\n  ",
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_share_service__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_second_design_second_design__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_third_design_third_design__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_banners_payment_payment__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_banners_level_test_level_test__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_banners_inquiry_inquiry__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_banners_contact_contact__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_banners_reservation_reservation__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_banners_second_payment_second_payment__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_banners_second_level_test_second_level_test__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_banners_second_inquiry_second_inquiry__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_banners_second_contact_second_contact__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_banners_second_reservation_second_reservation__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_header_header__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_header_components_big_header_big_header__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_header_components_small_header_small_header__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__theme_kkang_kkang_header_kkang_header__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__theme_kkang_kkang_footer_kkang_footer__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__theme_kkang_kkang_header_components_kkang_small_header_kkang_small_header__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__theme_kkang_kkang_header_components_kkang_big_header_kkang_big_header__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__theme_plcenter_pl_footer_pl_footer__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__theme_plcenter_pl_header_pl_header__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__theme_plcenter_pl_header_components_pl_small_header_pl_small_header__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__theme_plcenter_pl_header_components_pl_big_header_pl_big_header__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_modals_class_info_class_info__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_modals_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_modals_register_register__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_modals_forgot_password_forgot_password__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_modals_find_id_find_id__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_aside_aside__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_intro_intro__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_contact_contact__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_contact_components_contact_form_contact_form__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_contact_components_contact_information_contact_information__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_curriculum_curriculum__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_payment_payment__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_teacher_teacher__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_level_test_level_test__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_comment_comment__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_inquiry_inquiry__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_reservation_reservation__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_footer_footer__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_modals_qna_post_post__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_modals_change_password_change_password__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_forum_forum__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_forum_components_post_list_component_post_list_component__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_forum_components_post_view_component_post_view_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_forum_components_file_form_component_file_form_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__angular_backend_modules_angular_backend_components_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_modals_forum_post_forum_post__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_backend_angular_backend_admin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_lms__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























































// import { BackendAdminPage } from './../angular-backend/pages/admin/index/index';

// import { EnhanceSample } from '../enhance/components/sample';

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
    { path: 'seconddesign', component: __WEBPACK_IMPORTED_MODULE_10__pages_second_design_second_design__["a" /* SecondDesignPage */] },
    { path: 'thirddesign', component: __WEBPACK_IMPORTED_MODULE_11__pages_third_design_third_design__["a" /* ThirdDesignPage */] },
    { path: 'admin/user', component: __WEBPACK_IMPORTED_MODULE_60__angular_backend_angular_backend_admin__["a" /* BackendAdminUserListPage */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_60__angular_backend_angular_backend_admin__["b" /* BackendAdminPage */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            // EnhanceSample,
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_second_design_second_design__["a" /* SecondDesignPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_third_design_third_design__["a" /* ThirdDesignPage */],
            __WEBPACK_IMPORTED_MODULE_22__components_header_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_banners_payment_payment__["a" /* PaymentBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_banners_inquiry_inquiry__["a" /* InquiryBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_banners_contact_contact__["a" /* ContactBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_banners_reservation_reservation__["a" /* ReservationBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_banners_level_test_level_test__["a" /* LevelTestBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_banners_second_level_test_second_level_test__["a" /* SecondLevelTestBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_banners_second_payment_second_payment__["a" /* SecondPaymentBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_banners_second_inquiry_second_inquiry__["a" /* SecondInquiryBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_banners_second_contact_second_contact__["a" /* SecondContactBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_banners_second_reservation_second_reservation__["a" /* SecondReservationBannerComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_header_components_big_header_big_header__["a" /* BigHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_header_components_small_header_small_header__["a" /* SmallHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_29__theme_plcenter_pl_footer_pl_footer__["a" /* PlFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_30__theme_plcenter_pl_header_pl_header__["a" /* PlHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_31__theme_plcenter_pl_header_components_pl_small_header_pl_small_header__["a" /* PlSmallHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_32__theme_plcenter_pl_header_components_pl_big_header_pl_big_header__["a" /* PlBigHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_modals_forgot_password_forgot_password__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_modals_change_password_change_password__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_25__theme_kkang_kkang_header_kkang_header__["a" /* KkangHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_26__theme_kkang_kkang_footer_kkang_footer__["a" /* KkangFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_27__theme_kkang_kkang_header_components_kkang_small_header_kkang_small_header__["a" /* KkangSmallHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_28__theme_kkang_kkang_header_components_kkang_big_header_kkang_big_header__["a" /* KkangBigHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_modals_find_id_find_id__["a" /* FindIdModal */],
            __WEBPACK_IMPORTED_MODULE_33__components_modals_class_info_class_info__["a" /* ClassInfoModal */],
            __WEBPACK_IMPORTED_MODULE_34__components_modals_login_login__["a" /* LoginModal */],
            __WEBPACK_IMPORTED_MODULE_38__components_aside_aside__["a" /* AsideComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_modals_register_register__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_intro_intro__["a" /* IntroComponent */],
            __WEBPACK_IMPORTED_MODULE_42__components_contact_components_contact_information_contact_information__["a" /* ContactInformationComponent */],
            __WEBPACK_IMPORTED_MODULE_39__components_intro_intro__["a" /* IntroComponent */],
            __WEBPACK_IMPORTED_MODULE_40__components_contact_contact__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_43__components_curriculum_curriculum__["a" /* CurriculumComponent */],
            __WEBPACK_IMPORTED_MODULE_44__components_payment_payment__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_45__components_teacher_teacher__["a" /* TeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_level_test_level_test__["a" /* LevelTestComponent */],
            __WEBPACK_IMPORTED_MODULE_47__components_comment_comment__["a" /* CommentComponent */],
            __WEBPACK_IMPORTED_MODULE_48__components_inquiry_inquiry__["a" /* InquiryComponent */],
            __WEBPACK_IMPORTED_MODULE_49__components_reservation_reservation__["a" /* ReservationComponent */],
            __WEBPACK_IMPORTED_MODULE_50__components_footer_footer__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_51__components_modals_qna_post_post__["a" /* QnaPostComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_contact_components_contact_form_contact_form__["a" /* ContactFormComponent */],
            __WEBPACK_IMPORTED_MODULE_53__components_forum_forum__["a" /* ForumComponent */],
            __WEBPACK_IMPORTED_MODULE_54__components_forum_components_post_list_component_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_55__components_forum_components_post_view_component_post_view_component__["a" /* PostViewComponent */],
            __WEBPACK_IMPORTED_MODULE_56__components_forum_components_file_form_component_file_form_component__["a" /* FileFormComponent */],
            __WEBPACK_IMPORTED_MODULE_58__components_modals_forum_post_forum_post__["a" /* ForumPostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_59__angular_backend_angular_backend__["AngularBackend"],
            __WEBPACK_IMPORTED_MODULE_60__angular_backend_angular_backend_admin__["c" /* AngularBackendAdmin */],
            __WEBPACK_IMPORTED_MODULE_57__angular_backend_modules_angular_backend_components_module__["a" /* AngularBackendComponentModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__providers_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_61__providers_lms__["a" /* LMS */], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_7__providers_share_service__["a" /* ShareService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_51__components_modals_qna_post_post__["a" /* QnaPostComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_modals_register_register__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_37__components_modals_find_id_find_id__["a" /* FindIdModal */],
            __WEBPACK_IMPORTED_MODULE_34__components_modals_login_login__["a" /* LoginModal */],
            __WEBPACK_IMPORTED_MODULE_33__components_modals_class_info_class_info__["a" /* ClassInfoModal */],
            __WEBPACK_IMPORTED_MODULE_36__components_modals_forgot_password_forgot_password__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_58__components_modals_forum_post_forum_post__["a" /* ForumPostComponent */],
            __WEBPACK_IMPORTED_MODULE_52__components_modals_change_password_change_password__["a" /* ChangePasswordComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideComponent = (function () {
    function AsideComponent() {
    }
    return AsideComponent;
}());
AsideComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'aside-component',
        template: __webpack_require__(448),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [])
], AsideComponent);

//# sourceMappingURL=aside.js.map

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactBannerComponent = (function () {
    function ContactBannerComponent() {
    }
    return ContactBannerComponent;
}());
ContactBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'contact-banner-component',
        template: __webpack_require__(449),
        styles: [__webpack_require__(384)]
    })
], ContactBannerComponent);

//# sourceMappingURL=contact.js.map

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiryBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InquiryBannerComponent = (function () {
    function InquiryBannerComponent() {
    }
    return InquiryBannerComponent;
}());
InquiryBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'inquiry-banner-component',
        template: __webpack_require__(450),
        styles: [__webpack_require__(385)]
    })
], InquiryBannerComponent);

//# sourceMappingURL=inquiry.js.map

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelTestBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LevelTestBannerComponent = (function () {
    function LevelTestBannerComponent() {
    }
    return LevelTestBannerComponent;
}());
LevelTestBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'level-test-banner-component',
        template: __webpack_require__(451),
        styles: [__webpack_require__(386)]
    })
], LevelTestBannerComponent);

//# sourceMappingURL=level-test.js.map

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaymentBannerComponent = (function () {
    function PaymentBannerComponent() {
    }
    return PaymentBannerComponent;
}());
PaymentBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'payment-banner-component',
        template: __webpack_require__(452),
        styles: [__webpack_require__(387)]
    })
], PaymentBannerComponent);

//# sourceMappingURL=payment.js.map

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReservationBannerComponent = (function () {
    function ReservationBannerComponent() {
        this.classinformation = null;
    }
    return ReservationBannerComponent;
}());
ReservationBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'reservation-banner-component',
        template: __webpack_require__(453),
        styles: [__webpack_require__(388)]
    })
], ReservationBannerComponent);

//# sourceMappingURL=reservation.js.map

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondContactBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondContactBannerComponent = (function () {
    function SecondContactBannerComponent() {
    }
    return SecondContactBannerComponent;
}());
SecondContactBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'second-contact-banner-component',
        template: __webpack_require__(454),
        styles: [__webpack_require__(389)]
    })
], SecondContactBannerComponent);

//# sourceMappingURL=second-contact.js.map

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondInquiryBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondInquiryBannerComponent = (function () {
    function SecondInquiryBannerComponent() {
    }
    return SecondInquiryBannerComponent;
}());
SecondInquiryBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'second-inquiry-banner-component',
        template: __webpack_require__(455),
        styles: [__webpack_require__(390)]
    })
], SecondInquiryBannerComponent);

//# sourceMappingURL=second-inquiry.js.map

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondLevelTestBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondLevelTestBannerComponent = (function () {
    function SecondLevelTestBannerComponent() {
    }
    return SecondLevelTestBannerComponent;
}());
SecondLevelTestBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'second-level-test-banner-component',
        template: __webpack_require__(456),
        styles: [__webpack_require__(391)]
    })
], SecondLevelTestBannerComponent);

//# sourceMappingURL=second-level-test.js.map

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPaymentBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondPaymentBannerComponent = (function () {
    function SecondPaymentBannerComponent() {
    }
    return SecondPaymentBannerComponent;
}());
SecondPaymentBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'second-payment-banner-component',
        template: __webpack_require__(457),
        styles: [__webpack_require__(392)]
    })
], SecondPaymentBannerComponent);

//# sourceMappingURL=second-payment.js.map

/***/ }),
/* 286 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondReservationBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecondReservationBannerComponent = (function () {
    function SecondReservationBannerComponent() {
        this.classinformation = null;
    }
    return SecondReservationBannerComponent;
}());
SecondReservationBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'second-reservation-banner-component',
        template: __webpack_require__(458),
        styles: [__webpack_require__(393)]
    })
], SecondReservationBannerComponent);

//# sourceMappingURL=second-reservation.js.map

/***/ }),
/* 287 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentComponent = (function () {
    function CommentComponent() {
    }
    return CommentComponent;
}());
CommentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'comment-component',
        template: __webpack_require__(459),
        styles: [__webpack_require__(394)]
    }),
    __metadata("design:paramtypes", [])
], CommentComponent);

//# sourceMappingURL=comment.js.map

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactFormComponent = (function () {
    function ContactFormComponent() {
    }
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'contact-form-component',
        template: __webpack_require__(460)
    })
], ContactFormComponent);

//# sourceMappingURL=contact-form.js.map

/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactInformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactInformationComponent = (function () {
    function ContactInformationComponent() {
    }
    return ContactInformationComponent;
}());
ContactInformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'contact-information-component',
        template: __webpack_require__(461)
    })
], ContactInformationComponent);

//# sourceMappingURL=contact-information.js.map

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'contact-component',
        template: __webpack_require__(462),
        styles: [__webpack_require__(395)]
    })
], ContactComponent);

//# sourceMappingURL=contact.js.map

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurriculumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BOOKS = [
    {
        img: "assets/img/book1.jpg",
        title: "잉글리시타임",
        desc: "\uC77D\uAE30, \uB4E3\uAE30, \uC4F0\uAE30, \uB9D0\uD558\uAE30\uB97C \uD55C\uBC88\uC5D0 \uD559\uC2B5\uC2DC\uCF1C\uC8FC\uB294 \uC5B4\uB9B0\uC774 \uC885\uD569 \uC601\uC5B4 6\uAD8C \uC2DC\uB9AC\uC988.\n                1~4 \uAD8C\uC740 \uAE30\uBCF8 \uC5B4\uD718 \uBC0F \uD45C\uD604\uC5D0 \uC9D1\uC911.\n                5~6 \uAD8C\uC740 \uC77D\uAE30\uC640 \uC4F0\uAE30\uB97C \uC911\uC810\uC801\uC73C\uB85C \uD559\uC2B5."
    },
    {
        img: "assets/img/book2.jpg",
        title: "Express Yourself",
        desc: "\uC625\uC2A4\uD3EC\uB4DC\uC5D0\uC11C \uCD9C\uD310 \uD55C \uC911\uACE0\uB4F1 \uBC0F \uC131\uC778\uC6A9 \uAD50\uC7AC.\n                \uBBFF\uAE30 \uC5B4\uB824\uC6B4 \uC7AC\uBBF8\uC788\uB294 \uC2A4\uD1A0\uB9AC\uB97C \uD1B5\uD574\uC11C \uC601\uC5B4\uC5D0 \uB300\uD55C \uD765\uBBF8\uB97C \uB192\uC774\uB294 \uAD50\uC7AC.\n                \uC219\uC5B4\uC640 \uAD00\uC6A9\uC5B4\uB97C \uBC30\uC6B0\uB294\uB370 \uC88B\uC74C."
    },
    {
        img: "assets/img/book3.jpg",
        title: "Can you believe it?",
        desc: "\uC990\uAC81\uACE0 \uD765\uACA8\uC6B4 \uB0B4\uC6A9\uC758 \uAE30\uCD08\uC601\uC5B4\n                5\uC138~10\uC138\uC758 \uC5B4\uB9B0\uC774\uAC00 \uC0AC\uC6A9\uD558\uAE30 \uC801\uB2F9\uD55C \uAC83\uC73C\uB85C \uC601\uC5B4\uC5D0 \uAF2D \uD544\uC694\uD55C \uD45C\uD604\uC744 \n                \uD559\uC2B5\uD558\uC5EC \uC5B4\uB9B0\uC774\uC758 \uB9D0\uD558\uAE30 \uC2E4\uB825\uC744 \uD5A5\uC0C1."
    },
    {
        img: "assets/img/book4.jpg",
        title: "렛츠고",
        desc: "\uC77D\uAE30, \uB4E3\uAE30, \uC4F0\uAE30, \uB9D0\uD558\uAE30\uB97C \uD55C\uBC88\uC5D0 \uD559\uC2B5\uC2DC\uCF1C\uC8FC\uB294 \uC5B4\uB9B0\uC774 \uC885\uD569 \uC601\uC5B4 6\uAD8C \uC2DC\uB9AC\uC988.\n                1~4 \uAD8C\uC740 \uAE30\uBCF8 \uC5B4\uD718 \uBC0F \uD45C\uD604\uC5D0 \uC9D1\uC911.\n                5~6 \uAD8C\uC740 \uC77D\uAE30\uC640 \uC4F0\uAE30\uB97C \uC911\uC810\uC801\uC73C\uB85C \uD559\uC2B5."
    },
    {
        img: "assets/img/book5.jpg",
        title: "리딩 큐",
        desc: "\uADE0\uD615 \uC7A1\uD78C \uB9AC\uB529 \uC2A4\uD0AC \uD559\uC2B5\uC744 \uC704\uD55C \uCD08\uB4F1\uD559\uC0DD\uC6A9 \uB9AC\uB529 \uAD50\uC7AC.\n                \uC544\uC774\uB4E4\uC758 \uAD50\uC591 \uBC0F \uAD00\uC2EC \uBD84\uC57C\uC5D0 \uB300\uD55C \uC815\uBCF4\uB97C \uC7AC\uBBF8\uC788\uAC8C \uD559\uC2B5 \uD560 \uC218 \uC788\uB3C4\uB85D \uD3B8\uC9D1.\n                \uBCF8\uACA9\uC801\uC778 \uC77D\uAE30 \uD559\uC2B5\uC744 \uC704\uD55C \uB9DE\uCDA4 \uAD50\uC7AC."
    },
    {
        img: "assets/img/book6.jpg",
        title: "Side by side",
        desc: "\uC804 \uC138\uACC4 \uAD50\uC0AC\uC640 \uD559\uC0DD\uB4E4\uC5D0\uAC8C 30\uB144 \uB3D9\uC548 \uB04A\uC784\uC5C6\uC774 \uC0AC\uB791\uBC1B\uC544 \uC628 \uCD5C\uACE0\uC758 \uAD50\uC7AC\uB85C\uC11C \n                \uC0DD\uB3D9\uAC10\uC788\uACE0 \uC7AC\uBBF8\uC788\uB294 \uD68C\uD654\uC640 \uB3C5\uD574, \uC791\uBB38 \uBC0F \uC5B4\uD718\uB825\uC640 \uD45C\uD604\uB825\uC744 \uB192\uC774\uB294 \uC9DC\uC784\uC0C8 \uC788\uB294 \uC601\uC5B4 \uD559\uC2B5\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
    },
    {
        img: "assets/img/book7.jpg",
        title: "Smart Phonics",
        desc: "\uC601\uC5B4\uB97C \uC678\uAD6D\uC5B4\uB85C \uACF5\uBD80\uD558\uB294(EFL) \uC720\uCE58\uC6D0 \uC544\uC774\uB4E4\uBD80\uD130 \uCD08\uB4F1\uD559\uAD50 \uC800\uD559\uB144\uC0DD\uB4E4\uC774 \uBC30\uC6B0\uAE30 \uC27D\uACE0, \uBD80\uBAA8\uB098 \uAD50\uC0AC\uB4E4\uC774 \n                \uAC00\uB974\uCE58\uAE30 \uC27D\uACE0 \uCCB4\uACC4\uC801\uC73C\uB85C \uACF5\uBD80 \uD560 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uB41C \uD30C\uB2C9\uC2A4 \uC2DC\uB9AC\uC988\uC785\uB2C8\uB2E4."
    },
    {
        img: "assets/img/book8.jpg",
        title: "Bricks Reading",
        desc: "\uCD1D 3 \uB808\uBCA8\uB85C \uCD08\uAE09 \uB2E8\uACC4\uB85C \uB9AC\uB529\uC5D0 \uC790\uC2E0\uAC10\uC744 \uBD80\uC871\uD55C \uC544\uC774\uD55C\uD14C \uC544\uC774 \uC2A4\uC2A4\uB85C \uD559\uC2B5\uD574 \uB098\uAC08\uC218 \uC788\uB3C4\uB85D \uD574\uC900\uB2E4.\n                \uB2E8\uC5B4\uB85C\uB9CC \uB300\uB2F5\uD558\uB294 \uD559\uC0DD\uC5D0\uAC8C \uC9E7\uC740 \uBB38\uC7A5\uC744 \uD1B5\uD574 \uC601\uC5B4 \uD45C\uD604\uC758 \uAD00\uC2EC\uB3C4\uB97C \uB192\uC784."
    },
    {
        img: "assets/img/book9.jpg",
        title: "NEAT 교재",
        desc: "\uB4E3\uAE30 \uB9D0\uD558\uAE30 \uB2A5\uB825 \uD5A5\uC0C1 \uC704\uC8FC\uC758 \uAD50\uC7AC\n                2009 \uB144 \uC2DC\uC791\uB41C \uAD6D\uAC00 \uC601\uC5B4 \uB2A5\uB825 \uD3C9\uAC00 \uC2DC\uD5D8\uC73C\uB85C \uC77D\uACE0, \uC4F0\uAE30\uC5D0 \uB4E3\uACE0 \uB9D0\uD558\uAE30\uB97C \uCD94\uAC00\uD55C \uAC83\uC73C\uB85C 1\uAE09\uC740 \uD1A0\uC775 \uC2DC\uD5D8\uC5D0 \uC0C1\uC751\uD55C\uB2E4."
    },
    {
        img: "assets/img/book10.jpg",
        title: "베이스캠프",
        desc: "\uCD08/\uC911\uD559\uAD50 \uC800\uD559\uB144 \uD559\uC0DD\uB4E4\uC744 \uB300\uC0C1\uC73C\uB85C \uD558\uB294 \uAE30\uCD08 \uC601\uC5B4 \uAD50\uC7AC. \uCD08\uAE09 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uB9AC\uC2A4\uB2DD\uACFC \uC2A4\uD53C\uD0B9\uC5D0 70% \uC815\uB3C4\uC758 \uBE44\uC911, \n                \uC911\uAE09 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uB9AC\uC2A4\uB2DD\uACFC \uC2A4\uD53C\uD0B9\uC5D0 50%, \uB9AC\uB529\uACFC \uB77C\uC774\uD305\uC5D0 "
    },
    {
        img: "assets/img/book11.jpg",
        title: "실전 어휘 학습교재",
        desc: "\uBE44\uC9C0\uB2C8\uC2A4\uC5D0 \uD544\uC694\uD55C \uC2E4\uC804 \uC5B4\uD718\uB97C \uBC30\uC6B8 \uC218 \uC788\uB294 \uAD50\uC7AC\uB85C \uC815\uD655\uD55C \uBE44\uC9C0\uB2C8\uC2A4 \uC6A9\uC5B4\uC640 \uD45C\uD604\uBC95, \uAC01 \uBD84\uC57C\uC5D0 \uB9DE\uB294 \uACE0\uAE09 \n                \uC601\uC5B4\uB97C \uAD6C\uC0AC\uD558\uAE30 \uC704\uD55C \uACE0\uAE09 \uC601\uC5B4 \uC2E4\uB825 \uBC30\uC591\uC744 \uC704\uD55C \uAD50\uC7AC."
    },
    {
        img: "assets/img/book12.jpg",
        title: "Thoughts & Notions",
        desc: "\uB3C5\uD574\uC640 \uC5B4\uD718 \uC2E4\uB825\uC744 \uB3D9\uC2DC\uC5D0 \uD5A5\uC0C1 \uC2DC\uD0A4\uB294 \uB9AC\uB529 \uAD50\uC7AC.\n                \uC601\uC5B4 \uC785\uBB38 \uB2E8\uACC4 \uD559\uC0DD\uB4E4\uC744 \uC704\uD55C \uAD50\uC7AC\uB85C 800 \uC5EC\uAC1C\uC758 \uAE30\uBCF8 \uC5B4\uD718\uB85C \uAD6C\uC131\uB41C \uC26C\uC6B4 \uAD50\uC7AC\uB85C\uC11C \uCD08\uB4F1\uD559\uAD50 4~6 \uD559\uB144\uC5D0\uAC8C \uC54C\uB9DE\uC74C."
    },
    {
        img: "assets/img/book13.jpg",
        title: "석달에 끝내는 300 핵심 패턴",
        desc: "\uC601\uC5B4 \uD45C\uD604\uC5D0\uC11C \uBC18\uBCF5\uC801\uC73C\uB85C \uC4F0\uC774\uB294 \uBB38\uC7A5\uC744 \uAC04\uCD94\uB824 \uC11D\uB2EC \uB3D9\uC548 \uACF5\uBD80\uD558\uB294 \uAD50\uC7AC\uB85C \uBC18\uBCF5 \uC5F0\uC2B5\uC744 \uD1B5\uD574 \uC601\uC5B4 \uD45C\uD604\uC744 \uBAB8\uC5D0 \n                \uBCA0\uC774\uAC8C \uD558\uC5EC \uB9D0\uD558\uAE30 \uC601\uC5B4 \uC2E4\uB825 \uD5A5\uC0C1."
    },
    {
        img: "assets/img/book14.jpg",
        title: "Cambridge IELTS",
        desc: "Cambridge IELTS\uB294 \uC544\uC774\uC5D8\uCE20\uAD50\uC7AC(IELTS\uAD50\uC7AC)\uC758 BIBLE\uC774\uB77C\uACE0 \uD560 \uC218 \uC788\uC744 \uC815\uB3C4\uB85C \uAC00\uC7A5 \uC2DC\uD5D8\uACBD\uD5A5\uC5D0 \uB9DE\uACE0 \uBB38\uC81C\uB3C4 \uC798 \uB9CC\uB4E4\uC5C8\uC2B5\uB2C8\uB2E4. IELTS\uB97C \uC900\uBE44\uD558\uB294 \uB9CE\uC740 \uC218\uD5D8\uC0DD\uB4E4\uC740 \uAF2D \uBD10\uC57C \uD560 \uAD50\uC7AC\uC785\uB2C8\uB2E4."
    },
    {
        img: "assets/img/book15.jpg",
        title: "Express Ways",
        desc: "\uAE30\uB2A5\uC801, \uC0C1\uD669\uC801 \uB300\uD654\uC640 \uBB38\uBC95\uC744 \uD568\uAED8 \uB2E4\uB8E8\uC5B4 \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uC5B8\uC5B4\uC18C\uAC1C\uB97C \uC704\uD574 \uC2E4\uC0DD\uD65C \uC0C1\uD669\uC744 \uC0AC\uC6A9 \uD55C \uAD50\uC7AC\uC774\uB2E4. \uC5ED\uD560\uB180\uC774, \uBE44\uD3C9\uC801\uC778 \uC0AC\uACE0 \uBC0F \uBB38\uC81C\uD574\uACB0\uB4F1 \uC0C1\uD638\uC791\uC6A9\uC758 \uD559\uC2B5\uC5D0 \uC911\uC810\uC744 \uB454 \uAD50\uC7AC."
    },
    {
        img: "assets/img/book16.jpg",
        title: "Exploring English",
        desc: "\uC758\uC0AC\uC804\uB2EC (\uB9D0\uD558\uAE30,\uC4F0\uAE30)\uC744 \uC911\uC2EC\uC73C\uB85C \uC5B8\uC5B4\uC758 4\uAC00\uC9C0 \uAE30\uB2A5\uC744 \uC885\uD569\uC801\uC73C\uB85C \uD559\uC2B5\uD560 \uC218 \uC788\uB3C4\uB85D \uD55C \uAD50\uC7AC. \uD559\uC2B5\uC790\uC758 \uC218\uC900\uACFC \uBAA9\uC801\uC5D0 \uD559\uC2B5\uD560 \uC218 \uC788\uC73C\uBA70 \uB864 \uD50C\uB808\uC774\uB97C \uD1B5\uD574 \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uC218\uC5C5\uC744 \uC9C4\uD589."
    },
    {
        img: "assets/img/book17.jpg",
        title: "It's Speaking",
        desc: "\uC601\uC5B4 \uB9D0\uD558\uAE30 / \uC4F0\uAE30\uC5D0 \uC775\uC219\uD558\uC9C0 \uC54A\uC740 \uC911\uAE09 \uB808\uBCA8\uC758 \uC911\uD559\uC0DD\uACFC \uACE0\uB4F1\uD559\uC0DD\uB4E4\uC5D0\uAC8C \uC801\uD569\uD55C \uAD50\uC7AC\uB85C Speaking \uAD50\uC7AC\uB294 \uC0DD\uAC01\uBCF4\uB2E4 \uC5B4\uB835\uC9C0 \uC54A\uC73C\uBA70 Writing \uC740 \uC27D\uAC8C \uC601\uC791\uC744 \uD560 \uC218 \uC788\uB3C4\uB85D \uD574 \uC900\uB2E4."
    },
    {
        img: "assets/img/book18.jpg",
        title: "Business One:One",
        desc: "1:1 \uBE44\uC9C0\uB2C8\uC2A4 \uC601\uC5B4 \uAC15\uC758\uB97C \uC704\uD574 \uBCF4\uB2E4 \uC0C1\uC138\uD558\uACE0 \uAD6C\uCCB4\uC801\uC73C\uB85C \uC4F0\uC5EC\uC9C4 Business \uC804\uBB38 \uAD50\uC7AC\uC785\uB2C8\uB2E4. \uD559\uC2B5\uC790 \uC911\uC2EC\uC758 \uAD50\uACFC \uAD6C\uC131\uC73C\uB85C \uBE44\uC9C0\uB2C8\uC2A4 \uC601\uC5B4\uB97C \uBC30\uC6B0\uACE0\uC790 \uD558\uB294 \uD559\uC0DD\uB4E4\uC5D0 \uC88B\uC740 \uAD50\uC7AC\uC785\uB2C8\uB2E4."
    },
    {
        img: "assets/img/book19.jpg",
        title: "Super Kids",
        desc: "New Superkids Super Kids New Edition\uC740 \uC785\uC99D\uB41C \uAD50\uC721 \uBC29\uC2DD\uC744 \uAD50\uC7AC\uB85C \uC5EE\uC5B4 \uB193\uC740 \uAC83\uC73C\uB85C \uC601\uC5B4\uAD50\uC7AC\uC5D0\uC11C \uAC00\uB974\uCCD0\uC57C \uD560 \uC911\uC694\uD55C \uAC1C\uB150\uB4E4\uC744 \uD55C \uB208\uC5D0 \uC27D\uAC8C \uBCFC \uC218 \uC788\uB294 \uC885\uD569\uC801\uC778 \uAD50\uC7AC\uC785\uB2C8\uB2E4."
    },
    {
        img: "assets/img/book20.jpg",
        title: "Cause & Effect",
        desc: "\uD765\uBBF8\uB86D\uACE0 \uB2E4\uC591\uD55C \uB0B4\uC6A9\uC73C\uB85C \uC790\uC5F0\uC2A4\uB7FD\uAC8C \uD559\uC0DD\uC758 \uB3C5\uD574\uB825\uACFC \uD45C\uD604\uB825\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uB294 \uAD50\uC7AC. \uADF8\uB8F9 \uC2A4\uD130\uB514\uC6A9\uC73C\uB85C \uB3C5\uD574\uB825\uC744 \uC9D1\uC911 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC88B\uC740 \uAD50\uC7AC. \uAE38\uC9C0 \uC54A\uC740 \uB0B4\uC6A9\uC744 \uB2E8\uB77D \uBCC4\uB85C \uAD6C\uC131."
    },
    {
        img: "assets/img/book21.jpg",
        title: "Chat Room",
        desc: "10\uB300 \uCCAD\uC18C\uB144\uB4E4\uC758 \uC138\uACC4\uC640 \uADF8\uB4E4\uC758 \uC0DD\uAC01, \uC0C1\uC0C1\uB825, \uC2E4\uC81C \uAD00\uC2EC\uC0AC\uB4E4\uC744 \uBE60\uC9D0\uC5C6\uC774 \uB9DD\uB77C\uD574 \uD1A0\uB860\uD615\uC2DD\uC758 \uAD50\uC7AC. \uD559\uC2B5\uC758 \uC7AC\uBBF8\uC640 \uB2A5\uB960\uC744 \uB192\uC774\uAE30 \uC704\uD574 \uB2E4\uC591\uD55C \uADF8\uB9BC\uB4E4\uACFC \uADF8\uAC83\uB4E4\uC744 \uBC14\uD0D5\uC73C\uB85C \uC9C4\uD589."
    },
    {
        img: "assets/img/book22.jpg",
        title: "Let's Talk",
        desc: "\uC2E4\uC0DD\uD65C\uACFC \uC544\uC8FC \uBC00\uC811\uD558\uACE0 \uC758\uACAC \uB300\uB9BD\uC774 \uB098\uC62C \uC218 \uC788\uB294 \uC8FC\uC81C\uB97C \uC120\uC815 \uACE0\uAE09 \uD1A0\uB860 \uC601\uC5B4\uB97C \uC704\uD55C \uAE30\uCD08\uB97C \uB2E4\uC9C8 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131. \uD1A0\uB860\uC758 \uAE30\uCD08 \uB2E8\uACC4\uC778 \uC26C\uC6B4 \uC601\uC5B4\uB85C \uB9CC\uB4E4\uC5B4 \uC84C\uB2E4."
    },
    {
        img: "assets/img/book23.jpg",
        title: "Communicating in Business",
        desc: "\uBE44\uC988\uB2C8\uC2A4 \uC0C1\uD669\uC5D0\uC11C \uB9CE\uC774 \uC0AC\uC6A9\uB418\uB294 \uC5B4\uD718, \uD68C\uD654 \uC911\uC2EC\uC73C\uB85C \uAD6C\uC131\uB41C \uAD50\uC7AC. \uBE44\uC988\uB2C8\uC2A4 \uAD00\uB828 \uC804\uD654, \uD504\uB9AC\uC820\uD14C\uC774\uC158, \uD68C\uC758, \uD611\uC0C1 \uB4F1\uC5D0 \uD544\uC694\uD55C \uC5B4\uD718\uC640 \uD45C\uD604\uC744 \uC2B5\uB4DD."
    },
    {
        img: "assets/img/book24.jpg",
        title: "Debate Club",
        desc: "\uC911\uAE09 \uC774\uC0C1\uC758 \uC601\uC5B4 \uC2E4\uB825\uC744 \uAC16\uCD98 \uD559\uC0DD\uB4E4\uC744 \uC704\uD55C \uD1A0\uB860 \uAD50\uC7AC. \uB2E4\uC591\uD55C \uC0AC\uD669\uC744 \uC801\uD569\uD558\uAC8C \uB3C4\uC785\uD55C \uD559\uC2B5\uAD50\uC7AC\uB85C \uC2E4\uC9C8\uC9C1\uC778 \uD1A0\uB860\uC218\uC5C5\uC774 \uC774\uB904\uC9C8 \uC218 \uC788\uB3C4\uB85D \uD55C debate \uC5F0\uC2B5 \uAD50\uC7AC."
    },
    {
        img: "assets/img/book25.jpg",
        title: "English Grammar",
        desc: "\uBBF8\uAD6D \uCD08\uB4F1\uD559\uAD50 \uC218\uC900\uC758 \uC601\uC5B4 \uBB38\uBC95 \uAD50\uC7AC\uB85C\uC11C \uC6B0\uB9AC\uB098\uB77C \uD559\uC6D0\uC5D0\uC11C\uB3C4 \uB9CE\uC774 \uD65C\uC6A9\uB418\uACE0 \uC788\uB294 \uAD50\uC7AC. \uBB38\uBC95 \uACF5\uBD80 \uBFD0\uB9CC\uC544\uB2C8\uB77C \uC601\uC5B4 \uD45C\uD604\uC774\uB098 \uD68C\uD654\uB97C \uC775\uD788\uAE30\uC5D0\uB3C4 \uC801\uB2F9\uD55C \uAD50\uC7AC."
    },
    {
        img: "assets/img/book26.jpg",
        title: "Franny K. Stein",
        desc: "\uC790\uC5F0 \uACFC\uD559\uC5D0 \uAD00\uC2EC\uC774 \uB9CE\uC740 \uC5B4\uB9B0\uC774\uB4E4\uC774 \uC88B\uC544\uD558\uB294 \uAD50\uC7AC. \uAD50\uC7AC \uB808\uBCA8\uC740 \uC911\uAE09 \uC815\uB3C4. \uAC04\uACB0\uD55C \uBB38\uCCB4\uC640 \uACFC\uD559\uC801 \uC0AC\uACE0, \uC2E4\uD5D8\uC744 \uAF2C\uB9C8 \uC18C\uB140\uB97C \uD1B5\uD574 \uC7AC\uBBF8\uC788\uAC8C \uADF8\uB824 \uB0C4."
    },
    {
        img: "assets/img/book27.jpg",
        title: "Grammar in Use",
        desc: "\uBBF8\uAD6D \uC601\uC5B4\uB97C \uBC30\uC6B0\uAE30 \uC6D0\uD558\uB294 \uC911\uAE09 \uC218\uC900\uC758 \uD559\uC2B5\uC790\uB97C \uB300\uC0C1\uC73C\uB85C \uD55C \uAD50\uC7AC\uC774\uBA70 \uC774\uD574\uD558\uAE30 \uC26C\uC6B4 \uBB38\uBC95 \uC124\uBA85\uACFC \uC2E4\uC81C \uC0C1\uD669\uC5D0\uC11C \uC790\uC8FC \uC4F0\uC774\uB294 \uC608\uBB38\uC744 \uBC14\uD0D5\uC73C\uB85C \uBB38\uBC95\uC801 \uC811\uADFC\uC744 \uD55C \uAD50\uC7AC."
    },
    {
        img: "assets/img/book28.jpg",
        title: "Henry and Mudge",
        desc: "\uC0AC\uB791\uC2A4\uB7EC\uC6B4 \uAF2C\uB9C8 \uB0A8\uC790 \uC544\uC774 Henry\uC640 \uADF8\uC758 \uADC0\uC5FC\uB465\uC774 \uAC15\uC544\uC9C0 Mudge\uC758 \uC6B0\uC815\uC744 \uADF8\uB9B0 \uC2A4\uD1A0\uB9AC \uBD81\uC73C\uB85C \uC5B4\uB9B0\uC774\uC758 \uAD50\uC591\uC744 \uBD81\uB3CB\uC544 \uC8FC\uB294 \uAD50\uC7AC. \uCD08\uB4F1\uD559\uC0DD \uC6A9 \uC774\uC57C\uAE30 \uCC45."
    },
    {
        img: "assets/img/book29.jpg",
        title: "Discover Debate",
        desc: "\uD1A0\uB860\uC744 \uB354\uC6B1 \uD765\uBBF8\uC788\uAC8C \uC774\uB04C\uC5B4 \uC8FC\uB294 \uAD50\uC7AC\uC774\uB2E4. \uC5B4\uB835\uAC8C \uC0DD\uAC01\uD558\uAE30 \uC26C\uC6B4 \uD1A0\uB860\uC758 \uC804 \uACFC\uC815\uC744 \uCD08\uAE09\uC790\uB4E4\uC774 \uC27D\uAC8C \uC774\uD574\uD558\uC5EC \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uAD6C\uC131\uD558\uC600\uB2E4."
    },
    {
        img: "assets/img/book30.jpg",
        title: "English Icebreak",
        desc: "\uB9D0\uBB38\uC774 \uD130\uC9C0\uB294 \uC789\uAE00\uB9AC\uC2DC \uC544\uC774\uC2A4\uBE0C\uB808\uC774\uD06C \uC2DC\uB9AC\uC988 \uC138\uD2B8. \uC789\uAE00\uB9AC\uC2DC \uC544\uC774\uC2A4\uBE0C\uB808\uC774\uD06C(English Ice Break)\uB294 \uBE44\uC601\uC5B4\uAD8C \uAD6D\uAC00\uB4E4\uC758 \uC601\uC5B4\uD559\uC2B5\uC790\uB4E4\uC744 \uC704\uD55C \uC601\uC5B4\uAD50\uC7AC."
    },
    {
        img: "assets/img/book31.jpg",
        title: "Impact Issue",
        desc: "\uD1A0\uB860\uC5D0 \uC54C\uB9DE\uB294 \uC8FC\uC81C\uB97C \uC81C\uACF5\uD558\uB294 \uD765\uBBF8\uC9C4\uC9C4\uD55C \uC2DC\uB9AC\uC988 \uAD50\uC7AC. \uC601\uC5B4\uB85C \uC790\uC2E0\uC758 \uC758\uACAC\uC744 \uC790\uC2E0\uAC10 \uC788\uAC8C \uD45C\uD604\uD558\uB294 \uC2E4\uB825\uC744 \uD0A4\uC6B8 \uC218 \uC788\uB3C4\uB85D 4\uB2E8\uACC4 \uD559\uC2B5\uBC95\uC73C\uB85C \uAD6C\uC131."
    },
    {
        img: "assets/img/book32.jpg",
        title: "Judy Blume",
        desc: "\uC911\uAE09 \uB808\uBCA8\uC758 \uC2A4\uD1A0\uB9AC \uAD50\uC7AC. \uC5B4\uB978\uC2A4\uB7EC\uC6B4 \uD615\uACFC \uAC1C\uAD6C\uC7C1\uC774\uC5D0\uB2E4 \uAC11\uC790\uAE30 \uB3C8\uC758 \uB9E4\uB825\uC5D0 \uD479 \uBE60\uC838\uBC84\uB9B0 \uC5EC\uC12F \uC0B4 \uB3D9\uC0DD\uC774 \uC11C\uB85C\uB97C \uC774\uD574\uD574\uAC00\uB294 \uACFC\uC815\uC744 \uADF8\uB9B0 \uB3D9\uD654."
    },
    {
        img: "assets/img/book33.jpg",
        title: "What A World",
        desc: "\uC911\uAE09 \uC601\uC5B4 \uC2E4\uB825 \uC774\uC0C1\uC744 \uAC16\uCD98 \uC911\uD559\uC0DD \uC774\uC0C1\uC758 \uD559\uC2B5\uC790\uC6A9 \uB3C5\uD574 \uAD50\uC7AC\uB85C\uC11C \uC601\uC5B4 \uACF5\uBD80\uC640 \uB354\uBD88\uC5B4 \uC9C0\uAD6C\uCD0C\uC758 \uB2E4\uC591\uD55C \uBA85\uC18C\uC5D0 \uAD00\uD55C \uC591\uC2DD\uC744 \uD765\uBBF8 \uC9C4\uC9C4\uD558\uAC8C \uB2E4\uB8E8\uACE0 \uC788\uB2E4."
    },
    {
        img: "assets/img/book34.jpg",
        title: "Let's Talk Business",
        desc: "20\uAC1C\uC758 \uD604\uB300 \uBE44\uC9C0\uB2C8\uC2A4 \uC8FC\uC81C\uAC00 78\uAC1C\uC758 Talkng Points\uB97C \uC81C\uACF5. \uC218 \uBC31\uAC1C\uC758 \uB2E4\uC591\uD55C \uC5B4\uD718\uC640 \uD45C\uD604\uB4E4\uC774 \uC608\uBB38\uACFC \uD568\uAED8 \uC5B4\uC6B0\uB7EC\uC838 Self-study \uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uAD50\uC7AC."
    },
    {
        img: "assets/img/book35.jpg",
        title: "Up And Away",
        desc: "\uC804\uD1B5\uC801\uC778 \uD559\uC2B5\uBC95\uACFC \uBB38\uBC95\uC5D0 \uAE30\uCD08\uB97C \uB454 \uD559\uC2B5\uBC95\uC774 \uC870\uD654\uB97C \uC774\uB8EC \uAD50\uC7AC. \uB2E8\uC218, \uBCF5\uC218 \uAD6C\uBD84, \uD604\uC7AC \uC9C4\uD589\uD615, \uC778\uCE6D \uB4F1 \uBB38\uBC95\uC801 \uC124\uBA85\uACFC \uC751\uC6A9\uB41C \uBB38\uC7A5\uC744 \uD1B5\uD574 \uBB38\uBC95 \uBC0F \uD68C\uD654 \uC2E4\uB825\uC744 \uB2E4\uC9D0."
    },
    {
        img: "assets/img/book36.jpg",
        title: "Nate The Grate",
        desc: "\uC5B4\uB9B0\uC774\uB97C \uC704\uD55C \uC2A4\uD1A0\uB9AC\uBD81. \uC5EC\uB7EC\uAC00\uC9C0 \uC0AC\uAC74\uC744 \uD574\uACB0\uD558\uB290\uB77C \uC815\uC2E0 \uC5C6\uC774 \uB6F0\uC5B4\uB2E4\uB2C8\uB294 Nate\uC640 Sludge\uC5D0 \uB300\uD55C \uC774\uC57C\uAE30. \uC911\uAE09 \uC601\uC5B4 \uC2E4\uB825\uC744 \uAC00\uC9C4 \uCD08\uB4F1\uD559\uC0DD\uC5D0\uAC8C \uC54C"
    },
    {
        img: "assets/img/book37.jpg",
        title: "Reading Explorer",
        desc: "Reading Explorer\uB294 4\uB2E8\uACC4 \uC2DC\uB9AC\uC988\uB85C\uC11C \uB0B4\uC154\uB110 \uC9C0\uC624\uADF8\uB798\uD53D\uC758 \uD14D\uC2A4\uD2B8\uC640 \uC774\uBBF8\uC9C0\uAC00 \uB2F4\uACA8 \uC788\uC2B5\uB2C8\uB2E4. \uC601\uC5B4 \uD559\uC2B5\uC790\uC758 \uC5B4\uD718 \uAE30\uC220\uACFC \uB3C5\uD574\uB825\uC744 \uC2E0\uC7A5\uC2DC\uD0A4\uB294\uB370 \uC720\uC6A9\uD569\uB2C8\uB2E4."
    },
    {
        img: "assets/img/book38.jpg",
        title: "Right On Track",
        desc: "\uC8FC\uC81C\uBCC4, \uC0C1\uD669\uBCC4 \uC758\uC0AC\uC18C\uD1B5\uC744 \uC704\uD55C Vocabulary, Speaking, Writing \uB4F1\uC758 \uC694\uC18C\uB97C \uC911\uC2EC\uC73C\uB85C \uC5EE\uC740 \uAD50\uC7AC. \uB2E8\uC21C\uD55C \uC5B8\uC5B4 \uD559\uC2B5 \uBFD0\uB9CC \uC544\uB2C8\uB77C \uB17C\uB9AC\uC801 \uC0AC\uACE0\uB825 \uD5A5\uC0C1\uC744 \uC704\uD55C \uAD50\uC7AC."
    },
];
var CurriculumComponent = (function () {
    function CurriculumComponent() {
        this.showBook = false;
        this.books = null; // container of books to display on browser.
        this.first_8_books = null; // first_8
        this.takeSomeTemporaryBooks();
    }
    CurriculumComponent.prototype.takeSomeTemporaryBooks = function () {
        this.books = BOOKS.slice(0, 8);
    };
    CurriculumComponent.prototype.onClickShowMore = function () {
        this.showBook = !this.showBook;
        if (this.showBook) {
            this.books = BOOKS;
        }
        else {
            this.takeSomeTemporaryBooks();
        }
    };
    return CurriculumComponent;
}());
CurriculumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'curriculum-component',
        template: __webpack_require__(463),
        styles: [__webpack_require__(396)]
    }),
    __metadata("design:paramtypes", [])
], CurriculumComponent);

//# sourceMappingURL=curriculum.js.map

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'footer-component',
        template: __webpack_require__(464),
        styles: [__webpack_require__(397)]
    })
], FooterComponent);

//# sourceMappingURL=footer.js.map

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend_define__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileFormComponent = (function () {
    function FileFormComponent(file) {
        this.file = file;
        this.files = [];
    }
    FileFormComponent.prototype.onChangeFile = function (_) {
        var _this = this;
        this.file.uploadPostFile(_.files[0]).subscribe(function (res) {
            _this.files.push(res.data);
            console.log('files: ', _this.files);
        }, function (err) {
            console.log('err:', err);
            if (_this.file.isError(err) == __WEBPACK_IMPORTED_MODULE_2__angular_backend_define__["g" /* ERROR_NO_FILE_SELECTED */])
                return;
            _this.file.alert(err);
        });
    };
    FileFormComponent.prototype.onClickDeleteFile = function (file) {
        var _this = this;
        console.log("FileFormComponent::onClickDeleteFile(file): ", file);
        this.file.delete(file.idx).subscribe(function (res) {
            console.log("file delete: ", res);
            var i = _this.files.findIndex(function (f) { return f.idx == res.data.idx; });
            _this.files.splice(i, 1);
            console.log('files: ', _this.files);
        }, function (err) { return _this.file.alert(err); });
    };
    return FileFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], FileFormComponent.prototype, "files", void 0);
FileFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'file-form-component',
        template: __webpack_require__(465),
        styles: [__webpack_require__(398)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend_angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend_angular_backend__["File"]) === "function" && _a || Object])
], FileFormComponent);

var _a;
//# sourceMappingURL=file-form-component.js.map

/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostViewComponent = (function () {
    function PostViewComponent() {
        this.showPostEditForm = false;
        this.showCommentForm = false;
    }
    return PostViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], PostViewComponent.prototype, "post", void 0);
PostViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'post-view-component',
        template: __webpack_require__(467)
    })
], PostViewComponent);

//# sourceMappingURL=post-view-component.js.map

/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_forum_post_forum_post__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_post_list_component_post_list_component__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { QnaPostComponent} from '../modals/qna_post/post';



var ForumComponent = (function () {
    function ForumComponent(activated, modal, file, postData) {
        this.activated = activated;
        this.modal = modal;
        this.file = file;
        this.postData = postData;
        this.post_config_id = null;
        this.no_of_items_in_one_page = 5;
        this.active = false;
        this.post_config_id_qna = 'qna';
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.post_config_id = this.post_config_id_qna;
        // this.activated.params.subscribe( params => {
        //   if ( params['post_config_id'] !== void 0 ) {
        //     this.post_config_id = params['post_config_id'];
        //     this.postListComponent.load( this.post_config_id );
        //     console.log("post_config_id:",this.post_config_id);
        //   }
        // });
    };
    ForumComponent.prototype.onClickPost = function () {
        var _this = this;
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__modals_forum_post_forum_post__["a" /* ForumPostComponent */]);
        modalRef.componentInstance['post_config_id'] = this.post_config_id;
        modalRef.result.then(function () {
            _this.postListComponent.loadPostData();
        }).catch(function (e) { return console.log('exit ' + e); });
    };
    return ForumComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('postListComponent'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__components_post_list_component_post_list_component__["a" /* PostListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_post_list_component_post_list_component__["a" /* PostListComponent */]) === "function" && _a || Object)
], ForumComponent.prototype, "postListComponent", void 0);
ForumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'forum-component',
        template: __webpack_require__(468),
        styles: [__webpack_require__(399)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["File"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["File"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_backend_angular_backend__["PostData"]) === "function" && _e || Object])
], ForumComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=forum.js.map

/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend_model_user__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BigHeaderComponent = (function () {
    function BigHeaderComponent(user, app) {
        this.user = user;
        this.app = app;
        // event:any = {};
        this.more = false;
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.classroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    BigHeaderComponent.prototype.onClickLogout = function () {
        this.logout.emit();
    };
    BigHeaderComponent.prototype.onClickUpdateProfile = function () {
        this.profile.emit();
    };
    BigHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    BigHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    BigHeaderComponent.prototype.onClickLogin = function () {
        this.onLogin.emit();
    };
    BigHeaderComponent.prototype.onClickGotoClassRoom = function () {
        this.classroom.emit();
    };
    BigHeaderComponent.prototype.onClickRegister = function () {
        this.register.emit();
    };
    return BigHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], BigHeaderComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], BigHeaderComponent.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], BigHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], BigHeaderComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], BigHeaderComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], BigHeaderComponent.prototype, "classroom", void 0);
BigHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'big-header-component',
        template: __webpack_require__(469),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _b || Object])
], BigHeaderComponent);

var _a, _b;
//# sourceMappingURL=big-header.js.map

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_backend_model_user__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmallHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmallHeaderComponent = (function () {
    function SmallHeaderComponent(user, app) {
        this.user = user;
        this.app = app;
        this.event = {};
        this.more = false;
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.classroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    SmallHeaderComponent.prototype.onClickLogout = function () {
        this.logout.emit();
    };
    SmallHeaderComponent.prototype.onClickUpdateProfile = function () {
        this.profile.emit();
    };
    SmallHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    SmallHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    SmallHeaderComponent.prototype.onClickLogin = function () {
        this.onLogin.emit();
    };
    SmallHeaderComponent.prototype.onClickGotoClassRoom = function () {
        this.classroom.emit();
    };
    SmallHeaderComponent.prototype.onClickRegister = function () {
        this.register.emit();
    };
    return SmallHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], SmallHeaderComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SmallHeaderComponent.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SmallHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SmallHeaderComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SmallHeaderComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], SmallHeaderComponent.prototype, "classroom", void 0);
SmallHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'small-header-component',
        template: __webpack_require__(470),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _b || Object])
], SmallHeaderComponent);

var _a, _b;
//# sourceMappingURL=small-header.js.map

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_register_register__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    //login: boolean = false;
    function HeaderComponent(user, modal, app) {
        // userTest.run();
        // console.log('header :: constructor(), loginUser: ', user.loginUser);
        // this.login = user.isLogin();
        // console.log("user login status: ", this.login);
        this.user = user;
        this.modal = modal;
        this.app = app;
        this.event = {};
        this.ctr = 0;
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.more = false;
        // this.onClickRegister();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // this.onClickRegister();
    };
    HeaderComponent.prototype.onClickLogin = function () {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_2__modals_login_login__["a" /* LoginModal */]);
        modalRef;
        // modalRef.result.then( (x) => {
        //     //console.log( this.user.isLogin() );
        //     //this.login = this.user.isLogin();
        //     //console.log("user login status: ", this.login);
        //     if ( this.user.logged ) {
        //         this.onLogin.emit();
        //     }
        // }).catch( () => console.log('exit') );
    };
    HeaderComponent.prototype.onClickGotoClassRoom = function () {
        // window.open(
        //     `https://video.withcenter.com/room/${this.user.loginUser.name}/testroom`,
        //     '_blank'
        // );
    };
    HeaderComponent.prototype.onClickRegister = function () {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__modals_register_register__["a" /* RegisterComponent */]);
        modalRef;
        // modalRef.result.then( (x) => {
        //     // console.log( this.user.loginUser );
        //     //this.login = this.user.isLogin();
        //     console.log("user login status: ", this.user.logged);
        // }).catch( () =>console.log('exit '));
    };
    HeaderComponent.prototype.onClickLogout = function () {
        this.user.logout();
    };
    HeaderComponent.prototype.onClickUpdateProfile = function () {
        // console.log('uid ' + JSON.stringify(this.user.loginUser));
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__modals_register_register__["a" /* RegisterComponent */]);
        modalRef.result.then(function () { }).catch(function () { return console.log('exit '); });
    };
    HeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    /**
     * ================= ScrollSpy + Affix ======================
     */
    HeaderComponent.prototype.onClickMenu = function (name) {
        this.app.scrollTo(name);
    };
    HeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "onLogout", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'header-component',
        template: __webpack_require__(471),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.js.map

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_qna_post_post__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_backend_angular_backend__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Post } from './../../angular-backend/post';
// import { POST_RESPONSE } from './../../angular-backend/interface';


var InquiryComponent = (function () {
    function InquiryComponent(modal, post, app) {
        this.modal = modal;
        this.post = post;
        this.app = app;
        this.postList = [];
        this.getPostList();
        this.listenEvents();
    }
    InquiryComponent.prototype.listenEvents = function () {
        var _this = this;
        this.app.myEvent.subscribe(function (item) {
            if (item.eventType == 'post') {
                _this.getPostList();
            }
        });
    };
    InquiryComponent.prototype.getPostList = function () {
        var _this = this;
        this.post.list().subscribe(function (res) {
            _this.getDataSuccess(res);
            console.log("getPostList:", res);
        }, function (error) {
            _this.error(error);
        });
    };
    InquiryComponent.prototype.getDataSuccess = function (res) {
        console.log(res);
        try {
            res.data.posts.forEach(function (re) {
                re['created'] = new Date(parseInt(re.created)).toLocaleDateString();
            });
            this.postList = res.data.posts;
            console.log("data:", this.postList);
        }
        catch (e) {
            alert("CRITICAL: server returned wrong value");
        }
    };
    InquiryComponent.prototype.error = function (error) {
        return this.post.errorResponse(error);
    };
    InquiryComponent.prototype.onClickPost = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_2__modals_qna_post_post__["a" /* QnaPostComponent */]).result.then(function () {
        }).catch(function (e) { return console.log('exit ' + e); });
    };
    return InquiryComponent;
}());
InquiryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'inquiry-component',
        template: __webpack_require__(472),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_backend_angular_backend__["PostData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_backend_angular_backend__["PostData"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_app__["a" /* App */]) === "function" && _c || Object])
], InquiryComponent);

var _a, _b, _c;
//# sourceMappingURL=inquiry.js.map

/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
    }
    return IntroComponent;
}());
IntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'intro-component',
        template: __webpack_require__(473),
        styles: [__webpack_require__(404)]
    }),
    __metadata("design:paramtypes", [])
], IntroComponent);

//# sourceMappingURL=intro.js.map

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelTestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LevelTestComponent = (function () {
    function LevelTestComponent() {
    }
    return LevelTestComponent;
}());
LevelTestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'level-test-component',
        template: __webpack_require__(474),
        styles: [__webpack_require__(405)]
    })
], LevelTestComponent);

//# sourceMappingURL=level-test.js.map

/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'payment-component',
        template: __webpack_require__(483),
        styles: [__webpack_require__(412)]
    })
], PaymentComponent);

//# sourceMappingURL=payment.js.map

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_lms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeacherComponent = (function () {
    function TeacherComponent(lms, sanitizer) {
        this.lms = lms;
        this.sanitizer = sanitizer;
        // teachers container to be displayed
        this.playVideo = false;
        this.showMore = false;
        this.whole_teacher = [];
    }
    TeacherComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['teachers']) {
            if (!this.teachers)
                return;
            this.teachers.forEach(function (teacher) {
                // console.log(teacher);
                teacher.id = teacher.id.replace('ontue_', '');
                teacher.id = teacher.id.replace('_ontue', '');
                teacher.id = teacher.id.replace(/[0-9]+/, ''); ////\\\\///
                teacher.play_video = false;
                teacher.show_more_greeting = false;
                if (teacher.url_youtube.match(/http :\/\//g))
                    teacher.url_youtube = teacher.url_youtube.replace(/http :\/\//g, 'http://');
                if (teacher.url_youtube.match(/^http:\/\//i))
                    teacher.url_youtube = teacher.url_youtube.replace(/^http:\/\//i, 'https://'); //replace http to https
                if (teacher.url_youtube.match(/youtu.be/g))
                    teacher.url_youtube = teacher.url_youtube.replace(/youtu.be/g, 'youtube.com/embed'); //replace youtu.be to youtube.com/embed
                if (teacher.greeting.match(/<img[^>]*>|<br.*>|&nbsp;/g))
                    teacher.greeting = teacher.greeting.replace(/<img[^>]*>|<br.*>|&nbsp;/g, ""); //remove br tag img tag or &nbsp
                if (teacher.greeting.match(/(<([^>]+)>)/g))
                    teacher.greeting = teacher.greeting.replace(/(<([^>]+)>)/g, "");
                teacher.img_youtube = teacher.url_youtube.replace(/embed/g, "vi");
                teacher.img_youtube = teacher.img_youtube.replace(/youtube.com/g, "img.youtube.com") + "/mqdefault.jpg";
                teacher.img_youtube = _this.sanitizer.bypassSecurityTrustUrl(teacher.img_youtube); //to fix unsafe
                teacher.url_youtube = teacher.url_youtube + "?autoplay=1&autohide=1&controls=0&border=0&scrolling=no";
                teacher.url_youtube = _this.sanitizer.bypassSecurityTrustResourceUrl(teacher.url_youtube); //to fix unsafe
            });
        }
        // console.log("teacher",this.teachers);
        //this.whole_teacher = this.teachers;
        // console.log( 'count: ', this.teachers.length );
        this.first_9_teachers = this.teachers.filter(this.firstDisplayTeacherIndex);
        this.rest_teacher = this.teachers.filter(function (e) { return _this.first_9_teachers.findIndex(function (x) { return e.nickname == x.nickname; }) == -1; });
        this.whole_teacher = this.first_9_teachers.concat(this.rest_teacher);
        this.teachers = this.first_9_teachers;
    };
    TeacherComponent.prototype.firstDisplayTeacherIndex = function (query, i) {
        if (query.nickname == "Mngr Fae" ||
            query.nickname == "Louine" ||
            query.nickname == "Meg" ||
            query.nickname == "Yani" ||
            query.nickname == "Ellise" ||
            query.nickname == "Den" ||
            query.nickname == "Ren" ||
            query.nickname == "Ghen" ||
            query.nickname == "Asha") {
            return query;
        }
    };
    TeacherComponent.prototype.isArray = function (obj) {
        if (obj.constructor.toString().indexOf('Array') == -1)
            return false;
        return true;
    };
    TeacherComponent.prototype.onClickShowMore = function () {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.teachers = this.whole_teacher;
        }
        else {
            this.teachers = this.first_9_teachers;
            // this.teachers = _.take( this.teachers, this.no_teacher_show_by_defualt);
        }
    };
    return TeacherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Object)
], TeacherComponent.prototype, "teachers", void 0);
TeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'teacher-component',
        template: __webpack_require__(485),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_lms__["a" /* LMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_lms__["a" /* LMS */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], TeacherComponent);

var _a, _b;
//# sourceMappingURL=teacher.js.map

/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Test } from './../../angular-backend/test';
var HomePage = (function () {
    function HomePage(app, 
        // private test: Test,
        lms) {
        var _this = this;
        this.app = app;
        this.lms = lms;
        this.teachers = null;
        console.log("HomePage::constructor");
        this.lms.getTeachers(function (teachers) { return _this.teachers = teachers; });
        // console.log( 'check this user ::: ' + JSON.stringify(this.user.loginUser) );
        //if( this.user.loggedIn ) this.getReservation();
        //this.listenevent();
        //_.version();
    }
    // listenevent(){
    //     this.app.myEvent.subscribe( item =>{
    //         if( item.eventType == 'loggedin'  ){
    //             setTimeout( () =>{
    //                 this.getReservation();
    //             }, 400);
    //         }
    //         if( item.eventType == 'loggedout') this.reservations = {};
    //     })
    // }
    HomePage.prototype.getUserData = function () {
        // console.info('userid ' + this.user.loginUser.uid )
        // this.user.private_get( this.user.loginUser.uid, res => {
        //     this.data = res;
        //     //this.getReservation();
        // }, error => {
        //     console.log('error ::' + error );
        // }, () =>{
        // });
    };
    HomePage.prototype.ngOnInit = function () {
        // if( this.user.loggedIn ) this.reservation.getReservation();
    };
    HomePage.prototype.ngAfterViewInit = function () {
        console.log("HomePage::ngAfterViewInit() : ");
    };
    HomePage.prototype.onLogin = function () {
        ///setTimeout( () =>{
        // this.reservation.getReservation();
        //}, 400);
    };
    HomePage.prototype.onLogout = function () {
    };
    return HomePage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('reservation'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__["a" /* ReservationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__["a" /* ReservationComponent */]) === "function" && _a || Object)
], HomePage.prototype, "reservation", void 0);
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'home-page',
        template: __webpack_require__(486),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_lms__["a" /* LMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_lms__["a" /* LMS */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondDesignPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Test } from './../../angular-backend/test';
var SecondDesignPage = (function () {
    function SecondDesignPage(app, 
        // private test: Test,
        lms) {
        var _this = this;
        this.app = app;
        this.lms = lms;
        this.teachers = null;
        console.log("HomePage::constructor");
        this.lms.getTeachers(function (teachers) { return _this.teachers = teachers; });
        // console.log( 'check this user ::: ' + JSON.stringify(this.user.loginUser) );
        //if( this.user.loggedIn ) this.getReservation();
        //this.listenevent();
        //_.version();
    }
    // listenevent(){
    //     this.app.myEvent.subscribe( item =>{
    //         if( item.eventType == 'loggedin'  ){
    //             setTimeout( () =>{
    //                 this.getReservation();
    //             }, 400);
    //         }
    //         if( item.eventType == 'loggedout') this.reservations = {};
    //     })
    // }
    SecondDesignPage.prototype.getUserData = function () {
        // console.info('userid ' + this.user.loginUser.uid )
        // this.user.private_get( this.user.loginUser.uid, res => {
        //     this.data = res;
        //     //this.getReservation();
        // }, error => {
        //     console.log('error ::' + error );
        // }, () =>{
        // });
    };
    SecondDesignPage.prototype.ngOnInit = function () {
        // if( this.user.loggedIn ) this.reservation.getReservation();
    };
    SecondDesignPage.prototype.ngAfterViewInit = function () {
        console.log("HomePage::ngAfterViewInit() : ");
    };
    SecondDesignPage.prototype.onLogin = function () {
        ///setTimeout( () =>{
        // this.reservation.getReservation();
        //}, 400);
    };
    SecondDesignPage.prototype.onLogout = function () {
    };
    return SecondDesignPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('reservation'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__["a" /* ReservationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__["a" /* ReservationComponent */]) === "function" && _a || Object)
], SecondDesignPage.prototype, "reservation", void 0);
SecondDesignPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'second-design',
        template: __webpack_require__(487),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_lms__["a" /* LMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_lms__["a" /* LMS */]) === "function" && _c || Object])
], SecondDesignPage);

var _a, _b, _c;
//# sourceMappingURL=second-design.js.map

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdDesignPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Test } from './../../angular-backend/test';
var ThirdDesignPage = (function () {
    function ThirdDesignPage(app, 
        // private test: Test,
        lms) {
        var _this = this;
        this.app = app;
        this.lms = lms;
        this.teachers = null;
        console.log("HomePage::constructor");
        this.lms.getTeachers(function (teachers) { return _this.teachers = teachers; });
    }
    ThirdDesignPage.prototype.getUserData = function () {
    };
    ThirdDesignPage.prototype.ngOnInit = function () {
    };
    ThirdDesignPage.prototype.ngAfterViewInit = function () {
        console.log("HomePage::ngAfterViewInit() : ");
    };
    ThirdDesignPage.prototype.onLogin = function () {
    };
    ThirdDesignPage.prototype.onLogout = function () {
    };
    return ThirdDesignPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('reservation'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__["a" /* ReservationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_reservation_reservation__["a" /* ReservationComponent */]) === "function" && _a || Object)
], ThirdDesignPage.prototype, "reservation", void 0);
ThirdDesignPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'third-design',
        template: __webpack_require__(488),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_lms__["a" /* LMS */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_lms__["a" /* LMS */]) === "function" && _c || Object])
], ThirdDesignPage);

var _a, _b, _c;
//# sourceMappingURL=third-design.js.map

/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KkangFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KkangFooterComponent = (function () {
    function KkangFooterComponent(app) {
        this.app = app;
    }
    KkangFooterComponent.prototype.onClickPanelMenu = function (name) {
        this.app.scrollTo(name);
    };
    return KkangFooterComponent;
}());
KkangFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'kkang-footer-component',
        template: __webpack_require__(489),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _a || Object])
], KkangFooterComponent);

var _a;
//# sourceMappingURL=kkang-footer.js.map

/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KkangBigHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KkangBigHeaderComponent = (function () {
    function KkangBigHeaderComponent(user, app) {
        this.user = user;
        this.app = app;
        // event:any = {};
        this.more = false;
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.classroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    KkangBigHeaderComponent.prototype.onClickLogout = function () {
        this.logout.emit();
    };
    KkangBigHeaderComponent.prototype.onClickUpdateProfile = function () {
        this.profile.emit();
    };
    KkangBigHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    KkangBigHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    KkangBigHeaderComponent.prototype.onClickLogin = function () {
        this.onLogin.emit();
    };
    KkangBigHeaderComponent.prototype.onClickGotoClassRoom = function () {
        this.classroom.emit();
    };
    KkangBigHeaderComponent.prototype.onClickRegister = function () {
        this.register.emit();
    };
    return KkangBigHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], KkangBigHeaderComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangBigHeaderComponent.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangBigHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangBigHeaderComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangBigHeaderComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangBigHeaderComponent.prototype, "classroom", void 0);
KkangBigHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'kkang-big-header-component',
        template: __webpack_require__(490),
        styles: [__webpack_require__(419)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _b || Object])
], KkangBigHeaderComponent);

var _a, _b;
//# sourceMappingURL=kkang-big-header.js.map

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KkangSmallHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KkangSmallHeaderComponent = (function () {
    function KkangSmallHeaderComponent(user, app) {
        this.user = user;
        this.app = app;
        this.event = {};
        this.more = false;
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.classroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    KkangSmallHeaderComponent.prototype.onClickLogout = function () {
        this.logout.emit();
    };
    KkangSmallHeaderComponent.prototype.onClickUpdateProfile = function () {
        this.profile.emit();
    };
    KkangSmallHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    KkangSmallHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    KkangSmallHeaderComponent.prototype.onClickLogin = function () {
        this.onLogin.emit();
    };
    KkangSmallHeaderComponent.prototype.onClickGotoClassRoom = function () {
        this.classroom.emit();
    };
    KkangSmallHeaderComponent.prototype.onClickRegister = function () {
        this.register.emit();
    };
    return KkangSmallHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], KkangSmallHeaderComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangSmallHeaderComponent.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangSmallHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangSmallHeaderComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangSmallHeaderComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangSmallHeaderComponent.prototype, "classroom", void 0);
KkangSmallHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'kkang-small-header-component',
        template: __webpack_require__(491),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _b || Object])
], KkangSmallHeaderComponent);

var _a, _b;
//# sourceMappingURL=kkang-small-header.js.map

/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modals_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_register_register__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KkangHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var KkangHeaderComponent = (function () {
    function KkangHeaderComponent(user, modal, app) {
        this.user = user;
        this.modal = modal;
        this.app = app;
        this.event = {};
        this.ctr = 0;
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.more = false;
    }
    KkangHeaderComponent.prototype.ngOnInit = function () { };
    KkangHeaderComponent.prototype.onClickLogin = function () {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_2__components_modals_login_login__["a" /* LoginModal */]);
        modalRef;
    };
    KkangHeaderComponent.prototype.onClickGotoClassRoom = function () {
    };
    KkangHeaderComponent.prototype.onClickRegister = function () {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modals_register_register__["a" /* RegisterComponent */]);
        modalRef;
    };
    KkangHeaderComponent.prototype.onClickLogout = function () {
        this.user.logout();
    };
    KkangHeaderComponent.prototype.onClickUpdateProfile = function () {
        // console.log('uid ' + JSON.stringify(this.user.loginUser));
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modals_register_register__["a" /* RegisterComponent */]);
        modalRef.result.then(function () { }).catch(function () { return console.log('exit '); });
    };
    KkangHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    KkangHeaderComponent.prototype.onClickMenu = function (name) {
        this.app.scrollTo(name);
    };
    KkangHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    return KkangHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], KkangHeaderComponent.prototype, "onLogout", void 0);
KkangHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'kkang-header-component',
        template: __webpack_require__(492),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */]) === "function" && _c || Object])
], KkangHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=kkang-header.js.map

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlFooterComponent = (function () {
    function PlFooterComponent(app) {
        this.app = app;
    }
    PlFooterComponent.prototype.onClickPanelMenu = function (name) {
        this.app.scrollTo(name);
    };
    return PlFooterComponent;
}());
PlFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'pl-footer-component',
        template: __webpack_require__(493),
        styles: [__webpack_require__(422)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_app__["a" /* App */]) === "function" && _a || Object])
], PlFooterComponent);

var _a;
//# sourceMappingURL=pl-footer.js.map

/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlBigHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlBigHeaderComponent = (function () {
    function PlBigHeaderComponent(user, app) {
        this.user = user;
        this.app = app;
        // event:any = {};
        this.more = false;
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.classroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    PlBigHeaderComponent.prototype.onClickLogout = function () {
        this.logout.emit();
    };
    PlBigHeaderComponent.prototype.onClickUpdateProfile = function () {
        this.profile.emit();
    };
    PlBigHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    PlBigHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    PlBigHeaderComponent.prototype.onClickLogin = function () {
        this.onLogin.emit();
    };
    PlBigHeaderComponent.prototype.onClickGotoClassRoom = function () {
        this.classroom.emit();
    };
    PlBigHeaderComponent.prototype.onClickRegister = function () {
        this.register.emit();
    };
    return PlBigHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], PlBigHeaderComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlBigHeaderComponent.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlBigHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlBigHeaderComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlBigHeaderComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlBigHeaderComponent.prototype, "classroom", void 0);
PlBigHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'pl-big-header-component',
        template: __webpack_require__(494),
        styles: [__webpack_require__(423)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _b || Object])
], PlBigHeaderComponent);

var _a, _b;
//# sourceMappingURL=pl-big-header.js.map

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlSmallHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlSmallHeaderComponent = (function () {
    function PlSmallHeaderComponent(user, app) {
        this.user = user;
        this.app = app;
        this.event = {};
        this.more = false;
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.register = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.classroom = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
    }
    PlSmallHeaderComponent.prototype.onClickLogout = function () {
        this.logout.emit();
    };
    PlSmallHeaderComponent.prototype.onClickUpdateProfile = function () {
        this.profile.emit();
    };
    PlSmallHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    PlSmallHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    PlSmallHeaderComponent.prototype.onClickLogin = function () {
        this.onLogin.emit();
    };
    PlSmallHeaderComponent.prototype.onClickGotoClassRoom = function () {
        this.classroom.emit();
    };
    PlSmallHeaderComponent.prototype.onClickRegister = function () {
        this.register.emit();
    };
    return PlSmallHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Boolean)
], PlSmallHeaderComponent.prototype, "login", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlSmallHeaderComponent.prototype, "logout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlSmallHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlSmallHeaderComponent.prototype, "register", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlSmallHeaderComponent.prototype, "profile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlSmallHeaderComponent.prototype, "classroom", void 0);
PlSmallHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'pl-small-header-component',
        template: __webpack_require__(495),
        styles: [__webpack_require__(424)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_app__["a" /* App */]) === "function" && _b || Object])
], PlSmallHeaderComponent);

var _a, _b;
//# sourceMappingURL=pl-small-header.js.map

/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_modals_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_register_register__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlHeaderComponent = (function () {
    function PlHeaderComponent(user, modal, app) {
        // this.onClickRegister();
        this.user = user;
        this.modal = modal;
        this.app = app;
        this.event = {};
        this.ctr = 0;
        this.onLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.onLogout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* EventEmitter */]();
        this.more = false;
    }
    PlHeaderComponent.prototype.ngOnInit = function () { };
    PlHeaderComponent.prototype.onClickLogin = function () {
        var _this = this;
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_2__components_modals_login_login__["a" /* LoginModal */]);
        modalRef.result.then(function (res) {
            if (res == 'success') {
                _this.app.myEvent.emit({
                    eventType: "login-success",
                });
            }
        }, function (reason) {
            console.log("reason:", reason);
        });
    };
    PlHeaderComponent.prototype.onClickGotoClassRoom = function () {
    };
    PlHeaderComponent.prototype.onClickRegister = function () {
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modals_register_register__["a" /* RegisterComponent */]);
        modalRef;
    };
    PlHeaderComponent.prototype.onClickLogout = function () {
        this.user.logout();
    };
    PlHeaderComponent.prototype.onClickUpdateProfile = function () {
        // console.log('uid ' + JSON.stringify(this.user.loginUser));
        var modalRef = this.modal.open(__WEBPACK_IMPORTED_MODULE_3__components_modals_register_register__["a" /* RegisterComponent */]);
        modalRef.result.then(function () { }).catch(function () { return console.log('exit '); });
    };
    PlHeaderComponent.prototype.onClickMoreMenu = function () {
        this.more = !this.more;
    };
    PlHeaderComponent.prototype.onClickMenu = function (name) {
        this.app.scrollTo(name);
    };
    PlHeaderComponent.prototype.onClickPanelMenu = function (name) {
        this.more = false;
        this.app.scrollTo(name);
    };
    return PlHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlHeaderComponent.prototype, "onLogin", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Output */])(),
    __metadata("design:type", Object)
], PlHeaderComponent.prototype, "onLogout", void 0);
PlHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'pl-header-component',
        template: __webpack_require__(496),
        styles: [__webpack_require__(425)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_backend_model_user__["User"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_app__["a" /* App */]) === "function" && _c || Object])
], PlHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=pl-header.js.map

/***/ }),
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".file {\n  position: relative; }\n  .file .fa-stack {\n    position: absolute;\n    bottom: .4em;\n    right: .4em;\n    cursor: pointer; }\n    .file .fa-stack .fa-trash {\n      color: #454; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*a{*/\n/*cursor: pointer;*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "td {\n  position: relative; }\n\ntr.strikeout td:before {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  border-bottom: 1px solid #111;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: .3 0 .3em;\n  background: #8d8d8d; }\n  @media (min-width: 768px) {\n    :host {\n      background: #fff; } }\n\n:host aside {\n  overflow: auto;\n  display: block;\n  position: relative;\n  top: auto;\n  left: auto;\n  right: auto;\n  bottom: auto;\n  left: auto; }\n  :host aside ul {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    list-style: none; }\n    :host aside ul li {\n      float: left;\n      width: 20%;\n      text-align: center; }\n      :host aside ul li a {\n        display: block;\n        position: relative;\n        overflow: auto; }\n        :host aside ul li a img {\n          display: block;\n          width: 100%;\n          height: auto; }\n        :host aside ul li a font {\n          text-decoration: none;\n          position: absolute;\n          right: 0;\n          left: 0;\n          bottom: .5em;\n          color: #fff;\n          font-size: 12px; }\n        :host aside ul li a .chrome {\n          color: #3a2123; }\n\n@media all and (min-width: 768px) {\n  :host .sidebar ul {\n    z-index: 1;\n    position: fixed;\n    bottom: 0;\n    right: 0; }\n    :host .sidebar ul li {\n      margin-left: .2em;\n      margin-bottom: .5em;\n      width: 100px; }\n      :host .sidebar ul li a img {\n        width: 95%;\n        height: auto; }\n      :host .sidebar ul li a font {\n        font-size: 15px; } }\n\n@media all and (min-width: 1240px) {\n  :host .sidebar {\n    z-index: 1;\n    position: fixed;\n    top: 9em;\n    left: 1.5em;\n    right: auto;\n    bottom: auto; }\n    :host .sidebar ul {\n      position: relative; }\n      :host .sidebar ul li {\n        float: none;\n        width: 100px; }\n        :host .sidebar ul li a img {\n          width: 95%;\n          height: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1366px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .img-text {\n    position: absolute;\n    display: inline-block;\n    left: 0;\n    float: left;\n    height: 89px;\n    width: 311px; }\n    .my-banner .img-text .text {\n      position: absolute;\n      display: inline-block;\n      float: right;\n      font-size: 10px;\n      color: #FFFFFF;\n      text-align: center; }\n    .my-banner .img-text .how {\n      width: 11%;\n      right: 39%;\n      top: 53%;\n      text-align: center; }\n    .my-banner .img-text .what {\n      width: 13%;\n      right: 30%;\n      top: 15%;\n      text-align: center; }\n    .my-banner .img-text .why {\n      width: 10%;\n      right: 5%;\n      top: 21%;\n      text-align: center; }\n    .my-banner .img-text .who {\n      width: 13%;\n      right: 0;\n      top: 58%;\n      text-align: center; }\n    @media all and (min-width: 380px) {\n      .my-banner .img-text {\n        height: 100px;\n        width: 355px; } }\n    @media all and (min-width: 480px) {\n      .my-banner .img-text {\n        height: 125px;\n        width: 445px; }\n        .my-banner .img-text .text {\n          font-size: 12px; } }\n    @media all and (min-width: 560px) {\n      .my-banner .img-text {\n        height: 140px;\n        width: 500px; }\n        .my-banner .img-text .text {\n          font-size: 14px; } }\n    @media all and (min-width: 600px) {\n      .my-banner .img-text {\n        height: 160px;\n        width: 565px; }\n        .my-banner .img-text .text {\n          font-size: 16px; } }\n    @media all and (min-width: 760px) {\n      .my-banner .img-text {\n        height: 200px;\n        width: 710px; }\n        .my-banner .img-text .text {\n          font-size: 18px; } }\n    @media all and (min-width: 860px) {\n      .my-banner .img-text {\n        height: 225px;\n        width: 800px; }\n        .my-banner .img-text .text {\n          font-size: 22px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .img-text {\n        height: 280px;\n        width: 980px; } }\n    @media all and (min-width: 1024px) {\n      .my-banner .img-text {\n        left: 25px; } }\n    @media all and (min-width: 1280px) {\n      .my-banner .img-text {\n        left: 150px; } }\n    @media all and (min-width: 1366px) {\n      .my-banner .img-text {\n        left: 190px; } }\n    @media all and (min-width: 1440px) {\n      .my-banner .img-text {\n        left: 230px; } }\n    @media all and (min-width: 1680px) {\n      .my-banner .img-text {\n        left: 350px; } }\n    @media all and (min-width: 1800px) {\n      .my-banner .img-text {\n        left: 440px; } }\n    @media all and (min-width: 1920px) {\n      .my-banner .img-text {\n        left: 470px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-right: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner img {\n      left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner img {\n      left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 1em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: right;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      margin-bottom: 8px;\n      font-size: 18px;\n      color: #fff; }\n    .my-banner .banner-info .desc {\n      display: inline-block;\n      font-size: 14px;\n      color: #fff; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-right: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info .level {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 16px;\n    color: #fff; }\n  .my-banner .banner-info .desc {\n    display: inline-block;\n    font-size: 9px;\n    color: #fff; }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: .5em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: right;\n    color: #FFFFFF; }\n    @media all and (min-width: 480px) {\n      .my-banner .banner-info .level {\n        font-size: 18px; }\n      .my-banner .banner-info .desc {\n        font-size: 11px; } }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 24px; }\n      .my-banner .banner-info .desc {\n        font-size: 14px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 32px; }\n      .my-banner .banner-info .desc {\n        width: 15em;\n        font-size: 18px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 1.5em; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-left: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-right: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner img {\n      left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner img {\n      left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 1em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: right;\n    color: #FFFFFF; }\n    .my-banner .banner-info .level {\n      display: block;\n      margin-bottom: 8px;\n      font-size: 18px;\n      color: #fff; }\n    .my-banner .banner-info .desc {\n      display: inline-block;\n      font-size: 14px;\n      color: #fff; }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 28px; }\n      .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".my-banner {\n  padding-right: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    .my-banner {\n      height: 100px; }\n      .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    .my-banner {\n      height: 125px; }\n      .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    .my-banner {\n      height: 140px; }\n      .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    .my-banner {\n      height: 160px; }\n      .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    .my-banner {\n      height: 200px; }\n      .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    .my-banner {\n      height: 225px; }\n      .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    .my-banner {\n      height: 280px; }\n      .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    .my-banner img {\n      left: 0px; } }\n  .my-banner .banner-info .level {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 16px;\n    color: #fff; }\n  .my-banner .banner-info .desc {\n    display: inline-block;\n    font-size: 9px;\n    color: #fff; }\n  .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: .5em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: right;\n    color: #FFFFFF; }\n    @media all and (min-width: 480px) {\n      .my-banner .banner-info .level {\n        font-size: 18px; }\n      .my-banner .banner-info .desc {\n        font-size: 11px; } }\n    @media all and (min-width: 600px) {\n      .my-banner .banner-info .level {\n        font-size: 24px; }\n      .my-banner .banner-info .desc {\n        font-size: 14px; } }\n    @media all and (min-width: 800px) {\n      .my-banner .banner-info .level {\n        font-size: 32px; }\n      .my-banner .banner-info .desc {\n        width: 15em;\n        font-size: 18px; } }\n    @media all and (min-width: 980px) {\n      .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      .my-banner .banner-info .desc {\n        font-size: 1.5em; } }\n  @media (min-width: 1200px) {\n    .my-banner {\n      padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-color: #F7CD47; }\n  :host .comment-container {\n    padding: 3em 0;\n    padding-bottom: 0;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    max-width: 992px;\n    display: block; }\n    :host .comment-container .row {\n      margin: 0; }\n    :host .comment-container .comment-content {\n      padding: 2em; }\n    :host .comment-container .img-comment {\n      padding: 1em;\n      padding-bottom: 0;\n      text-align: center; }\n      :host .comment-container .img-comment img {\n        margin: 0 auto;\n        width: 50%;\n        position: relative; }\n    @media all and (min-width: 768px) {\n      :host .comment-container .img-comment img {\n        position: absolute;\n        width: 250px;\n        max-height: auto;\n        height: auto;\n        bottom: 0;\n        left: 1em; } }\n    :host .comment-container .title-row {\n      display: inline-block;\n      font-size: 41px;\n      color: #2d2d2d;\n      margin-bottom: 1.4rem; }\n    :host .comment-container .inner {\n      height: 130px;\n      overflow-y: hidden;\n      margin-bottom: 15px; }\n      @media (min-width: 768px) {\n        :host .comment-container .inner {\n          height: 175px; } }\n      :host .comment-container .inner .picture-text {\n        margin-bottom: 14px;\n        display: inline-block; }\n        :host .comment-container .inner .picture-text img {\n          vertical-align: middle;\n          border-radius: 100%; }\n      :host .comment-container .inner .name-text {\n        display: inline-block;\n        font-size: 18px;\n        font-weight: bold; }\n      :host .comment-container .inner .comment-text {\n        color: #2c3e50; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .my-banner {\n  padding-left: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  :host .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    :host .my-banner {\n      height: 100px; }\n      :host .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    :host .my-banner {\n      height: 125px; }\n      :host .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    :host .my-banner {\n      height: 140px; }\n      :host .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    :host .my-banner {\n      height: 160px; }\n      :host .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    :host .my-banner {\n      height: 200px; }\n      :host .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    :host .my-banner {\n      height: 225px; }\n      :host .my-banner img {\n        left: -370px; } }\n  @media all and (min-width: 980px) {\n    :host .my-banner {\n      height: 280px; }\n      :host .my-banner img {\n        left: -470px; } }\n  @media all and (min-width: 1024px) {\n    :host .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    :host .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1366px) {\n    :host .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    :host .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    :host .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    :host .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    :host .my-banner img {\n      left: 0px; } }\n  :host .my-banner .img-text {\n    position: absolute;\n    display: inline-block;\n    left: 0;\n    float: left;\n    height: 89px;\n    width: 311px; }\n    :host .my-banner .img-text .text {\n      position: absolute;\n      display: inline-block;\n      float: right;\n      font-size: 10px;\n      color: #FFFFFF;\n      text-align: center; }\n    :host .my-banner .img-text .how {\n      width: 11%;\n      right: 39%;\n      top: 53%;\n      text-align: center; }\n    :host .my-banner .img-text .what {\n      width: 13%;\n      right: 30%;\n      top: 15%;\n      text-align: center; }\n    :host .my-banner .img-text .why {\n      width: 10%;\n      right: 5%;\n      top: 21%;\n      text-align: center; }\n    :host .my-banner .img-text .who {\n      width: 13%;\n      right: 0;\n      top: 58%;\n      text-align: center; }\n    @media all and (min-width: 380px) {\n      :host .my-banner .img-text {\n        height: 100px;\n        width: 355px; } }\n    @media all and (min-width: 480px) {\n      :host .my-banner .img-text {\n        height: 125px;\n        width: 445px; }\n        :host .my-banner .img-text .text {\n          font-size: 12px; } }\n    @media all and (min-width: 560px) {\n      :host .my-banner .img-text {\n        height: 140px;\n        width: 500px; }\n        :host .my-banner .img-text .text {\n          font-size: 14px; } }\n    @media all and (min-width: 600px) {\n      :host .my-banner .img-text {\n        height: 160px;\n        width: 565px; }\n        :host .my-banner .img-text .text {\n          font-size: 16px; } }\n    @media all and (min-width: 760px) {\n      :host .my-banner .img-text {\n        height: 200px;\n        width: 710px; }\n        :host .my-banner .img-text .text {\n          font-size: 18px; } }\n    @media all and (min-width: 860px) {\n      :host .my-banner .img-text {\n        height: 225px;\n        width: 800px; }\n        :host .my-banner .img-text .text {\n          font-size: 22px; } }\n    @media all and (min-width: 980px) {\n      :host .my-banner .img-text {\n        height: 280px;\n        width: 980px; } }\n    @media all and (min-width: 1024px) {\n      :host .my-banner .img-text {\n        left: 25px; } }\n    @media all and (min-width: 1280px) {\n      :host .my-banner .img-text {\n        left: 150px; } }\n    @media all and (min-width: 1366px) {\n      :host .my-banner .img-text {\n        left: 190px; } }\n    @media all and (min-width: 1440px) {\n      :host .my-banner .img-text {\n        left: 230px; } }\n    @media all and (min-width: 1680px) {\n      :host .my-banner .img-text {\n        left: 350px; } }\n    @media all and (min-width: 1800px) {\n      :host .my-banner .img-text {\n        left: 440px; } }\n    @media all and (min-width: 1920px) {\n      :host .my-banner .img-text {\n        left: 470px; } }\n  :host .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 2em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: left;\n    color: #FFFFFF; }\n    :host .my-banner .banner-info .level {\n      display: block;\n      font-size: 16px;\n      color: #FFFFFF;\n      font-weight: 500;\n      line-height: 1.1; }\n    :host .my-banner .banner-info .desc {\n      font-size: 12px;\n      color: #FFFFFF;\n      line-height: 1.5; }\n    @media all and (min-width: 600px) {\n      :host .my-banner .banner-info .level {\n        font-size: 28px; }\n      :host .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      :host .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      :host .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      :host .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    :host .my-banner {\n      padding-left: 0; } }\n\n:host /deep/ .contact-container {\n  padding: 5em 0;\n  background-color: #d8f1e4; }\n  :host /deep/ .contact-container .row {\n    margin: 0; }\n  :host /deep/ .contact-container .contact-content .logo {\n    margin-bottom: 1em;\n    position: relative;\n    display: block;\n    width: 100%;\n    padding: 0 1em; }\n    :host /deep/ .contact-container .contact-content .logo img {\n      position: relative;\n      width: 100%;\n      height: auto; }\n    @media (min-width: 768px) {\n      :host /deep/ .contact-container .contact-content .logo {\n        width: 60%; } }\n  :host /deep/ .contact-container .contact-content .title {\n    margin-bottom: 1em;\n    width: 7em; }\n  :host /deep/ .contact-container .contact-content .desc {\n    margin-bottom: 1em;\n    width: 10em; }\n    @media (min-width: 768px) {\n      :host /deep/ .contact-container .contact-content .desc {\n        width: 20em; } }\n\n:host /deep/ .contact-form {\n  padding: 3em 1em;\n  background-color: #a7dbdb; }\n  :host /deep/ .contact-form h2 {\n    margin-bottom: 1em; }\n  :host /deep/ .contact-form form .line-submit input {\n    font-size: 1.2em;\n    background-color: #ff6633;\n    color: #FFFFFF; }\n  :host /deep/ .contact-form form .col-auto {\n    width: 6em; }\n    :host /deep/ .contact-form form .col-auto label {\n      margin-left: 1em; }\n  :host /deep/ .contact-form form .text {\n    margin-bottom: .5em;\n    width: 25em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-repeat: no-repeat;\n  background-image: url(\"/assets/img/course.jpg\");\n  background-color: #5c6670; }\n\n.curriculum-container {\n  padding-top: 2em;\n  padding-bottom: 2em; }\n  .curriculum-container .row {\n    margin: auto; }\n  .curriculum-container .collection {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 0.8em;\n    width: 98%;\n    max-width: 980px;\n    background-color: #ededed;\n    overflow: hidden; }\n\n:host-context(.big) .curriculum-container .collection {\n  padding-left: 1.2em; }\n\n:host-context(.big) .curriculum-container .inner-row {\n  margin: 1.2em 1.2em 0 0; }\n\n.curriculum-container .info-text {\n  margin: 0 auto 1em;\n  padding: .5em 1em;\n  text-align: center;\n  font-size: 2.2em;\n  max-width: 425px;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.75);\n  color: #334353; }\n\n.curriculum-container .more-text {\n  margin: 0 auto;\n  margin-bottom: 3.125em;\n  max-width: 200px;\n  width: 100%;\n  background-color: #F46516;\n  color: #FFFFFF;\n  text-align: center; }\n  .curriculum-container .more-text span {\n    display: inline-block;\n    padding: 0.9em 1.3em;\n    font-size: 1.3em;\n    letter-spacing: 0.2em;\n    cursor: pointer;\n    text-decoration: none; }\n\n.curriculum-container .collection .mybook {\n  padding: 0; }\n\n.curriculum-container .collection .inner-row {\n  margin: 0.8em 0.8em 0 0;\n  height: 27em;\n  text-align: left;\n  overflow-y: hidden;\n  background-color: #fff; }\n  .curriculum-container .collection .inner-row .book-image {\n    margin-bottom: 1.6em;\n    width: 100%; }\n  .curriculum-container .collection .inner-row .title {\n    margin-bottom: 1.1em;\n    padding: 0 0.8em;\n    font-size: .99em;\n    color: #2b2b2b; }\n  .curriculum-container .collection .inner-row .desc {\n    padding: 0 0.8em;\n    margin-bottom: 1.5em;\n    height: 9.7em;\n    font-size: 0.95em;\n    color: #838383; }\n\n.curriculum-container .collection .load {\n  margin: .8em 0; }\n  .curriculum-container .collection .load .load-more {\n    margin-right: 0.8em;\n    padding: 0.875em 1.25em;\n    font-size: 1em;\n    letter-spacing: 0.1875em;\n    background-color: #3498db;\n    color: #FFFFFF;\n    text-align: center;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .copyright {\n  padding: 5em 0;\n  background-color: #ecf0f1; }\n  :host .copyright img {\n    width: 100%; }\n  :host .copyright .footer-content {\n    padding: 0 .5em;\n    width: 100%;\n    color: #383838;\n    font-size: 0.9em;\n    line-height: 1.6rem;\n    text-align: center; }\n    @media (min-width: 992px) {\n      :host .copyright .footer-content {\n        border-left: 0.15rem solid #898989;\n        padding-left: 1em;\n        text-align: left;\n        width: auto; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".file {\n  position: relative; }\n  .file .fa-stack {\n    position: absolute;\n    bottom: .4em;\n    right: .4em;\n    cursor: pointer; }\n    .file .fa-stack .fa-trash {\n      color: #454; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .inquiry-container {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 992px; }\n  :host .inquiry-container .top {\n    color: #06000a; }\n    :host .inquiry-container .top .forum-description {\n      margin-top: .4em;\n      padding: 0 0 .4em;\n      border-bottom: 1px solid #dfdfdf;\n      font-size: 28px;\n      color: #3b3b3b; }\n  :host .inquiry-container .bottom {\n    margin-top: .4em;\n    overflow: auto; }\n    :host .inquiry-container .bottom .post-count {\n      float: left; }\n    :host .inquiry-container .bottom .post-new-button {\n      float: right;\n      right: .2em;\n      margin: .2em 0;\n      padding: .2em .4em;\n      cursor: pointer;\n      border-radius: 3px;\n      background-color: #e67e22; }\n      :host .inquiry-container .bottom .post-new-button span {\n        padding: .2em 1em;\n        border-radius: 3px;\n        background-color: #e67e22;\n        text-decoration: none;\n        color: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  border-top: 5px solid #44bddf;\n  width: 100%;\n  height: 120px;\n  top: 0;\n  z-index: 1;\n  background-color: #ffffff; }\n\n:host .big .navbar {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 992px; }\n  :host .big .navbar .logo {\n    margin: 0;\n    padding-top: 3em;\n    width: 180px;\n    cursor: pointer; }\n    :host .big .navbar .logo img {\n      margin-left: .5em;\n      width: 100%;\n      max-width: 180px; }\n  :host .big .navbar .bottom {\n    margin: 0;\n    padding-top: 2em;\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: inline-block;\n    color: #045f9c;\n    background-color: transparent; }\n\n:host .big .navbar .bottom .my-top-menu {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-right: .6em;\n  color: #fff;\n  background-color: #44bddf; }\n  :host .big .navbar .bottom .my-top-menu ul {\n    margin: 0;\n    padding: 0;\n    background-color: #44bddf;\n    border-top-left-radius: -10px;\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px; }\n    :host .big .navbar .bottom .my-top-menu ul li {\n      padding: .3em 1em;\n      padding-bottom: .2em;\n      display: inline-block;\n      cursor: pointer; }\n\n:host .big .navbar .bottom .menus ul {\n  margin: 1em 0;\n  padding: 0; }\n  @media (min-width: 768px) {\n    :host .big .navbar .bottom .menus ul {\n      margin-right: .5em; } }\n\n:host .big .navbar .bottom .menus ul li {\n  display: inline-block;\n  list-style: none;\n  text-align: center;\n  cursor: pointer; }\n  :host .big .navbar .bottom .menus ul li.active {\n    color: #d35400;\n    font-weight: 600; }\n  :host .big .navbar .bottom .menus ul li:hover {\n    color: #0e7ecc; }\n  :host .big .navbar .bottom .menus ul li span {\n    margin: 0 auto;\n    display: block;\n    font-size: 1em; }\n\n:host .big .navbar .bottom .menus ul li span i {\n  color: #15acd7; }\n  :host .big .navbar .bottom .menus ul li span i.fa-inverse {\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .small .navbar {\n  padding: 0;\n  border-top: 5px solid #44bddf;\n  background-color: #ffffff; }\n  :host .small .navbar .logo {\n    width: 100%;\n    height: 100%;\n    padding: .5em 0; }\n  :host .small .navbar .logo img {\n    cursor: pointer;\n    display: block;\n    margin: 0 auto;\n    max-width: 260px;\n    height: 60px; }\n  :host .small .navbar .bottom {\n    margin: 0; }\n    :host .small .navbar .bottom .menu {\n      color: #ffffff;\n      background-color: #3498db; }\n      :host .small .navbar .bottom .menu ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        overflow: auto;\n        overflow: hidden; }\n        :host .small .navbar .bottom .menu ul li {\n          float: left;\n          padding: 0;\n          cursor: pointer; }\n          :host .small .navbar .bottom .menu ul li .text {\n            display: block;\n            padding: .22em .6em .22em 0;\n            font-size: 1.25em; }\n          :host .small .navbar .bottom .menu ul li .icon {\n            display: block;\n            padding: 0 .3em;\n            font-size: 2.375em; }\n        :host .small .navbar .bottom .menu ul .register, :host .small .navbar .bottom .menu ul .profile {\n          padding-left: .32em; }\n    :host .small .navbar .bottom .panel {\n      padding: 0;\n      max-height: 0;\n      overflow: hidden;\n      -webkit-transition-duration: .3s;\n              transition-duration: .3s; }\n      :host .small .navbar .bottom .panel.active {\n        max-height: 450px; }\n      :host .small .navbar .bottom .panel .menus {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        color: #ffffff;\n        background-color: #2980b9; }\n        :host .small .navbar .bottom .panel .menus .menu {\n          padding: .4em 0 .4em .76em;\n          overflow: auto;\n          cursor: pointer;\n          background-color: #2980b9; }\n          :host .small .navbar .bottom .panel .menus .menu font {\n            font-size: 1.01rem; }\n          :host .small .navbar .bottom .panel .menus .menu .menu-img {\n            display: block;\n            float: left; }\n            :host .small .navbar .bottom .panel .menus .menu .menu-img i {\n              color: white; }\n              :host .small .navbar .bottom .panel .menus .menu .menu-img i.fa-inverse {\n                color: #15acd7; }\n          :host .small .navbar .bottom .panel .menus .menu .text {\n            display: block;\n            float: left;\n            padding: .4em 0 0 .5em;\n            font-size: 1.2em; }\n          :host .small .navbar .bottom .panel .menus .menu.active {\n            color: #ff0; }\n          :host .small .navbar .bottom .panel .menus .menu:hover {\n            background-color: #3498db; }\n        :host .small .navbar .bottom .panel .menus .menu:first-child {\n          margin-top: .1em;\n          padding-top: .8em; }\n        :host .small .navbar .bottom .panel .menus .menu:last-child {\n          padding-bottom: .8em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "header-component {\n  display: block;\n  width: 100%;\n  height: 100%; }\n  header-component header nav.navbar {\n    padding: 0; }\n    header-component header nav.navbar .menu {\n      padding: .3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-color: #FFFFFF; }\n  :host .my-banner {\n    padding-left: 1em;\n    position: relative;\n    overflow: hidden;\n    height: 89px; }\n    :host .my-banner img {\n      position: absolute;\n      left: -149px;\n      width: auto;\n      height: 100%; }\n    @media all and (min-width: 380px) {\n      :host .my-banner {\n        height: 100px; }\n        :host .my-banner img {\n          left: -165px; } }\n    @media all and (min-width: 480px) {\n      :host .my-banner {\n        height: 125px; }\n        :host .my-banner img {\n          left: -205px; } }\n    @media all and (min-width: 560px) {\n      :host .my-banner {\n        height: 140px; }\n        :host .my-banner img {\n          left: -230px; } }\n    @media all and (min-width: 600px) {\n      :host .my-banner {\n        height: 160px; }\n        :host .my-banner img {\n          left: -265px; } }\n    @media all and (min-width: 760px) {\n      :host .my-banner {\n        height: 200px; }\n        :host .my-banner img {\n          left: -330px; } }\n    @media all and (min-width: 860px) {\n      :host .my-banner {\n        height: 225px; }\n        :host .my-banner img {\n          left: -370px; } }\n    @media all and (min-width: 980px) {\n      :host .my-banner {\n        height: 280px; }\n        :host .my-banner img {\n          left: -470px; } }\n    @media all and (min-width: 1024px) {\n      :host .my-banner img {\n        left: -445px; } }\n    @media all and (min-width: 1280px) {\n      :host .my-banner img {\n        left: -320px; } }\n    @media all and (min-width: 1336px) {\n      :host .my-banner img {\n        left: -280px; } }\n    @media all and (min-width: 1440px) {\n      :host .my-banner img {\n        left: -240px; } }\n    @media all and (min-width: 1680px) {\n      :host .my-banner img {\n        left: -120px; } }\n    @media all and (min-width: 1800px) {\n      :host .my-banner img {\n        left: -30px; } }\n    @media all and (min-width: 1980px) {\n      :host .my-banner img {\n        left: 0px; } }\n    :host .my-banner .banner-info {\n      position: relative;\n      display: block;\n      margin: 2em auto;\n      width: 100%;\n      max-width: 992px;\n      text-align: left;\n      color: #FFFFFF; }\n      :host .my-banner .banner-info .level {\n        display: block;\n        font-size: 16px;\n        color: #FFFFFF;\n        font-weight: 500;\n        line-height: 1.1; }\n      :host .my-banner .banner-info .desc {\n        font-size: 12px;\n        color: #FFFFFF;\n        line-height: 1.5; }\n      @media all and (min-width: 600px) {\n        :host .my-banner .banner-info .level {\n          font-size: 28px; }\n        :host .my-banner .banner-info .desc {\n          font-size: 20px; } }\n      @media all and (min-width: 800px) {\n        :host .my-banner .banner-info .level {\n          font-size: 36px; } }\n      @media all and (min-width: 980px) {\n        :host .my-banner .banner-info .level {\n          margin-bottom: 18px;\n          font-size: 48px; }\n        :host .my-banner .banner-info .desc {\n          font-size: 24px; } }\n    @media (min-width: 1200px) {\n      :host .my-banner {\n        padding-left: 0; } }\n  :host main {\n    padding: 3em .5em; }\n    :host main .inquiry-container {\n      margin: 0 auto;\n      width: 100%;\n      max-width: 992px; }\n      :host main .inquiry-container .top {\n        color: #06000a; }\n        :host main .inquiry-container .top .forum-description {\n          margin-top: .4em;\n          padding: 0 0 .4em;\n          border-bottom: 1px solid #dfdfdf;\n          font-size: 28px;\n          color: #3b3b3b; }\n      :host main .inquiry-container .bottom {\n        margin-top: .4em;\n        overflow: auto; }\n        :host main .inquiry-container .bottom .post-count {\n          float: left; }\n        :host main .inquiry-container .bottom .post-new-button {\n          float: right;\n          right: .2em;\n          margin: .2em 0;\n          padding: .2em .4em;\n          cursor: pointer;\n          border-radius: 3px;\n          background-color: #e67e22; }\n          :host main .inquiry-container .bottom .post-new-button span {\n            padding: .2em 1em;\n            border-radius: 3px;\n            background-color: #e67e22;\n            text-decoration: none;\n            color: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-color: #EDEDED;\n  padding: 3em 0; }\n  :host .intro-container {\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    max-width: 992px;\n    display: block; }\n    :host .intro-container .intro-content {\n      margin: 0; }\n      @media (min-width: 768px) {\n        :host .intro-container .intro-content {\n          padding: 1em; } }\n    :host .intro-container .info-title {\n      color: #2c3e50;\n      text-align: center;\n      font-size: 1.8em; }\n    :host .intro-container .info-text {\n      margin-bottom: 1.875rem;\n      font-size: 1.1em;\n      color: #2c3e50;\n      text-align: center;\n      padding: 0 .5em; }\n    :host .intro-container .intro-img {\n      padding: 2em .5em; }\n      :host .intro-container .intro-img img {\n        width: 100%;\n        height: auto; }\n    :host .intro-container .inner-intro {\n      padding: 1em; }\n      :host .intro-container .inner-intro img {\n        height: auto;\n        width: 100%;\n        min-width: 80px;\n        max-width: 100px; }\n    :host .intro-container .img-icon {\n      text-align: center; }\n    :host .intro-container .title {\n      text-align: center;\n      font-size: 1.1em;\n      font-weight: bold;\n      color: #2c3e50; }\n    :host .intro-container .desc {\n      text-align: center;\n      font-size: .9em;\n      color: #2c3e50; }\n\n@media all and (max-width: 768px) {\n  :host {\n    position: relative;\n    margin: 0 auto;\n    max-width: 980px; }\n    :host .intro-container {\n      padding: 0;\n      width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n  :host #level-test .my-banner {\n    padding-left: 1em;\n    position: relative;\n    overflow: hidden;\n    height: 89px; }\n    :host #level-test .my-banner img {\n      position: absolute;\n      left: -149px;\n      width: auto;\n      height: 100%; }\n    @media all and (min-width: 380px) {\n      :host #level-test .my-banner {\n        height: 100px; }\n        :host #level-test .my-banner img {\n          left: -165px; } }\n    @media all and (min-width: 480px) {\n      :host #level-test .my-banner {\n        height: 125px; }\n        :host #level-test .my-banner img {\n          left: -205px; } }\n    @media all and (min-width: 560px) {\n      :host #level-test .my-banner {\n        height: 140px; }\n        :host #level-test .my-banner img {\n          left: -230px; } }\n    @media all and (min-width: 600px) {\n      :host #level-test .my-banner {\n        height: 160px; }\n        :host #level-test .my-banner img {\n          left: -265px; } }\n    @media all and (min-width: 760px) {\n      :host #level-test .my-banner {\n        height: 200px; }\n        :host #level-test .my-banner img {\n          left: -330px; } }\n    @media all and (min-width: 860px) {\n      :host #level-test .my-banner {\n        height: 225px; }\n        :host #level-test .my-banner img {\n          left: -370px; } }\n    @media all and (min-width: 980px) {\n      :host #level-test .my-banner {\n        height: 280px; }\n        :host #level-test .my-banner img {\n          left: -470px; } }\n    @media all and (min-width: 1024px) {\n      :host #level-test .my-banner img {\n        left: -445px; } }\n    @media all and (min-width: 1280px) {\n      :host #level-test .my-banner img {\n        left: -320px; } }\n    @media all and (min-width: 1336px) {\n      :host #level-test .my-banner img {\n        left: -280px; } }\n    @media all and (min-width: 1440px) {\n      :host #level-test .my-banner img {\n        left: -240px; } }\n    @media all and (min-width: 1680px) {\n      :host #level-test .my-banner img {\n        left: -120px; } }\n    @media all and (min-width: 1800px) {\n      :host #level-test .my-banner img {\n        left: -30px; } }\n    @media all and (min-width: 1980px) {\n      :host #level-test .my-banner img {\n        left: 0px; } }\n    :host #level-test .my-banner .banner-info {\n      position: relative;\n      display: block;\n      margin: 2em auto;\n      width: 100%;\n      max-width: 992px;\n      text-align: left;\n      color: #FFFFFF; }\n      :host #level-test .my-banner .banner-info .level {\n        display: block;\n        font-size: 16px;\n        color: #FFFFFF;\n        font-weight: 500;\n        line-height: 1.1; }\n      :host #level-test .my-banner .banner-info .desc {\n        font-size: 12px;\n        color: #FFFFFF;\n        line-height: 1.5; }\n      @media all and (min-width: 600px) {\n        :host #level-test .my-banner .banner-info .level {\n          font-size: 28px; }\n        :host #level-test .my-banner .banner-info .desc {\n          font-size: 20px; } }\n      @media all and (min-width: 800px) {\n        :host #level-test .my-banner .banner-info .level {\n          font-size: 36px; } }\n      @media all and (min-width: 980px) {\n        :host #level-test .my-banner .banner-info .level {\n          margin-bottom: 18px;\n          font-size: 48px; }\n        :host #level-test .my-banner .banner-info .desc {\n          font-size: 24px; } }\n    @media (min-width: 1200px) {\n      :host #level-test .my-banner {\n        padding-left: 0; } }\n  :host .level-test-form {\n    padding: 3em 0;\n    background-color: #a7dbdb; }\n    :host .level-test-form h2 {\n      margin-bottom: 1em;\n      text-align: center; }\n    :host .level-test-form form .line-submit input {\n      background-color: #ff6633;\n      color: #FFFFFF; }\n    :host .level-test-form form label {\n      margin-left: 1em; }\n    :host .level-test-form form .col-auto {\n      width: 10em; }\n    :host .level-test-form form .title {\n      margin-bottom: 1em; }\n    :host .level-test-form form .text {\n      margin-bottom: .5em;\n      width: 25em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .modal-header {\n  color: #fff;\n  background-color: #1abc9c; }\n  :host .modal-header .modal-title {\n    line-height: 1.428571429; }\n  :host .modal-header .close {\n    color: #fff; }\n\n:host .modal-body .form-container {\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #eee;\n  padding: 1em;\n  color: #fff;\n  background-color: #1abc9c;\n  box-shadow: 0 0 3px #eee; }\n  :host .modal-body .form-container .info-block {\n    margin-bottom: .5em; }\n  :host .modal-body .form-container .info-title {\n    display: block;\n    margin-bottom: .5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host .forum-post-modal .modal-header .modal-title {\n  line-height: 1.428571429; }\n\n:host .forum-post-modal .modal-body .form-container {\n  margin-top: 1.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #eee;\n  padding: 30px;\n  color: #555;\n  background: #fefefe;\n  box-shadow: 0 0 3px #eee; }\n  :host .forum-post-modal .modal-body .form-container .form-title {\n    text-align: center;\n    font-size: 22px;\n    font-family: 나눔고딕, 돋음, verdana;\n    border-bottom: 1px solid #eee; }\n  :host .forum-post-modal .modal-body .form-container .input-group {\n    margin-top: 1.5em; }\n  :host .forum-post-modal .modal-body .form-container .login {\n    padding-top: .4em; }\n    :host .forum-post-modal .modal-body .form-container .login .btn {\n      margin: 0 0 20px;\n      padding: 7px 22px;\n      cursor: pointer; }\n      :host .forum-post-modal .modal-body .form-container .login .btn:focus {\n        color: white; }\n  @media all and (min-width: 768px) {\n    :host .forum-post-modal .modal-body .form-container {\n      width: 362px; }\n      :host .forum-post-modal .modal-body .form-container .post {\n        padding-top: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host .login-modal .modal-header .modal-title {\n  line-height: 1.428571429; }\n\n:host .login-modal .modal-body .form-container {\n  margin: 1em auto;\n  border: solid 1px #eee;\n  padding: 30px;\n  color: #555;\n  background: #fefefe;\n  box-shadow: 0 0 3px #eee; }\n  :host .login-modal .modal-body .form-container .form-title {\n    text-align: center;\n    font-size: 22px;\n    font-family: 나눔고딕, 돋음, verdana;\n    border-bottom: 1px solid #eee; }\n  :host .login-modal .modal-body .form-container .input-group {\n    margin-top: 1.5em; }\n  :host .login-modal .modal-body .form-container .save-id {\n    padding-top: 1em; }\n  :host .login-modal .modal-body .form-container .info {\n    text-align: center;\n    font-weight: bold; }\n  :host .login-modal .modal-body .form-container .button-signin {\n    padding-top: 1em; }\n    :host .login-modal .modal-body .form-container .button-signin .btn {\n      background-color: #f15f4c;\n      border-color: #f15f4c;\n      color: white;\n      cursor: pointer; }\n  :host .login-modal .modal-body .form-container .button-signup .btn {\n    background-color: #e5b742;\n    border-color: #e2ae2c;\n    cursor: pointer; }\n  :host .login-modal .modal-body .form-container .error {\n    margin-top: 1em;\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host .post-modal .modal-header .modal-title {\n  line-height: 1.428571429; }\n\n:host .post-modal .modal-body .form-container {\n  margin-top: 1.5em;\n  margin-left: auto;\n  margin-right: auto;\n  border: solid 1px #eee;\n  padding: 30px;\n  color: #555;\n  background: #fefefe;\n  box-shadow: 0 0 3px #eee; }\n  :host .post-modal .modal-body .form-container .form-title {\n    text-align: center;\n    font-size: 22px;\n    font-family: 나눔고딕, 돋음, verdana;\n    border-bottom: 1px solid #eee; }\n  :host .post-modal .modal-body .form-container .input-group {\n    margin-top: 1.5em; }\n  :host .post-modal .modal-body .form-container .login {\n    padding-top: .4em; }\n    :host .post-modal .modal-body .form-container .login .btn {\n      margin: 0 0 20px;\n      padding: 7px 22px;\n      cursor: pointer; }\n      :host .post-modal .modal-body .form-container .login .btn:focus {\n        color: white; }\n  @media all and (min-width: 768px) {\n    :host .post-modal .modal-body .form-container {\n      width: 362px; }\n      :host .post-modal .modal-body .form-container .post {\n        padding-top: 1em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n:host .register-modal .modal-header .modal-title {\n  line-height: 1.428571429; }\n\n:host .register-modal .modal-body .form-container {\n  margin-left: auto;\n  margin-right: auto;\n  padding: .6em 2em;\n  color: #555; }\n  :host .register-modal .modal-body .form-container .form_image {\n    position: relative; }\n    :host .register-modal .modal-body .form-container .form_image img {\n      width: 100%;\n      height: auto; }\n    :host .register-modal .modal-body .form-container .form_image span {\n      cursor: pointer; }\n  :host .register-modal .modal-body .form-container .form-title {\n    text-align: center;\n    font-size: 22px;\n    font-family: 나눔고딕, 돋음, verdana;\n    border-bottom: 1px solid #eee; }\n  :host .register-modal .modal-body .form-container .input-group {\n    margin-top: .8em; }\n    :host .register-modal .modal-body .form-container .input-group .birthday {\n      width: 100%;\n      font-size: .875rem;\n      color: #464a4c;\n      border: 1px solid #cccccc; }\n  :host .register-modal .modal-body .form-container .register {\n    padding-top: 1em; }\n    :host .register-modal .modal-body .form-container .register .btn {\n      margin: 0 0 20px;\n      padding: 7px 22px;\n      cursor: pointer;\n      border: 0; }\n      :host .register-modal .modal-body .form-container .register .btn:focus {\n        color: white; }\n  :host .register-modal .modal-body .form-container .error {\n    margin-top: 1em;\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .my-banner {\n  padding-right: 1em;\n  position: relative;\n  overflow: hidden;\n  height: 89px; }\n  :host .my-banner img {\n    position: absolute;\n    left: -149px;\n    width: auto;\n    height: 100%; }\n  @media all and (min-width: 380px) {\n    :host .my-banner {\n      height: 100px; }\n      :host .my-banner img {\n        left: -165px; } }\n  @media all and (min-width: 480px) {\n    :host .my-banner {\n      height: 125px; }\n      :host .my-banner img {\n        left: -205px; } }\n  @media all and (min-width: 560px) {\n    :host .my-banner {\n      height: 140px; }\n      :host .my-banner img {\n        left: -230px; } }\n  @media all and (min-width: 600px) {\n    :host .my-banner {\n      height: 160px; }\n      :host .my-banner img {\n        left: -265px; } }\n  @media all and (min-width: 760px) {\n    :host .my-banner {\n      height: 200px; }\n      :host .my-banner img {\n        left: -330px; } }\n  @media all and (min-width: 860px) {\n    :host .my-banner img {\n      left: -370px; } }\n  @media all and (min-width: 980px) {\n    :host .my-banner img {\n      left: -470px; } }\n  @media all and (min-width: 1024px) {\n    :host .my-banner img {\n      left: -445px; } }\n  @media all and (min-width: 1280px) {\n    :host .my-banner img {\n      left: -320px; } }\n  @media all and (min-width: 1336px) {\n    :host .my-banner img {\n      left: -280px; } }\n  @media all and (min-width: 1440px) {\n    :host .my-banner img {\n      left: -240px; } }\n  @media all and (min-width: 1680px) {\n    :host .my-banner img {\n      left: -120px; } }\n  @media all and (min-width: 1800px) {\n    :host .my-banner img {\n      left: -30px; } }\n  @media all and (min-width: 1980px) {\n    :host .my-banner img {\n      left: 0px; } }\n  :host .my-banner .banner-info {\n    position: relative;\n    display: block;\n    margin: 1em auto;\n    width: 100%;\n    max-width: 992px;\n    text-align: right;\n    color: #FFFFFF; }\n    :host .my-banner .banner-info .level {\n      display: block;\n      margin-bottom: 8px;\n      font-size: 18px;\n      color: #fff; }\n    :host .my-banner .banner-info .desc {\n      display: inline-block;\n      font-size: 14px;\n      color: #fff; }\n    @media all and (min-width: 600px) {\n      :host .my-banner .banner-info .level {\n        font-size: 28px; }\n      :host .my-banner .banner-info .desc {\n        font-size: 20px; } }\n    @media all and (min-width: 800px) {\n      :host .my-banner .banner-info .level {\n        font-size: 36px; } }\n    @media all and (min-width: 980px) {\n      :host .my-banner .banner-info .level {\n        margin-bottom: 18px;\n        font-size: 48px; }\n      :host .my-banner .banner-info .desc {\n        font-size: 24px; } }\n  @media (min-width: 1200px) {\n    :host .my-banner {\n      padding-right: 0; } }\n\n:host .payment-container {\n  padding: .5em;\n  overflow: auto; }\n  :host .payment-container .payment-content .payment-form {\n    padding: 0 0 1em 1em; }\n    :host .payment-container .payment-content .payment-form .content {\n      margin: 0; }\n    :host .payment-container .payment-content .payment-form .content .my-payment {\n      padding: 0;\n      margin: 0; }\n    :host .payment-container .payment-content .payment-form .content .my-payment .cover {\n      margin: 1em 1em 0 0;\n      min-height: 280px; }\n      :host .payment-container .payment-content .payment-form .content .my-payment .cover .picture {\n        padding: 2em;\n        text-align: center; }\n      :host .payment-container .payment-content .payment-form .content .my-payment .cover .desc {\n        font-size: 2em;\n        text-align: center;\n        height: 45px; }\n      :host .payment-container .payment-content .payment-form .content .my-payment .cover .items {\n        margin: 0 auto;\n        padding: 1em;\n        position: relative;\n        display: block;\n        width: 100%;\n        max-width: 200px;\n        overflow: auto; }\n        :host .payment-container .payment-content .payment-form .content .my-payment .cover .items .text {\n          display: block;\n          cursor: pointer; }\n    :host .payment-container .payment-content .payment-form .content .pay-buttons {\n      padding: 0; }\n      :host .payment-container .payment-content .payment-form .content .pay-buttons .pay-total {\n        margin: 1em 1em 0 0;\n        padding: .4em; }\n      :host .payment-container .payment-content .payment-form .content .pay-buttons .button-total {\n        margin: 1em 1em 0 0;\n        padding: .4em; }\n\n@media (min-width: 768px) {\n  :host .payment-container {\n    padding: 5em 1em; }\n    :host .payment-container .payment-content {\n      margin-left: auto;\n      margin-right: auto;\n      max-width: 980px;\n      width: 100%; } }\n\n:host .payment-container {\n  background: white; }\n  :host .payment-container .payment-content {\n    background-color: #fff; }\n    :host .payment-container .payment-content .my-payment .cover {\n      background-color: #f5f5f5; }\n  :host .payment-container .content .pay-buttons .pay-total {\n    font-size: 1.2em;\n    font-family: \"Malgun Gothic\", serif;\n    cursor: pointer;\n    text-align: center;\n    background-color: #00a0d2;\n    color: white; }\n  :host .payment-container .content .pay-buttons .button-total {\n    font-size: 1.2em;\n    font-family: \"Malgun Gothic\", serif;\n    cursor: pointer;\n    text-align: center;\n    background-color: #4f160d;\n    color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-color: #fff; }\n  :host .my-banner {\n    padding-right: 1em;\n    position: relative;\n    overflow: hidden;\n    height: 89px; }\n    :host .my-banner img {\n      position: absolute;\n      left: -149px;\n      width: auto;\n      height: 100%; }\n    @media all and (min-width: 380px) {\n      :host .my-banner {\n        height: 100px; }\n        :host .my-banner img {\n          left: -165px; } }\n    @media all and (min-width: 480px) {\n      :host .my-banner {\n        height: 125px; }\n        :host .my-banner img {\n          left: -205px; } }\n    @media all and (min-width: 560px) {\n      :host .my-banner {\n        height: 140px; }\n        :host .my-banner img {\n          left: -230px; } }\n    @media all and (min-width: 600px) {\n      :host .my-banner {\n        height: 160px; }\n        :host .my-banner img {\n          left: -265px; } }\n    @media all and (min-width: 760px) {\n      :host .my-banner {\n        height: 200px; }\n        :host .my-banner img {\n          left: -330px; } }\n    @media all and (min-width: 860px) {\n      :host .my-banner {\n        height: 225px; }\n        :host .my-banner img {\n          left: -370px; } }\n    @media all and (min-width: 980px) {\n      :host .my-banner {\n        height: 280px; }\n        :host .my-banner img {\n          left: -470px; } }\n    @media all and (min-width: 1024px) {\n      :host .my-banner img {\n        left: -445px; } }\n    @media all and (min-width: 1280px) {\n      :host .my-banner img {\n        left: -320px; } }\n    @media all and (min-width: 1336px) {\n      :host .my-banner img {\n        left: -280px; } }\n    @media all and (min-width: 1440px) {\n      :host .my-banner img {\n        left: -240px; } }\n    @media all and (min-width: 1680px) {\n      :host .my-banner img {\n        left: -120px; } }\n    @media all and (min-width: 1800px) {\n      :host .my-banner img {\n        left: -30px; } }\n    @media all and (min-width: 1980px) {\n      :host .my-banner img {\n        left: 0px; } }\n    :host .my-banner .banner-info .level {\n      display: block;\n      margin-bottom: 5px;\n      font-size: 16px;\n      color: #fff; }\n    :host .my-banner .banner-info .desc {\n      display: inline-block;\n      font-size: 9px;\n      color: #fff; }\n    :host .my-banner .banner-info {\n      position: relative;\n      display: block;\n      margin: .5em auto;\n      width: 100%;\n      max-width: 992px;\n      text-align: right;\n      color: #FFFFFF; }\n      @media all and (min-width: 480px) {\n        :host .my-banner .banner-info .level {\n          font-size: 18px; }\n        :host .my-banner .banner-info .desc {\n          font-size: 11px; } }\n      @media all and (min-width: 600px) {\n        :host .my-banner .banner-info .level {\n          font-size: 24px; }\n        :host .my-banner .banner-info .desc {\n          font-size: 14px; } }\n      @media all and (min-width: 800px) {\n        :host .my-banner .banner-info .level {\n          font-size: 32px; }\n        :host .my-banner .banner-info .desc {\n          width: 15em;\n          font-size: 18px; } }\n      @media all and (min-width: 980px) {\n        :host .my-banner .banner-info .level {\n          margin-bottom: 18px;\n          font-size: 48px; }\n        :host .my-banner .banner-info .desc {\n          font-size: 1.5em; } }\n    @media (min-width: 1200px) {\n      :host .my-banner {\n        padding-right: 0; } }\n  :host .reservation {\n    margin: 5em auto auto;\n    width: 100%;\n    max-width: 992px; }\n    :host .reservation .reservation-container {\n      position: relative;\n      margin-bottom: 5em; }\n      :host .reservation .reservation-container .date-container {\n        height: 3em;\n        width: 100%; }\n      :host .reservation .reservation-container .this-month {\n        position: absolute;\n        left: 0;\n        right: 0;\n        margin: 0 auto;\n        padding: .3em;\n        width: 7em;\n        border-radius: .1em;\n        background-color: #1abc9c;\n        color: #fff;\n        font-size: 1rem;\n        cursor: pointer;\n        text-align: center; }\n        :host .reservation .reservation-container .this-monthspan:hover {\n          font-weight: bold; }\n        :host .reservation .reservation-container .this-month .show-list {\n          color: #efefef;\n          float: right; }\n        :host .reservation .reservation-container .this-month .show-list:hover {\n          color: #fff; }\n      :host .reservation .reservation-container .this-months {\n        clear: right;\n        position: absolute;\n        top: 2.15em;\n        z-index: 1;\n        left: 0;\n        width: 7em;\n        border-radius: .1em;\n        background-color: #1abc9c;\n        color: #fff;\n        font-size: 1rem;\n        cursor: pointer;\n        text-align: center; }\n        :host .reservation .reservation-container .this-months ul {\n          padding: 0;\n          list-style: none; }\n          :host .reservation .reservation-container .this-months ul .this-year {\n            padding: .3em; }\n          :host .reservation .reservation-container .this-months ul .this-year:hover {\n            font-weight: bold; }\n      :host .reservation .reservation-container .prev-months {\n        position: absolute;\n        top: 2.15em;\n        left: .3em;\n        z-index: 1;\n        width: 7em;\n        border-radius: .1em;\n        background-color: #1abc9c;\n        color: #fff;\n        font-size: 1rem;\n        cursor: pointer;\n        text-align: center; }\n        :host .reservation .reservation-container .prev-months ul {\n          padding: 0;\n          list-style: none; }\n          :host .reservation .reservation-container .prev-months ul .prev {\n            padding: .3em; }\n          :host .reservation .reservation-container .prev-months ul .prev:hover {\n            font-weight: bold; }\n      :host .reservation .reservation-container .prev-month {\n        margin: 0 0.3em;\n        padding: .3em;\n        float: left;\n        width: 7em;\n        border-radius: .1em;\n        background-color: #1abc9c;\n        color: #fff;\n        font-size: 1rem;\n        cursor: pointer;\n        text-align: center; }\n        :host .reservation .reservation-container .prev-month span:hover {\n          font-weight: bold; }\n        :host .reservation .reservation-container .prev-month .show-list {\n          color: #efefef;\n          float: right; }\n        :host .reservation .reservation-container .prev-month .show-list:hover {\n          color: #fff; }\n      :host .reservation .reservation-container .next-months {\n        position: absolute;\n        top: 2.15em;\n        right: .3em;\n        z-index: 1;\n        width: 7em;\n        border-radius: .1em;\n        background-color: #1abc9c;\n        color: #fff;\n        font-size: 1rem;\n        cursor: pointer;\n        text-align: center; }\n        :host .reservation .reservation-container .next-months ul {\n          padding: 0;\n          list-style: none; }\n          :host .reservation .reservation-container .next-months ul .next {\n            padding: .3em; }\n          :host .reservation .reservation-container .next-months ul .next:hover {\n            font-weight: bold; }\n      :host .reservation .reservation-container .next-month {\n        margin: 0 0.3em;\n        padding: .3em;\n        float: right;\n        width: 7em;\n        border-radius: .1em;\n        background-color: #1abc9c;\n        color: #fff;\n        font-size: 1rem;\n        cursor: pointer;\n        text-align: center; }\n        :host .reservation .reservation-container .next-month span:hover {\n          font-weight: bold; }\n        :host .reservation .reservation-container .next-month .show-list {\n          color: #efefef;\n          float: right; }\n        :host .reservation .reservation-container .next-month .show-list:hover {\n          color: #fff; }\n      :host .reservation .reservation-container table {\n        margin: 1em 0;\n        font-size: .8em; }\n        :host .reservation .reservation-container table th {\n          border: .3em solid #fff;\n          text-align: center; }\n        :host .reservation .reservation-container table td {\n          border: .3em solid #fff;\n          position: relative; }\n        @media (min-width: 576px) {\n          :host .reservation .reservation-container table .my-date {\n            position: absolute;\n            left: 1em;\n            font-weight: bold; } }\n        :host .reservation .reservation-container table .teacher-nick {\n          text-align: center; }\n        :host .reservation .reservation-container table /deep/ .teacher-icon {\n          border-radius: 50%;\n          width: 2rem;\n          height: 2rem;\n          overflow: hidden;\n          margin: 0 auto; }\n          :host .reservation .reservation-container table /deep/ .teacher-icon img {\n            width: 2rem;\n            height: auto; }\n          @media (min-width: 768px) {\n            :host .reservation .reservation-container table /deep/ .teacher-icon {\n              width: 4rem;\n              height: 4rem; }\n              :host .reservation .reservation-container table /deep/ .teacher-icon img {\n                width: 4rem; } }\n        :host .reservation .reservation-container table .calendar-day-head {\n          background-color: #7d7d7d;\n          color: #fff;\n          max-width: 3em; }\n          :host .reservation .reservation-container table .calendar-day-head:first-child {\n            background-color: #eaeaea;\n            color: #000;\n            max-width: 3em; }\n            @media (min-width: 768px) {\n              :host .reservation .reservation-container table .calendar-day-head:first-child {\n                width: auto;\n                max-width: 1em; } }\n          :host .reservation .reservation-container table .calendar-day-head:last-child {\n            background-color: #eaeaea;\n            color: #000;\n            max-width: 3em; }\n            @media (min-width: 768px) {\n              :host .reservation .reservation-container table .calendar-day-head:last-child {\n                width: auto;\n                max-width: 1em; } }\n          @media (min-width: 768px) {\n            :host .reservation .reservation-container table .calendar-day-head {\n              width: auto; } }\n        :host .reservation .reservation-container table .calendar-day {\n          background-color: #f1f1f1;\n          max-width: 3em; }\n          :host .reservation .reservation-container table .calendar-day .class-info {\n            position: absolute;\n            padding: 1em;\n            top: -10em;\n            left: -13em;\n            width: 15em;\n            z-index: 1;\n            background-color: #1abc9c;\n            color: #fff;\n            font-size: 1em; }\n            :host .reservation .reservation-container table .calendar-day .class-info div {\n              margin-bottom: 1em; }\n          :host .reservation .reservation-container table .calendar-day:first-child {\n            background-color: #eaeaea;\n            color: #fd0e35;\n            max-width: 3em; }\n            @media (min-width: 768px) {\n              :host .reservation .reservation-container table .calendar-day:first-child {\n                width: auto;\n                max-width: 1em; } }\n          :host .reservation .reservation-container table .calendar-day:last-child {\n            background-color: #eaeaea;\n            color: #fd0e35;\n            max-width: 3em; }\n            @media (min-width: 768px) {\n              :host .reservation .reservation-container table .calendar-day:last-child {\n                width: auto;\n                max-width: 1em; } }\n          @media (min-width: 576px) {\n            :host .reservation .reservation-container table .calendar-day {\n              height: 60px; } }\n          @media (min-width: 768px) {\n            :host .reservation .reservation-container table .calendar-day {\n              width: auto;\n              height: 85px; } }\n          @media (min-width: 992px) {\n            :host .reservation .reservation-container table .calendar-day {\n              height: 100px; } }\n        @media (min-width: 768px) {\n          :host .reservation .reservation-container table {\n            font-size: 1em; } }\n    :host .reservation .calendar-loader {\n      position: absolute;\n      top: 40%;\n      left: 43%;\n      font-size: 8em;\n      color: #7d7d7d; }\n      :host .reservation .calendar-loader .loader {\n        text-align: center;\n        font-size: 1em; }\n    :host .reservation .reminder-image {\n      position: absolute;\n      margin: 0 auto;\n      bottom: 0;\n      width: 100%;\n      overflow: auto; }\n      :host .reservation .reminder-image img {\n        display: block;\n        margin: 0 auto .3em;\n        width: 70%; }\n      :host .reservation .reminder-image .reminder-text {\n        display: block;\n        position: absolute;\n        text-align: center;\n        top: 20%;\n        left: 41%;\n        width: 40%;\n        font-size: 1em;\n        color: white; }\n        @media (min-width: 576px) {\n          :host .reservation .reminder-image .reminder-text {\n            font-size: 2em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: .5em 0;\n  background-color: #384252; }\n  :host .teacher-container {\n    position: relative;\n    max-width: 980px;\n    margin: 0 auto; }\n  :host .title {\n    padding: 1em;\n    text-align: center;\n    color: white; }\n  :host .load {\n    clear: both;\n    padding: 0; }\n    :host .load .load-more {\n      margin: 2em;\n      margin-left: auto;\n      margin-right: auto;\n      border-radius: 0.1875em;\n      padding: 0.875em 1.25em;\n      width: 100%;\n      max-width: 980px;\n      font-size: 1em;\n      letter-spacing: 0.1875em;\n      color: #FFFFFF;\n      background-color: #3498db;\n      text-align: center;\n      cursor: pointer; }\n\n.teachers .teacher {\n  margin: 2em 0 0;\n  padding: 0 0 2em 0;\n  text-align: center; }\n  .teachers .teacher .teacher-info {\n    margin-bottom: .8em; }\n  .teachers .teacher .photo {\n    overflow: hidden;\n    position: relative;\n    display: inline-block;\n    height: 9.6rem;\n    width: 9.6rem;\n    border: .2rem solid #ffffff;\n    border-radius: 100%; }\n  .teachers .teacher .photo img {\n    width: 150px;\n    height: auto; }\n  .teachers .teacher .id {\n    margin-bottom: .2em;\n    font-size: 1.5rem;\n    color: #FFFFFF; }\n    .teachers .teacher .id:first-letter {\n      text-transform: uppercase; }\n  .teachers .teacher .greeting {\n    cursor: pointer; }\n    .teachers .teacher .greeting .text {\n      height: 4rem;\n      overflow: hidden;\n      font-size: .9rem; }\n    .teachers .teacher .greeting .more {\n      padding-right: 1.6em;\n      text-align: right;\n      font-size: 1em;\n      color: #e9e9e9; }\n    .teachers .teacher .greeting.more .text {\n      height: auto;\n      overflow: auto; }\n    .teachers .teacher .greeting.more .more {\n      display: none; }\n  .teachers .teacher .text {\n    padding: 0 1em;\n    margin-bottom: .1em;\n    text-align: left;\n    font-size: .9rem;\n    color: #FFFFFF; }\n    .teachers .teacher .text .caption {\n      display: inline-block;\n      width: 4.8em; }\n    .teachers .teacher .text.major {\n      height: 3em;\n      overflow: hidden; }\n  .teachers .teacher .youtube-wrapper {\n    margin-top: 1em;\n    display: inline-block;\n    width: 100%; }\n  .teachers .teacher .youtube-player embed {\n    width: 100%; }\n  .teachers .teacher .youtube-default-photo {\n    position: relative;\n    width: 100%;\n    height: 150px;\n    overflow: hidden;\n    cursor: pointer; }\n    .teachers .teacher .youtube-default-photo img {\n      width: 100%;\n      height: auto; }\n    .teachers .teacher .youtube-default-photo .play {\n      position: absolute;\n      margin: 0 auto;\n      left: 10%;\n      bottom: 30%; }\n      .teachers .teacher .youtube-default-photo .play i {\n        color: rgba(255, 0, 0, 0.55);\n        font-size: 4em; }\n  .teachers .teacher .youtube-default-photo:hover i {\n    color: #d00000; }\n\n@media all and (min-width: 576px) {\n  .teachers .teacher {\n    float: left; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .copyright {\n  position: relative;\n  padding: 2em 0 4em;\n  background-color: #fbfbfb;\n  border-top: 1px solid #dbd7d7; }\n  :host .copyright .container {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 992px; }\n  :host .copyright .logo-picture {\n    margin: 0 auto;\n    width: 100%;\n    text-align: center; }\n    @media (min-width: 992px) {\n      :host .copyright .logo-picture {\n        padding: 2em 0;\n        margin: 0 0 0 5em; } }\n    :host .copyright .logo-picture img {\n      cursor: pointer; }\n  :host .copyright .btn-img {\n    position: absolute;\n    top: 0;\n    right: 0; }\n    @media (min-width: 992px) {\n      :host .copyright .btn-img {\n        position: relative;\n        padding: 1em 1em 0 3em; } }\n    :host .copyright .btn-img img {\n      cursor: pointer;\n      position: absolute;\n      top: 0;\n      right: 20px; }\n      @media (min-width: 992px) {\n        :host .copyright .btn-img img {\n          position: relative; } }\n  :host .copyright .footer-content {\n    padding: 1em;\n    width: 100%;\n    color: #383838;\n    font-size: 0.75em;\n    line-height: 1.6rem;\n    text-align: center; }\n    @media (min-width: 992px) {\n      :host .copyright .footer-content {\n        text-align: left;\n        width: auto; } }\n  :host .copyright .copyright-content {\n    position: absolute;\n    bottom: 0;\n    padding: .8em;\n    width: 100%;\n    font-size: .7em;\n    text-align: center;\n    background-color: #c0c0c0;\n    color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .big .navbar {\n  padding: 0; }\n  :host .big .navbar .top {\n    border-top: .2em solid #006bb6;\n    border-bottom: .1em solid #d7d7d7;\n    background-color: #fff; }\n    :host .big .navbar .top .menu {\n      padding: .5em; }\n  :host .big .navbar .top .menu {\n    margin: 0 auto;\n    max-width: 992px;\n    width: 100%; }\n    :host .big .navbar .top .menu .button {\n      padding: .5em;\n      display: inline-block;\n      font-size: 1em; }\n    :host .big .navbar .top .menu .button:hover {\n      cursor: pointer;\n      color: #fde000; }\n  :host .big .navbar .top .menu .left-menu {\n    padding: .5em;\n    width: 50%;\n    float: left; }\n    :host .big .navbar .top .menu .left-menu span {\n      cursor: pointer; }\n  :host .big .navbar .top .menu .right-menu {\n    width: 50%;\n    display: inline-block;\n    text-align: right; }\n  :host .big .navbar .bottom {\n    position: relative;\n    background-color: white;\n    padding: .3em;\n    overflow: auto;\n    display: block; }\n    :host .big .navbar .bottom .bottom-container {\n      position: relative;\n      margin: 0 auto;\n      max-width: 992px;\n      width: 100%; }\n    :host .big .navbar .bottom .logo {\n      margin: 0;\n      width: 300px;\n      cursor: pointer; }\n      :host .big .navbar .bottom .logo img {\n        margin: .5em;\n        width: 100%;\n        max-width: 300px;\n        height: 100%; }\n  :host .big .navbar .panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0; }\n    :host .big .navbar .panel .menus {\n      display: inline-block;\n      margin: 0;\n      padding: .5em 0 0;\n      list-style: none; }\n      :host .big .navbar .panel .menus .menu {\n        float: left;\n        border-radius: 2px;\n        margin: .1em;\n        cursor: pointer;\n        font-size: 1em; }\n        :host .big .navbar .panel .menus .menu:hover {\n          color: #fde000; }\n        :host .big .navbar .panel .menus .menu.active {\n          color: #f15f4c; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .small .navbar {\n  padding: 0; }\n  :host .small .navbar .top {\n    border-top: .2em solid #006bb6;\n    border-bottom: .1em solid #d7d7d7;\n    background-color: #fff; }\n    :host .small .navbar .top .menu {\n      padding: .3em; }\n  :host .small .navbar .top .menu {\n    margin: 0 auto;\n    max-width: 992px;\n    width: 100%; }\n    :host .small .navbar .top .menu .button {\n      display: inline-block;\n      font-size: 1em; }\n    :host .small .navbar .top .menu .button:hover {\n      cursor: pointer;\n      color: #fde000; }\n  :host .small .navbar .top .menu .left-menu {\n    padding: .4em;\n    width: 50%;\n    float: left; }\n    :host .small .navbar .top .menu .left-menu span {\n      cursor: pointer; }\n  :host .small .navbar .top .menu .right-menu {\n    padding: .6em;\n    width: 50%;\n    display: inline-block;\n    text-align: right; }\n  :host .small .navbar .bottom {\n    position: relative;\n    background-color: white;\n    padding: .3em;\n    display: block; }\n    :host .small .navbar .bottom .logo {\n      margin: 0;\n      width: 300px;\n      cursor: pointer; }\n      :host .small .navbar .bottom .logo img {\n        margin: 0 .2em;\n        width: 100%;\n        max-width: 300px;\n        height: 100%; }\n    :host .small .navbar .bottom .button {\n      position: absolute;\n      font-size: 2em;\n      right: 1em;\n      top: .5em;\n      cursor: pointer;\n      color: #4b494f; }\n    :host .small .navbar .bottom .panel {\n      padding: 0;\n      max-height: 0;\n      overflow: hidden;\n      -webkit-transition-duration: .3s;\n              transition-duration: .3s; }\n      :host .small .navbar .bottom .panel.active {\n        max-height: 450px; }\n      :host .small .navbar .bottom .panel .menus {\n        margin: 0;\n        padding: .5em 1em 0;\n        list-style: none; }\n        :host .small .navbar .bottom .panel .menus .menu {\n          border-top: 1px solid #eee;\n          padding: .5em .8em;\n          font-size: 1.3em;\n          cursor: pointer; }\n          :host .small .navbar .bottom .panel .menus .menu.active {\n            color: #f15f4c; }\n          :host .small .navbar .bottom .panel .menus .menu:hover {\n            color: #fde000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100%;\n  height: 100%; }\n  :host header nav.navbar {\n    padding: 0; }\n    :host header nav.navbar .menu {\n      padding: .3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host #footer {\n  padding: 1em;\n  background-color: #4b494f; }\n  :host #footer .footer-container {\n    margin: 0 auto;\n    max-width: 992px;\n    width: 100%;\n    text-align: center; }\n    :host #footer .footer-container .footer-row {\n      margin: 0;\n      padding: 0; }\n    :host #footer .footer-container .info {\n      margin: 0;\n      padding: 0;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1); }\n    :host #footer .footer-container .info .title {\n      margin: 1em 0;\n      font-size: 1.1em;\n      font-weight: 500;\n      line-height: 1.2;\n      color: #eee; }\n    :host #footer .footer-container .info .desc {\n      margin-bottom: 1em;\n      color: #999;\n      font-size: .95em; }\n    :host #footer .footer-container .button span {\n      padding: .2em;\n      font-size: 1.1em;\n      color: #fff; }\n    :host #footer .footer-container .button span:hover {\n      cursor: pointer;\n      color: #999; }\n    :host #footer .footer-container .copyright {\n      border-top: 5px solid rgba(255, 255, 255, 0.1);\n      padding: 1em;\n      color: #999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host .big .navbar {\n  padding: 0; }\n  :host .big .navbar .top {\n    background-color: #4b494f; }\n    :host .big .navbar .top .menu {\n      padding: .5em; }\n  :host .big .navbar .top .menu {\n    margin: 0 auto;\n    max-width: 992px;\n    width: 100%;\n    text-align: right; }\n    :host .big .navbar .top .menu .button {\n      padding: .5em;\n      display: inline-block;\n      font-size: 1em;\n      color: #fff; }\n    :host .big .navbar .top .menu .button:hover {\n      cursor: pointer;\n      color: #999; }\n  :host .big .navbar .bottom {\n    position: relative;\n    background-color: white;\n    padding: .3em;\n    overflow: auto;\n    display: block; }\n    :host .big .navbar .bottom .bottom-container {\n      position: relative;\n      margin: 0 auto;\n      max-width: 992px;\n      width: 100%; }\n    :host .big .navbar .bottom .logo {\n      margin: 0;\n      width: 180px;\n      cursor: pointer; }\n      :host .big .navbar .bottom .logo img {\n        width: 100%;\n        max-width: 180px; }\n    :host .big .navbar .bottom .menu .text {\n      display: inline-block;\n      padding: .2em .4em; }\n  :host .big .navbar .panel {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0; }\n    :host .big .navbar .panel .menus {\n      display: inline-block;\n      margin: 0;\n      padding: .5em 1em 0;\n      list-style: none; }\n      :host .big .navbar .panel .menus .menu {\n        float: left;\n        border-radius: 2px;\n        margin: .1em;\n        cursor: pointer;\n        font-size: 1em; }\n        :host .big .navbar .panel .menus .menu:hover {\n          background-color: #eee; }\n        :host .big .navbar .panel .menus .menu.active {\n          background-color: #f15f4c;\n          color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "header {\n  background-color: red; }\n  header nav.navbar {\n    padding: 0; }\n    header nav.navbar .menu {\n      padding: .3em; }\n\n.small .navbar .top {\n  background-color: #4b494f; }\n  .small .navbar .top .menu {\n    padding: .6em; }\n\n.small .navbar .top .menu {\n  text-align: center; }\n  .small .navbar .top .menu .button {\n    padding: .5em;\n    display: inline-block;\n    font-size: 1.3em;\n    color: #fff; }\n  .small .navbar .top .menu .button:hover {\n    cursor: pointer;\n    color: #999; }\n\n.small .navbar .bottom {\n  position: relative;\n  background-color: white;\n  padding: .3em;\n  display: block; }\n  .small .navbar .bottom .logo {\n    margin: 0;\n    width: 180px;\n    height: auto;\n    cursor: pointer; }\n    .small .navbar .bottom .logo img {\n      margin-left: .5em;\n      width: 100%;\n      max-width: 300px;\n      height: 100%; }\n  .small .navbar .bottom .button {\n    position: absolute;\n    font-size: 2em;\n    right: 1em;\n    top: .5em;\n    cursor: pointer;\n    color: #4b494f; }\n  .small .navbar .bottom .panel {\n    padding: 0;\n    max-height: 0;\n    overflow: hidden;\n    -webkit-transition-duration: .3s;\n            transition-duration: .3s; }\n    .small .navbar .bottom .panel.active {\n      max-height: 450px; }\n    .small .navbar .bottom .panel .menus {\n      margin: 0;\n      padding: .5em 1em 0;\n      list-style: none; }\n      .small .navbar .bottom .panel .menus .menu {\n        border-top: 1px solid #eee;\n        padding: .5em .8em;\n        font-size: 1.3em;\n        cursor: pointer; }\n        .small .navbar .bottom .panel .menus .menu.active {\n          background-color: #f15f4c;\n          color: #fff; }\n        .small .navbar .bottom .panel .menus .menu:hover {\n          background-color: #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".pagination {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding-left: 0;\r\n  list-style: none;\r\n  border-radius: .25rem;\r\n}\r\n\r\n.pagination a {\r\n  text-decoration: none;\r\n}\r\n\r\n.page-link {\r\n  position: relative;\r\n  display: block;\r\n  padding: .5rem .75rem;\r\n  margin-left: -1px;\r\n  line-height: 1.25;\r\n  color: #0275d8;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.page-item.active .page-link {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 427 */,
/* 428 */
/***/ (function(module, exports) {

module.exports = "\r\n<h4>Comment {{ mode }} {{ mode == 'create' ? 'under ' + parent_idx : comment.idx }}</h4>\r\n<form [formGroup]=\"formGroup\" (ngSubmit)=\" onSubmit() \"  novalidate>\r\n\r\n  <file-form-basic-component [files]=\" files \"></file-form-basic-component>\r\n  \r\n  <div class=\"form-group\">\r\n    <label for=\"content-box\">Content</label>\r\n    <textarea id=\"content-box\" class=\"form-control\" formControlName=\"content\"></textarea>\r\n    <div class=\"form-text text-muted\">Please, input content</div>\r\n  </div>\r\n  \r\n  <button type=\"submit\" class=\"btn btn-primary\">Create Comment</button>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickCancel()\">Cancel</button>\r\n\r\n</form>\r\n"

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<article *ngIf=\" comment && mode != 'edit' \" class=\"comment bg-white p-3\" [attr.depth]=\" comment.depth \">\r\nidx: {{ comment.idx }}\r\nauthor: {{ comment.user.name }}\r\n<p [innerHTML]=\" sanitize( comment ) \"></p>\r\n\r\n      <div class=\"files clearfix\" *ngIf=\" comment.files \">\r\n        <div class=\"w-25 float-left\" *ngFor=\" let file of comment.files \">\r\n          <img [src]=\" file.url + '&crop=100x100x50'  \" style=\"width: 100%;\">\r\n        </div>\r\n      </div>\r\n\r\n<div class=\"buttons\">\r\n    <span *ngIf=\" myComment \" (click)=\" mode = 'edit' \" class=\"\">Edit</span>\r\n    <span (click)=\" mode = 'create' \" class=\"\">Reply</span>\r\n    <span (click)=\" onClickLike( 'G' ) \" class=\"\">Like({{comment.vote_good}})</span>\r\n    <span (click)=\" onClickLike( 'B' ) \" class=\"\">Dislike({{comment.vote_bad}})</span>\r\n    <span (click)=\" onClickReport() \" class=\"\">Report({{comment.report}})</span>\r\n</div>\r\n\r\n</article>\r\n\r\n<comment-form-basic-component\r\n    *ngIf = \" mode \"\r\n    [mode] = \" mode \"\r\n    [list] = \" list \"\r\n    [post] = \" post \"\r\n    [parent_idx]=\" comment.idx \"\r\n    [comment]=\" comment \"\r\n    (create) = \" mode = '' \"\r\n    (edit) = \" mode = '' \"\r\n    (cancel) = \" mode = '' \"\r\n    ></comment-form-basic-component>"

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-files clearfix\">\r\n    <div class=\"file w-25 float-left\" *ngFor=\" let file of files \">\r\n        \r\n        <span (click)=\" onClickDeleteFile( file ) \" class=\"fa-stack fa-lg\">\r\n            <i class=\"fa fa-circle fa-stack-2x fa-inverse\"></i>\r\n            <i class=\"fa fa-trash fa-stack-1x\"></i>\r\n        </span>\r\n\r\n        <img style=\"width: 100%\" src=\"{{ file.url + '&crop=100x100x70' }}\">\r\n    </div>\r\n</div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"file-box\">Upload Photos</label>\r\n        <div *ngIf=\" percentage \" class=\"progress mb-2\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\" percentage + '%' \">{{ percentage }} %</div>\r\n        </div>\r\n\r\n      <input type=\"file\" class=\"form-control-file\" id=\"file-box\" #file (change)=\"onChangeFile(file)\">\r\n      <small class=\"form-text text-muted\">Please select a photo to upload</small>\r\n    </div>\r\n\r\n"

/***/ }),
/* 431 */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"form-container\">\r\n    <label for=\"inputId\" class=\"sr-only\">Email address</label>\r\n    <input type=\"text\" id=\"inputId\" name=\"id\" class=\"form-control\" [(ngModel)]=\"form.id\" placeholder=\"UserID\" required autofocus>\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" class=\"form-control\" [(ngModel)]=\"form.password\" placeholder=\"Password\" required>\r\n    <button class=\"btn btn-primary btn-block btn-sm\" type=\"button\" (click)=\"onClickLogin()\">Sign in</button>\r\n    <button class=\"btn btn-success btn-block btn-sm\" type=\"button\" (click)=\"onClickCancel()\">Cancel</button>\r\n  </div>\r\n\r\n"

/***/ }),
/* 432 */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"no_of_total_items\">\r\n  <ul class=\"{{structureClass.ul}}\">\r\n    <li class=\"{{structureClass.li}}{{structureClass.pageIn}}\"><a class=\"{{structureClass.a}}\">Page {{no_of_current_page}} of {{no_of_total_pages}}</a></li>\r\n    <li class=\"{{structureClass.li}}\" *ngIf=\"show_first_last && currentDisplay > 0\" (click)=\"gotoFirst()\">\r\n      <a class=\"{{structureClass.a}}\" innerHTML=\"{{text_first}}\"></a>\r\n    </li>\r\n    <li class=\"{{structureClass.li}}\" *ngIf=\"show_prev_next && currentDisplay > 0\"  (click)=\"previousPage()\">\r\n      <a class=\"{{structureClass.a}}\" innerHTML=\"{{text_prev}}\">\r\n\r\n      </a>\r\n    </li>\r\n    <li class=\"{{structureClass.li}}\" *ngFor=\"let x of numbers\"\r\n            [ngClass]=\"{ active : no_of_current_page == x }\"\r\n            (click)=\"gotoPage( x )\"\r\n    >\r\n      <a class=\"{{structureClass.a}}\">{{x}}</a>\r\n    </li>\r\n    <li class=\"{{structureClass.li}}\" *ngIf=\"show_prev_next && numbers[ numbers.length - 1] < no_of_total_pages \"  (click)=\"nextPage()\">\r\n      <a class=\"{{structureClass.a}}\" innerHTML=\"{{text_next}}\"></a>\r\n    </li>\r\n    <li class=\"{{structureClass.li}}\" *ngIf=\"show_first_last && numbers[ numbers.length - 1] < no_of_total_pages\" (click)=\"gotoLast()\">\r\n      <a class=\"{{structureClass.a}}\" innerHTML=\"{{text_last}}\"></a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),
/* 433 */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\">\r\n    <div class=\"form-group mt-2\">\r\n        <label for=\"OldPassword\">Old Password</label>\r\n        <input type=\"password\" id=\"OldPassword\" class=\"form-control\" required autofocus formControlName=\"old_password\">\r\n    </div>\r\n    <div class=\"form-group mt-2\">\r\n        <label for=\"NewPassword\">New Password</label>\r\n        <input type=\"password\" id=\"NewPassword\" class=\"form-control\" required formControlName=\"new_password\">\r\n    </div>\r\n    <button class=\"btn btn-primary btn-block btn-sm\" type=\"button\" (click)=\"onClickChangePassword()\">Change Password</button>\r\n    <button class=\"btn btn-success btn-block btn-sm\" type=\"button\" (click)=\"onClickCancel()\">Cancel</button>\r\n</form>\r\n\r\n"

/***/ }),
/* 434 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card mb-2\">\r\n  <div class=\"card-block\">\r\n    <h3 *ngIf=\" isCreate() \" class=\"card-title\">Writing on {{ post_config_id }} Forum</h3>\r\n    <h3 *ngIf=\" isEdit() \" class=\"card-title\">Editing No. {{ post.idx }}</h3>\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n        \r\n        <file-form-basic-component [files]=\" files \"></file-form-basic-component>\r\n\r\n        \r\n        <div *ngIf=\" option?.hideForumID === true && isCreate() \" class=\"form-group\">\r\n          <label for=\"title-box\">Forum ID</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"title-box\" formControlName=\"post_config_id\">\r\n          <small class=\"form-text text-muted\">Input forum ID like 'qna'</small>\r\n        </div>\r\n\r\n        <div *ngIf=\" option?.showTitle === true \" class=\"form-group\">\r\n          <label for=\"title-box\">Title</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"title-box\" formControlName=\"title\">\r\n          <small class=\"form-text text-muted\">Input title</small>\r\n        </div>\r\n\r\n        <div *ngIf=\" option?.showContent === true \" class=\"form-group\">\r\n          <label for=\"content-box\">Content</label>\r\n          <textarea class=\"form-control\" id=\"content-box\" formControlName=\"content\"></textarea>\r\n          <small class=\"form-text text-muted\">Please, input content</small>\r\n        </div>\r\n        \r\n        <div *ngIf=\" option?.showLink === true \" class=\"form-group\">\r\n          <label for=\"link-box\">Link</label>\r\n          <input class=\"form-control\" id=\"link-box\" formControlName=\"link\">\r\n          <small class=\"form-text text-muted\">Any links like homepage</small>\r\n        </div>\r\n        \r\n        <button type=\"submit\" class=\"btn btn-primary\">Post</button>\r\n        <button type=\"button\" class=\"btn btn-Secondary\" (click)=\" onClickCancel() \">Cancel</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),
/* 435 */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\" ! showPostEditForm \" class=\"card post\">\r\n  <div class=\"card-block\">\r\n    <table>\r\n      <tr>\r\n        <td width=\"1%\">\r\n          <img *ngIf=\" post.user?.url_primary_photo \" src=\"{{ post.user.url_primary_photo }}\"\r\n          style=\" width: 40px; height: 40px; border-radius: 50%; \">\r\n        </td>\r\n        <td>\r\n          <h4 class=\"card-title\">{{ post.title }}</h4>\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{ post.idx }}, {{ post.user?.name }}</h6>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n      <p class=\"card-text rounded bg-lightgrey p-3\" [innerHTML]=\" sanitize(post) \"></p>\r\n\r\n\r\n      <div class=\"files clearfix\" *ngIf=\" post.files \">\r\n        <div class=\"w-25 float-left\" *ngFor=\" let file of post.files \">\r\n          <img [src]=\" file.url + '&crop=200x100x70'\" style=\"width: 100%;\">\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"buttons\">\r\n        <span *ngIf=\" myPost \" class=\"card-link\" (click)=\" showPostEditForm = !showPostEditForm \">Edit</span>\r\n        <span class=\"card-link\" (click)=\" showCommentForm = !showCommentForm \">Reply</span>\r\n        <span class=\"card-link\" (click)=\" onClickLike('G') \">Like({{ post.vote_good }})</span>\r\n        <span class=\"card-link\" (click)=\" onClickLike('B') \">Dislike({{ post.vote_bad }})</span>\r\n        <span (click)=\" onClickReport() \" class=\"card-link\">Report({{post.report}})</span>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n  <post-form-basic-component\r\n    *ngIf=\" showPostEditForm \"\r\n    [post] = \" post \"\r\n    (cancel) = \" showPostEditForm = false \"\r\n    (edit) = \" showPostEditForm = false; \"\r\n  ></post-form-basic-component>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<comment-form-basic-component\r\n  *ngIf = \" showCommentForm \"\r\n  [post] = \" post \"\r\n  [list] = \" list \"\r\n  [parent_idx]=\" post.idx \"\r\n  (create) = \" showCommentForm = false \"\r\n  (cancel) = \" showCommentForm = false \"\r\n></comment-form-basic-component>\r\n"

/***/ }),
/* 436 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <form [formGroup]=\"form\" novalidate>\r\n\r\n      <div class=\"row\">\r\n        <div *ngIf=\" data?.primary_photo?.idx \" class=\"primary-photo\" style=\"position: relative; max-width: 100px;\">\r\n          <span (click)=\"onClickDeletePhoto()\" class=\"fa-stack fa-lg pointer\" style=\"position: absolute; right: .6em; bottom: .6em;\">\r\n            <i class=\"fa fa-circle fa-stack-2x fa-inverse\"></i>\r\n            <i class=\"fa fa-trash fa-stack-1x\"></i>\r\n          </span>\r\n          <img class=\"img-thumbnail\" src=\"{{ data.primary_photo.url }}&crop=100x120x80\">\r\n        </div>\r\n      </div>\r\n\r\n      \r\n      \r\n      <div class=\"row\" *ngIf=\" percentage \">\r\n          <div class=\"progress bg-grey w-100 my-1\">\r\n            <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\" percentage + '%' \" aria-valuemin=\"0\" aria-valuemax=\"100\">{{ percentage }}%</div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row form-group\">\r\n      \r\n        <input class=\"form-control-file\" #userfile type=\"file\" (change)=\"onChangeFileUpload( userfile )\">\r\n      </div>\r\n      \r\n\r\n\r\n      <ng-container *ngIf=\" ! user.logged \">\r\n      <div class=\"row\">\r\n        <input class=\"form-control\" formControlName=\"id\" placeholder=\"User ID\">\r\n      </div>\r\n      <div *ngIf=\"formErrors.id\" class=\"alert alert-danger\">\r\n        {{ formErrors.id }}\r\n      </div>\r\n      <div class=\"row\">\r\n        <input class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\r\n      </div>\r\n      <div *ngIf=\"formErrors.password\" class=\"alert alert-danger\">\r\n        {{ formErrors.password }}\r\n      </div>\r\n      </ng-container>\r\n      \r\n      <div class=\"row\" *ngIf=\" user.logged \">\r\n        {{ user.info.id }}\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <input class=\"form-control\" formControlName=\"name\" placeholder=\"Name\">\r\n      </div>\r\n      <div *ngIf=\"formErrors.name\" class=\"alert alert-danger\">\r\n        {{ formErrors.name }}\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <input class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\r\n      </div>\r\n      <div *ngIf=\"formErrors.email\" class=\"alert alert-danger\">\r\n        {{ formErrors.email }}\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <input class=\"form-control\" formControlName=\"mobile\" placeholder=\"Mobile\">\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-4 col-sm-4\">Gender</div>\r\n        <div class=\"col-8 col-sm-8\">\r\n          <div class=\"form-check form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" id=\"inlineRadio1\" value=\"M\"> Male\r\n            </label>\r\n          </div>\r\n          <div class=\"form-check form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"gender\" id=\"inlineRadio2\" value=\"F\"> Female\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      \r\n      <div class=\"row\">\r\n        <input class=\"form-control\" formControlName=\"birthday\" type=\"date\">\r\n      </div>\r\n      \r\n\r\n      <div class=\"row\" *ngIf=\" ! user.logged \">\r\n          <button type=\"button\" class=\"btn btn-success btn-block btn-sm\" (click)=\"onClickRegister()\"\r\n            [disabled] = \" ! form.valid \"\r\n          >Register</button>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\" user.logged \">\r\n          <button type=\"button\" class=\"btn btn-success btn-block btn-sm\" (click)=\"onClickUpdate()\"\r\n          [disabled] = \" ! form.valid \"\r\n          >Update</button>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <button class=\"btn btn-secondary btn-block btn-sm\" type=\"button\" (click)=\"onClickCancel()\">Cancel</button>\r\n      </div>\r\n  </form>"

/***/ }),
/* 437 */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar fixed-top p-0\">\r\n  <div class=\"container no-space\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-sm-4 col-md-3\">\r\n        <div class=\"text-center bg-primary\">Backend Admin</div>\r\n      </div>\r\n      <div class=\"col-12 col-sm-8 col-md-9\">\r\n        <div class=\"bg-grey\">\r\n          <i (click)=\" admin.onClickMenuMore() \" class=\"fa fa-bars\"></i>\r\n          Bottom line\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>"

/***/ }),
/* 438 */
/***/ (function(module, exports) {

module.exports = "########################\r\n{{post | json}}"

/***/ }),
/* 439 */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu\">\r\n  <nav>\r\n    <ul>\r\n      <li class=\"heading\" routerLink=\"/\">Application Home</li>\r\n      <li class=\"heading\" routerLink=\"/admin\">Dashboard Home</li>\r\n      <li class=\"heading\" routerLink=\"/admin/user\">User</li>\r\n      <li class=\"heading\" routerLink=\"/admin/forum\">Forum</li>\r\n      <li class=\"depth-2\" routerLink=\"/admin/forum/configs\">Configs</li>\r\n      <!--<li class=\"depth-2\" routerLink=\"/admin/forum/categories\">Categories</li>-->\r\n      <li class=\"depth-2\" routerLink=\"/admin/forum/posts\">Posts</li>\r\n      <li class=\"heading\">File</li>\r\n      <!--<li class=\"heading\" routerLink=\"/admin/statistic\">Statistic</li>\r\n      <li class=\"depth-2\" routerLink=\"/admin/statistic/user\">User</li>\r\n      <li class=\"depth-2\" routerLink=\"/admin/statistic/posts\">Posts</li>-->\r\n    </ul>\r\n  </nav>\r\n</div>"

/***/ }),
/* 440 */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\r\n<div class=\"container-fluid margin-top-5 mt-sm-5\">\r\n  <div class=\"row\">\r\n    <admin-sidebar class=\"{{ admin.hidden_xs_down }} col-sm-3 col-md-2 px-0\"></admin-sidebar>\r\n    <main class=\"col-12 col-sm-9 col-md-10\">\r\n      <ng-container>\r\n        <div class=\"container mb-3\">\r\n          <h2>Category Create</h2>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">ID</span>\r\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"categoryCreate.id\"  placeholder=\"Category ID\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Model</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"categoryCreate.model\" placeholder=\"Model\">\r\n          </div>\r\n\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Model IDX</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"categoryCreate.model_idx\" placeholder=\"Model IDX\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Name</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"categoryCreate.name\" placeholder=\"Name..\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Description</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"categoryCreate.description\" placeholder=\"Description...\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Parent IDX</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"categoryCreate.parent_idx\" placeholder=\"Parent IDX\">\r\n          </div>\r\n          <button (click)=\"onClickCreateCategory()\" type=\"button\">Category Create</button>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"container mb-3\">\r\n          <h2>Category Search</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div>ID: <input name=\"id\" [(ngModel)]=\"searchCategoryForm.id\" (keyup)=\"onChangeConfigSearch()\"></div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div>Name: <input name=\"name\" [(ngModel)]=\"searchCategoryForm.name\" (keyup)=\"onChangeConfigSearch()\"></div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div>Description: <input name=\"description\" [(ngModel)]=\"searchCategoryForm.description\" (keyup)=\"onChangeConfigSearch()\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"container mb-3\">\r\n\r\n\r\n          <h2>Category List</h2>\r\n\r\n          <div *ngIf=\"categories\" class=\"pagination-user\" >\r\n            <table class=\"table table-responsive\">\r\n              <thead class=\"thead-inverse\">\r\n              <tr>\r\n                <th>IDX</th>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Description</th>\r\n                <th>Moderators</th>\r\n                <th>List</th>\r\n                <th>View</th>\r\n                <th>Write</th>\r\n                <th>Comment</th>\r\n                <th class=\"text-center\">Edit</th>\r\n                <th class=\"text-center\">Delete</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody class=\"users\">\r\n              <tr *ngFor=\"let category of categories\" class=\"user\">\r\n                <th scope=\"row\">{{category.idx}}</th>\r\n                <td>\r\n                  {{category.id}}\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"category.model\" placeholder=\"model\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" name=\"email\" [(ngModel)]=\"category.model_idx\" placeholder=\"model_idx\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" name=\"moderator\" [(ngModel)]=\"category.name\" placeholder=\"name\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" name=\"list\" [(ngModel)]=\"category.description\" placeholder=\"description\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" name=\"view\" [(ngModel)]=\"category.parent_idx\" placeholder=\"parent_idx\">\r\n                </td>\r\n                <td (click)=\"onClickConfigEdit( category )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n                <td (click)=\"onClickConfigDelete( category.id )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-trash\"></i></td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <page-navigation\r\n            [no_of_total_items]=\" pageOption['totalRecord'] \"\r\n            [no_of_items_in_one_page] = \" pageOption['limitPerPage'] \"\r\n            [no_of_pages_in_navigator] = \" pageOption['limitPerNavigation'] \"\r\n            [no_of_current_page] = \" pageOption['currentPage'] \"\r\n            [show_prev_next] = \" true \"\r\n            (pageClick)=\"onConfigPageClick($event)\"\r\n          >\r\n          </page-navigation>\r\n        </div>\r\n\r\n      </ng-container>\r\n\r\n      <!--<ng-container *ngIf=\"config_idx\">-->\r\n\r\n        <!--<div class=\"container mb-3\">-->\r\n          <!--<h2>Post Search</h2>-->\r\n          <!--<div class=\"row\">-->\r\n            <!--<div class=\"col\">-->\r\n              <!--<div>ID: <input name=\"id\" [(ngModel)]=\"searchPostForm.id\" (keyup)=\"onChangePostSearch()\"></div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"col\">-->\r\n              <!--<div>Title: <input name=\"title\" [(ngModel)]=\"searchPostForm.title\" (keyup)=\"onChangePostSearch()\"></div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"col\">-->\r\n              <!--<div>Content: <input name=\"content\" [(ngModel)]=\"searchPostForm.content\" (keyup)=\"onChangePostSearch()\"></div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n\r\n        <!--<div *ngFor=\" let post of posts \">-->\r\n          <!--{{ post.idx }} - -->\r\n          <!--{{ post.title }} - -->\r\n          <!--{{ post.created }} - -->\r\n\r\n          <!--{{ post.files | json }}-->\r\n        <!--</div>-->\r\n\r\n      <!--</ng-container>-->\r\n\r\n\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 441 */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\r\n<div class=\"container-fluid margin-top-5 mt-sm-5\">\r\n  <div class=\"row\">\r\n    <admin-sidebar class=\"{{ admin.hidden_xs_down }} col-sm-3 col-md-2 px-0\"></admin-sidebar>\r\n    <main class=\"col-12 col-sm-9 col-md-10\">\r\n      <ng-container>\r\n        <div class=\"container mb-3\">\r\n          <h2>Forum Create</h2>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">ID</span>\r\n            <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"configCreate.id\"  placeholder=\"Forum ID\">\r\n          </div>\r\n\r\n\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Name</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configCreate.name\" placeholder=\"Forum Name\">\r\n          </div>\r\n\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Description</span>\r\n            <textarea rows=\"1\" class=\"form-control\" [(ngModel)]=\"configCreate.description\" placeholder=\"Forum description....\"></textarea>\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Moderators</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configCreate.moderators\" placeholder=\"Moderators....\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Level List</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configCreate.level_list\" placeholder=\"Level List....\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Level View</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configCreate.level_view\" placeholder=\"Level View....\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Level Write</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configCreate.level_write\" placeholder=\"Level Write....\">\r\n          </div>\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\">Level Comment</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configCreate.level_comment\" placeholder=\"Level Comment....\">\r\n          </div>\r\n\r\n\r\n          <button (click)=\"onClickCreateForum()\" type=\"button\">Forum Create</button>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"container mb-3\">\r\n          <h2>Forum Search</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div>ID: <input name=\"id\" [(ngModel)]=\"searchConfigForm.id\" (keyup)=\"onChangeConfigSearch()\"></div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div>Name: <input name=\"name\" [(ngModel)]=\"searchConfigForm.name\" (keyup)=\"onChangeConfigSearch()\"></div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div>Description: <input name=\"description\" [(ngModel)]=\"searchConfigForm.description\" (keyup)=\"onChangeConfigSearch()\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"container mb-3\">\r\n\r\n\r\n          <h2>Forum List</h2>\r\n\r\n          <div *ngIf=\"postConfigs\" class=\"pagination-user\" >\r\n            <table class=\"table table-responsive\">\r\n              <thead class=\"thead-inverse\">\r\n              <tr>\r\n                <th>IDX</th>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Description</th>\r\n                <th>Moderators</th>\r\n                <th>List</th>\r\n                <th>View</th>\r\n                <th>Write</th>\r\n                <th>Comment</th>\r\n                <th class=\"text-center\">Edit</th>\r\n                <th class=\"text-center\">Delete</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody class=\"users\">\r\n              <tr *ngFor=\"let config of postConfigs\" class=\"user\">\r\n                <th scope=\"row\">{{config.idx}}</th>\r\n                <td>\r\n                  <div routerLink=\"/admin/forum/posts/{{config.id}}\" role=\"button\">{{config.id}}</div>\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" name=\"name\" [(ngModel)]=\"config.name\" placeholder=\"Name\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" name=\"description\" [(ngModel)]=\"config.description\" placeholder=\"Description\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"text\" name=\"moderator\" [(ngModel)]=\"config.moderators\" placeholder=\"Moderator\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" name=\"list\" [(ngModel)]=\"config.level_list\" placeholder=\"Level List\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" name=\"view\" [(ngModel)]=\"config.level_view\" placeholder=\"Level View\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" name=\"write\" [(ngModel)]=\"config.level_write\" placeholder=\"Level Write\">\r\n                </td>\r\n                <td>\r\n                  <input type=\"number\" name=\"comment\" [(ngModel)]=\"config.level_comment\" placeholder=\"Level Comment\">\r\n                </td>\r\n                <td (click)=\"onClickConfigEdit( config )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n                <td (click)=\"onClickConfigDelete( config.id )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-trash\"></i></td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <page-navigation\r\n            [no_of_total_items]=\" pageOption['totalRecord'] \"\r\n            [no_of_items_in_one_page] = \" pageOption['limitPerPage'] \"\r\n            [no_of_pages_in_navigator] = \" pageOption['limitPerNavigation'] \"\r\n            [no_of_current_page] = \" pageOption['currentPage'] \"\r\n            [show_prev_next] = \" true \"\r\n            (pageClick)=\"onConfigPageClick($event)\"\r\n          >\r\n          </page-navigation>\r\n        </div>\r\n\r\n      </ng-container>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 442 */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\r\n<div class=\"container-fluid margin-top-5 mt-sm-5\">\r\n  <div class=\"row\">\r\n    <admin-sidebar class=\"{{ admin.hidden_xs_down }} col-sm-3 col-md-2 px-0\"></admin-sidebar>\r\n    \r\n    \r\n    \r\n    <main class=\"col-12 col-sm-9 col-md-10\">\r\n\r\n      <button *ngIf=\" ! showPostForm \" (click)=\" postPostForm = {}; showPostForm = true \" class=\"btn btn-secondary\">Create New Post</button>      \r\n\r\n      <post-form-basic-component\r\n        *ngIf=\" showPostForm \"\r\n        [post_config_id] = \" 'qna' \"\r\n        [post] = \" postPostForm \"\r\n        (create) = \" reloadPosts() \"\r\n        (edit) = \" showPostForm = false \"\r\n        (cancel) = \" showPostForm = false \"\r\n      ></post-form-basic-component>\r\n\r\n\r\n      <div class=\"container mb-3\">\r\n        <h2>Post Search</h2>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div>\r\n              Forums: Input forum id you want to search. Separate by comma(,)\r\n              <select class=\"form-control\" [(ngModel)]=\"post_config_id\" (change)=\"onChangePostSearch()\">\r\n                <option value=\"\">All</option>\r\n                <option *ngFor=\"let config of postConfigs\" value=\"{{config.id}}\">{{config.name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div>Title <input name=\"title\" [(ngModel)]=\"searchPostForm.title\" (keyup)=\"onChangePostSearch()\"></div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div>Content <input name=\"content\" [(ngModel)]=\"searchPostForm.content\" (keyup)=\"onChangePostSearch()\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"container mb-3\">\r\n\r\n\r\n        <h2>Post List</h2>\r\n\r\n        <div *ngIf=\"posts\" class=\"pagination-user\" >\r\n          <table class=\"table table-responsive\">\r\n            <thead class=\"thead-inverse\">\r\n            <tr>\r\n              <th>E</th>\r\n              <th>IDX</th>\r\n              <th>Config IDX</th>\r\n              <th>Title</th>\r\n              <th>Content</th>\r\n              <th>Attached</th>\r\n              <th class=\"text-center\">Edit</th>\r\n              <th class=\"text-center\">Delete</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class=\"users\">\r\n            <tr *ngFor=\"let post of posts\" class=\"post\" role=\"button\" [ngClass]=\"{strikeout: post.deleted == '1'}\">\r\n              <td (click)=\" postPostForm = post; showPostForm = true \" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n              \r\n              <th scope=\"row\" (click)=\"onClickShowPostDetail(post.idx)\">\r\n                {{post.idx}}\r\n              </th>\r\n              <td>\r\n                {{post.post_config_idx}}\r\n              </td>\r\n              <td>\r\n                <input [disabled]=\"post.deleted == '1'\" type=\"text\" name=\"title\" [(ngModel)]=\"post.title\" placeholder=\"Title\">\r\n              </td>\r\n              <td>\r\n                <input [disabled]=\"post.deleted == '1'\" type=\"text\" name=\"content\" [(ngModel)]=\"post.content\" placeholder=\"Content\">\r\n              </td>\r\n              <td>\r\n                <div *ngFor=\" let _file of post.files \">\r\n                  <img style=\"width:25%; float:left;\" src=\"{{ _file.url }}\">\r\n                </div>\r\n              </td>\r\n              <td (click)=\"onClickPostEdit( post )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n              <td (click)=\"onClickPostDelete( post )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-trash\"></i></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <page-navigation\r\n                [no_of_total_items]=\" pageOption['totalRecord'] \"\r\n                [no_of_items_in_one_page] = \" pageOption['limitPerPage'] \"\r\n                [no_of_pages_in_navigator] = \" pageOption['limitPerNavigation'] \"\r\n                [no_of_current_page] = \" pageOption['currentPage'] \"\r\n                [show_prev_next] = \" true \"\r\n                (pageClick)=\"onPostPageClick($event)\"\r\n        >\r\n        </page-navigation>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 443 */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\r\n<div class=\"container-fluid margin-top-5 mt-sm-5\">\r\n  <div class=\"row\">\r\n    <admin-sidebar class=\"{{ admin.hidden_xs_down }} col-sm-3 col-md-2 px-0\"></admin-sidebar>\r\n    <main class=\"col-12 col-sm-9 col-md-10\">\r\n\r\n      <div classs=\"container\">\r\n        <section class=\"row\">\r\n          <div class=\"col-sm-6 col-md-3\">\r\n            <info-box [title]=\"\" content=\"\"></info-box>\r\n          </div>\r\n          <div class=\"col-sm-6 col-md-3\">\r\n            <info-box></info-box>\r\n          </div>\r\n          <div class=\"col-sm-6 col-md-3\">\r\n            <info-box></info-box>\r\n          </div>\r\n          <div class=\"col-sm-6 col-md-3\">\r\n            <info-box></info-box>\r\n          </div>\r\n        </section>\r\n\r\n      <div class=\"container px-0\">\r\n        <div class=\"row fs-80\">\r\n          <div class=\"col\">\r\n            <progress-group></progress-group>\r\n          </div>\r\n          <div class=\"col\">\r\n            <progress-group></progress-group>\r\n          </div>\r\n          <div class=\"col\">\r\n            <progress-group></progress-group>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n          \r\n      </div>\r\n\r\n\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),
/* 444 */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\r\n<div class=\"container-fluid margin-top-5 mt-sm-5\">\r\n  <div class=\"row\">\r\n    <admin-sidebar class=\"{{ admin.hidden_xs_down }} col-sm-3 col-md-2 px-0\"></admin-sidebar>\r\n    <main class=\"col-12 col-sm-9 col-md-10\">\r\n        <div>\r\n            <input #userfileEdit type=\"file\">\r\n            <div class=\"progress\" *ngIf=\"percentage\">{{percentage}}%</div>\r\n            <img src=\"{{ edit_src_photo }}\" width=\"100%\">\r\n            <div>Name: <input name=\"name\" [(ngModel)]=\"edit.name\"></div>\r\n            <div>Email: <input name=\"email\" [(ngModel)]=\"edit.email\"></div>\r\n            <div>Gender<input name=\"gender\" [(ngModel)]=\"edit.gender\"></div>\r\n            <div><button (click)=\"onClickUpdateProfile()\" type=\"button\">Update Profile</button></div>\r\n        </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),
/* 445 */
/***/ (function(module, exports) {

module.exports = "<admin-header></admin-header>\r\n<div class=\"container-fluid margin-top-5 mt-sm-5\">\r\n  <div class=\"row\">\r\n    <admin-sidebar class=\"{{ admin.hidden_xs_down }} col-sm-3 col-md-2 px-0\"></admin-sidebar>\r\n    <main class=\"col-12 col-sm-9 col-md-10\">\r\n\r\n\r\n\r\n      <h2>User management By admin</h2>\r\n\r\n      <div class=\"container mb-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div>UserID: <input name=\"id\" [(ngModel)]=\"searchForm.id\" (keyup)=\"onChangeSearch()\"></div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div>Name: <input name=\"name\" [(ngModel)]=\"searchForm.name\" (keyup)=\"onChangeSearch()\"></div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div>Email: <input name=\"email\" [(ngModel)]=\"searchForm.email\" (keyup)=\"onChangeSearch()\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"paginationUsers\" class=\"pagination-user\" >\r\n        <table class=\"table\">\r\n          <thead class=\"thead-inverse\">\r\n          <tr>\r\n            <th>IDX</th>\r\n            <th>User ID</th>\r\n            <th>Name</th>\r\n            <th>Gender</th>\r\n            <th>Email</th>\r\n            <th class=\"text-center\">Edit</th>\r\n            <th class=\"text-center\">Delete</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody class=\"users\">\r\n          <tr *ngFor=\"let user of paginationUsers\" class=\"user\">\r\n            <th scope=\"row\">{{user.idx}}</th>\r\n            <td>\r\n              {{user.id}}\r\n            </td>\r\n            <td>\r\n              <input type=\"email\" name=\"email\" [(ngModel)]=\"user.name\" placeholder=\"Name\">\r\n            </td>\r\n            <td>\r\n              <input type=\"text\" name=\"gender\" [(ngModel)]=\"user.gender\" placeholder=\"M/F\">\r\n            </td>\r\n            <td>\r\n              <input type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email Address\">\r\n            </td>\r\n            <td (click)=\"onClickEdit( user )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n            <td (click)=\"onClickDelete( user.id )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-trash\"></i></td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <page-navigation\r\n                [no_of_total_items]=\" totalRecord \"\r\n                [no_of_items_in_one_page] = \" limitPerPage \"\r\n                [no_of_pages_in_navigator] = \" numberPerNav \"\r\n                [no_of_current_page] = \" currentPage \"\r\n                [show_prev_next] = \" true \"\r\n                (pageClick)=\"onPageClick($event)\"\r\n        >\r\n        </page-navigation>\r\n      </div>\r\n\r\n    </main>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),
/* 446 */
/***/ (function(module, exports) {

module.exports = "<div class=\"info-box {{infoBoxClass}}\">\r\n  <div class=\"icon {{iconclass}}\"><i class=\"fa {{iClass}}\"></i></div>\r\n  <div class=\"text {{textClass}}\">\r\n    <div class=\"title {{titleClass}}\"  innerHTML=\"{{titleInnerHTML}}\"></div>\r\n    <div class=\"content {{contentClass}}\" innerHTML=\"{{contentInnerHTML}}\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 447 */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-group\">\r\n  <span class=\"text\">Cart</span>\r\n  <span class=\"number\"><b>160</b>/200</span>\r\n\r\n  <div class=\"progress sm\">\r\n    <div class=\"progress-bar progress-bar-aqua\" style=\"width: 80%; height: .2em;\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 448 */
/***/ (function(module, exports) {

module.exports = "<aside class=\"sidebar\">\r\n    <ul>\r\n         <li> \r\n             <a href=\"#\"> \r\n                <font>강의실 입장</font>\r\n                <img src=\"assets/img/aside1.jpg\" >\r\n            </a>\r\n        </li>\r\n        <li> \r\n            <a href=\"#\"> \r\n                <font>스카이프</font> \r\n                <img src=\"assets/img/aside2.jpg\" > \r\n            </a> \r\n        </li>\r\n        <li> \r\n            <a href=\"#\"> \r\n                <font>장치 테스트</font> \r\n                <img src=\"assets/img/aside3.jpg\" >         \r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\"> \r\n                <font>원격지원</font> \r\n                <img src=\"assets/img/aside4.jpg\" > \r\n            \r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#\">\r\n                <font class=\"chrome\">크롬 다운로드</font> \r\n                <img src=\"assets/img/aside5.jpg\" > \r\n            </a> \r\n        </li>\r\n    </ul>\r\n</aside>"

/***/ }),
/* 449 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/contact.jpg\">\r\n    <span class=\"img-text\">\r\n        <span class=\"how text\">전화</span>\r\n        <span class=\"what text\">카카오톡</span>\r\n        <span class=\"why text\">답변</span>\r\n        <span class=\"who text\">게시판</span>\r\n    </span>\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">도움말</font>\r\n        <font class=\"desc\">\r\n            전화: 070-7893-1741\r\n            <br>\r\n            카카오톡: thruthesky2\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 450 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/inquiry.jpg\">\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">Forum</font>\r\n        <font class=\"desc\">\r\n            Frm:B1:Banner Description will be place here\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 451 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/leveltest.jpg\">\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">레벨테스트</font>\r\n        <font class=\"desc\">\r\n            본인의 영어 실력을 확인하고 수\r\n            <br>\r\n            업 과목과 교재 선택\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 452 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"my-banner\">\r\n    <img src=\"assets/img/payment.jpg\">\r\n    <div class=\"banner-info\">\r\n        <span class=\"level\">수업료 결제</span>\r\n        <span class=\"desc\">무통장 입금 : 국민은행 <br>655-601-04-1644-08 예금주: 송재호</span>\r\n    </div>\r\n</div>"

/***/ }),
/* 453 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/reservation.jpg\">\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">MyClass</font>\r\n        <font class=\"desc\">\r\n            <strong>첫 수업:</strong>      {{classinformation?.first_class}} <br>\r\n            \r\n            <strong>예약된 수업:</strong>  {{classinformation?.no_of_past}}<br>\r\n            <strong>다음 수업:</strong>    {{classinformation?.no_of_reservation}}\r\n            <strong>지난 수업:</strong>    {{classinformation?.next_class}}<br>\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 454 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/other/1.png\">\r\n    \r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">도움말</font>\r\n        <font class=\"desc\">\r\n            전화: 070-7893-1741\r\n            <br>\r\n            카카오톡: thruthesky2\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 455 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/other/4.png\">\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">Forum</font>\r\n        <font class=\"desc\">\r\n            Frm:B1:Banner Description will be place here\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 456 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/other/6.png\">\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">레벨테스트</font>\r\n        <font class=\"desc\">\r\n            본인의 영어 실력을 확인하고 수\r\n            <br>\r\n            업 과목과 교재 선택\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 457 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"my-banner\">\r\n    <img src=\"assets/img/other/2.png\">\r\n    <div class=\"banner-info\">\r\n        <span class=\"level\">수업료 결제</span>\r\n        <span class=\"desc\">무통장 입금 : 국민은행 <br>655-601-04-1644-08 예금주: 송재호</span>\r\n    </div>\r\n</div>"

/***/ }),
/* 458 */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-banner\">\r\n    <img src=\"assets/img/other/5.png\">\r\n    <div class=\"banner-info\">\r\n        <font class=\"level\">MyClass</font>\r\n        <font class=\"desc\">\r\n            <strong>첫 수업:</strong>      {{classinformation?.first_class}} <br>\r\n            \r\n            <strong>예약된 수업:</strong>  {{classinformation?.no_of_past}}<br>\r\n            <strong>다음 수업:</strong>    {{classinformation?.no_of_reservation}}\r\n            <strong>지난 수업:</strong>    {{classinformation?.next_class}}<br>\r\n        </font>\r\n    </div>\r\n</div>"

/***/ }),
/* 459 */
/***/ (function(module, exports) {

module.exports = "<section id=\"comment\" class=\"part\">\r\n        <div class=\"comment-container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 img-comment\">\r\n                    <img src=\"assets/img/comment.png\">\r\n                </div>\r\n                <div class=\"col-md-8 comment-content\">\r\n                    <div class=\"title-row\">\r\n                        수강후기\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"inner\">\r\n                                <div class=\"picture-text\">\r\n                                    <img src=\"assets/img/comment1.jpg\">\r\n                                </div>\r\n                                <div class=\"name-text\">\r\n                                    박수환\r\n                                </div>\r\n                                <div class=\"comment-text\">\r\n                                    지난 2년간 함께하며 제 영어 실력을 향상 시켜준 Jam 선생님께 진심으로 감사드립니다.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"inner\">\r\n                                <div class=\"picture-text\">\r\n                                    <img src=\"assets/img/comment2.jpg\">\r\n                                </div>\r\n                                <div class=\"name-text\">\r\n                                    정주은\r\n                                </div>\r\n                                <div class=\"comment-text\">\r\n                                    Fae 선생님을 만난 것은 큰 행운입니다. 덕분에 영어를 마스터 할 수 있었습니다.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"inner\">\r\n                                <div class=\"picture-text\">\r\n                                    <img src=\"assets/img/comment3.jpg\">\r\n                                </div>\r\n                                <div class=\"name-text\">\r\n                                    박수환\r\n                                </div>\r\n                                <div class=\"comment-text\">\r\n                                    저는 초등학교 2학년인데 삼육 학원에서 고등학생과 같이 수업을 해요. Briana 선생님 덕분이죠.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"inner\">\r\n                                <div class=\"picture-text\">\r\n                                    <img src=\"assets/img/comment4.jpg\">\r\n                                </div>\r\n                                <div class=\"name-text\">\r\n                                    이진희\r\n                                </div>\r\n                                <div class=\"comment-text\">\r\n                                    Krizelle 선생님께서 잘 리드해 주셔서 영어 두근거림이 사라졌습니다.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"inner\">\r\n                                <div class=\"picture-text\">\r\n                                    <img src=\"assets/img/comment5.jpg\">\r\n                                </div>\r\n                                <div class=\"name-text\">\r\n                                    김영희\r\n                                </div>\r\n                                <div class=\"comment-text\">\r\n                                    Pia 선생님께서 잘 가르쳐주셔서 영어 말하기 대회에서 입상하였습니다.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"inner\">\r\n                                <div class=\"picture-text\">\r\n                                    <img src=\"assets/img/comment6.jpg\">\r\n                                </div>\r\n                                <div class=\"name-text\">\r\n                                    쥴리아 정\r\n                                </div>\r\n                                <div class=\"comment-text\">\r\n                                    영어는 참 쉬워요. 좋은 선생님을 만난다면 더욱 빠르게 영어가 늘죠. 고마워요 Stacey 선생님.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</section>\r\n"

/***/ }),
/* 460 */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-form\">\r\n    <div class=\"row justify-content-center\">\r\n        <h2>상담 내용 작성</h2>\r\n    </div>\r\n    <form>\r\n        <div class=\"container\">\r\n            <div class=\"row line justify-content-sm-center\">\r\n                \r\n                <div class=\"col-auto\"><label for=\"user_login\">이름<span>*</span></label></div>\r\n                <div class=\"col-auto col-sm-6 text\">\r\n                    <input class=\"form-control\" type=\"text\" name=\"name\" maxlength=\"64\" id=\"name\" tabindex=\"101\" placeholder=\"이름을 입력하십시오.\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row line justify-content-sm-center\">\r\n                <div class=\"col-auto\"><label for=\"user_login\">이메일<span>*</span></label></div>\r\n                <div class=\"col-auto col-sm-6 text\">\r\n                    <input class=\"form-control\" type=\"text\" name=\"email\" maxlength=\"64\" id=\"email\" tabindex=\"101\" placeholder=\"이메일을 입력하십시오.\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row line justify-content-sm-center\">\r\n                <div class=\"col-auto\"> <label for=\"user_login\">핸드폰번호</label></div>\r\n                <div class=\"col-auto col-sm-6 text\">\r\n                    <input class=\"form-control\" type=\"text\" name=\"phone\" maxlength=\"64\" id=\"phone\" tabindex=\"101\" placeholder=\"전화번호를 입력하십시오.\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row line justify-content-sm-center\">\r\n                <div class=\"col-auto\"> <label for=\"user_login\">내용<span>*</span></label></div>\r\n                <div class=\"col-auto col-sm-6 text\">\r\n                    <textarea class=\"form-control\" name=\"message\" id=\"message\" tabindex=\"101\" rows=\"5\" placeholder=\"문의 내용을 입력하십시오.\"></textarea>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row line-submit justify-content-sm-center\">\r\n                <div class=\"col-auto\"></div>\r\n                <div class=\"col-auto col-sm-6 text\">\r\n                    <input class=\"form-control\" type=\"submit\" tabindex=\"121\" value=\"Inquiry Submit\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        \r\n    </form>\r\n\r\n</div>"

/***/ }),
/* 461 */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\">\r\n    <div class=\"contact-content\">\r\n     \r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto logo\">\r\n                <img src=\"assets/img/contact-logo.jpg\">\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto title\">주소:</div>\r\n            <div class=\"col-auto desc\">경남 김해시 한림면 신천리 284 - 1 번지</div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto title\">전화번호:</div>\r\n            <div class=\"col-auto desc\">070-7893-1741</div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto title\">이메일:</div>\r\n            <div class=\"col-auto desc\">thruthesky@gmail.com</div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto title\">스카이프:</div>\r\n            <div class=\"col-auto desc\">thruthesky</div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto title\">카카오톡:</div>\r\n            <div class=\"col-auto desc\">thruthesky2</div>\r\n        </div>\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-auto title\">담당자:</div>\r\n            <div class=\"col-auto desc\">송재호</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),
/* 462 */
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"contact\" class=\"part\">\r\n    <contact-banner-component *ngIf=\"numberDesign == 'first'\"></contact-banner-component>\r\n    <second-contact-banner-component *ngIf=\"numberDesign == 'second'\"></second-contact-banner-component>-->\r\n    <!--<div class=\"my-banner\">\r\n        <img src=\"assets/img/contact.jpg\">\r\n        <span class=\"img-text\">\r\n            <span class=\"how text\">전화</span>\r\n            <span class=\"what text\">카카오톡</span>\r\n            <span class=\"why text\">답변</span>\r\n            <span class=\"who text\">게시판</span>\r\n        </span>\r\n        <div class=\"banner-info\">\r\n            <font class=\"level\">도움말</font>\r\n            <font class=\"desc\">\r\n                전화: 070-7893-1741\r\n                <br>\r\n                카카오톡: thruthesky2\r\n            </font>\r\n        </div>\r\n    </div>-->\r\n    <contact-information-component></contact-information-component>\r\n    <contact-form-component></contact-form-component>\r\n<!--</section>-->"

/***/ }),
/* 463 */
/***/ (function(module, exports) {

module.exports = "<section id=\"curriculum\" class=\"part\">\r\n    <div class=\"curriculum-container\">\r\n        <div class=\"info-text\">\r\n            화상영어 교재 안내\r\n        </div>\r\n        <div class=\"more-text\">\r\n            <span>교재 더보기</span>\r\n        </div>\r\n        \r\n        <div class=\"collection\" *ngIf=\"books\">    \r\n            <div class=\"row\">\r\n                <div class=\"col-md-3 col-sm-4 col-xs-6 col-6 mybook\" *ngFor=\"let book of books\">\r\n                    <div class=\"inner-row\">\r\n                        <img class=\"book-image\" src=\"{{ book.img }}\">\r\n                        <div class=\"title\">\r\n                            {{ book.title }}\r\n                        </div>\r\n                        <div class=\"desc\">\r\n                            {{ book.desc }}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"load\" (click)=\"onClickShowMore()\">\r\n                <div class=\"load-more\" >\r\n                    <font *ngIf=\"showBook\">감추기</font>\r\n                    <font *ngIf=\"!showBook\">더 보기</font>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),
/* 464 */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\r\n<div class=\"copyright\"> \r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-around\">\r\n            <div class=\"col-auto logo-picture\">\r\n                <img src=\"/assets/img/logo.png\">\r\n            </div> \r\n            <div class=\"col-auto footer-content\">\r\n                <font>\r\n                    상호 <b>온라인영어</b> 대표자명 <b>송재호</b> 주소 <b>경상남도 김해시 한림면 신천리 284</b><br>\r\n                    사업자등록번호 <b>615-90-87907</b> 통신판매신고번호 <b>2008-경남김해-0051</b> <br>\r\n                    고객센터<b>070-7893-1741</b> 이메일 <b>thruthesky@gmail.com</b><br>\r\n                    업태 <b>서비스</b> 종목 <b>온라인강의</b> 개인정보관리책임자 <b>송재호</b>\r\n                </font>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n</div>\r\n</footer>"

/***/ }),
/* 465 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-files clearfix\">\r\n    <div class=\"file w-25 float-left\" *ngFor=\" let file of files \">\r\n        \r\n        <span (click)=\" onClickDeleteFile( file ) \" class=\"fa-stack fa-lg\">\r\n            <i class=\"fa fa-circle fa-stack-2x fa-inverse\"></i>\r\n            <i class=\"fa fa-trash fa-stack-1x\"></i>\r\n        </span>\r\n\r\n        <img style=\"width: 100%\" src=\"{{ file.url + '&crop=100x100x70' }}\">\r\n    </div>\r\n</div>\r\n    \r\n<div class=\"form-group\">\r\n    <label for=\"file-box\">Upload Photos</label>\r\n    <input type=\"file\" class=\"form-control-file\" id=\"file-box\" #file (change)=\"onChangeFile(file)\">\r\n    <small class=\"form-text text-muted\">Please select a photo to upload</small>\r\n</div>\r\n\r\n"

/***/ }),
/* 466 */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-list-container\">\r\n    <table class=\"table table-striped table-bordered table-hover table-responsive\">\r\n        <thead class=\"table-inverse bg-info\">\r\n            <th>Id</th>\r\n            <th>Photos</th>\r\n            <th>Title</th>\r\n            <th>Content</th>\r\n            <th>Edit</th>\r\n            <th>Delete</th>\r\n        </thead>\r\n        <!--<tbody *ngIf=\" posts \">\r\n\r\n            <tr *ngFor=\"let post of posts\">\r\n                <td>{{ post.idx }}</td>\r\n                <td> \r\n                    <div class=\"files clearfix\" *ngIf=\" post.files \">\r\n                        <div class=\"w-25 float-left\" *ngFor=\" let file of post.files \">\r\n                        <img [src]=\" file.url + '&crop=200x100x70'\" style=\"width: 100%;\">\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <input [disabled]=\"post.deleted == '1'\" type=\"text\" name=\"title\" [(ngModel)]=\"post.title\" placeholder=\"Title\">\r\n                </td>\r\n                <td>\r\n                    <input [disabled]=\"post.deleted == '1'\" type=\"text\" name=\"content\" [(ngModel)]=\"post.content\" placeholder=\"Content\">\r\n                </td>\r\n                <td> \r\n                    <img *ngIf=\" post.user.url_primary_photo \" src=\"{{ post.user.url_primary_photo }}\"\r\n                    style=\" width: 40px; height: 40px; border-radius: 50%; \">\r\n                     {{ post.user?.name }} \r\n                </td>\r\n                <td (click)=\"onClickEdit( post )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n                <td (click)=\"onClickDelete( post )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-trash\"></i></td>\r\n            </tr>\r\n        </tbody>-->\r\n         <tbody class=\"users\">\r\n            <tr *ngFor=\"let post of posts\" class=\"post\" role=\"button\" [ngClass]=\"{strikeout: post.deleted == '1'}\">\r\n              <!--<td (click)=\" postPostForm = post; showPostForm = true \" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>-->\r\n              \r\n              <th scope=\"row\" (click)=\"onClickShowPostDetail(post.idx)\">\r\n                {{post.idx}}\r\n              </th>\r\n              <td>\r\n                <div *ngFor=\" let _file of post.files \">\r\n                  <img style=\"width:25%; float:left;\" src=\"{{ _file.url }}\">\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <input [disabled]=\"post.deleted == '1'\" type=\"text\" name=\"title\" [(ngModel)]=\"post.title\" placeholder=\"Title\">\r\n              </td>\r\n              <td>\r\n                <input [disabled]=\"post.deleted == '1'\" type=\"text\" name=\"content\" [(ngModel)]=\"post.content\" placeholder=\"Content\">\r\n              </td>\r\n  \r\n               <td (click)=\"onClickEdit( post )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-pencil\"></i></td>\r\n               <td (click)=\"onClickDelete( post )\" class=\"text-center\" role=\"button\"><i class=\"fa fa-trash\"></i></td>\r\n            </tr>\r\n            </tbody>\r\n    </table>\r\n</div>\r\n<page-navigation\r\n        [no_of_total_items]=\" pageOption['totalRecord'] \"\r\n        [no_of_items_in_one_page] = \" pageOption['limitPerPage'] \"\r\n        [no_of_pages_in_navigator] = \" pageOption['limitPerNavigation'] \"\r\n        [no_of_current_page] = \" pageOption['currentPage'] \"\r\n        [show_prev_next] = \" true \"\r\n        (pageClick)=\"onPostPageClick($event)\"\r\n>\r\n</page-navigation>\r\n<!--<section *ngIf=\" share.posts \">\r\n  <article *ngFor=\"let post of share.posts\" >\r\n    \r\n    <post-view-component [post]=\" post \"></post-view-component>\r\n    \r\n    <ng-container *ngIf=\" post.comments \">\r\n      <comment-view-component *ngFor=\" let comment of post.comments \"\r\n        [comment]=\" comment \">\r\n      </comment-view-component>\r\n    </ng-container>\r\n\r\n  </article>\r\n</section>-->"

/***/ }),
/* 467 */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\" ! showPostEditForm \" class=\"card post\">\r\n  <div class=\"card-block\">\r\n    <table>\r\n      <tr>\r\n        <td width=\"1%\">\r\n          <img *ngIf=\" post.user.url_primary_photo \" src=\"{{ post.user.url_primary_photo }}\"\r\n          style=\" width: 40px; height: 40px; border-radius: 50%; \">\r\n        </td>\r\n        <td>\r\n          <h4 class=\"card-title\">{{ post.title }}</h4>\r\n          <h6 class=\"card-subtitle mb-2 text-muted\">{{ post.idx }}, {{ post.user?.name }}</h6>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n      <p class=\"card-text\">\r\n        {{ post.content }}\r\n      </p>\r\n\r\n      <div class=\"files clearfix\" *ngIf=\" post.files \">\r\n        <div class=\"w-25 float-left\" *ngFor=\" let file of post.files \">\r\n          <img [src]=\" file.url + '&crop=200x100x70'\" style=\"width: 100%;\">\r\n        </div>\r\n      </div>\r\n    \r\n    <span class=\"card-link\" (click)=\" showPostEditForm = !showPostEditForm \">Edit</span>\r\n    <span class=\"card-link\" (click)=\" showCommentForm = !showCommentForm \">Reply</span>\r\n    <span class=\"card-link\">Like</span>\r\n    <span class=\"card-link\">Report</span>\r\n  </div>\r\n</div>\r\n\r\n<!--<post-form-component\r\n  *ngIf=\" showPostEditForm \"\r\n  [post] = \" post \"\r\n  (cancel) = \" showPostEditForm = false \"\r\n  (created) = \" showPostEditForm = false; \"\r\n  (edited) = \" showPostEditForm = false; \"\r\n></post-form-component>\r\n\r\n\r\n\r\n<comment-form-component\r\n  *ngIf = \" showCommentForm \"\r\n  [parent_idx]=\" post.idx \"\r\n  (created) = \" showCommentForm = false \"\r\n  (cancel) = \" showCommentForm = false \"\r\n></comment-form-component>-->"

/***/ }),
/* 468 */
/***/ (function(module, exports) {

module.exports = "<main class=\"forum\">\r\n    <div class=\"inquiry-container\">\r\n      <div class=\"top\">\r\n          <div class=\"forum-description\"><font>This is QnA Forum.</font></div>\r\n      </div>\r\n      <div class=\"bottom\">\r\n          <!--<div class=\"post-count\"><font>Page: 1 / No. </font></div>-->\r\n          <!--<div class=\"post-count\"><font><font>Page: 1 / No. </font><font>Of Post: 3</font></font></div>-->\r\n          <div class=\"post-new-button\"  (click)=\"onClickPost()\">\r\n              <span>\r\n                  <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i> Post\r\n              </span>\r\n          </div>\r\n      </div>\r\n      <post-list-component #postListComponent>\r\n      </post-list-component>\r\n    </div>\r\n</main>"

/***/ }),
/* 469 */
/***/ (function(module, exports) {

module.exports = "<header class=\"big\">\r\n    <nav class=\"navbar fixed-top\">\r\n        <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\" >\r\n            <img src=\"assets/img/logo.png\">\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <div class=\"my-top-menu\">\r\n                <ul>\r\n                    <li *ngIf=\"! user.logged\" class=\"menu\" (click)=\"onClickRegister()\">Register</li>\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickUpdateProfile()\">Profile</li>\r\n                    \r\n                    <li *ngIf=\" ! user.logged \" class=\"menu\" (click)=\"onClickLogin()\">Login</li>\r\n\r\n                    <li *ngIf=\"user.logged\" class=\"menu\" (click)=\"onClickGotoClassRoom()\">Class Room</li>\r\n\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickLogout()\">\r\n                        Logout\r\n                    </li>\r\n                    <li class=\"menu\" (click)=\"onClickPanelMenu('contact')\"> Help</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"menus\">\r\n                <ul >\r\n                    <!--\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='intro' \" (click)=\"onClickPanelMenu('intro')\">\r\n                        \r\n                        <span class=\"menu-img fa-stack\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-headphones fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span>\r\n                        <font>Home</font>\r\n                    </li>\r\n                    -->\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-book fa-fw\"></i></span> <font>Courses</font>-->\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-book fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Course</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-user-circle-o fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Teacher</font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-user-circle-o fa-fw\"></i></span><font>Teachers</font>-->\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-money fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Payment</font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-money fa-fw\"></i></span><font>Payment</font>-->\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-video-camera fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>LevelTest</font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-video-camera fa-fw\"></i></span><font>Level Test</font>-->\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-phone fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Contact</font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-phone fa-fw\"></i></span><font>Contact</font>-->\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-comments fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Comment</font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-comments fa-fw\"></i></span><font>Comment</font>-->\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-info-circle fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Inquiry</font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-info-circle fa-fw\"></i></span> <font>Inquiry</font>-->\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-calendar fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Class </font>\r\n                        <!--<span class=\"menu-img\"><i class=\"fa fa-calendar fa-fw\"></i></span><font>Reservations </font>-->\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n"

/***/ }),
/* 470 */
/***/ (function(module, exports) {

module.exports = "<header class=\"small\">\r\n    <nav class=\"navbar fixed-top\">    \r\n        <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n            <img src=\"assets/img/logo.png\">\r\n        </div>\r\n\r\n        <div class=\"bottom\">\r\n            <div class=\"menu\">\r\n                <ul>\r\n                    <li class=\"menu more\">\r\n                        <i class=\"icon fa fa-bars\" (click)=\"onClickMoreMenu()\"></i>\r\n                    </li>\r\n                    <li *ngIf=\"! user.logged \" class=\"menu register\" (click)=\"onClickRegister()\">\r\n                        <span class=\"text\"> Register </span> \r\n                    </li>\r\n                    <li *ngIf=\" user.logged \" class=\"menu profile\" (click)=\"onClickUpdateProfile()\">\r\n                        <span class=\"text\"> Profile </span>\r\n                    </li>\r\n\r\n                    <li *ngIf=\" ! user.logged \" class=\"menu\" (click)=\"onClickLogin()\">\r\n                        <span class=\"text\"> Login </span>\r\n                    </li>\r\n\r\n\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickLogout()\">\r\n                        <span class=\"text\">Logout</span>\r\n                    </li>\r\n                    \r\n                    <li class=\"menu\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span class=\"text\">Help </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"panel\" [class.active]=\"this.more\">\r\n                <ul class=\"menus\">\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='intro' \" (click)=\"onClickPanelMenu('intro')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-headphones fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Home</span>\r\n                        \r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-book fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Courses</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-user-circle-o fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Teachers</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-money fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Payment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-video-camera fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Level Test</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-phone fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Contact</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-comments fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Comment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-info-circle fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Inquiry</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-calendar fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Reservations </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n"

/***/ }),
/* 471 */
/***/ (function(module, exports) {

module.exports = "<small-header-component  *ngIf=\" app.widthSize == 'small' \" [login]=\"login\"\r\n                         (logout)=\"onClickLogout()\"\r\n                         (onLogin)=\"onClickLogin()\"\r\n                         (register)=\"onClickRegister()\"\r\n                         (profile)=\"onClickUpdateProfile()\"\r\n                         (classroom)=\"onClickGotoClassRoom()\"\r\n></small-header-component>\r\n<big-header-component *ngIf=\" app.widthSize == 'big' \" [login]=\"login\"\r\n                      (logout)=\"onClickLogout()\"\r\n                      (onLogin)=\"onClickLogin()\"\r\n                      (register)=\"onClickRegister()\"\r\n                      (profile)=\"onClickUpdateProfile()\"\r\n                      (classroom)=\"onClickGotoClassRoom()\"\r\n></big-header-component>\r\n\r\n"

/***/ }),
/* 472 */
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"inquiry\" class=\"part\">\r\n    <inquiry-banner-component *ngIf=\"numberDesign == 'first'\"></inquiry-banner-component>\r\n    <second-inquiry-banner-component *ngIf=\"numberDesign == 'second'\"></second-inquiry-banner-component>-->\r\n    <main id=\"post-list\" class=\"forum\">\r\n        <div class=\"inquiry-container\">\r\n             <div class=\"post-list-meta\">\r\n                <div class=\"top\">\r\n                    <div class=\"forum-description\"><font>This is QnA Forum.</font></div>\r\n                </div>\r\n                <div class=\"bottom\">\r\n                    <div class=\"post-count\"><font><font>Page: 1 / No. </font><font>Of Post: 3</font></font></div>\r\n                    <div class=\"post-new-button\" (click)=\"onClickPost()\">\r\n                        <span>\r\n                            <i class=\"fa fa-pencil-square\" aria-hidden=\"true\"></i> Post\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"post-list-container\">\r\n                <table class=\"table table-striped table-bordered table-hover\">\r\n                    <thead class=\"table-inverse bg-info\">\r\n                        <th>Title</th>\r\n                        <th>Writer</th>\r\n                        <th>Content</th>\r\n                        <!--<th>Date</th>-->\r\n                    </thead>\r\n                    <tbody>\r\n\r\n                        <tr *ngFor=\"let post of postList\">\r\n                            <th> {{ post.title }} \r\n                                <img *ngIf=\" post.url_primary_photo \" src=\"{{ post.url_primary_photo }}\">\r\n                            </th>\r\n                            <td> {{ post.name }} </td>\r\n                            <td> {{ post.content }} </td>\r\n                            <!--<td> {{ post.created }} </td>-->\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!--<div class=\"post-list-container\">\r\n                <table class=\"table table-striped table-bordered table-hover\">\r\n                    <thead class=\"table-inverse bg-info\">\r\n                        <th>Title</th>\r\n                        <th>Writer</th>\r\n                        <th>Date</th>\r\n                        <th>Views</th>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <th>Test</th>\r\n                            <td>admin</td>\r\n                            <td>10-12</td>\r\n                            <td>54</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>Hello, Teacher.</th>\r\n                            <td>admin</td>\r\n                            <td>08-23</td>\r\n                            <td>94</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>QnA (1)</th>\r\n                            <td>admin</td>\r\n                            <td>06-29</td>\r\n                            <td>281</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>-->\r\n        </div>\r\n       \r\n        <!--<div class=\"post-list-container\">\r\n            <div class=\"row header\">\r\n                <div class=\"col-6 title\"><font>Title</font></div>\r\n                <div class=\"col-2 author\"><font>Writer</font></div>\r\n                <div class=\"col-2 date\"><font>Date</font></div>\r\n                <div class=\"col-2 no-of-view\" title=\"No. Of Views\"><font>Views</font></div>\r\n            </div>\r\n            <div class=\"row post\">\r\n                <div class=\"col-6 title\">\r\n                    <font>Test</font>\r\n                </div>\r\n                <div class=\"col-2 author\">\r\n                    <font>Admin</font>\r\n                </div>\r\n                <div class=\"col-2 date\">\r\n                    <font>10-12</font>\r\n                </div>\r\n                <div class=\"col-2 no-of-view\">\r\n                    <font>53</font>\r\n                </div>\r\n            </div>\r\n            <div class=\"row post\">\r\n                <div class=\"col-6 title\">\r\n                    <font>Hello, Teacher.</font>\r\n                </div>\r\n                <div class=\"col-2 author\">\r\n                    <font>Admin</font>\r\n                </div>\r\n                <div class=\"col-2 date\">\r\n                    <font>08-23</font>\r\n                </div>\r\n                <div class=\"col-2 no-of-view\">\r\n                    <font>94</font>\r\n                </div>\r\n            </div>\r\n            <div class=\"row post\">\r\n                <div class=\"col-6 title\">\r\n                    <font>QnA (1)</font>\r\n                </div>\r\n                <div class=\"col-2 author\">\r\n                    <font>Admin</font>\r\n                </div>\r\n                <div class=\"col-2 date\">\r\n                    <font>06-29</font>\r\n                </div>\r\n                <div class=\"col-2 no-of-view\">\r\n                    <font>281</font>\r\n                </div>\r\n            </div>\r\n        </div>-->\r\n    </main>\r\n<!--</section>-->"

/***/ }),
/* 473 */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\" class=\"part\">\r\n    <!--<div class=\"intro-container\">   \r\n        <img src=\"assets/img/intro.png\">\r\n    </div>-->\r\n    <div class=\"intro-container\">\r\n        <div class=\"info-title\">화상영어를 선택하는 이유</div>\r\n        <div class=\"info-text\">\r\n            인터넷만 되면 언제 어디서든 수업을 할 수 있는 화상영어는<br>\r\n            왔다 갔다 1시간 이상 소요되지만 대화는 1분도 못하는 학원 수업과는 달리 일대일 화상영어는 맞춤식 수업이라 1시간 내내 대화하며 학생이 부족한 부분을 집중적으로 관리 할 수 있어 듣고 말하기에 탁월한 효과가 있습니다.\r\n        </div>\r\n        <div class=\"intro-img\">\r\n            <img src=\"assets/img/intro.png\">\r\n        </div>\r\n        <div class=\"row intro-content\">\r\n            <div class=\"col-md-3 inner-intro\">\r\n                <div class=\"img-icon\">\r\n                    <img src=\"assets/img/intro1.jpg\">\r\n                </div>\r\n                <div class=\"title\">인터넷만 되면 OK!</div>\r\n                <div class=\"desc\">컴퓨터, 태블릿, 핸드폰 상관없이 수업 가능.</div>\r\n            </div>\r\n            <div class=\"col-md-3 inner-intro\">\r\n                <div class=\"img-icon\">\r\n                    <img src=\"assets/img/intro2.jpg\">\r\n                </div>\r\n                <div class=\"title\">언제든지!</div>\r\n                <div class=\"desc\">일대일 맞춤 수업이어서 학생이 원하는 시간에 가능.</div>\r\n            </div>\r\n            <div class=\"col-md-3 inner-intro\">\r\n                <div class=\"img-icon\">\r\n                    <img src=\"assets/img/intro3.jpg\">\r\n                </div>\r\n                <div class=\"title\">어디든지!</div>\r\n                <div class=\"desc\">자동차, 전철, 휴게실 등 어디서든 수업.</div>\r\n            </div>\r\n            <div class=\"col-md-3 inner-intro\">\r\n                <div class=\"img-icon \">\r\n                    <img src=\"assets/img/intro4.jpg\">\r\n                </div>\r\n                <div class=\"title\">맞춤식 수업!</div>\r\n                <div class=\"desc\">학생 위주의 수업. 부족한 부분을 집중 관리.</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 474 */
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"level-test\" class=\"part\">-->\r\n    <!--<div class=\"my-banner\">\r\n        <img src=\"assets/img/other/6.png\">\r\n        <div class=\"banner-info\">\r\n            <font class=\"level\">레벨테스트</font>\r\n            <font class=\"desc\">\r\n                본인의 영어 실력을 확인하고 수\r\n                <br>\r\n                업 과목과 교재 선택\r\n            </font>\r\n        </div>\r\n    </div>-->\r\n    <!--<level-test-banner-component *ngIf=\"numberDesign == 'first'\"></level-test-banner-component>\r\n    <second-level-test-banner-component *ngIf=\"numberDesign == 'second'\"></second-level-test-banner-component>-->\r\n    <div class=\"level-test-form\">\r\n        <h2>레벨테스트 신청서</h2>\r\n        <form>\r\n            <div class=\"container\">\r\n                <input type=\"hidden\" name=\"action\" value=\"level_test_inquiry\">\r\n                <input type=\"hidden\" name=\"post_title\" value=\"post_inquiry\">\r\n                <input type=\"hidden\" name=\"post_inquiry_seen\" value=\"true\">\r\n                <div class=\"row line title justify-content-sm-center\">\r\n                    <label>\r\n                        *레벨테스트 신청은 로그인시에만 가능합니다.\r\n                    </label>     \r\n                </div>\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"student_id\">아이디</label>\r\n                    </div>\r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"student_id\" maxlength=\"64\" id=\"student_id\" tabindex=\"101\" placeholder=\"아이디\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"student_name\">이름</label>\r\n                    </div>\r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <input type=\"text\" class=\"form-control\" name=\"student_name\" maxlength=\"64\" id=\"student_name\" tabindex=\"101\" placeholder=\"이름\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"date\">날짜를 선택하세요<span>*</span></label>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <input class=\"form-control\" type=\"date\" name=\"date\" id=\"date\" maxlength=\"64\" tabindex=\"101\" placeholder=\"공휴일,주말을 제외한 주중에만 테스트가 가능합니다.\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"time\">시간선택<span>*</span></label>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <select class=\"form-control\" name=\"time\">\r\n                            <option value=\"3:00pm\">3:00 PM</option><option value=\"3:30pm\">3:30 PM</option><option value=\"4:00pm\">4:00 PM</option><option value=\"4:30pm\">4:30 PM</option><option value=\"5:00pm\">5:00 PM</option><option value=\"5:30pm\">5:30 PM</option><option value=\"6:00pm\">6:00 PM</option><option value=\"6:30pm\">6:30 PM</option><option value=\"7:00pm\">7:00 PM</option><option value=\"7:30pm\">7:30 PM</option><option value=\"8:00pm\">8:00 PM</option><option value=\"8:30pm\">8:30 PM</option><option value=\"9:00pm\">9:00 PM</option><option value=\"9:30pm\">9:30 PM</option><option value=\"10:00pm\">10:00 PM</option><option value=\"10:30pm\">10:30 PM</option><option value=\"11:00pm\">11:00 PM</option><option value=\"11:30pm\">11:30 PM</option>                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"phone\">핸드폰번호</label>\r\n                    </div>\r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <input class=\"form-control\" type=\"number\" name=\"phone\" maxlength=\"64\" id=\"phone\" tabindex=\"101\" placeholder=\"전화번호를 입력하십시오.\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"kakao\">카카오톡아이디</label>\r\n                    </div>\r\n                    \r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"kakao\" maxlength=\"64\" id=\"kakao\" tabindex=\"101\" placeholder=\"카카오톡아이디\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"row line justify-content-sm-center\">\r\n                    <div class=\"col-auto\">\r\n                        <label for=\"post_content\">내용<span>*</span></label>\r\n                    </div>\r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <textarea class=\"form-control\" name=\"post_content\" id=\"post_content\" tabindex=\"101\" rows=\"5\" placeholder=\"Your comment here...\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row line-submit justify-content-sm-center\">\r\n                    <div class=\"col-auto\"></div>\r\n                    <div class=\"col-auto col-sm-6 text\">\r\n                        <input class=\"form-control\" type=\"submit\" tabindex=\"121\" value=\"제출\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    \r\n    </div>\r\n<!--</section>-->"

/***/ }),
/* 475 */
/***/ (function(module, exports) {

module.exports = "<div class=\"change-password-modal\">\r\n  <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">\r\n        <font class=\"modal-title\">Change Password</font>\r\n      </h5>\r\n      <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n  </div>\r\n  \r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\"> \r\n        <form [formGroup]=\"formGroup\">\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"OldPassword\">Old Password</label>\r\n                <input type=\"password\" id=\"OldPassword\" class=\"form-control\" required formControlName=\"old_password\">\r\n            </div>\r\n            <div class=\"form-group mt-2\">\r\n                <label for=\"NewPassword\">New Password</label>\r\n                <input type=\"password\" id=\"NewPassword\" class=\"form-control\" required formControlName=\"new_password\">\r\n            </div>\r\n            <button class=\"btn btn-primary btn-block btn-sm\" type=\"button\" (click)=\"onClickChangePassword()\">Change Password</button>\r\n            <button class=\"btn btn-success btn-block btn-sm\" type=\"button\" (click)=\"onClickCancel()\">Cancel</button>\r\n        </form>\r\n\r\n\r\n        <!--<form>\r\n            <div>\r\n            <p class=\"form-title\">Change Password.</p>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"old_password\" class=\"col-md-2 col-form-label\">Old Password</label>\r\n                <div class=\"col-md-10\">\r\n                    <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email Address\">\r\n                </div>\r\n            </div>\r\n\r\n              <div  class=\"button-signup\">\r\n                <button type=\"button\"class=\"btn btn-warning form-control\" (click)=\"onClickResetPassword()\">\r\n                  Reset Password\r\n                </button>\r\n              </div>\r\n        </form>-->\r\n\r\n\r\n      </div> \r\n    </div>\r\n\r\n</div>"

/***/ }),
/* 476 */
/***/ (function(module, exports) {

module.exports = "<div class=\"class-info-modal\">\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">\r\n            <span class=\"modal-title\">Class Information</span>\r\n        </h5>\r\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-container\">\r\n                <form *ngIf=\"classInfo\">\r\n                    <div class=\"info-block\">\r\n                        <span class=\"info-title\">\r\n                            Teacher's Name\r\n                            <!--:  {{ classInfo?.teacher?.mb_nick}}-->\r\n                        </span>\r\n                        <input [(ngModel)]=\"classInfo.teacher.mb_nick\" name=\"teachers-name\" type=\"text\" class=\"form-control\"  placeholder=\"Teacher's Name\">\r\n                    </div>\r\n                    <div class=\"info-block\">\r\n                        <span class=\"info-title\">\r\n                            Date\r\n                            <!--: {{ classInfo?.date }}-->\r\n                        </span>\r\n                        <input [(ngModel)]=\"classInfo.date\" name=\"date\" type=\"text\" class=\"form-control\" placeholder=\"Date\">\r\n                    </div>\r\n                    <div class=\"info-block\">\r\n                        <span class=\"info-title\">\r\n                            Book\r\n                            <!--: {{ classInfo?.book }}-->\r\n                        </span>\r\n                        <input [(ngModel)]=\"classInfo.book\" name=\"book\" type=\"text\" class=\"form-control\" placeholder=\"Book\">\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"info-title\">\r\n                            Teacher's Comment\r\n                            <!--: {{ classInfo?.rate_comment }}-->\r\n                        </span>\r\n                        <textarea rows=\"10\" name=\"rate-comment\" type=\"text\" class=\"form-control\">\r\n                            {{classInfo.rate_comment}}\r\n                        </textarea>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),
/* 477 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-modal\">\r\n\r\n\r\n  <div class=\"modal-header\">\r\n\r\n      <h5 class=\"modal-title\">\r\n        <font class=\"modal-title\">Find ID</font>\r\n      </h5>\r\n      <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n      \r\n  </div>\r\n  \r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\"> \r\n        <form>\r\n            <div>\r\n            <p class=\"form-title\">Find ID</p>\r\n\r\n            <div *ngIf=\"loading && !id\" class=\"in-page-loading\"><i class=\"fa fa-cog fa-spin\"></i> Loading ...</div>            \r\n            <div class=\"form-group row\">\r\n                <label for=\"id\" class=\"col-md-2 col-form-label\">ID: </label>\r\n                <div class=\"col-md-10\">\r\n                    <input name=\"text\" value=\"{{ id }}\" type=\"id\" class=\"form-control form-control-sm\" disabled >\r\n                </div>\r\n\r\n            </div>\r\n\r\n            \r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"email\" class=\"col-md-2 col-form-label\">email</label>\r\n                <div class=\"col-md-10\">\r\n                    <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email Address\" >\r\n                </div>\r\n                \r\n            </div>\r\n            \r\n\r\n\r\n              <div  class=\"button-signup\">\r\n                <button type=\"button\"class=\"btn btn-warning form-control\" (click)=\"onClickFindID()\">\r\n                  Find ID\r\n                </button>\r\n              </div>\r\n        </form>\r\n      </div> \r\n    </div>\r\n\r\n</div>"

/***/ }),
/* 478 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-modal\">\r\n\r\n\r\n  <div class=\"modal-header\">\r\n\r\n      <h5 class=\"modal-title\">\r\n        <font class=\"modal-title\">Forgot Password</font>\r\n      </h5>\r\n      <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n      \r\n  </div>\r\n  \r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\"> \r\n        <form>\r\n            <div>\r\n            <p class=\"form-title\">Forgot Password.</p>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"email\" class=\"col-md-2 col-form-label\">email</label>\r\n                <div class=\"col-md-10\">\r\n                    <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email Address\">\r\n                </div>\r\n            </div>\r\n\r\n              <!--<p class=\"info\">\r\n                Still not a member in Video English ?\r\n              </p>-->\r\n              <div  class=\"button-signup\">\r\n                <button type=\"button\"class=\"btn btn-warning form-control\" (click)=\"onClickResetPassword()\">\r\n                  Reset Password\r\n                </button>\r\n              </div>\r\n        </form>\r\n      </div> \r\n    </div>\r\n\r\n</div>"

/***/ }),
/* 479 */
/***/ (function(module, exports) {

module.exports = "<div class=\"forum-post-modal\">\r\n    <div class=\"modal-header\">\r\n\r\n        <h5 class=\"modal-title\">\r\n            <span class=\"modal-title\">Post</span>\r\n        </h5>\r\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-container\">\r\n\r\n                <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                    <div>\r\n                        <p class=\"form-title\">QnA</p>\r\n                    </div>\r\n                    <file-form-component [files]=\" files \"></file-form-component>\r\n                    <div class=\"input-group\">\r\n                        <input  formControlName=\"title\"  name=\"title\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Title\">\r\n                    </div>\r\n         \r\n                    <div class=\"input-group\">\r\n\r\n                        <textarea  formControlName=\"content\"  name=\"content\" class=\"form-control form-control-sm\" id=\"content\" placeholder=\"Content\" rows=\"3\"></textarea>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-6 post\" ><button type=\"button\"class=\"btn btn-primary form-control\" (click)=\"onSubmit()\">Post</button></div>\r\n                    </div>\r\n                    <hr/>\r\n                </form>\r\n            </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),
/* 480 */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-modal\">\r\n\r\n\r\n  <div class=\"modal-header\">\r\n\r\n      <h5 class=\"modal-title\">\r\n        <font class=\"modal-title\">login</font>\r\n      </h5>\r\n      <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n      \r\n  </div>\r\n  \r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\"> \r\n        <form>\r\n            <div>\r\n            <p class=\"form-title\">Please login.</p>\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.id\" name=\"id\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"User ID\">\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.password\" name=\"password\" type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Password\" (keydown)=\"onEnterLogin($event)\">\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <!--<div class=\"col-md-6 save-id\">-->\r\n                <!--<label class=\"form-check-label\">-->\r\n                  <!--<input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"saveid\" name=\"saveid\" (keydown)=\"onEnterLogin($event)\">-->\r\n                  <!--save ID-->\r\n                <!--</label>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"col-md-6 login\" ><button type=\"button\"class=\"btn btn-danger form-control\" (click)=\"onClickLogin()\">Log in</button></div>-->\r\n              \r\n              \r\n            </div>\r\n            <!--<div class=\"login\" ><button type=\"button\"class=\"btn btn-danger form-control\" >Log in</button></div>-->\r\n            <div class=\"error alert alert-danger\" role=\"alert\" *ngIf=\"result.message\">\r\n                <button type=\"button\" class=\"close\" (click)=\"result.message=null\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                {{ result?.message }}\r\n            </div>\r\n            <div  class=\"button-signin\">\r\n                <button type=\"button\"class=\"btn btn-danger form-control\" (click)=\"onClickLogin()\">\r\n                  <i *ngIf=\"loading\" class='fa fa-spinner fa-pulse'></i>\r\n                  Log in\r\n                </button>\r\n              </div>\r\n            <hr/>\r\n            <div class=\"id-password row\">\r\n              <!--<div class=\"col-md-6 button-id\" >-->\r\n                <!--<button type=\"button\"class=\"btn btn-info form-control\" (click)=\"onClickFindId()\">-->\r\n                  <!--<i class=\"fa fa-user fa-fw\"></i>find ID-->\r\n                <!--</button>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"col-md-6 button-password\" >-->\r\n                <!--<button type=\"button\"class=\"btn btn-info form-control\" (click)=\"onClickForgotPassword()\">-->\r\n                  <!--<i class=\"fa fa-lock fa-fw\"></i>Forgot password-->\r\n                <!--</button>-->\r\n              <!--</div>-->\r\n            </div>\r\n              <p class=\"info\">\r\n                아직 문단열파워잉글리시 회원이 아니세요?\r\n              </p>\r\n              \r\n              <div  class=\"button-signup\">\r\n                <button type=\"button\"class=\"btn btn-warning form-control\" (click)=\"onClickRegister()\">\r\n                  Sign Up\r\n                </button>\r\n              </div>\r\n        </form>\r\n      </div> \r\n    </div>\r\n\r\n</div>"

/***/ }),
/* 481 */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-modal\">\r\n    <div class=\"modal-header\">\r\n\r\n        <h5 class=\"modal-title\">\r\n            <span class=\"modal-title\">Post</span>\r\n        </h5>\r\n        <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n            <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n        <div class=\"form-container\">\r\n\r\n                <form>\r\n                    <div>\r\n                        <p class=\"form-title\">QnA</p>\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n\r\n                        <input [(ngModel)]=\"form.title\" name=\"title\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Title\">\r\n                    </div>\r\n                    <div class=\"input-group\">\r\n\r\n                        <textarea [(ngModel)]=\"form.content\" name=\"content\" class=\"form-control form-control-sm\" id=\"content\" placeholder=\"Content\" rows=\"3\"></textarea>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n\r\n                        <div class=\"col-md-6 post\" ><button type=\"button\"class=\"btn btn-primary form-control\" (click)=\"onClickPost()\">Post</button></div>\r\n                    </div>\r\n                    <hr/>\r\n\r\n                </form>\r\n            </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),
/* 482 */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-modal\">\r\n\r\n\r\n  <div class=\"modal-header\">\r\n\r\n      <h5 class=\"modal-title\">\r\n        <font class=\"modal-title\" *ngIf=\" ! user.logged \">Register</font>\r\n        <font class=\"modal-title\" *ngIf=\"   user.logged \">Profile Update</font>        \r\n      </h5>\r\n      <button type=\"button\" class=\"close\" aria-hidden=\"true\" (click)=\"onClickDismiss()\">\r\n        <span aria-hidden=\"true\">×</span>\r\n      </button>\r\n      \r\n  </div>\r\n  \r\n    <div class=\"modal-body\">\r\n      <div class=\"form-container\"> \r\n        <form [formGroup]=\"form\" novalidate>\r\n            <div>\r\n            <p class=\"form-title\" *ngIf=\" ! user.logged \">Please Signup.</p>\r\n            <p class=\"form-title\" *ngIf=\"   user.logged \">Update Profile.</p>            \r\n            </div>\r\n            \r\n            <div class=\"form_image\" *ngIf=\" primary_photo_idx \">\r\n                <span (click)=\"onClickDeletePhoto()\" class=\"fa-stack fa-lg pointer\" style=\"position: absolute; right: .6em; bottom: .6em;\">\r\n                    <i class=\"fa fa-circle fa-stack-2x fa-inverse\"></i>\r\n                    <i class=\"fa fa-trash fa-stack-1x\"></i>\r\n                </span>\r\n                <img  src=\"{{ file.url( primary_photo_idx ) }}\">\r\n                \r\n            </div>\r\n            <div div class=\"input-group\">\r\n                <input class=\"form-control-file\" #userfile type=\"file\" (change)=\"onChangeFileUpload( userfile )\">\r\n            </div>\r\n            <div class=\"input-group\"  *ngIf=\" ! user.logged \">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span>\r\n                <input formControlName=\"id\" name=\"id\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"User ID\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n            \r\n            <div class=\"row\" *ngIf=\" user.logged \">\r\n                {{ user.info.id }}\r\n            </div>\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user-circle-o fa-fw\"></i></span>\r\n                <input formControlName=\"name\" name=\"name\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Name\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\" *ngIf=\" ! user.logged \">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user-circle fa-fw\"></i></span>\r\n                <input formControlName=\"email\" name=\"email\" type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-vcard fa-fw\"></i></span>\r\n                <input formControlName=\"nickname\" name=\"nickname\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nickname\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\" *ngIf=\" ! user.logged \">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-fw\"></i></span>\r\n                <input formControlName=\"password\" name=\"password\" type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Password\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-mobile fa-fw\"></i></span>\r\n                <input formControlName=\"mobile\" name=\"mobile\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Mobile\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n            \r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\r\n                <input formControlName=\"birthday\" name=\"birthday\" type=\"date\" class=\"birthday\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-venus-mars fa-fw\"></i></span>\r\n                <select class=\"custom-select form-control\" formControlName=\"gender\" name=\"gender\" (keydown)=\"onEnterRegister($event)\">\r\n                    <option value=\"\">Select Gender</option>\r\n                    <option value=\"M\">Male</option>\r\n                    <option value=\"F\">Female</option>\r\n                    \r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"error alert alert-danger\" role=\"alert\" *ngIf=\"result.message\">\r\n                <button type=\"button\" class=\"close\" (click)=\"result.message=null\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                {{ result?.message }}\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n            \r\n              <div class=\"col-md-12 register\" >\r\n                <button *ngIf=\" ! user?.logged \" type=\"button\" class=\"btn btn-primary btn-sm form-control\" (click)=\"onClickRegister()\">\r\n                    <i *ngIf=\"loading\" class='fa fa-spinner fa-spin'></i>\r\n                    Register\r\n                    </button>\r\n                <button *ngIf=\" user?.logged \" type=\"button\" class=\"control btn btn-info btn-sm form-control\" (click)=\"onClickUpdate()\">Update</button>\r\n                <button *ngIf=\" user?.logged \" type=\"button\" class=\"control btn btn-primary btn-sm form-control\" (click)=\"onClickChangePasswordr()\">Change Password</button>\r\n              </div>\r\n            </div>\r\n            \r\n        </form>\r\n        <!--<form>\r\n            <div>\r\n            <p class=\"form-title\" *ngIf=\" ! user.logged \">Please Signup.</p>\r\n            <p class=\"form-title\" *ngIf=\"   user.logged \">Update Profile.</p>            \r\n            </div>\r\n            \r\n            <div class=\"form_image\">\r\n                <img src=\"{{ src_photo }}\">\r\n            </div>\r\n            <div div class=\"input-group\">\r\n                <input *ngIf=\"!user.logged\" #userfile type=\"file\" (change)=\"onChangeFileUpload( userfile )\">\r\n                <input *ngIf=\"user.logged\" #userfileedit type=\"file\" (change)=\"onEditFile( userfileedit )\">\r\n            </div>\r\n            <div class=\"input-group\"  *ngIf=\" ! user.logged \">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.id\" name=\"id\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"User ID\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n            \r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user-circle-o fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.name\" name=\"name\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Name\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\" *ngIf=\" ! user.logged \">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-user-circle fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.email\" name=\"email\" type=\"email\" class=\"form-control form-control-sm\" placeholder=\"Email\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-vcard fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.nickname\" name=\"nickname\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Nickname\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\" *ngIf=\" ! user.logged \">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.password\" name=\"password\" type=\"password\" class=\"form-control form-control-sm\" id=\"password\" placeholder=\"Password\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-mobile fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.mobile\" name=\"mobile\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Mobile\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n            \r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-calendar fa-fw\"></i></span>\r\n                <input [(ngModel)]=\"form.birthday\" name=\"birthday\" type=\"date\" class=\"birthday\" (keydown)=\"onEnterRegister($event)\">\r\n            </div>\r\n\r\n            <div class=\"input-group\">\r\n                <span class=\"input-group-addon\"><i class=\"fa fa-venus-mars fa-fw\"></i></span>\r\n                <select class=\"custom-select form-control\" [(ngModel)]=\"form.gender\" name=\"gender\" (keydown)=\"onEnterRegister($event)\">\r\n                    <option value=\"\">Select Gender</option>\r\n                    <option value=\"M\">Male</option>\r\n                    <option value=\"F\">Female</option>\r\n                    \r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"error alert alert-danger\" role=\"alert\" *ngIf=\"result.message\">\r\n                <button type=\"button\" class=\"close\" (click)=\"result.message=null\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n                {{ result?.message }}\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n            \r\n              <div class=\"col-md-12 register\" >\r\n                <button *ngIf=\" ! user.logged \" type=\"button\" class=\"btn btn-primary btn-sm form-control\" (click)=\"onClickRegister()\">\r\n                    <i *ngIf=\"loading\" class='fa fa-spinner fa-spin'></i>\r\n                    Register\r\n                    </button>\r\n                <button *ngIf=\" user.logged \" type=\"button\" class=\"control btn btn-primary btn-sm form-control\" (click)=\"onClickUpdate()\">Update</button>\r\n              </div>\r\n            </div>\r\n            \r\n        </form>-->\r\n      </div> \r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),
/* 483 */
/***/ (function(module, exports) {

module.exports = "\r\n    <!--<div class=\"my-banner\">\r\n        <img src=\"assets/img/payment.jpg\">\r\n        <div class=\"banner-info\">\r\n            <span class=\"level\">수업료 결제</span>\r\n            <span class=\"desc\">무통장 입금 : 국민은행 <br>655-601-04-1644-08 예금주: 송재호</span>\r\n        </div>\r\n    </div>-->\r\n\r\n    <div class=\"payment-container\">\r\n        <div class=\"payment-content\">\r\n            <form class=\"payment-form\">\r\n                <div class=\" row content\">\r\n                    <div class=\"col-md-3 col-sm-6 my-payment\">\r\n                        <div class=\"cover\">\r\n                            <div class=\"picture\">\r\n                                <img src=\"assets/img/payment1.png\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                수업                        \r\n                            </div>\r\n                            <div class=\"items\">\r\n                                <label for=\"min_25\" class=\"text\">\r\n                                    <input id=\"min_25\" type=\"radio\" name=\"amount\" value=\"120000\">\r\n                                    25분 12만원                            \r\n                                </label>\r\n                                <label for=\"min_50\" class=\"text\">\r\n                                    <input id=\"min_50\" type=\"radio\" name=\"amount\" value=\"230000\">\r\n                                    50분 23만원 ( 5% 할인 )                            \r\n                                </label>\r\n                                또는\r\n                                <label for=\"input-amount\" class=\"input-amount-text\">\r\n                                    수업료 직접 입력                            \r\n                                </label>\r\n                                <input id=\"input-amount\" type=\"text\" name=\"amount_input\" value=\"0\" size=\"\" style=\"display:none;\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-6 my-payment\">\r\n                        <div class=\"cover\">\r\n                            <div class=\"picture\">\r\n                                <img src=\"assets/img/payment2.png\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                결제 방식                        \r\n                            </div>\r\n                            <div class=\"items\">\r\n                                <label for=\"onlycardselfnormal\" class=\"text\">\r\n                                    <input id=\"onlycardselfnormal\" type=\"radio\" name=\"method\" value=\"onlycardselfnormal\">\r\n                                    카드결제                            \r\n                                </label>\r\n                                <label for=\"onlyicheselfnormal\" class=\"text\">\r\n                                    <input id=\"onlyicheselfnormal\" type=\"radio\" name=\"method\" value=\"onlyicheselfnormal\">\r\n                                    계좌이체                            \r\n                                </label>\r\n                                <label for=\"onlyvirtualselfnormal\" class=\"text\">\r\n                                    <input id=\"onlyvirtualselfnormal\" type=\"radio\" name=\"method\" value=\"onlyvirtualselfnormal\">\r\n                                    1회용 무통장 입금                            \r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-6 my-payment\">\r\n                        <div class=\"cover\">\r\n                            <div class=\"picture\">\r\n                                <img src=\"assets/img/payment3.png\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                수업 요일                        \r\n                            </div>\r\n                            <div class=\"items\">\r\n                                <label for=\"day_5\" class=\"text\">\r\n                                    <input id=\"day_5\" type=\"radio\" name=\"days\" value=\"5\" checked=\"\">\r\n                                    주 5 회                            \r\n                                </label>\r\n                                <label for=\"day_4\" class=\"text\">\r\n                                    <input id=\"day_4\" type=\"radio\" name=\"days\" value=\"4\">\r\n                                    주 4 회 ( 5% 할인 )                            \r\n                                </label>\r\n                                <label for=\"day_3\" class=\"text\">\r\n                                    <input id=\"day_3\" type=\"radio\" name=\"days\" value=\"3\">\r\n                                    주 3 회 ( 10% 할인 )                            \r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 col-sm-6 curriculum  my-payment\">\r\n                        <div class=\"cover\">\r\n                            <div class=\"picture\">\r\n                                <img src=\"assets/img/payment4.png\">\r\n                            </div>\r\n                            <div class=\"desc\">\r\n                                과목 선택\r\n                            </div>\r\n                            <div class=\"items\">\r\n                                <label for=\"Curriculum1\" class=\"text\">\r\n                                    <input id=\"Curriculum1\" type=\"radio\" name=\"curriculum\" value=\"0:Basic English\">\r\n                                    Basic English                                \r\n                                </label>\r\n                                <label for=\"Curriculum2\" class=\"text\">\r\n                                    <input id=\"Curriculum2\" type=\"radio\" name=\"curriculum\" value=\"0:Conversational English\">\r\n                                    Conversational English                                \r\n                                </label>\r\n                                <label for=\"Curriculum3\" class=\"text\">\r\n                                    <input id=\"Curriculum3\" type=\"radio\" name=\"curriculum\" value=\"0:Business English\">\r\n                                    Business English                                \r\n                                </label>\r\n                             \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <nav class=\"col-sm pay-buttons\">\r\n                        <div class=\"pay-total\">수업료 합계: 230,000</div>\r\n                        <div class=\"button-total\">결제하기</div>\r\n                    </nav>\r\n                </div>\r\n                \r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),
/* 484 */
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"reservation\" class=\"part\">\r\n<reservation-banner-component *ngIf=\"numberDesign == 'first'\"></reservation-banner-component>\r\n<second-reservation-banner-component *ngIf=\"numberDesign == 'second'\"></second-reservation-banner-component>-->\r\n\r\n<div class=\"reservation\">\r\n\r\n    <div class=\"reservation-container\">\r\n        <div class=\"date-container\">\r\n        <div class=\"prev-month\"  on-mouseleave=\"showPrevious=false\">   \r\n            <span class=\"show-list\" (click)=\"showPrevious=!showPrevious\">\r\n                <i *ngIf=\"showPrevious\" class=\"fa fa-arrow-circle-up\" aria-hidden=\"true\"></i>\r\n                <i *ngIf=\"!showPrevious\" class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <div on-mouseover=\"showPrevious=true\" (click)=\"onClickPrev()\"><span >{{ prevMonths[1]?.m}} {{ prevMonths[1]?.Y}}</span></div>\r\n            \r\n            <div class=\"prev-months\" *ngIf=\"showPrevious\">   \r\n                <ul>\r\n                    <li class=\"prev\" *ngFor=\"let prev of prevMonths | slice:2\" (click)=\"selectNewDate({m:prev.m,Y:prev.Y})\"> {{ prev.m }} {{ prev.Y }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n \r\n        <div class=\"next-month\" on-mouseleave=\"showNext=false\">\r\n            <span class=\"show-list\" (click)=\"showNext=!showNext\">\r\n                <i *ngIf=\"showNext\" class=\"fa fa-arrow-circle-up\" aria-hidden=\"true\"></i>\r\n                <i *ngIf=\"!showNext\" class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <div  on-mouseover=\"showNext=true\" (click)=\"onClickNext()\" ><span >{{ nextMonths[0]?.m}} {{ nextMonths[0]?.Y}}</span></div>   \r\n            <div class=\"next-months\" *ngIf=\"showNext\">   \r\n                <ul>\r\n                    <li class=\"next\" *ngFor=\"let next of nextMonths | slice:1\" (click)=\"selectNewDate({m:next.m,Y:next.Y})\"> {{ next.m }} {{ next.Y }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n       \r\n        <div class=\"this-month\" on-mouseleave=\"showYear=false\">\r\n            <span class=\"show-list\" (click)=\"showYear=!showYear\">\r\n                <i *ngIf=\"showYear\" class=\"fa fa-arrow-circle-up\" aria-hidden=\"true\"></i>\r\n                <i *ngIf=\"!showYear\" class=\"fa fa-arrow-circle-down\" aria-hidden=\"true\"></i>\r\n            </span>\r\n            <div on-mouseover=\"showYear=true\"><span>{{ prevMonths[0]?.m}} {{ prevMonths[0]?.Y}}</span></div>   \r\n          \r\n          <div class=\"this-months\" *ngIf=\"showYear\">   \r\n                <ul>\r\n                    <li class=\"this-year\" *ngFor=\"let year of listOfYears\" (click)=\"selectNewDate({m:year.m,Y:year.Y})\"> {{ year.m }} {{ year.Y }}</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        </div>\r\n       \r\n        \r\n        <table class=\"table\">\r\n            <thead>\r\n                <th class=\"calendar-day-head\">Sun</th>\r\n                <th class=\"calendar-day-head\">Mon</th>\r\n                <th class=\"calendar-day-head\">Tue</th>\r\n                <th class=\"calendar-day-head\">Wed</th>\r\n                <th class=\"calendar-day-head\">Thu</th>\r\n                <th class=\"calendar-day-head\">Fri</th> \r\n                <th class=\"calendar-day-head\">Sat</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let week of weeks\">\r\n                    <td *ngFor=\"let day of week;\" class=\"calendar-day\" >\r\n                        <div class=\"info-container\" (click)=\"onClickClassInfo(day)\" >\r\n                            <span class=\"my-date\">{{day?.myDate}}</span>\r\n                            <div *ngIf=\"day?.icon\" class =\"teacher-icon\" [innerHTML]=\"day?.icon\" on-mouseover=\"day.display = true\" on-mouseleave=\"day.display = false\"></div>\r\n                            <div class=\"teacher-nick\">{{day?.teacher?.mb_nick}}</div>\r\n                            <div class=\"class-info\" *ngIf=\"day?.display && day?.teacher\">\r\n                                <div>\r\n                                    <span >\r\n                                        Teacher's Name: {{ day?.teacher?.mb_nick }}\r\n                                    </span>\r\n                                    \r\n                                </div>\r\n                                <div>\r\n                                    <span>\r\n                                        Date: {{ day?.date }}\r\n                                    </span>\r\n                                </div>\r\n                                <div>\r\n                                    <span>\r\n                                        Book: {{ day?.book }}\r\n                                    </span>\r\n                                </div>\r\n                                <div>\r\n                                    <span>\r\n                                        Teacher's Comment: {{ day?.rate_comment }}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <div *ngIf=\"!user.logged\" class=\"reminder-image\"> <img src=\"assets/img/reservation-banner.png\" >\r\n            <div class=\"reminder-text\">수업 시간표를 보시려면 로그인을 하세요.</div>\r\n        </div>\r\n        <div *ngIf=\"this.calendarLoad\" class=\"calendar-loader\">\r\n          <div class=\"loader\"><i class=\"fa fa-spinner fa-pulse\"></i></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--</section>-->"

/***/ }),
/* 485 */
/***/ (function(module, exports) {

module.exports = "<section id=\"teacher\" class=\"part\">\r\n    <div class=\"teacher-container\">\r\n    <div class=\"title\">\r\n        <h2>강사 소개</h2>\r\n        <h3>Withcenter, Inc. Teacher List.</h3>\r\n    </div>\r\n    <div *ngIf=\"teachers\" class=\"teachers\">\r\n        <div class=\"teacher col-sm-4\" *ngFor=\" let teacher of teachers; let i = index\" >\r\n            <div class=\"photo\">\r\n                <img src=\"{{ lms.url }}/{{ teacher.photo }}\">\r\n            </div>\r\n            <div class=\"teacher-info\">\r\n                <div class=\"id\">\r\n                    {{ teacher.id }}\r\n                </div>\r\n                \r\n                <div class=\"teaching-year text\">\r\n                    <span class=\"caption\">Exp.</span><span class=\"value\">{{ teacher.teaching_year }} years</span>\r\n                </div>\r\n                <div class=\"birthday text\">\r\n                    <span class=\"caption\">Birthday</span><span class=\"value\">{{ teacher.birthday }}</span>\r\n                </div>\r\n                <div class=\"gender text\">\r\n                    <span class=\"caption\">Gender</span><span class=\"value\">{{ teacher.gender }}</span>\r\n                </div>\r\n                <div class=\"major text\">\r\n                    <span class=\"caption\">Major</span><span class=\"value\">{{ teacher.major }}</span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"greeting\" (click)=\"teacher.show_more_greeting = ! teacher.show_more_greeting\" [class.more]=\" teacher.show_more_greeting \">\r\n                <div class=\"text\" [innerHTML]=\" teacher.greeting \"></div>\r\n                <div class=\"more\">... show more</div>\r\n            </div>\r\n            \r\n            \r\n\r\n            <div class=\"youtube-wrapper\">\r\n                <div *ngIf=\"!teacher.play_video\" (click)=\"teacher.play_video = true\" class=\"youtube-default-photo\">\r\n                    <img [src]=\"teacher.img_youtube\" >\r\n                    <div class=\"play\" >\r\n                        <i class=\"fa fa-play-circle\" aria-hidden=\"true\"></i>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"teacher.play_video\" class=\"youtube-player\" >\r\n                    <object>\r\n                        <param name=\"movie\" [value]='teacher.url_youtube'/>\r\n                        <embed class=\"youtube-video\" [src]='teacher.url_youtube'  type=\"text/html\" />\r\n                    </object>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        \r\n    </div>\r\n   \r\n   \r\n    <div class=\"load\" (click)=\"onClickShowMore()\">\r\n        <div class=\"load-more\" >\r\n            <font *ngIf=\"showMore\">감추기</font>\r\n            <font *ngIf=\"!showMore\">더 보기</font>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</section>"

/***/ }),
/* 486 */
/***/ (function(module, exports) {

module.exports = "<kkang-header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></kkang-header-component>\r\n\r\n\r\n<!--<pl-header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></pl-header-component>-->\r\n<!--<header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></header-component>-->\r\n\r\n\r\n<section id=\"content\" [class]=\"app.widthSize\">\r\n        <aside-component></aside-component>\r\n        <intro-component></intro-component>\r\n        <curriculum-component></curriculum-component>\r\n        <teacher-component [teachers]=\"teachers\" ></teacher-component>\r\n        <section id=\"payment\" class=\"part\" >\r\n                <payment-banner-component></payment-banner-component>\r\n                <payment-component></payment-component>\r\n        </section>\r\n        <section id=\"level-test\" class=\"part\">\r\n                <level-test-banner-component></level-test-banner-component>\r\n                <level-test-component></level-test-component>\r\n        </section>\r\n        <section id=\"contact\" class=\"part\">\r\n                <contact-banner-component></contact-banner-component>\r\n                <contact-component></contact-component>\r\n        </section>\r\n        <comment-component></comment-component>\r\n    \r\n        <section id=\"inquiry\" class=\"part\">\r\n                <inquiry-banner-component></inquiry-banner-component>\r\n                <forum-component></forum-component>\r\n                <!--<inquiry-component></inquiry-component>-->\r\n        </section>\r\n        <section id=\"reservation\" class=\"part\">\r\n                <reservation-banner-component></reservation-banner-component>\r\n                <reservation-component></reservation-component>\r\n        </section>\r\n\r\n    <!--<aside-component></aside-component>\r\n    <intro-component></intro-component>\r\n    <curriculum-component></curriculum-component>\r\n    <teacher-component [teachers]=\"teachers\" ></teacher-component>\r\n    <payment-component [numberDesign]=\"design\"></payment-component>\r\n    <level-test-component [numberDesign]=\"design\"></level-test-component>\r\n    <contact-component [numberDesign]=\"design\"></contact-component>\r\n    <comment-component></comment-component>\r\n    <inquiry-component [numberDesign]=\"design\"></inquiry-component>\r\n    <reservation-component #reservation [numberDesign]=\"design\"></reservation-component>-->\r\n</section>\r\n\r\n<!--<footer-component></footer-component>-->\r\n<!--<pl-footer-component></pl-footer-component>-->\r\n<kkang-footer-component></kkang-footer-component>\r\n"

/***/ }),
/* 487 */
/***/ (function(module, exports) {

module.exports = "<!--<kkang-header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></kkang-header-component>-->\r\n\r\n\r\n<pl-header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></pl-header-component>\r\n<!--<header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></header-component>-->\r\n\r\n\r\n<section id=\"content\" [class]=\"app.widthSize\">\r\n    <aside-component></aside-component>\r\n    <intro-component></intro-component>\r\n    <curriculum-component></curriculum-component>\r\n    <teacher-component [teachers]=\"teachers\" ></teacher-component>\r\n\r\n    <section id=\"payment\" class=\"part\" >\r\n        <second-payment-banner-component></second-payment-banner-component>\r\n        <payment-component></payment-component>\r\n    </section>\r\n    <section id=\"level-test\" class=\"part\">\r\n        <second-level-test-banner-component></second-level-test-banner-component>\r\n        <level-test-component></level-test-component>\r\n    </section>\r\n    <section id=\"contact\" class=\"part\">\r\n        <second-contact-banner-component></second-contact-banner-component>\r\n        <contact-component></contact-component>\r\n    </section>\r\n    <comment-component></comment-component>\r\n   \r\n    <section id=\"inquiry\" class=\"part\">\r\n        <second-inquiry-banner-component></second-inquiry-banner-component>\r\n        <forum-component></forum-component>\r\n    </section>\r\n    <section id=\"reservation\" class=\"part\">\r\n        <second-reservation-banner-component></second-reservation-banner-component>\r\n        <reservation-component></reservation-component>\r\n    </section>\r\n    \r\n     <!--<level-test-component [numberDesign]=\"design\"></level-test-component>\r\n    <contact-component [numberDesign]=\"design\"></contact-component>\r\n    <inquiry-component [numberDesign]=\"design\"></inquiry-component>\r\n    <reservation-component #reservation [numberDesign]=\"design\" ></reservation-component>-->\r\n</section>\r\n\r\n<!--<footer-component></footer-component>-->\r\n<pl-footer-component></pl-footer-component>\r\n<!--<kkang-footer-component></kkang-footer-component>-->\r\n"

/***/ }),
/* 488 */
/***/ (function(module, exports) {

module.exports = "<!--<kkang-header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></kkang-header-component>-->\r\n\r\n<!--\r\n<pl-header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></pl-header-component>-->\r\n<header-component\r\n        (onLogin)=\"onLogin()\"\r\n        (onLogout)=\"onLogout()\"\r\n></header-component>\r\n\r\n\r\n<section id=\"content\" [class]=\"app.widthSize\">\r\n<aside-component></aside-component>\r\n        <intro-component></intro-component>\r\n        <curriculum-component></curriculum-component>\r\n        <teacher-component [teachers]=\"teachers\" ></teacher-component>\r\n        <section id=\"payment\" class=\"part\" >\r\n                <payment-banner-component></payment-banner-component>\r\n                <payment-component></payment-component>\r\n        </section>\r\n        <section id=\"level-test\" class=\"part\">\r\n                <level-test-banner-component></level-test-banner-component>\r\n                <level-test-component></level-test-component>\r\n        </section>\r\n        <section id=\"contact\" class=\"part\">\r\n                <contact-banner-component></contact-banner-component>\r\n                <contact-component></contact-component>\r\n        </section>\r\n        <comment-component></comment-component>\r\n        \r\n        <section id=\"inquiry\" class=\"part\">\r\n                <inquiry-banner-component></inquiry-banner-component>\r\n                <forum-component></forum-component>\r\n                <!--<inquiry-component></inquiry-component>-->\r\n        </section>\r\n        <section id=\"reservation\" class=\"part\">\r\n                <reservation-banner-component></reservation-banner-component>\r\n                <reservation-component></reservation-component>\r\n        </section>\r\n    <!--<aside-component></aside-component>\r\n    <intro-component></intro-component>\r\n    <curriculum-component></curriculum-component>\r\n    <teacher-component [teachers]=\"teachers\" ></teacher-component>\r\n    \r\n    <payment-component [numberDesign]=\"design\"></payment-component>\r\n    <level-test-component [numberDesign]=\"design\"></level-test-component>\r\n    <contact-component [numberDesign]=\"design\"></contact-component>\r\n    <comment-component></comment-component>\r\n    <inquiry-component [numberDesign]=\"design\"></inquiry-component>\r\n    <reservation-component #reservation [numberDesign]=\"design\" ></reservation-component>-->\r\n</section>\r\n\r\n<footer-component></footer-component>\r\n<!--<pl-footer-component></pl-footer-component>-->\r\n<!--<kkang-footer-component></kkang-footer-component>-->\r\n"

/***/ }),
/* 489 */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\r\n<div class=\"copyright\"> \r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 logo-picture\" >\r\n                <img (click)=\"onClickPanelMenu('intro')\" src=\"/assets/img/kkang/f-logo.png\">\r\n            </div> \r\n            <div class=\"col-auto footer-content\">\r\n                <font>\r\n                    상호 온라인영어 대표자명 송재호 주소 경상남도 김해시 한림면 신천리 284<br>\r\n                    사업자등록번호 615-90-87907 통신판매신고번호 2008-경남김해-0051 <br>\r\n                    고객센터 070-7893-1741 이메일 thruthesky@gmail.com<br>\r\n                    업태 서비스 종목 온라인강의 개인정보관리책임자 송재호\r\n                </font>\r\n            </div>\r\n            <div class=\"col-md-2 btn-img\">\r\n                <img src=\"/assets/img/kkang/btn-to-top.png\" (click)=\"onClickPanelMenu('intro')\">\r\n            </div> \r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"copyright-content\">\r\n        ⓒ 2017 개발자를 위한 화상영어 / 위세너 화상영어 전문 기업 All Rights RESERVED.\r\n    </div>   \r\n</div>\r\n</footer>"

/***/ }),
/* 490 */
/***/ (function(module, exports) {

module.exports = "<header class=\"big\">\r\n    <nav class=\"navbar fixed-top\">\r\n        <div class=\"top\">\r\n            \r\n            <div class=\"menu\">\r\n                <div class=\"left-menu\">\r\n                    <span> <img src=\"assets/img/kkang/btn-fb.png\"> </span>\r\n                    <span> <img src=\"assets/img/kkang/btn-kakao.png\"> </span>\r\n                    <span> <img src=\"assets/img/kkang/btn-blog.png\"> </span>\r\n                    <span> <img src=\"assets/img/kkang/btn-info.png\"> </span>\r\n                </div>\r\n                \r\n                <div class=\"right-menu\">\r\n                    <div *ngIf=\"! user.logged \" class=\"button\" (click)=\"onClickRegister()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn1.png\"> </span>\r\n                    </div>\r\n                    <div *ngIf=\" ! user.logged \" class=\"button\" (click)=\"onClickLogin()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn2.png\"> </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickUpdateProfile()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn3.png\"> </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickLogout()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn1.png\"> </span>\r\n                    </div>\r\n                    <div class=\"button\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span> <img src=\"assets/img/kkang/top-btn3.png\"> </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--<div class=\"right-menu\">\r\n                    <div *ngIf=\"! user.logged \" class=\"button\" (click)=\"onClickRegister()\">\r\n                        <span class=\"text\"> Register </span> \r\n                    </div>\r\n                    <div *ngIf=\" ! user.logged \" class=\"button\" (click)=\"onClickLogin()\">\r\n                        <span class=\"text\"> Login </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickUpdateProfile()\">\r\n                        <span class=\"text\"> Profile </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickLogout()\">\r\n                        <span class=\"text\">Logout</span>\r\n                    </div>\r\n                    <div class=\"button\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span class=\"text\">Help </span>\r\n                    </div>\r\n                </div>-->\r\n            </div>\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <div class=\"bottom-container\">\r\n                <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n                    <img src=\"assets/img/kkang-logo.png\">\r\n                </div>\r\n                <div class=\"panel\" [class.active]=\"this.more\">\r\n                    <ul class=\"menus\">\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn1.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn2.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn3.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn4.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn5.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn1.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn2.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn3.png\"> </span>\r\n                        </li>\r\n                    </ul>\r\n                    <!--<ul class=\"menus\">\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                            <span class=\"text\">Course</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                            <span class=\"text\">Teacher</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                            <span class=\"text\">Payment</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                            <span class=\"text\">LevelTest</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                            <span class=\"text\">Contact</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                            <span class=\"text\">Comment</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                            <span class=\"text\">Inquiry</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                            <span class=\"text\">Class</span>\r\n                        </li>\r\n                    </ul>-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<!--\r\n<header class=\"big\">\r\n    <nav class=\"navbar fixed-top\">\r\n        <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\" >\r\n            <img src=\"assets/img/logo.png\">\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <div class=\"top-menu\">\r\n                <ul>\r\n                    <li *ngIf=\"! user.logged\" class=\"menu\" (click)=\"onClickRegister()\">Register</li>\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickUpdateProfile()\">Profile</li>\r\n                    \r\n                    <li *ngIf=\" ! user.logged \" class=\"menu\" (click)=\"onClickLogin()\">Login</li>\r\n\r\n                    <li *ngIf=\"user.logged\" class=\"menu\" (click)=\"onClickGotoClassRoom()\">Class Room</li>\r\n\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickLogout()\">\r\n                        Logout\r\n                    </li>\r\n                    <li class=\"menu\" (click)=\"onClickPanelMenu('contact')\"> Help</li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"menus\">\r\n                <ul >\r\n                   \r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-book fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Course</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-user-circle-o fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Teacher</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-money fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Payment</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-video-camera fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>LevelTest</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-phone fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Contact</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-comments fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Comment</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-info-circle fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Inquiry</font>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-calendar fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <font>Class </font>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>-->\r\n"

/***/ }),
/* 491 */
/***/ (function(module, exports) {

module.exports = "<header class=\"small\">\r\n    <nav class=\"navbar fixed-top\">\r\n        <div class=\"top\">\r\n            <div class=\"menu\">\r\n                <div class=\"left-menu\">\r\n                    <span> <img src=\"assets/img/kkang/btn-fb.png\"> </span>\r\n                    <span> <img src=\"assets/img/kkang/btn-kakao.png\"> </span>\r\n                    <span> <img src=\"assets/img/kkang/btn-blog.png\"> </span>\r\n                    <span> <img src=\"assets/img/kkang/btn-info.png\"> </span>\r\n                </div>\r\n                <div class=\"right-menu\">\r\n                    <div *ngIf=\"! user.logged \" class=\"button\" (click)=\"onClickRegister()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn1.png\"> </span>\r\n                    </div>\r\n                    <div *ngIf=\" ! user.logged \" class=\"button\" (click)=\"onClickLogin()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn2.png\"> </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickUpdateProfile()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn3.png\"> </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickLogout()\">\r\n                        <span> <img src=\"assets/img/kkang/top-btn1.png\"> </span>\r\n                    </div>\r\n                    <div class=\"button\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span> <img src=\"assets/img/kkang/top-btn3.png\"> </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <!--<div class=\"right-menu\">\r\n                    <div *ngIf=\"! user.logged \" class=\"button\" (click)=\"onClickRegister()\">\r\n                        <span class=\"text\"> Register </span> \r\n                    </div>\r\n                    <div *ngIf=\" ! user.logged \" class=\"button\" (click)=\"onClickLogin()\">\r\n                        <span class=\"text\"> Login </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickUpdateProfile()\">\r\n                        <span class=\"text\"> Profile </span>\r\n                    </div>\r\n                    <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickLogout()\">\r\n                        <span class=\"text\">Logout</span>\r\n                    </div>\r\n                    <div class=\"button\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span class=\"text\">Help </span>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n                <img src=\"assets/img/kkang-logo.png\">\r\n            </div>\r\n            \r\n            <div class=\"button\" (click)=\"onClickMoreMenu()\"> \r\n                <i class=\"icon fa fa-bars\" ></i>\r\n            </div>\r\n            <div class=\"panel\" [class.active]=\"this.more\">\r\n                <ul class=\"menus\">\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn1.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn2.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn3.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn4.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn5.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn1.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn2.png\"> </span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                            <span> <img src=\"assets/img/kkang/bot-btn3.png\"> </span>\r\n                        </li>\r\n                    </ul>\r\n                <!--<ul class=\"menus\">\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='intro' \" (click)=\"onClickPanelMenu('intro')\">\r\n                        <span class=\"text\">Home</span>\r\n                        \r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <span class=\"text\">Courses</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"text\">Teachers</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"text\">Payment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"text\">Level Test</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"text\">Contact</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"text\">Comment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"text\">Inquiry</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"text\">Reservations </span>\r\n                    </li>\r\n                </ul>-->\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<!--<header class=\"small\">\r\n    <nav class=\"navbar fixed-top\">    \r\n        <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n            <img src=\"assets/img/preloader.png\">\r\n        </div>\r\n        asdasdasd\r\n        <div class=\"bottom\">\r\n            <div class=\"menu\">\r\n                <ul>\r\n                    <li class=\"menu more\">\r\n                        <i class=\"icon fa fa-bars\" (click)=\"onClickMoreMenu()\"></i>\r\n                    </li>\r\n                    <li *ngIf=\"! user.logged \" class=\"menu register\" (click)=\"onClickRegister()\">\r\n                        <span class=\"text\"> Register </span> \r\n                    </li>\r\n                    <li *ngIf=\" user.logged \" class=\"menu profile\" (click)=\"onClickUpdateProfile()\">\r\n                        <span class=\"text\"> Profile </span>\r\n                    </li>\r\n\r\n                    <li *ngIf=\" ! user.logged \" class=\"menu\" (click)=\"onClickLogin()\">\r\n                        <span class=\"text\"> Login </span>\r\n                    </li>\r\n\r\n\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickLogout()\">\r\n                        <span class=\"text\">Logout</span>\r\n                    </li>\r\n                    \r\n                    <li class=\"menu\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span class=\"text\">Help </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"panel\" [class.active]=\"this.more\">\r\n                <ul class=\"menus\">\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='intro' \" (click)=\"onClickPanelMenu('intro')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-headphones fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Home</span>\r\n                        \r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-book fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Courses</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-user-circle-o fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Teachers</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-money fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Payment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-video-camera fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Level Test</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-phone fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Contact</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-comments fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Comment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-info-circle fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Inquiry</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-calendar fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Reservations </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>-->\r\n"

/***/ }),
/* 492 */
/***/ (function(module, exports) {

module.exports = "<kkang-small-header-component  *ngIf=\" app.widthSize == 'small' \" [login]=\"login\"\r\n                         (logout)=\"onClickLogout()\"\r\n                         (onLogin)=\"onClickLogin()\"\r\n                         (register)=\"onClickRegister()\"\r\n                         (profile)=\"onClickUpdateProfile()\"\r\n                         (classroom)=\"onClickGotoClassRoom()\"\r\n></kkang-small-header-component>\r\n<kkang-big-header-component *ngIf=\" app.widthSize == 'big' \" [login]=\"login\"\r\n                      (logout)=\"onClickLogout()\"\r\n                      (onLogin)=\"onClickLogin()\"\r\n                      (register)=\"onClickRegister()\"\r\n                      (profile)=\"onClickUpdateProfile()\"\r\n                      (classroom)=\"onClickGotoClassRoom()\"\r\n></kkang-big-header-component>\r\n\r\n"

/***/ }),
/* 493 */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\r\n    <div class=\"footer-container\">\r\n        <div class=\"row footer-row\">\r\n            <div class=\"col-md-4 info\">\r\n                <div class=\"title\">\r\n                    About Us.\r\n                </div>\r\n                <div class=\"desc\">\r\n                    위세너는 2006년 필리핀에 화상영어 교육 콜센터를 설립하여 국내의 여러 평생 교육기관과 학원 등에 영어 강사를 공급하고 있으며 여러분들의 영어 인생을 책임질 든든한 파트너가 되어드릴것입니다.\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-5 info\">\r\n                <div class=\"title\">\r\n                    Contact.\r\n                </div>\r\n                <div class=\"desc\">\r\n                    경상남도 김해시 한림면 신천리 284<br/>\r\n                    Email : thruthesky@gmail.com<br/>\r\n                    카카오톡 : thruthesky2<br/>\r\n                    TEL : 070-7893-1741\r\n                     \r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2 info\">\r\n                <div class=\"title\">\r\n                    Menu links\r\n                </div>\r\n                <div class=\"desc\">\r\n                    <div class=\"button\">\r\n                        <span (click)=\"onClickPanelMenu('level-test')\">Level Test</span>\r\n                    </div>\r\n                    <div class=\"button\">\r\n                        <span (click)=\"onClickPanelMenu('payment')\">Payment</span>\r\n                    </div>\r\n                    <div class=\"button\">\r\n                        <span (click)=\"onClickPanelMenu('inquiry')\">Inquiry</span>\r\n                    </div>\r\n                    <div class=\"button\">\r\n                        <span (click)=\"onClickPanelMenu('reservation')\">Class</span>\r\n                    </div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"copyright\">\r\n            ⓒ 2017 개발자를 위한 화상영어 / 위세너 화상영어 전문 기업 All Rights RESERVED.\r\n        </div>   \r\n    </div>\r\n</footer>\r\n<!--<footer id=\"footer\">\r\n    <div class=\"copyright\"> \r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-around\">\r\n                <div class=\"col-auto logo-picture\">\r\n                    <img src=\"/assets/img/logo.png\">\r\n                </div> \r\n                <div class=\"col-auto footer-content\">\r\n                    <font>\r\n                        상호 <b>온라인영어</b> 대표자명 <b>송재호</b> 주소 <b>경상남도 김해시 한림면 신천리 284</b><br>\r\n                        사업자등록번호 <b>615-90-87907</b> 통신판매신고번호 <b>2008-경남김해-0051</b> <br>\r\n                        고객센터<b>070-7893-1741</b> 이메일 <b>thruthesky@gmail.com</b><br>\r\n                        업태 <b>서비스</b> 종목 <b>온라인강의</b> 개인정보관리책임자 <b>송재호</b>\r\n                    </font>\r\n                </div>\r\n            </div>   \r\n        </div>\r\n    </div>\r\n</footer>-->"

/***/ }),
/* 494 */
/***/ (function(module, exports) {

module.exports = "<header class=\"big\">\r\n    <nav class=\"navbar fixed-top\">\r\n        <div class=\"top\">\r\n            <div class=\"menu\">\r\n                <div *ngIf=\"! user.logged \" class=\"button\" (click)=\"onClickRegister()\">\r\n                    <span class=\"text\"> Register </span> \r\n                </div>\r\n                <div *ngIf=\" ! user.logged \" class=\"button\" (click)=\"onClickLogin()\">\r\n                    <span class=\"text\"> Login </span>\r\n                </div>\r\n                <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickUpdateProfile()\">\r\n                    <span class=\"text\"> Profile </span>\r\n                </div>\r\n                <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickLogout()\">\r\n                    <span class=\"text\">Logout</span>\r\n                </div>\r\n                <div class=\"button\" (click)=\"onClickPanelMenu('contact')\"> \r\n                    <span class=\"text\">Help </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <div class=\"bottom-container\">\r\n                <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n                    <img src=\"assets/img/logo.png\">\r\n                </div>\r\n                <div class=\"panel\" [class.active]=\"this.more\">\r\n                    <ul class=\"menus\">\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                            <span class=\"text\">Course</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                            <span class=\"text\">Teacher</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                            <span class=\"text\">Payment</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                            <span class=\"text\">LevelTest</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                            <span class=\"text\">Contact</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                            <span class=\"text\">Comment</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                            <span class=\"text\">Inquiry</span>\r\n                        </li>\r\n                        <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                            <span class=\"text\">Class</span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n"

/***/ }),
/* 495 */
/***/ (function(module, exports) {

module.exports = "<header class=\"small\">\r\n    <nav class=\"navbar fixed-top\">\r\n        <div class=\"top\">\r\n            <div class=\"menu\">\r\n                <div *ngIf=\"! user.logged \" class=\"button\" (click)=\"onClickRegister()\">\r\n                    <span class=\"text\"> Register </span> \r\n                </div>\r\n                <div *ngIf=\" ! user.logged \" class=\"button\" (click)=\"onClickLogin()\">\r\n                    <span class=\"text\"> Login </span>\r\n                </div>\r\n                <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickUpdateProfile()\">\r\n                    <span class=\"text\"> Profile </span>\r\n                </div>\r\n                <div *ngIf=\" user.logged \" class=\"button\" (click)=\"onClickLogout()\">\r\n                    <span class=\"text\">Logout</span>\r\n                </div>\r\n                <div class=\"button\" (click)=\"onClickPanelMenu('contact')\"> \r\n                    <span class=\"text\">Help </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"bottom\">\r\n            <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n                <img src=\"assets/img/logo.png\">\r\n            </div>\r\n            \r\n            <div class=\"button\" (click)=\"onClickMoreMenu()\"> \r\n                <i class=\"icon fa fa-bars\" ></i>\r\n            </div>\r\n            <div class=\"panel\" [class.active]=\"this.more\">\r\n                <ul class=\"menus\">\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='intro' \" (click)=\"onClickPanelMenu('intro')\">\r\n                        <span class=\"text\">Home</span>\r\n                        \r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <span class=\"text\">Courses</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"text\">Teachers</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"text\">Payment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"text\">Level Test</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"text\">Contact</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"text\">Comment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"text\">Inquiry</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"text\">Reservations </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>\r\n<!--<header class=\"small\">\r\n    <nav class=\"navbar fixed-top\">    \r\n        <div class=\"logo\" (click)=\"onClickPanelMenu('intro')\">\r\n            <img src=\"assets/img/preloader.png\">\r\n        </div>\r\n        asdasdasd\r\n        <div class=\"bottom\">\r\n            <div class=\"menu\">\r\n                <ul>\r\n                    <li class=\"menu more\">\r\n                        <i class=\"icon fa fa-bars\" (click)=\"onClickMoreMenu()\"></i>\r\n                    </li>\r\n                    <li *ngIf=\"! user.logged \" class=\"menu register\" (click)=\"onClickRegister()\">\r\n                        <span class=\"text\"> Register </span> \r\n                    </li>\r\n                    <li *ngIf=\" user.logged \" class=\"menu profile\" (click)=\"onClickUpdateProfile()\">\r\n                        <span class=\"text\"> Profile </span>\r\n                    </li>\r\n\r\n                    <li *ngIf=\" ! user.logged \" class=\"menu\" (click)=\"onClickLogin()\">\r\n                        <span class=\"text\"> Login </span>\r\n                    </li>\r\n\r\n\r\n                    <li *ngIf=\" user.logged \" class=\"menu\" (click)=\"onClickLogout()\">\r\n                        <span class=\"text\">Logout</span>\r\n                    </li>\r\n                    \r\n                    <li class=\"menu\" (click)=\"onClickPanelMenu('contact')\"> \r\n                        <span class=\"text\">Help </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"panel\" [class.active]=\"this.more\">\r\n                <ul class=\"menus\">\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='intro' \" (click)=\"onClickPanelMenu('intro')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-headphones fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Home</span>\r\n                        \r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='curriculum' \" (click)=\"onClickPanelMenu('curriculum')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-book fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Courses</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='teacher' \" (click)=\"onClickPanelMenu('teacher')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-user-circle-o fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Teachers</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='payment' \" (click)=\"onClickPanelMenu('payment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-money fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Payment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='level-test' \" (click)=\"onClickPanelMenu('level-test')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-video-camera fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Level Test</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='contact' \" (click)=\"onClickPanelMenu('contact')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-phone fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Contact</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='comment' \" (click)=\"onClickPanelMenu('comment')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-comments fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Comment</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='inquiry' \" (click)=\"onClickPanelMenu('inquiry')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-info-circle fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Inquiry</span>\r\n                    </li>\r\n                    <li class=\"menu\" [class.active]=\" app.scrollId =='reservation' \" (click)=\"onClickPanelMenu('reservation')\">\r\n                        <span class=\"menu-img fa-stack fa-lg\">\r\n                            <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                            <i class=\"fa fa-calendar fa-stack-1x fa-inverse fa-fw\"></i>\r\n                        </span> <span class=\"text\">Reservations </span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>-->\r\n"

/***/ }),
/* 496 */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <pl-small-header-component  *ngIf=\" app.widthSize == 'small' \" [login]=\"login\"\r\n                            (logout)=\"onClickLogout()\"\r\n                            (onLogin)=\"onClickLogin()\"\r\n                            (register)=\"onClickRegister()\"\r\n                            (profile)=\"onClickUpdateProfile()\"\r\n                            (classroom)=\"onClickGotoClassRoom()\"\r\n    ></pl-small-header-component>\r\n    <pl-big-header-component *ngIf=\" app.widthSize == 'big' \" [login]=\"login\"\r\n                        (logout)=\"onClickLogout()\"\r\n                        (onLogin)=\"onClickLogin()\"\r\n                        (register)=\"onClickRegister()\"\r\n                        (profile)=\"onClickUpdateProfile()\"\r\n                        (classroom)=\"onClickGotoClassRoom()\"\r\n    ></pl-big-header-component>\r\n    "

/***/ }),
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);


/***/ })
],[754]);
//# sourceMappingURL=main.bundle.js.map