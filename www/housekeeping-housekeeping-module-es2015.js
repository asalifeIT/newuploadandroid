(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["housekeeping-housekeeping-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/housekeeping/housekeeping.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/housekeeping/housekeeping.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"util.openSideMenu()\">\r\n        <ion-icon name=\"menu\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-label color=\"light\">\r\n   Menu House Keeping\r\n  </ion-label>\r\n  <ion-buttons slot=\"end\">\r\n    <ion-icon (click)=\"onBack()\" name=\"arrow-undo\"></ion-icon>\r\n  </ion-buttons>\r\n  </ion-item>\r\n </ion-header>\r\n \r\n<ion-content [fullscreen]=\"true\" color=\"light\">\r\n  <div class=\"main-header\"></div>\r\n  <ion-grid><br>\r\n    <ion-note color=\"light\" class=\"ion-margin-start\">\r\n      <b></b> \r\n     </ion-note> \r\n<br>\r\n<br>\r\n     \r\n        <div class=\"main_content\" *ngFor=\"let item of aduanhkeeping\" (click)=\"openAdhkeeping()\">\r\n          <ion-row>\r\n            <ion-col size=\"5\"><br>\r\n              <div class=\"img\" [style.backgroundImage]=\"'url(assets/svg/online-survey.svg)'\"></div>\r\n            </ion-col>\r\n            <ion-col size=\"7\">\r\n              <div class=\"title\">\r\n                <ion-label color=\"dark\" class=\"ttl\">Aduan House Keeping</ion-label>\r\n                <ion-label class=\"sub_ttl1\">Form Isian Aduan Pelayanan House Keeping</ion-label>\r\n                <div class=\"icon_title\">\r\n                  <ion-icon slot=\"start\" name=\"star\"></ion-icon>\r\n                  <ion-label color=\"dark\" >Aduan Anda</ion-label>\r\n                </div>\r\n                <div class=\"icon_title\">\r\n                  <ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>\r\n                  <ion-label color=\"dark\">Deskripsi dan Lokasi</ion-label>\r\n                </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n         <div class=\"line\"></div>\r\n         </div>\r\n\r\n          <div class=\"main_content\" *ngFor=\"let item of tugas\" (click)=\"openTugas()\">\r\n          <ion-row>\r\n            <ion-col size=\"5\"><br>\r\n              <div class=\"img\" [style.backgroundImage]=\"'url(assets/svg/chat-favorite.svg)'\"></div>\r\n              </ion-col>\r\n              <ion-col size=\"7\">\r\n                <div class=\"title\">\r\n                  <ion-label class=\"ttl\">Tugas House Keeping</ion-label>\r\n                  <ion-label class=\"sub_ttl\">Silahkan Checklist Tugas Anda </ion-label>\r\n                  <div class=\"icon_title\">\r\n                    <div class=\"rate\">\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                      <ion-icon name=\"star\"></ion-icon>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"icon_title\">\r\n                    <ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>\r\n                    <ion-label color=\"dark\">Petunjuk?</ion-label>\r\n                  </div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n           <div class=\"line\"></div>\r\n           </div>\r\n          </ion-grid>\r\n        </ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/housekeeping/housekeeping-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/housekeeping/housekeeping-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HousekeepingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousekeepingPageRoutingModule", function() { return HousekeepingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _housekeeping_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./housekeeping.page */ "./src/app/housekeeping/housekeeping.page.ts");




const routes = [
    {
        path: '',
        component: _housekeeping_page__WEBPACK_IMPORTED_MODULE_3__["HousekeepingPage"]
    }
];
let HousekeepingPageRoutingModule = class HousekeepingPageRoutingModule {
};
HousekeepingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HousekeepingPageRoutingModule);



/***/ }),

/***/ "./src/app/housekeeping/housekeeping.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/housekeeping/housekeeping.module.ts ***!
  \*****************************************************/
/*! exports provided: HousekeepingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousekeepingPageModule", function() { return HousekeepingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _housekeeping_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./housekeeping-routing.module */ "./src/app/housekeeping/housekeeping-routing.module.ts");
/* harmony import */ var _housekeeping_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./housekeeping.page */ "./src/app/housekeeping/housekeeping.page.ts");







let HousekeepingPageModule = class HousekeepingPageModule {
};
HousekeepingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _housekeeping_routing_module__WEBPACK_IMPORTED_MODULE_5__["HousekeepingPageRoutingModule"]
        ],
        declarations: [_housekeeping_page__WEBPACK_IMPORTED_MODULE_6__["HousekeepingPage"]]
    })
], HousekeepingPageModule);



/***/ }),

/***/ "./src/app/housekeeping/housekeeping.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/housekeeping/housekeeping.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-header {\n  background: transparent;\n}\nion-header ion-label {\n  font-size: 13px;\n  font-family: \"regular\";\n}\nion-header ion-item {\n  --background: transparent;\n}\nion-header ion-item ion-avatar {\n  background: white;\n}\nion-label {\n  font-size: 7px;\n}\nion-content {\n  /*\n    Authors : bunchdevelopers (Rahul Jograna)\n    Website : https://bunchdevelopers.com/\n    App Name : ionic6Template Pack\n    This App Template Source code is licensed as per the\n    terms found in the Website https://bunchdevelopers.com/license\n    Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n  */\n}\nion-content * {\n  font-family: poppins;\n}\nion-content .main-header {\n  height: 25vh;\n  width: 150%;\n  background: linear-gradient(45deg, var(--ion-color-tertiary) 30%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 30px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -14vh;\n  margin-top: -60px;\n}\nion-content ion-grid {\n  width: 100%;\n  position: absolute;\n  top: 35px;\n  left: 0;\n  transform: translateY(10vh);\n  padding-bottom: 8vh;\n}\nion-content ion-grid ion-row ion-col ion-label ion-note {\n  font-size: 0.2rem;\n}\nion-content ion-grid ion-row ion-col ion-label ion-chip ion-label {\n  position: absolute;\n  font-size: 1.4rem;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-label b {\n  font-size: 1.2rem;\n}\nion-content ion-grid ion-row ion-col ion-button {\n  height: 3em !important;\n  transform: translateY(10%);\n  text-transform: none;\n}\nion-content ion-grid ion-row ion-col ion-button ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-col ion-button ion-icon {\n  font-size: 1rem;\n}\nion-content ion-grid ion-row ion-col ion-card {\n  box-shadow: -1px 11px 10px -6px #f7b34e;\n  border-radius: 5px !important;\n  margin: 5px 5px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail {\n  width: 10vh;\n  height: 10vh;\n  border-radius: 10px;\n}\nion-content ion-grid ion-row ion-col ion-card ion-thumbnail img {\n  width: 10vh;\n  height: 10vh;\n  transform: translateY(10%);\n}\nion-content ion-grid ion-row ion-col ion-card ion-card-content ion-label {\n  font-weight: regular;\n  text-shadow: 1px 1px 1px var(--ion-color-medium);\n  letter-spacing: 0.5px;\n}\nion-content ion-grid ion-list {\n  background: transparent;\n}\nion-content ion-grid ion-list ion-item {\n  width: 95%;\n  margin: auto;\n  border-radius: 5px;\n  margin-bottom: 2vh;\n}\nion-content ion-grid ion-list ion-item p {\n  font-size: 0.65rem;\n}\nion-content ion-grid ion-list ion-item ion-text {\n  font-weight: 800;\n}\nion-content ion-header ion-toolbar ion-title {\n  padding: 0px;\n  font-family: \"regular\";\n}\nion-content ion-header ion-toolbar ion-buttons {\n  padding: 5px 2px 5px 2px;\n  margin: 10px;\n}\nion-content ion-header ion-toolbar ion-buttons ion-button {\n  height: 40px;\n  width: 40px;\n  border: 1px solid lightgray;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\nion-content ion-header ion-toolbar ion-buttons ion-button ion-icon {\n  color: gray;\n}\nion-content .item_div ion-row .scroll_div {\n  overflow: scroll;\n}\nion-content .item_div ion-row .scroll_div .item {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  display: flex;\n  flex-direction: row;\n}\nion-content .item_div ion-row .scroll_div .item ion-chip {\n  height: 50px;\n  border-radius: 10px;\n}\nion-content .main_content {\n  padding: 10px;\n  border-radius: 10px;\n}\nion-content .main_content ion-row ion-col .img {\n  height: 100px;\n  width: 100px;\n  border-radius: 10px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nion-content .main_content ion-row ion-col .title {\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n}\nion-content .main_content ion-row ion-col .title .ttl {\n  font-size: 14px;\n  font-family: \"bold\";\n}\nion-content .main_content ion-row ion-col .title .sub_ttl1 {\n  font-size: 13px;\n  margin: 3px 0px 3px 0px;\n  color: #0c0101;\n  font-family: \"regular\";\n}\nion-content .main_content ion-row ion-col .title .sub_ttl {\n  font-size: 13px;\n  margin: 3px 0px 3px 0px;\n  color: #080000;\n  font-family: \"regular\";\n}\nion-content .main_content ion-row ion-col .title .icon_title {\n  display: flex;\n  align-items: center;\n  color: #ff7c31;\n  margin: 2px 0px 2px 0px;\n}\nion-content .main_content ion-row ion-col .title .icon_title ion-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\nion-content .main_content ion-row ion-col .title .icon_title ion-label {\n  font-size: 12px;\n}\nion-content .main_content .line {\n  width: 100%;\n  border-bottom: 1px solid lightgray;\n  margin: 20px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2VrZWVwaW5nL2hvdXNla2VlcGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvdXNla2VlcGluZy9DOlxcbmV3YXNhZmluYWxcXGFzYXNlcnZhbmRyb2lkL3NyY1xcYXBwXFxob3VzZWtlZXBpbmdcXGhvdXNla2VlcGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBS0ksdUJBQUE7QURGSjtBQ0ZJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FESU47QUNESTtFQUNFLHlCQUFBO0FER047QUNGTTtFQUNFLGlCQUFBO0FESVI7QUNDRTtFQUNFLGNBQUE7QURFSjtBQ0NFO0VBNkZBOzs7Ozs7O0dBQUE7QURuRkY7QUNUSTtFQUNFLG9CQUFBO0FEV047QUNSSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0dBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRFVOO0FDUkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QURVTjtBQ05ZO0VBQ0UsaUJBQUE7QURRZDtBQ0xjO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnREFBQTtBRE9oQjtBQ0pZO0VBQ0UsaUJBQUE7QURNZDtBQ0hVO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FES1o7QUNKWTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBRE1kO0FDSlk7RUFDRSxlQUFBO0FETWQ7QUNIVTtFQUNFLHVDQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FES1o7QUNKWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURNZDtBQ0xjO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRE9oQjtBQ0hjO0VBQ0Usb0JBQUE7RUFDQSxnREFBQTtFQUNBLHFCQUFBO0FES2hCO0FDQ007RUFDRSx1QkFBQTtBRENSO0FDQVE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURFVjtBQ0RVO0VBQ0Usa0JBQUE7QURHWjtBQ0RVO0VBQ0UsZ0JBQUE7QURHWjtBQ1lNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FEVlI7QUNZTTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBRFZSO0FDV1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFRWO0FDVVU7RUFDRSxXQUFBO0FEUlo7QUNpQks7RUFDRyxnQkFBQTtBRGZSO0FDZ0JRO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEZFY7QUNlVTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRGJaO0FDb0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FEbEJKO0FDcUJRO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBRG5CVjtBQ3FCUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FEbkJWO0FDb0JVO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEbEJaO0FDcUJVO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FEbkJaO0FDcUJVO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FEbkJaO0FDc0JVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FEcEJaO0FDcUJZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEbkJkO0FDcUJZO0VBQ0UsZUFBQTtBRG5CZDtBQ3lCSTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0FEdkJOIiwiZmlsZSI6InNyYy9hcHAvaG91c2VrZWVwaW5nL2hvdXNla2VlcGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taGVhZGVyIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWhlYWRlciBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24taGVhZGVyIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA3cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLypcbiAgICBBdXRob3JzIDogYnVuY2hkZXZlbG9wZXJzIChSYWh1bCBKb2dyYW5hKVxuICAgIFdlYnNpdGUgOiBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vXG4gICAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gICAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICAgIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9saWNlbnNlXG4gICAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiAgKi9cbn1cbmlvbi1jb250ZW50ICoge1xuICBmb250LWZhbWlseTogcG9wcGlucztcbn1cbmlvbi1jb250ZW50IC5tYWluLWhlYWRlciB7XG4gIGhlaWdodDogMjV2aDtcbiAgd2lkdGg6IDE1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAzMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMCAxcHggMzBweCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNHZoO1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTB2aCk7XG4gIHBhZGRpbmctYm90dG9tOiA4dmg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWxhYmVsIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAwLjJyZW07XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWxhYmVsIGlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tbGFiZWwgYiB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDNlbSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24gaW9uLWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICBib3gtc2hhZG93OiAtMXB4IDExcHggMTBweCAtNnB4ICNmN2IzNGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDVweCA1cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMHZoO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTB2aDtcbiAgaGVpZ2h0OiAxMHZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tbGlzdCBpb24taXRlbSB7XG4gIHdpZHRoOiA5NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tbGlzdCBpb24taXRlbSBwIHtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRleHQge1xuICBmb250LXdlaWdodDogODAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tdGl0bGUge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbn1cbmlvbi1jb250ZW50IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMge1xuICBwYWRkaW5nOiA1cHggMnB4IDVweCAycHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gIGNvbG9yOiBncmF5O1xufVxuaW9uLWNvbnRlbnQgLml0ZW1fZGl2IGlvbi1yb3cgLnNjcm9sbF9kaXYge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuaW9uLWNvbnRlbnQgLml0ZW1fZGl2IGlvbi1yb3cgLnNjcm9sbF9kaXYgLml0ZW0ge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCAuaXRlbV9kaXYgaW9uLXJvdyAuc2Nyb2xsX2RpdiAuaXRlbSBpb24tY2hpcCB7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2NvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fY29udGVudCBpb24tcm93IGlvbi1jb2wgLmltZyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmlvbi1jb250ZW50IC5tYWluX2NvbnRlbnQgaW9uLXJvdyBpb24tY29sIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLnR0bCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLm1haW5fY29udGVudCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIC5zdWJfdHRsMSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAzcHggMHB4IDNweCAwcHg7XG4gIGNvbG9yOiAjMGMwMTAxO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLnN1Yl90dGwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xuICBjb2xvcjogIzA4MDAwMDtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuaW9uLWNvbnRlbnQgLm1haW5fY29udGVudCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIC5pY29uX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZjdjMzE7XG4gIG1hcmdpbjogMnB4IDBweCAycHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1haW5fY29udGVudCBpb24tcm93IGlvbi1jb2wgLnRpdGxlIC5pY29uX3RpdGxlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbmlvbi1jb250ZW50IC5tYWluX2NvbnRlbnQgaW9uLXJvdyBpb24tY29sIC50aXRsZSAuaWNvbl90aXRsZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAubWFpbl9jb250ZW50IC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbjogMjBweCAwcHggMHB4IDBweDtcbn0iLCJpb24taGVhZGVyIHtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICAgfVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTo3cHg7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi1jb250ZW50IHtcclxuICAgICoge1xyXG4gICAgICBmb250LWZhbWlseTpwb3BwaW5zO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1haW4taGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OjI1dmg7XHJcbiAgICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMzAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDMwcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTR2aDtcclxuICAgICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMzVweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdmgpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHZoO1xyXG4gICAgICBpb24tcm93IHtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGlvbi1ub3RlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2hpcCB7XHJcbiAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwJSk7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlvbi1jYXJkIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAxMXB4IDEwcHggLTZweCByZ2IoMjQ3LCAxNzksIDc4KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjo1cHggNXB4O1xyXG4gICAgICAgICAgICBpb24tdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICB3aWR0aDoxMHZoO1xyXG4gICAgICAgICAgICAgIGhlaWdodDoxMHZoO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHZoO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwdmg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiByZWd1bGFyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLypcclxuICAgIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXHJcbiAgICBXZWJzaXRlIDogaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL1xyXG4gICAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXHJcbiAgICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXHJcbiAgICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2J1bmNoZGV2ZWxvcGVycy5jb20vbGljZW5zZVxyXG4gICAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cclxuICAqL1xyXG4gIGlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAycHggNXB4IDJweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLml0ZW1fZGl2IHtcclxuICAgIGlvbi1yb3cge1xyXG4gICAgIC5zY3JvbGxfZGl2IHtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgaW9uLWNoaXAge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBpb24tcm93IHtcclxuICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgIC50dGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViX3R0bDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDEyLCAxLCAxKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yl90dGwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDgsIDAsIDApO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuaWNvbl90aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmY3YzMxO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwcHggMnB4IDBweDtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/housekeeping/housekeeping.page.ts":
/*!***************************************************!*\
  !*** ./src/app/housekeeping/housekeeping.page.ts ***!
  \***************************************************/
/*! exports provided: HousekeepingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousekeepingPage", function() { return HousekeepingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");





let HousekeepingPage = class HousekeepingPage {
    constructor(loadingController, util, router) {
        this.loadingController = loadingController;
        this.util = util;
        this.router = router;
        this.aduanhkeeping = [
            { id: 1, name: '', src: '', background: '', page: '' },
        ];
        this.tugas = [
            { id: 1, name: '', src: '', background: '', page: '' },
        ];
    }
    ngOnInit() {
    }
    openAdhkeeping() {
        this.router.navigate(['aduanhk']);
    }
    openTugas() {
        this.router.navigate(['tugashk']);
    }
    onBack() {
        this.router.navigate(['home']);
    }
};
HousekeepingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HousekeepingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-housekeeping',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./housekeeping.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/housekeeping/housekeeping.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./housekeeping.page.scss */ "./src/app/housekeeping/housekeeping.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HousekeepingPage);



/***/ })

}]);
//# sourceMappingURL=housekeeping-housekeeping-module-es2015.js.map