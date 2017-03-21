webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.lock = new Auth0Lock('VCXvSxG9D9fIDwF7Ak9W88S236aXdcyA', 'wojryba.eu.auth0.com', {});
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        this.router.navigate([""]);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 339;


/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(465);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(531),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_mypolls_mypolls_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_newpoll_newpoll_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_poll_poll_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_redirect_redirect_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_dropdown__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_fetch_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_store_data_service__ = __webpack_require__(88);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'newPoll', component: __WEBPACK_IMPORTED_MODULE_10__components_newpoll_newpoll_component__["a" /* NewpollComponent */] },
    { path: 'myPolls', component: __WEBPACK_IMPORTED_MODULE_9__components_mypolls_mypolls_component__["a" /* MypollsComponent */] },
    { path: 'poll', component: __WEBPACK_IMPORTED_MODULE_12__components_poll_poll_component__["a" /* PollComponent */] },
    { path: 'r/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_redirect_redirect_component__["a" /* RedirectComponent */] }
];
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthConfig"]({}), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_mypolls_mypolls_component__["a" /* MypollsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_newpoll_newpoll_component__["a" /* NewpollComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_poll_poll_component__["a" /* PollComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_redirect_redirect_component__["a" /* RedirectComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_fetch_data_service__["a" /* FetchDataService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_store_data_service__["a" /* StoreDataService */], {
                    provide: __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_3__angular_http__["RequestOptions"]]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetch_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_data_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(dataService, router, auth, router1, data) {
        this.dataService = dataService;
        this.router = router;
        this.auth = auth;
        this.router1 = router1;
        this.data = data;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPolls();
    };
    HomeComponent.prototype.getPolls = function () {
        var _this = this;
        this.dataService.getAllPolls().subscribe(function (polls) { return _this.polls = polls; });
    };
    HomeComponent.prototype.onClick = function (i) {
        this.data.storage = this.polls[i];
        this.router1.navigate(["poll"]);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(532),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fetch_data_service__["a" /* FetchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_fetch_data_service__["a" /* FetchDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_data_service__["a" /* StoreDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_store_data_service__["a" /* StoreDataService */]) === 'function' && _e) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(533),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fetch_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_data_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypollsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MypollsComponent = (function () {
    function MypollsComponent(dataService, router, data) {
        this.dataService = dataService;
        this.router = router;
        this.data = data;
    }
    MypollsComponent.prototype.ngOnInit = function () {
        this.getUserPolls();
    };
    MypollsComponent.prototype.getUserPolls = function () {
        var _this = this;
        this.dataService.getUserPolls().subscribe(function (polls) { return _this.polls = polls; });
    };
    MypollsComponent.prototype.onClick = function (i) {
        this.data.storage = this.polls[i];
        console.log(this.data.storage);
        this.router.navigate(["poll"]);
    };
    MypollsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mypolls',
            template: __webpack_require__(534),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fetch_data_service__["a" /* FetchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_fetch_data_service__["a" /* FetchDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_store_data_service__["a" /* StoreDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_store_data_service__["a" /* StoreDataService */]) === 'function' && _c) || Object])
    ], MypollsComponent);
    return MypollsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=mypolls.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(535),
            styles: [__webpack_require__(523)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewpollComponent = (function () {
    function NewpollComponent(fb, dataService, router) {
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
    }
    NewpollComponent.prototype.ngOnInit = function () {
        this.poll = this.fb.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            options: this.fb.array([
                this.initOption()
            ])
        });
    };
    NewpollComponent.prototype.initOption = function () {
        return this.fb.group({
            option: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    NewpollComponent.prototype.addOption = function () {
        var control = this.poll.controls['options'];
        control.push(this.initOption());
    };
    NewpollComponent.prototype.removeOption = function (i) {
        // remove address from the list
        var control = this.poll.controls['options'];
        control.removeAt(i);
    };
    NewpollComponent.prototype.onSubmit = function () {
        var po = this.poll.value;
        this.dataService.postNewPoll(po).subscribe(function (response) { return console.log(response); }, // success
        function (// success
            error) { return console.log(error); }, // error
        function () { return console.log('completed'); } // complete
        );
        this.router.navigate(["myPolls"]);
    };
    NewpollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newpoll',
            template: __webpack_require__(536),
            styles: [__webpack_require__(524)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__["a" /* FetchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__["a" /* FetchDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NewpollComponent);
    return NewpollComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=newpoll.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_store_data_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(133);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PollComponent = (function () {
    function PollComponent(data, dataService, cdRef, router, fb, route, auth) {
        this.data = data;
        this.dataService = dataService;
        this.cdRef = cdRef;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.auth = auth;
        //poll storage and options
        this.poll = this.data.storage;
        this.options = this.data.storage.options;
        this.title = this.data.storage.title;
        this.id = this.data.storage['_id'];
        this.votes = [];
        this.titles = [];
        this.showAdd = false;
        this.showRemove = false;
        this.BU = "https://twitter.com/intent/tweet?url=http%3A%2F%2Flocalhost%3A4200%2Fr%2F" + this.id;
        // Doughnut chart
        this.doughnutChartLabels = this.titles;
        this.doughnutChartData = this.votes;
        this.doughnutChartType = 'doughnut';
    }
    PollComponent.prototype.ngOnInit = function () {
        this.getVotes();
        this.getTitles();
        this.removeOption();
        this.form = this.fb.group({
            option: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* Validators */].required]
        });
    };
    PollComponent.prototype.getVotes = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            var v = option.votes;
            this.votes.push(v);
        }
        ;
    };
    ;
    PollComponent.prototype.getTitles = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            var o = option.option;
            this.titles.push(o);
        }
    };
    PollComponent.prototype.updateVotes = function () {
        this.votes = [];
        this.getVotes();
    };
    PollComponent.prototype.onClick = function (i) {
        this.poll.options[i].votes = this.poll.options[i].votes + 1;
        var po = this.poll;
        this.dataService.postVotes(po).subscribe(function (response) { return console.log(response); }, // success
        function (// success
            error) { return console.log(error); }, // error
        function () { return console.log('completed'); } // complete
        );
        this.router.navigate(['r', this.id]);
    };
    //function on remobe button, deletes poll form database
    PollComponent.prototype.removePoll = function () {
        var po = this.poll;
        this.dataService.remove(po).subscribe(function (response) { return console.log(response); }, // success
        function (// success
            error) { return console.log(error); }, // error
        function () { return console.log('completed'); } // complete
        );
        this.router.navigate(['myPolls']);
    };
    //check if current user is the one that created option
    //if it is display remove button
    PollComponent.prototype.removeOption = function () {
        var _this = this;
        var po = this.poll;
        this.dataService.removeOption(po).subscribe(function (response) {
            if (response['_body'] == "show") {
                _this.showRemove = true;
            }
        }, // success
        function (// success
            error) { return console.log(error); }, // error
        function () { return console.log('completed'); } // complete
        );
    };
    //add another option to the poll
    PollComponent.prototype.onSubmit = function () {
        var o = this.form.value;
        o.votes = 1;
        this.poll.options.push(o);
        var po = this.poll;
        this.dataService.postVotes(po).subscribe(function (response) { return console.log(response); }, // success
        function (// success
            error) { return console.log(error); }, // error
        function () { return console.log('completed'); } // complete
        );
        this.router.navigate(['r', this.id]);
    };
    //redirect to tweet website
    PollComponent.prototype.tweet = function () {
        window.location.href = this.BU;
    };
    PollComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PollComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PollComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-poll',
            template: __webpack_require__(537),
            styles: [__webpack_require__(525)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_store_data_service__["a" /* StoreDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_store_data_service__["a" /* StoreDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__["a" /* FetchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__["a" /* FetchDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormBuilder */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === 'function' && _g) || Object])
    ], PollComponent);
    return PollComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=poll.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_store_data_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedirectComponent = (function () {
    function RedirectComponent(data, dataService, router, route) {
        this.data = data;
        this.dataService = dataService;
        this.router = router;
        this.route = route;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.dataService.getThisPoll(this.id).subscribe(function (response) {
            _this.po = JSON.parse(response['_body']);
            _this.data.storage = _this.po;
        }, // success
        function (// success
            error) { return console.log(error); }, // error
        function () { return _this.router.navigate(["poll"]); });
    };
    RedirectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__(538),
            styles: [__webpack_require__(526)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_store_data_service__["a" /* StoreDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_store_data_service__["a" /* StoreDataService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__["a" /* FetchDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_fetch_data_service__["a" /* FetchDataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], RedirectComponent);
    return RedirectComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=redirect.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "#navbar{\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "h2{\r\n  text-align: center;\r\n}\r\n@media (min-width: 768px){\r\n  .form-control {\r\n    width: 150%;\r\n  }\r\n}\r\n\r\n.leftContainer {\r\n  text-align: left;\r\n  margin-left: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".options h2, h4 {\r\n  text-align: left;\r\n}\r\n\r\n\r\n.dropdown-menu {\r\n  width: 100%;\r\n  font-size: 14px;\r\n}\r\n\r\n.form-control {\r\n  text-align: center;\r\n}\r\n\r\n.btn {\r\n  width: 80%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <div>\n    <h1>This is FCC Voting App</h1>\n    <h4>Below you can see polls hosted by the app.</h4>\n    <h4>You can select a pool to see results and vote.</h4>\n  </div>\n\n\n\n\n  <div class=\"polls\"  *ngFor=\"let poll of polls, let i = index\">\n    <div >\n      <button class=\"allPolls\" (click)=\"onClick(i)\">{{poll.title}}</button>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<h3>Below you can see polls that you have created.</h3>\n<h4>You can select a poll to see results, or to delete it.</h4>\n<h4>If you want, you can always</h4><a [routerLink]=\"['/newPoll']\">create new poll.</a>\n<div class=\"polls\"  *ngFor=\"let poll of polls, let i = index\">\n  <div >\n    <button class=\"allPolls\" (click)=\"onClick(i)\">{{poll.title}}</button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Voting App</a>\n    </div>\n    <div id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a  [routerLink]=\"['/']\">Home</a></li>\n        <li *ngIf=\"auth.authenticated()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/myPolls']\">My Polls</a></li>\n        <li *ngIf=\"auth.authenticated()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/newPoll']\">New Poll</a></li>\n      </ul>\n      <div class=\"nav navbar-nav navbar-right\">\n        <button class=\"btn btn-primary btn-margin\" (click)=\"auth.login()\" *ngIf=\"!auth.authenticated()\">Log In</button>\n        <button class=\"btn btn-primary btn-margin\" (click)=\"auth.logout()\" *ngIf=\"auth.authenticated()\">Log Out</button>\n      </div>\n\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<h2>Add a new Poll</h2>\n\n<div class=\"rightContainer\">\n  <h3>Here you can add a new Poll.</h3>\n  <br>\n  <h4>You must fill in the title, and add at least one option.</h4>\n  <h4>To add another option click the add another option button.</h4>\n  <h4>You can add as many options as you like.</h4>\n  <h4>To remove option click the remove option button.</h4>\n\n</div>\n\n<div class=\"leftContainer\">\n      <form novalidate (ngSubmit)=\"onSubmit(poll)\" [formGroup]=\"poll\">\n\n\n        <label >\n          <span class=\"inputLabel\">Title:</span>\n          <input class=\"form-control\" type=\"text\" formControlName=\"title\">\n        </label>\n        <div class=\"error\" *ngIf=\"poll.get('title').hasError('required') && poll.get('title').touched\">\n          Title and at least one option are required\n        </div>\n\n        <div formArrayName=\"options\">\n        <div *ngFor=\"let option of poll.controls.options.controls; let i=index\">\n\n           <!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\n           <div [formGroupName]=\"i\">\n             <label>\n               <span class=\"inputLabel\">Option:</span>\n               <input class=\"form-control\" type=\"text\" formControlName=\"option\">\n             </label>\n           </div>\n\n           <!-- add remove button -->\n           <div>\n                <button class=\"btn btn-default\" *ngIf=\"poll.controls.options.controls.length > 1\"\n                    (click)=\"removeOption(i)\"> Remove Option\n                </button>\n            </div>\n         </div>\n      </div>\n\n      <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"poll.invalid\">Submit</button>\n\n    </form>\n    <!--add add button-->\n    <button class=\"btn btn-default\" (click)=\"addOption()\">Add another option</button>\n  </div>\n"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "\n<div class=container>\n\n  <div class=\"chart\">\n      <canvas baseChart\n              [data]=\"doughnutChartData\"\n              [labels]=\"doughnutChartLabels\"\n              [chartType]=\"doughnutChartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\">\n      </canvas>\n  </div>\n\n\n  <div class=\"options\">\n\n\n        <div class=\"form\">\n            <h2>{{title}}</h2>\n            <br>\n            <h4><strong>I'd like to vote for:</strong></h4>\n            <div class=\"dropdown\" dropdown>\n                <button class=\"form-control\" dropdown-open>Select Option</button>\n                <ul class=\"dropdown-menu\">\n                    <li class=\"form-control\" *ngFor=\"let option of options; let i = index\" (click)=\"onClick(i)\">{{option.option}}</li>\n                    <li class=\"form-control\" *ngIf=\"auth.authenticated()\" (click)=\"showAdd = true\">add another option</li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"showAdd\">\n              <form novalidate (ngSubmit)=onSubmit(form) [formGroup]=\"form\">\n                <label>\n                  <span class=\"inputLabel\">Option:</span>\n                  <input class=\"form-control\" type=\"text\" formControlName=\"option\">\n                </label>\n                <div class=\"error\" *ngIf=\"form.get('option').hasError('required') && form.get('option').touched\">\n                  You must input some option!\n                </div>\n                <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"form.invalid\">Add Option</button>\n              </form>\n            </div>\n        <br>\n        <a (click)=\"tweet()\"><h3>Share on Twitter</h3><i class=\"fa fa-twitter fa-5x\" aria-hidden=\"true\"></i></a>\n      </div>\n      <br>\n      <div>\n          <button class=\"btn btn-danger\" *ngIf=\"showRemove\" (click)=\"removePoll()\">Delete this poll.</button>\n      </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FetchDataService = (function () {
    function FetchDataService(_http, authHttp) {
        this._http = _http;
        this.authHttp = authHttp;
    }
    FetchDataService.prototype.getAllPolls = function () {
        return this._http.get('api/allPolls')
            .map(function (res) { return res.json(); });
    };
    FetchDataService.prototype.getUserPolls = function () {
        return this.authHttp.get('api/userPolls')
            .map(function (res) { return res.json(); });
    };
    FetchDataService.prototype.getThisPoll = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/thisPoll', encoded_data, options);
    };
    FetchDataService.prototype.postNewPoll = function (poll) {
        var encoded_data = JSON.stringify({ poll: poll });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/new', encoded_data, options);
    };
    FetchDataService.prototype.postVotes = function (poll) {
        var encoded_data = JSON.stringify({ poll: poll });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/vote', encoded_data, options);
    };
    FetchDataService.prototype.remove = function (poll) {
        var encoded_data = JSON.stringify({ poll: poll });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/remove', encoded_data, options);
    };
    FetchDataService.prototype.removeOption = function (poll) {
        var encoded_data = JSON.stringify({ poll: poll });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return this.authHttp.post('api/removeOption', encoded_data, options);
    };
    FetchDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === 'function' && _b) || Object])
    ], FetchDataService);
    return FetchDataService;
    var _a, _b;
}());
//# sourceMappingURL=fetch-data.service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoreDataService = (function () {
    function StoreDataService() {
    }
    StoreDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], StoreDataService);
    return StoreDataService;
}());
//# sourceMappingURL=store-data.service.js.map

/***/ })

},[559]);
//# sourceMappingURL=main.bundle.js.map