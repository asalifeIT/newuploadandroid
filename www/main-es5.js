function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app> -->\r\n\r\n<ion-menu side=\"start\" type=\"overlay\" contentId=\"main\">\r\n  <div class=\"main-header\"></div>\r\n    <ion-content class=\"ion-padding\">  \r\n            <ion-card class=\"ion-text-center\">\r\n        <br>\r\n\r\n          <img src=\"assets/images/profile.png\"/>\r\n          <br>\r\n          <ion-button color=\"light\">\r\n            <ion-icon slot=\"icon-only\" name=\"camera-outline\" color=\"medium\">\r\n            </ion-icon>\r\n          </ion-button>\r\n     \r\n\r\n        <ion-card-content class=\"ion-text-center\">\r\n          <h5><ion-text color=\"light\">Selamat datang</ion-text></h5>\r\n          <ion-text color=\"light\">\r\n            <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n              <ion-icon name=\"location-outline\" color=\"medium\">\r\n              </ion-icon>\r\n              <p>Anda adalah {{Username}}</p>\r\n            </div>\r\n          </ion-text>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n\r\n\r\n  <div class=\"header-content\"> </div> \r\n      <ion-menu-toggle>\r\n      <ion-item lines=\"none\" (click)=\"home()\">\r\n        <ion-icon slot=\"start\" name=\"home\" color=\"primary\"></ion-icon>\r\n        <ion-label>HOME</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" (click)=\"home()\">\r\n        <ion-icon slot=\"start\" name=\"accessibility\" color=\"primary\"></ion-icon>\r\n        <ion-label>ASA LIFE</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon slot=\"start\" name=\"newspaper\" color=\"primary\"></ion-icon>\r\n        <ion-label>ASA SGMS </ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon slot=\"start\" name=\"bed\" color=\"primary\"></ion-icon>\r\n        <ion-label>ASA EMERGENCY</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\" >\r\n        <ion-icon slot=\"start\" name=\"shirt\" color=\"primary\"></ion-icon>\r\n        <ion-label>ASA SHOP</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" >\r\n        <ion-icon slot=\"start\" name=\"keypad\" color=\"primary\"></ion-icon>\r\n        <ion-label>ASA SOCIAL</ion-label>\r\n\r\n      </ion-item>\r\n        <ion-item lines=\"none\" (click)=\"logout()\">\r\n        <ion-icon slot=\"start\" name=\"log-out\" color=\"primary\"></ion-icon>\r\n        <ion-label>LOGOUT</ion-label>\r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-content>\r\n\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-left\">Register</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissRegister()\">Close</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"FormRegister\">\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"floating\">Username</ion-label>\r\n      <ion-input type=\"text\" name=\"Username\" formControlName=\"Username\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.Username\">\r\n        <div class=\"error-message\" *ngIf=\"FormRegister.get('Username').hasError(validation.type) && (FormRegister.get('Username').dirty || FormRegister.get('Username').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br><br>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"floating\">Password</ion-label>\r\n      <ion-input  type=\"text\" name=\"Password\" formControlName=\"Password\" *ngIf=\"showPasswordText\" ></ion-input>\r\n      <ion-input type=\"password\" name=\"Password\" formControlName=\"Password\" *ngIf=\"!showPasswordText\" ></ion-input>      \r\n      <ion-icon color=\"dark\" slot=\"icon-only\" (click)=\"showPasswordText = !showPasswordText\" *ngIf=\"showPasswordText\" name=\"eye\"  slot=\"end\" class=\"ion-align-self-center\"></ion-icon>\r\n      <ion-icon color=\"dark\" slot=\"icon-only\" (click)=\"showPasswordText = !showPasswordText\" *ngIf=\"!showPasswordText\" name=\"eye-off\" slot=\"end\" class=\"ion-align-self-center\"></ion-icon>\r\n    </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.Password\">\r\n        <div class=\"error-message\" *ngIf=\"FormRegister.get('Password').hasError(validation.type) && (FormRegister.get('Password').dirty || FormRegister.get('Password').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br><br>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n    \r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"floating\">Nama Lengkap</ion-label>\r\n      <ion-input type=\"text\" name=\"NamaLengkap\" formControlName=\"NamaLengkap\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.NamaLengkap\">\r\n        <div class=\"error-message\" *ngIf=\"FormRegister.get('NamaLengkap').hasError(validation.type) && (FormRegister.get('NamaLengkap').dirty || FormRegister.get('NamaLengkap').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br><br>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  \r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"floating\">Email</ion-label>\r\n      <ion-input type=\"email\" name=\"Email\" formControlName=\"Email\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.Email\">\r\n        <div class=\"error-message\" *ngIf=\"FormRegister.get('Email').hasError(validation.type) && (FormRegister.get('Email').dirty || FormRegister.get('Email').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br><br>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"floating\">No. Hp</ion-label>\r\n      <ion-input type=\"text\" name=\"NoHp\" formControlName=\"NoHp\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.NoHp\">\r\n        <div class=\"error-message\" *ngIf=\"FormRegister.get('NoHp').hasError(validation.type) && (FormRegister.get('NoHp').dirty || FormRegister.get('NoHp').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br><br>\r\n        </div>\r\n      </ng-container>\r\n    </div><br>\r\n    \r\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"Register()\" [disabled]=\"!FormRegister.valid\">Register</ion-button>\r\n  </form>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'home',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./register/register.module */
        "./src/app/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      }
    }, {
      path: 'catering',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | catering-catering-module */
        "catering-catering-module").then(__webpack_require__.bind(null,
        /*! ./catering/catering.module */
        "./src/app/catering/catering.module.ts")).then(function (m) {
          return m.CateringPageModule;
        });
      }
    }, {
      path: 'ratingcatering',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ratingcatering-ratingcatering-module */
        "ratingcatering-ratingcatering-module").then(__webpack_require__.bind(null,
        /*! ./ratingcatering/ratingcatering.module */
        "./src/app/ratingcatering/ratingcatering.module.ts")).then(function (m) {
          return m.RatingcateringPageModule;
        });
      }
    }, {
      path: 'aduanhk',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | aduanhk-aduanhk-module */
        [__webpack_require__.e("default~aduancatering-aduancatering-module~aduanhk-aduanhk-module~aduanlaundry-aduanlaundry-module"), __webpack_require__.e("aduanhk-aduanhk-module")]).then(__webpack_require__.bind(null,
        /*! ./aduanhk/aduanhk.module */
        "./src/app/aduanhk/aduanhk.module.ts")).then(function (m) {
          return m.AduanhkPageModule;
        });
      }
    }, {
      path: 'ratinghk',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ratinghk-ratinghk-module */
        "ratinghk-ratinghk-module").then(__webpack_require__.bind(null,
        /*! ./ratinghk/ratinghk.module */
        "./src/app/ratinghk/ratinghk.module.ts")).then(function (m) {
          return m.RatinghkPageModule;
        });
      }
    }, {
      path: 'aduanlaundry',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | aduanlaundry-aduanlaundry-module */
        [__webpack_require__.e("default~aduancatering-aduancatering-module~aduanhk-aduanhk-module~aduanlaundry-aduanlaundry-module"), __webpack_require__.e("aduanlaundry-aduanlaundry-module")]).then(__webpack_require__.bind(null,
        /*! ./aduanlaundry/aduanlaundry.module */
        "./src/app/aduanlaundry/aduanlaundry.module.ts")).then(function (m) {
          return m.AduanlaundryPageModule;
        });
      }
    }, {
      path: 'aduanmaintenance',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | aduanmaintenance-aduanmaintenance-module */
        "aduanmaintenance-aduanmaintenance-module").then(__webpack_require__.bind(null,
        /*! ./aduanmaintenance/aduanmaintenance.module */
        "./src/app/aduanmaintenance/aduanmaintenance.module.ts")).then(function (m) {
          return m.AduanmaintenancePageModule;
        });
      }
    }, {
      path: 'ratingmaintenance',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ratingmaintenance-ratingmaintenance-module */
        "ratingmaintenance-ratingmaintenance-module").then(__webpack_require__.bind(null,
        /*! ./ratingmaintenance/ratingmaintenance.module */
        "./src/app/ratingmaintenance/ratingmaintenance.module.ts")).then(function (m) {
          return m.RatingmaintenancePageModule;
        });
      }
    }, {
      path: 'aduancatering',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | aduancatering-aduancatering-module */
        [__webpack_require__.e("default~aduancatering-aduancatering-module~aduanhk-aduanhk-module~aduanlaundry-aduanlaundry-module"), __webpack_require__.e("aduancatering-aduancatering-module")]).then(__webpack_require__.bind(null,
        /*! ./aduancatering/aduancatering.module */
        "./src/app/aduancatering/aduancatering.module.ts")).then(function (m) {
          return m.AduancateringPageModule;
        });
      }
    }, {
      path: 'housekeeping',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | housekeeping-housekeeping-module */
        "housekeeping-housekeeping-module").then(__webpack_require__.bind(null,
        /*! ./housekeeping/housekeeping.module */
        "./src/app/housekeeping/housekeeping.module.ts")).then(function (m) {
          return m.HousekeepingPageModule;
        });
      }
    }, {
      path: 'tugashk',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tugashk-tugashk-module */
        "tugashk-tugashk-module").then(__webpack_require__.bind(null,
        /*! ./tugashk/tugashk.module */
        "./src/app/tugashk/tugashk.module.ts")).then(function (m) {
          return m.TugashkPageModule;
        });
      }
    }, {
      path: 'maintenance',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | maintenance-maintenance-module */
        "maintenance-maintenance-module").then(__webpack_require__.bind(null,
        /*! ./maintenance/maintenance.module */
        "./src/app/maintenance/maintenance.module.ts")).then(function (m) {
          return m.MaintenancePageModule;
        });
      }
    }, {
      path: 'tgsmaintenance',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tgsmaintenance-tgsmaintenance-module */
        "tgsmaintenance-tgsmaintenance-module").then(__webpack_require__.bind(null,
        /*! ./tgsmaintenance/tgsmaintenance.module */
        "./src/app/tgsmaintenance/tgsmaintenance.module.ts")).then(function (m) {
          return m.TgsmaintenancePageModule;
        });
      }
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  height: 55vh;\n  width: 200%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 10%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -17vh;\n  margin-top: -60px;\n}\nion-card img {\n  width: 20vh;\n  height: 20vh;\n  margin-left: 2px;\n  margin-top: 80px;\n}\nion-header {\n  background: linear-gradient(15deg, var(--ion-color-tertiary) 10%, var(--ion-color-primary) 100%);\n}\nion-header ion-note {\n  font-size: 10px;\n  font-family: \"regular\";\n}\nion-header ion-chip {\n  font-size: 10px;\n  font-family: \"regular\";\n}\nion-header ion-card {\n  background: linear-gradient(15deg, var(--ion-color-tertiary) 10%, var(--ion-color-primary) 100%);\n  margin-left: 20vh;\n  margin-top: 10px;\n}\nion-header ion-card img {\n  width: 5vh;\n  height: 5vh;\n  transform: translateY(10%);\n}\nion-header ion-item {\n  --background: transparent;\n}\nion-header ion-item ion-avatar {\n  margin-left: 20px;\n  background: #95ec7a;\n}\nion-content * {\n  font-family: \"regular\";\n}\nion-content ion-note {\n  margin-left: 2vh;\n  margin-top: 10px;\n}\nion-content ion-avatar {\n  margin-left: 20vh;\n  margin-top: 10px;\n}\nion-content ion-grid {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(10vh);\n  padding-bottom: 8vh;\n}\nion-content ion-grid ion-row ion-col ion-label ion-note {\n  font-size: 1rem;\n}\nion-content ion-grid ion-row ion-col ion-label ion-chip ion-label {\n  font-size: 1rem;\n  font-weight: medium;\n  letter-spacing: 0.5px;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-label b {\n  font-size: 1.5rem;\n}\nion-content ion-grid ion-row ion-col ion-button {\n  height: 3em !important;\n  transform: translateY(10%);\n  text-transform: none;\n}\nion-content ion-grid ion-row ion-col ion-button ion-text {\n  font-size: 0.7rem;\n  font-weight: medium;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-button ion-icon {\n  font-size: 0.5rem;\n}\nion-content ion-grid ion-row ion-col ion-card {\n  box-shadow: -1px 11px 15px -6px #eb3b05;\n  border-radius: 10px !important;\n  margin: 10px 0;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail {\n  width: 15vh;\n  height: 15vh;\n  border-radius: 25px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail img {\n  width: 10vh;\n  height: 10vh;\n  transform: translateY(50%);\n}\nion-content ion-grid ion-row ion-col ion-card ion-card-content ion-label {\n  font-family: \"regular\";\n  font-weight: bold;\n  text-shadow: 0px 0px 1px var(--ion-color-medium);\n  letter-spacing: 1px;\n}\nion-content ion-grid ion-list {\n  background: linear-gradient(15deg, var(--ion-color-tertiary) 10%, var(--ion-color-primary) 100%);\n}\nion-content ion-grid ion-list ion-item {\n  width: 95%;\n  margin: auto;\n  border-radius: 5px;\n  margin-bottom: 2vh;\n}\nion-content ion-grid ion-list ion-item p {\n  font-size: 0.65rem;\n}\nion-content ion-grid ion-list ion-item ion-text {\n  font-weight: 800;\n}\nion-label {\n  font-family: \"regular\";\n  font-weight: medium;\n  text-shadow: 0px 0px 1px var(--ion-color-medium);\n  letter-spacing: 1px;\n  margin: 10px 0;\n}\n.p {\n  margin: 50px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXG5ld2FzYWZpbmFsXFxhc2FzZXJ2YW5kcm9pZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdHQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRU47QURFRTtFQXVCQSxnR0FBQTtBQ3JCRjtBRERJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDR047QURESztFQUNDLGVBQUE7RUFDQSxzQkFBQTtBQ0dOO0FEQUU7RUFNQSxnR0FBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBREpJO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQ01KO0FESUk7RUFDRSx5QkFBQTtBQ0ZOO0FER007RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDRFI7QURPSTtFQUNFLHNCQUFBO0FDSk47QURRRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjtBRFNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEV0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRGFZO0VBQ0UsZUFBQTtBQ1hkO0FEY2M7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FDWmhCO0FEZVk7RUFDRSxpQkFBQTtBQ2JkO0FEZ0JVO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FDZFo7QURlWTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQ2JkO0FEZVk7RUFDRSxpQkFBQTtBQ2JkO0FEZ0JVO0VBQ0UsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNkWjtBRGVZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2JkO0FEY2M7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDWmhCO0FEZ0JjO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUNkaEI7QURvQk07RUFDRSxnR0FBQTtBQ2xCUjtBRG1CUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2pCVjtBRGtCVTtFQUNFLGtCQUFBO0FDaEJaO0FEa0JVO0VBQ0UsZ0JBQUE7QUNoQlo7QUR1Qkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNwQk47QUR1QkU7RUFDRSxjQUFBO0FDcEJKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICBoZWlnaHQ6NTV2aDtcclxuICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDEwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTBweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE3dmg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHZoO1xyXG4gICAgICBoZWlnaHQ6MjB2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBpb24tbm90ZXtcclxuICAgICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcclxuICAgICB9XHJcbiAgICAgaW9uLWNoaXB7XHJcbiAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICAgfVxyXG4gIFxyXG4gIGlvbi1jYXJke1xyXG4gICAgaW1nIHtcclxuICAgIHdpZHRoOiA1dmg7XHJcbiAgICBoZWlnaHQ6NXZoO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAxMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHZoO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTVkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMTAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDE0OSwgMjM2LCAxMjIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgICoge1xyXG4gICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2aDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi1hdmF0YXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjB2aDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDh2aDtcclxuICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jaGlwIHtcclxuICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogbWVkaXVtO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxMXB4IDE1cHggLTZweCByZ2IoMjM1LCA1OSwgNSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTV2aDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHZoO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAxMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi10ZXh0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0Om1lZGl1bTtcclxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuICBcclxuICAucCB7XHJcbiAgICBtYXJnaW46IDUwcHggMDtcclxuICB9IiwiaW9uLWNhcmQge1xuICBoZWlnaHQ6IDU1dmg7XG4gIHdpZHRoOiAyMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMTAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTd2aDtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5pb24tY2FyZCBpbWcge1xuICB3aWR0aDogMjB2aDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1ZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDEwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xufVxuaW9uLWhlYWRlciBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWhlYWRlciBpb24tY2hpcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWhlYWRlciBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAxMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcbiAgbWFyZ2luLWxlZnQ6IDIwdmg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24taGVhZGVyIGlvbi1jYXJkIGltZyB7XG4gIHdpZHRoOiA1dmg7XG4gIGhlaWdodDogNXZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWhlYWRlciBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWVjN2E7XG59XG5cbmlvbi1jb250ZW50ICoge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG59XG5pb24tY29udGVudCBpb24tbm90ZSB7XG4gIG1hcmdpbi1sZWZ0OiAydmg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwdmg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xuICBwYWRkaW5nLWJvdHRvbTogOHZoO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1sYWJlbCBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgYiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogbWVkaXVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgYm94LXNoYWRvdzogLTFweCAxMXB4IDE1cHggLTZweCAjZWIzYjA1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMTV2aDtcbiAgaGVpZ2h0OiAxNXZoO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwdmg7XG4gIGhlaWdodDogMTB2aDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAxMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1saXN0IGlvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDAuNjVyZW07XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tbGlzdCBpb24taXRlbSBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnAge1xuICBtYXJnaW46IDUwcHggMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/service.service */
    "./src/app/services/service.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, serviceService, navCtrl, router, util) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.serviceService = serviceService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.util = util;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.Auth();
          });
        }
      }, {
        key: "Auth",
        value: function Auth() {
          var _this2 = this;

          this.serviceService.authenticationState.subscribe(function (data) {
            if (data == true) {
              _this2.navCtrl.navigateRoot(['home']);
            } else {
              _this2.navCtrl.navigateRoot(['login']);
            }
          });
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['home']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          //ambil data dari localstorage
          var dataStorage = JSON.parse(localStorage.getItem(this.serviceService.TOKEN_KEY)); // this.Username=dataStorage.data.Username;

          this.serviceService.CekUser().subscribe(function (data) {
            _this3.DataLogin = data;
            console.log(_this3.DataLogin);
            _this3.Username = _this3.DataLogin.body.name;
          }, function (error) {
            console.log("error");
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.router.navigate(['login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"], _services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _register_register_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./register/register.module */
    "./src/app/register/register.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _register_register_module__WEBPACK_IMPORTED_MODULE_10__["RegisterPageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/service.service */
    "./src/app/services/service.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(serviceService) {
        _classCallCheck(this, AuthGuard);

        this.serviceService = serviceService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this4 = this;

          this.serviceService.authenticationState.subscribe(function (data) {
            _this4.authstatus = data;
          });
          return this.authstatus;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/register/register-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/register/register-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = /*#__PURE__*/_createClass(function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    });

    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/register/register.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/register/register.module.ts ***!
    \*********************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/register/register.page.ts");

    var RegisterPageModule = /*#__PURE__*/_createClass(function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    });

    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/register/register.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/register/register.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  border-radius: 10px !important;\n  font-size: 0.9em;\n  margin-bottom: 4px;\n  border: 1px solid rgba(34, 34, 34, 0.096);\n  border-bottom: 0px !important;\n  background-color: #ffffff;\n  box-shadow: 4px 4px 6px -6px #222;\n}\n\n.error-container {\n  color: red;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXG5ld2FzYWZpbmFsXFxhc2FzZXJ2YW5kcm9pZC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFFQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0QseUNBQUE7RUFDQSw2QkFBQTtFQUdBLHlCQUFBO0VBR0EsaUNBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgLy9wYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjA5Nik7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIC8vYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiA0cHggOHB4IDZweCAtNnB4ICMyMjI7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDRweCA4cHggNnB4IC02cHggIzIyMjtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IC02cHggIzIyMjtcclxufVxyXG4uZXJyb3ItY29udGFpbmVye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuIiwiaW9uLWl0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzNCwgMzQsIDM0LCAwLjA5Nik7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDRweCA4cHggNnB4IC02cHggIzIyMjtcbiAgLW1vei1ib3gtc2hhZG93OiA0cHggOHB4IDZweCAtNnB4ICMyMjI7XG4gIGJveC1zaGFkb3c6IDRweCA0cHggNnB4IC02cHggIzIyMjtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/register/register.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/register/register.page.ts ***!
    \*******************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/service.service */
    "./src/app/services/service.service.ts");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(formBuilder, navCtrl, loadingController, platform, toastController, alertController, modalController, serviceService) {
        _classCallCheck(this, RegisterPage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.platform = platform;
        this.toastController = toastController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.serviceService = serviceService;
        this.validations = {
          'Username': [{
            type: 'required',
            message: 'Username harus diisi.'
          }, {
            type: 'validUsername',
            message: 'Username sudah terdaftar.'
          }],
          'Password': [{
            type: 'required',
            message: 'Password harus diisi.'
          }, {
            type: 'minlength',
            message: 'Password minimal harus 5 karakter.'
          }, {
            type: 'pattern',
            message: 'Password harus mengandung huruf (baik huruf besar dan kecil) dan angka.'
          }],
          'NamaLengkap': [{
            type: 'required',
            message: 'Nama lengkap harus diisi.'
          }],
          'Email': [{
            type: 'required',
            message: 'Email harus diisi.'
          }, {
            type: 'pattern',
            message: 'Email tidak valid.'
          }],
          'NoHp': [{
            type: 'required',
            message: 'No Hp harus diisi.'
          }, {
            type: 'minlength',
            message: 'No Hp minimal harus 10 karakter.'
          }, {
            type: 'maxlength',
            message: 'No Hp maksimal harus 15 karakter.'
          }]
        };
      }

      _createClass(RegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FormRegister = this.formBuilder.group({
            Username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])),
            NamaLengkap: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[\\w]+(?:\\.[\\w])*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$')])),
            NoHp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]))
          });
        }
      }, {
        key: "Register",
        value: function Register() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    //panggil fungsi register di service
                    this.serviceService.RegisterApi(this.FormRegister.value, 'register').subscribe(function (data) {
                      _this5.ResponseRegister = data; //cek apakah register berhasil atau tidak

                      if (_this5.ResponseRegister.status == "error") {
                        _this5.AlertRegister("Pendaftaran user tidak berhasil, silahkan coba lagi.");

                        loading.dismiss();
                      } else {
                        loading.dismiss();

                        _this5.modalController.dismiss();
                      }

                      loading.dismiss();
                    }, function (error) {
                      loading.dismiss();
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismissRegister",
        value: function dismissRegister() {
          this.modalController.dismiss();
        }
      }, {
        key: "AlertRegister",
        value: function AlertRegister(Message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Peringatan!',
                      //subHeader: 'Subtitle',
                      message: Message,
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/register/register.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _services_service_service__WEBPACK_IMPORTED_MODULE_4__["ServiceService"]])], RegisterPage);
    /***/
  },

  /***/
  "./src/app/services/service.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/service.service.ts ***!
    \*********************************************/

  /*! exports provided: ServiceService */

  /***/
  function srcAppServicesServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var ServiceService = /*#__PURE__*/function () {
      function ServiceService(http, platform, toastController) {
        var _this6 = this;

        _classCallCheck(this, ServiceService);

        this.http = http;
        this.platform = platform;
        this.toastController = toastController;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        this.API_URL = 'http://asabeta.com/api/';
        this.TOKEN_KEY = 'accesstoken';
        this.REFRESH_TOKEN_KEY = 'refreshtoken';
        this.ROLE = 'role';
        this.platform.ready().then(function () {
          _this6.checkToken();
        });
      }

      _createClass(ServiceService, [{
        key: "options",
        value: function options(arg0, _options) {
          throw new Error('Method not implemented.');
        } //jika token tidak ada maka authenticationState=false
        //jika token ada maka akan memanggil fungsi cekUser

      }, {
        key: "checkToken",
        value: function checkToken() {
          var _this7 = this;

          if (localStorage.getItem(this.TOKEN_KEY) == null || localStorage.getItem(this.TOKEN_KEY) == '') {
            this.authenticationState.next(false);
          } else {
            this.CekUser().subscribe(function (data) {
              _this7.DataCheckLogin = data;

              if (_this7.DataCheckLogin.status == "success") {
                _this7.authenticationState.next(true);
              } else {
                _this7.authenticationState.next(false);
              }
            }, function (err) {
              _this7.authenticationState.next(false);
            });
          }
        } //cek user di sisi client

      }, {
        key: "CekUser",
        value: function CekUser() {
          //ambil data dari localstorage
          var dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
          this.token = dataStorage;
          console.log("token : " + this.token);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
          });
          return this.http.get(this.API_URL + 'users/my', {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(8000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Data) {
            return Data;
          }));
        } //login

      }, {
        key: "loginApi",
        value: function loginApi(credentials, type) {
          var _this8 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.API_URL + type, credentials, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Data) {
            _this8.DataLogin = Data.body;

            if (Data.status == 200) {
              localStorage.setItem(_this8.TOKEN_KEY, JSON.stringify(_this8.DataLogin.access_token));
              localStorage.setItem(_this8.REFRESH_TOKEN_KEY, JSON.stringify(_this8.DataLogin.refresh_token));
              localStorage.setItem(_this8.ROLE, JSON.stringify(_this8.DataLogin.roles[1]));
              console.log(_this8.DataLogin.roles[1]);

              _this8.authenticationState.next(true);
            } else {
              _this8.authenticationState.next(false);
            }

            return Data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            var message = "error";

            if (err.status == 400) {
              message = 'User belum terdaftar. Silahkan hubungi admin.';
            } else if (err.status == 401) {
              message = 'nrp dan kata sandi yang Anda masukkan tidak cocok. Silahkan periksa dan coba lagi.';
            } else {
              message = 'Tidak ada koneksi internet. Silakan periksa koneksi Anda.';
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(message);
          }));
        } //register

      }, {
        key: "RegisterApi",
        value: function RegisterApi(credentials, type) {
          var _this9 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.API_URL + type, credentials, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Data) {
            _this9.DataLogin = Data;

            if (_this9.DataLogin.status == "success") {
              localStorage.setItem(_this9.TOKEN_KEY, JSON.stringify(Data));

              _this9.authenticationState.next(true);
            } else {
              _this9.authenticationState.next(false);
            }

            return Data;
          }));
        }
      }, {
        key: "submitaduan",
        value: function submitaduan(form, url) {
          var _this10 = this;

          var dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
          this.token = dataStorage;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
          });
          return this.http.post(this.API_URL + url, form, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Data) {
            _this10.DataLogin = Data;
            var message = 'Aduan Anda terkirim.';
            return message;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            var message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(message);
          }));
        }
      }, {
        key: "submitaduanhk",
        value: function submitaduanhk(form, url) {
          var _this11 = this;

          var dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
          this.token = dataStorage;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
          });
          return this.http.post(this.API_URL + url, form, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Data) {
            _this11.DataLogin = Data;
            var message = 'Aduan Anda terkirim.';
            return message;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            var message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(message);
          }));
        }
      }, {
        key: "submitaduanlaundry",
        value: function submitaduanlaundry(form, url) {
          var _this12 = this;

          var dataStorage = JSON.parse(localStorage.getItem(this.TOKEN_KEY));
          this.token = dataStorage;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.token
          });
          return this.http.post(this.API_URL + url, form, {
            headers: headers,
            observe: 'response'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (Data) {
            _this12.DataLogin = Data;
            var message = 'Aduan Anda terkirim.';
            return message;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            var message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(message);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            var message = "Gagal Terkirim, Mohon Aduan Diisi Lengkap!";
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        } //logout

      }, {
        key: "logout",
        value: function logout() {
          this.authenticationState.next(false);
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    ServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], ServiceService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /*
      Authors : bunchdevelopers (Rahul Jograna)
      Website : https://bunchdevelopers.com/
      App Name : ionic6Template Pack
      This App Template Source code is licensed as per the
      terms found in the Website https://bunchdevelopers.com/license
      Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
    */


    var UtilService = /*#__PURE__*/function () {
      function UtilService(loadingCtrl, alertCtrl, toastCtrl, router, navCtrl, menuController) {
        _classCallCheck(this, UtilService);

        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.menuController = menuController;
        this.isLoading = false;
      }

      _createClass(UtilService, [{
        key: "openSideMenu",
        value: function openSideMenu() {
          this.menuController.open();
        }
        /*
        Start Loader
        Call this method to Start your Loader
        */

      }, {
        key: "show",
        value: function show() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this13 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.isLoading = true;
                    _context3.next = 3;
                    return this.loadingCtrl.create({
                      // duration: 5000,
                      spinner: 'dots'
                    }).then(function (a) {
                      a.present().then(function () {
                        console.log('presented');

                        if (!_this13.isLoading) {
                          a.dismiss().then(function () {
                            return console.log('abort presenting');
                          });
                        }
                      });
                    });

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "success_msg",
        value: function success_msg(title) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1500
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.isLoading = false;
                    _context4.next = 3;
                    return this.loadingCtrl.dismiss().then(function () {
                      return console.log('dismissed');
                    });

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
        /*
          Show Warning Alert Message
          param : msg = message to display
          Call this method to show Warning Alert,
          */

      }, {
        key: "showWarningAlert",
        value: function showWarningAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Warning',
                      message: msg,
                      buttons: ['ok']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "showSimpleAlert",
        value: function showSimpleAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var alert;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertCtrl.create({
                      header: 'warning',
                      message: msg,
                      buttons: ['ok']
                    });

                  case 2:
                    alert = _context6.sent;
                    _context6.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /*
         Show Error Alert Message
         param : msg = message to display
         Call this method to show Error Alert,
         */

      }, {
        key: "showErrorAlert",
        value: function showErrorAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var alert;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.alertCtrl.create({
                      header: 'Error',
                      message: msg,
                      buttons: ['ok']
                    });

                  case 2:
                    alert = _context7.sent;
                    _context7.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /*
           param : email = email to verify
           Call this method to get verify email
           */

      }, {
        key: "getEmailFilter",
        value: function getEmailFilter(email) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var emailfilter, alert;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

                    if (emailfilter.test(email)) {
                      _context8.next = 10;
                      break;
                    }

                    _context8.next = 4;
                    return this.alertCtrl.create({
                      header: 'warning',
                      message: 'Please enter valid email',
                      buttons: ['ok']
                    });

                  case 4:
                    alert = _context8.sent;
                    _context8.next = 7;
                    return alert.present();

                  case 7:
                    return _context8.abrupt("return", false);

                  case 10:
                    return _context8.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
        /*
          Show Toast Message on Screen
           param : msg = message to display, color= background
            color of toast example dark,danger,light. position  = position of message example top,bottom
           Call this method to show toast message
           */

      }, {
        key: "showToast",
        value: function showToast(msg, color, positon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: color,
                      position: positon
                    });

                  case 2:
                    toast = _context9.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "errorToast",
        value: function errorToast(msg, color) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var toast;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000,
                      color: color ? 'dark' : 'light'
                    });

                  case 2:
                    toast = _context10.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "apiErrorHandler",
        value: function apiErrorHandler(err) {
          console.log('error', err);
        }
      }]);

      return UtilService;
    }();

    UtilService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], UtilService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "http://asabeta.com/api"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\newasafinal\asaservandroid\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map