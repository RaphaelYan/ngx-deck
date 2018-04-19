webpackJsonp(["main"],{

/***/ "../../../../../config/environment.ts":
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


/***/ }),

/***/ "../../../../../example/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../example/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../example/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <h1>Deck Stack</h1>\n    <div class=\"counter\" id=\"counter\">\n      <svg width=\"40\" height=\"40\" viewBox=\"0 0 60 60\">\n        <path d=\"M55.215 8.397c-0.336-1.32-1.968-2.397-3.63-2.397h-43.17c-1.665 0-3.297 1.077-3.63 2.397l-0.603 3.603h51.633l-0.6-3.603zM58.236 15h-56.475c-1.026 0-1.827 0.882-1.731 1.905l2.769 35.007c0.114 1.182 1.11 2.088 2.298 2.088h49.803c1.191 0 2.184-0.906 2.298-2.088l2.769-35.007c0.099-1.023-0.705-1.905-1.731-1.905zM37.314 25.125c1.554 0 2.814 1.26 2.814 2.814s-1.26 2.814-2.814 2.814-2.814-1.263-2.814-2.817c0-1.551 1.26-2.811 2.814-2.811zM16.5 42l7.458-17.142 8.481 13.728 7.272-3.612 3.789 7.026h-27z\"></path>\n      </svg>\n      <span class=\"counter__number\">{{ counter }}</span>\n    </div>\n    <deck-stack #stack>\n      <li class=\"stack__item\" *ngFor=\"let item of items\">\n        <img [attr.src]=\"item\"/>\n      </li>\n    </deck-stack>\n    <div class=\"controls\">\n      <button deckTouchAnimation class=\"button button--reject\" (click)=\"reject($event)\">\n        <i class=\"fa fa-times\"></i>\n      </button>\n      <button deckTouchAnimation class=\"button button--accept\" (click)=\"accept($event)\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../example/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  background: lightblue;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\n\napp-root {\n  -ms-flex: 1;\n      flex: 1; }\n\n.center, body {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: center; }\n\n.container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.content {\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  overflow: hidden;\n  padding: 8em 2em 3em;\n  background: #91c794;\n  width: 50%;\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n\n.button {\n  border: none;\n  display: inline-block;\n  padding: 0.25em;\n  margin: 0 0.5em;\n  cursor: pointer;\n  font-size: 1.5em;\n  width: 50px;\n  height: 50px;\n  z-index: 100;\n  -webkit-tap-highlight-color: transparent;\n  border-radius: 50%;\n  background: #fff; }\n\n@media (max-width: 650px) {\n  .container .content {\n    padding-left: 0;\n    padding-right: 0;\n    width: 100%; } }\n\n@media (max-width: 360px) {\n  .stack.stack--slamet {\n    width: 250px; } }\n\n.controls {\n  margin: 3em 0 0 0; }\n\n.button .fa {\n  pointer-events: none; }\n\n.button:focus {\n  outline: none; }\n\n.button--accept {\n  color: #81d47d; }\n\n.button--reject {\n  color: #e66868; }\n\n.counter {\n  position: absolute;\n  left: 50%;\n  top: 30px;\n  width: 40px;\n  margin-left: -20px; }\n\n.counter svg {\n  display: block;\n  margin: 14px auto 0;\n  fill: #58785A; }\n\n.counter__number {\n  text-align: center;\n  position: absolute;\n  background: #e66868;\n  font-size: 10px;\n  font-weight: bold;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  border-radius: 50%;\n  bottom: -5px;\n  right: -5px; }\n\n@media (max-height: 730px) {\n  .container .content {\n    padding-top: 80px; } }\n\n@media (max-height: 660px) {\n  .container .content {\n    padding-top: 60px; }\n    .container .content .counter {\n      top: 10px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../example/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
        this.items = [
            'assets/img/1.jpg',
            'assets/img/2.gif',
            'assets/img/3.jpg',
            'assets/img/4.jpg',
            'assets/img/5.jpg',
        ];
        this.counter = 0;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.stack.init();
    };
    AppComponent.prototype.accept = function (event) {
        var _this = this;
        this.stack.accept(function () {
            _this.counter += 1;
        });
    };
    AppComponent.prototype.reject = function (event) {
        this.stack.reject();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewChild */])('stack'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "stack", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../example/app/app.component.html"),
            styles: [__webpack_require__("../../../../../example/app/app.component.scss"), __webpack_require__("../../../../../src/touch-animation/touch-animation.directive.scss"), __webpack_require__("../../../../../src/stack/stack.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../example/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../example/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__src__["a" /* StackModule */],
                __WEBPACK_IMPORTED_MODULE_2__src__["b" /* TouchAnimationModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../example/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../example/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_environment__ = __webpack_require__("../../../../../config/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__config_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stack_stack_component__ = __webpack_require__("../../../../../src/stack/stack.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stack_stack_module__ = __webpack_require__("../../../../../src/stack/stack.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__stack_stack_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touch_animation_touch_animation_directive__ = __webpack_require__("../../../../../src/touch-animation/touch-animation.directive.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__touch_animation_touch_animation_module__ = __webpack_require__("../../../../../src/touch-animation/touch-animation.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__touch_animation_touch_animation_module__["a"]; });






/***/ }),

/***/ "../../../../../src/stack/stack.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"stack_slamet\" class=\"stack stack--slamet\">\n  <ng-content></ng-content>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/stack/stack.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stack {\n  margin: 0 auto;\n  position: relative;\n  z-index: 1000;\n  width: 320px;\n  height: 320px;\n  padding: 0;\n  list-style: none;\n  pointer-events: none; }\n\n.stack__item {\n  background: #fff;\n  height: 100%;\n  width: 100%;\n  border-radius: 4px;\n  text-align: center;\n  overflow: hidden;\n  position: absolute;\n  opacity: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: auto;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.stack__item img {\n  width: 100%;\n  display: block;\n  pointer-events: none; }\n\n/* Animations */\n.stack__item--reject,\n.stack__item--accept {\n  pointer-events: none; }\n\n.stack--slamet .stack__item--reject {\n  animation: slametReject 0.5s forwards;\n  transform-origin: 50% 100%; }\n\n@keyframes slametReject {\n  to {\n    opacity: 0;\n    transform: rotate3d(1, 0, 0, -90deg); } }\n\n.stack--slamet .stack__item--accept {\n  animation: slametAccept 0.6s forwards;\n  animation-timing-function: ease-in; }\n\n@keyframes slametAccept {\n  40% {\n    animation-timing-function: cubic-bezier(0.4, 1, 0.3, 1);\n    transform: translate3d(0, 20%, 0) scale3d(1.1, 1.1, 1); }\n  80% {\n    opacity: 1;\n    transform: translate3d(0, -280px, 0) scale3d(0.1, 0.1, 1); }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -250px, 0) scale3d(0.05, 0.05, 1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/stack/stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StackComponent = (function () {
    function StackComponent() {
        this.items = [];
    }
    StackComponent.prototype.accept = function (callback) {
        this.slamet.accept(callback);
    };
    StackComponent.prototype.reject = function (callback) {
        this.slamet.reject(callback);
    };
    StackComponent.prototype.init = function () {
        if (typeof Stack === 'undefined') {
            return console.error('Please include Stack assets/js');
        }
        this.slamet = new Stack(document.getElementById('stack_slamet'), {
            infinite: false,
            onEndStack: function (instance) {
                setTimeout(function () {
                    console.warn('onEndStack');
                }, 300);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], StackComponent.prototype, "items", void 0);
    StackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'deck-stack',
            template: __webpack_require__("../../../../../src/stack/stack.component.html"),
            styles: [__webpack_require__("../../../../../src/stack/stack.component.scss")]
        })
    ], StackComponent);
    return StackComponent;
}());



/***/ }),

/***/ "../../../../../src/stack/stack.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stack_component__ = __webpack_require__("../../../../../src/stack/stack.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StackModule = (function () {
    function StackModule() {
    }
    StackModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__stack_component__["a" /* StackComponent */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stack_component__["a" /* StackComponent */],
            ],
            providers: [],
        })
    ], StackModule);
    return StackModule;
}());



/***/ }),

/***/ "../../../../../src/touch-animation/touch-animation.directive.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[decktouchanimation] {\n  position: relative; }\n\n[decktouchanimation]::before {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  border-radius: 50%;\n  content: '';\n  opacity: 0;\n  border: 4px solid rgba(255, 255, 255, 0.5);\n  width: 50px;\n  height: 50px; }\n\n[decktouchanimation].active::before {\n  animation: effect-touch-animation 0.3s ease-out forwards; }\n\n@keyframes effect-touch-animation {\n  0% {\n    opacity: 1;\n    transform: scale3d(0.9, 0.9, 1); }\n  to {\n    opacity: 0;\n    transform: scale3d(1.4, 1.4, 1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/touch-animation/touch-animation.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchAnimationDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TouchAnimationDirective = (function () {
    function TouchAnimationDirective() {
        this.timer = 300;
        this.animationInProgress = false;
    }
    TouchAnimationDirective.prototype.onClick = function (event) {
        var _this = this;
        if (this.animationInProgress) {
            return;
        }
        this.animationInProgress = true;
        event.target.classList.add('active');
        setTimeout(function () {
            event.target.classList.remove('active');
            _this.animationInProgress = false;
        }, this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Number)
    ], TouchAnimationDirective.prototype, "timer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TouchAnimationDirective.prototype, "onClick", null);
    TouchAnimationDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[deckTouchAnimation]'
        })
    ], TouchAnimationDirective);
    return TouchAnimationDirective;
}());



/***/ }),

/***/ "../../../../../src/touch-animation/touch-animation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchAnimationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touch_animation_directive__ = __webpack_require__("../../../../../src/touch-animation/touch-animation.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TouchAnimationModule = (function () {
    function TouchAnimationModule() {
    }
    TouchAnimationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__touch_animation_directive__["a" /* TouchAnimationDirective */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__touch_animation_directive__["a" /* TouchAnimationDirective */],
            ],
            providers: [],
        })
    ], TouchAnimationModule);
    return TouchAnimationModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../example/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map