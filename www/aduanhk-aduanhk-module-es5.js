function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aduanhk-aduanhk-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aduanhk/aduanhk.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aduanhk/aduanhk.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAduanhkAduanhkPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-header class=\"ion-no-border\">\r\n    <ion-item lines=\"none\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"util.openSideMenu()\">\r\n          <ion-icon name=\"menu\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-label color=\"dark\">\r\n      Form Aduan House Keeping\r\n    </ion-label>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon (click)=\"onBack()\" name=\"arrow-undo\"></ion-icon>\r\n    </ion-buttons>\r\n    </ion-item>\r\n   </ion-header>\r\n  \r\n   <div class=\"main_content ion-padding\">\r\n    <ion-label class=\"sub_heading\">Deskripsi</ion-label>\r\n    <ion-label class=\"sub_heading\">Silahkan mengisi aduan apabila ditemukan hal-hal yang tidak berkenan</ion-label>\r\n      <!-- Tambahkan ini pada bagian form -->\r\n    <div>\r\n      <form class=\"container\" [formGroup]=\"FormAduanHk\" (ngSubmit)=\"submitAduanHk()\">\r\n        <ion-item>\r\n          <ion-input type=\"text\" name=\"lokasi\" placeholder=\"Lokasi\" formControlName=\"lokasi\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input type=\"text\" name=\"deskripsi_aduan\" placeholder=\"Deskripsi Aduan\"  formControlName=\"deskripsi\"></ion-input>\r\n        </ion-item>\r\n        <ion-button type=\"submit\" expand=\"block\" color=\"primary\">Submit</ion-button>\r\n      </form>\r\n    </div>\r\n   </div>\r\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/aduanhk/aduanhk-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/aduanhk/aduanhk-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AduanhkPageRoutingModule */

  /***/
  function srcAppAduanhkAduanhkRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AduanhkPageRoutingModule", function () {
      return AduanhkPageRoutingModule;
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


    var _aduanhk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aduanhk.page */
    "./src/app/aduanhk/aduanhk.page.ts");

    var routes = [{
      path: '',
      component: _aduanhk_page__WEBPACK_IMPORTED_MODULE_3__["AduanhkPage"]
    }];

    var AduanhkPageRoutingModule = /*#__PURE__*/_createClass(function AduanhkPageRoutingModule() {
      _classCallCheck(this, AduanhkPageRoutingModule);
    });

    AduanhkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AduanhkPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/aduanhk/aduanhk.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/aduanhk/aduanhk.module.ts ***!
    \*******************************************/

  /*! exports provided: AduanhkPageModule */

  /***/
  function srcAppAduanhkAduanhkModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AduanhkPageModule", function () {
      return AduanhkPageModule;
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


    var _aduanhk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aduanhk-routing.module */
    "./src/app/aduanhk/aduanhk-routing.module.ts");
    /* harmony import */


    var _aduanhk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./aduanhk.page */
    "./src/app/aduanhk/aduanhk.page.ts");

    var AduanhkPageModule = /*#__PURE__*/_createClass(function AduanhkPageModule() {
      _classCallCheck(this, AduanhkPageModule);
    });

    AduanhkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aduanhk_routing_module__WEBPACK_IMPORTED_MODULE_5__["AduanhkPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_aduanhk_page__WEBPACK_IMPORTED_MODULE_6__["AduanhkPage"]]
    })], AduanhkPageModule);
    /***/
  },

  /***/
  "./src/app/aduanhk/aduanhk.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/aduanhk/aduanhk.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAduanhkAduanhkPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : bunchdevelopers (Rahul Jograna)\n  Website : https://bunchdevelopers.com/\n  App Name : ionic6Template Pack\n  This App Template Source code is licensed as per the\n  terms found in the Website https://bunchdevelopers.com/license\n  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.\n*/\n.main-header {\n  height: 26vh;\n  width: 150%;\n  background: linear-gradient(45deg, var(--ion-color-tertiary) 30%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 30px var(--ion-color-light);\n  border-radius: 0 0 50% 50%;\n  margin-left: -14vh;\n  margin-top: -60px;\n}\n.bg_img {\n  height: 250px;\n  width: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.bg_img .back_div {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 40px;\n}\n.bg_img .back_div ion-buttons {\n  padding: 5px 2px 5px 2px;\n  margin: 10px;\n}\n.bg_img .back_div ion-buttons ion-button {\n  height: 40px;\n  width: 40px;\n  border: 1px solid #0a0000;\n  --border-radius: 50%;\n  border-radius: 50%;\n}\n.bg_img .back_div ion-buttons ion-button ion-icon {\n  color: #030000;\n}\n.bg_img .back_div .btn ion-button {\n  border: none;\n}\n.title {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n.title .sub_heading {\n  font-family: \"regular\";\n  font-size: 15px;\n}\n.title .sub_ttl {\n  position: absolute;\n  right: 5px;\n  top: 45px;\n  font-size: 13px;\n  color: #0b0501;\n}\n.rate ion-icon {\n  margin-right: 5px;\n  font-size: 20px;\n  color: #ff7c31;\n}\n.sub_heading {\n  font-family: \"bold\";\n  color: #0f0e0e;\n  margin-top: 10px;\n  font-size: 13px;\n}\n.main_title {\n  font-family: \"bold\";\n  color: black;\n  font-size: 18px;\n  margin-top: 20px;\n}\np {\n  font-family: \"regular\";\n}\nion-item {\n  --background: transparent;\n  background: #f8f9fff3;\n  padding: 10px 0px 10px 0px;\n  margin: 20px 0px 20px 0px;\n  border-radius: 10px;\n}\nion-item ion-label {\n  font-family: \"bold\";\n  font-size: 15px;\n  --background: #f8f9fff3;\n  margin-bottom: 11px;\n}\nion-item ion-select {\n  font-size: 13px;\n  --background: #f8f9fff3;\n}\nion-item ion-select ion-select-option {\n  --background: #f8f9fff3;\n}\nion-row ion-col {\n  position: relative;\n  padding: 0px;\n}\nion-row ion-col .btn {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  bottom: 5px;\n  right: 0px;\n}\nion-row ion-col .btn ion-buttons {\n  display: flex;\n  text-align: center;\n  margin: 0px 0px 0px 0px;\n}\nion-row ion-col .btn ion-buttons ion-button {\n  background: linear-gradient(#ffa124, #ff7c31);\n  border-radius: 30%;\n  height: 35px;\n  width: 40px;\n}\nion-row ion-col .btn .label_number {\n  display: flex;\n  justify-content: center;\n}\nion-row ion-col .btn .label_number ion-button {\n  border: 1px solid #ff7c31;\n  background: #ffff;\n}\nion-row ion-col .btn .label_number ion-label {\n  color: #ff7c31;\n  font-family: \"bold\";\n}\n.content_button {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR1YW5oay9hZHVhbmhrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWR1YW5oay9DOlxcbmV3YXNhZmluYWxcXGFzYXNlcnZhbmRyb2lkL3NyY1xcYXBwXFxhZHVhbmhrXFxhZHVhbmhrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnR0FBQTtFQUNBLDZDQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEQ0o7QUNDRTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FERU47QUNETTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURHUjtBQ0ZRO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FESVY7QUNIVTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FES1o7QUNKWTtFQUNFLGNBQUE7QURNZDtBQ0RVO0VBQ0UsWUFBQTtBREdaO0FDR0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURBTjtBQ0NNO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FEQ1I7QUNDTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRENSO0FDSU07RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FERFI7QUNLSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBREZOO0FDS0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURGTjtBQ0tJO0VBQ0Usc0JBQUE7QURGTjtBQ0tJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBREZOO0FDR007RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERFI7QUNHTTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtBRERSO0FDRVE7RUFDRSx1QkFBQTtBREFWO0FDTU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7QURIUjtBQ0lRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBREZWO0FDR1U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRERaO0FDRVk7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURBZDtBQ0dVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FERFo7QUNFWTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QURBZDtBQ0VZO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FEQWQ7QUNPSTtFQUNFLGdCQUFBO0FESk4iLCJmaWxlIjoic3JjL2FwcC9hZHVhbmhrL2FkdWFuaGsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGJ1bmNoZGV2ZWxvcGVycyAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYzZUZW1wbGF0ZSBQYWNrXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMS1wcmVzZW50IGJ1bmNoZGV2ZWxvcGVycy5cbiovXG4ubWFpbi1oZWFkZXIge1xuICBoZWlnaHQ6IDI2dmg7XG4gIHdpZHRoOiAxNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMzAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDMwcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDUwJSA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTR2aDtcbiAgbWFyZ2luLXRvcDogLTYwcHg7XG59XG5cbi5iZ19pbWcge1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5iZ19pbWcgLmJhY2tfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uYmdfaW1nIC5iYWNrX2RpdiBpb24tYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDVweCAycHggNXB4IDJweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmJnX2ltZyAuYmFja19kaXYgaW9uLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYTAwMDA7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYmdfaW1nIC5iYWNrX2RpdiBpb24tYnV0dG9ucyBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6ICMwMzAwMDA7XG59XG4uYmdfaW1nIC5iYWNrX2RpdiAuYnRuIGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpdGxlIC5zdWJfaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRpdGxlIC5zdWJfdHRsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMwYjA1MDE7XG59XG5cbi5yYXRlIGlvbi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZjdjMzE7XG59XG5cbi5zdWJfaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbiAgY29sb3I6ICMwZjBlMGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1haW5fdGl0bGUge1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmZmMztcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJib2xkXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZjhmOWZmZjM7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5pb24taXRlbSBpb24tc2VsZWN0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmZmMztcbn1cbmlvbi1pdGVtIGlvbi1zZWxlY3QgaW9uLXNlbGVjdC1vcHRpb24ge1xuICAtLWJhY2tncm91bmQ6ICNmOGY5ZmZmMztcbn1cblxuaW9uLXJvdyBpb24tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tcm93IGlvbi1jb2wgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5pb24tcm93IGlvbi1jb2wgLmJ0biBpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAwcHg7XG59XG5pb24tcm93IGlvbi1jb2wgLmJ0biBpb24tYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmExMjQsICNmZjdjMzEpO1xuICBib3JkZXItcmFkaXVzOiAzMCU7XG4gIGhlaWdodDogMzVweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5pb24tcm93IGlvbi1jb2wgLmJ0biAubGFiZWxfbnVtYmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tcm93IGlvbi1jb2wgLmJ0biAubGFiZWxfbnVtYmVyIGlvbi1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3YzMxO1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbn1cbmlvbi1yb3cgaW9uLWNvbCAuYnRuIC5sYWJlbF9udW1iZXIgaW9uLWxhYmVsIHtcbiAgY29sb3I6ICNmZjdjMzE7XG4gIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcbn1cblxuLmNvbnRlbnRfYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iLCIvKlxyXG4gIEF1dGhvcnMgOiBidW5jaGRldmVsb3BlcnMgKFJhaHVsIEpvZ3JhbmEpXHJcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vYnVuY2hkZXZlbG9wZXJzLmNvbS9cclxuICBBcHAgTmFtZSA6IGlvbmljNlRlbXBsYXRlIFBhY2tcclxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXHJcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9idW5jaGRldmVsb3BlcnMuY29tL2xpY2Vuc2VcclxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIxLXByZXNlbnQgYnVuY2hkZXZlbG9wZXJzLlxyXG4qL1xyXG5cclxuLm1haW4taGVhZGVyIHtcclxuICAgIGhlaWdodDoyNnZoO1xyXG4gICAgd2lkdGg6IDE1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgMzAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNTAlIDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTR2aDtcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIH1cclxuICAuYmdfaW1nIHtcclxuICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIC5iYWNrX2RpdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAycHggNXB4IDJweDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTAsIDAsIDApO1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYigzLCAwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAuc3ViX2hlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnN1Yl90dGwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogNDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMwYjA1MDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJhdGUge1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmY3YzMxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zdWJfaGVhZGluZyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcclxuICAgICAgY29sb3I6ICMwZjBlMGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1haW5fdGl0bGUge1xyXG4gICAgICBmb250LWZhbWlseTogXCJib2xkXCI7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwicmVndWxhclwiO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmZmMztcclxuICAgICAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiYm9sZFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmZmMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1zZWxlY3Qge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmZmMztcclxuICAgICAgICBpb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICNmOGY5ZmZmMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW9uLXJvdyB7XHJcbiAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmExMjQsICNmZjdjMzEpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sYWJlbF9udW1iZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2MzMTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmY3YzMxO1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImJvbGRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudF9idXR0b24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgIl19 */";
    /***/
  },

  /***/
  "./src/app/aduanhk/aduanhk.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/aduanhk/aduanhk.page.ts ***!
    \*****************************************/

  /*! exports provided: AduanhkPage */

  /***/
  function srcAppAduanhkAduanhkPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AduanhkPage", function () {
      return AduanhkPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/service.service */
    "./src/app/services/service.service.ts");
    /* harmony import */


    var rxjs_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/index */
    "./node_modules/rxjs/index.js");
    /* harmony import */


    var rxjs_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var AduanhkPage = /*#__PURE__*/function () {
      function AduanhkPage(formBuilder, navCtrl, loadingController, modalController, platform, toastController, serviceService, router, util) {
        _classCallCheck(this, AduanhkPage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.platform = platform;
        this.toastController = toastController;
        this.serviceService = serviceService;
        this.router = router;
        this.util = util;
        this.authenticationState = new rxjs_index__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]();
        this.validations = {
          'lokasi': [{
            type: 'required',
            message: 'lokasi harus diisi.'
          }],
          'deskripsi': [{
            type: 'required',
            message: 'deskripsi harus diisi.'
          }]
        };
      }

      _createClass(AduanhkPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.FormAduanHk = this.formBuilder.group({
            lokasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            deskripsi: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
          });
        }
      }, {
        key: "submitAduanHk",
        value: function submitAduanHk() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

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
                    this.serviceService.submitaduanhk(this.FormAduanHk.value, 'housekeeping/add').subscribe(function (data) {
                      _this.presentToast("Aduan Anda Terkirim");

                      console.log(_this.FormAduanHk.value);

                      _this.FormAduanHk.reset();

                      loading.dismiss();
                    }, function (error) {
                      _this.presentToast(error);

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
        key: "presentToast",
        value: function presentToast(Message) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: Message,
                      duration: 2500,
                      position: "bottom"
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "onBack",
        value: function onBack() {
          this.router.navigate(['home']);
        }
      }]);

      return AduanhkPage;
    }();

    AduanhkPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }];
    };

    AduanhkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-aduanhk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aduanhk.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aduanhk/aduanhk.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aduanhk.page.scss */
      "./src/app/aduanhk/aduanhk.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _services_service_service__WEBPACK_IMPORTED_MODULE_5__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]])], AduanhkPage);
    /***/
  }
}]);
//# sourceMappingURL=aduanhk-aduanhk-module-es5.js.map