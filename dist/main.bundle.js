webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 144;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(30);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });



var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */],
        data: { title: 'Heroes List' }
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        pathMatch: 'full'
    },
];
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_managment_user_managment_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rides_managment_rides_managment_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__companies_managment_companies_managment_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_http_client__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_serve_socket_service__ = __webpack_require__(47);
/* unused harmony export httpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function httpFactory(backend, defaultOptions) {
    return new __WEBPACK_IMPORTED_MODULE_12__classes_http_client__["a" /* HttpClient */](backend, defaultOptions);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_managment_user_managment_component__["a" /* UserManagmentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__rides_managment_rides_managment_component__["a" /* RidesManagmentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__companies_managment_companies_managment_component__["a" /* CompaniesManagmentComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* appRoutes */])
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_12__classes_http_client__["a" /* HttpClient */],
                useFactory: httpFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]]
            },
            __WEBPACK_IMPORTED_MODULE_13__services_serve_socket_service__["a" /* WebSocketService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_company_stream_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesManagmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompaniesManagmentComponent = (function () {
    function CompaniesManagmentComponent(socket, router, fb) {
        this.socket = socket;
        this.router = router;
        this.fb = fb;
        this.companies = new Array();
        this.no_companies_to_approve = false;
        this.gotDataFromSocket = false;
        this.checkingCompany = null;
        this.checkingCompanyKeys = [];
    }
    CompaniesManagmentComponent.prototype.showCompany = function (company) {
        var _this = this;
        this.checkingCompany = company;
        Object.keys(company).forEach(function (key, index) {
            _this.checkingCompanyKeys.push(key);
        });
    };
    CompaniesManagmentComponent.prototype.confirmCompany = function (company) {
        var message = {
            timestamp: Date.now(),
            token: localStorage.getItem('auth_token'),
            event: 'approve company',
            data: { company_id: company.id }
        };
        this.socket.messages.next(message);
        this.setDefault();
    };
    CompaniesManagmentComponent.prototype.setDefault = function () {
        this.companies = [];
        this.checkingCompany = null;
        this.checkingCompanyKeys = [];
    };
    CompaniesManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.joinSocket();
        this.subscription = this.socket.messages.subscribe(function (msg) {
            _this.gotDataFromSocket = true;
            if (msg.data && msg.data.length > 0) {
                _this.no_companies_to_approve = false;
                var _loop_1 = function (i) {
                    var keys = [];
                    Object.keys(msg.data[i]).forEach(function (key, index) {
                        keys.push(key);
                    });
                    var exist = false;
                    for (var j = 0; j < _this.companies.length; j++) {
                        for (var j_1 = 0; j_1 < _this.companies.length; j_1++) {
                            if (_this.companies[j_1]['id'] == msg.data[i]['id']) {
                                exist = true;
                                var changed = false;
                                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                    var key = keys_1[_i];
                                    if (_this.companies[j_1][key] !== msg.data[i][key])
                                        changed = true;
                                }
                                if (changed)
                                    _this.companies[j_1] = msg.data[i];
                            }
                        }
                    }
                    if (!exist) {
                        _this.companies.push(msg.data[i]);
                    }
                };
                for (var i = 0; i < msg.data.length; i++) {
                    _loop_1(i);
                }
                console.log(_this.companies);
            }
            else if (msg.data && msg.data.length == 0) {
                _this.no_companies_to_approve = true;
            }
        }, function () {
            _this.gotDataFromSocket = false;
            _this.subscription.unsubscribe();
            _this.ngOnInit();
        }, function () {
            _this.gotDataFromSocket = false;
            _this.subscription.unsubscribe();
            _this.ngOnInit();
        });
    };
    CompaniesManagmentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CompaniesManagmentComponent;
}());
CompaniesManagmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-companies-managment',
        template: __webpack_require__(220),
        styles: [__webpack_require__(214)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_company_stream_service__["a" /* CompanyStreamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_company_stream_service__["a" /* CompanyStreamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_company_stream_service__["a" /* CompanyStreamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], CompaniesManagmentComponent);

var _a, _b, _c;
//# sourceMappingURL=companies-managment.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ride_stream_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RidesManagmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RidesManagmentComponent = (function () {
    function RidesManagmentComponent(socket, router, fb) {
        this.socket = socket;
        this.router = router;
        this.fb = fb;
    }
    RidesManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.joinSocket();
        this.subscription = this.socket.messages.subscribe(function (msg) {
            console.log(msg);
        }, function () {
            _this.subscription.unsubscribe();
            _this.ngOnInit();
        }, function () {
            _this.subscription.unsubscribe();
            _this.ngOnInit();
        });
    };
    RidesManagmentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return RidesManagmentComponent;
}());
RidesManagmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-rides-managment',
        template: __webpack_require__(223),
        styles: [__webpack_require__(217)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_ride_stream_service__["a" /* RideStreamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_ride_stream_service__["a" /* RideStreamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_ride_stream_service__["a" /* RideStreamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], RidesManagmentComponent);

var _a, _b, _c;
//# sourceMappingURL=rides-managment.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyStreamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyStreamService = (function () {
    function CompanyStreamService(wsService) {
        this.wsService = wsService;
    }
    CompanyStreamService.prototype.joinSocket = function () {
        this.messages = this.wsService.connect(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].tornado_socket + '/companies/websocket')
            .map(function (response) {
            var data = JSON.parse(response.data);
            return {
                timestamp: Date.now(),
                token: data.token,
                event: data.event,
                data: data.message
            };
        });
    };
    return CompanyStreamService;
}());
CompanyStreamService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__["a" /* WebSocketService */]) === "function" && _a || Object])
], CompanyStreamService);

var _a;
//# sourceMappingURL=company-stream.service.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_http_client__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.loginUser = function (log, pass) {
        var data = JSON.stringify({
            'username': log,
            'password': pass,
        });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url + '/api/v1/auth', data).map(this.extractData).catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var token = res.headers.get('Authorization');
        return token || {};
    };
    LoginService.prototype.handleError = function (error) {
        var body = error.json() || '';
        var err = body.error || body;
        var errMsg = JSON.stringify({
            status_code: error.status,
            status_message: err
        });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RideStreamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RideStreamService = (function () {
    function RideStreamService(wsService) {
        this.wsService = wsService;
    }
    RideStreamService.prototype.joinSocket = function () {
        this.messages = this.wsService.connect(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].tornado_socket + '/rides/websocket')
            .map(function (response) {
            var data = JSON.parse(response.data);
            return {
                timestamp: Date.now(),
                token: data.token,
                event: data.event,
                data: data.message
            };
        });
    };
    return RideStreamService;
}());
RideStreamService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__["a" /* WebSocketService */]) === "function" && _a || Object])
], RideStreamService);

var _a;
//# sourceMappingURL=ride-stream.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_http_client__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserInfoService = (function () {
    function UserInfoService(http) {
        this.http = http;
    }
    UserInfoService.prototype.getUserData = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].url + '/api/v1/users/current').map(this.extractData).catch(this.handleError);
    };
    UserInfoService.prototype.extractData = function (res) {
        return res.json();
    };
    UserInfoService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return UserInfoService;
}());
UserInfoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__classes_http_client__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__classes_http_client__["a" /* HttpClient */]) === "function" && _a || Object])
], UserInfoService);

var _a;
//# sourceMappingURL=user-info.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStreamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserStreamService = (function () {
    function UserStreamService(wsService) {
        this.wsService = wsService;
    }
    UserStreamService.prototype.joinSocket = function () {
        this.messages = this.wsService.connect(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].tornado_socket + '/users/websocket')
            .map(function (response) {
            var data = JSON.parse(response.data);
            return {
                timestamp: Date.now(),
                token: data.token,
                event: data.event,
                data: data.message
            };
        });
    };
    return UserStreamService;
}());
UserStreamService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__["a" /* WebSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__serve_socket_service__["a" /* WebSocketService */]) === "function" && _a || Object])
], UserStreamService);

var _a;
//# sourceMappingURL=user-stream.service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_user__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_stream_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserManagmentComponent = (function () {
    function UserManagmentComponent(socket, router, fb) {
        this.socket = socket;
        this.router = router;
        this.fb = fb;
        this.editUserForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            role: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            credentials: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */]()
        });
        this.createUserForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            username: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            role: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */](),
            credentials: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormControl */]()
        });
        this.gotDataFromSocket = false;
        this.users = Array();
        this.detailed = null;
        this.detailed_before_changes = null;
        this.statuses = [
            { id: 11, name: "root_admin" },
            { id: 22, name: "admin_gett" },
            { id: 33, name: "manager_gett" },
            { id: 44, name: "dispatcher" },
            { id: 77, name: "super_user" },
        ];
        this.new_role = null;
        this.new_password = null;
        this.showPasswordChange = false;
        this.showNewPassword = false;
        this.username_exist = false;
        this.creatingNew = false;
        this.new_user = new __WEBPACK_IMPORTED_MODULE_1__classes_user__["a" /* User */](true, '', '', '');
        this.createForms();
    }
    UserManagmentComponent.prototype.test = function () {
        console.log(this.new_password);
    };
    UserManagmentComponent.prototype.checkIfUserModified = function () {
        if (this.detailed.role != this.detailed_before_changes.role
            || this.detailed.status != this.detailed_before_changes.status
            || this.detailed.credentials != this.detailed_before_changes.credentials
            || this.new_password) {
            return true;
        }
        else
            return false;
    };
    UserManagmentComponent.prototype.showEnteredPassword = function () {
        this.showNewPassword = true;
    };
    UserManagmentComponent.prototype.hideEnteredPassword = function () {
        this.showNewPassword = false;
    };
    UserManagmentComponent.prototype.show_hidePasswordChange = function () {
        this.showPasswordChange = !this.showPasswordChange;
    };
    UserManagmentComponent.prototype.showDetails = function (user) {
        this.detailed = user;
        this.detailed_before_changes = user;
        this.new_role = user.role;
    };
    ;
    UserManagmentComponent.prototype.saveDetails = function (user) {
        var message = {
            timestamp: Date.now(),
            token: localStorage.getItem('auth_token'),
            event: 'edit user',
            data: { changed_user: user, password: this.new_password }
        };
        console.log(message);
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].username == user.username) {
                this.users.slice(i, i);
                break;
            }
        }
        this.socket.messages.next(message);
        this.setDefault();
    };
    ;
    UserManagmentComponent.prototype.createUser = function (user) {
        var message = {
            timestamp: Date.now(),
            token: localStorage.getItem('auth_token'),
            event: 'user create',
            data: { created_user: user, password: this.new_password }
        };
        this.socket.messages.next(message);
        this.setDefault();
    };
    UserManagmentComponent.prototype.activateUser = function (user) {
        this.detailed.status = 1;
    };
    UserManagmentComponent.prototype.deactivateUser = function (user) {
        this.detailed.status = 0;
    };
    UserManagmentComponent.prototype.startCreatingNewUser = function () {
        this.creatingNew = !this.creatingNew;
    };
    UserManagmentComponent.prototype.checkIfUsernameExist = function (username) {
        var message = {
            timestamp: Date.now(),
            token: localStorage.getItem('auth_token'),
            event: 'username availability',
            data: { new_username: username }
        };
        this.socket.messages.next(message);
    };
    UserManagmentComponent.prototype.setDefault = function () {
        this.detailed = null;
        this.detailed_before_changes = null;
        this.creatingNew = false;
        this.new_user = new __WEBPACK_IMPORTED_MODULE_1__classes_user__["a" /* User */](true, '', '', '');
        this.new_role = null;
        this.new_password = null;
        this.showPasswordChange = false;
        this.showNewPassword = false;
    };
    UserManagmentComponent.prototype.createForms = function () {
        this.editUserForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(24)]],
            status: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            username: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(24)]],
            role: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            credentials: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
        this.createUserForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(24)]],
            status: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            username: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].maxLength(24)]],
            role: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            credentials: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    };
    UserManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.joinSocket();
        this.subscription = this.socket.messages.subscribe(function (msg) {
            console.log(msg);
            if (msg.event === 'token expired') {
                localStorage.removeItem('auth_token');
                _this.router.navigate(['/login']);
            }
            else if (msg.event === 'username availability') {
                if (msg.token)
                    localStorage.setItem('auth_token', msg.token);
                _this.username_exist = msg.data.username;
            }
            else if (msg.event === 'new users') {
                _this.gotDataFromSocket = true;
                if (msg.data.length > 0) {
                    for (var i = 0; i < msg.data.length; i++) {
                        var exist = false;
                        var tmp_user = new __WEBPACK_IMPORTED_MODULE_1__classes_user__["a" /* User */](msg.data[i]['status'], msg.data[i]['username'], msg.data[i]['role'], msg.data[i]['credentials']);
                        for (var j = 0; j < _this.users.length; j++) {
                            if (_this.users[j].username === tmp_user.username) {
                                exist = true;
                                if (_this.users[j].status !== tmp_user.status
                                    || _this.users[j].role !== tmp_user.role
                                    || _this.users[j].credentials !== tmp_user.credentials) {
                                    _this.users[j] = tmp_user;
                                }
                            }
                        }
                        if (!exist) {
                            _this.users.push(tmp_user);
                        }
                    }
                }
            }
        }, function () {
            _this.gotDataFromSocket = false;
            _this.subscription.unsubscribe();
            _this.ngOnInit();
        }, function () {
            _this.gotDataFromSocket = false;
            _this.subscription.unsubscribe();
            _this.ngOnInit();
        });
    };
    UserManagmentComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return UserManagmentComponent;
}());
UserManagmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-managment',
        template: __webpack_require__(224),
        styles: [__webpack_require__(218)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_stream_service__["a" /* UserStreamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_stream_service__["a" /* UserStreamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_stream_service__["a" /* UserStreamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], UserManagmentComponent);

var _a, _b, _c;
//# sourceMappingURL=user-managment.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "body{background: #eee url(http://subtlepatterns.com/patterns/sativa.png);}\r\nhtml,body{\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n\r\n.login-container{\r\n    position: relative;\r\n    width: 300px;\r\n    margin: 80px auto;\r\n    padding: 20px 40px 40px;\r\n    text-align: center;\r\n    background: #fff;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\n#output{\r\n    position: absolute;\r\n    width: 300px;\r\n    top: -75px;\r\n    left: 0;\r\n    color: #fff;\r\n}\r\n\r\n#output.alert-success{\r\n    background: rgb(25, 204, 25);\r\n}\r\n\r\n#output.alert-danger{\r\n    background: rgb(228, 105, 105);\r\n}\r\n\r\n\r\n.login-container::before,.login-container::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;height: 100%;\r\n    top: 3.5px;left: 0;\r\n    background: #fff;\r\n    z-index: -1;\r\n    -webkit-transform: rotateZ(4deg);\r\n    -moz-transform: rotateZ(4deg);\r\n    -ms-transform: rotateZ(4deg);\r\n    border: 1px solid #ccc;\r\n\r\n}\r\n\r\n.login-container::after{\r\n    top: 5px;\r\n    z-index: -2;\r\n    -webkit-transform: rotateZ(-2deg);\r\n     -moz-transform: rotateZ(-2deg);\r\n      -ms-transform: rotateZ(-2deg);\r\n\r\n}\r\n\r\n.avatar{\r\n    width: 100px;height: 100px;\r\n    margin: 10px auto 30px;\r\n    border-radius: 100%;\r\n    border: 2px solid #aaa;\r\n    background-size: cover;\r\n}\r\n\r\n.form-box input{\r\n    width: 100%;\r\n    padding: 10px;\r\n    text-align: center;\r\n    height:40px;\r\n    border: 1px solid #ccc;;\r\n    background: #fafafa;\r\n    transition:0.2s ease-in-out;\r\n\r\n}\r\n\r\n.form-box input:focus{\r\n    outline: 0;\r\n    background: #eee;\r\n}\r\n\r\n.form-box input[type=\"text\"]{\r\n    border-radius: 5px 5px 0 0;\r\n    text-transform: lowercase;\r\n}\r\n\r\n.form-box input[type=\"password\"]{\r\n    border-radius: 0 0 5px 5px;\r\n    border-top: 0;\r\n}\r\n\r\n.form-box button.login{\r\n    margin-top:15px;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.animated {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(20px);\r\n    transform: translateY(20px);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.fadeInUp {\r\n  -webkit-animation-name: fadeInUp;\r\n  animation-name: fadeInUp;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<!--<button routerLink=\"/\">Go to sidekicks</button> -->\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\" *ngIf=\"!gotDataFromSocket && !no_companies_to_approve\">\r\n    <span class=\"spinner page-center-block\"></span>\r\n</div>\r\n\r\n<div style=\"margin-top: 70px;\">\r\n  <div *ngIf=\"no_companies_to_approve\">\r\n    <div class=\"alert alert-warning\" role=\"alert\">\r\n      Nothing to approve.\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"checkingCompany\">\r\n    <div class=\"list-group-item\" *ngFor=\"let key of checkingCompanyKeys\">\r\n      <h4 class=\"list-group-item-heading\">{{key}}</h4>\r\n      <p class=\"list-group-item-text\">{{checkingCompany[key]}}</p>\r\n    </div>\r\n    <div>\r\n      <button class=\"btn btn-success\" (click)=\"confirmCompany(checkingCompany)\" style=\"width: 100%;\">Approve</button>\r\n      <button class=\"btn btn-primary\" (click)=\"setDefault()\" style=\"width: 100%;\">Back</button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"companies && companies.length > 0 && !checkingCompany\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <th>actions</th>\r\n    <th>form</th>\r\n    <th>name</th>\r\n    <th>create date</th>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let company of companies\">\r\n      <button class=\"btn btn-default\" (click)=\"showCompany(company)\">More</button>\r\n      <td>{{company.form}}</td>\r\n      <td>{{company.name}}</td>\r\n      <td>{{company.created_at}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\" *ngIf=\"!user\">\r\n    <span class=\"spinner page-center-block\"></span>\r\n</div>\r\n<div *ngIf=\"user && user.role == 11\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a href=\"#\" class=\"navbar-brand\" style=\"margin-top: 0px !important;\">Gett manage system</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-3\">\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"logOut()\">Log Out</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <p>Привет, {{ user.credentials }}</p>\r\n  <button (click)=\"logOut()\">Log Out</button>\r\n  <app-user-managment></app-user-managment>\r\n</div>\r\n<div *ngIf=\"user && user.role == 22\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a href=\"#\" class=\"navbar-brand\" style=\"margin-top: 0px !important;\">Gett manage system</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-3\">\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"logOut()\">Log Out</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <p>Привет, {{ user.credentials }}</p>\r\n  <button (click)=\"logOut()\">Log Out</button>\r\n  <app-user-managment></app-user-managment>\r\n</div>\r\n<div *ngIf=\"user && user.role == 33\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a href=\"#\" class=\"navbar-brand\" style=\"margin-top: 0px !important;\">Gett manage system</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-3\">\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"logOut()\">Log Out</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <p>Привет, {{ user.credentials }}</p>\r\n  <button (click)=\"logOut()\">Log Out</button>\r\n  <app-companies-managment></app-companies-managment>\r\n</div>\r\n<div *ngIf=\"user && user.role == 44\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a href=\"#\" class=\"navbar-brand\" style=\"margin-top: 0px !important;\">Gett manage system</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-3\">\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"logOut()\">Log Out</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <p>Привет, {{ user.credentials }}</p>\r\n  <button (click)=\"logOut()\">Log Out</button>\r\n  <app-rides-managment></app-rides-managment>\r\n</div>\r\n<div *ngIf=\"user && user.role == 77\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a href=\"#\" class=\"navbar-brand\" style=\"margin-top: 0px !important;\">Gett manage system</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-3\">\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"showUserManagment()\">User</button>\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"showRidesManagment()\">Rides</button>\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"showCompaniesManagment()\">Companies</button>\r\n        <button class=\"btn btn-default navbar-btn\" (click)=\"logOut()\">Log Out</button>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <app-user-managment *ngIf=\"users\"></app-user-managment>\r\n  <app-rides-managment *ngIf=\"rides\"></app-rides-managment>\r\n  <app-companies-managment *ngIf=\"companies\"></app-companies-managment>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div class=\"parent container\">\r\n  <div class=\"login-container\" >\r\n            <div id=\"output\"></div>\r\n            <div class=\"avatar\"></div>\r\n            <div class=\"form-box\">\r\n                <form [formGroup]=\"LoginUserForm\" novalidate>\r\n                    <input id=\"login\" type=\"text\" placeholder=\"username\" class=\"form-control\" formControlName=\"username\" [(ngModel)]=\"username\">\r\n                    <input id=\"password\" type=\"password\" placeholder=\"password\" class=\"form-control\" formControlName=\"password\" [(ngModel)]=\"password\">\r\n                    <div *ngIf=\"LoginUserForm.get('username').errors && (LoginUserForm.get('username').dirty || LoginUserForm.get('username').touched)\" class=\"alert alert-danger\">\r\n                      <div [hidden]=\"!LoginUserForm.get('username').errors.required\">\r\n                        Username is required.\r\n                      </div>\r\n                      <div [hidden]=\"!LoginUserForm.get('username').errors.minlength\">\r\n                        Username must be at least 4 characters long.\r\n                      </div>\r\n                      <div [hidden]=\"!LoginUserForm.get('username').errors.maxlength\">\r\n                        Username cannot be more than 24 characters long.\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"LoginUserForm.get('password').errors && (LoginUserForm.get('password').dirty || LoginUserForm.get('password').touched)\" class=\"alert alert-danger\">\r\n                      <div [hidden]=\"!LoginUserForm.get('password').errors.required\">\r\n                        Password is required.\r\n                      </div>\r\n                      <div [hidden]=\"!LoginUserForm.get('password').errors.minlength\">\r\n                        Password must be at least 4 characters long.\r\n                      </div>\r\n                      <div [hidden]=\"!LoginUserForm.get('password').errors.maxlength\">\r\n                        Password cannot be more than 24 characters long.\r\n                      </div>\r\n                    </div>\r\n                    <div *ngIf=\"failLogin !== ''\" class=\"alert alert-danger\">\r\n                      <div>\r\n                        {{ failLogin }}\r\n                      </div>\r\n                    </div>\r\n                    <button [disabled]=\"LoginUserForm.get('username').errors || LoginUserForm.get('password').errors || loginInProgress\" class=\"btn btn-info btn-block login\" (click)=\"login(login, password)\">Login</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n      <span class=\"spinner page-center-block\" *ngIf=\"loginInProgress\"></span>\r\n</div>\r\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 70px;\">\r\n  <p>\r\n    rides-managment works!\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\" *ngIf=\"!gotDataFromSocket\">\r\n    <span class=\"spinner page-center-block\"></span>\r\n</div>\r\n<div style=\"margin-top: 70px;\">\r\n  <form [formGroup]=\"editUserForm\" novalidate *ngIf=\"detailed\">\r\n  <h3>You are editing: {{detailed.username}}</h3>\r\n  <div class=\"form-group\">\r\n      <label class=\"center-block\">Status:\r\n        <select class=\"form-control\" formControlName=\"status\" [(ngModel)]=\"detailed.status\">\r\n          <option [value]=\"true\">Active</option>\r\n          <option [value]=\"false\">Disabled</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n  <div class=\"form-group\">\r\n      <label class=\"center-block\">Role:\r\n        <select class=\"form-control\" formControlName=\"role\" [(ngModel)]=\"detailed.role\">\r\n           <option *ngFor=\"let status of statuses\" value=\"{{status.id}}\">{{status.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"editUserForm.get('role').errors && (editUserForm.get('role').dirty || editUserForm.get('role').touched)\" class=\"alert alert-danger\">\r\n          <div [hidden]=\"!editUserForm.get('role').errors.required\">\r\n            Role is required.\r\n          </div>\r\n        </div>\r\n      </label>\r\n    </div>\r\n  <div class=\"form-group\">\r\n      <label class=\"center-block\">Credentials:\r\n        <input class=\"form-control\" formControlName=\"credentials\" [(ngModel)]=\"detailed.credentials\">\r\n      </label>\r\n  </div>\r\n  <div class=\"form-group\" *ngIf=\"showPasswordChange\">\r\n    <label class=\"center-block\">Set new password for login '{{detailed.username}}:</label>\r\n    <div class=\"input-group\">\r\n        <input class=\"form-control\" formControlName=\"password\" [attr.type]=\"showNewPassword ? 'text' : 'password'\" [(ngModel)]=\"new_password\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-default\" type=\"button\" (mousedown)=\"showEnteredPassword()\" (mouseup)=\"hideEnteredPassword()\" (mouseleave)=\"hideEnteredPassword()\">show</button>\r\n        </span>\r\n    </div>\r\n    <div *ngIf=\"editUserForm.get('password').errors && (editUserForm.get('password').dirty || editUserForm.get('password').touched)\" class=\"alert alert-danger\">\r\n        <div [hidden]=\"!editUserForm.get('password').errors.minlength\">\r\n            Password must be at least 4 characters long.\r\n        </div>\r\n        <div [hidden]=\"!editUserForm.get('password').errors.maxlength\">\r\n            Password cannot be more than 24 characters long.\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-default\" (click)=\"show_hidePasswordChange()\">Change password</button>\r\n  <button class=\"btn btn-default\" [disabled]=\"editUserForm.get('password').errors || editUserForm.get('status').errors || editUserForm.get('credentials').errors || editUserForm.get('role').errors || (editUserForm.get('password').pristine && editUserForm.get('status').pristine && editUserForm.get('credentials').pristine && editUserForm.get('role').pristine)\" (click)=\"saveDetails(detailed)\">Save</button>\r\n  <button class=\"btn btn-default\" (click)=\"setDefault()\">Back</button>\r\n</form>\r\n\r\n  <form  [formGroup]=\"createUserForm\" novalidate *ngIf=\"creatingNew\">\r\n    <div class=\"form-group\">\r\n      <label class=\"center-block\">Username:\r\n        <input name=\"name\" class=\"form-control\" formControlName=\"username\" [(ngModel)]=\"new_user.username\" (ngModelChange)=\"checkIfUsernameExist(new_user.username)\">\r\n      </label>\r\n      <div *ngIf=\"createUserForm.get('username').errors && (createUserForm.get('username').dirty || createUserForm.get('username').touched)\" class=\"alert alert-danger\">\r\n          <div [hidden]=\"!createUserForm.get('username').errors.required\">\r\n            Username is required.\r\n          </div>\r\n          <div [hidden]=\"!createUserForm.get('username').errors.minlength\">\r\n            Username must be at least 4 characters long.\r\n          </div>\r\n          <div [hidden]=\"!createUserForm.get('username').errors.maxlength\">\r\n            Username cannot be more than 24 characters long.\r\n          </div>\r\n        </div>\r\n      <div class=\"alert alert-danger\" [hidden]=\"!username_exist\">\r\n        Such username already exists.\r\n      </div>\r\n    </div>\r\n    <label class=\"center-block\">Password:</label>\r\n      <div class=\"input-group\">\r\n        <input class=\"form-control\" formControlName=\"password\" [attr.type]=\"showNewPassword ? 'text' : 'password'\" [(ngModel)]=\"new_password\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-default\" type=\"button\" (mousedown)=\"showEnteredPassword()\" (mouseup)=\"hideEnteredPassword()\" (mouseleave)=\"hideEnteredPassword()\">show</button>\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"createUserForm.get('password').errors && (createUserForm.get('password').dirty || createUserForm.get('password').touched)\" class=\"alert alert-danger\">\r\n          <div [hidden]=\"!createUserForm.get('password').errors.required\">\r\n            Password is required.\r\n          </div>\r\n          <div [hidden]=\"!createUserForm.get('password').errors.minlength\">\r\n            Password must be at least 4 characters long.\r\n          </div>\r\n          <div [hidden]=\"!createUserForm.get('password').errors.maxlength\">\r\n            Password cannot be more than 24 characters long.\r\n          </div>\r\n        </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"center-block\">Status:\r\n        <select class=\"form-control\" formControlName=\"status\" [(ngModel)]=\"new_user.status\">\r\n          <option [value]=\"true\">Active</option>\r\n          <option [value]=\"false\">Disabled</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"center-block\">Role:\r\n        <select class=\"form-control\" formControlName=\"role\" [(ngModel)]=\"new_user.role\">\r\n           <option *ngFor=\"let status of statuses\" value=\"{{status.id}}\">{{status.name}}</option>\r\n        </select>\r\n        <div *ngIf=\"createUserForm.get('role').errors && (createUserForm.get('role').dirty || createUserForm.get('role').touched)\" class=\"alert alert-danger\">\r\n          <div [hidden]=\"!createUserForm.get('role').errors.required\">\r\n            Role is required.\r\n          </div>\r\n        </div>\r\n      </label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"center-block\">Credentials:\r\n        <input class=\"form-control\" formControlName=\"credentials\" [(ngModel)]=\"new_user.credentials\">\r\n      </label>\r\n    </div>\r\n    <button class=\"btn btn-default\" [disabled]=\"createUserForm.get('username').errors || createUserForm.get('password').errors || createUserForm.get('status').errors || createUserForm.get('credentials').errors || createUserForm.get('role').errors || username_exist\" (click)=\"createUser(new_user)\">Create</button>\r\n    <button class=\"btn btn-default\" (click)=\"setDefault()\">Back</button>\r\n  </form>\r\n\r\n<div *ngIf=\"users && users.length > 0 && !detailed && !creatingNew\">\r\n  <button class=\"btn btn-default\" (click)=\"startCreatingNewUser()\">Create new user</button>\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <th>actions</th>\r\n    <th>status</th>\r\n    <th>username</th>\r\n    <th>role</th>\r\n    <th>credentials</th>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let user of users\">\r\n      <button class=\"btn btn-default\" (click)=\"showDetails(user)\">Edit</button>\r\n      <td>{{user.status}}</td>\r\n      <td>{{user.username}}</td>\r\n      <td>{{user.role}}</td>\r\n      <td>{{user.credentials}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    server_url: 'http://127.0.0.1',
    server_port: '27022',
    url: 'http://127.0.0.1:27022',
    tornado_socket: 'ws://127.0.0.1:27022'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebSocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function (url) {
        this.subject = this.create(url);
        return this.subject;
    };
    WebSocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            ws.onopen = function (evt) {
                ws.send(JSON.stringify({ token: localStorage.getItem('auth_token'), event: 'connected' }));
            };
            return ws.close.bind(ws);
        }).share();
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"].create(observer, observable);
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
], WebSocketService);

//# sourceMappingURL=serve-socket.service.js.map

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
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



var HttpClient = (function (_super) {
    __extends(HttpClient, _super);
    function HttpClient(backend, defaultOptions) {
        var _this = this;
        defaultOptions.headers.append('Access-Control-Allow-Origin', '*');
        _this = _super.call(this, backend, defaultOptions) || this;
        return _this;
    }
    HttpClient.prototype._setCustomHeaders = function (options) {
        if (!options) {
            options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({});
        }
        if (localStorage.getItem("auth_token")) {
            if (!options.headers) {
                options.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* Headers */]();
            }
            options.headers.set("Authorization", localStorage.getItem("auth_token"));
        }
        return options;
    };
    HttpClient.prototype.get = function (url, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.get.call(this, url, options);
    };
    HttpClient.prototype.post = function (url, data, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.post.call(this, url, data, options);
    };
    HttpClient.prototype.put = function (url, data, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.put.call(this, url, data, options);
    };
    HttpClient.prototype.delete = function (url, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.delete.call(this, url, options);
    };
    HttpClient.prototype.patch = function (url, data, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.patch.call(this, url, data, options);
    };
    HttpClient.prototype.head = function (url, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.head.call(this, url, options);
    };
    HttpClient.prototype.options = function (url, options) {
        options = this._setCustomHeaders(options);
        return _super.prototype.options.call(this, url, options);
    };
    return HttpClient;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* Http */]));
HttpClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object])
], HttpClient);

var _a, _b;
//# sourceMappingURL=http-client.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
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
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.token = localStorage.getItem('auth_token');
        if (!this.token) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['home']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(219),
        styles: [__webpack_require__(213)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(status, username, role, credentials) {
        this.status = status;
        this.username = username;
        this.role = role;
        this.credentials = credentials;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_info_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__(92);
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
    function HomeComponent(getUserDataService, router) {
        this.getUserDataService = getUserDataService;
        this.router = router;
        this.users = false;
        this.rides = false;
        this.companies = false;
    }
    HomeComponent.prototype.showUserManagment = function () {
        this.users = true;
        this.rides = false;
        this.companies = false;
    };
    HomeComponent.prototype.showRidesManagment = function () {
        this.users = false;
        this.rides = true;
        this.companies = false;
    };
    HomeComponent.prototype.showCompaniesManagment = function () {
        this.users = false;
        this.rides = false;
        this.companies = true;
    };
    HomeComponent.prototype.getUserData = function () {
        var _this = this;
        this.subscription = this.getUserDataService.getUserData().subscribe(function (data) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */](data['status'], data['username'], data['role'], data['credentials']);
            if (!_this.user.status)
                _this.router.navigate(['/login']);
        }, function (error) {
            _this.subscription.unsubscribe();
            _this.getUserData();
        });
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/']);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getUserData();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(221),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_user_info_service__["a" /* UserInfoService */]],
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_info_service__["a" /* UserInfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_info_service__["a" /* UserInfoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(29);
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
    function LoginComponent(loginService, router, fb) {
        this.loginService = loginService;
        this.router = router;
        this.fb = fb;
        this.failLogin = '';
        this.loginInProgress = false;
        this.LoginUserForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormControl */](),
        });
        this.createLoginForm();
    }
    LoginComponent.prototype.createLoginForm = function () {
        this.LoginUserForm = this.fb.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(24)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(24)]],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginInProgress = true;
        this.subscription = this.loginService.loginUser(this.username, this.password).subscribe(function (user_token) {
            _this.loginInProgress = false;
            if (user_token) {
                localStorage.setItem('auth_token', user_token);
                _this.router.navigate(['home']);
            }
        }, function (error) {
            _this.loginInProgress = false;
            var error_message = JSON.parse(error);
            switch (error_message.status_code) {
                case 403:
                    console.log();
                    if (error_message.status_message.message === 'No such username found') {
                        _this.failLogin = 'Such user is not registered.';
                    }
                    else if (error_message.status_message.message === 'Wrong password') {
                        _this.failLogin = 'Wrong credentials.';
                    }
                    else if (error_message.status_message.message === 'You must enter username and password') {
                        _this.failLogin = 'Username and password can\'t be empty.';
                    }
                    break;
                case 500:
                    _this.failLogin = 'Internal server error, sorry.';
                    break;
                default:
                    _this.failLogin = 'Server is under maintenance. \nPlease, try login later.';
                    break;
            }
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(222),
        styles: [__webpack_require__(216)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormBuilder */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ })

},[491]);
//# sourceMappingURL=main.bundle.js.map