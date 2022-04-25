(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catering-catering-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/catering/catering.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catering/catering.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"util.openSideMenu()\">\r\n        <ion-icon name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-label color=\"light\">\r\n    Menu Catering\r\n  </ion-label>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-icon (click)=\"onBack()\" name=\"arrow-undo\"></ion-icon>\r\n  </ion-buttons>\r\n  </ion-item>\r\n </ion-header>\r\n\r\n <ion-content [fullscreen]=\"true\" color=\"light\">\r\n  <div class=\"main-header\"></div>\r\n    <ion-grid>\r\n    <ion-note color=\"light\" class=\"ion-margin-start\">\r\n       <b></b> \r\n      </ion-note> \r\n<br>\r\n<br>\r\n\r\n\r\n        <div class=\"main_content\" *ngFor=\"let item of aduan\" (click)=\"openAduancat()\">\r\n          <ion-row>\r\n            <ion-col size=\"5\"><br>\r\n              <div class=\"img\" [style.backgroundImage]=\"'url(assets/svg/positive-feedback.svg)'\"></div>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <div class=\"title\">\r\n                <ion-label color=\"dark\" class=\"ttl\">Aduan Catering</ion-label>\r\n                <ion-label class=\"sub_ttl1\">Form Isian Aduan Pelayanan Catering</ion-label>\r\n                <div class=\"icon_title\">\r\n                  <ion-icon slot=\"start\" name=\"star\"></ion-icon>\r\n                  <ion-label color=\"dark\">Isikan Aduan Anda</ion-label>\r\n                </div>\r\n                <div class=\"icon_title\">\r\n                  <ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>\r\n                  <ion-label  color=\"dark\">Deskripsi dan Lokasi</ion-label>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n         <div class=\"line\"></div>\r\n         </div>\r\n\r\n          <div class=\"main_content\" *ngFor=\"let item of rating\" (click)=\"openRatingcat()\">\r\n          <ion-row>\r\n            <ion-col size=\"5\"><br>\r\n              <div class=\"img\" [style.backgroundImage]=\"'url(assets/svg/feedback-testimonial.svg)'\"></div>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <div class=\"title\">\r\n                  <ion-label class=\"ttl\">Rating Catering</ion-label>\r\n                  <ion-label class=\"sub_ttl\">Silahkan Memberikan Nilai </ion-label>\r\n                  <div class=\"icon_title\">\r\n                    <div class=\"rate\">\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"icon_title\">\r\n                    <ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>\r\n                    <ion-label color=\"dark\">Terdiri dari 5 (lima) pilihan</ion-label>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n           <div class=\"line\"></div>\r\n           </div>\r\n    </ion-grid>\r\n  </ion-content>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/catering/catering-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/catering/catering-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CateringPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringPageRoutingModule", function() { return CateringPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _catering_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catering.page */ "./src/app/catering/catering.page.ts");




const routes = [
    {
        path: '',
        component: _catering_page__WEBPACK_IMPORTED_MODULE_3__["CateringPage"]
    }
];
let CateringPageRoutingModule = class CateringPageRoutingModule {
};
CateringPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CateringPageRoutingModule);



/***/ }),

/***/ "./src/app/catering/catering.module.ts":
/*!*********************************************!*\
  !*** ./src/app/catering/catering.module.ts ***!
  \*********************************************/
/*! exports provided: CateringPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringPageModule", function() { return CateringPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _catering_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catering-routing.module */ "./src/app/catering/catering-routing.module.ts");
/* harmony import */ var _catering_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catering.page */ "./src/app/catering/catering.page.ts");







let CateringPageModule = class CateringPageModule {
};
CateringPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catering_routing_module__WEBPACK_IMPORTED_MODULE_5__["CateringPageRoutingModule"]
        ],
        declarations: [_catering_page__WEBPACK_IMPORTED_MODULE_6__["CateringPage"]]
    })
], CateringPageModule);



/***/ }),

/***/ "./src/app/catering/catering.page.scss":
/*!*********************************************!*\
  !*** ./src/app/catering/catering.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-header {\n  background: transparent;\n}\nion-header ion-label {\n  font-size: 13px;\n  font-family: \"regular\";\n}\nion-header ion-item {\n  --background: transparent;\n}\nion-header ion-item ion-avatar {\n  background: white;\n}\nion-content {\n  /*\n    Authors : bunchdevelopers (Rahul Jograna)\n    Website : https://bunchdevelopers.com/\n    App Name : ionic6Template Pack\n    This App Template Source code is licensed as per the\n    terms found in the Website https://bunchdevelopers.com/license\n    Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n  */\n}\nion-content * {\n  font-family: \"regular\";\n}\nion-content .title {\n  font-family: \"regular\";\n}\nion-content .icon_title {\n  font-family: \"regular\";\n}\nion-content .main-header {\n  height: 26vh;\n  width: 150%;\n  background: linear-gradient(45deg, var(--ion-color-tertiary) 30%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 30px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -14vh;\n  margin-top: -60px;\n}\nion-content ion-grid {\n  width: 100%;\n  position: absolute;\n  top: 35px;\n  left: 0;\n  transform: translateY(10vh);\n  padding-bottom: 8vh;\n}\nion-content ion-grid ion-row ion-col ion-label ion-note {\n  font-size: 0.7rem;\n}\nion-content ion-grid ion-row ion-col ion-label ion-chip ion-label {\n  position: absolute;\n  font-size: 1.4rem;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-label b {\n  font-size: 1.2rem;\n}\nion-content ion-grid ion-row ion-col ion-button {\n  height: 3em !important;\n  transform: translateY(10%);\n  text-transform: none;\n}\nion-content ion-grid ion-row ion-col ion-button ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-button ion-icon {\n  font-size: 1rem;\n}\nion-content ion-grid ion-row ion-col ion-card {\n  box-shadow: -1px 11px 10px -6px #f7b34e;\n  border-radius: 5px !important;\n  margin: 5px 5px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail {\n  width: 10vh;\n  height: 10vh;\n  border-radius: 10px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail img {\n  width: 10vh;\n  height: 10vh;\n  transform: translateY(10%);\n}\nion-content ion-grid ion-row ion-col ion-card ion-card-content ion-label {\n  font-weight: regular;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n  letter-spacing: 0.5px;\n}\nion-content ion-grid ion-list {\n  background: transparent;\n}\nion-content ion-grid ion-list ion-item {\n  width: 95%;\n  margin: auto;\n  border-radius: 5px;\n  margin-bottom: 2vh;\n}\nion-content ion-grid ion-list ion-item p {\n  font-size: 0.65rem;\n}\nion-content ion-grid ion-list ion-item ion-text {\n  font-weight: 800;\n}\nion-content ion-header ion-toolbar ion-title {\n  padding: 0px;\n  font-family: \"regular\";\n}\nion-content ion-header ion-toolbar ion-buttons {\n  padding: 5px 2px 5px 2px;\n  margin: 10px;\n}\nion-content ion-header ion-toolbar ion-buttons ion-button {\n  height: 40px;\n  width: 40px;\n  border: 1px solid lightgray;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\nion-content ion-header ion-toolbar ion-buttons ion-button ion-icon {\n  color: gray;\n}\nion-content .item_div ion-row .scroll_div {\n  overflow: scroll;\n}\nion-content .item_div ion-row .scroll_div .item {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: flex;\n  flex-direction: row;\n}\nion-content .item_div ion-row .scroll_div .item ion-chip {\n  height: 50px;\n  border-radius: 10px;\n}\nion-content .main_content {\n  padding: 10px;\n  border-radius: 10px;\n}\nion-content .main_content ion-row ion-col .img {\n  height: 90px;\n  width: 90px;\n  border-radius: 10px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-content .main_content ion-row ion-col .title {\n  font-family: \"regular\";\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n}\nion-content .main_content ion-row ion-col .title .ttl {\n  font-family: \"bold\";\n  font-size: 16px;\n}\nion-content .main_content ion-row ion-col .title .sub_ttl1 {\n  font-family: \"regular\";\n  font-size: 13px;\n  margin: 3px 0px 3px 0px;\n  color: #0a0101;\n}\nion-content .main_content ion-row ion-col .title .sub_ttl {\n  font-family: \"regular\";\n  font-size: 13px;\n  margin: 3px 0px 3px 0px;\n  color: #080000;\n}\nion-content .main_content ion-row ion-col .title .icon_title {\n  display: flex;\n  align-items: center;\n  color: #ff7c31;\n  margin: 2px 0px 2px 0px;\n}\nion-content .main_content ion-row ion-col .title .icon_title ion-icon {\n  font-family: \"regular\";\n  font-size: 20px;\n  margin-right: 5px;\n}\nion-content .main_content ion-row ion-col .title .icon_title ion-label {\n  font-size: 12px;\n}\nion-content .main_content .line {\n  width: 100%;\n  border-bottom: 1px solid lightgray;\n  margin: 20px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZXJpbmcvY2F0ZXJpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9jYXRlcmluZy9DOlxcbmV3YXNhZmluYWxcXGFzYXNlcnZhbmRyb2lkL3NyY1xcYXBwXFxjYXRlcmluZ1xcY2F0ZXJpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUtJLHVCQUFBO0FERko7QUNGSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBRElOO0FDREk7RUFDRSx5QkFBQTtBREdOO0FDRk07RUFDRSxpQkFBQTtBRElSO0FDQ0U7RUFvR0E7Ozs7Ozs7R0FBQTtBRDFGRjtBQ1RJO0VBQ0Usc0JBQUE7QURXTjtBQ1JJO0VBQ0Usc0JBQUE7QURVTjtBQ1JJO0VBQ0Usc0JBQUE7QURVTjtBQ1BJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnR0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEU047QUNQSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBRFNOO0FDTFk7RUFDRSxpQkFBQTtBRE9kO0FDSmM7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0FETWhCO0FDSFk7RUFDRSxpQkFBQTtBREtkO0FDRlU7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QURJWjtBQ0hZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0FES2Q7QUNIWTtFQUNFLGVBQUE7QURLZDtBQ0ZVO0VBQ0UsdUNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QURJWjtBQ0hZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBREtkO0FDSmM7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FETWhCO0FDRmM7RUFDRSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EscUJBQUE7QURJaEI7QUNFTTtFQUNFLHVCQUFBO0FEQVI7QUNDUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRENWO0FDQVU7RUFDRSxrQkFBQTtBREVaO0FDQVU7RUFDRSxnQkFBQTtBREVaO0FDYU07RUFDRSxZQUFBO0VBQ0Esc0JBQUE7QURYUjtBQ2FNO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FEWFI7QUNZUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVlY7QUNXVTtFQUNFLFdBQUE7QURUWjtBQ2tCTTtFQUNFLGdCQUFBO0FEaEJSO0FDaUJRO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEZlY7QUNnQlU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QURkWjtBQ3FCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRG5CSjtBQ3NCUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QURwQlY7QUNzQlE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FEcEJWO0FDcUJVO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FEbkJaO0FDc0JVO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FEcEJaO0FDc0JVO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FEcEJaO0FDdUJVO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FEdEJaO0FDdUJZO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURyQmQ7QUN1Qlk7RUFDRSxlQUFBO0FEckJkO0FDMkJJO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7QUR6Qk4iLCJmaWxlIjoic3JjL2FwcC9jYXRlcmluZy9jYXRlcmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWhlYWRlciBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAvKlxuICAgIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXG4gICAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcbiAgICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gICAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxuICAqL1xufVxuaW9uLWNvbnRlbnQgKiB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbn1cbmlvbi1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbn1cbmlvbi1jb250ZW50IC5pY29uX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWNvbnRlbnQgLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiAyNnZoO1xuICB3aWR0aDogMTUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDMwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDFweCAzMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xuICBtYXJnaW4tbGVmdDogLTE0dmg7XG4gIG1hcmdpbi10b3A6IC02MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcbiAgcGFkZGluZy1ib3R0b206IDh2aDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgaW9uLW5vdGUge1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1sYWJlbCBiIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogM2VtICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IC0xcHggMTFweCAxMHB4IC02cHggI2Y3YjM0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogNXB4IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDEwdmg7XG4gIGhlaWdodDogMTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMHZoO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IHJlZ3VsYXI7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1saXN0IGlvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDAuNjVyZW07XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tbGlzdCBpb24taXRlbSBpb24tdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5pb24tY29udGVudCBpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDVweCAycHggNXB4IDJweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IGdyYXk7XG59XG5pb24tY29udGVudCAuaXRlbV9kaXYgaW9uLXJvdyAuc2Nyb2xsX2RpdiB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5pb24tY29udGVudCAuaXRlbV9kaXYgaW9uLXJvdyAuc2Nyb2xsX2RpdiAuaXRlbSB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbmlvbi1jb250ZW50IC5pdGVtX2RpdiBpb24tcm93IC5zY3JvbGxfZGl2IC5pdGVtIGlvbi1jaGlwIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fY29udGVudCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAuaW1nIHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2NvbnRlbnQgaW9uLXJvdyBpb24tY29sIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2NvbnRlbnQgaW9uLXJvdyBpb24tY29sIC50aXRsZSAudHRsIHtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLnN1Yl90dGwxIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xuICBjb2xvcjogIzBhMDEwMTtcbn1cbmlvbi1jb250ZW50IC5tYWluX2NvbnRlbnQgaW9uLXJvdyBpb24tY29sIC50aXRsZSAuc3ViX3R0bCB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDNweCAwcHggM3B4IDBweDtcbiAgY29sb3I6ICMwODAwMDA7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLmljb25fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2ZmN2MzMTtcbiAgbWFyZ2luOiAycHggMHB4IDJweCAwcHg7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLmljb25fdGl0bGUgaW9uLWljb24ge1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLmljb25fdGl0bGUgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fY29udGVudCAubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG59IiwiaW9uLWhlYWRlciB7XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICAgfVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICAqIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcclxuICAgIH1cclxuICAgIC5pY29uX3RpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWhlYWRlciB7XHJcbiAgICAgIGhlaWdodDoyNnZoO1xyXG4gICAgICB3aWR0aDogMTUwJTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDMwJSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDEwMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAzMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1MCUgNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE0dmg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWdyaWQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDM1cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDh2aDtcclxuICAgICAgaW9uLXJvdyB7XHJcbiAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBpb24tbm90ZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNoaXAge1xyXG4gICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogM2VtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMTFweCAxMHB4IC02cHggcmdiKDI0NywgMTc5LCA3OCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW46NXB4IDVweDtcclxuICAgICAgICAgICAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTB2aDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6MTB2aDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHZoO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogcmVndWxhcjtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC8qXHJcbiAgICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxyXG4gICAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cclxuICAgIEFwcCBOYW1lIDogaW9uaWM2VGVtcGxhdGUgUGFja1xyXG4gICAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxyXG4gICAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcclxuICAgIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjEtcHJlc2VudCBidW5jaGRldmVsb3BlcnMuXHJcbiAgKi9cclxuICBpb24taGVhZGVyIHtcclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMnB4IDVweCAycHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtX2RpdiB7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgLnNjcm9sbF9kaXYge1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBpb24tY2hpcCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1haW5fY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBpb24tY29sIHtcclxuICAgICAgICAuaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAudHRsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViX3R0bDEge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDEwLCAxLCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWJfdHRsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDNweCAwcHggM3B4IDBweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig4LCAwLCAwKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbl90aXRsZSB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmN2MzMTtcclxuICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4IDJweCAwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTEsIDIxMSwgMjExKTtcclxuICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/catering/catering.page.ts":
/*!*******************************************!*\
  !*** ./src/app/catering/catering.page.ts ***!
  \*******************************************/
/*! exports provided: CateringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringPage", function() { return CateringPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");

/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/




let CateringPage = class CateringPage {
    constructor(loadingController, router, util) {
        this.loadingController = loadingController;
        this.router = router;
        this.util = util;
        this.aduan = [
            { id: 1, name: '', src: '', background: '', page: '' },
        ];
        this.rating = [
            { id: 1, name: '', src: '', background: '', page: '' },
        ];
    }
    ngOnInit() {
    }
    onBack() {
        this.router.navigate(['home']);
    }
    openAduancat() {
        this.router.navigate(['aduancatering']);
    }
    openRatingcat() {
        this.router.navigate(['ratingcatering']);
    }
};
CateringPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }
];
CateringPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-catering',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./catering.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/catering/catering.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./catering.page.scss */ "./src/app/catering/catering.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
], CateringPage);



/***/ })

}]);
//# sourceMappingURL=catering-catering-module-es2015.js.map