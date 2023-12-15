/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 24448:
/*!****************************************************************!*\
  !*** ./projects/panel-zakladu/src/environments/environment.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  title: '1',
  linkDoZdjeciaProfilowego: 'http://fenek.tech:3000/pliki/wyswietlZdjecieProfilowe/'
};

/***/ }),

/***/ 99337:
/*!*************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/app-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _one_page_strona_one_page_strona_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one-page-strona/one-page-strona.component */ 35220);
/* harmony import */ var _straznicy_identyfikator_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./straznicy/identyfikator.guard */ 40180);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 77508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






const routes = [{
  path: 'pageNotFound',
  component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__.PageNotFoundComponent
}, {
  path: ':identyfikator',
  component: _one_page_strona_one_page_strona_component__WEBPACK_IMPORTED_MODULE_0__.OnePageStronaComponent,
  canActivate: [_straznicy_identyfikator_guard__WEBPACK_IMPORTED_MODULE_1__.IdentyfikatorGuard]
}, {
  path: '',
  component: _one_page_strona_one_page_strona_component__WEBPACK_IMPORTED_MODULE_0__.OnePageStronaComponent
}
/* {
       path: '',
   component: OnePageStronaComponent, canActivate: [IdentyfikatorGuard]
 }*/];

class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 8421:
/*!********************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/app.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 74928);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../package.json */ 4147);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./host */ 26606);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 41444);









function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Dev: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.wersja);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r0.data_wydania, " SubDomainID: ", ctx_r0.danePodreczne.subDomainID, "");
  }
}
class AppComponent {
  constructor(platformId, danePodreczne, host) {
    this.platformId = platformId;
    this.danePodreczne = danePodreczne;
    this.host = host;
    this.environment = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.wersja = _package_json__WEBPACK_IMPORTED_MODULE_1__.version;
    this.data_wydania = _package_json__WEBPACK_IMPORTED_MODULE_1__.data_wydania;
    this.title = 'reklamowaStronaZakladu';
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      // Kod zostanie wykonany, jeśli strona jest renderowana po stronie klienta
      //    console.log('Rendered on the client side.');
      //  console.log(this.host);
    }
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformId)) {
      // Kod zostanie wykonany, jeśli strona jest renderowana po stronie serwera
      //  console.log('Rendered on the server side.');
      //  console.log(this.host);
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_3__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_host__WEBPACK_IMPORTED_MODULE_2__.HOST_ID, 8));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 1,
  consts: [["class", "dev", 4, "ngIf"], [1, "dev"], [1, "wersja"], [1, "data"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_div_1_Template, 6, 3, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.environment.production == false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet],
  styles: [".dev[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -7px;\n  left: 10px;\n  z-index: 1000;\n  color: rgba(255, 0, 0, 0.83);\n  opacity: 0.3;\n  font-weight: bolder;\n  font-size: 40px;\n  -webkit-user-select: none;\n          user-select: none;\n  user-focus: none;\n}\n.dev[_ngcontent-%COMP%]   .wersja[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.dev[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IC03cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44Myk7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItZm9jdXM6IG5vbmU7XHJcblxyXG4gIC53ZXJzamEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbiAgfVxyXG5cclxuICAuZGF0YSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 81559:
/*!*****************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/app.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 55806);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 99337);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8421);
/* harmony import */ var _one_page_strona_one_page_strona_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./one-page-strona/one-page-strona.component */ 35220);
/* harmony import */ var _one_page_strona_komponenty_wyswietlane_pracownicy_wyswietlane_pracownicy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one-page-strona/komponenty/wyswietlane-pracownicy/wyswietlane-pracownicy.component */ 70883);
/* harmony import */ var _one_page_strona_komponenty_informacja_ojednym_pracowniku_informacja_ojednym_pracowniku_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-ojednym-pracowniku/informacja-ojednym-pracowniku.component */ 44706);
/* harmony import */ var _one_page_strona_komponenty_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./one-page-strona/komponenty/banner/banner.component */ 90977);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 8746);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 89166);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-owl-carousel-o */ 29994);
/* harmony import */ var _one_page_strona_komponenty_zdjecie_zakladu_zdjecie_zakladu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./one-page-strona/komponenty/zdjecie-zakladu/zdjecie-zakladu.component */ 53368);
/* harmony import */ var _one_page_strona_komponenty_informacja_onas_informacja_onas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-onas/informacja-onas.component */ 53477);
/* harmony import */ var _one_page_strona_komponenty_napisz_nam_napisz_nam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./one-page-strona/komponenty/napisz-nam/napisz-nam.component */ 31999);
/* harmony import */ var _one_page_strona_komponenty_zarejestruj_sie_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./one-page-strona/komponenty/zarejestruj-sie/zarejestruj-sie.component */ 13003);
/* harmony import */ var _one_page_strona_strzalka_strzalka_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./one-page-strona/strzalka/strzalka.component */ 65933);
/* harmony import */ var _one_page_strona_komponenty_ogloszenia_ogloszenia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./one-page-strona/komponenty/ogloszenia/ogloszenia.component */ 62488);
/* harmony import */ var _one_page_strona_komponenty_statystyki_statystyki_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./one-page-strona/komponenty/statystyki/statystyki.component */ 74290);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_formularz_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/formularz-zarejestruj-sie.component */ 28381);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_wybor_pracownika_wybor_pracownika_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-pracownika/wybor-pracownika.component */ 22963);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_wybor_uslug_wybor_uslug_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-uslug/wybor-uslug.component */ 37714);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_kalendarz_kalendarz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/kalendarz.component */ 93297);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_wpisanie_danych_wpisanie_danych_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wpisanie-danych/wpisanie-danych.component */ 4677);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_podsumowanie_podsumowanie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/podsumowanie/podsumowanie.component */ 61149);
/* harmony import */ var _one_page_strona_komponenty_informacja_onas_komponenty_onas_dane_podstawowe_onas_dane_podstawowe_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-onas/komponenty/onas-dane-podstawowe/onas-dane-podstawowe.component */ 56811);
/* harmony import */ var _one_page_strona_komponenty_informacja_onas_komponenty_onas_adres_onas_adres_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-onas/komponenty/onas-adres/onas-adres.component */ 63030);
/* harmony import */ var _one_page_strona_komponenty_informacja_onas_komponenty_onas_godziny_otwarcia_onas_godziny_otwarcia_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-onas/komponenty/onas-godziny-otwarcia/onas-godziny-otwarcia.component */ 56419);
/* harmony import */ var _one_page_strona_komponenty_informacja_onas_komponenty_onas_kontakt_onas_kontakt_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-onas/komponenty/onas-kontakt/onas-kontakt.component */ 26955);
/* harmony import */ var _one_page_strona_komponenty_informacja_onas_komponenty_onas_uslugi_onas_uslugi_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-onas/komponenty/onas-uslugi/onas-uslugi.component */ 28723);
/* harmony import */ var _one_page_strona_komponenty_informacja_ojednym_pracowniku_komponenty_informacje_ojednym_pracowniku_kontakt_informacje_ojednym_pracowniku_kontakt_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-kontakt/informacje-ojednym-pracowniku-kontakt.component */ 57395);
/* harmony import */ var _one_page_strona_komponenty_informacja_ojednym_pracowniku_komponenty_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component */ 8673);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_weryfikacja_weryfikacja_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/weryfikacja/weryfikacja.component */ 87718);
/* harmony import */ var _one_page_strona_komponenty_zarejestruj_sie_zegar_zegar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./one-page-strona/komponenty/zarejestruj-sie/zegar/zegar.component */ 71866);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ng-select/ng-select */ 11077);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3197);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);
/* harmony import */ var _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_kalendarz_termin_termin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/termin/termin.component */ 82136);
/* harmony import */ var _rurki_zdjecie_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rurki/zdjecie.pipe */ 81507);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 77508);
/* harmony import */ var ngx_if_platform__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-if-platform */ 54553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 4009);
// @ts-ignore










































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({
  imports: [
  // LeafletModule,
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, ngx_if_platform__WEBPACK_IMPORTED_MODULE_35__.NgxIfPlatformModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_37__.CarouselModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_38__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__.NgbPaginationModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__.NgbModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__.FontAwesomeModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _one_page_strona_one_page_strona_component__WEBPACK_IMPORTED_MODULE_2__.OnePageStronaComponent, _one_page_strona_komponenty_wyswietlane_pracownicy_wyswietlane_pracownicy_component__WEBPACK_IMPORTED_MODULE_3__.WyswietlanePracownicyComponent, _one_page_strona_komponenty_informacja_ojednym_pracowniku_informacja_ojednym_pracowniku_component__WEBPACK_IMPORTED_MODULE_4__.InformacjaOJednymPracownikuComponent,
    // StopkaComponent,
    _one_page_strona_komponenty_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent, _one_page_strona_komponenty_zdjecie_zakladu_zdjecie_zakladu_component__WEBPACK_IMPORTED_MODULE_6__.ZdjecieZakladuComponent, _one_page_strona_komponenty_informacja_onas_informacja_onas_component__WEBPACK_IMPORTED_MODULE_7__.InformacjaONasComponent, _one_page_strona_komponenty_napisz_nam_napisz_nam_component__WEBPACK_IMPORTED_MODULE_8__.NapiszNamComponent, _one_page_strona_komponenty_zarejestruj_sie_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_9__.ZarejestrujSieComponent, _one_page_strona_komponenty_statystyki_statystyki_component__WEBPACK_IMPORTED_MODULE_12__.StatystykiComponent, _one_page_strona_strzalka_strzalka_component__WEBPACK_IMPORTED_MODULE_10__.StrzalkaComponent, _one_page_strona_komponenty_ogloszenia_ogloszenia_component__WEBPACK_IMPORTED_MODULE_11__.OgloszeniaComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_formularz_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_13__.FormularzZarejestrujSieComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_wybor_pracownika_wybor_pracownika_component__WEBPACK_IMPORTED_MODULE_14__.WyborPracownikaComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_wybor_uslug_wybor_uslug_component__WEBPACK_IMPORTED_MODULE_15__.WyborUslugComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_kalendarz_kalendarz_component__WEBPACK_IMPORTED_MODULE_16__.KalendarzComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_wpisanie_danych_wpisanie_danych_component__WEBPACK_IMPORTED_MODULE_17__.WpisanieDanychComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_podsumowanie_podsumowanie_component__WEBPACK_IMPORTED_MODULE_18__.PodsumowanieComponent, _one_page_strona_komponenty_informacja_onas_komponenty_onas_dane_podstawowe_onas_dane_podstawowe_component__WEBPACK_IMPORTED_MODULE_19__.ONasDanePodstawoweComponent, _one_page_strona_komponenty_informacja_onas_komponenty_onas_adres_onas_adres_component__WEBPACK_IMPORTED_MODULE_20__.ONasAdresComponent, _one_page_strona_komponenty_informacja_onas_komponenty_onas_godziny_otwarcia_onas_godziny_otwarcia_component__WEBPACK_IMPORTED_MODULE_21__.ONasGodzinyOtwarciaComponent, _one_page_strona_komponenty_informacja_onas_komponenty_onas_kontakt_onas_kontakt_component__WEBPACK_IMPORTED_MODULE_22__.ONasKontaktComponent, _one_page_strona_komponenty_informacja_onas_komponenty_onas_uslugi_onas_uslugi_component__WEBPACK_IMPORTED_MODULE_23__.ONasUslugiComponent, _one_page_strona_komponenty_informacja_ojednym_pracowniku_komponenty_informacje_ojednym_pracowniku_kontakt_informacje_ojednym_pracowniku_kontakt_component__WEBPACK_IMPORTED_MODULE_24__.InformacjeOJednymPracownikuKontaktComponent, _one_page_strona_komponenty_informacja_ojednym_pracowniku_komponenty_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_component__WEBPACK_IMPORTED_MODULE_25__.InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_weryfikacja_weryfikacja_component__WEBPACK_IMPORTED_MODULE_26__.WeryfikacjaComponent, _one_page_strona_komponenty_zarejestruj_sie_zegar_zegar_component__WEBPACK_IMPORTED_MODULE_27__.ZegarComponent, _one_page_strona_komponenty_formularz_zarejestruj_sie_etapy_kalendarz_termin_termin_component__WEBPACK_IMPORTED_MODULE_28__.TerminComponent, _rurki_zdjecie_pipe__WEBPACK_IMPORTED_MODULE_29__.ZdjeciePipe, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__.PageNotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_34__.FormsModule, ngx_if_platform__WEBPACK_IMPORTED_MODULE_35__.NgxIfPlatformModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_37__.CarouselModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_38__.NgSelectModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__.NgbPaginationModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__.NgbModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__.FontAwesomeModule]
  });
})();

/***/ }),

/***/ 3192:
/*!************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/app.server.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 78163);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 81559);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 8421);
/* harmony import */ var ngx_if_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-if-platform */ 54553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);





class AppServerModule {}
AppServerModule.ɵfac = function AppServerModule_Factory(t) {
  return new (t || AppServerModule)();
};
AppServerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppServerModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppServerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule, ngx_if_platform__WEBPACK_IMPORTED_MODULE_4__.NgxIfPlatformModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule, ngx_if_platform__WEBPACK_IMPORTED_MODULE_4__.NgxIfPlatformModule]
  });
})();

/***/ }),

/***/ 2512:
/*!*****************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/enum/drzwi.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drzwi": () => (/* binding */ Drzwi)
/* harmony export */ });
var Drzwi;
(function (Drzwi) {
  Drzwi["listaPracownikow"] = "stronaReklamowa/listaPracownikow";
  Drzwi["napiszNam"] = "stronaReklamowa/napiszNam";
  Drzwi["daneKlientaRejestracja"] = "wizyty/daneKlientaRejestracja";
  Drzwi["kodWeryfikacyjnyIdentyfikator"] = "wizyty/kodWeryfikacyjny";
  Drzwi["listaPracownikowRejestracja"] = "wizyty/listaPracownikow";
  Drzwi["danePodstawowe"] = "stronaReklamowa/danePodstawowe";
  Drzwi["pobierzTerminy"] = "stronaReklamowa/wizyty/terminyWizyt";
})(Drzwi || (Drzwi = {}));

/***/ }),

/***/ 47792:
/*!**************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/enum/nawigacja.enum.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NawigacjaEnum": () => (/* binding */ NawigacjaEnum)
/* harmony export */ });
var NawigacjaEnum;
(function (NawigacjaEnum) {
  NawigacjaEnum["mapa"] = "stopka";
  NawigacjaEnum["stopka"] = "stopka";
  NawigacjaEnum["napiszNam"] = "napiszNam";
  NawigacjaEnum["pracownicy"] = "pracownicy";
  NawigacjaEnum["poczatek"] = "poczatek";
  NawigacjaEnum["ONas"] = "ONas";
  NawigacjaEnum["rejestracja"] = "rejestracja";
  NawigacjaEnum["rejestracjaFormularz"] = "rejestracjaFormularz";
})(NawigacjaEnum || (NawigacjaEnum = {}));

/***/ }),

/***/ 26606:
/*!***********************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/host.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOST_ID": () => (/* binding */ HOST_ID)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

const HOST_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('host');

/***/ }),

/***/ 30841:
/*!****************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/klasy/dane-podstawowe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanePodstawowe": () => (/* binding */ DanePodstawowe),
/* harmony export */   "adres": () => (/* binding */ adres),
/* harmony export */   "dzien": () => (/* binding */ dzien),
/* harmony export */   "usluga": () => (/* binding */ usluga),
/* harmony export */   "wyswietlaneDane": () => (/* binding */ wyswietlaneDane)
/* harmony export */ });
class DanePodstawowe {
  constructor() {
    this.dataZalozenia = new Date();
    this.iloscPracownikow = 0;
    this.NIP = '';
    this.REGON = '';
    this.prefiksTelefonu = '';
    this.numerTelefonuOgolny = '';
    this.emailOgolny = '';
    this.niedziela = new dzien();
    this.poniedzialek = new dzien();
    this.wtorek = new dzien();
    this.sroda = new dzien();
    this.czwartek = new dzien();
    this.piatek = new dzien();
    this.sobota = new dzien();
    this.adres = new adres();
    this.uslugi = [];
    this.wysokosc = 0;
    this.szerokosc = 0;
    this.wyswietlaneDane = new wyswietlaneDane();
  }
}
class dzien {
  constructor() {
    this.otwarcie = '';
    this.zamkniecie = '';
    this.czynnyDzien = true;
  }
}
class wyswietlaneDane {
  constructor() {
    this.adresCzyWyswietlic = false;
    this.nipCzyWyswietlic = false;
    this.regonCzyWyswietlic = false;
    this.emailCzyWyswietlic = false;
    this.telefonCzyWyswietlic = false;
    this.godzinyCzyWyswietlic = false;
    this.opisCzyWyswietlic = false;
    this.dataZalozeniayCzyWyswietlic = false;
    this.mapaCzyWyswietlic = false;
    this.uslugiCzyWyswietlic = false;
    this.iloscPracownikowCzyWyswietlic = false;
    this.daneZakladuCzyWyswietlic = false;
    this.naszKontaktCzyWyswietlic = false;
  }
}
class adres {
  constructor() {
    this.wojewodztwo = '';
    this.miasto = '';
    this.numerUlicy = '';
    this.numerLokalu = '';
    this.numerDomu = '';
    this.powiat = '';
    this.wies = '';
    this.kodPocztowy = '';
  }
}
class usluga {
  constructor() {
    this.id = 0;
    this.nazwa = '';
    this.cena = '';
    this.pracownicy = [];
    this.wybrane = false;
  }
}

/***/ }),

/***/ 92552:
/*!**********************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/klasy/pracownik.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pracownik": () => (/* binding */ Pracownik)
/* harmony export */ });
class Pracownik {
  constructor() {
    this.imie = '';
    this.nazwisko = '';
    this.numerTelefonu = '';
    this.email = '';
    this.id = 0;
  }
}

/***/ }),

/***/ 90977:
/*!*********************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/banner/banner.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../serwisy/nawigacja.service */ 39429);


class BannerComponent {
  constructor(nawigacja) {
    this.nawigacja = nawigacja;
  }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) {
  return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__.NawigacjaService));
};
BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: BannerComponent,
  selectors: [["app-banner"]],
  decls: 20,
  vars: 0,
  consts: [[1, "banner"], [1, "logoINazwaZakladu"], [1, "logo"], ["src", "assets/logoZakladu.jpg"], [1, "nazwa"], [1, "menu"], [3, "click"], [1, "napiszDoNasPrzycisk"], [1, "napiszDoNasButton", 3, "click"]],
  template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fryzjernia \"S\u0142oneczna\"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "ul")(9, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_li_click_9_listener() {
        return ctx.nawigacja.przeniesDoPanelu(ctx.nawigacja.nav.ONas);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " O nas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_li_click_11_listener() {
        return ctx.nawigacja.przeniesDoPanelu(ctx.nawigacja.nav.pracownicy);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Pracownicy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_li_click_13_listener() {
        return ctx.nawigacja.przeniesDoPanelu(ctx.nawigacja.nav.rejestracja);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Rejestracja ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_li_click_15_listener() {
        return ctx.nawigacja.przeniesDoPanelu(ctx.nawigacja.nav.mapa);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Mapa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7)(18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_18_listener() {
        return ctx.nawigacja.przeniesDoPanelu(ctx.nawigacja.nav.napiszNam);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Napisz do nas ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
  },
  styles: [".banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  float: left;\n  display: flex;\n  box-shadow: 0px 0px 2px 2px #858181;\n  background-color: white;\n  position: fixed;\n  z-index: 110;\n}\n.banner[_ngcontent-%COMP%]   .logoINazwaZakladu[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  float: left;\n}\n.banner[_ngcontent-%COMP%]   .logoINazwaZakladu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: left;\n}\n.banner[_ngcontent-%COMP%]   .logoINazwaZakladu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: max-content;\n  height: max-content;\n  max-height: 99%;\n}\n.banner[_ngcontent-%COMP%]   .logoINazwaZakladu[_ngcontent-%COMP%]   .nazwa[_ngcontent-%COMP%] {\n  float: left;\n  width: 70%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.banner[_ngcontent-%COMP%]   .logoINazwaZakladu[_ngcontent-%COMP%]   .nazwa[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: math;\n  color: #00009c;\n  text-shadow: 0px 0px 1px black;\n}\n.banner[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.banner[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.banner[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  font-weight: bolder;\n  width: 100px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #101080;\n  text-shadow: 0px 1px 1px white;\n  font-size: 18px;\n  font-family: math;\n  border-bottom: transparent 3px solid;\n}\n.banner[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(245, 246, 246, 0.91);\n  border-bottom: #ce2525 3px solid;\n}\n.banner[_ngcontent-%COMP%]   .napiszDoNasPrzycisk[_ngcontent-%COMP%] {\n  width: 10%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.banner[_ngcontent-%COMP%]   .napiszDoNasPrzycisk[_ngcontent-%COMP%]   .napiszDoNasButton[_ngcontent-%COMP%] {\n  border: 2px solid #d40000;\n  width: 150px;\n  height: 40px;\n  border-radius: 30px;\n  background-color: transparent;\n  color: #d40000;\n  font-size: 15px;\n  font-weight: bold;\n  text-shadow: 0px 0px 1px #817b7b;\n  font-family: math;\n  transition: 200ms;\n}\n.banner[_ngcontent-%COMP%]   .napiszDoNasPrzycisk[_ngcontent-%COMP%]   .napiszDoNasButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #d40000;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNOO0FBQ007RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNSO0FBR0k7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBRFI7QUFNRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0FBTE47QUFPTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtBQUxSO0FBT1E7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQ0FBQTtBQUxWO0FBV0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFXSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVROO0FBV007RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBVFIiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAycHggIzg1ODE4MTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTEwO1xyXG5cclxuICAubG9nb0lOYXp3YVpha2xhZHUge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDk5JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXp3YSB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDljO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxMDEwODA7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiB0cmFuc3BhcmVudCAzcHggc29saWQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ2LCAwLjkxKTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206ICNjZTI1MjUgM3B4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hcGlzekRvTmFzUHJ6eWNpc2sge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLm5hcGlzekRvTmFzQnV0dG9uIHtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgI2Q0MDAwMDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjb2xvcjogI2Q0MDAwMDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICM4MTdiN2I7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQwMDAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 19666:
/*!******************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/dzien-tygodnia.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DzienTygodnia": () => (/* binding */ DzienTygodnia),
/* harmony export */   "dniTygodnia": () => (/* binding */ dniTygodnia)
/* harmony export */ });
class DzienTygodnia {
  samaData() {
    const k = this.data;
    const miesiac = k.getMonth() + 1 < 10 ? '0' + (k.getMonth() + 1) : k.getMonth() + 1;
    const dzien = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    return dzien + "." + miesiac + "." + k.getFullYear();
  }
  ustawDate() {
    const teraz = this.data;
    const dzienDzis = teraz.getDate();
    this.data = new Date(teraz.setDate(dzienDzis - (teraz.getDay() - 1) + this.dzien));
  }
  constructor(dzien, nazwa) {
    this.dzien = 0;
    this.nazwa = '-----';
    this.data = new Date();
    this.dzien = dzien;
    this.nazwa = nazwa;
    this.ustawDate();
  }
}
const dniTygodnia = [new DzienTygodnia(0, "Poniedziałek"), new DzienTygodnia(1, "Wtorek"), new DzienTygodnia(2, "Środa"), new DzienTygodnia(3, "Czwartek"), new DzienTygodnia(4, "Piątek"), new DzienTygodnia(5, "Sobota"), new DzienTygodnia(6, "Niedziela")];

/***/ }),

/***/ 93297:
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/kalendarz.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KalendarzComponent": () => (/* binding */ KalendarzComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _dzien_tygodnia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dzien-tygodnia */ 19666);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../zarejestrujSie.service */ 32197);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _termin_termin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termin/termin.component */ 82136);







function KalendarzComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Wyst\u0105pi\u0142 b\u0142\u0105d przy pobieraniu kalendarza, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "zg\u0142o\u015B problem administratorowi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function KalendarzComponent_table_4_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const dzien_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", dzien_r5.nazwa, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dzien_r5.samaData());
  }
}
function KalendarzComponent_table_4_tr_15_td_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "---------");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function KalendarzComponent_table_4_tr_15_td_4_ng_container_2_app_termin_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-termin", 29);
  }
  if (rf & 2) {
    const termin_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("godzinaRozpoczecia", ctx_r13.godzinaRozpoczecia)("termin", termin_r12);
  }
}
function KalendarzComponent_table_4_tr_15_td_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, KalendarzComponent_table_4_tr_15_td_4_ng_container_2_app_termin_1_Template, 1, 2, "app-termin", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", index_r7 == 0);
  }
}
function KalendarzComponent_table_4_tr_15_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, KalendarzComponent_table_4_tr_15_td_4_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, KalendarzComponent_table_4_tr_15_td_4_ng_container_2_Template, 2, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dzien_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", ctx_r8.kolorTla(dzien_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.czyPracuje(dzien_r9.dzien));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.terminyNaDzien(dzien_r9));
  }
}
function KalendarzComponent_table_4_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 20)(1, "td", 21)(2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, KalendarzComponent_table_4_tr_15_td_4_Template, 3, 3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.godzina(index_r7), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.dni);
  }
}
const _c0 = function () {
  return [];
};
function KalendarzComponent_table_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table")(1, "tr")(2, "td", 9)(3, "div", 10)(4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function KalendarzComponent_table_4_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.WLEWO());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Poprzedni tydzie\u0144 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12)(7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function KalendarzComponent_table_4_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.WPrawo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Nast\u0119pny tydzie\u0144");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr")(12, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Godzina: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, KalendarzComponent_table_4_th_14_Template, 6, 2, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, KalendarzComponent_table_4_tr_15_Template, 5, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.licznikPrzyciskow <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r1.miesiace[ctx_r1.miesiac() - 1], " - Tydzie\u0144: ", ctx_r1.tydzien(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.dni);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0).constructor(ctx_r1.godzinaZakonczenia * 2));
  }
}
function KalendarzComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Wybierz termin, aby przej\u015B\u0107 dalej");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class KalendarzComponent {
  constructor(ZarejestrujSie, danePodstawowe) {
    this.ZarejestrujSie = ZarejestrujSie;
    this.danePodstawowe = danePodstawowe;
    this.wyslijKrok = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.licznikPrzyciskow = 0;
    this.nieMoznaDalejKomunikat = false;
    this.godzinaRozpoczecia = 88;
    this.godzinaZakonczenia = 0;
    this.dni = _dzien_tygodnia__WEBPACK_IMPORTED_MODULE_0__.dniTygodnia;
    this.miesiace = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    this.dataKursor = new Date();
  }
  czyPracuje(dzien) {
    switch (dzien) {
      case 0:
        return this.danePodstawowe.danePodstawowe.poniedzialek.czynnyDzien;
      case 1:
        return this.danePodstawowe.danePodstawowe.wtorek.czynnyDzien;
      case 2:
        return this.danePodstawowe.danePodstawowe.sroda.czynnyDzien;
      case 3:
        return this.danePodstawowe.danePodstawowe.czwartek.czynnyDzien;
      case 4:
        return this.danePodstawowe.danePodstawowe.piatek.czynnyDzien;
      case 5:
        return this.danePodstawowe.danePodstawowe.sobota.czynnyDzien;
      case 6:
        return this.danePodstawowe.danePodstawowe.niedziela.czynnyDzien;
    }
    return true;
  }
  przejdzDalej() {
    this.nieMoznaDalejKomunikat = false;
    if (this.ZarejestrujSie.DaneKlientaClass.wybranyTermin == undefined) {
      this.nieMoznaDalejKomunikat = true;
      return;
    }
    this.wyslijKrok.emit(4);
  }
  cofnij() {
    this.wyslijKrok.emit(2);
  }
  godzina(index) {
    const data = new Date();
    //  this.godzinaZakonczenia++;
    //this.godzinaRozpoczecia--;
    data.setHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + index * 60000 * 30);
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ":" + minuta;
  }
  ngOnInit() {
    this.ObliczGodziny();
    this.danePodstawowe.danePodstawoweObservable.subscribe(k => {
      this.ObliczGodziny();
    });
  }
  ObliczGodziny() {
    const tmp = this.danePodstawowe.danePodstawowe;
    [tmp.poniedzialek, tmp.wtorek, tmp.sroda, tmp.czwartek, tmp.piatek, tmp.sobota, tmp.niedziela].forEach(dzien => {
      if (dzien.czynnyDzien) {
        const rozpoczenie = Number(dzien.otwarcie.split(':')[0]);
        const zakonczenie = Number(dzien.zamkniecie.split(':')[0]);
        this.godzinaRozpoczecia = rozpoczenie < this.godzinaRozpoczecia ? rozpoczenie : this.godzinaRozpoczecia;
        this.godzinaZakonczenia = zakonczenie > this.godzinaZakonczenia ? zakonczenie : this.godzinaZakonczenia;
      }
    });
    //this.godzinaRozpoczecia -= 1;
    this.godzinaZakonczenia -= this.godzinaRozpoczecia;
    this.godzinaZakonczenia += 0.5;
  }
  kolorTla(dzien) {
    if (!this.CzyAktualne(dzien.data)) {
      return {
        'background-color': "rgba(211,211,211,0.31)"
      };
    }
    if (!this.czyPracuje(dzien.dzien)) {
      return {
        'background-color': "rgba(148,148,148,0.31)"
      };
    }
    return {};
  }
  CzyAktualne(data) {
    return !(data.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0));
  }
  terminyNaDzien(data) {
    const tablica = this.ZarejestrujSie.DaneKlientaClass.wszystkieTerminy.filter(usluga => {
      if (usluga.poczatek.getDate() == data.data.getDate()) {
        if (usluga.poczatek.getFullYear() == data.data.getFullYear()) {
          if (usluga.poczatek.getMonth() == data.data.getMonth()) {
            return true;
          }
        }
      }
      return false;
    });
    return tablica;
  }
  miesiac() {
    return this.dataKursor.getMonth() + 1;
  }
  tydzien() {
    return Math.ceil(this.dataKursor.getDate() / 7);
  }
  WPrawo() {
    this.licznikPrzyciskow++;
    this.dataKursor = new Date(this.dataKursor.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }
  WLEWO() {
    this.licznikPrzyciskow--;
    this.dataKursor = new Date(this.dataKursor.getTime() - 7 * 24 * 60 * 60 * 1000);
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }
}
KalendarzComponent.ɵfac = function KalendarzComponent_Factory(t) {
  return new (t || KalendarzComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__.ZarejestrujSieService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_2__.DanePodstawoweService));
};
KalendarzComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: KalendarzComponent,
  selectors: [["app-kalendarz"]],
  outputs: {
    wyslijKrok: "wyslijKrok"
  },
  decls: 11,
  vars: 4,
  consts: [[1, "naglowek"], ["class", "divNaSpan", 4, "ngIf"], [4, "ngIf"], [1, "divNaPrzycisk"], ["class", "czerwone", 4, "ngIf"], [1, "buttonDalej", 3, "disabled", "click"], [1, "buttonCofnij", 3, "click"], [1, "divNaSpan"], [1, "czerwone"], ["colspan", "8"], [1, "sterowanie"], [1, "jakiTydzienButton", 3, "disabled", "click"], [1, "jakiMiesiacDiv"], [1, "jakiTydzienButton", 3, "click"], [1, "wyswietlaneGodzinySpan", 2, "font-size", "18px"], ["style", "width: 125px", 4, "ngFor", "ngForOf"], ["class", "godzina", 4, "ngFor", "ngForOf"], [2, "width", "125px"], [1, "wyswietlaneDniSpan"], [1, "wyswietlaneDniSpan", 2, "font-size", "15px"], [1, "godzina"], [2, "position", "relative"], [1, "wyswietlaneGodzinySpan"], ["style", "position: relative;height: 25px", 3, "ngStyle", 4, "ngFor", "ngForOf"], [2, "position", "relative", "height", "25px", 3, "ngStyle"], ["style", "width: 100%;text-align: center;display: block;color:#343434", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "width", "100%", "text-align", "center", "display", "block", "color", "#343434"], [3, "godzinaRozpoczecia", "termin", 4, "ngIf"], [3, "godzinaRozpoczecia", "termin"]],
  template: function KalendarzComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Proponowane wolne terminy:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, KalendarzComponent_div_3_Template, 5, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, KalendarzComponent_table_4_Template, 16, 6, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, KalendarzComponent_span_6_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function KalendarzComponent_Template_button_click_7_listener() {
        return ctx.przejdzDalej();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Dalej");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function KalendarzComponent_Template_button_click_9_listener() {
        return ctx.cofnij();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Cofnij");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ZarejestrujSie.niepobranyKalendarz == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ZarejestrujSie.niepobranyKalendarz == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nieMoznaDalejKomunikat);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.ZarejestrujSie.niepobranyKalendarz);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _termin_termin_component__WEBPACK_IMPORTED_MODULE_3__.TerminComponent],
  styles: [".jakiMiesiacDiv[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n}\n.jakiMiesiacDiv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-size: 21px;\n  font-weight: bold;\n  color: #013a70;\n  text-shadow: 0px 0px 1px black;\n}\n\n.wyswietlaneGodzinySpan[_ngcontent-%COMP%] {\n  position: relative;\n  top: -12.5px;\n  font-family: math;\n  font-size: 15px;\n  color: #404040;\n  text-shadow: 0px 0px 1px black;\n}\n\n.wyswietlaneDniSpan[_ngcontent-%COMP%] {\n  font-family: math;\n  font-size: 18px;\n  font-weight: bold;\n  color: #404040;\n  text-shadow: 0px 0px 1px black;\n}\n\n.godzina[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-of-type {\n  border-top: 1px solid #d4e4fc;\n  border-bottom: 1px solid #d4e4fc;\n}\n.godzina[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 14px;\n  border-left: 1px solid #d4e4fc;\n  border-bottom: 1px solid #d4e4fc;\n}\n.godzina[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type {\n  border-left: none;\n  border-bottom: none;\n  font-weight: bold;\n  font-family: math;\n  font-size: 15px;\n}\n.godzina[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-of-type {\n  border-right: 1px solid #d4e4fc;\n}\n\n.sterowanie[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.divNaSpan[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  text-align: center;\n  height: min-content;\n}\n.jakiTydzienButton[_ngcontent-%COMP%] {\n  width: 145px;\n  font-size: 15px;\n  font-weight: bold;\n  border-radius: 20px;\n  background: #2138b5;\n  color: white;\n  text-shadow: 1px 1px 3px black;\n  box-shadow: 0px 0px 2px 1px #0e064a;\n  border: inset 1px #250ba4;\n  font-family: math;\n  letter-spacing: 1px;\n}\n.jakiTydzienButton[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #243cc0;\n}\n.jakiTydzienButton[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  background: gray;\n  border: solid 1px #242424;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkva2FsZW5kYXJ6L2thbGVuZGFyei5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQURGOztBQU9FO0VBQ0UsNkJBQUE7RUFDQSxnQ0FBQTtBQUpKO0FBUUU7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQU5KO0FBUUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFOTjtBQVNJO0VBQ0UsK0JBQUE7QUFQTjs7QUFhQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFWRjtBQWlCQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFmRjtBQWlCRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQWZKO0FBa0JFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFoQkoiLCJzb3VyY2VzQ29udGVudCI6WyIka29sb3I6ICNkNGU0ZmM7XHJcbi5qYWtpTWllc2lhY0RpdiB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMTNhNzA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ud3lzd2lldGxhbmVHb2R6aW55U3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEyLjVweDtcclxuICBmb250LWZhbWlseTogbWF0aDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4ud3lzd2lldGxhbmVEbmlTcGFuIHtcclxuICBmb250LWZhbWlseTogbWF0aDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM0MDQwNDA7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uZ29kemluYSB7XHJcblxyXG5cclxuICB0cjpmaXJzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAka29sb3I7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGtvbG9yO1xyXG4gIH1cclxuXHJcblxyXG4gIHRkIHtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGtvbG9yO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRrb2xvcjtcclxuXHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAka29sb3I7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnN0ZXJvd2FuaWUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXZOYVNwYW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG5cclxuICBzcGFuIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uamFraVR5ZHppZW5CdXR0b24ge1xyXG4gIHdpZHRoOiAxNDVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMjEzOGI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggYmxhY2s7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICMwZTA2NGE7XHJcbiAgYm9yZGVyOiBpbnNldCAxcHggIzI1MGJhNDtcclxuICBmb250LWZhbWlseTogbWF0aDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cclxuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjQzY2MwO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICMyNDI0MjQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */", "@import url(https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@400&display=swap);.rejestracja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  min-height: 400px;\n  background: #fcfcfc;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  height: min-content;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  color: #021698;\n  font-size: 35px;\n  font-family: math;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px black;\n  display: block;\n}\n.kroki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(17, 17, 17, 0.12);\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: 140px;\n  position: relative;\n  left: 75px;\n  box-shadow: 1px 2px 1px 1px #303030;\n  text-align: center;\n  z-index: 10;\n  background: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  top: -3px;\n  font-size: 20px;\n  font-family: \"Lexend Peta\", sans-serif;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]:not(:last-of-type):after {\n  z-index: 9;\n  position: relative;\n  top: -14px;\n  left: 28px;\n  width: 142px;\n  height: 3px;\n  display: block;\n  content: \"\";\n  background: #333333;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoJuzPo[_ngcontent-%COMP%] {\n  background: #dbd5d5;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%] {\n  scale: 1.3;\n  top: -3px;\n  background: green !important;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]:after {\n  top: -11px !important;\n  width: 110px !important;\n  height: 2px !important;\n  left: 30px !important;\n}\n\n.divNaPrzycisk[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: min-content;\n  float: left;\n  text-align: right;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background: #2c7b00;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #067202;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #318801;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(80%);\n  cursor: not-allowed;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background-color: #960202;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #750000;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #a20202;\n}\n\n.naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n.naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-weight: bold;\n  font-size: 24px;\n  color: #0c57a2;\n  text-shadow: 0px 0px 1px black;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 1px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZm9ybXVsYXJ6LXphcmVqZXN0cnVqLXNpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7QUFVSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWNJO0VBQ0UsWUFBQTtBQVpOO0FBZUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWJOOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVqZXN0cmFjamEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAubmFnbG93ZWsge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDIxNjk4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmtyb2tpIHtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhcnoge1xyXG4gIH1cclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtQZXRhOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLmtyb2tpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTcsIDE3LCAxNywgMC4xMik7XHJcblxyXG4gIC5rb2xrbyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggIzMwMzAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kIFBldGFcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgbGVmdDogMjhweDtcclxuICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua29sa29KdXpQbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmtvbGtvQWt0eXduZSB7XHJcbiAgICBzY2FsZTogMS4zO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2TmFQcnp5Y2lzayB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIC5idXR0b25EYWxlaiB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmM3YjAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzIwMjtcclxuXHJcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzMxODgwMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29mbmlqIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjAyMDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2VhZWFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUwMDAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjAyMDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFnbG93ZWsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGM1N2EyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 57391:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/termin.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Termin": () => (/* binding */ Termin)
/* harmony export */ });
class Termin {
  constructor() {
    this.poczatek = new Date();
    this.koniec = new Date();
  }
}

/***/ }),

/***/ 82136:
/*!***************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/termin/termin.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminComponent": () => (/* binding */ TerminComponent)
/* harmony export */ });
/* harmony import */ var _termin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../termin */ 57391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../zarejestrujSie.service */ 32197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);




function TerminComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wybierz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TerminComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TerminComponent_div_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.anuluj());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Anuluj ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "top": a0,
    height: a1
  };
};
const _c1 = function (a0) {
  return {
    "wybranyTermin": a0
  };
};
class TerminComponent {
  constructor(zarejestrujSie_) {
    this.zarejestrujSie_ = zarejestrujSie_;
    this.godzinaRozpoczecia = 0;
    this.termin = new _termin__WEBPACK_IMPORTED_MODULE_0__.Termin();
    this.top = '70px';
    this.wysokosc = '100px';
  }
  ngOnInit() {
    //  if (this.zarejestrujSie_.DaneKlientaClass.wybranyTermin != undefined) {
    //this.termin = this.zarejestrujSie_.DaneKlientaClass.wybranyTermin
    //  }
    const poczatek = this.termin.poczatek.getHours();
    const koniec = this.termin.koniec.getHours();
    const roznica = poczatek + this.termin.poczatek.getMinutes() / 60 - this.godzinaRozpoczecia;
    this.top = roznica * 26.9 * 2 + 'px';
    this.wysokosc = (koniec + this.termin.koniec.getMinutes() / 60 - (poczatek + this.termin.poczatek.getMinutes() / 60)) * 2 * 27 + "px";
  }
  wybierzTermin() {
    this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = this.termin;
  }
  wybrany() {
    return JSON.stringify(this.zarejestrujSie_.DaneKlientaClass.wybranyTermin) == JSON.stringify(this.termin);
  }
  anuluj() {
    setTimeout(() => {
      this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = undefined;
    }, 10);
  }
}
TerminComponent.ɵfac = function TerminComponent_Factory(t) {
  return new (t || TerminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__.ZarejestrujSieService));
};
TerminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TerminComponent,
  selectors: [["app-termin"]],
  inputs: {
    godzinaRozpoczecia: "godzinaRozpoczecia",
    termin: "termin"
  },
  decls: 5,
  vars: 13,
  consts: [[1, "termin", 3, "ngStyle", "ngClass", "click"], ["class", "wybierz", 4, "ngIf"], ["class", "anuluj", 3, "click", 4, "ngIf"], [1, "wybierz"], [1, "anuluj", 3, "click"]],
  template: function TerminComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TerminComponent_Template_div_click_0_listener() {
        return ctx.wybierzTermin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TerminComponent_div_3_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TerminComponent_div_4_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, ctx.top, ctx.wysokosc))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, ctx.wybrany()));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"](" ", ctx.termin.poczatek.getHours(), ":", ctx.termin.poczatek.getMinutes(), " - ", ctx.termin.koniec.getHours(), " :", ctx.termin.koniec.getMinutes(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.wybrany());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.wybrany());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
  styles: [".termin[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background: rgba(192, 226, 255, 0.51);\n  position: absolute;\n  border: 1px solid #2d2d2d;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  z-index: 100;\n  transition: scale 0.1s, color 1200ms ease-in-out;\n}\n.termin[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 18px;\n  color: #0101c7;\n  text-shadow: 0px 0px 1px #646464;\n}\n.termin[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #f6f5f5;\n  scale: 1.051;\n}\n.termin[_ngcontent-%COMP%]   .wybierz[_ngcontent-%COMP%], .termin[_ngcontent-%COMP%]   .anuluj[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 20px;\n  font-family: math;\n  border: none;\n  text-shadow: 0px 0px 1px #6a6a6a;\n}\n.termin[_ngcontent-%COMP%]   .anuluj[_ngcontent-%COMP%] {\n  color: #fdfdfd;\n}\n.termin[_ngcontent-%COMP%]   .wybierz[_ngcontent-%COMP%] {\n  color: #1316de;\n}\n\n.wybranyTermin[_ngcontent-%COMP%] {\n  background: rgba(4, 29, 190, 0.89) !important;\n  scale: 1.11 !important;\n}\n.wybranyTermin[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white !important;\n  text-shadow: 0px 0px 1px #030303 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkva2FsZW5kYXJ6L3Rlcm1pbi90ZXJtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUdFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURKO0FBS0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUpKO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFRRTtFQUNFLGNBQUE7QUFOSjs7QUFZQTtFQUNFLDZDQUFBO0VBQ0Esc0JBQUE7QUFURjtBQVdFO0VBQ0UsdUJBQUE7RUFDQSwyQ0FBQTtBQVRKIiwic291cmNlc0NvbnRlbnQiOlsiLnRlcm1pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAyMjYsIDI1NSwgMC41MSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZDJkMmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdHJhbnNpdGlvbjogc2NhbGUgMC4xcywgY29sb3IgMTIwMG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuICBoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDEwMWM3O1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICM2NDY0NjQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmNWY1O1xyXG4gICAgc2NhbGU6IDEuMDUxO1xyXG5cclxuICB9XHJcblxyXG4gIC53eWJpZXJ6LCAuYW51bHVqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICM2YTZhNmE7XHJcbiAgfVxyXG5cclxuICAuYW51bHVqIHtcclxuICAgIGNvbG9yOiAjZmRmZGZkO1xyXG4gIH1cclxuXHJcbiAgLnd5Ymllcnoge1xyXG4gICAgY29sb3I6ICMxMzE2ZGU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi53eWJyYW55VGVybWluIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQsIDI5LCAxOTAsIDAuODkpICFpbXBvcnRhbnQ7XHJcbiAgc2NhbGU6IDEuMTEgIWltcG9ydGFudDtcclxuXHJcbiAgaDMge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzAzMDMwMyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 48268:
/*!************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/klasy/dane-klienta.ts ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaneKlienta": () => (/* binding */ DaneKlienta),
/* harmony export */   "DaneKlientaDTO": () => (/* binding */ DaneKlientaDTO),
/* harmony export */   "pracownikUslugiDTO": () => (/* binding */ pracownikUslugiDTO)
/* harmony export */ });
/* harmony import */ var projects_panel_zakladu_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/panel-zakladu/src/environments/environment */ 24448);

class DaneKlienta {
  constructor() {
    this.imie = '';
    this.nazwisko = '';
    this.prefiksTelefonu = '';
    this.numerTelefonu = '';
    this.email = '';
    this.wybranyPracownik = undefined;
    this.niewybranyPracownik = false;
    this.uslugi = []; //wszystkie uslugi pobierane z api
    this.kodWeryfikacja = '';
    this.identyfikator = '';
    this.kodWeryfikacjaPusty = false;
    this.czyWszystkoUzupelnione = true;
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.numerTelefonuPusty = false;
    this.adresEmailPusty = false;
    this.daneNieWyslane = false;
    this.niepoprawnyKod = false;
    this.wszystkieTerminy = [];
    if (!projects_panel_zakladu_src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      this.imie = 'Korneliia';
      this.nazwisko = 'Mushak';
      this.prefiksTelefonu = '+48';
      this.numerTelefonu = '530322879';
      this.email = 'korneliamushak@gmail.com';
      this.wybranyPracownik = 183;
      this.kodWeryfikacja = '8';
    }
  }
  czyKodWerifikacjaWpisany() {
    this.kodWeryfikacjaPusty = false;
    if (this.kodWeryfikacja.length <= 0) {
      this.kodWeryfikacjaPusty = true;
    } else {
      this.kodWeryfikacjaPusty = false;
    }
    return this.kodWeryfikacjaPusty;
  }
  czyWszystkoUzupelnioneFunkcja() {
    this.czyWszystkoUzupelnione = true;
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.numerTelefonuPusty = false;
    this.adresEmailPusty = false;
    if (this.imie.length <= 0) {
      this.imiePuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.nazwisko.length <= 0) {
      this.nazwiskoPuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.numerTelefonu.length <= 0) {
      this.numerTelefonuPusty = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.email.length <= 0) {
      this.adresEmailPusty = true;
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;
  }
  czyWybranyPracownik() {
    this.niewybranyPracownik = false;
    if (this.wybranyPracownik == undefined) {
      this.niewybranyPracownik = true;
    }
    return this.niewybranyPracownik;
  }
}
class pracownikUslugiDTO {
  constructor(pracownikUslugi) {
    this.pracownikId = 0;
    this.uslugiId = [];
    pracownikUslugi.uslugi.forEach(usluga => {
      if (usluga.wybrane) {
        this.uslugiId.push(usluga.id);
      }
    });
    if (pracownikUslugi.wybranyPracownik != undefined) {
      this.pracownikId = pracownikUslugi.wybranyPracownik;
    }
  }
}
class DaneKlientaDTO {
  constructor(daneKlienta) {
    this.imie = '';
    this.nazwisko = '';
    this.numerTelefonu = '';
    this.email = '';
    this.poczatek = new Date();
    this.koniec = new Date();
    this.uslugiId = [];
    this.pracownikId = 0;
    this.imie = daneKlienta.imie;
    this.nazwisko = daneKlienta.nazwisko;
    this.numerTelefonu = daneKlienta.prefiksTelefonu + '-' + daneKlienta.numerTelefonu;
    this.email = daneKlienta.email;
    this.pracownikId = daneKlienta.wybranyPracownik;
    const k = daneKlienta.wybranyTermin;
    if (k) {
      this.poczatek = k.poczatek;
      this.koniec = k.koniec;
    }
    daneKlienta.uslugi.forEach(usluga => {
      if (usluga.wybrane) {
        this.uslugiId.push(usluga.id);
      }
    });
  }
}

/***/ }),

/***/ 61149:
/*!*****************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/podsumowanie/podsumowanie.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodsumowanieComponent": () => (/* binding */ PodsumowanieComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../klasy/dane-klienta */ 48268);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../zarejestrujSie.service */ 32197);




class PodsumowanieComponent {
  constructor(rejestracja) {
    this.rejestracja = rejestracja;
    this.wyslijKrok = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  przejdzDalej() {
    this.wyslijKrok.emit(1);
    this.rejestracja.DaneKlientaClass = new _klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__.DaneKlienta();
  }
}
PodsumowanieComponent.ɵfac = function PodsumowanieComponent_Factory(t) {
  return new (t || PodsumowanieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__.ZarejestrujSieService));
};
PodsumowanieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PodsumowanieComponent,
  selectors: [["app-podsumowanie"]],
  outputs: {
    wyslijKrok: "wyslijKrok"
  },
  decls: 65,
  vars: 0,
  consts: [[1, "kartka"], ["src", "assets/kartkaPapieru.png"], [1, "textDiv"], [1, "naglowek"], [1, "dane"], [1, "naglowek2"], [1, "naglowek3"], [1, "pdf"], [1, "buttonZarejestrujPonownie", 3, "click"]],
  template: function PodsumowanieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Podsumowanie");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "table", 4)(6, "tr")(7, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Imi\u0119 i Nazwisko:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Korneliia Mushak");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tr")(12, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Termin wizyty:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "08.08.2023");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "tr")(17, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Godzina:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "08:40");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr")(22, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Adres:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " woj.Podkarpackie, pow.Jaros\u0142aw,");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " miasto Jaros\u0142aw, ul.Czarnieckiego, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " miasto Jaros\u0142aw, ul.Czarnieckiego, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " miasto Jaros\u0142aw, ul.Czarnieckiego, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " miasto Jaros\u0142aw, ul.Czarnieckiego, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " nr domu 16, nr lokalu 5 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "tr")(37, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Imi\u0119 i nazwisko pracownika:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Mateusz Osikowski");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "tr")(42, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Wybrane us\u0142ugi:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Strzy\u017Cenie embro");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tr")(47, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Prognozowana cena za us\u0142ugi:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "400 z\u0142otych");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tr")(52, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Kontakt do zapisanego pracownika:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "788830720");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Kontakt do zak\u0142adu:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "788830720");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Kliknij, je\u015Bli chcesz wygenerowa\u0107 podsumowanie w plik PDF ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PodsumowanieComponent_Template_button_click_63_listener() {
        return ctx.przejdzDalej();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Zarejestruj ponownie ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
  },
  styles: [".naglowek[_ngcontent-%COMP%] {\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 28px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n  position: relative;\n  z-index: 11;\n  min-height: 700px;\n  padding-top: 40px;\n  top: 44px;\n}\n\n.textDiv[_ngcontent-%COMP%] {\n  min-height: 900px;\n  position: relative;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-top: 52px;\n}\n\n.naglowek2[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.naglowek2[_ngcontent-%COMP%], .naglowek3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  font-weight: bold;\n  font-family: math;\n  position: relative;\n  z-index: 12;\n}\n\n.naglowek3[_ngcontent-%COMP%] {\n  padding-left: 50px;\n}\n\n\n.pdf[_ngcontent-%COMP%] {\n  float: left;\n  padding-top: 70px;\n  left: 50px;\n  bottom: 92px;\n  font-size: 25px;\n  position: absolute;\n  z-index: 12;\n  width: max-content;\n}\n\n.buttonZarejestrujPonownie[_ngcontent-%COMP%] {\n  width: 200px;\n  bottom: 52px;\n  text-shadow: 0px 0px 1px black;\n  font-size: 20px;\n  font-weight: bolder;\n  height: 29px;\n  border: 2px solid #0b7006;\n  background: transparent;\n  color: #0b7006;\n  font-family: math;\n  transition: 200ms;\n  border-radius: 20px;\n  position: absolute;\n  z-index: 12;\n}\n.buttonZarejestrujPonownie[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #0b7006;\n  color: white;\n}\n\n.kartka[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n.kartka[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  left: -140px;\n  top: -4px;\n  height: 880px;\n  width: 1070px;\n}\n\n.karteczki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.karteczki[_ngcontent-%COMP%]   .karteczka1[_ngcontent-%COMP%], .karteczki[_ngcontent-%COMP%]   .karteczka2[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  width: 300px;\n  height: 300px;\n  position: relative;\n  z-index: 12;\n  bottom: 1px;\n  background: whitesmoke;\n}\n.karteczki[_ngcontent-%COMP%]   .karteczka1[_ngcontent-%COMP%] {\n  left: 20px;\n}\n.karteczki[_ngcontent-%COMP%]   .karteczka2[_ngcontent-%COMP%] {\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkvcG9kc3Vtb3dhbmllL3BvZHN1bW93YW5pZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUFxQkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBSEY7QUFLRTs7RUFFRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBSEo7QUFNRTtFQUNFLFVBQUE7QUFKSjtBQU9FO0VBQ0UsV0FBQTtBQUxKIiwic291cmNlc0NvbnRlbnQiOlsiLm5hZ2xvd2VrIHtcclxuICBmb250LWZhbWlseTogbWF0aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjYjQwYzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMnB4IGJsYWNrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMTtcclxuICBtaW4taGVpZ2h0OiA3MDBweDtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICB0b3A6IDQ0cHg7XHJcbn1cclxuXHJcbi50ZXh0RGl2IHtcclxuICBtaW4taGVpZ2h0OiA5MDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiA1MnB4O1xyXG59XHJcblxyXG4ubmFnbG93ZWsyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm5hZ2xvd2VrMiwgLm5hZ2xvd2VrMyB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMjtcclxufVxyXG5cclxuLm5hZ2xvd2VrMyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4vKlxyXG4ubmFnbG93ZWsyIHtcclxuICBoZWlnaHQ6IDMxcHg7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4ubmFnbG93ZWszIHtcclxuICBoZWlnaHQ6IDMxcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCBibHVlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4qL1xyXG5cclxuXHJcbi5wZGYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgYm90dG9tOiA5MnB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG59XHJcblxyXG4uYnV0dG9uWmFyZWplc3RydWpQb25vd25pZSB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvdHRvbTogNTJweDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwYjcwMDY7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICMwYjcwMDY7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzBiNzAwNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5rYXJ0a2Ege1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbGVmdDogLTE0MHB4O1xyXG4gICAgdG9wOiAtMDRweDtcclxuICAgIGhlaWdodDogODgwcHg7XHJcbiAgICB3aWR0aDogMTA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmthcnRlY3praSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbiAgLmthcnRlY3prYTEsXHJcbiAgLmthcnRlY3prYTIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTI7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbiAgfVxyXG5cclxuICAua2FydGVjemthMSB7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmthcnRlY3prYTIge1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZGFuZSB7XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 87718:
/*!***************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/weryfikacja/weryfikacja.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeryfikacjaComponent": () => (/* binding */ WeryfikacjaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../zarejestrujSie.service */ 32197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70938);





function WeryfikacjaComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Wpisz kod, aby przej\u015B\u0107 dalej");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function WeryfikacjaComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Wpisany kod niepoprawny, spr\u00F3buj jeszcze raz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    czerwonyInput: a0
  };
};
const _c1 = function () {
  return {
    standalone: true
  };
};
class WeryfikacjaComponent {
  constructor(ZarejestrujSieService) {
    this.ZarejestrujSieService = ZarejestrujSieService;
    this.wyslijKrok = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.kodNieWpisany = false;
  }
  przejdzDalej() {
    this.kodNieWpisany = false;
    this.ZarejestrujSieService.DaneKlientaClass.niepoprawnyKod = false;
    this.ZarejestrujSieService.DaneKlientaClass.czyKodWerifikacjaWpisany();
    if (!this.ZarejestrujSieService.DaneKlientaClass.kodWeryfikacjaPusty) {
      this.wyslijKrok.emit(6);
    } else {
      this.kodNieWpisany = true;
    }
  }
}
WeryfikacjaComponent.ɵfac = function WeryfikacjaComponent_Factory(t) {
  return new (t || WeryfikacjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_0__.ZarejestrujSieService));
};
WeryfikacjaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WeryfikacjaComponent,
  selectors: [["app-weryfikacja"]],
  outputs: {
    wyslijKrok: "wyslijKrok"
  },
  decls: 17,
  vars: 8,
  consts: [[1, "naglowek"], ["placeholder", "Kod", 1, "logInput", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], [1, "divNaPrzycisk"], ["class", "czerwone", 4, "ngIf"], [1, "buttonDalej", 3, "click"], [1, "czerwone"]],
  template: function WeryfikacjaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "p")(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dokonaj weryfikacj\u0119 aby si\u0119 zapisa\u0107 na wizyt\u0119 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Na tw\u00F3j adres e-mail zosta\u0142 wys\u0142any kod, wpisz go poni\u017Cej:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form")(8, "table")(9, "tr")(10, "td")(11, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WeryfikacjaComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.kodWeryfikacja = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WeryfikacjaComponent_span_13_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, WeryfikacjaComponent_span_14_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeryfikacjaComponent_Template_button_click_15_listener() {
        return ctx.przejdzDalej();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Dalej");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.ZarejestrujSieService.DaneKlientaClass.niepoprawnyKod || ctx.ZarejestrujSieService.DaneKlientaClass.kodWeryfikacjaPusty))("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.kodWeryfikacja)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.kodNieWpisany == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ZarejestrujSieService.DaneKlientaClass.niepoprawnyKod == true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: [".logInput[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 29px;\n  font-size: 18px;\n  border: 2px inset #2491f9;\n  border-radius: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.czerwonyInput[_ngcontent-%COMP%] {\n  border: 2px inset #d30505 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkvd2VyeWZpa2FjamEvd2VyeWZpa2FjamEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dJbnB1dCB7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMjlweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyOiAycHggaW5zZXQgIzI0OTFmOTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY3plcndvbnlJbnB1dCB7XHJcbiAgYm9yZGVyOiAycHggaW5zZXQgI2QzMDUwNSAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", "@import url(https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@400&display=swap);.rejestracja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  min-height: 400px;\n  background: #fcfcfc;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  height: min-content;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  color: #021698;\n  font-size: 35px;\n  font-family: math;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px black;\n  display: block;\n}\n.kroki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(17, 17, 17, 0.12);\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: 140px;\n  position: relative;\n  left: 75px;\n  box-shadow: 1px 2px 1px 1px #303030;\n  text-align: center;\n  z-index: 10;\n  background: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  top: -3px;\n  font-size: 20px;\n  font-family: \"Lexend Peta\", sans-serif;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]:not(:last-of-type):after {\n  z-index: 9;\n  position: relative;\n  top: -14px;\n  left: 28px;\n  width: 142px;\n  height: 3px;\n  display: block;\n  content: \"\";\n  background: #333333;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoJuzPo[_ngcontent-%COMP%] {\n  background: #dbd5d5;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%] {\n  scale: 1.3;\n  top: -3px;\n  background: green !important;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]:after {\n  top: -11px !important;\n  width: 110px !important;\n  height: 2px !important;\n  left: 30px !important;\n}\n\n.divNaPrzycisk[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: min-content;\n  float: left;\n  text-align: right;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background: #2c7b00;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #067202;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #318801;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(80%);\n  cursor: not-allowed;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background-color: #960202;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #750000;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #a20202;\n}\n\n.naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n.naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-weight: bold;\n  font-size: 24px;\n  color: #0c57a2;\n  text-shadow: 0px 0px 1px black;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 1px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZm9ybXVsYXJ6LXphcmVqZXN0cnVqLXNpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7QUFVSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWNJO0VBQ0UsWUFBQTtBQVpOO0FBZUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWJOOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVqZXN0cmFjamEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAubmFnbG93ZWsge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDIxNjk4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmtyb2tpIHtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhcnoge1xyXG4gIH1cclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtQZXRhOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLmtyb2tpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTcsIDE3LCAxNywgMC4xMik7XHJcblxyXG4gIC5rb2xrbyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggIzMwMzAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kIFBldGFcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgbGVmdDogMjhweDtcclxuICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua29sa29KdXpQbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmtvbGtvQWt0eXduZSB7XHJcbiAgICBzY2FsZTogMS4zO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2TmFQcnp5Y2lzayB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIC5idXR0b25EYWxlaiB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmM3YjAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzIwMjtcclxuXHJcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzMxODgwMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29mbmlqIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjAyMDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2VhZWFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUwMDAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjAyMDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFnbG93ZWsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGM1N2EyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4677:
/*!***********************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wpisanie-danych/wpisanie-danych.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WpisanieDanychComponent": () => (/* binding */ WpisanieDanychComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../zarejestrujSie.service */ 32197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70938);





function WpisanieDanychComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dane nie zosta\u0142y wys\u0142ane! Skontaktuj si\u0119 z administratorem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function WpisanieDanychComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "k");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function WpisanieDanychComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Wprowad\u017A wszystkie dane!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    czerwoneInputy: a0
  };
};
const _c1 = function () {
  return {
    standalone: true
  };
};
class WpisanieDanychComponent {
  constructor(ZarejestrujSieService) {
    this.ZarejestrujSieService = ZarejestrujSieService;
    this.wyslijKrok = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  przejdzDalej() {
    this.ZarejestrujSieService.DaneKlientaClass.czyWszystkoUzupelnioneFunkcja();
    if (this.ZarejestrujSieService.DaneKlientaClass?.czyWszystkoUzupelnione) {
      this.wyslijKrok.emit(5);
    }
  }
  cofnij() {
    this.wyslijKrok.emit(3);
  }
}
WpisanieDanychComponent.ɵfac = function WpisanieDanychComponent_Factory(t) {
  return new (t || WpisanieDanychComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_0__.ZarejestrujSieService));
};
WpisanieDanychComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WpisanieDanychComponent,
  selectors: [["app-wpisanie-danych"]],
  outputs: {
    wyslijKrok: "wyslijKrok"
  },
  decls: 30,
  vars: 30,
  consts: [[1, "naglowek"], [1, "wpisanieDanych"], ["placeholder", "Imi\u0119", 1, "inputyFormularz", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], ["placeholder", "Nazwisko", 1, "inputyFormularz", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], [1, "prefiks", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["placeholder", "Numer telefonu", 1, "inputyFormularz", 2, "width", "208px", "margin-left", "2px", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], ["placeholder", "Email", 1, "inputyFormularz", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], [4, "ngIf", "ngIfElse"], ["puste", ""], [1, "divNaPrzycisk"], ["class", "czerwone", 4, "ngIf"], [1, "buttonDalej", 3, "click"], [1, "buttonCofnij", 3, "click"], [1, "czerwone", 2, "visibility", "hidden"], [1, "czerwone"]],
  template: function WpisanieDanychComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Wpisz swoje podstawowe dane");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form")(4, "div", 1)(5, "table")(6, "tr")(7, "td")(8, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WpisanieDanychComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.imie = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WpisanieDanychComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.nazwisko = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr")(12, "td")(13, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WpisanieDanychComponent_Template_select_ngModelChange_13_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.prefiksTelefonu = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "+48");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "+380");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WpisanieDanychComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.numerTelefonu = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td")(20, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WpisanieDanychComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, WpisanieDanychComponent_tr_21_Template, 3, 0, "tr", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, WpisanieDanychComponent_ng_template_22_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, WpisanieDanychComponent_span_25_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WpisanieDanychComponent_Template_button_click_26_listener() {
        return ctx.przejdzDalej();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Dalej");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WpisanieDanychComponent_Template_button_click_28_listener() {
        return ctx.cofnij();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Cofnij");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx.ZarejestrujSieService.DaneKlientaClass.imiePuste))("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.imie)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx.ZarejestrujSieService.DaneKlientaClass.nazwiskoPuste))("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.nazwisko)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.prefiksTelefonu)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.ZarejestrujSieService.DaneKlientaClass.numerTelefonuPusty))("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.numerTelefonu)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c0, ctx.ZarejestrujSieService.DaneKlientaClass.adresEmailPusty))("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.email)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ZarejestrujSieService.DaneKlientaClass.daneNieWyslane)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ZarejestrujSieService.DaneKlientaClass.czyWszystkoUzupelnione);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: [".inputyFormularz[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 29px;\n  font-size: 18px;\n  border: 2px inset #2491f9;\n  border-radius: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  margin: 4px 4px 4px 0;\n}\n\n.czerwoneInputy[_ngcontent-%COMP%] {\n  border: 2px inset #d30505 !important;\n}\n\n.prefiks[_ngcontent-%COMP%] {\n  width: 70px;\n  font-size: 16px;\n  border: 2px inset #2491f9;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkvd3Bpc2FuaWUtZGFueWNoL3dwaXNhbmllLWRhbnljaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFHQTtFQUNFLG9DQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHlGb3JtdWxhcnoge1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlcjogMnB4IGluc2V0ICMyNDkxZjk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW46IDRweCA0cHggNHB4IDA7XHJcblxyXG59XHJcblxyXG4uY3plcndvbmVJbnB1dHkge1xyXG4gIGJvcmRlcjogMnB4IGluc2V0ICNkMzA1MDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByZWZpa3Mge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IDJweCBpbnNldCAjMjQ5MWY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "@import url(https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@400&display=swap);.rejestracja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  min-height: 400px;\n  background: #fcfcfc;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  height: min-content;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  color: #021698;\n  font-size: 35px;\n  font-family: math;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px black;\n  display: block;\n}\n.kroki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(17, 17, 17, 0.12);\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: 140px;\n  position: relative;\n  left: 75px;\n  box-shadow: 1px 2px 1px 1px #303030;\n  text-align: center;\n  z-index: 10;\n  background: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  top: -3px;\n  font-size: 20px;\n  font-family: \"Lexend Peta\", sans-serif;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]:not(:last-of-type):after {\n  z-index: 9;\n  position: relative;\n  top: -14px;\n  left: 28px;\n  width: 142px;\n  height: 3px;\n  display: block;\n  content: \"\";\n  background: #333333;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoJuzPo[_ngcontent-%COMP%] {\n  background: #dbd5d5;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%] {\n  scale: 1.3;\n  top: -3px;\n  background: green !important;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]:after {\n  top: -11px !important;\n  width: 110px !important;\n  height: 2px !important;\n  left: 30px !important;\n}\n\n.divNaPrzycisk[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: min-content;\n  float: left;\n  text-align: right;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background: #2c7b00;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #067202;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #318801;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(80%);\n  cursor: not-allowed;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background-color: #960202;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #750000;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #a20202;\n}\n\n.naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n.naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-weight: bold;\n  font-size: 24px;\n  color: #0c57a2;\n  text-shadow: 0px 0px 1px black;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 1px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZm9ybXVsYXJ6LXphcmVqZXN0cnVqLXNpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7QUFVSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWNJO0VBQ0UsWUFBQTtBQVpOO0FBZUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWJOOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVqZXN0cmFjamEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAubmFnbG93ZWsge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDIxNjk4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmtyb2tpIHtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhcnoge1xyXG4gIH1cclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtQZXRhOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLmtyb2tpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTcsIDE3LCAxNywgMC4xMik7XHJcblxyXG4gIC5rb2xrbyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggIzMwMzAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kIFBldGFcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgbGVmdDogMjhweDtcclxuICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua29sa29KdXpQbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmtvbGtvQWt0eXduZSB7XHJcbiAgICBzY2FsZTogMS4zO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2TmFQcnp5Y2lzayB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIC5idXR0b25EYWxlaiB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmM3YjAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzIwMjtcclxuXHJcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzMxODgwMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29mbmlqIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjAyMDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2VhZWFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUwMDAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjAyMDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFnbG93ZWsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGM1N2EyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 22963:
/*!*************************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-pracownika/wybor-pracownika.component.ts ***!
  \*************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WyborPracownikaComponent": () => (/* binding */ WyborPracownikaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _enum_drzwi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../enum/drzwi */ 2512);
/* harmony import */ var _serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../serwisy/listonosz.service */ 35992);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../zarejestrujSie.service */ 32197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 11077);








function WyborPracownikaComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Wybierz pracownika, aby przej\u015B\u0107 dalej ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function WyborPracownikaComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class WyborPracownikaComponent {
  ngOnInit() {
    this.listonosz.pobierz(_enum_drzwi__WEBPACK_IMPORTED_MODULE_0__.Drzwi.listaPracownikowRejestracja).then(listaPracownikow => {
      this.pracownicy = listaPracownikow;
    });
  }
  constructor(listonosz, ZarejestrujSieService) {
    this.listonosz = listonosz;
    this.ZarejestrujSieService = ZarejestrujSieService;
    this.wyslijKrok = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.pracownicy = [];
  }
  przejdzDalej() {
    this.ZarejestrujSieService.DaneKlientaClass.czyWybranyPracownik();
    if (!this.ZarejestrujSieService.DaneKlientaClass.niewybranyPracownik) {
      this.wyslijKrok.emit(2);
    }
  }
}
WyborPracownikaComponent.ɵfac = function WyborPracownikaComponent_Factory(t) {
  return new (t || WyborPracownikaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_1__.ListonoszService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_2__.ZarejestrujSieService));
};
WyborPracownikaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WyborPracownikaComponent,
  selectors: [["app-wybor-pracownika"]],
  outputs: {
    wyslijKrok: "wyslijKrok"
  },
  decls: 12,
  vars: 4,
  consts: [[1, "naglowek"], [1, "select"], ["bindLabel", "pracownik", "bindValue", "id", "placeholder", "Wybierz", 1, "selectPracownicy", "inputyFormularz", 3, "items", "ngModel", "ngModelChange"], [1, "divNaPrzycisk"], [1, "czerwone"], [4, "ngIf", "ngIfElse"], ["puste", ""], [1, "buttonDalej", 3, "click"], [2, "visibility", "hidden"]],
  template: function WyborPracownikaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Wybierz pracownika do kt\u00F3rego chcesz si\u0119 zapisa\u0107 na wizyt\u0119 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "ng-select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function WyborPracownikaComponent_Template_ng_select_ngModelChange_4_listener($event) {
        return ctx.ZarejestrujSieService.DaneKlientaClass.wybranyPracownik = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WyborPracownikaComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WyborPracownikaComponent_ng_template_8_Template, 2, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WyborPracownikaComponent_Template_button_click_10_listener() {
        return ctx.przejdzDalej();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Dalej");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.pracownicy)("ngModel", ctx.ZarejestrujSieService.DaneKlientaClass.wybranyPracownik);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ZarejestrujSieService.DaneKlientaClass.niewybranyPracownik)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectComponent],
  styles: [".select[_ngcontent-%COMP%] {\n  padding-top: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: min-content;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkvd3lib3ItcHJhY293bmlrYS93eWJvci1wcmFjb3duaWthLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0IHtcclxuICBwYWRkaW5nLXRvcDogMThweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */", "@import url(https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@400&display=swap);.rejestracja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  min-height: 400px;\n  background: #fcfcfc;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  height: min-content;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  color: #021698;\n  font-size: 35px;\n  font-family: math;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px black;\n  display: block;\n}\n.kroki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(17, 17, 17, 0.12);\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: 140px;\n  position: relative;\n  left: 75px;\n  box-shadow: 1px 2px 1px 1px #303030;\n  text-align: center;\n  z-index: 10;\n  background: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  top: -3px;\n  font-size: 20px;\n  font-family: \"Lexend Peta\", sans-serif;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]:not(:last-of-type):after {\n  z-index: 9;\n  position: relative;\n  top: -14px;\n  left: 28px;\n  width: 142px;\n  height: 3px;\n  display: block;\n  content: \"\";\n  background: #333333;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoJuzPo[_ngcontent-%COMP%] {\n  background: #dbd5d5;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%] {\n  scale: 1.3;\n  top: -3px;\n  background: green !important;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]:after {\n  top: -11px !important;\n  width: 110px !important;\n  height: 2px !important;\n  left: 30px !important;\n}\n\n.divNaPrzycisk[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: min-content;\n  float: left;\n  text-align: right;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background: #2c7b00;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #067202;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #318801;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(80%);\n  cursor: not-allowed;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background-color: #960202;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #750000;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #a20202;\n}\n\n.naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n.naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-weight: bold;\n  font-size: 24px;\n  color: #0c57a2;\n  text-shadow: 0px 0px 1px black;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 1px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZm9ybXVsYXJ6LXphcmVqZXN0cnVqLXNpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7QUFVSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWNJO0VBQ0UsWUFBQTtBQVpOO0FBZUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWJOOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVqZXN0cmFjamEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAubmFnbG93ZWsge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDIxNjk4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmtyb2tpIHtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhcnoge1xyXG4gIH1cclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtQZXRhOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLmtyb2tpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTcsIDE3LCAxNywgMC4xMik7XHJcblxyXG4gIC5rb2xrbyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggIzMwMzAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kIFBldGFcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgbGVmdDogMjhweDtcclxuICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua29sa29KdXpQbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmtvbGtvQWt0eXduZSB7XHJcbiAgICBzY2FsZTogMS4zO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2TmFQcnp5Y2lzayB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIC5idXR0b25EYWxlaiB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmM3YjAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzIwMjtcclxuXHJcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzMxODgwMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29mbmlqIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjAyMDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2VhZWFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUwMDAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjAyMDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFnbG93ZWsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGM1N2EyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 37714:
/*!***************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/wybor-uslug/wybor-uslug.component.ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WyborUslugComponent": () => (/* binding */ WyborUslugComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../zarejestrujSie.service */ 32197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70938);






function WyborUslugComponent_tr_14_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function WyborUslugComponent_tr_14_input_8_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const usluga_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](usluga_r2.wybrane = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usluga_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", usluga_r2.wybrane);
  }
}
function WyborUslugComponent_tr_14_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Niedost\u0119pne");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "niedostepnaUsluga": a0
  };
};
function WyborUslugComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 8)(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, WyborUslugComponent_tr_14_input_8_Template, 1, 1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, WyborUslugComponent_tr_14_span_9_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usluga_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, !ctx_r0.czyWykonuje(usluga_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", index_r3 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](usluga_r2.nazwa);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", usluga_r2.cena, " z\u0142otych");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.czyWykonuje(usluga_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.czyWykonuje(usluga_r2));
  }
}
function WyborUslugComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wybierz us\u0142ug\u0119,aby przej\u015B\u0107 dalej");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class WyborUslugComponent {
  constructor(danePodstawowe, zarejestrujSie_) {
    this.danePodstawowe = danePodstawowe;
    this.zarejestrujSie_ = zarejestrujSie_;
    this.wyslijKrok = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.niewybranaUsluga = false;
  }
  ngOnInit() {
    this.danePodstawowe.danePodstawowe.uslugi.forEach(usluga => usluga.wybrane = false);
  }
  uslugi() {
    return this.danePodstawowe.danePodstawowe.uslugi;
  }
  przejdzDalej() {
    this.zarejestrujSie_.DaneKlientaClass.uslugi = this.danePodstawowe.danePodstawowe.uslugi;
    this.niewybranaUsluga = false;
    const wybraneUslugi = this.danePodstawowe.danePodstawowe.uslugi.filter(usluga => {
      return usluga.wybrane;
    });
    if (wybraneUslugi.length <= 0) {
      this.niewybranaUsluga = true;
      return;
    }
    this.zarejestrujSie_.pobierzTerminyWizyt();
    this.wyslijKrok.emit(3);
  }
  cofnij() {
    this.wyslijKrok.emit(1);
  }
  czyWykonuje(usluga) {
    if (usluga.pracownicy == undefined) {
      console.log("Błąd tablicy pracownikow w usludze");
    }
    return usluga.pracownicy.find(id => {
      return id == this.zarejestrujSie_.DaneKlientaClass.wybranyPracownik;
    }) != undefined;
  }
}
WyborUslugComponent.ɵfac = function WyborUslugComponent_Factory(t) {
  return new (t || WyborUslugComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__.ZarejestrujSieService));
};
WyborUslugComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: WyborUslugComponent,
  selectors: [["app-wybor-uslug"]],
  outputs: {
    wyslijKrok: "wyslijKrok"
  },
  decls: 21,
  vars: 2,
  consts: [[1, "naglowek"], [1, "uslugi"], [1, "spanTytul"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "divNaPrzycisk"], ["class", "czerwone", 4, "ngIf"], [1, "buttonDalej", 3, "click"], [1, "buttonCofnij", 3, "click"], [3, "ngClass"], [1, "uslugiSpan", 2, "min-width", "80px"], [1, "uslugiSpan", 2, "min-width", "550px"], [1, "uslugiSpan", 2, "min-width", "100px"], [2, "min-width", "100px", "text-align", "center"], ["class", "chekboxUsluga", "type", "checkbox", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "spanNiedostepna", "title", "Ta us\u0142uga jest nieobs\u0142ugiwana przez wybranego pracownika, wybierz innego pracownika", 4, "ngIf"], ["type", "checkbox", 1, "chekboxUsluga", 3, "ngModel", "ngModelChange"], ["title", "Ta us\u0142uga jest nieobs\u0142ugiwana przez wybranego pracownika, wybierz innego pracownika", 1, "spanNiedostepna"], [1, "czerwone"]],
  template: function WyborUslugComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Wybierz us\u0142ug\u0119/us\u0142ugi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1)(4, "table")(5, "tr", 2)(6, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Nr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Us\u0142uga");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Cena");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Wybierz");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, WyborUslugComponent_tr_14_Template, 10, 8, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, WyborUslugComponent_span_16_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WyborUslugComponent_Template_button_click_17_listener() {
        return ctx.przejdzDalej();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Dalej");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WyborUslugComponent_Template_button_click_19_listener() {
        return ctx.cofnij();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Cofnij");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.uslugi());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.niewybranaUsluga);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".spanTytul[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-family: math;\n  color: #013a70;\n  text-shadow: 0px 0px 1px black;\n  font-weight: bold;\n  letter-spacing: 1px;\n}\n\n.uslugiSpan[_ngcontent-%COMP%] {\n  font-family: math;\n  font-size: 19px;\n  font-weight: bold;\n  color: #0e61b4;\n  text-shadow: 0px 0px 1px #ececec;\n}\n\n.chekboxUsluga[_ngcontent-%COMP%] {\n  scale: 1.55555;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.niedostepnaUsluga[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #969696 !important;\n}\n\n.spanNiedostepna[_ngcontent-%COMP%] {\n  cursor: help;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZXRhcHkvd3lib3ItdXNsdWcvd3lib3ItdXNsdWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFNRTtFQUNFLHlCQUFBO0FBSEo7O0FBUUE7RUFDRSxZQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNwYW5UeXR1bCB7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIGNvbG9yOiAjMDEzYTcwO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4udXNsdWdpU3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGU2MWI0O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjZWNlY2VjO1xyXG59XHJcblxyXG4uY2hla2JveFVzbHVnYSB7XHJcbiAgc2NhbGU6IDEuNTU1NTU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ubmllZG9zdGVwbmFVc2x1Z2Ege1xyXG5cclxuXHJcbiAgdGQge1xyXG4gICAgY29sb3I6ICM5Njk2OTYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uc3Bhbk5pZWRvc3RlcG5hIHtcclxuICBjdXJzb3I6IGhlbHA7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "@import url(https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@400&display=swap);.rejestracja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  min-height: 400px;\n  background: #fcfcfc;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  height: min-content;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  color: #021698;\n  font-size: 35px;\n  font-family: math;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px black;\n  display: block;\n}\n.kroki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(17, 17, 17, 0.12);\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: 140px;\n  position: relative;\n  left: 75px;\n  box-shadow: 1px 2px 1px 1px #303030;\n  text-align: center;\n  z-index: 10;\n  background: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  top: -3px;\n  font-size: 20px;\n  font-family: \"Lexend Peta\", sans-serif;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]:not(:last-of-type):after {\n  z-index: 9;\n  position: relative;\n  top: -14px;\n  left: 28px;\n  width: 142px;\n  height: 3px;\n  display: block;\n  content: \"\";\n  background: #333333;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoJuzPo[_ngcontent-%COMP%] {\n  background: #dbd5d5;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%] {\n  scale: 1.3;\n  top: -3px;\n  background: green !important;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]:after {\n  top: -11px !important;\n  width: 110px !important;\n  height: 2px !important;\n  left: 30px !important;\n}\n\n.divNaPrzycisk[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: min-content;\n  float: left;\n  text-align: right;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background: #2c7b00;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #067202;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #318801;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(80%);\n  cursor: not-allowed;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background-color: #960202;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #750000;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #a20202;\n}\n\n.naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n.naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-weight: bold;\n  font-size: 24px;\n  color: #0c57a2;\n  text-shadow: 0px 0px 1px black;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 1px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZm9ybXVsYXJ6LXphcmVqZXN0cnVqLXNpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7QUFVSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWNJO0VBQ0UsWUFBQTtBQVpOO0FBZUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWJOOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVqZXN0cmFjamEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAubmFnbG93ZWsge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDIxNjk4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmtyb2tpIHtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhcnoge1xyXG4gIH1cclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtQZXRhOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLmtyb2tpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTcsIDE3LCAxNywgMC4xMik7XHJcblxyXG4gIC5rb2xrbyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggIzMwMzAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kIFBldGFcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgbGVmdDogMjhweDtcclxuICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua29sa29KdXpQbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmtvbGtvQWt0eXduZSB7XHJcbiAgICBzY2FsZTogMS4zO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2TmFQcnp5Y2lzayB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIC5idXR0b25EYWxlaiB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmM3YjAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzIwMjtcclxuXHJcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzMxODgwMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29mbmlqIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjAyMDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2VhZWFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUwMDAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjAyMDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFnbG93ZWsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGM1N2EyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 28381:
/*!***********************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/formularz-zarejestruj-sie.component.ts ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormularzZarejestrujSieComponent": () => (/* binding */ FormularzZarejestrujSieComponent)
/* harmony export */ });
/* harmony import */ var _etapy_klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etapy/klasy/dane-klienta */ 48268);
/* harmony import */ var _enum_drzwi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enum/drzwi */ 2512);
/* harmony import */ var _enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enum/nawigacja.enum */ 47792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../serwisy/listonosz.service */ 35992);
/* harmony import */ var _zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zarejestrujSie.service */ 32197);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../serwisy/nawigacja.service */ 39429);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _etapy_wybor_pracownika_wybor_pracownika_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./etapy/wybor-pracownika/wybor-pracownika.component */ 22963);
/* harmony import */ var _etapy_wybor_uslug_wybor_uslug_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./etapy/wybor-uslug/wybor-uslug.component */ 37714);
/* harmony import */ var _etapy_kalendarz_kalendarz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./etapy/kalendarz/kalendarz.component */ 93297);
/* harmony import */ var _etapy_wpisanie_danych_wpisanie_danych_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./etapy/wpisanie-danych/wpisanie-danych.component */ 4677);
/* harmony import */ var _etapy_podsumowanie_podsumowanie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./etapy/podsumowanie/podsumowanie.component */ 61149);
/* harmony import */ var _etapy_weryfikacja_weryfikacja_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./etapy/weryfikacja/weryfikacja.component */ 87718);














const _c0 = function (a0, a1) {
  return {
    kolkoJuzPo: a0,
    kolkoAktywne: a1
  };
};
function FormularzZarejestrujSieComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 7)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const index_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c0, index_r8 + 1 < ctx_r0.krok, index_r8 + 1 == ctx_r0.krok));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](index_r8 + 1);
  }
}
function FormularzZarejestrujSieComponent_app_wybor_pracownika_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-wybor-pracownika", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("wyslijKrok", function FormularzZarejestrujSieComponent_app_wybor_pracownika_8_Template_app_wybor_pracownika_wyslijKrok_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r9.ustawKrok($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function FormularzZarejestrujSieComponent_app_wybor_uslug_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-wybor-uslug", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("wyslijKrok", function FormularzZarejestrujSieComponent_app_wybor_uslug_9_Template_app_wybor_uslug_wyslijKrok_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r11.ustawKrok($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function FormularzZarejestrujSieComponent_app_kalendarz_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-kalendarz", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("wyslijKrok", function FormularzZarejestrujSieComponent_app_kalendarz_10_Template_app_kalendarz_wyslijKrok_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r13.ustawKrok($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function FormularzZarejestrujSieComponent_app_wpisanie_danych_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-wpisanie-danych", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("wyslijKrok", function FormularzZarejestrujSieComponent_app_wpisanie_danych_11_Template_app_wpisanie_danych_wyslijKrok_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r15.ustawKrok($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function FormularzZarejestrujSieComponent_app_weryfikacja_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-weryfikacja", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("wyslijKrok", function FormularzZarejestrujSieComponent_app_weryfikacja_12_Template_app_weryfikacja_wyslijKrok_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r17.ustawKrok($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function FormularzZarejestrujSieComponent_app_podsumowanie_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-podsumowanie", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("wyslijKrok", function FormularzZarejestrujSieComponent_app_podsumowanie_13_Template_app_podsumowanie_wyslijKrok_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r19.ustawKrok($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c1 = function () {
  return [];
};
class FormularzZarejestrujSieComponent {
  constructor(listonosz, zarejestrujSieService, nawigacja_) {
    this.listonosz = listonosz;
    this.zarejestrujSieService = zarejestrujSieService;
    this.nawigacja_ = nawigacja_;
    this.krok = 2;
  }
  ngOnInit() {}
  ustawKrok(nowyKrok) {
    if (nowyKrok == 5) {
      //kiedy kliknięte w 4
      this.wyslijDane();
    } else if (nowyKrok == 6) {
      //kiedy kliknięte w 5
      this.wyslijKod();
    } else {
      this.krok = nowyKrok;
    }
    this.nawigacja_.przeniesDoPanelu(_enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_2__.NawigacjaEnum.rejestracjaFormularz);
  }
  wyslijDane() {
    this.zarejestrujSieService.DaneKlientaClass.daneNieWyslane = false;
    const daneDTO = new _etapy_klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__.DaneKlientaDTO(this.zarejestrujSieService.DaneKlientaClass);
    this.listonosz.wyslij(_enum_drzwi__WEBPACK_IMPORTED_MODULE_1__.Drzwi.daneKlientaRejestracja, daneDTO).then(identyfikatorWizyty => {
      this.zarejestrujSieService.DaneKlientaClass.identyfikator = identyfikatorWizyty;
      this.krok = 5;
    }).catch(nieudane => {
      this.zarejestrujSieService.DaneKlientaClass.daneNieWyslane = true;
    });
  }
  wyslijKod() {
    this.zarejestrujSieService.DaneKlientaClass.niepoprawnyKod = false;
    const kodDTO = {
      kod: this.zarejestrujSieService.DaneKlientaClass.kodWeryfikacja,
      identyfikator: this.zarejestrujSieService.DaneKlientaClass.identyfikator
    };
    this.listonosz.wyslij(_enum_drzwi__WEBPACK_IMPORTED_MODULE_1__.Drzwi.kodWeryfikacyjnyIdentyfikator, kodDTO).then(udane => {
      this.krok = 6;
    }).catch(nieudane => {
      this.zarejestrujSieService.DaneKlientaClass.niepoprawnyKod = true;
    });
  }
}
FormularzZarejestrujSieComponent.ɵfac = function FormularzZarejestrujSieComponent_Factory(t) {
  return new (t || FormularzZarejestrujSieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_3__.ListonoszService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_4__.ZarejestrujSieService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_5__.NawigacjaService));
};
FormularzZarejestrujSieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: FormularzZarejestrujSieComponent,
  selectors: [["app-formularz-zarejestruj-sie"]],
  decls: 14,
  vars: 9,
  consts: [[1, "rejestracja"], [1, "naglowek"], [1, "kroki"], ["class", "kolko kolko1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "formularz"], [3, "ngSwitch"], [3, "wyslijKrok", 4, "ngSwitchCase"], [1, "kolko", "kolko1", 3, "ngClass"], [3, "wyslijKrok"]],
  template: function FormularzZarejestrujSieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Rejestracja na wizyte");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, FormularzZarejestrujSieComponent_div_5_Template, 3, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](7, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, FormularzZarejestrujSieComponent_app_wybor_pracownika_8_Template, 1, 0, "app-wybor-pracownika", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, FormularzZarejestrujSieComponent_app_wybor_uslug_9_Template, 1, 0, "app-wybor-uslug", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, FormularzZarejestrujSieComponent_app_kalendarz_10_Template, 1, 0, "app-kalendarz", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, FormularzZarejestrujSieComponent_app_wpisanie_danych_11_Template, 1, 0, "app-wpisanie-danych", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, FormularzZarejestrujSieComponent_app_weryfikacja_12_Template, 1, 0, "app-weryfikacja", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, FormularzZarejestrujSieComponent_app_podsumowanie_13_Template, 1, 0, "app-podsumowanie", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c1).constructor(6));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", ctx.krok);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgSwitchCase, _etapy_wybor_pracownika_wybor_pracownika_component__WEBPACK_IMPORTED_MODULE_6__.WyborPracownikaComponent, _etapy_wybor_uslug_wybor_uslug_component__WEBPACK_IMPORTED_MODULE_7__.WyborUslugComponent, _etapy_kalendarz_kalendarz_component__WEBPACK_IMPORTED_MODULE_8__.KalendarzComponent, _etapy_wpisanie_danych_wpisanie_danych_component__WEBPACK_IMPORTED_MODULE_9__.WpisanieDanychComponent, _etapy_podsumowanie_podsumowanie_component__WEBPACK_IMPORTED_MODULE_10__.PodsumowanieComponent, _etapy_weryfikacja_weryfikacja_component__WEBPACK_IMPORTED_MODULE_11__.WeryfikacjaComponent],
  styles: ["@import url(https://fonts.googleapis.com/css2?family=Lexend+Peta:wght@400&display=swap);.rejestracja[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  min-height: 400px;\n  background: #fcfcfc;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  height: min-content;\n  width: 100%;\n  text-align: center;\n  float: left;\n}\n.rejestracja[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  color: #021698;\n  font-size: 35px;\n  font-family: math;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px black;\n  display: block;\n}\n.kroki[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid rgba(17, 17, 17, 0.12);\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-right: 140px;\n  position: relative;\n  left: 75px;\n  box-shadow: 1px 2px 1px 1px #303030;\n  text-align: center;\n  z-index: 10;\n  background: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: relative;\n  top: -3px;\n  font-size: 20px;\n  font-family: \"Lexend Peta\", sans-serif;\n}\n.kroki[_ngcontent-%COMP%]   .kolko[_ngcontent-%COMP%]:not(:last-of-type):after {\n  z-index: 9;\n  position: relative;\n  top: -14px;\n  left: 28px;\n  width: 142px;\n  height: 3px;\n  display: block;\n  content: \"\";\n  background: #333333;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoJuzPo[_ngcontent-%COMP%] {\n  background: #dbd5d5;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%] {\n  scale: 1.3;\n  top: -3px;\n  background: green !important;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n}\n.kroki[_ngcontent-%COMP%]   .kolkoAktywne[_ngcontent-%COMP%]:after {\n  top: -11px !important;\n  width: 110px !important;\n  height: 2px !important;\n  left: 30px !important;\n}\n\n.divNaPrzycisk[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  width: 100%;\n  height: min-content;\n  float: left;\n  text-align: right;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background: #2c7b00;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #067202;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:hover:not([disabled]) {\n  cursor: pointer;\n  background: #318801;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonDalej[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(80%);\n  cursor: not-allowed;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 30px;\n  background-color: #960202;\n  float: right;\n  color: white;\n  font-size: 16px;\n  text-shadow: 1px 1px 1px black;\n  box-shadow: 0px 0px 1px 1px #eaeaea;\n  border-radius: 20px;\n  font-weight: bold;\n  font-family: math;\n  margin-left: 20px;\n  border: 1px solid #750000;\n}\n.divNaPrzycisk[_ngcontent-%COMP%]   .buttonCofnij[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #a20202;\n}\n\n.naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: min-content;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n.naglowek[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: math;\n  font-weight: bold;\n  font-size: 24px;\n  color: #0c57a2;\n  text-shadow: 0px 0px 1px black;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 1px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2Zvcm11bGFyei16YXJlamVzdHJ1ai1zaWUvZm9ybXVsYXJ6LXphcmVqZXN0cnVqLXNpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFFTjtBQVVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUko7QUFVSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBUk47QUFXSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBVE47QUFhRTtFQUNFLG1CQUFBO0FBWEo7QUFjRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QUFaSjtBQWNJO0VBQ0UsWUFBQTtBQVpOO0FBZUk7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQWJOOztBQWtCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWZKO0FBaUJJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBZk47QUFrQkk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBbkJKO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBbkJOOztBQXdCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBckJGO0FBdUJFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFyQko7O0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF0QkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVqZXN0cmFjamEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICAubmFnbG93ZWsge1xyXG4gICAgaGVpZ2h0OiBtaW4tY29udGVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDIxNjk4O1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmtyb2tpIHtcclxuICB9XHJcblxyXG4gIC5mb3JtdWxhcnoge1xyXG4gIH1cclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxleGVuZCtQZXRhOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiKTtcclxuLmtyb2tpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTcsIDE3LCAxNywgMC4xMik7XHJcblxyXG4gIC5rb2xrbyB7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDFweCAxcHggIzMwMzAzMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0b3A6IC0zcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiTGV4ZW5kIFBldGFcIiwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XHJcbiAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAtMTRweDtcclxuICAgICAgbGVmdDogMjhweDtcclxuICAgICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAua29sa29KdXpQbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGJkNWQ1O1xyXG4gIH1cclxuXHJcbiAgLmtvbGtvQWt0eXduZSB7XHJcbiAgICBzY2FsZTogMS4zO1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW4gIWltcG9ydGFudDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0b3A6IC0xMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2TmFQcnp5Y2lzayB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gIC5idXR0b25EYWxlaiB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmM3YjAwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMXB4ICNlYWVhZWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA2NzIwMjtcclxuXHJcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzMxODgwMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoODAlKTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29mbmlqIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NjAyMDI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2VhZWFlYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzUwMDAwO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMjAyMDI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmFnbG93ZWsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMGM1N2EyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 32197:
/*!**********************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/zarejestrujSie.service.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZarejestrujSieService": () => (/* binding */ ZarejestrujSieService)
/* harmony export */ });
/* harmony import */ var _etapy_klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./etapy/klasy/dane-klienta */ 48268);
/* harmony import */ var _enum_drzwi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enum/drzwi */ 2512);
/* harmony import */ var _etapy_kalendarz_termin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etapy/kalendarz/termin */ 57391);
/* harmony import */ var projects_panel_zakladu_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/panel-zakladu/src/environments/environment */ 24448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../serwisy/listonosz.service */ 35992);






class ZarejestrujSieService {
  constructor(listonosz) {
    this.listonosz = listonosz;
    this.DaneKlientaClass = new _etapy_klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__.DaneKlienta();
    this.wyswietlanieFormualrza = true;
    this.environment = projects_panel_zakladu_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment;
    this.niepobranyKalendarz = projects_panel_zakladu_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production;
  }
  pobierzTerminyWizyt() {
    this.niepobranyKalendarz = false;
    const pracownikUslugiDTO_obj = new _etapy_klasy_dane_klienta__WEBPACK_IMPORTED_MODULE_0__.pracownikUslugiDTO(this.DaneKlientaClass);
    this.listonosz.wyslij(_enum_drzwi__WEBPACK_IMPORTED_MODULE_1__.Drzwi.pobierzTerminy, pracownikUslugiDTO_obj).then(odpowiedz => {
      this.DaneKlientaClass.wszystkieTerminy = [];
      odpowiedz.forEach(termin_ => {
        const terminOBJ = new _etapy_kalendarz_termin__WEBPACK_IMPORTED_MODULE_2__.Termin();
        terminOBJ.poczatek = new Date(termin_.poczatek);
        terminOBJ.koniec = new Date(termin_.koniec);
        this.DaneKlientaClass.wszystkieTerminy.push(terminOBJ);
      });
    }).catch(niewyslane => {
      this.niepobranyKalendarz = true;
    });
  }
}
ZarejestrujSieService.ɵfac = function ZarejestrujSieService_Factory(t) {
  return new (t || ZarejestrujSieService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_4__.ListonoszService));
};
ZarejestrujSieService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: ZarejestrujSieService,
  factory: ZarejestrujSieService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44706:
/*!*******************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-ojednym-pracowniku/informacja-ojednym-pracowniku.component.ts ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacjaOJednymPracownikuComponent": () => (/* binding */ InformacjaOJednymPracownikuComponent)
/* harmony export */ });
/* harmony import */ var _klasy_pracownik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../klasy/pracownik */ 92552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _komponenty_informacje_ojednym_pracowniku_kontakt_informacje_ojednym_pracowniku_kontakt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./komponenty/informacje-ojednym-pracowniku-kontakt/informacje-ojednym-pracowniku-kontakt.component */ 57395);
/* harmony import */ var _komponenty_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./komponenty/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component */ 8673);




class InformacjaOJednymPracownikuComponent {
  constructor() {
    this.daneOPracowniku = new _klasy_pracownik__WEBPACK_IMPORTED_MODULE_0__.Pracownik();
  }
}
InformacjaOJednymPracownikuComponent.ɵfac = function InformacjaOJednymPracownikuComponent_Factory(t) {
  return new (t || InformacjaOJednymPracownikuComponent)();
};
InformacjaOJednymPracownikuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: InformacjaOJednymPracownikuComponent,
  selectors: [["app-informacja-ojednym-pracowniku"]],
  inputs: {
    daneOPracowniku: "daneOPracowniku"
  },
  decls: 6,
  vars: 2,
  consts: [[1, "wyswietlanyPracownik"], [1, "container"], [1, "imieNazwiskoIzdjecie"], [3, "daneOPracowniku"], [1, "kontakt"]],
  template: function InformacjaOJednymPracownikuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-informacje-ojednym-pracowniku-zdjecie-imie-nazwisko", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-informacje-ojednym-pracowniku-kontakt", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("daneOPracowniku", ctx.daneOPracowniku);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("daneOPracowniku", ctx.daneOPracowniku);
    }
  },
  dependencies: [_komponenty_informacje_ojednym_pracowniku_kontakt_informacje_ojednym_pracowniku_kontakt_component__WEBPACK_IMPORTED_MODULE_1__.InformacjeOJednymPracownikuKontaktComponent, _komponenty_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_informacje_ojednym_pracowniku_zdjecie_imie_nazwisko_component__WEBPACK_IMPORTED_MODULE_2__.InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent],
  styles: [".wyswietlanyPracownik[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  float: left;\n  grid-template-areas: \"imieNazwiskoIzdjecie kontakt\" \" opis adresZapraszam\";\n}\n\n.imieNazwiskoIzdjecie[_ngcontent-%COMP%] {\n  grid-area: imieNazwiskoIzdjecie;\n  padding-right: 30px;\n}\n\n.opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n  padding-right: 30px;\n}\n\n.kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  padding-left: 30px;\n}\n\n.adresZapraszam[_ngcontent-%COMP%] {\n  grid-area: adresZapraszam;\n  padding-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb2plZG55bS1wcmFjb3duaWt1L2luZm9ybWFjamEtb2plZG55bS1wcmFjb3duaWt1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwRUFDRTtBQURKOztBQU1BO0VBQ0UsK0JBQUE7RUFDQSxtQkFIUTtBQUFWOztBQU1BO0VBQ0UsZUFBQTtFQUNBLG1CQVJRO0FBS1Y7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGtCQWJRO0FBVVY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGtCQWxCUTtBQWVWIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53eXN3aWV0bGFueVByYWNvd25payB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcclxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gIGdhcDogMHB4IDBweDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImltaWVOYXp3aXNrb0l6ZGplY2llIGtvbnRha3RcIlxyXG4gICAgXCIgb3BpcyBhZHJlc1phcHJhc3phbVwiO1xyXG59XHJcblxyXG4kcGFkZGluZzogMzBweDtcclxuLmltaWVOYXp3aXNrb0l6ZGplY2llIHtcclxuICBncmlkLWFyZWE6IGltaWVOYXp3aXNrb0l6ZGplY2llO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nO1xyXG59XHJcblxyXG4ub3BpcyB7XHJcbiAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nO1xyXG59XHJcblxyXG4ua29udGFrdCB7XHJcbiAgZ3JpZC1hcmVhOiBrb250YWt0O1xyXG4gIHBhZGRpbmctbGVmdDogJHBhZGRpbmc7XHJcbn1cclxuXHJcbi5hZHJlc1phcHJhc3phbSB7XHJcbiAgZ3JpZC1hcmVhOiBhZHJlc1phcHJhc3phbTtcclxuICBwYWRkaW5nLWxlZnQ6ICRwYWRkaW5nO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 57395:
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-kontakt/informacje-ojednym-pracowniku-kontakt.component.ts ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacjeOJednymPracownikuKontaktComponent": () => (/* binding */ InformacjeOJednymPracownikuKontaktComponent)
/* harmony export */ });
/* harmony import */ var _klasy_pracownik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../klasy/pracownik */ 92552);
/* harmony import */ var _enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../enum/nawigacja.enum */ 47792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _napisz_nam_napisz_nam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../napisz-nam/napisz-nam.service */ 96905);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../serwisy/nawigacja.service */ 39429);





class InformacjeOJednymPracownikuKontaktComponent {
  constructor(napiszNam, nawigacja) {
    this.napiszNam = napiszNam;
    this.nawigacja = nawigacja;
    this.daneOPracowniku = new _klasy_pracownik__WEBPACK_IMPORTED_MODULE_0__.Pracownik();
  }
  wybierz() {
    this.nawigacja.przeniesDoPanelu(_enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_1__.NawigacjaEnum.napiszNam);
    this.napiszNam.napiszNamObj.komuWyslac = this.daneOPracowniku.id.toString();
  }
}
InformacjeOJednymPracownikuKontaktComponent.ɵfac = function InformacjeOJednymPracownikuKontaktComponent_Factory(t) {
  return new (t || InformacjeOJednymPracownikuKontaktComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_napisz_nam_napisz_nam_service__WEBPACK_IMPORTED_MODULE_2__.NapiszNamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_3__.NawigacjaService));
};
InformacjeOJednymPracownikuKontaktComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: InformacjeOJednymPracownikuKontaktComponent,
  selectors: [["app-informacje-ojednym-pracowniku-kontakt"]],
  inputs: {
    daneOPracowniku: "daneOPracowniku"
  },
  decls: 21,
  vars: 4,
  consts: [[1, "imieNazwisko"], [1, "kontakt"], ["colspan", "2", 1, "naglowek"], [1, "naglowek2", 2, "width", "205px"], [1, "naglowek3"], ["rowspan", "2"], [1, "napiszDoMnieButton", 3, "click"]],
  template: function InformacjeOJednymPracownikuKontaktComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "table")(5, "tr")(6, "td", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Skontaktuj si\u0119 ze mn\u0105 je\u015Bli masz jakie\u015B pytania: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tr")(9, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Numer telefonu:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 5)(14, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InformacjeOJednymPracownikuKontaktComponent_Template_button_click_14_listener() {
        return ctx.wybierz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Napisz do mnie ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tr")(17, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "E-mail:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.daneOPracowniku.imie, " ", ctx.daneOPracowniku.nazwisko, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.daneOPracowniku.numerTelefonu);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.daneOPracowniku.email);
    }
  },
  styles: [".naglowek[_ngcontent-%COMP%] {\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n  background: #fcfcfc;\n}\n\n.naglowek2[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.naglowek3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.imieNazwisko[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 50px;\n  float: left;\n}\n.imieNazwisko[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 28px;\n  color: #0404b4;\n  font-family: math;\n  text-shadow: 0px 0px 1px black;\n  letter-spacing: 1px;\n  margin: 0;\n}\n\n.kontakt[_ngcontent-%COMP%] {\n  width: 800px;\n  height: min-content;\n  min-height: 100px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(209, 231, 255, 0.65);\n  border: 1px solid gainsboro;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  padding: 10px;\n}\n\n.napiszDoMnieButton[_ngcontent-%COMP%] {\n  border: 2px solid #d40000;\n  width: 150px;\n  height: 40px;\n  border-radius: 30px;\n  background-color: transparent;\n  color: #d40000;\n  font-size: 15px;\n  font-weight: bold;\n  text-shadow: 0px 0px 1px #817b7b;\n  font-family: math;\n  transition: 200ms;\n}\n.napiszDoMnieButton[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #b90b0b;\n  border: 2px solid #a80505;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb2plZG55bS1wcmFjb3duaWt1L2tvbXBvbmVudHkvaW5mb3JtYWNqZS1vamVkbnltLXByYWNvd25pa3Uta29udGFrdC9pbmZvcm1hY2plLW9qZWRueW0tcHJhY293bmlrdS1rb250YWt0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLFdBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQUo7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIi5uYWdsb3dlayB7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xyXG59XHJcblxyXG4ubmFnbG93ZWsyIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4ubmFnbG93ZWszIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMyNDQxYWE7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IGJsdWU7XHJcbn1cclxuXHJcbi5pbWllTmF6d2lza28ge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjMDQwNGI0O1xyXG4gICAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmtvbnRha3Qge1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIwOSwgMjMxLCAyNTUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubmFwaXN6RG9NbmllQnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZDQwMDAwO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogI2Q0MDAwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICM4MTdiN2I7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I5MGIwYjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhODA1MDU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8673:
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-ojednym-pracowniku/komponenty/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko/informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component.ts ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent": () => (/* binding */ InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent)
/* harmony export */ });
/* harmony import */ var _klasy_pracownik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../klasy/pracownik */ 92552);
/* harmony import */ var _enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../enum/nawigacja.enum */ 47792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _formularz_zarejestruj_sie_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../formularz-zarejestruj-sie/zarejestrujSie.service */ 32197);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../serwisy/nawigacja.service */ 39429);
/* harmony import */ var _rurki_zdjecie_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../rurki/zdjecie.pipe */ 81507);






class InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent {
  constructor(zarejestrujSieSErvice, nawigacja) {
    this.zarejestrujSieSErvice = zarejestrujSieSErvice;
    this.nawigacja = nawigacja;
    this.daneOPracowniku = new _klasy_pracownik__WEBPACK_IMPORTED_MODULE_0__.Pracownik();
  }
  wybierz() {
    this.zarejestrujSieSErvice.wyswietlanieFormualrza = true;
    this.nawigacja.przeniesDoPanelu(_enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_1__.NawigacjaEnum.rejestracjaFormularz);
    this.zarejestrujSieSErvice.DaneKlientaClass.wybranyPracownik = this.daneOPracowniku.id;
  }
}
InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent.ɵfac = function InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent_Factory(t) {
  return new (t || InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_formularz_zarejestruj_sie_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_2__.ZarejestrujSieService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_3__.NawigacjaService));
};
InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent,
  selectors: [["app-informacje-ojednym-pracowniku-zdjecie-imie-nazwisko"]],
  inputs: {
    daneOPracowniku: "daneOPracowniku"
  },
  decls: 7,
  vars: 3,
  consts: [[1, "zdjIprzycisk", 3, "click"], [1, "zdjecie"], [3, "src"], [1, "przycisk"], [3, "click"]],
  template: function InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent_Template_div_click_0_listener() {
        return ctx.wybierz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "zdjecie");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent_Template_button_click_5_listener() {
        return ctx.wybierz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Zarejestruj si\u0119");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "http://fenek.tech:3000/pliki/wyswietlZdjecieProfilowe/" + ctx.daneOPracowniku.id), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_rurki_zdjecie_pipe__WEBPACK_IMPORTED_MODULE_4__.ZdjeciePipe],
  styles: [".zdjIprzycisk[_ngcontent-%COMP%] {\n  float: right;\n  width: 300px;\n  flex-direction: column;\n  border-top: 2px inset #696b69;\n  border-left: 2px inset #696b69;\n  box-shadow: 2px 2px 4px 2px #696b69;\n}\n.zdjIprzycisk[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.zdjIprzycisk[_ngcontent-%COMP%]   .zdjecie[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 200px;\n}\n.zdjIprzycisk[_ngcontent-%COMP%]   .zdjecie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  float: left;\n  box-shadow: 0px 1px 1px 0px black;\n}\n.zdjIprzycisk[_ngcontent-%COMP%]   .przycisk[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n}\n.zdjIprzycisk[_ngcontent-%COMP%]   .przycisk[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  float: left;\n  background: transparent;\n  border: none;\n  font-size: 25px;\n  letter-spacing: 1px;\n  color: #016501;\n  text-shadow: 0px 0px 1px black;\n  font-family: math;\n  font-weight: bolder;\n}\n.zdjIprzycisk[_ngcontent-%COMP%]   .przycisk[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transition: 500ms;\n  background: green;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb2plZG55bS1wcmFjb3duaWt1L2tvbXBvbmVudHkvaW5mb3JtYWNqZS1vamVkbnltLXByYWNvd25pa3UtemRqZWNpZS1pbWllLW5hendpc2tvL2luZm9ybWFjamUtb2plZG55bS1wcmFjb3duaWt1LXpkamVjaWUtaW1pZS1uYXp3aXNrby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFBTjtBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGSjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUZOO0FBSU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFGUiIsInNvdXJjZXNDb250ZW50IjpbIi56ZGpJcHJ6eWNpc2sge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItdG9wOiAycHggaW5zZXQgIzY5NmI2OTtcclxuICBib3JkZXItbGVmdDogMnB4IGluc2V0ICM2OTZiNjk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMnB4ICM2OTZiNjk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLnpkamVjaWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxcHggMHB4IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByenljaXNrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIGNvbG9yOiAjMDE2NTAxO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggYmxhY2s7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDUwMG1zO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 53477:
/*!***************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-onas/informacja-onas.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacjaONasComponent": () => (/* binding */ InformacjaONasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../serwisy/nawigacja.service */ 39429);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _komponenty_onas_dane_podstawowe_onas_dane_podstawowe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./komponenty/onas-dane-podstawowe/onas-dane-podstawowe.component */ 56811);
/* harmony import */ var _komponenty_onas_adres_onas_adres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./komponenty/onas-adres/onas-adres.component */ 63030);
/* harmony import */ var _komponenty_onas_godziny_otwarcia_onas_godziny_otwarcia_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./komponenty/onas-godziny-otwarcia/onas-godziny-otwarcia.component */ 56419);
/* harmony import */ var _komponenty_onas_kontakt_onas_kontakt_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./komponenty/onas-kontakt/onas-kontakt.component */ 26955);
/* harmony import */ var _komponenty_onas_uslugi_onas_uslugi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./komponenty/onas-uslugi/onas-uslugi.component */ 28723);









function InformacjaONasComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-onas-kontakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InformacjaONasComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-onas-godziny-otwarcia");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InformacjaONasComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-onas-uslugi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InformacjaONasComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-onas-dane-podstawowe");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class InformacjaONasComponent {
  constructor(nawigacja, danePodstawowe) {
    this.nawigacja = nawigacja;
    this.danePodstawowe = danePodstawowe;
  }
}
InformacjaONasComponent.ɵfac = function InformacjaONasComponent_Factory(t) {
  return new (t || InformacjaONasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__.NawigacjaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_1__.DanePodstawoweService));
};
InformacjaONasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: InformacjaONasComponent,
  selectors: [["app-informacja-onas"]],
  decls: 10,
  vars: 4,
  consts: [["id", "ONas", 1, "informacjaOnas"], [1, "container"], [1, "dane"], [4, "ngIf"], [1, "panel"], ["class", "uslugi", 4, "ngIf"], ["class", "podstawoweInformacje", 4, "ngIf"], [1, "uslugi"], [1, "podstawoweInformacje"]],
  template: function InformacjaONasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, InformacjaONasComponent_div_3_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, InformacjaONasComponent_div_4_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-onas-adres");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, InformacjaONasComponent_span_8_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, InformacjaONasComponent_div_9_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.danePodstawowe.danePodstawowe.wyswietlaneDane.naszKontaktCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.danePodstawowe.danePodstawowe.wyswietlaneDane.godzinyCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.danePodstawowe.danePodstawowe.wyswietlaneDane.uslugiCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.danePodstawowe.danePodstawowe.wyswietlaneDane.daneZakladuCzyWyswietlic);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _komponenty_onas_dane_podstawowe_onas_dane_podstawowe_component__WEBPACK_IMPORTED_MODULE_2__.ONasDanePodstawoweComponent, _komponenty_onas_adres_onas_adres_component__WEBPACK_IMPORTED_MODULE_3__.ONasAdresComponent, _komponenty_onas_godziny_otwarcia_onas_godziny_otwarcia_component__WEBPACK_IMPORTED_MODULE_4__.ONasGodzinyOtwarciaComponent, _komponenty_onas_kontakt_onas_kontakt_component__WEBPACK_IMPORTED_MODULE_5__.ONasKontaktComponent, _komponenty_onas_uslugi_onas_uslugi_component__WEBPACK_IMPORTED_MODULE_6__.ONasUslugiComponent],
  styles: [".informacjaOnas[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 99;\n  padding-top: 20px;\n  height: min-content;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  width: 100%;\n  grid-auto-flow: row;\n  grid-template-areas: \"panel dane\";\n}\n.informacjaOnas[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"podstawoweInformacje\" \"uslugi \" \"uslugi \";\n  grid-area: panel;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .uslugi[_ngcontent-%COMP%] {\n  grid-area: uslugi;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%] {\n  grid-area: dane;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-direction: column;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .podstawoweInformacje[_ngcontent-%COMP%] {\n  grid-area: podstawoweInformacje;\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .Adres[_ngcontent-%COMP%] {\n  grid-area: Adres;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.informacjeOnasTytul[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n}\n\n.informacjaNaglowek1[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.informacjaNaglowek2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.tabelaDane[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  width: 440px;\n}\n\n.uslugi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n\n.tabelaRamka[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  box-shadow: 2px 2px 4px 1px #b8babd;\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n\n.uslugiTytul[_ngcontent-%COMP%] {\n  font-size: 29px;\n  font-weight: bold;\n  color: #950000;\n  letter-spacing: 1px;\n  font-family: math;\n  text-align: left;\n  text-shadow: 0px 0px 1px #8f8f8f;\n}\n\n.uslugiTable[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(226, 234, 245, 0.65);\n  border: 1px solid gainsboro;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.uslugiTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 600px;\n  height: min-content;\n  min-height: 200px;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9pbmZvcm1hY2phLW9uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUNBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQ0E7RUFHQSxnQkFBQTtBQU5KO0FBVUU7RUFDRSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFYSjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWJOO0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWhCSjtBQXNCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLDZCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFuQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNqYU9uYXMge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGFuZWwgZGFuZVwiXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicG9kc3Rhd293ZUluZm9ybWFjamVcIlxyXG4gICAgXCJ1c2x1Z2kgXCJcclxuICAgIFwidXNsdWdpIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiBwYW5lbDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNsdWdpIHtcclxuICAgIGdyaWQtYXJlYTogdXNsdWdpO1xyXG4gIH1cclxuXHJcbiAgLm9waXMge1xyXG4gICAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5rb250YWt0IHtcclxuICAgIGdyaWQtYXJlYToga29udGFrdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5kYW5lIHtcclxuICAgIGdyaWQtYXJlYTogZGFuZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBvZHN0YXdvd2VJbmZvcm1hY2plIHtcclxuICAgIGdyaWQtYXJlYTogcG9kc3Rhd293ZUluZm9ybWFjamU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5BZHJlcyB7XHJcbiAgICBncmlkLWFyZWE6IEFkcmVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2plT25hc1R5dHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2phTmFnbG93ZWsxIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4uaW5mb3JtYWNqYU5hZ2xvd2VrMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG5cclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJlbGFEYW5lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udXNsdWdpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiZWxhUmFta2Ege1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCAjYjhiYWJkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi51c2x1Z2lUeXR1bCB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTUwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzhmOGY4ZjtcclxufVxyXG5cclxuXHJcbi51c2x1Z2lUYWJsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIyNiwgMjM0LCAyNDUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 63030:
/*!********************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-onas/komponenty/onas-adres/onas-adres.component.ts ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONasAdresComponent": () => (/* binding */ ONasAdresComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../serwisy/nawigacja.service */ 39429);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../serwisy/fa-icons.service */ 45087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);






function ONasAdresComponent_ng_container_9_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" nr.lokalu \u00A0", ctx_r2.DanePodstawowe_.danePodstawowe.adres.numerLokalu, " ");
  }
}
function ONasAdresComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr")(2, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tr")(5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ONasAdresComponent_ng_container_9_tr_7_Template, 3, 1, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ul.", ctx_r0.DanePodstawowe_.danePodstawowe.adres.numerUlicy, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" nr.domu \u00A0", ctx_r0.DanePodstawowe_.danePodstawowe.adres.numerDomu, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.DanePodstawowe_.danePodstawowe.adres.numerLokalu.length > 0);
  }
}
function ONasAdresComponent_ng_container_10_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ul.", ctx_r3.DanePodstawowe_.danePodstawowe.adres.numerUlicy, " ");
  }
}
function ONasAdresComponent_ng_container_10_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" nr.lokalu \u00A0", ctx_r4.DanePodstawowe_.danePodstawowe.adres.numerLokalu, " ");
  }
}
function ONasAdresComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr")(2, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tr")(5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ONasAdresComponent_ng_container_10_ng_container_7_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr")(9, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ONasAdresComponent_ng_container_10_tr_11_Template, 3, 1, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" pow.", ctx_r1.DanePodstawowe_.danePodstawowe.adres.powiat, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" w.", ctx_r1.DanePodstawowe_.danePodstawowe.adres.wies, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.DanePodstawowe_.danePodstawowe.adres.numerUlicy.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" nr.domu \u00A0", ctx_r1.DanePodstawowe_.danePodstawowe.adres.numerDomu, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.DanePodstawowe_.danePodstawowe.adres.numerLokalu.length > 0);
  }
}
class ONasAdresComponent {
  constructor(nawigacja, DanePodstawowe_, faIcons) {
    this.nawigacja = nawigacja;
    this.DanePodstawowe_ = DanePodstawowe_;
    this.faIcons = faIcons;
  }
}
ONasAdresComponent.ɵfac = function ONasAdresComponent_Factory(t) {
  return new (t || ONasAdresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__.NawigacjaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_1__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_2__.FaIconsService));
};
ONasAdresComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ONasAdresComponent,
  selectors: [["app-onas-adres"]],
  decls: 15,
  vars: 5,
  consts: [[1, "tabelaDane", "tabelaRamka"], [1, "informacjeOnasTytul"], [1, "iconkaAdres", 3, "icon"], [1, "informacjaNaglowek1"], [4, "ngIf"], [1, "zobaczMape", 3, "click"]],
  template: function ONasAdresComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "table")(2, "tr")(3, "td", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Gdzie nas znajdziesz ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tr")(7, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ONasAdresComponent_ng_container_9_Template, 8, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ONasAdresComponent_ng_container_10_Template, 12, 5, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tr")(12, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ONasAdresComponent_Template_td_click_12_listener() {
        return ctx.nawigacja.przeniesDoPanelu(ctx.nawigacja.nav.stopka);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Zobacz map\u0119 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faIcons.mapa);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" woj.", ctx.DanePodstawowe_.danePodstawowe.adres.wojewodztwo, ", ", ctx.DanePodstawowe_.danePodstawowe.adres.miasto, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.adres.miasto.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.adres.wies.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent],
  styles: [".zobaczMape[_ngcontent-%COMP%] {\n  color: #1d5a01;\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n  text-shadow: 0px 0px 1px darkgreen;\n  letter-spacing: 1px;\n  font-family: math;\n  padding-top: 10px;\n}\n.zobaczMape[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #226b01;\n}\n\n.iconkaAdres[_ngcontent-%COMP%] {\n  position: relative;\n  color: #137505;\n  font-size: 23px;\n  top: 0px;\n  filter: drop-shadow(1px 1px 1px #fff);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9rb21wb25lbnR5L29uYXMtYWRyZXMvb25hcy1hZHJlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnpvYmFjek1hcGUge1xyXG4gIGNvbG9yOiAjMWQ1YTAxO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggZGFya2dyZWVuO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMyMjZiMDE7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmljb25rYUFkcmVzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6ICMxMzc1MDU7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMXB4IDFweCAxcHggI2ZmZik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", ".informacjaOnas[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 99;\n  padding-top: 20px;\n  height: min-content;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  width: 100%;\n  grid-auto-flow: row;\n  grid-template-areas: \"panel dane\";\n}\n.informacjaOnas[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"podstawoweInformacje\" \"uslugi \" \"uslugi \";\n  grid-area: panel;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .uslugi[_ngcontent-%COMP%] {\n  grid-area: uslugi;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%] {\n  grid-area: dane;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-direction: column;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .podstawoweInformacje[_ngcontent-%COMP%] {\n  grid-area: podstawoweInformacje;\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .Adres[_ngcontent-%COMP%] {\n  grid-area: Adres;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.informacjeOnasTytul[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n}\n\n.informacjaNaglowek1[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.informacjaNaglowek2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.tabelaDane[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  width: 440px;\n}\n\n.uslugi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n\n.tabelaRamka[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  box-shadow: 2px 2px 4px 1px #b8babd;\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n\n.uslugiTytul[_ngcontent-%COMP%] {\n  font-size: 29px;\n  font-weight: bold;\n  color: #950000;\n  letter-spacing: 1px;\n  font-family: math;\n  text-align: left;\n  text-shadow: 0px 0px 1px #8f8f8f;\n}\n\n.uslugiTable[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(226, 234, 245, 0.65);\n  border: 1px solid gainsboro;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.uslugiTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 600px;\n  height: min-content;\n  min-height: 200px;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9pbmZvcm1hY2phLW9uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUNBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQ0E7RUFHQSxnQkFBQTtBQU5KO0FBVUU7RUFDRSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFYSjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWJOO0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWhCSjtBQXNCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLDZCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFuQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNqYU9uYXMge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGFuZWwgZGFuZVwiXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicG9kc3Rhd293ZUluZm9ybWFjamVcIlxyXG4gICAgXCJ1c2x1Z2kgXCJcclxuICAgIFwidXNsdWdpIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiBwYW5lbDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNsdWdpIHtcclxuICAgIGdyaWQtYXJlYTogdXNsdWdpO1xyXG4gIH1cclxuXHJcbiAgLm9waXMge1xyXG4gICAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5rb250YWt0IHtcclxuICAgIGdyaWQtYXJlYToga29udGFrdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5kYW5lIHtcclxuICAgIGdyaWQtYXJlYTogZGFuZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBvZHN0YXdvd2VJbmZvcm1hY2plIHtcclxuICAgIGdyaWQtYXJlYTogcG9kc3Rhd293ZUluZm9ybWFjamU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5BZHJlcyB7XHJcbiAgICBncmlkLWFyZWE6IEFkcmVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2plT25hc1R5dHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2phTmFnbG93ZWsxIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4uaW5mb3JtYWNqYU5hZ2xvd2VrMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG5cclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJlbGFEYW5lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udXNsdWdpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiZWxhUmFta2Ege1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCAjYjhiYWJkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi51c2x1Z2lUeXR1bCB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTUwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzhmOGY4ZjtcclxufVxyXG5cclxuXHJcbi51c2x1Z2lUYWJsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIyNiwgMjM0LCAyNDUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 56811:
/*!****************************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-onas/komponenty/onas-dane-podstawowe/onas-dane-podstawowe.component.ts ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONasDanePodstawoweComponent": () => (/* binding */ ONasDanePodstawoweComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../serwisy/fa-icons.service */ 45087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);





function ONasDanePodstawoweComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Data za\u0142o\u017Cenia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.DanePodstawowe_.danePodstawowe.dataZalozenia, " ");
  }
}
function ONasDanePodstawoweComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Ilo\u015B\u0107 pracownik\u00F3w:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.DanePodstawowe_.danePodstawowe.iloscPracownikow, " ");
  }
}
function ONasDanePodstawoweComponent_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "NIP:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.DanePodstawowe_.danePodstawowe.NIP, " ");
  }
}
function ONasDanePodstawoweComponent_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "REGON:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.DanePodstawowe_.danePodstawowe.REGON, " ");
  }
}
class ONasDanePodstawoweComponent {
  constructor(DanePodstawowe_, faIcons) {
    this.DanePodstawowe_ = DanePodstawowe_;
    this.faIcons = faIcons;
  }
}
ONasDanePodstawoweComponent.ɵfac = function ONasDanePodstawoweComponent_Factory(t) {
  return new (t || ONasDanePodstawoweComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__.FaIconsService));
};
ONasDanePodstawoweComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ONasDanePodstawoweComponent,
  selectors: [["app-onas-dane-podstawowe"]],
  decls: 10,
  vars: 5,
  consts: [[1, "uslugiTable"], ["colspan", "2", 1, "informacjeOnasTytul"], [1, "iconkaPodstawowe", 3, "icon"], [4, "ngIf"], [1, "informacjaNaglowek1"], [1, "informacjaNaglowek2"]],
  template: function ONasDanePodstawoweComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table")(2, "tr")(3, "td", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Troch\u0119 informacji o naszym zak\u0142adzie ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ONasDanePodstawoweComponent_tr_6_Template, 5, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ONasDanePodstawoweComponent_tr_7_Template, 5, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ONasDanePodstawoweComponent_tr_8_Template, 5, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ONasDanePodstawoweComponent_tr_9_Template, 5, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faIcons.info);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.wyswietlaneDane.dataZalozeniayCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.wyswietlaneDane.iloscPracownikowCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.wyswietlaneDane.nipCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.wyswietlaneDane.regonCzyWyswietlic);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".iconkaPodstawowe[_ngcontent-%COMP%] {\n  font-size: 28px;\n  position: relative;\n  filter: drop-shadow(0px 0px 1px #aeaeae);\n  top: 2px;\n  color: rgb(136, 0, 0);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9rb21wb25lbnR5L29uYXMtZGFuZS1wb2RzdGF3b3dlL29uYXMtZGFuZS1wb2RzdGF3b3dlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxRQUFBO0VBQ0EscUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ua2FQb2RzdGF3b3dlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggI2FlYWVhZSk7XHJcbiAgdG9wOiAycHg7XHJcbiAgY29sb3I6IHJnYigxMzYsIDAsIDApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", ".informacjaOnas[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 99;\n  padding-top: 20px;\n  height: min-content;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  width: 100%;\n  grid-auto-flow: row;\n  grid-template-areas: \"panel dane\";\n}\n.informacjaOnas[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"podstawoweInformacje\" \"uslugi \" \"uslugi \";\n  grid-area: panel;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .uslugi[_ngcontent-%COMP%] {\n  grid-area: uslugi;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%] {\n  grid-area: dane;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-direction: column;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .podstawoweInformacje[_ngcontent-%COMP%] {\n  grid-area: podstawoweInformacje;\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .Adres[_ngcontent-%COMP%] {\n  grid-area: Adres;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.informacjeOnasTytul[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n}\n\n.informacjaNaglowek1[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.informacjaNaglowek2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.tabelaDane[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  width: 440px;\n}\n\n.uslugi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n\n.tabelaRamka[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  box-shadow: 2px 2px 4px 1px #b8babd;\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n\n.uslugiTytul[_ngcontent-%COMP%] {\n  font-size: 29px;\n  font-weight: bold;\n  color: #950000;\n  letter-spacing: 1px;\n  font-family: math;\n  text-align: left;\n  text-shadow: 0px 0px 1px #8f8f8f;\n}\n\n.uslugiTable[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(226, 234, 245, 0.65);\n  border: 1px solid gainsboro;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.uslugiTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 600px;\n  height: min-content;\n  min-height: 200px;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9pbmZvcm1hY2phLW9uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUNBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQ0E7RUFHQSxnQkFBQTtBQU5KO0FBVUU7RUFDRSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFYSjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWJOO0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWhCSjtBQXNCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLDZCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFuQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNqYU9uYXMge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGFuZWwgZGFuZVwiXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicG9kc3Rhd293ZUluZm9ybWFjamVcIlxyXG4gICAgXCJ1c2x1Z2kgXCJcclxuICAgIFwidXNsdWdpIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiBwYW5lbDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNsdWdpIHtcclxuICAgIGdyaWQtYXJlYTogdXNsdWdpO1xyXG4gIH1cclxuXHJcbiAgLm9waXMge1xyXG4gICAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5rb250YWt0IHtcclxuICAgIGdyaWQtYXJlYToga29udGFrdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5kYW5lIHtcclxuICAgIGdyaWQtYXJlYTogZGFuZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBvZHN0YXdvd2VJbmZvcm1hY2plIHtcclxuICAgIGdyaWQtYXJlYTogcG9kc3Rhd293ZUluZm9ybWFjamU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5BZHJlcyB7XHJcbiAgICBncmlkLWFyZWE6IEFkcmVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2plT25hc1R5dHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2phTmFnbG93ZWsxIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4uaW5mb3JtYWNqYU5hZ2xvd2VrMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG5cclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJlbGFEYW5lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udXNsdWdpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiZWxhUmFta2Ege1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCAjYjhiYWJkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi51c2x1Z2lUeXR1bCB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTUwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzhmOGY4ZjtcclxufVxyXG5cclxuXHJcbi51c2x1Z2lUYWJsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIyNiwgMjM0LCAyNDUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 56419:
/*!******************************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-onas/komponenty/onas-godziny-otwarcia/onas-godziny-otwarcia.component.ts ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONasGodzinyOtwarciaComponent": () => (/* binding */ ONasGodzinyOtwarciaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../serwisy/fa-icons.service */ 45087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);





function ONasGodzinyOtwarciaComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.DanePodstawowe_.danePodstawowe.poniedzialek.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.DanePodstawowe_.danePodstawowe.poniedzialek.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.DanePodstawowe_.danePodstawowe.wtorek.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.DanePodstawowe_.danePodstawowe.wtorek.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.DanePodstawowe_.danePodstawowe.sroda.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.DanePodstawowe_.danePodstawowe.sroda.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.DanePodstawowe_.danePodstawowe.czwartek.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.DanePodstawowe_.danePodstawowe.czwartek.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.DanePodstawowe_.danePodstawowe.piatek.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.DanePodstawowe_.danePodstawowe.piatek.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.DanePodstawowe_.danePodstawowe.sobota.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.DanePodstawowe_.danePodstawowe.sobota.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.DanePodstawowe_.danePodstawowe.niedziela.otwarcie, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.DanePodstawowe_.danePodstawowe.niedziela.zamkniecie, " ");
  }
}
function ONasGodzinyOtwarciaComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 8)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nieczynne");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ONasGodzinyOtwarciaComponent {
  constructor(DanePodstawowe_, faIcons) {
    this.DanePodstawowe_ = DanePodstawowe_;
    this.faIcons = faIcons;
  }
}
ONasGodzinyOtwarciaComponent.ɵfac = function ONasGodzinyOtwarciaComponent_Factory(t) {
  return new (t || ONasGodzinyOtwarciaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__.FaIconsService));
};
ONasGodzinyOtwarciaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ONasGodzinyOtwarciaComponent,
  selectors: [["app-onas-godziny-otwarcia"]],
  decls: 36,
  vars: 15,
  consts: [[1, "tabelaDane", "tabelaRamka"], ["colspan", "2", 1, "informacjeOnasTytul"], [1, "iconkaGodzina", 3, "icon"], [1, "informacjaNaglowek1"], ["class", "informacjaNaglowek2", 4, "ngIf", "ngIfElse"], ["nieczynne", ""], [1, "informacjaNaglowek2"], [1, "spanKreska"], [1, "nieczynne"]],
  template: function ONasGodzinyOtwarciaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table")(2, "tr")(3, "td", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Godziny otwarcia ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "tr")(7, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Poniedzia\u0142ek");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ONasGodzinyOtwarciaComponent_td_9_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tr")(11, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Wtorek");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ONasGodzinyOtwarciaComponent_td_13_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr")(15, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u015Aroda");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ONasGodzinyOtwarciaComponent_td_17_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr")(19, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Czwartek");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ONasGodzinyOtwarciaComponent_td_21_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tr")(23, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Pi\u0105tek");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ONasGodzinyOtwarciaComponent_td_25_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr")(27, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Sobota");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ONasGodzinyOtwarciaComponent_td_29_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tr")(31, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Niedziela");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ONasGodzinyOtwarciaComponent_td_33_Template, 5, 2, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ONasGodzinyOtwarciaComponent_ng_template_34_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faIcons.zegarek);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.poniedzialek.czynnyDzien)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.wtorek.czynnyDzien)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.sroda.czynnyDzien)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.czwartek.czynnyDzien)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.piatek.czynnyDzien)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.sobota.czynnyDzien)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DanePodstawowe_.danePodstawowe.niedziela.czynnyDzien)("ngIfElse", _r7);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".nieczynne[_ngcontent-%COMP%] {\n  color: #c70000;\n  font-size: 20px;\n  font-family: math;\n  text-shadow: 0px 1px 1px darkred;\n}\n\n.zegarek[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 40px;\n  position: relative;\n  top: 8px;\n  left: 0px;\n}\n\n.spanKreska[_ngcontent-%COMP%] {\n  visibility: hidden;\n  position: relative;\n  padding-left: 10px;\n}\n.spanKreska[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: -11px;\n  left: 4px;\n  content: \"-\";\n  visibility: visible;\n  font-size: 33px;\n}\n\n.iconkaGodzina[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgb(38, 66, 174);\n  font-size: 23px;\n  top: 2px;\n  filter: drop-shadow(0px 0px 1px #afacac);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9rb21wb25lbnR5L29uYXMtZ29kemlueS1vdHdhcmNpYS9vbmFzLWdvZHppbnktb3R3YXJjaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiLm5pZWN6eW5uZSB7XHJcbiAgY29sb3I6ICNjNzAwMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCBkYXJrcmVkO1xyXG59XHJcblxyXG5cclxuLnplZ2FyZWsge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA4cHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcblxyXG4uc3BhbktyZXNrYSB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTExcHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBjb250ZW50OiBcIi1cIjtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbmthR29kemluYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiByZ2IoMzgsIDY2LCAxNzQpO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0b3A6IDJweDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMXB4ICNhZmFjYWMpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", ".informacjaOnas[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 99;\n  padding-top: 20px;\n  height: min-content;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  width: 100%;\n  grid-auto-flow: row;\n  grid-template-areas: \"panel dane\";\n}\n.informacjaOnas[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"podstawoweInformacje\" \"uslugi \" \"uslugi \";\n  grid-area: panel;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .uslugi[_ngcontent-%COMP%] {\n  grid-area: uslugi;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%] {\n  grid-area: dane;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-direction: column;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .podstawoweInformacje[_ngcontent-%COMP%] {\n  grid-area: podstawoweInformacje;\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .Adres[_ngcontent-%COMP%] {\n  grid-area: Adres;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.informacjeOnasTytul[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n}\n\n.informacjaNaglowek1[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.informacjaNaglowek2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.tabelaDane[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  width: 440px;\n}\n\n.uslugi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n\n.tabelaRamka[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  box-shadow: 2px 2px 4px 1px #b8babd;\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n\n.uslugiTytul[_ngcontent-%COMP%] {\n  font-size: 29px;\n  font-weight: bold;\n  color: #950000;\n  letter-spacing: 1px;\n  font-family: math;\n  text-align: left;\n  text-shadow: 0px 0px 1px #8f8f8f;\n}\n\n.uslugiTable[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(226, 234, 245, 0.65);\n  border: 1px solid gainsboro;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.uslugiTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 600px;\n  height: min-content;\n  min-height: 200px;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9pbmZvcm1hY2phLW9uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUNBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQ0E7RUFHQSxnQkFBQTtBQU5KO0FBVUU7RUFDRSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFYSjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWJOO0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWhCSjtBQXNCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLDZCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFuQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNqYU9uYXMge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGFuZWwgZGFuZVwiXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicG9kc3Rhd293ZUluZm9ybWFjamVcIlxyXG4gICAgXCJ1c2x1Z2kgXCJcclxuICAgIFwidXNsdWdpIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiBwYW5lbDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNsdWdpIHtcclxuICAgIGdyaWQtYXJlYTogdXNsdWdpO1xyXG4gIH1cclxuXHJcbiAgLm9waXMge1xyXG4gICAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5rb250YWt0IHtcclxuICAgIGdyaWQtYXJlYToga29udGFrdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5kYW5lIHtcclxuICAgIGdyaWQtYXJlYTogZGFuZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBvZHN0YXdvd2VJbmZvcm1hY2plIHtcclxuICAgIGdyaWQtYXJlYTogcG9kc3Rhd293ZUluZm9ybWFjamU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5BZHJlcyB7XHJcbiAgICBncmlkLWFyZWE6IEFkcmVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2plT25hc1R5dHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2phTmFnbG93ZWsxIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4uaW5mb3JtYWNqYU5hZ2xvd2VrMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG5cclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJlbGFEYW5lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udXNsdWdpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiZWxhUmFta2Ege1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCAjYjhiYWJkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi51c2x1Z2lUeXR1bCB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTUwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzhmOGY4ZjtcclxufVxyXG5cclxuXHJcbi51c2x1Z2lUYWJsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIyNiwgMjM0LCAyNDUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 26955:
/*!************************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-onas/komponenty/onas-kontakt/onas-kontakt.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONasKontaktComponent": () => (/* binding */ ONasKontaktComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../serwisy/fa-icons.service */ 45087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);





function ONasKontaktComponent_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Numer telefonu:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.danePodstawowe_.danePodstawowe.numerTelefonuOgolny, " ");
  }
}
function ONasKontaktComponent_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "E-mail:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.danePodstawowe_.danePodstawowe.emailOgolny, " ");
  }
}
class ONasKontaktComponent {
  constructor(danePodstawowe_, faIcons) {
    this.danePodstawowe_ = danePodstawowe_;
    this.faIcons = faIcons;
  }
}
ONasKontaktComponent.ɵfac = function ONasKontaktComponent_Factory(t) {
  return new (t || ONasKontaktComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__.FaIconsService));
};
ONasKontaktComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ONasKontaktComponent,
  selectors: [["app-onas-kontakt"]],
  decls: 8,
  vars: 3,
  consts: [[1, "tabelaDane", "tabelaRamka"], ["colspan", "2", 1, "informacjeOnasTytul"], [1, "iconkaKontakt", 3, "icon"], [4, "ngIf"], [1, "informacjaNaglowek1", 2, "width", "200px"], [1, "informacjaNaglowek2"], [1, "informacjaNaglowek1"]],
  template: function ONasKontaktComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table")(2, "tr")(3, "td", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Nasz kontakt ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "fa-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ONasKontaktComponent_tr_6_Template, 5, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ONasKontaktComponent_tr_7_Template, 5, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faIcons.telefon);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.danePodstawowe_.danePodstawowe.wyswietlaneDane.telefonCzyWyswietlic);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.danePodstawowe_.danePodstawowe.wyswietlaneDane.emailCzyWyswietlic);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent],
  styles: [".telefonIconka[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 30px;\n  position: relative;\n  top: 5px;\n  left: 5px;\n}\n\n.iconkaKontakt[_ngcontent-%COMP%] {\n  color: rgb(8, 0, 100);\n  top: 0px;\n  font-size: 25px;\n  position: relative;\n  filter: drop-shadow(0px 0px 1px #494949);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9rb21wb25lbnR5L29uYXMta29udGFrdC9vbmFzLWtvbnRha3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFHQTtFQUNFLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsZWZvbkljb25rYSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uaWNvbmthS29udGFrdCB7XHJcbiAgY29sb3I6IHJnYig4LCAwLCAxMDApO1xyXG4gIHRvcDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDFweCAjNDk0OTQ5KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */", ".informacjaOnas[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 99;\n  padding-top: 20px;\n  height: min-content;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  width: 100%;\n  grid-auto-flow: row;\n  grid-template-areas: \"panel dane\";\n}\n.informacjaOnas[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"podstawoweInformacje\" \"uslugi \" \"uslugi \";\n  grid-area: panel;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .uslugi[_ngcontent-%COMP%] {\n  grid-area: uslugi;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%] {\n  grid-area: dane;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-direction: column;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .podstawoweInformacje[_ngcontent-%COMP%] {\n  grid-area: podstawoweInformacje;\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .Adres[_ngcontent-%COMP%] {\n  grid-area: Adres;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.informacjeOnasTytul[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n}\n\n.informacjaNaglowek1[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.informacjaNaglowek2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.tabelaDane[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  width: 440px;\n}\n\n.uslugi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n\n.tabelaRamka[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  box-shadow: 2px 2px 4px 1px #b8babd;\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n\n.uslugiTytul[_ngcontent-%COMP%] {\n  font-size: 29px;\n  font-weight: bold;\n  color: #950000;\n  letter-spacing: 1px;\n  font-family: math;\n  text-align: left;\n  text-shadow: 0px 0px 1px #8f8f8f;\n}\n\n.uslugiTable[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(226, 234, 245, 0.65);\n  border: 1px solid gainsboro;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.uslugiTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 600px;\n  height: min-content;\n  min-height: 200px;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9pbmZvcm1hY2phLW9uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUNBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQ0E7RUFHQSxnQkFBQTtBQU5KO0FBVUU7RUFDRSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFYSjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWJOO0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWhCSjtBQXNCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLDZCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFuQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNqYU9uYXMge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGFuZWwgZGFuZVwiXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicG9kc3Rhd293ZUluZm9ybWFjamVcIlxyXG4gICAgXCJ1c2x1Z2kgXCJcclxuICAgIFwidXNsdWdpIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiBwYW5lbDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNsdWdpIHtcclxuICAgIGdyaWQtYXJlYTogdXNsdWdpO1xyXG4gIH1cclxuXHJcbiAgLm9waXMge1xyXG4gICAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5rb250YWt0IHtcclxuICAgIGdyaWQtYXJlYToga29udGFrdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5kYW5lIHtcclxuICAgIGdyaWQtYXJlYTogZGFuZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBvZHN0YXdvd2VJbmZvcm1hY2plIHtcclxuICAgIGdyaWQtYXJlYTogcG9kc3Rhd293ZUluZm9ybWFjamU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5BZHJlcyB7XHJcbiAgICBncmlkLWFyZWE6IEFkcmVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2plT25hc1R5dHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2phTmFnbG93ZWsxIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4uaW5mb3JtYWNqYU5hZ2xvd2VrMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG5cclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJlbGFEYW5lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udXNsdWdpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiZWxhUmFta2Ege1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCAjYjhiYWJkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi51c2x1Z2lUeXR1bCB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTUwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzhmOGY4ZjtcclxufVxyXG5cclxuXHJcbi51c2x1Z2lUYWJsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIyNiwgMjM0LCAyNDUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 28723:
/*!**********************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/informacja-onas/komponenty/onas-uslugi/onas-uslugi.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ONasUslugiComponent": () => (/* binding */ ONasUslugiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../serwisy/fa-icons.service */ 45087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3197);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);






function ONasUslugiComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const usluga_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r0.danePodstawowe.danePodstawowe.uslugi.length - (ctx_r0.danePodstawowe.danePodstawowe.uslugi.length - index_r4 - ctx_r0.max * ctx_r0.strona + ctx_r0.max) + 1, " . ", usluga_r3.nazwa, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", usluga_r3.cena, " z\u0142");
  }
}
function ONasUslugiComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ONasUslugiComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 10)(1, "div", 11)(2, "ngb-pagination", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function ONasUslugiComponent_td_18_Template_ngb_pagination_pageChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.strona = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collectionSize", ctx_r2.danePodstawowe.danePodstawowe.uslugi.length)("page", ctx_r2.strona)("maxSize", 5)("rotate", true)("pageSize", ctx_r2.max)("boundaryLinks", true);
  }
}
const _c0 = function () {
  return [];
};
class ONasUslugiComponent {
  constructor(danePodstawowe, faIcons) {
    this.danePodstawowe = danePodstawowe;
    this.faIcons = faIcons;
    this.strona = 1;
    this.max = 10;
  }
  ngOnInit() {
    this.sub1 = this.danePodstawowe.danePodstawoweObservable.subscribe(k => {
      if (k.uslugi.length < 10) {
        this.max = k.uslugi.length;
      }
    });
  }
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
  dlugosc() {
    return this.danePodstawowe.danePodstawowe.uslugi.length;
  }
}
ONasUslugiComponent.ɵfac = function ONasUslugiComponent_Factory(t) {
  return new (t || ONasUslugiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_1__.FaIconsService));
};
ONasUslugiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ONasUslugiComponent,
  selectors: [["app-onas-uslugi"]],
  decls: 19,
  vars: 13,
  consts: [[1, "uslugiTable"], ["colspan", "2"], [1, "informacjeOnasTytul"], [1, "iconkaUslugi", 3, "icon"], [1, "uslugiTytul"], [4, "ngFor", "ngForOf"], ["colspan", "3", 4, "ngIf"], [1, "informacjaNaglowek1"], [1, "informacjaNaglowek2"], [1, "informacjaNaglowek1", 2, "visibility", "hidden"], ["colspan", "3"], [2, "display", "flex", "justify-content", "center", "width", "100%", "padding-top", "30px"], [3, "collectionSize", "page", "maxSize", "rotate", "pageSize", "boundaryLinks", "pageChange"]],
  template: function ONasUslugiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "table")(2, "tr")(3, "td", 1)(4, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nasze us\u0142ugi ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "fa-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "tr")(9, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Us\u0142uga");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Cena");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ONasUslugiComponent_tr_13_Template, 5, 3, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ONasUslugiComponent_tr_15_Template, 4, 0, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ONasUslugiComponent_td_18_Template, 3, 6, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faIcons.uslugi);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](14, 4, ctx.danePodstawowe.danePodstawowe.uslugi, (ctx.strona - 1) * ctx.max, ctx.strona * ctx.max));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0).constructor(ctx.max - _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](16, 8, ctx.danePodstawowe.danePodstawowe.uslugi, (ctx.strona - 1) * ctx.max, ctx.strona * ctx.max).length));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.danePodstawowe.danePodstawowe.uslugi.length > 10);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
  styles: [".iconkaUslugi[_ngcontent-%COMP%] {\n  position: relative;\n  color: #ececec;\n  font-size: 27px;\n  top: 1px;\n  filter: drop-shadow(1px 1px 1px #000);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9rb21wb25lbnR5L29uYXMtdXNsdWdpL29uYXMtdXNsdWdpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxxQ0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25rYVVzbHVnaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiAjZWNlY2VjO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICB0b3A6IDFweDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggMXB4ICMwMDApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */", ".informacjaOnas[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  width: 100%;\n  float: left;\n  position: relative;\n  z-index: 99;\n  padding-top: 20px;\n  height: min-content;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-auto-columns: 1fr;\n  gap: 0px 0px;\n  width: 100%;\n  grid-auto-flow: row;\n  grid-template-areas: \"panel dane\";\n}\n.informacjaOnas[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  gap: 0px 0px;\n  grid-auto-flow: row;\n  grid-template-areas: \"podstawoweInformacje\" \"uslugi \" \"uslugi \";\n  grid-area: panel;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .uslugi[_ngcontent-%COMP%] {\n  grid-area: uslugi;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .opis[_ngcontent-%COMP%] {\n  grid-area: opis;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .kontakt[_ngcontent-%COMP%] {\n  grid-area: kontakt;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%] {\n  grid-area: dane;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  flex-direction: column;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .dane[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .podstawoweInformacje[_ngcontent-%COMP%] {\n  grid-area: podstawoweInformacje;\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n.informacjaOnas[_ngcontent-%COMP%]   .Adres[_ngcontent-%COMP%] {\n  grid-area: Adres;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n}\n\n.informacjeOnasTytul[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: math;\n  text-align: center;\n  padding-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #b40c00;\n  letter-spacing: 1px;\n  text-shadow: 0px 1px 2px black;\n}\n\n.informacjaNaglowek1[_ngcontent-%COMP%] {\n  width: min-content;\n  font-size: 23px;\n  font-weight: bold;\n  color: #03208a;\n  font-family: math;\n  text-shadow: 0px 1px 2px #95b5ee;\n}\n\n.informacjaNaglowek2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2441aa;\n  font-family: math;\n  text-shadow: 0px 1px 1px blue;\n}\n\n.tabelaDane[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  width: 440px;\n}\n\n.uslugi[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: right;\n}\n\n.tabelaRamka[_ngcontent-%COMP%] {\n  border: 1px solid #d8d8d8;\n  box-shadow: 2px 2px 4px 1px #b8babd;\n  margin-left: 50px;\n  padding-bottom: 20px;\n}\n\n.uslugiTytul[_ngcontent-%COMP%] {\n  font-size: 29px;\n  font-weight: bold;\n  color: #950000;\n  letter-spacing: 1px;\n  font-family: math;\n  text-align: left;\n  text-shadow: 0px 0px 1px #8f8f8f;\n}\n\n.uslugiTable[_ngcontent-%COMP%] {\n  padding-left: 4px;\n  padding-right: 4px;\n  box-shadow: inset 0px 0px 1pc 1px rgba(226, 234, 245, 0.65);\n  border: 1px solid gainsboro;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.uslugiTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 600px;\n  height: min-content;\n  min-height: 200px;\n  margin-right: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L2luZm9ybWFjamEtb25hcy9pbmZvcm1hY2phLW9uYXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFFRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUNBO0FBREo7QUFLRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQ0E7RUFHQSxnQkFBQTtBQU5KO0FBVUU7RUFDRSxpQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0FBVEo7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFYSjtBQWVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFiSjtBQWVJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQWJOO0FBa0JFO0VBQ0UsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQWhCSjtBQXNCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwQko7O0FBMEJBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdkJGOztBQTJCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUF4QkY7O0FBMkJBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUVBLDZCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQTFCRjs7QUFnQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQTdCRjs7QUFnQ0E7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQTlCRjs7QUFtQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFoQ0Y7O0FBb0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJEQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakNGO0FBbUNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBR0Esa0JBQUE7QUFuQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3JtYWNqYU9uYXMge1xyXG4gIGJhY2tncm91bmQ6ICNmY2ZjZmM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicGFuZWwgZGFuZVwiXHJcbiAgfVxyXG5cclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBnYXA6IDBweCAwcHg7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwicG9kc3Rhd293ZUluZm9ybWFjamVcIlxyXG4gICAgXCJ1c2x1Z2kgXCJcclxuICAgIFwidXNsdWdpIFwiO1xyXG4gICAgZ3JpZC1hcmVhOiBwYW5lbDtcclxuXHJcbiAgfVxyXG5cclxuICAudXNsdWdpIHtcclxuICAgIGdyaWQtYXJlYTogdXNsdWdpO1xyXG4gIH1cclxuXHJcbiAgLm9waXMge1xyXG4gICAgZ3JpZC1hcmVhOiBvcGlzO1xyXG4gIH1cclxuXHJcblxyXG4gIC5rb250YWt0IHtcclxuICAgIGdyaWQtYXJlYToga29udGFrdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG5cclxuICB9XHJcblxyXG4gIC5kYW5lIHtcclxuICAgIGdyaWQtYXJlYTogZGFuZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBkaXYge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLnBvZHN0YXdvd2VJbmZvcm1hY2plIHtcclxuICAgIGdyaWQtYXJlYTogcG9kc3Rhd293ZUluZm9ybWFjamU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5BZHJlcyB7XHJcbiAgICBncmlkLWFyZWE6IEFkcmVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2plT25hc1R5dHVsIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MGMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBibGFjaztcclxuXHJcbn1cclxuXHJcbi5pbmZvcm1hY2phTmFnbG93ZWsxIHtcclxuICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDMyMDhhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCAjOTViNWVlO1xyXG59XHJcblxyXG4uaW5mb3JtYWNqYU5hZ2xvd2VrMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMjQ0MWFhO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG5cclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAxcHggYmx1ZTtcclxufVxyXG5cclxuXHJcbi50YWJlbGFEYW5lIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udXNsdWdpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFiZWxhUmFta2Ege1xyXG5cclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDFweCAjYjhiYWJkO1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcbi51c2x1Z2lUeXR1bCB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTUwMDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggIzhmOGY4ZjtcclxufVxyXG5cclxuXHJcbi51c2x1Z2lUYWJsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXBjIDFweCByZ2JhKDIyNiwgMjM0LCAyNDUsIDAuNjUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 50299:
/*!*************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/napisz-nam/klasa/napisz-nam.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NapiszNam": () => (/* binding */ NapiszNam),
/* harmony export */   "NapiszNamDto": () => (/* binding */ NapiszNamDto)
/* harmony export */ });
class NapiszNam {
  constructor() {
    this.imie = '';
    this.nazwisko = '';
    this.adresEmail = '';
    this.wiadomosc = '';
    this.komuWyslac = 'Wybierz:';
    this.pusteImie = false;
    this.pusteNazwisko = false;
    this.pustyEmail = false;
    this.pustaTresc = false;
    this.komuWyslacPuste = false;
    this.czyWszystkoUzupelnione = true;
  }
  czyWszystkoUzupelnioneFunkcja() {
    this.pusteImie = false;
    this.pusteNazwisko = false;
    this.pustyEmail = false;
    this.pustaTresc = false;
    this.komuWyslacPuste = false;
    this.czyWszystkoUzupelnione = true;
    if (this.imie.length <= 0) {
      this.pusteImie = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.nazwisko.length <= 0) {
      this.pusteNazwisko = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.adresEmail.length <= 0) {
      this.pustyEmail = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.wiadomosc.length <= 0) {
      this.pustaTresc = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.komuWyslac == 'Wybierz:') {
      this.komuWyslacPuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;
  }
}
class NapiszNamDto {
  constructor(napiszNamKlasa) {
    this.imie = '';
    this.nazwisko = '';
    this.adresEmail = '';
    this.wiadomosc = '';
    this.komuWyslac = '';
    this.imie = napiszNamKlasa.imie;
    this.nazwisko = napiszNamKlasa.nazwisko;
    this.adresEmail = napiszNamKlasa.adresEmail;
    this.wiadomosc = napiszNamKlasa.wiadomosc;
    this.komuWyslac = napiszNamKlasa.komuWyslac;
  }
}

/***/ }),

/***/ 31999:
/*!*****************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/napisz-nam/napisz-nam.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NapiszNamComponent": () => (/* binding */ NapiszNamComponent)
/* harmony export */ });
/* harmony import */ var _klasa_napisz_nam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klasa/napisz-nam */ 50299);
/* harmony import */ var _enum_drzwi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../enum/drzwi */ 2512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../serwisy/listonosz.service */ 35992);
/* harmony import */ var _napisz_nam_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./napisz-nam.service */ 96905);
/* harmony import */ var _serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../serwisy/fa-icons.service */ 45087);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 15488);









function NapiszNamComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pracownik_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", pracownik_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", pracownik_r5.imie, " ", pracownik_r5.nazwisko, " ");
  }
}
function NapiszNamComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Uzupe\u0142nij wszystkie pola");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NapiszNamComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fa-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Twoja wiadomo\u015B\u0107 zosta\u0142a wys\u0142ana, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " oczekuj odpowiedzi od nas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", ctx_r2.faIcons.check);
  }
}
function NapiszNamComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Twoja wiadomo\u015B\u0107 nie zosta\u0142a wys\u0142ana, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "skontaktuj si\u0119 z administratorem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NapiszNamComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Wpisz poprawny sw\u00F3j adres e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
const _c1 = function (a0) {
  return {
    czerwoneInputy: a0
  };
};
class NapiszNamComponent {
  constructor(listonosz, napiszNam, faIcons) {
    this.listonosz = listonosz;
    this.napiszNam = napiszNam;
    this.faIcons = faIcons;
    this.listaPracownikow = [];
    this.wiadomoscWyslana = false;
    this.wiadomoscNieWyslana = false;
    this.aktywnyPrzycisk = false;
    this.emailPrawidlowy = true;
  }
  wyslij() {
    this.emailPrawidlowy = true;
    this.napiszNam.napiszNamObj.czyWszystkoUzupelnioneFunkcja();
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    const napiszNamDTO = new _klasa_napisz_nam__WEBPACK_IMPORTED_MODULE_0__.NapiszNamDto(this.napiszNam.napiszNamObj);
    this.aktywnyPrzycisk = true;
    this.listonosz.wyslij(_enum_drzwi__WEBPACK_IMPORTED_MODULE_1__.Drzwi.napiszNam, napiszNamDTO).then(udane => {
      this.napiszNam.napiszNamObj = new _klasa_napisz_nam__WEBPACK_IMPORTED_MODULE_0__.NapiszNam();
      this.wiadomoscWyslana = true;
    }).catch(nieudane => {
      if (nieudane['error']['reasonCode'] == 1 && this.napiszNam.napiszNamObj.czyWszystkoUzupelnione == true) {
        this.emailPrawidlowy = false;
      } else {
        this.wiadomoscNieWyslana = true;
      }
    }).finally(() => {
      this.aktywnyPrzycisk = false;
    });
  }
  czyEmailPrawidlowy_() {}
  reset() {
    this.wiadomoscNieWyslana = false;
    this.wiadomoscWyslana = false;
    this.napiszNam.napiszNamObj = new _klasa_napisz_nam__WEBPACK_IMPORTED_MODULE_0__.NapiszNam();
  }
}
NapiszNamComponent.ɵfac = function NapiszNamComponent_Factory(t) {
  return new (t || NapiszNamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_2__.ListonoszService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_napisz_nam_service__WEBPACK_IMPORTED_MODULE_3__.NapiszNamService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_serwisy_fa_icons_service__WEBPACK_IMPORTED_MODULE_4__.FaIconsService));
};
NapiszNamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: NapiszNamComponent,
  selectors: [["app-napisz-nam"]],
  inputs: {
    listaPracownikow: "listaPracownikow"
  },
  decls: 51,
  vars: 39,
  consts: [["id", "napiszNam", 1, "napiszNam"], [1, "tytul"], [1, "naglowek"], [1, "skontatujSieZnami"], [1, "zostawWiadomosc"], [1, "formularz"], [1, "formularzTab"], ["colspan", "2"], [1, "selectNapiszDoNas", 3, "ngModel", "ngModelOptions", "ngClass", "ngModelChange"], [3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Imi\u0119", 1, "inputNapiszDoNas", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "placeholder", "Nazwisko", 1, "inputNapiszDoNas", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], ["type", "text", "placeholder", "E-mail", 1, "inputNapiszDoNas", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], ["placeholder", "Wpisz swoj\u0105 wiadomo\u015B\u0107", 1, "inputNapiszDoNas", 2, "width", "470px", "height", "200px", "border-radius", "10px", "resize", "none", 3, "ngClass", "ngModel", "ngModelOptions", "ngModelChange"], [1, "divNaPrzycisk"], ["type", "reset", 1, "buttonReset", 3, "disabled", "click"], ["type", "submit", 1, "buttonWyslij", 3, "disabled", "click"], [1, "divNaKomunikaty"], ["class", "czerwone", 4, "ngIf"], [3, "value"], [1, "czerwone"], [1, "faIconCheck", 3, "icon"]],
  template: function NapiszNamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2)(3, "tr")(4, "td", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Skontaktuj si\u0119 z nami");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "tr")(7, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Zostaw swoj\u0105 wiadomo\u015B\u0107, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " a my damy odpowied\u017A na tw\u00F3j adres e-mail,");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " kt\u00F3ry wska\u017Cesz ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5)(14, "form")(15, "table", 6)(16, "tr")(17, "td", 7)(18, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Wybierz komu chcesz wys\u0142a\u0107 wiadomo\u015B\u0107");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tr")(21, "td")(22, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NapiszNamComponent_Template_select_ngModelChange_22_listener($event) {
        return ctx.napiszNam.napiszNamObj.komuWyslac = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Wybierz:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Zak\u0142ad");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Pracownicy:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, NapiszNamComponent_option_29_Template, 2, 3, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "tr")(31, "td")(32, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NapiszNamComponent_Template_input_ngModelChange_32_listener($event) {
        return ctx.napiszNam.napiszNamObj.imie = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td")(34, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NapiszNamComponent_Template_input_ngModelChange_34_listener($event) {
        return ctx.napiszNam.napiszNamObj.nazwisko = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "tr")(36, "td", 7)(37, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NapiszNamComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.napiszNam.napiszNamObj.adresEmail = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "tr")(39, "td", 7)(40, "textarea", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NapiszNamComponent_Template_textarea_ngModelChange_40_listener($event) {
        return ctx.napiszNam.napiszNamObj.wiadomosc = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 15)(42, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NapiszNamComponent_Template_button_click_42_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NapiszNamComponent_Template_button_click_44_listener() {
        return ctx.wyslij();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Wy\u015Blij");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, NapiszNamComponent_span_47_Template, 2, 0, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, NapiszNamComponent_span_48_Template, 5, 1, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, NapiszNamComponent_span_49_Template, 4, 0, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, NapiszNamComponent_span_50_Template, 2, 0, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.napiszNam.napiszNamObj.komuWyslac)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c1, ctx.napiszNam.napiszNamObj.komuWyslacPuste));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listaPracownikow);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](27, _c1, ctx.napiszNam.napiszNamObj.pusteImie))("ngModel", ctx.napiszNam.napiszNamObj.imie)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](30, _c1, ctx.napiszNam.napiszNamObj.pusteNazwisko))("ngModel", ctx.napiszNam.napiszNamObj.nazwisko)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](32, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](33, _c1, ctx.napiszNam.napiszNamObj.pustyEmail))("ngModel", ctx.napiszNam.napiszNamObj.adresEmail)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](35, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c1, ctx.napiszNam.napiszNamObj.pustaTresc))("ngModel", ctx.napiszNam.napiszNamObj.wiadomosc)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](38, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.aktywnyPrzycisk);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.aktywnyPrzycisk);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.napiszNam.napiszNamObj.czyWszystkoUzupelnione);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wiadomoscWyslana);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.wiadomoscNieWyslana && ctx.napiszNam.napiszNamObj.czyWszystkoUzupelnione);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.emailPrawidlowy);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent],
  styles: [".napiszNam[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  background: #fcfcfc;\n  height: 600px;\n  padding-top: 15px;\n  box-sizing: border-box;\n}\n.napiszNam[_ngcontent-%COMP%]   .tytul[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: start;\n  padding-top: 80px;\n}\n.napiszNam[_ngcontent-%COMP%]   .tytul[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .skontatujSieZnami[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: bolder;\n  color: blue;\n}\n.napiszNam[_ngcontent-%COMP%]   .formularz[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80%;\n  width: 70%;\n}\n.napiszNam[_ngcontent-%COMP%]   .formularz[_ngcontent-%COMP%]   .formularzTab[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.napiszNam[_ngcontent-%COMP%]   .formularz[_ngcontent-%COMP%]   .komunikaty[_ngcontent-%COMP%] {\n  width: 10%;\n  display: flex;\n  flex-direction: column;\n}\n\n.zostawWiadomosc[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: blue;\n  letter-spacing: 1px;\n  text-shadow: 0px 0px 1px #051956;\n}\n\n.inputNapiszDoNas[_ngcontent-%COMP%] {\n  border: 2px inset #2491f9;\n  border-radius: 20px;\n  width: 250px;\n  height: 29px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 18px;\n  margin: 8px 2px 2px 8px;\n}\n\n.selectNapiszDoNas[_ngcontent-%COMP%] {\n  border: 2px inset #2491f9;\n  border-radius: 20px;\n  width: 250px;\n  height: 29px;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 18px;\n  color: #000000;\n  background: white;\n  margin: 10px 0 0 8px;\n}\n\n.buttonWyslij[_ngcontent-%COMP%], .buttonReset[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 30px;\n  background: #e3f9f6;\n  border: 1px solid #01570a;\n  border-radius: 20px;\n  transition: 400ms;\n  font-family: math;\n  font-size: 18px;\n  font-weight: bolder;\n  color: #027002;\n}\n.buttonWyslij[_ngcontent-%COMP%]:hover:not([disabled]), .buttonReset[_ngcontent-%COMP%]:hover:not([disabled]) {\n  box-shadow: 0px 0px 2px 2px #d1d9d1;\n  cursor: pointer;\n  color: white;\n  background: #01570a;\n}\n.buttonWyslij[_ngcontent-%COMP%]:disabled, .buttonReset[_ngcontent-%COMP%]:disabled {\n  filter: grayscale(0.4);\n  cursor: not-allowed;\n  border: 1px solid #ababab;\n}\n\n.buttonReset[_ngcontent-%COMP%] {\n  margin: 2px 10px 2px 10px;\n  border: 1px solid #a10808;\n  color: #a10808;\n}\n.buttonReset[_ngcontent-%COMP%]:hover:not([disabled]) {\n  color: white;\n  background: #a10808;\n}\n\n.czerwoneInputy[_ngcontent-%COMP%] {\n  border: 2px inset #d30505 !important;\n}\n\n.czerwone[_ngcontent-%COMP%] {\n  color: #cc0303;\n  font-size: 18px;\n  text-shadow: 0px 0px 1px #313030;\n  font-family: math;\n  font-weight: bold;\n}\n\n.divNaKomunikaty[_ngcontent-%COMP%] {\n  margin: 5px 0px 5px 0px;\n  min-height: 55px;\n}\n\n.faIconCheck[_ngcontent-%COMP%] {\n  color: green;\n  position: relative;\n  top: 5px;\n  font-size: 29px;\n  margin-right: 10px;\n  filter: drop-shadow(0px 0px 1px #686868);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L25hcGlzei1uYW0vbmFwaXN6LW5hbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFJUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGVjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQVpKO0FBY0k7RUFDRSxVQUFBO0FBWk47QUFnQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBZE47O0FBbUJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBaEJGOztBQW1CQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWhCRjs7QUFxQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBbEJGO0FBb0JFO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbEJKO0FBcUJFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBbkJKOztBQXlCQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBdEJGO0FBeUJFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBdkJKOztBQTJCQTtFQUNFLG9DQUFBO0FBeEJGOztBQTRCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBekJGOztBQTRCQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBekJGIiwic291cmNlc0NvbnRlbnQiOlsiLm5hcGlzek5hbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cclxuICAudHl0dWwge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcblxyXG4gICAgLm5hZ2xvd2VrIHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIC5za29udGF0dWpTaWVabmFtaSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgY29sb3I6IGJsdWU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAuZm9ybXVsYXJ6IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA3MCU7XHJcblxyXG4gICAgLmZvcm11bGFyelRhYiB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5rb211bmlrYXR5IHtcclxuICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi56b3N0YXdXaWFkb21vc2Mge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjMDUxOTU2XHJcbn1cclxuXHJcbi5pbnB1dE5hcGlzekRvTmFzIHtcclxuICBib3JkZXI6IDJweCBpbnNldCAjMjQ5MWY5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjlweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiA4cHggMnB4IDJweCA4cHg7XHJcbn1cclxuXHJcbi5zZWxlY3ROYXBpc3pEb05hcyB7XHJcbiAgYm9yZGVyOiAycHggaW5zZXQgIzI0OTFmOTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI5cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTBweCAwIDAgOHB4O1xyXG5cclxufVxyXG5cclxuXHJcbi5idXR0b25XeXNsaWosIC5idXR0b25SZXNldCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZTNmOWY2O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMTU3MGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0cmFuc2l0aW9uOiA0MDBtcztcclxuICBmb250LWZhbWlseTogbWF0aDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBjb2xvcjogIzAyNzAwMjtcclxuXHJcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMnB4ICNkMWQ5ZDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDE1NzBhO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZCB7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwLjQpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYmFiYWI7XHJcblxyXG5cclxuICB9XHJcbn1cclxuXHJcbi5idXR0b25SZXNldCB7XHJcbiAgbWFyZ2luOiAycHggMTBweCAycHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYTEwODA4O1xyXG4gIGNvbG9yOiAjYTEwODA4O1xyXG5cclxuXHJcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ExMDgwODtcclxuICB9XHJcbn1cclxuXHJcbi5jemVyd29uZUlucHV0eSB7XHJcbiAgYm9yZGVyOiAycHggaW5zZXQgI2QzMDUwNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmN6ZXJ3b25lIHtcclxuICBjb2xvcjogI2NjMDMwMztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICMzMTMwMzA7XHJcbiAgZm9udC1mYW1pbHk6IG1hdGg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kaXZOYUtvbXVuaWthdHkge1xyXG4gIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbi5mYUljb25DaGVjayB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDVweDtcclxuICBmb250LXNpemU6IDI5cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggIzY4Njg2OCk7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 96905:
/*!***************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/napisz-nam/napisz-nam.service.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NapiszNamService": () => (/* binding */ NapiszNamService)
/* harmony export */ });
/* harmony import */ var _klasa_napisz_nam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./klasa/napisz-nam */ 50299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class NapiszNamService {
  constructor() {
    this.napiszNamObj = new _klasa_napisz_nam__WEBPACK_IMPORTED_MODULE_0__.NapiszNam();
  }
}
NapiszNamService.ɵfac = function NapiszNamService_Factory(t) {
  return new (t || NapiszNamService)();
};
NapiszNamService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NapiszNamService,
  factory: NapiszNamService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 62488:
/*!*****************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/ogloszenia/ogloszenia.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OgloszeniaComponent": () => (/* binding */ OgloszeniaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class OgloszeniaComponent {}
OgloszeniaComponent.ɵfac = function OgloszeniaComponent_Factory(t) {
  return new (t || OgloszeniaComponent)();
};
OgloszeniaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: OgloszeniaComponent,
  selectors: [["app-ogloszenia"]],
  decls: 2,
  vars: 0,
  template: function OgloszeniaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ogloszenia works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 74290:
/*!*****************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/statystyki/statystyki.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatystykiComponent": () => (/* binding */ StatystykiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class StatystykiComponent {}
StatystykiComponent.ɵfac = function StatystykiComponent_Factory(t) {
  return new (t || StatystykiComponent)();
};
StatystykiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StatystykiComponent,
  selectors: [["app-statystyki"]],
  decls: 2,
  vars: 0,
  template: function StatystykiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "statystyki works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 70883:
/*!*****************************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/wyswietlane-pracownicy/wyswietlane-pracownicy.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WyswietlanePracownicyComponent": () => (/* binding */ WyswietlanePracownicyComponent)
/* harmony export */ });
/* harmony import */ var _enum_drzwi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../enum/drzwi */ 2512);
/* harmony import */ var _klasy_pracownik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../klasy/pracownik */ 92552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../serwisy/listonosz.service */ 35992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _rurki_zdjecie_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../rurki/zdjecie.pipe */ 81507);






function WyswietlanePracownicyComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WyswietlanePracownicyComponent_ng_container_5_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const pracownik_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r5.czyPracownikKlikniety = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.daneKliknietegoPracownika = pracownik_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "zdjecie");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11)(8, "button", 12)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Zobacz");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const pracownik_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", pracownik_r4.imie, " ", pracownik_r4.nazwisko, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, "http://fenek.tech:3000/pliki/wyswietlZdjecieProfilowe/" + pracownik_r4.id), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function WyswietlanePracownicyComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WyswietlanePracownicyComponent_ng_container_5_div_1_Template, 11, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.listaPracownikow);
  }
}
function WyswietlanePracownicyComponent_ng_template_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WyswietlanePracownicyComponent_ng_template_6_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const pracownik_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      ctx_r9.czyPracownikKlikniety = true;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.daneKliknietegoPracownika = pracownik_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 8)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "zdjecie");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 11)(8, "button", 12)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Zobacz");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const pracownik_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", pracownik_r8.imie, " ", pracownik_r8.nazwisko, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 3, "http://fenek.tech:3000/pliki/wyswietlZdjecieProfilowe/" + pracownik_r8.id), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function WyswietlanePracownicyComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WyswietlanePracownicyComponent_ng_template_6_div_2_Template, 11, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u00BB");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.listaPracownikow);
  }
}
// @ts-ignore
class WyswietlanePracownicyComponent {
  constructor(listonosz) {
    this.listonosz = listonosz;
    this.listaPracownikow = [];
    this.czyPracownikKlikniety = false;
    this.daneKliknietegoPracownika = new _klasy_pracownik__WEBPACK_IMPORTED_MODULE_1__.Pracownik();
  }
  generowanieKaruzeli() {
    // @ts-ignore
    this.slider = new Glider(document.querySelector('.glider'), {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      }
    });
  }
  ngOnInit() {
    this.pobierzPracownikow();
  }
  pobierzPracownikow() {
    this.listonosz.pobierz(_enum_drzwi__WEBPACK_IMPORTED_MODULE_0__.Drzwi.listaPracownikow).then(pobrane => {
      pobrane.forEach(pracownik => {
        const pracownikObj = new _klasy_pracownik__WEBPACK_IMPORTED_MODULE_1__.Pracownik();
        Object.assign(pracownikObj, pracownik);
        this.listaPracownikow.push(pracownikObj);
      });
      if (this.listaPracownikow.length > 4) {
        setTimeout(() => {
          this.generowanieKaruzeli();
        });
      }
    }).catch(niepobrane => {});
  }
}
WyswietlanePracownicyComponent.ɵfac = function WyswietlanePracownicyComponent_Factory(t) {
  return new (t || WyswietlanePracownicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_serwisy_listonosz_service__WEBPACK_IMPORTED_MODULE_2__.ListonoszService));
};
WyswietlanePracownicyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WyswietlanePracownicyComponent,
  selectors: [["app-wyswietlane-pracownicy"]],
  decls: 8,
  vars: 2,
  consts: [["id", "pracownicy", 1, "listaPracownikow"], [1, "naglowek"], [1, "nasiPracownicy"], [1, "wierszPracownikow"], [4, "ngIf", "ngIfElse"], ["slider", ""], ["class", "pracownik", 3, "click", 4, "ngFor", "ngForOf"], [1, "pracownik", 3, "click"], [1, "imieNazwisko"], [1, "zdjecie"], [3, "src"], [1, "popatrz"], [1, "zobacz"], [1, "glider-contain", "pracownicy", 2, "width", "90%", "margin-left", "20px", "margin-right", "20px"], [1, "glider"], ["aria-label", "Previous", 1, "glider-prev"], ["aria-label", "Next", 1, "glider-next"], ["role", "tablist", 1, "dots"]],
  template: function WyswietlanePracownicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nasi pracownicy");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WyswietlanePracownicyComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WyswietlanePracownicyComponent_ng_template_6_Template, 8, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.listaPracownikow.length <= 4)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _rurki_zdjecie_pipe__WEBPACK_IMPORTED_MODULE_3__.ZdjeciePipe],
  styles: [".listaPracownikow[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 550px;\n  display: flex;\n  padding-bottom: 20px;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 0px 5px 1px #767272;\n  position: relative;\n  z-index: 100;\n  flex-wrap: wrap;\n  background-image: url('tlo3.png');\n  float: left;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n.listaPracownikow[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .naglowek[_ngcontent-%COMP%]   .nasiPracownicy[_ngcontent-%COMP%] {\n  font-family: math;\n  font-size: 40px;\n  letter-spacing: 1px;\n  color: white;\n  text-shadow: 0px 0px 1px black;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%] {\n  width: 93vw;\n  min-height: 400px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 320px !important;\n  height: 435px !important;\n  margin-left: 30px;\n  margin-right: 10px;\n  background: rgba(250, 250, 250, 0.1098039216);\n  transition: scale 500ms;\n  border-radius: 10px;\n  border: 1px solid white;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]:hover {\n  scale: 1.05;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]:hover   .imieNazwisko[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fafafa;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .imieNazwisko[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  text-align: center;\n  background: transparent;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .imieNazwisko[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  font-size: 30px;\n  font-weight: bold;\n  color: white;\n  text-shadow: 1px 1px 1px #000000;\n  font-family: math;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .zdjecie[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .zdjecie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .popatrz[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  height: 40px;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .popatrz[_ngcontent-%COMP%]   .zobacz[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  height: 100%;\n  color: #ffffff;\n  font-size: 30px;\n  text-shadow: 1px 2px 1px black;\n  background: rgba(0, 0, 0, 0.4705882353);\n  letter-spacing: 5px;\n  transition: 100ms;\n  font-family: math;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .popatrz[_ngcontent-%COMP%]   .zobacz[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 4px;\n}\n.listaPracownikow[_ngcontent-%COMP%]   .wierszPracownikow[_ngcontent-%COMP%]   .pracownik[_ngcontent-%COMP%]   .popatrz[_ngcontent-%COMP%]   .zobacz[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.glider-next[_ngcontent-%COMP%], .glider-prev[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\n.glider-next[_ngcontent-%COMP%] {\n  right: -53px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L3d5c3dpZXRsYW5lLXByYWNvd25pY3kvd3lzd2lldGxhbmUtcHJhY293bmljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxpQ0FBQTtFQUdBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUpGO0FBTUU7RUFDRSxlQUFBO0FBSko7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFMTjtBQVNFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUE47QUFTTTtFQUNFLFdBQUE7QUFQUjtBQVNRO0VBQ0UsY0FBQTtBQVBWO0FBV007RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFUUjtBQVdRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUFUVjtBQWFNO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFYUjtBQWFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFYVjtBQWVNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQWJSO0FBZVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFiVjtBQWVVO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBYlo7QUFnQlU7RUFDRSxlQUFBO0FBZFo7O0FBc0JBO0VBQ0UsZUFBQTtBQW5CRjs7QUFzQkE7RUFDRSx1QkFBQTtBQW5CRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGlzdGFQcmFjb3duaWtvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGJhY2tncm91bmQ6ICMwMTBmMzM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4ICM3NjcyNzI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy90bG8zLnBuZ1wiKTtcclxuXHJcbiAgLy93aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm5hZ2xvd2VrIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubmFzaVByYWNvd25pY3kge1xyXG4gICAgICBmb250LWZhbWlseTogbWF0aDtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC53aWVyc3pQcmFjb3duaWtvdyB7XHJcbiAgICB3aWR0aDogOTN2dztcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAucHJhY293bmlrIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHdpZHRoOiAzMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDQzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmExYztcclxuICAgICAgdHJhbnNpdGlvbjogc2NhbGUgNTAwbXM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgc2NhbGU6IDEuMDU7XHJcblxyXG4gICAgICAgIC5pbWllTmF6d2lza28gc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogI2ZhZmFmYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWllTmF6d2lza28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnpkamVjaWUge1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb3BhdHJ6IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAuem9iYWN6IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAxcHggYmxhY2s7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwNzg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogbWF0aDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBib3R0b206IDRweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdsaWRlci1uZXh0LCAuZ2xpZGVyLXByZXYge1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG5cclxuLmdsaWRlci1uZXh0IHtcclxuICByaWdodDogLTUzcHggIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 13003:
/*!***************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/zarejestruj-sie/zarejestruj-sie.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZarejestrujSieComponent": () => (/* binding */ ZarejestrujSieComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../serwisy/nawigacja.service */ 39429);
/* harmony import */ var _formularz_zarejestruj_sie_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formularz-zarejestruj-sie/zarejestrujSie.service */ 32197);
/* harmony import */ var _zegar_zegar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zegar/zegar.component */ 71866);




class ZarejestrujSieComponent {
  constructor(nawigacja, rejestracja) {
    this.nawigacja = nawigacja;
    this.rejestracja = rejestracja;
  }
  pokazFormularzRejestracji() {
    this.nawigacja.przeniesDoPanelu(this.nawigacja.nav.rejestracjaFormularz);
    this.rejestracja.wyswietlanieFormualrza = true;
  }
}
ZarejestrujSieComponent.ɵfac = function ZarejestrujSieComponent_Factory(t) {
  return new (t || ZarejestrujSieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__.NawigacjaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_formularz_zarejestruj_sie_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_1__.ZarejestrujSieService));
};
ZarejestrujSieComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ZarejestrujSieComponent,
  selectors: [["app-zarejestruj-sie"]],
  decls: 9,
  vars: 0,
  consts: [["id", "rejestracja", 1, "zarejestujSie"], [1, "zdj"], ["src", "assets/kalendarz-bez-wskazuwek.png"], [2, "position", "absolute"], [1, "tytulIButton"], [1, "spanZapiszSie"], [1, "rejestracjaButton", 3, "click"]],
  template: function ZarejestrujSieComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2)(3, "app-zegar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Zapisz si\u0119 na podchodz\u0105cy dla Ciebie termin ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ZarejestrujSieComponent_Template_button_click_7_listener() {
        return ctx.pokazFormularzRejestracji();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Rejestracja ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_zegar_zegar_component__WEBPACK_IMPORTED_MODULE_2__.ZegarComponent],
  styles: [".zarejestujSie[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n  float: left;\n  background: #efefef;\n  box-shadow: 0px 1px 0px 1px #cac5c5;\n  position: relative;\n  z-index: 100;\n}\n.zarejestujSie[_ngcontent-%COMP%]   .zdj[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 100%;\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  float: left;\n  position: relative;\n}\n.zarejestujSie[_ngcontent-%COMP%]   .zdj[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n.zarejestujSie[_ngcontent-%COMP%]   .tytulIButton[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  float: left;\n}\n\n.spanZapiszSie[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: brown;\n  text-shadow: burlywood;\n  text-shadow: 1px 1px 1px brown;\n  font-family: math;\n}\n\n.rejestracjaButton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  transition: 200ms;\n  width: 260px;\n  height: 40px;\n  font-size: 20px;\n  border: 2px inset #5dcc5d;\n  box-shadow: 2px 2px 2px 2px #035a03;\n  letter-spacing: 2px;\n  font-family: math;\n  font-weight: bold;\n  color: #027602;\n  text-shadow: 0px 1px 2px green;\n}\n.rejestracjaButton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #5dcc5d;\n  color: white;\n  text-shadow: 1px 2px 4px black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L3phcmVqZXN0cnVqLXNpZS96YXJlamVzdHJ1ai1zaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFFRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFBTjtBQU1FO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQVNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQU5GO0FBUUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFOSiIsInNvdXJjZXNDb250ZW50IjpbIi56YXJlamVzdHVqU2llIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggMXB4ICNjYWM1YzU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcblxyXG4gIC56ZGoge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLnR5dHVsSUJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc3BhblphcGlzelNpZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgY29sb3I6IGJyb3duO1xyXG4gIHRleHQtc2hhZG93OiBidXJseXdvb2Q7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJyb3duO1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG59XHJcblxyXG4ucmVqZXN0cmFjamFCdXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyOiAycHggaW5zZXQgIzVkY2M1ZDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzAzNWEwMztcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBtYXRoO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMDI3NjAyO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDJweCBncmVlbjtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNWRjYzVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggNHB4IGJsYWNrO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 71866:
/*!***********************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/zarejestruj-sie/zegar/zegar.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZegarComponent": () => (/* binding */ ZegarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 97191);



class ZegarComponent {
  constructor(platformId) {
    this.platformId = platformId;
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      this.initLocalClocks();
      setInterval(() => {
        this.initLocalClocks();
      }, 600000); //10 minut
      this.setUpMinuteHands();
      this.moveSecondHands();
    }
  }
  initLocalClocks() {
    // Get the local time using JS
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    // Create an object with each hand and it's angle in degrees
    var hands = [{
      hand: 'hours',
      angle: hours * 30 + minutes / 2
    }, {
      hand: 'minutes',
      angle: minutes * 6
    }, {
      hand: 'seconds',
      angle: seconds * 6
    }];
    // Loop through each of these hands to set their angle
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);
      for (var k = 0; k < elements.length; k++) {
        // @ts-ignore
        elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
        // @ts-ignore
        elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          // @ts-ignore
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
      }
    }
  }
  setUpMinuteHands() {
    // Find out how far into the minute we are
    var containers = document.querySelectorAll('.minutes-container');
    var secondAngle = containers[0].getAttribute("data-second-angle");
    if (secondAngle == null) {
      console.log(1);
      return;
    }
    if (Number(secondAngle) > 0) {
      // Set a timeout until the end of the current minute, to move the hand
      var delay = ((360 - Number(secondAngle)) / 6 + 0.1) * 1000;
      setTimeout(() => {
        this.moveMinuteHands(containers);
      }, delay);
    }
  }
  moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.webkitTransform = 'rotateZ(6deg)';
      containers[i].style.transform = 'rotateZ(6deg)';
    }
    // Then continue with a 60 second interval
    setInterval(function () {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 12;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
        containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
      }
    }, 60000);
  }
  moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');
    setInterval(function () {
      for (var i = 0; i < containers.length; i++) {
        // @ts-ignore
        if (containers[i].angle === undefined) {
          // @ts-ignore
          containers[i].angle = 6;
        } else {
          // @ts-ignore
          containers[i].angle += 6;
        }
        // @ts-ignore
        containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
        // @ts-ignore
        containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
      }
    }, 1000);
  }
}
ZegarComponent.ɵfac = function ZegarComponent_Factory(t) {
  return new (t || ZegarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};
ZegarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ZegarComponent,
  selectors: [["app-zegar"]],
  decls: 7,
  vars: 0,
  consts: [[1, "clock"], [1, "hours-container"], [1, "hours"], [1, "minutes-container"], [1, "minutes"], [1, "seconds-container"], [1, "seconds"]],
  template: function ZegarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  styles: [".clock[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 300px;\n  z-index: 100;\n  right: -77px;\n  bottom: -60px;\n}\n\n.clock[_ngcontent-%COMP%]:after {\n  background: rgb(44, 44, 44);\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  left: calc(50% - 5px);\n  top: calc(50% - 5px);\n  width: 10px;\n  height: 10px;\n  z-index: 101;\n}\n\n.hours[_ngcontent-%COMP%], .minutes[_ngcontent-%COMP%], .seconds[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 1px rgba(189, 189, 189, 0.56);\n}\n\n.minutes-container[_ngcontent-%COMP%], .hours-container[_ngcontent-%COMP%], .seconds-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.minutes-container[_ngcontent-%COMP%]   .hours[_ngcontent-%COMP%], .hours-container[_ngcontent-%COMP%]   .hours[_ngcontent-%COMP%], .seconds-container[_ngcontent-%COMP%]   .hours[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  height: 30px;\n  left: 147px;\n  position: absolute;\n  top: 122px;\n  transform-origin: 50% 100%;\n  width: 2.5%;\n}\n.minutes-container[_ngcontent-%COMP%]   .minutes[_ngcontent-%COMP%], .hours-container[_ngcontent-%COMP%]   .minutes[_ngcontent-%COMP%], .seconds-container[_ngcontent-%COMP%]   .minutes[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  height: 48px;\n  position: absolute;\n  top: 102px;\n  transform-origin: 50% 100%;\n  width: 6px;\n  left: 149px;\n}\n.minutes-container[_ngcontent-%COMP%]   .seconds[_ngcontent-%COMP%], .hours-container[_ngcontent-%COMP%]   .seconds[_ngcontent-%COMP%], .seconds-container[_ngcontent-%COMP%]   .seconds[_ngcontent-%COMP%] {\n  background: #e8e8e8;\n  height: 71px;\n  right: 149px;\n  position: absolute;\n  top: 90px;\n  left: 50.1%;\n  transform-origin: 59% 80%;\n  width: 3px;\n  z-index: 8;\n}\n\n.minutes-container[_ngcontent-%COMP%] {\n  transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);\n}\n\n.seconds-container[_ngcontent-%COMP%] {\n  transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L3phcmVqZXN0cnVqLXNpZS96ZWdhci96ZWdhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7OztFQUdFLGlEQUFBO0FBREY7O0FBSUE7OztFQUdFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQURGO0FBR0U7OztFQUNFLG1CQXZDSTtFQXdDSixZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7OztFQUNFLG1CQWpESTtFQWtESixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQ0U7OztFQUNFLG1CQTNESTtFQTRESixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBR0o7O0FBQ0E7RUFDRSw4REFBQTtBQUVGOztBQUNBO0VBQ0UsOERBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIiRrb2xvcjogI2U4ZThlODtcclxuLmNsb2NrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHJpZ2h0OiAtNzdweDtcclxuICBib3R0b206IC02MHB4O1xyXG59XHJcblxyXG4uY2xvY2s6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NCwgNDQsIDQ0KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xyXG5cclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgei1pbmRleDogMTAxO1xyXG59XHJcblxyXG4uaG91cnMsXHJcbi5taW51dGVzLFxyXG4uc2Vjb25kcyB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjU2KTtcclxufVxyXG5cclxuLm1pbnV0ZXMtY29udGFpbmVyLFxyXG4uaG91cnMtY29udGFpbmVyLFxyXG4uc2Vjb25kcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIC5ob3VycyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAka29sb3I7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsZWZ0OiAxNDdweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTIycHg7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIHdpZHRoOiAyLjUlO1xyXG4gIH1cclxuXHJcbiAgLm1pbnV0ZXMge1xyXG4gICAgYmFja2dyb3VuZDogJGtvbG9yO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDJweDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGxlZnQ6IDE0OXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY29uZHMge1xyXG4gICAgYmFja2dyb3VuZDogJGtvbG9yO1xyXG4gICAgaGVpZ2h0OiA3MXB4O1xyXG4gICAgcmlnaHQ6IDE0OXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgbGVmdDogNTAuMSU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1OSUgODAlO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIHotaW5kZXg6IDg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWludXRlcy1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDIuMDgsIDAuNTUsIDAuNDQpO1xyXG59XHJcblxyXG4uc2Vjb25kcy1jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjQsIDIuMDgsIDAuNTUsIDAuNDQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 53368:
/*!***************************************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/zdjecie-zakladu/zdjecie-zakladu.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZdjecieZakladuComponent": () => (/* binding */ ZdjecieZakladuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class ZdjecieZakladuComponent {}
ZdjecieZakladuComponent.ɵfac = function ZdjecieZakladuComponent_Factory(t) {
  return new (t || ZdjecieZakladuComponent)();
};
ZdjecieZakladuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ZdjecieZakladuComponent,
  selectors: [["app-zdjecie-zakladu"]],
  decls: 2,
  vars: 0,
  consts: [[1, "zdjecieZakladu"], ["src", "assets/fryzjernia.jpg"]],
  template: function ZdjecieZakladuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".zdjecieZakladu[_ngcontent-%COMP%] {\n  margin-top: 65px;\n  width: 100%;\n  float: left;\n  position: relative;\n  background: #efefef;\n}\n.zdjecieZakladu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9rb21wb25lbnR5L3pkamVjaWUtemFrbGFkdS96ZGplY2llLXpha2xhZHUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUU7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiLnpkamVjaWVaYWtsYWR1IHtcclxuICBtYXJnaW4tdG9wOiA2NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG5cclxuXHJcbiAgaW1nIHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 35220:
/*!************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/one-page-strona.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnePageStronaComponent": () => (/* binding */ OnePageStronaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _komponenty_formularz_zarejestruj_sie_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./komponenty/formularz-zarejestruj-sie/zarejestrujSie.service */ 32197);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _komponenty_wyswietlane_pracownicy_wyswietlane_pracownicy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./komponenty/wyswietlane-pracownicy/wyswietlane-pracownicy.component */ 70883);
/* harmony import */ var _komponenty_informacja_ojednym_pracowniku_informacja_ojednym_pracowniku_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./komponenty/informacja-ojednym-pracowniku/informacja-ojednym-pracowniku.component */ 44706);
/* harmony import */ var _komponenty_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./komponenty/banner/banner.component */ 90977);
/* harmony import */ var _komponenty_zdjecie_zakladu_zdjecie_zakladu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./komponenty/zdjecie-zakladu/zdjecie-zakladu.component */ 53368);
/* harmony import */ var _komponenty_informacja_onas_informacja_onas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./komponenty/informacja-onas/informacja-onas.component */ 53477);
/* harmony import */ var _komponenty_napisz_nam_napisz_nam_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./komponenty/napisz-nam/napisz-nam.component */ 31999);
/* harmony import */ var _komponenty_zarejestruj_sie_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./komponenty/zarejestruj-sie/zarejestruj-sie.component */ 13003);
/* harmony import */ var _komponenty_formularz_zarejestruj_sie_formularz_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./komponenty/formularz-zarejestruj-sie/formularz-zarejestruj-sie.component */ 28381);












function OnePageStronaComponent_app_formularz_zarejestruj_sie_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-formularz-zarejestruj-sie", null, 9);
  }
}
function OnePageStronaComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 10);
  }
}
function OnePageStronaComponent_app_informacja_ojednym_pracowniku_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-informacja-ojednym-pracowniku", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("daneOPracowniku", _r3.daneKliknietegoPracownika);
  }
}
function OnePageStronaComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 12);
  }
}
class OnePageStronaComponent {
  constructor(zarejestrujSie, danePodstawowe) {
    this.zarejestrujSie = zarejestrujSie;
    this.danePodstawowe = danePodstawowe;
  }
  ngOnInit() {
    this.danePodstawowe.pobieranieDanychPodstawowych();
  }
}
OnePageStronaComponent.ɵfac = function OnePageStronaComponent_Factory(t) {
  return new (t || OnePageStronaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_komponenty_formularz_zarejestruj_sie_zarejestrujSie_service__WEBPACK_IMPORTED_MODULE_0__.ZarejestrujSieService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_1__.DanePodstawoweService));
};
OnePageStronaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: OnePageStronaComponent,
  selectors: [["app-one-page-strona"]],
  decls: 14,
  vars: 5,
  consts: [["id", "poczatek", 2, "height", "0", "width", "0"], ["komponentZarejestrujSie", ""], ["id", "rejestracjaFormularz", 1, "parallax"], [4, "ngIf"], ["class", "parallax3", 4, "ngIf"], ["komponentWyswietlanrPracownicy", ""], [3, "daneOPracowniku", 4, "ngIf"], ["class", "parallax2", 4, "ngIf"], [3, "listaPracownikow"], ["komponentZarejestrujSieFormularz", ""], [1, "parallax3"], [3, "daneOPracowniku"], [1, "parallax2"]],
  template: function OnePageStronaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "span", 0)(1, "app-banner")(2, "app-zdjecie-zakladu")(3, "app-zarejestruj-sie", null, 1)(5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, OnePageStronaComponent_app_formularz_zarejestruj_sie_6_Template, 2, 0, "app-formularz-zarejestruj-sie", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, OnePageStronaComponent_div_7_Template, 1, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "app-informacja-onas")(9, "app-wyswietlane-pracownicy", null, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, OnePageStronaComponent_app_informacja_ojednym_pracowniku_11_Template, 1, 1, "app-informacja-ojednym-pracowniku", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, OnePageStronaComponent_div_12_Template, 1, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "app-napisz-nam", 8);
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.zarejestrujSie.wyswietlanieFormualrza);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.zarejestrujSie.wyswietlanieFormualrza);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r3.czyPracownikKlikniety);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _r3.czyPracownikKlikniety);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("listaPracownikow", _r3.listaPracownikow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _komponenty_wyswietlane_pracownicy_wyswietlane_pracownicy_component__WEBPACK_IMPORTED_MODULE_2__.WyswietlanePracownicyComponent, _komponenty_informacja_ojednym_pracowniku_informacja_ojednym_pracowniku_component__WEBPACK_IMPORTED_MODULE_3__.InformacjaOJednymPracownikuComponent, _komponenty_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent, _komponenty_zdjecie_zakladu_zdjecie_zakladu_component__WEBPACK_IMPORTED_MODULE_5__.ZdjecieZakladuComponent, _komponenty_informacja_onas_informacja_onas_component__WEBPACK_IMPORTED_MODULE_6__.InformacjaONasComponent, _komponenty_napisz_nam_napisz_nam_component__WEBPACK_IMPORTED_MODULE_7__.NapiszNamComponent, _komponenty_zarejestruj_sie_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_8__.ZarejestrujSieComponent, _komponenty_formularz_zarejestruj_sie_formularz_zarejestruj_sie_component__WEBPACK_IMPORTED_MODULE_9__.FormularzZarejestrujSieComponent],
  styles: [".margines[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.parallax[_ngcontent-%COMP%] {\n  background-image: url('tlo1.png');\n  height: 80px;\n  width: 100%;\n  float: left;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n.parallax2[_ngcontent-%COMP%] {\n  background-image: url('tlo3.png');\n  height: 20px;\n  width: 100%;\n  float: left;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n.parallax3[_ngcontent-%COMP%] {\n  background-image: url('tlo2.png');\n  height: 20px;\n  filter: hue-rotate(1turn);\n  width: 100%;\n  float: left;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9vbmUtcGFnZS1zdHJvbmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbmVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhcmFsbGF4IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGxvMS5wbmdcIik7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLnBhcmFsbGF4MiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RsbzMucG5nXCIpO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5wYXJhbGxheDMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90bG8yLnBuZ1wiKTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmlsdGVyOiBodWUtcm90YXRlKDF0dXJuKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 65933:
/*!**************************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/one-page-strona/strzalka/strzalka.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrzalkaComponent": () => (/* binding */ StrzalkaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);


class StrzalkaComponent {
  constructor(router) {
    this.router = router;
  }
  strzalka() {
    this.router.navigate(['.']);
    setTimeout(() => {
      this.router.navigate(['.'], {
        fragment: 'poczatek'
      });
    }, 0);
  }
}
StrzalkaComponent.ɵfac = function StrzalkaComponent_Factory(t) {
  return new (t || StrzalkaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
StrzalkaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: StrzalkaComponent,
  selectors: [["app-strzalka"]],
  decls: 2,
  vars: 0,
  consts: [[1, "strzalka", 3, "click"], [1, "strz"]],
  template: function StrzalkaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StrzalkaComponent_Template_div_click_0_listener() {
        return ctx.strzalka();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".strzalka[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #ff1c1c;\n  position: fixed;\n  right: 15px;\n  bottom: 15px;\n  border-radius: 50%;\n  border: 2px solid #a20000;\n  transition: 0.5s ease-out;\n  z-index: 99900;\n}\n.strzalka[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  scale: 1.1;\n}\n.strzalka[_ngcontent-%COMP%]   .strz[_ngcontent-%COMP%] {\n  transition: 0.5s ease-out;\n}\n.strzalka[_ngcontent-%COMP%]   .strz[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 3px;\n  right: 6px;\n  top: 16px;\n  transform: rotate(45deg);\n  background: white;\n}\n.strzalka[_ngcontent-%COMP%]   .strz[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 15px;\n  height: 3px;\n  right: 15px;\n  top: 16px;\n  transform: rotate(-225deg);\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL3Jla2xhbW93YS1zdHJvbmEtemFrbGFkdS9zcmMvYXBwL29uZS1wYWdlLXN0cm9uYS9zdHJ6YWxrYS9zdHJ6YWxrYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFHQSxVQUFBO0FBREo7QUFLRTtFQUNFLHlCQUFBO0FBSEo7QUFPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FBTEo7QUFRRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RyemFsa2Ege1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmYxYzFjO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTVweDtcclxuICBib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNhMjAwMDA7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcclxuICB6LWluZGV4OiA5OTkwMDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cclxuICAgIHNjYWxlOiAxLjE7XHJcblxyXG4gIH1cclxuXHJcbiAgLnN0cnoge1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcclxuICB9XHJcblxyXG5cclxuICAuc3RyejphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICByaWdodDogNnB4O1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc3RyejpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjI1ZGVnKTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 77508:
/*!**********************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/page-not-found/page-not-found.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

class PageNotFoundComponent {}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 2,
  vars: 0,
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 81507:
/*!*************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/rurki/zdjecie.pipe.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZdjeciePipe": () => (/* binding */ ZdjeciePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serwisy/nawigacja.service */ 39429);


class ZdjeciePipe {
  constructor(nav) {
    this.nav = nav;
  }
  transform(value, ...args) {
    return value + "?random=" + this.nav.losowaLiczba;
  }
}
ZdjeciePipe.ɵfac = function ZdjeciePipe_Factory(t) {
  return new (t || ZdjeciePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_serwisy_nawigacja_service__WEBPACK_IMPORTED_MODULE_0__.NawigacjaService, 16));
};
ZdjeciePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "zdjecie",
  type: ZdjeciePipe,
  pure: true
});

/***/ }),

/***/ 53577:
/*!**************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/serwisy/dane-podstawowe.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanePodstawoweService": () => (/* binding */ DanePodstawoweService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _enum_drzwi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/drzwi */ 2512);
/* harmony import */ var _klasy_dane_podstawowe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../klasy/dane-podstawowe */ 30841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../host */ 26606);
/* harmony import */ var _listonosz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listonosz.service */ 35992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 41444);








class DanePodstawoweService {
  constructor(listonosz, router, platformId, host) {
    this.listonosz = listonosz;
    this.router = router;
    this.platformId = platformId;
    this.host = host;
    this.danePodstawowe = new _klasy_dane_podstawowe__WEBPACK_IMPORTED_MODULE_1__.DanePodstawowe();
    this.danePodstawoweObservable = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.subDomainID = false;
  }
  pobieranieDanychPodstawowych() {
    this.listonosz.pobierz(_enum_drzwi__WEBPACK_IMPORTED_MODULE_0__.Drzwi.danePodstawowe).then(pobrane => {
      Object.assign(this.danePodstawowe, pobrane);
      this.danePodstawoweObservable.next(this.danePodstawowe);
    }).catch(niepobrane => {
      if (niepobrane.error?.reasonCode) {
        this.router.navigate(['pageNotFound']);
      }
    });
  }
}
DanePodstawoweService.ɵfac = function DanePodstawoweService_Factory(t) {
  return new (t || DanePodstawoweService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_listonosz_service__WEBPACK_IMPORTED_MODULE_3__.ListonoszService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_host__WEBPACK_IMPORTED_MODULE_2__.HOST_ID, 8));
};
DanePodstawoweService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DanePodstawoweService,
  factory: DanePodstawoweService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 45087:
/*!*******************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/serwisy/fa-icons.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaIconsService": () => (/* binding */ FaIconsService)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 92171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);


class FaIconsService {
  constructor() {
    this.telefon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSquarePhone;
    this.info = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCircleInfo;
    this.uslugi = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClipboardList;
    this.zegarek = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faClock;
    this.mapa = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMapLocationDot;
    this.check = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCircleCheck;
  }
}
FaIconsService.ɵfac = function FaIconsService_Factory(t) {
  return new (t || FaIconsService)();
};
FaIconsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FaIconsService,
  factory: FaIconsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 35992:
/*!********************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/serwisy/listonosz.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListonoszService": () => (/* binding */ ListonoszService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _listy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listy.service */ 85811);


class ListonoszService {
  constructor(listy) {
    this.listy = listy;
  }
  pobierz(drzwi) {
    console.log(1);
    return new Promise((resolve, reject) => {
      this.listy.pobierz(drzwi, {}).subscribe(next => {
        console.log(next['value']);
        resolve(next['value']);
      }, error => {
        reject(error);
      });
    });
  }
  wyslij(drzwi, zawartosc) {
    return new Promise((resolve, reject) => {
      this.listy.wyslij(drzwi, zawartosc, {}).subscribe(next => {
        resolve(next['value']);
      }, error => {
        reject(error);
      });
    });
  }
}
ListonoszService.ɵfac = function ListonoszService_Factory(t) {
  return new (t || ListonoszService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_listy_service__WEBPACK_IMPORTED_MODULE_0__.ListyService));
};
ListonoszService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ListonoszService,
  factory: ListonoszService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 85811:
/*!****************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/serwisy/listy.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListyService": () => (/* binding */ ListyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _host__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../host */ 26606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8746);





class ListyService {
  constructor(api, platformId, host) {
    this.api = api;
    this.platformId = platformId;
    this.host = host;
    this.identyfikatorWParametrze = '';
    this.linkDoApi = "http://195.136.14.31:3000/";
  }
  pobierz(drzwi, opcje) {
    var parametr = '';
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      if (this.identyfikatorWParametrze.length > 0) {
        parametr = '?identyfikator=' + this.identyfikatorWParametrze;
      }
    }
    // if (isPlatformServer(this.platformId)) {
    this.linkDoApi = 'localhost:3000/';
    parametr = '?identyfikator=' + this.host.toString().split('.')[0];
    //  }
    //}
    console.log(this.linkDoApi);
    return this.api.get(this.linkDoApi + drzwi + parametr, opcje);
  }
  wyslij(drzwi, zawartosc, opcje) {
    return this.api.post(this.linkDoApi + drzwi, zawartosc, opcje);
  }
}
ListyService.ɵfac = function ListyService_Factory(t) {
  return new (t || ListyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_host__WEBPACK_IMPORTED_MODULE_0__.HOST_ID, 8));
};
ListyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ListyService,
  factory: ListyService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 39429:
/*!********************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/serwisy/nawigacja.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NawigacjaService": () => (/* binding */ NawigacjaService)
/* harmony export */ });
/* harmony import */ var _enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/nawigacja.enum */ 47792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);



class NawigacjaService {
  constructor(router, route) {
    this.router = router;
    this.route = route;
    this.losowaLiczba = Math.round(Math.random() * 100000);
    this.nav = _enum_nawigacja_enum__WEBPACK_IMPORTED_MODULE_0__.NawigacjaEnum;
  }
  Start() {}
  przeniesDoPanelu(element) {
    /* const sub =  this.route.fragment.subscribe(fragment => {
        console.log("My hash fragment is here => ", fragment)
      })*/
    // @ts-ignore
    document.getElementById(element).scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
    this.router.navigate(['.'], {
      fragment: element
    });
    // @ts-ignore
    document.getElementById(element).scrollIntoView({
      behavior: "smooth",
      inline: "nearest"
    });
    //this.router.navigate(['.'])
    setTimeout(() => {
      // @ts-ignore
      document.getElementById(element).scrollIntoView({
        behavior: "smooth",
        inline: "nearest"
      });
      this.router.navigate(['.'], {
        fragment: element
      });
      // @ts-ignore
      document.getElementById(element).scrollIntoView({
        behavior: "smooth",
        inline: "nearest"
      });
    }, 1);
  }
}
NawigacjaService.ɵfac = function NawigacjaService_Factory(t) {
  return new (t || NawigacjaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
NawigacjaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: NawigacjaService,
  factory: NawigacjaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 40180:
/*!************************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/app/straznicy/identyfikator.guard.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentyfikatorGuard": () => (/* binding */ IdentyfikatorGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../serwisy/dane-podstawowe.service */ 53577);
/* harmony import */ var _serwisy_listy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../serwisy/listy.service */ 85811);




class IdentyfikatorGuard {
  constructor(router, danePodstawowe, listy) {
    this.router = router;
    this.danePodstawowe = danePodstawowe;
    this.listy = listy;
  }
  canActivate(route, state) {
    const sub = window.location.href.split('.')[0].split("//")[1];
    const id = route.paramMap.get('identyfikator');
    this.danePodstawowe.subDomainID = false;
    if (sub == "parametr" || sub == "k") {
      if (id != null && id.length > 0) {
        this.listy.identyfikatorWParametrze = id;
        this.danePodstawowe.subDomainID = true;
        return true;
      } else {
        this.router.navigate(['pageNotFound']);
      }
    } else {
      return true;
    }
    this.router.navigate(['pageNotFound']);
    return false;
  }
}
IdentyfikatorGuard.ɵfac = function IdentyfikatorGuard_Factory(t) {
  return new (t || IdentyfikatorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serwisy_dane_podstawowe_service__WEBPACK_IMPORTED_MODULE_0__.DanePodstawoweService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_serwisy_listy_service__WEBPACK_IMPORTED_MODULE_1__.ListyService));
};
IdentyfikatorGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: IdentyfikatorGuard,
  factory: IdentyfikatorGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 74928:
/*!***************************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/environments/environment.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  title: '1',
  linkDoZdjeciaProfilowego: 'http://fenek.tech:3000/pliki/wyswietlZdjecieProfilowe/'
};

/***/ }),

/***/ 91400:
/*!**************************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/src/main.server.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 3192);


/***/ }),

/***/ 92470:
/*!*****************************************************!*\
  !*** ./projects/reklamowa-strona-zakladu/server.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServerModule": () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "renderModule": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 29810);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 65663);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 1898);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ 57147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ 71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 91400);
/* harmony import */ var _src_app_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/app/host */ 26606);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-server */ 78163);








global.window = global; // Przypisz obiekt "window" do zakresu globalnego
global.document = global.document; // Przypisz obiekt "document" do zakresu globalnego
global.Event = global.Event; // Przypisz obiekt "Event" do zakresu globalnego
global.KeyboardEvent = global.KeyboardEvent; // Przypisz obiekt "KeyboardEvent" do zakresu globalnego
// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  // const distFolder = join(process.cwd(), 'dist/reklamowaStronaZakladu/browser');
  const distFolder = (0,path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), '../browser');
  const indexHtml = (0,fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule
  }));
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    const startTime = performance.now();
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.APP_BASE_HREF,
        useValue: req.baseUrl
      }, {
        provide: _src_app_host__WEBPACK_IMPORTED_MODULE_6__.HOST_ID,
        useValue: req.header('x-forwarded-host')
      }]
    });
    const endTime = performance.now();
    // Czas renderowania strony przez serwer w milisekundach
    const renderTime = endTime - startTime;
    console.log(`Czas renderowania strony przez serwer: ${renderTime} ms`);
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"zaklady","version":"0.0.0","data_wydania":"26.07.2023","scripts":{"ng":"ng","start":"ng serve","startPaneluZakladu":" ng serve PanelZakladu --port 8005  --host=0.0.0.0 --disable-host-check","startStronyReklamowejZakladu":"ng serve reklamowaStronaZakladu --port 8008  --host=0.0.0.0 --disable-host-check","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test","dev:ssr":"ng run reklamowaStronaZakladu:serve-ssr","serve:ssr":"node dist/reklamowaStronaZakladu/server/main.js","build:ssr":"ng build  && ng run reklamowaStronaZakladu:server","prerender":"ng run reklamowaStronaZakladu:prerender"},"private":true,"dependencies":{"@angular/animations":"^15.2.9","@angular/common":"^15.2.0","@angular/compiler":"^15.2.0","@angular/core":"^15.2.0","@angular/forms":"^15.2.0","@angular/platform-browser":"^15.2.0","@angular/platform-browser-dynamic":"^15.2.0","@angular/platform-server":"^15.2.0","@angular/router":"^15.2.0","@asymmetrik/ngx-leaflet":"^15.0.1","@fortawesome/angular-fontawesome":"^0.12.1","@fortawesome/fontawesome-svg-core":"^6.4.0","@fortawesome/free-regular-svg-icons":"^6.4.0","@fortawesome/free-solid-svg-icons":"^6.4.0","@ng-bootstrap/ng-bootstrap":"^14.2.0","@ng-select/ng-select":"^10.0.4","@ngneat/helipopper":"^7.1.1","@ngneat/overview":"^4.1.0","@nguniversal/express-engine":"^15.2.1","@popperjs/core":"^2.11.6","bootstrap":"^5.2.3","chart.js":"^4.3.0","email-validator":"^2.0.4","express":"^4.15.2","glider-js":"^1.7.8","jquery":"^3.7.0","leaflet":"^1.9.3","ngx-cookie":"^6.0.1","ngx-cookie-service":"^15.0.0","ngx-if-platform":"^1.0.8","ngx-owl-carousel-o":"^15.0.1","ngx-toastr":"^16.2.0","ngx-ui-switch":"^14.0.3","password-validator":"^5.3.0","rxjs":"~7.8.0","tslib":"^2.3.0","zone.js":"~0.12.0"},"devDependencies":{"@angular-devkit/build-angular":"^15.2.8","@angular/cli":"~15.2.7","@angular/compiler-cli":"^15.2.0","@angular/localize":"^15.2.0","@nguniversal/builders":"^15.2.1","@types/express":"^4.17.0","@types/jasmine":"~4.3.0","@types/leaflet":"^1.9.3","@types/node":"^14.15.0","jasmine-core":"~4.5.0","karma":"~6.4.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","prettier":"2.8.8","typescript":"~4.9.4"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(76353)))
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(73482)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(92470)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendor" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map