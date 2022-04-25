(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tgsmaintenance-tgsmaintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tgsmaintenance/tgsmaintenance.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tgsmaintenance/tgsmaintenance.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>tgsmaintenance</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tgsmaintenance/tgsmaintenance-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tgsmaintenance/tgsmaintenance-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TgsmaintenancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TgsmaintenancePageRoutingModule", function() { return TgsmaintenancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tgsmaintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tgsmaintenance.page */ "./src/app/tgsmaintenance/tgsmaintenance.page.ts");




const routes = [
    {
        path: '',
        component: _tgsmaintenance_page__WEBPACK_IMPORTED_MODULE_3__["TgsmaintenancePage"]
    }
];
let TgsmaintenancePageRoutingModule = class TgsmaintenancePageRoutingModule {
};
TgsmaintenancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TgsmaintenancePageRoutingModule);



/***/ }),

/***/ "./src/app/tgsmaintenance/tgsmaintenance.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/tgsmaintenance/tgsmaintenance.module.ts ***!
  \*********************************************************/
/*! exports provided: TgsmaintenancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TgsmaintenancePageModule", function() { return TgsmaintenancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tgsmaintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tgsmaintenance-routing.module */ "./src/app/tgsmaintenance/tgsmaintenance-routing.module.ts");
/* harmony import */ var _tgsmaintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tgsmaintenance.page */ "./src/app/tgsmaintenance/tgsmaintenance.page.ts");







let TgsmaintenancePageModule = class TgsmaintenancePageModule {
};
TgsmaintenancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tgsmaintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["TgsmaintenancePageRoutingModule"]
        ],
        declarations: [_tgsmaintenance_page__WEBPACK_IMPORTED_MODULE_6__["TgsmaintenancePage"]]
    })
], TgsmaintenancePageModule);



/***/ }),

/***/ "./src/app/tgsmaintenance/tgsmaintenance.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/tgsmaintenance/tgsmaintenance.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rnc21haW50ZW5hbmNlL3Rnc21haW50ZW5hbmNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/tgsmaintenance/tgsmaintenance.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/tgsmaintenance/tgsmaintenance.page.ts ***!
  \*******************************************************/
/*! exports provided: TgsmaintenancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TgsmaintenancePage", function() { return TgsmaintenancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TgsmaintenancePage = class TgsmaintenancePage {
    constructor() { }
    ngOnInit() {
    }
};
TgsmaintenancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tgsmaintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tgsmaintenance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tgsmaintenance/tgsmaintenance.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tgsmaintenance.page.scss */ "./src/app/tgsmaintenance/tgsmaintenance.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TgsmaintenancePage);



/***/ })

}]);
//# sourceMappingURL=tgsmaintenance-tgsmaintenance-module-es2015.js.map