(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tugashk-tugashk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tugashk/tugashk.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tugashk/tugashk.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>tugashk</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/tugashk/tugashk-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tugashk/tugashk-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TugashkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TugashkPageRoutingModule", function() { return TugashkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tugashk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tugashk.page */ "./src/app/tugashk/tugashk.page.ts");




const routes = [
    {
        path: '',
        component: _tugashk_page__WEBPACK_IMPORTED_MODULE_3__["TugashkPage"]
    }
];
let TugashkPageRoutingModule = class TugashkPageRoutingModule {
};
TugashkPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TugashkPageRoutingModule);



/***/ }),

/***/ "./src/app/tugashk/tugashk.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tugashk/tugashk.module.ts ***!
  \*******************************************/
/*! exports provided: TugashkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TugashkPageModule", function() { return TugashkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tugashk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tugashk-routing.module */ "./src/app/tugashk/tugashk-routing.module.ts");
/* harmony import */ var _tugashk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tugashk.page */ "./src/app/tugashk/tugashk.page.ts");







let TugashkPageModule = class TugashkPageModule {
};
TugashkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tugashk_routing_module__WEBPACK_IMPORTED_MODULE_5__["TugashkPageRoutingModule"]
        ],
        declarations: [_tugashk_page__WEBPACK_IMPORTED_MODULE_6__["TugashkPage"]]
    })
], TugashkPageModule);



/***/ }),

/***/ "./src/app/tugashk/tugashk.page.scss":
/*!*******************************************!*\
  !*** ./src/app/tugashk/tugashk.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R1Z2FzaGsvdHVnYXNoay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tugashk/tugashk.page.ts":
/*!*****************************************!*\
  !*** ./src/app/tugashk/tugashk.page.ts ***!
  \*****************************************/
/*! exports provided: TugashkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TugashkPage", function() { return TugashkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TugashkPage = class TugashkPage {
    constructor() { }
    ngOnInit() {
    }
};
TugashkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tugashk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tugashk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tugashk/tugashk.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tugashk.page.scss */ "./src/app/tugashk/tugashk.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TugashkPage);



/***/ })

}]);
//# sourceMappingURL=tugashk-tugashk-module-es2015.js.map