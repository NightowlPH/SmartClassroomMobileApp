webpackJsonp([4],{

<<<<<<< HEAD
/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SpecroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecroomPage = /** @class */ (function () {
    function SpecroomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpecroomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecroomPage');
    };
    SpecroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specroom',template:/*ion-inline-start:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\specroom\specroom.html"*/'<div class="room1">\n\n\n\n    <ion-header>\n\n        <ion-navbar>\n\n            <ion-title>Room 1</ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n</div>'/*ion-inline-end:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\specroom\specroom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SpecroomPage);
    return SpecroomPage;
}());

//# sourceMappingURL=specroom.js.map

/***/ }),

/***/ 110:
=======
/***/ 113:
>>>>>>> e32fdf0e742b5bff4bf9e17be30726f4b80157e9
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		283,
		8
	],
	"../pages/room/room.module": [
		281,
		7
	],
	"../pages/specroom/specroom.module": [
		284,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_room__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    // @ViewChild (LoginPage) login: LoginPage;
    function HomePage(navCtrl, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.authenticationProvider = authenticationProvider;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // console.log(this.login.userAccount);
        console.log("did load");
        console.log("This is the home page");
        if (localStorage.getItem('token') == null) {
            console.log('There is no token');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__room_room__["a" /* RoomPage */]);
            // let data: object;
            // this.authenticationProvider.loginWithToken(data)
            // .subscribe(data => {
            //   console.log(data['token']);
            //   console.log(data['userType']);
            // 	if(data['token'] && data['userType']){					
            // 		if(data['userType'] == "Admin"){
            // 			console.log('Logged in as ADMIN');			
            // 			localStorage.setItem('token', data['token']);
            // 			this.navCtrl.push(RoomPage);
            // 		} else if(data['userType'] == "User"){
            // 			console.log('Logged in as USER');				
            // 			localStorage.setItem('token', data['token']);
            // 			this.navCtrl.push(RoomPage);
            // 		}														
            // 	}
            // })
        }
        // if(localStorage.getItem('token')){
        // 	let data: object;
        // 	this.loginProvider.loginWithToken(data)
        // 	.subscribe( data => { 	 			
        // 		if(data['token'] && data['userType']){										
        // 			if(data['userType'] == "Admin"){
        // 				console.log('Logged in as ADMIN');			
        // 				// localStorage.setItem('token', data['token']);
        // 				this.navCtrl.push(RoomPage);
        // 			} else if(data['userType'] == "User"){
        // 				console.log('Logged in as USER');				
        // 				// localStorage.setItem('token', data['token']);
        // 				this.navCtrl.push(RoomPage);
        // 			}														
        // 		} else{					
        // 			localStorage.removeItem('token');
        // 			console.log('No session');
        // 			this.navCtrl.push(LoginPage);
        // 		}
        // 	})
        // } else{
        //   localStorage.removeItem('token');
        //   console.log('No session');
        //   this.navCtrl.push(LoginPage);
        // }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\home\home.html"*/'<ion-content padding>\n\n    <page-login></page-login>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\home\home.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\pages\home\home.html"*/'<!-- <ion-content padding>\n\n    <page-login></page-login>\n\n</ion-content> -->'/*ion-inline-end:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\pages\home\home.html"*/
>>>>>>> e32fdf0e742b5bff4bf9e17be30726f4b80157e9
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

<<<<<<< HEAD
/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__room_room__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__room_room__["a" /* RoomPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\login\login.html"*/'<div class="login-box">\n\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-list inset>\n\n\n\n                    <div text-center>\n\n                        <ion-img width="200" height="196" src="/assets/imgs/nightowl-no-network.jpg"></ion-img>\n\n                    </div>\n\n\n\n                    <ion-title text-center>\n\n                        Smart Classroom Mobile App\n\n                    </ion-title>\n\n\n\n                    <br>\n\n\n\n                    <ion-item>\n\n                        <ion-label stacked class="my-label">Username</ion-label>\n\n                        <ion-input type="text"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label stacked class="my-label">Password</ion-label>\n\n                        <ion-input type="password"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <button ion-button (click)="login()">Login</button>\n\n\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </form>\n\n</div>'/*ion-inline-end:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 197:
=======
/***/ 202:
>>>>>>> e32fdf0e742b5bff4bf9e17be30726f4b80157e9
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_room_room__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Providers


//Pages



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_room_room__["a" /* RoomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/room/room.module#RoomPageModule', name: 'RoomPage', segment: 'room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/specroom/specroom.module#SpecroomPageModule', name: 'SpecroomPage', segment: 'specroom', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_room_room__["a" /* RoomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_authentication_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_8_ngx_cookie_service__["a" /* CookieService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, authenticationProvider) {
        this.authenticationProvider = authenticationProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        this.authenticationProvider.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\app\app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Menu</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n    <ion-content>\n\n        <ion-list>\n\n            <button ion-item>\n\n                Profile\n\n            </button>\n\n            <button ion-item (click)="logout()">\n\n                Logout\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>'/*ion-inline-end:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\app\app.html"*/
>>>>>>> e32fdf0e742b5bff4bf9e17be30726f4b80157e9
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(http) {
        this.http = http;
        this.apiUrl = "https://rfid.test.nightowl.foundationu.com/api";
        console.log('Hello LoginProvider Provider');
    }
    AuthenticationProvider.prototype.login = function (data) {
        return this.http.post(this.apiUrl + "/login", data);
    };
    AuthenticationProvider.prototype.loginWithToken = function (data) {
        return this.http.post(this.apiUrl + "/login", data, {
            headers: this.Headers()
        });
    };
    AuthenticationProvider.prototype.logout = function () {
        var data = { username: localStorage.getItem('username') };
        console.log(data);
        return this.http.post(this.apiUrl + "/logout", data, {
            headers: this.Headers()
        }).subscribe(function () {
            localStorage.clear();
        });
    };
    AuthenticationProvider.prototype.Headers = function () {
        if (localStorage.getItem('token') != null) {
            return new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('x-access-token', localStorage.getItem('token'));
        }
        else {
            console.log("token is missing");
            // this.router.navigate(['/login']);
        }
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoomPage = /** @class */ (function () {
    function RoomPage(navCtrl, navParams, menuCtrl, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authenticationProvider = authenticationProvider;
        this.menuCtrl.enable(true, 'myMenu'); //enables sidemenu
    }
    RoomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoomPage');
    };
    RoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-room',template:/*ion-inline-start:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\room\room.html"*/'<!-- LIST ROOMS -->\n\n<!-- This is for prototyping purposes to display different rooms -->\n\n\n\n<ion-content>\n\n    <!-- Admin: Will have a searchbar to filter, to avoid scrolling many rooms -->\n\n    <!-- User: Will only display their designated/assigned room to control -->\n\n\n\n    <ion-card (click)="room1()">\n\n        <ion-card-header>\n\n            Room 1\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Description\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Room 2\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Description\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Room 3\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Description\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Room 4\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Description\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Room 5\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            Description\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\gabot\Documents\GitHub\SmartClassroomMobileApp\src\pages\room\room.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RoomPage);
    return RoomPage;
=======
            selector: 'page-room',template:/*ion-inline-start:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\pages\room\room.html"*/'<!--\n\n  Generated template for the RoomPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start left>\n\n      <button ion-button icon-only menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Smart Classroom \n\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Room 1\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Description\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <ion-card>\n\n    <ion-card-header>\n\n      Room 2\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Description \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Room 3\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Description \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Room 4\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Description \n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Room 5\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Description \n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n  \n\n'/*ion-inline-end:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\pages\room\room.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]) === "function" && _d || Object])
    ], RoomPage);
    return RoomPage;
    var _a, _b, _c, _d;
>>>>>>> e32fdf0e742b5bff4bf9e17be30726f4b80157e9
}());

//# sourceMappingURL=room.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__room_room__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menuCtrl, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.authenticationProvider = authenticationProvider;
        this.menuCtrl.enable(false, 'myMenu');
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("This is the login page");
        console.log("did load");
        // console.log(localStorage.getItem('token'));
        // if(localStorage.getItem('token')){
        // 	let data: object;
        // 	this.loginProvider.loginWithToken(data)
        // 	.subscribe( data => {
        // 		if(data['token'] && data['userType']){										
        // 			if(data['userType'] == "Admin"){
        // 				console.log('Logged in as ADMIN');			
        // 				// localStorage.setItem('token', data['token']);
        // 				this.navCtrl.push(RoomPage);
        // 			} else if(data['userType'] == "User"){
        // 				console.log('Logged in as USER');				
        // 				// localStorage.setItem('token', data['token']);
        // 				this.navCtrl.push(RoomPage);
        // 			}														
        // 		} 
        // 		else{					
        // 			localStorage.removeItem('token');
        // 			console.log('No session');
        // 			this.navCtrl.push(LoginPage);
        // 		}
        // 	})
        // } 
    };
    LoginPage.prototype.login = function (loginData) {
        var _this = this;
        if (loginData.username == "" || loginData.password == "") {
            this.message = "Please fill up required inputs";
        }
        else {
            this.userAccount = {
                username: loginData.username,
                password: loginData.password
            };
            this.authenticationProvider.login(this.userAccount)
                .subscribe(function (data) {
                console.log(data);
                console.log(data['token'], data['userType']);
                if (data['token'] && data['userType']) {
                    if (data['userType'] == "Admin") {
                        console.log("You are logged in as Admin");
                        localStorage.setItem('token', data['token']);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__room_room__["a" /* RoomPage */]);
                    }
                    else if (data['userType'] == "User") {
                        console.log("You are logged in as User");
                        localStorage.setItem('token', data['token']);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__room_room__["a" /* RoomPage */]);
                    }
                }
                else {
                    _this.message = "Invalid username or password";
                }
            }, function (error) {
                if (error.error && error.status == 401) {
                    _this.message = "Invalid username or password";
                }
                else if (error.status == 500) {
                    console.log("Internal server error");
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\pages\login\login.html"*/'<ion-content padding>\n\n    <div class="login-box">\n\n        <form #loginForm="ngForm" (ngSubmit)="login(loginForm.value)">\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-list inset>\n\n                        <div text-center>\n\n                            <ion-img width="200" height="196" src="/assets/imgs/nightowl-no-network.jpg"></ion-img>\n\n                        </div>\n\n    \n\n                        <ion-title text-center>\n\n                            Smart Classroom Mobile App\n\n                        </ion-title>\n\n    \n\n                        <br>\n\n    \n\n                        <ion-item>\n\n                            <ion-label stacked class="my-label">Username</ion-label>\n\n                            <ion-input type="text" name="username" ngModel></ion-input>\n\n                        </ion-item>\n\n    \n\n                        <ion-item>\n\n                            <ion-label stacked class="my-label">Password</ion-label>\n\n                            <ion-input type="password" name="password" ngModel></ion-input>\n\n                        </ion-item>\n\n    \n\n                        <p style="color: red">{{message}}</p>\n\n    \n\n                        <button type="submit" ion-button>Login</button>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </form>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\User\Documents\MyProjects\SmartClassroomMobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_authentication__["a" /* AuthenticationProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map