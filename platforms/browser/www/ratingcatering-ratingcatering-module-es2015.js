(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ratingcatering-ratingcatering-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ratingcatering/ratingcatering.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ratingcatering/ratingcatering.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ratingcatering</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/ratingcatering/ratingcatering-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ratingcatering/ratingcatering-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RatingcateringPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingcateringPageRoutingModule", function() { return RatingcateringPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ratingcatering_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ratingcatering.page */ "./src/app/ratingcatering/ratingcatering.page.ts");




const routes = [
    {
        path: '',
        component: _ratingcatering_page__WEBPACK_IMPORTED_MODULE_3__["RatingcateringPage"]
    }
];
let RatingcateringPageRoutingModule = class RatingcateringPageRoutingModule {
};
RatingcateringPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatingcateringPageRoutingModule);



/***/ }),

/***/ "./src/app/ratingcatering/ratingcatering.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ratingcatering/ratingcatering.module.ts ***!
  \*********************************************************/
/*! exports provided: RatingcateringPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingcateringPageModule", function() { return RatingcateringPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ratingcatering_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ratingcatering-routing.module */ "./src/app/ratingcatering/ratingcatering-routing.module.ts");
/* harmony import */ var _ratingcatering_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ratingcatering.page */ "./src/app/ratingcatering/ratingcatering.page.ts");







let RatingcateringPageModule = class RatingcateringPageModule {
};
RatingcateringPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ratingcatering_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingcateringPageRoutingModule"]
        ],
        declarations: [_ratingcatering_page__WEBPACK_IMPORTED_MODULE_6__["RatingcateringPage"]]
    })
], RatingcateringPageModule);



/***/ }),

/***/ "./src/app/ratingcatering/ratingcatering.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/ratingcatering/ratingcatering.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZ2NhdGVyaW5nL3JhdGluZ2NhdGVyaW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ratingcatering/ratingcatering.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/ratingcatering/ratingcatering.page.ts ***!
  \*******************************************************/
/*! exports provided: RatingcateringPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingcateringPage", function() { return RatingcateringPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingcateringPage = class RatingcateringPage {
    constructor() { }
    ngOnInit() {
    }
};
RatingcateringPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ratingcatering',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ratingcatering.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ratingcatering/ratingcatering.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ratingcatering.page.scss */ "./src/app/ratingcatering/ratingcatering.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatingcateringPage);



/***/ })

}]);
//# sourceMappingURL=ratingcatering-ratingcatering-module-es2015.js.map