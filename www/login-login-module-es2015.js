(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\n  <div class=\"main-header\">\r\n <ion-card-title>\r\n   <br>\r\n   <br>\r\n   <br>\r\n   <br>\r\n   <br>\r\n   <br>\r\n    <ion-label class=\"heading\">SELAMAT DATANG</ion-label><br>\r\n     ASTRO SERVICE - MEMBER ASTRA\r\n     <ion-grid>\r\n      <img src=\"assets/images/profile.png\"/>\r\n       </ion-grid>\r\n  </ion-card-title>\r\n  </div><br><br><br>\r\n  <ion-grid>\r\n    <ion-card>\r\n\r\n   </ion-card>\r\n\r\n   <ion-card class=\"ion-no-margin\">\r\n    <ion-card-header>\r\n\r\n  <form [formGroup]=\"FormLogin\" (ngSubmit)=\"login()\">\r\n    <ion-item>\r\n      <div color=\"dark\"  slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"person\" ></ion-icon>\r\n    </div>\r\n      <ion-input type=\"text\" name=\"nrp\" placeholder=\"Masukkan NRP\" formControlName=\"nrp\"></ion-input>\r\n    </ion-item> \r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.nrp\">\r\n        <div class=\"error-message\" *ngIf=\"FormLogin.get('nrp').hasError(validation.type) && (FormLogin.get('nrp').dirty || FormLogin.get('nrp').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br><br>\r\n        </div>\r\n      </ng-container>\r\n    </div> \r\n\r\n    <ion-item>\r\n      <div color=\"dark\"  slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"lock-closed\"></ion-icon>\r\n    </div>\r\n      <ion-input type=\"text\" name=\"password\" placeholder=\"Masukkan Password\" formControlName=\"password\" *ngIf=\"showPasswordText\"></ion-input>\r\n      <ion-input type=\"password\" name=\"password\" placeholder=\"Masukkan Password\"   formControlName=\"password\" *ngIf=\"!showPasswordText\"></ion-input>\r\n      <ion-icon color=\"dark\" slot=\"icon-only\" (click)=\"showPasswordText = !showPasswordText\" *ngIf=\"showPasswordText\" name=\"eye\"  slot=\"end\" class=\"ion-align-self-center\"></ion-icon>\r\n      <ion-icon color=\"dark\" slot=\"icon-only\" (click)=\"showPasswordText = !showPasswordText\" *ngIf=\"!showPasswordText\" name=\"eye-off\" slot=\"end\" class=\"ion-align-self-center\"></ion-icon>\r\n    </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validations.password\">\r\n        <div class=\"error-message\" *ngIf=\"FormLogin.get('password').hasError(validation.type) && (FormLogin.get('password').dirty || FormLogin.get('password').touched)\">\r\n          <span>{{ validation.message }}</span>\r\n          <br>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n<section>\r\n         <ion-button class=\"expand-block\" type=\"submit\"  [disabled]=\"!FormLogin.valid\">Login</ion-button>\r\n        </section>\r\n  </form>\r\n</ion-card-header></ion-card>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.main-header {\n  height: 45vh;\n  width: 150%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 10%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -14vh;\n  margin-top: -60px;\n}\nimg {\n  width: 20vh;\n  height: 20vh;\n  margin-top: 8vh;\n  margin-left: 10vh;\n  margin-right: 10vh;\n  position: relative;\n}\n.button {\n  display: flex;\n  justify-content: flex-end;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  margin-top: 3rem;\n}\n.title .heading {\n  font-family: \"Poppins\";\n  font-size: 15px;\n}\n.title .sub_heading {\n  margin-top: 0px;\n}\n.title span {\n  color: #0f0602;\n}\n.main_div {\n  margin: 20px 0px 30px 0px;\n  padding: 10px;\n}\n.main_div ion-item {\n  margin: 20px 0px 0px 0px;\n  border: 1px solid #d7d8da;\n  --padding-start: 0px;\n  --background: #f4f5f8;\n  border-radius: 10px;\n}\n.main_div ion-input {\n  margin: 10px;\n  --padding-start: 10px;\n}\n.main_div ion-label {\n  margin: 16px;\n  --padding-start: 10px;\n}\n.main_div .btn {\n  display: flex;\n  justify-content: flex-end;\n}\n.main_div .orDiv {\n  margin: 1em 0px 1em 0px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n.main_div .orDiv .line {\n  width: 30%;\n  border-bottom: 1px solid lightgray;\n}\n.content_button {\n  margin-top: 50px;\n}\nion-content {\n  --ion-background-color:#E1EAF9 !important;\n}\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity:0;\n}\nion-card {\n  background-color: transparent !important;\n  padding: 0 !important;\n  position: relative;\n}\nion-card-title {\n  font-family: \"regular\";\n  margin-top: 30px;\n  font-size: 10px;\n  color: #faf6f6;\n  text-align: center;\n  font-weight: 600;\n  position: relative;\n}\nion-card-subtitle {\n  padding-top: 15px;\n  font-size: 11px;\n  color: #898585;\n  text-align: center;\n  font-weight: 300;\n}\nion-header {\n  position: absolute;\n}\nion-card {\n  --ion-background-color:transparent;\n  box-shadow: none !important;\n}\n.signin-btns {\n  margin-top: 35px;\n  text-align: center;\n  color: #F0F4FA;\n}\n.loginbtn {\n  --ion-color-primary:#215AB7;\n}\n.text-tag {\n  margin-top: 40px;\n  text-align: center;\n}\n.text-tag span {\n  font-size: 13px;\n  font-weight: normal;\n  color: #898585;\n}\n.social-btns {\n  margin-top: 30px;\n  text-align: center;\n}\n.social-btns ion-button {\n  width: 40px;\n  padding-left: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcbmV3YXNhZmluYWxcXGFzYXNlcnZhbmRyb2lkL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7OztDQUFBO0FBVUE7RUFDRSxZQUFBO0VBQ0UsV0FBQTtFQUNBLGdHQUFBO0VBQ0EsNkNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURBSjtBQ0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEQUY7QUNJQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBRERGO0FDSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURERjtBQ0VFO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7QURESjtBQ0dFO0VBQ0UsY0FBQTtBRERKO0FDSUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QURERjtBQ0VFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBREFKO0FDRUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QURBSjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FEQUo7QUNHRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBRERKO0FDR0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRERKO0FDRUk7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7QURBTjtBQ0tBO0VBQ0UsZ0JBQUE7QURGRjtBQ01BO0VBQ0UseUNBQUE7QURIRjtBQ01BO0VBQ0UsbUNBQUE7RUFDQSxXQUFBO0FESEY7QUNNQTtFQUNFLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBREhGO0FDUUE7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURMRjtBQ1FBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QURMRjtBQ1FBO0VBQ0Usa0JBQUE7QURMRjtBQ1FBO0VBQ0Usa0NBQUE7RUFDRiwyQkFBQTtBRExBO0FDUUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRExGO0FDUUE7RUFDRSwyQkFBQTtBRExGO0FDUUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FETEY7QUNNRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURKSjtBQ1FBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBRExGO0FDTUU7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7QURKSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXG4qL1xuLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiA0NXZoO1xuICB3aWR0aDogMTUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDEwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICBtYXJnaW4tbGVmdDogLTE0dmg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xufVxuXG5pbWcge1xuICB3aWR0aDogMjB2aDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBtYXJnaW4tdG9wOiA4dmg7XG4gIG1hcmdpbi1sZWZ0OiAxMHZoO1xuICBtYXJnaW4tcmlnaHQ6IDEwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG4udGl0bGUgLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50aXRsZSAuc3ViX2hlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udGl0bGUgc3BhbiB7XG4gIGNvbG9yOiAjMGYwNjAyO1xufVxuXG4ubWFpbl9kaXYge1xuICBtYXJnaW46IDIwcHggMHB4IDMwcHggMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5fZGl2IGlvbi1pdGVtIHtcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDdkOGRhO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1haW5fZGl2IGlvbi1pbnB1dCB7XG4gIG1hcmdpbjogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuLm1haW5fZGl2IGlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufVxuLm1haW5fZGl2IC5idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fZGl2IC5vckRpdiB7XG4gIG1hcmdpbjogMWVtIDBweCAxZW0gMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW5fZGl2IC5vckRpdiAubGluZSB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5jb250ZW50X2J1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRTFFQUY5ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tb3BhY2l0eTowO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZhZjZmNjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4OTg1ODU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5zaWduaW4tYnRucyB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGMEY0RkE7XG59XG5cbi5sb2dpbmJ0biB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzIxNUFCNztcbn1cblxuLnRleHQtdGFnIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtdGFnIHNwYW4ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjODk4NTg1O1xufVxuXG4uc29jaWFsLWJ0bnMge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc29jaWFsLWJ0bnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufSIsIi8qXHJcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcclxuICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xyXG4gIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xyXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcclxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxyXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXHJcbiovXHJcblxyXG5cclxuLm1haW4taGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAxMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHZoO1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcblxyXG59XHJcbmltZyB7XHJcbiAgd2lkdGg6IDIwdmg7XHJcbiAgaGVpZ2h0OjIwdmg7XHJcbiAgbWFyZ2luLXRvcDogOHZoOyBcclxuICBtYXJnaW4tbGVmdDogMTB2aDtcclxuICBtYXJnaW4tcmlnaHQ6MTB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG59XHJcbi50aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gIC5oZWFkaW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgfVxyXG4gIC5zdWJfaGVhZGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICMwZjA2MDI7XHJcbiAgfVxyXG59XHJcbi5tYWluX2RpdiB7XHJcbiAgbWFyZ2luOiAyMHB4IDBweCAzMHB4IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q4ZGE7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICAub3JEaXYge1xyXG4gICAgbWFyZ2luOiAxZW0gMHB4IDFlbSAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5saW5lIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50X2J1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0UxRUFGOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtLW9wYWNpdHk6MDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi1jYXJkLXRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjojZmFmNmY2O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBmb250LXNpemU6MTFweDtcclxuICBjb2xvcjojODk4NTg1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lnbmluLWJ0bnN7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6I0YwRjRGQTtcclxufVxyXG5cclxuLmxvZ2luYnRue1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzIxNUFCNztcclxufVxyXG5cclxuLnRleHQtdGFne1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHNwYW57XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6Izg5ODU4NTtcclxuICB9XHJcbn1cclxuXHJcbi5zb2NpYWwtYnRuc3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.page */ "./src/app/register/register.page.ts");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");






let LoginPage = class LoginPage {
    constructor(formBuilder, navCtrl, loadingController, modalController, platform, toastController, serviceService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.platform = platform;
        this.toastController = toastController;
        this.serviceService = serviceService;
        this.validations = {
            'nrp': [
                { type: 'required', message: 'nrp harus diisi.' }
            ],
            'password': [
                { type: 'required', message: 'password harus diisi.' }
            ]
        };
    }
    ngOnInit() {
        //setting form login
        this.FormLogin = this.formBuilder.group({
            nrp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    //fungsi login
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield loading.present();
            this.serviceService.loginApi(this.FormLogin.value, 'signin').subscribe(data => {
                this.dataLogin = data;
                loading.dismiss();
            }, error => {
                this.presentToast(error);
                loading.dismiss();
            });
        });
    }
    //menampilkan halaman register
    registerModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]
            });
            return yield modal.present();
        });
    }
    presentToast(Message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: Message,
                duration: 2500,
                position: "bottom"
            });
            toast.present();
        });
    }
    Login() {
        console.log("anda sekarang login");
        this.authService.login(this.nrp, this.password);
    }
    nrp(nrp, password) {
        throw new Error('Method not implemented.');
    }
    password(nrp, password) {
        throw new Error('Method not implemented.');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map