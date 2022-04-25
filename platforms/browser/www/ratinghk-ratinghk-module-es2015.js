(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ratinghk-ratinghk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ratinghk/ratinghk.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ratinghk/ratinghk.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>ratinghk</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/ratinghk/ratinghk-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ratinghk/ratinghk-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RatinghkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatinghkPageRoutingModule", function() { return RatinghkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ratinghk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ratinghk.page */ "./src/app/ratinghk/ratinghk.page.ts");




const routes = [
    {
        path: '',
        component: _ratinghk_page__WEBPACK_IMPORTED_MODULE_3__["RatinghkPage"]
    }
];
let RatinghkPageRoutingModule = class RatinghkPageRoutingModule {
};
RatinghkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RatinghkPageRoutingModule);



/***/ }),

/***/ "./src/app/ratinghk/ratinghk.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ratinghk/ratinghk.module.ts ***!
  \*********************************************/
/*! exports provided: RatinghkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatinghkPageModule", function() { return RatinghkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ratinghk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ratinghk-routing.module */ "./src/app/ratinghk/ratinghk-routing.module.ts");
/* harmony import */ var _ratinghk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ratinghk.page */ "./src/app/ratinghk/ratinghk.page.ts");







let RatinghkPageModule = class RatinghkPageModule {
};
RatinghkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ratinghk_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatinghkPageRoutingModule"]
        ],
        declarations: [_ratinghk_page__WEBPACK_IMPORTED_MODULE_6__["RatinghkPage"]]
    })
], RatinghkPageModule);



/***/ }),

/***/ "./src/app/ratinghk/ratinghk.page.scss":
/*!*********************************************!*\
  !*** ./src/app/ratinghk/ratinghk.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZ2hrL3JhdGluZ2hrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ratinghk/ratinghk.page.ts":
/*!*******************************************!*\
  !*** ./src/app/ratinghk/ratinghk.page.ts ***!
  \*******************************************/
/*! exports provided: RatinghkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatinghkPage", function() { return RatinghkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatinghkPage = class RatinghkPage {
    constructor() { }
    ngOnInit() {
    }
};
RatinghkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ratinghk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ratinghk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ratinghk/ratinghk.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ratinghk.page.scss */ "./src/app/ratinghk/ratinghk.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RatinghkPage);



/***/ })

}]);
//# sourceMappingURL=ratinghk-ratinghk-module-es2015.js.map