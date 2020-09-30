function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: '/tarefas',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'GerenciadorDeTarefas';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _tarefas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tarefas */
    "./src/app/tarefas/index.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _tarefas__WEBPACK_IMPORTED_MODULE_4__["TarefasModule"], _tarefas__WEBPACK_IMPORTED_MODULE_4__["TarefasRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _tarefas__WEBPACK_IMPORTED_MODULE_4__["TarefasModule"], _tarefas__WEBPACK_IMPORTED_MODULE_4__["TarefasRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _tarefas__WEBPACK_IMPORTED_MODULE_4__["TarefasModule"], _tarefas__WEBPACK_IMPORTED_MODULE_4__["TarefasRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tarefas/components/gerenciador.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tarefas/components/gerenciador.component.ts ***!
    \*************************************************************/

  /*! exports provided: GerenciadorComponent */

  /***/
  function srcAppTarefasComponentsGerenciadorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GerenciadorComponent", function () {
      return GerenciadorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GerenciadorComponent = function GerenciadorComponent() {
      _classCallCheck(this, GerenciadorComponent);
    };

    GerenciadorComponent.ɵfac = function GerenciadorComponent_Factory(t) {
      return new (t || GerenciadorComponent)();
    };

    GerenciadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GerenciadorComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 0,
      template: function GerenciadorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GerenciadorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          template: "<router-outlet></router-outlet>"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tarefas/components/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/tarefas/components/index.ts ***!
    \*********************************************/

  /*! exports provided: TarefaComponent, GerenciadorComponent, TarefaDetalhesComponent */

  /***/
  function srcAppTarefasComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tarefa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tarefa */
    "./src/app/tarefas/components/tarefa/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefaComponent", function () {
      return _tarefa__WEBPACK_IMPORTED_MODULE_0__["TarefaComponent"];
    });
    /* harmony import */


    var _gerenciador_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./gerenciador.component */
    "./src/app/tarefas/components/gerenciador.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GerenciadorComponent", function () {
      return _gerenciador_component__WEBPACK_IMPORTED_MODULE_1__["GerenciadorComponent"];
    });
    /* harmony import */


    var _tarefa_detalhes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tarefa-detalhes */
    "./src/app/tarefas/components/tarefa-detalhes/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefaDetalhesComponent", function () {
      return _tarefa_detalhes__WEBPACK_IMPORTED_MODULE_2__["TarefaDetalhesComponent"];
    });
    /***/

  },

  /***/
  "./src/app/tarefas/components/tarefa-detalhes/index.ts":
  /*!*************************************************************!*\
    !*** ./src/app/tarefas/components/tarefa-detalhes/index.ts ***!
    \*************************************************************/

  /*! exports provided: TarefaDetalhesComponent */

  /***/
  function srcAppTarefasComponentsTarefaDetalhesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tarefa_detalhes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tarefa-detalhes.component */
    "./src/app/tarefas/components/tarefa-detalhes/tarefa-detalhes.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefaDetalhesComponent", function () {
      return _tarefa_detalhes_component__WEBPACK_IMPORTED_MODULE_0__["TarefaDetalhesComponent"];
    });
    /***/

  },

  /***/
  "./src/app/tarefas/components/tarefa-detalhes/tarefa-detalhes.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/tarefas/components/tarefa-detalhes/tarefa-detalhes.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TarefaDetalhesComponent */

  /***/
  function srcAppTarefasComponentsTarefaDetalhesTarefaDetalhesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefaDetalhesComponent", function () {
      return TarefaDetalhesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services */
    "./src/app/tarefas/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TarefaDetalhesComponent_tr_41_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.id);
      }
    }

    function TarefaDetalhesComponent_tr_41_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.titulo);
      }
    }

    function TarefaDetalhesComponent_tr_41_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.descricao);
      }
    }

    function TarefaDetalhesComponent_tr_41_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", item_r1.status === 0 ? "success" : "primary", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status === 0 ? "CONCLU\xCDDO" : " A FAZER ");
      }
    }

    function TarefaDetalhesComponent_tr_41_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r1.dataCriacao, "d/MM/y H:mm"));
      }
    }

    function TarefaDetalhesComponent_tr_41_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r1.dataAtualizacao, "d/MM/y H:mm"));
      }
    }

    function TarefaDetalhesComponent_tr_41_td_7_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaDetalhesComponent_tr_41_td_7_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.editar(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TarefaDetalhesComponent_tr_41_td_7_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaDetalhesComponent_tr_41_td_7_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.finalizar(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Finalizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TarefaDetalhesComponent_tr_41_td_7_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaDetalhesComponent_tr_41_td_7_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.excluir(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Excluir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TarefaDetalhesComponent_tr_41_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TarefaDetalhesComponent_tr_41_td_7_button_1_Template, 3, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TarefaDetalhesComponent_tr_41_td_7_button_2_Template, 3, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TarefaDetalhesComponent_tr_41_td_7_button_3_Template, 3, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.status !== 1);
      }
    }

    function TarefaDetalhesComponent_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TarefaDetalhesComponent_tr_41_td_1_Template, 2, 1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TarefaDetalhesComponent_tr_41_td_2_Template, 2, 1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TarefaDetalhesComponent_tr_41_td_3_Template, 2, 1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TarefaDetalhesComponent_tr_41_td_4_Template, 3, 4, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TarefaDetalhesComponent_tr_41_td_5_Template, 3, 4, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TarefaDetalhesComponent_tr_41_td_6_Template, 3, 4, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TarefaDetalhesComponent_tr_41_td_7_Template, 4, 3, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);
      }
    }

    var TarefaDetalhesComponent = /*#__PURE__*/function () {
      function TarefaDetalhesComponent(tarefaService, fb, route, router) {
        _classCallCheck(this, TarefaDetalhesComponent);

        this.tarefaService = tarefaService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.tarefa = {};
      }

      _createClass(TarefaDetalhesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gerarForm();
          this.idTarefa = this.route.snapshot.paramMap.get('id_tarefa');
          this.carregaTarefas();
          this.carregarTarefa(Number(this.idTarefa));
        }
      }, {
        key: "gerarForm",
        value: function gerarForm() {
          this.form = this.fb.group({
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            descricao: ['', []]
          });
        }
      }, {
        key: "carregaTarefas",
        value: function carregaTarefas() {
          var _this = this;

          this.tarefaService.listarTarefas().subscribe(function (data) {
            _this.tarefas = data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "carregarTarefa",
        value: function carregarTarefa(id) {
          var _this2 = this;

          this.tarefaService.tarefa(id).subscribe(function (data) {
            _this2.tarefa = data;

            _this2.populandoFormulario();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "atualizar",
        value: function atualizar() {
          var _this3 = this;

          this.tarefa.dataAtualizacao = new Date();
          this.tarefa.titulo = this.form.get('titulo').value;
          this.tarefa.descricao = this.form.get('descricao').value;
          this.tarefaService.atualizar(this.tarefa).subscribe(function (data) {
            _this3.carregaTarefas();

            _this3.router.navigate(['/tarefas']);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "editar",
        value: function editar(id) {
          console.log(id);
        }
      }, {
        key: "finalizar",
        value: function finalizar(id) {
          var _this4 = this;

          this.tarefaService.tarefa(id).subscribe(function (data) {
            _this4.tarefa = data;
            _this4.tarefa.status = 0;
            _this4.tarefa.conclusao = new Date();

            _this4.atualizarFinalizar(_this4.tarefa);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "excluir",
        value: function excluir(id) {
          var _this5 = this;

          this.tarefaService.tarefa(id).subscribe(function (data) {
            _this5.tarefa = data;
            _this5.tarefa.statusRemocao = 1;
            _this5.tarefa.remocao = new Date();

            _this5.atualizarExcluir(_this5.tarefa);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "atualizarFinalizar",
        value: function atualizarFinalizar(tarefa) {
          var _this6 = this;

          this.tarefaService.atualizar(tarefa).subscribe(function (data) {
            _this6.carregaTarefas();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "atualizarExcluir",
        value: function atualizarExcluir(tarefa) {
          var _this7 = this;

          this.tarefaService.atualizar(tarefa).subscribe(function (data) {
            _this7.carregaTarefas();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "populandoFormulario",
        value: function populandoFormulario() {
          this.form.patchValue({
            titulo: this.tarefa.titulo,
            descricao: this.tarefa.descricao
          });
        }
      }]);

      return TarefaDetalhesComponent;
    }();

    TarefaDetalhesComponent.ɵfac = function TarefaDetalhesComponent_Factory(t) {
      return new (t || TarefaDetalhesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["TarefaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    TarefaDetalhesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TarefaDetalhesComponent,
      selectors: [["app-tarefa-detalhes"]],
      decls: 42,
      vars: 3,
      consts: [[1, "row"], [1, "col-lg-12"], ["id", "wrapper", 1, "ibox", "float-e-margins"], [1, "ibox-title"], [1, "ibox-content"], [1, "col-sm-4", "b-r"], [1, "m-t-none", "m-b"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "titulo", "placeholder", "Digite o t\xEDtulo *", 1, "form-control"], ["type", "text", "formControlName", "descricao", "placeholder", "Descri\xE7\xE3o", 1, "form-control"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-outline", "pull-right", "m-t-n-xs", 3, "click"], [1, "col-sm-8"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "margin-right: 2px;", "class", "btn btn-info btn-sm", 3, "click", 4, "ngIf"], ["style", "margin-right: 2px;", "class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-info", "btn-sm", 2, "margin-right", "2px", 3, "click"], [1, "fa", "fa-paste"], [1, "btn", "btn-primary", "btn-sm", 2, "margin-right", "2px", 3, "click"], [1, "fa", "fa-check"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa", "fa-close"]],
      template: function TarefaDetalhesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Atualizar Tarefa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaDetalhesComponent_Template_button_click_17_listener() {
            return ctx.atualizar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Atualizar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "C\xF3d. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "T\xEDtulo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Data Cria\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Data Atualiza\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TarefaDetalhesComponent_tr_41_Template, 8, 7, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tarefas - ", ctx.idTarefa, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tarefas);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmVmYXMvY29tcG9uZW50cy90YXJlZmEtZGV0YWxoZXMvdGFyZWZhLWRldGFsaGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarefaDetalhesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tarefa-detalhes',
          templateUrl: './tarefa-detalhes.component.html',
          styleUrls: ['./tarefa-detalhes.component.css']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_2__["TarefaService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tarefas/components/tarefa/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/tarefas/components/tarefa/index.ts ***!
    \****************************************************/

  /*! exports provided: TarefaComponent */

  /***/
  function srcAppTarefasComponentsTarefaIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tarefa_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tarefa.component */
    "./src/app/tarefas/components/tarefa/tarefa.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefaComponent", function () {
      return _tarefa_component__WEBPACK_IMPORTED_MODULE_0__["TarefaComponent"];
    });
    /***/

  },

  /***/
  "./src/app/tarefas/components/tarefa/tarefa.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/tarefas/components/tarefa/tarefa.component.ts ***!
    \***************************************************************/

  /*! exports provided: TarefaComponent */

  /***/
  function srcAppTarefasComponentsTarefaTarefaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefaComponent", function () {
      return TarefaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/index.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services */
    "./src/app/tarefas/services/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TarefaComponent_tr_41_td_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.id);
      }
    }

    function TarefaComponent_tr_41_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.titulo);
      }
    }

    function TarefaComponent_tr_41_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.descricao);
      }
    }

    function TarefaComponent_tr_41_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("label label-", item_r1.status === 0 ? "success" : "primary", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.status === 0 ? "CONCLU\xCDDO" : " A FAZER ");
      }
    }

    function TarefaComponent_tr_41_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r1.dataCriacao, "d/MM/y H:mm"));
      }
    }

    function TarefaComponent_tr_41_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r1.dataAtualizacao, "d/MM/y H:mm"));
      }
    }

    function TarefaComponent_tr_41_td_7_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaComponent_tr_41_td_7_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.editar(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Editar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TarefaComponent_tr_41_td_7_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaComponent_tr_41_td_7_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.finalizar(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Finalizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TarefaComponent_tr_41_td_7_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaComponent_tr_41_td_7_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.excluir(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Excluir");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TarefaComponent_tr_41_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TarefaComponent_tr_41_td_7_button_1_Template, 3, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TarefaComponent_tr_41_td_7_button_2_Template, 3, 0, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TarefaComponent_tr_41_td_7_button_3_Template, 3, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.status === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.status !== 1);
      }
    }

    function TarefaComponent_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TarefaComponent_tr_41_td_1_Template, 2, 1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TarefaComponent_tr_41_td_2_Template, 2, 1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TarefaComponent_tr_41_td_3_Template, 2, 1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TarefaComponent_tr_41_td_4_Template, 3, 4, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TarefaComponent_tr_41_td_5_Template, 3, 4, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TarefaComponent_tr_41_td_6_Template, 3, 4, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TarefaComponent_tr_41_td_7_Template, 4, 3, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.statusRemocao !== 1);
      }
    }

    var TarefaComponent = /*#__PURE__*/function () {
      function TarefaComponent(tarefaService, fb, route, router) {
        _classCallCheck(this, TarefaComponent);

        this.tarefaService = tarefaService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.tarefa = {};
        this.myId = uuid__WEBPACK_IMPORTED_MODULE_2__["v4"]();
      }

      _createClass(TarefaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.gerarForm();
          this.carregaTarefas();
          console.log(this.myId.substring(0, 8));
        }
      }, {
        key: "gerarForm",
        value: function gerarForm() {
          this.form = this.fb.group({
            titulo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            descricao: ['', []]
          });
        }
      }, {
        key: "carregaTarefas",
        value: function carregaTarefas() {
          var _this8 = this;

          this.tarefaService.listarTarefas().subscribe(function (data) {
            _this8.tarefas = data;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "cadastrar",
        value: function cadastrar() {
          var _this9 = this;

          if (this.form.invalid) {
            return;
          }

          this.tarefa = this.form.value;
          var dataAtual = new Date();
          this.tarefa.dataCriacao = dataAtual;
          this.tarefa.dataAtualizacao = dataAtual;
          this.tarefa.status = 1;
          this.tarefa.statusRemocao = 0;
          this.tarefaService.inserir(this.tarefa).subscribe(function (data) {
            _this9.carregaTarefas();

            _this9.gerarForm();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "editar",
        value: function editar(id) {
          this.router.navigate(['/tarefas/detalhes/' + id]);
        }
      }, {
        key: "finalizar",
        value: function finalizar(id) {
          var _this10 = this;

          this.tarefaService.tarefa(id).subscribe(function (data) {
            _this10.tarefa = data;
            _this10.tarefa.status = 0;
            _this10.tarefa.conclusao = new Date();

            _this10.atualizarFinalizar(_this10.tarefa);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "excluir",
        value: function excluir(id) {
          var _this11 = this;

          this.tarefaService.tarefa(id).subscribe(function (data) {
            _this11.tarefa = data;
            _this11.tarefa.statusRemocao = 1;
            _this11.tarefa.remocao = new Date();

            _this11.atualizarExcluir(_this11.tarefa);
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "atualizarFinalizar",
        value: function atualizarFinalizar(tarefa) {
          var _this12 = this;

          this.tarefaService.atualizar(tarefa).subscribe(function (data) {
            _this12.carregaTarefas();
          }, function (err) {
            return console.error(err);
          });
        }
      }, {
        key: "atualizarExcluir",
        value: function atualizarExcluir(tarefa) {
          var _this13 = this;

          this.tarefaService.atualizar(tarefa).subscribe(function (data) {
            _this13.carregaTarefas();
          }, function (err) {
            return console.error(err);
          });
        }
      }]);

      return TarefaComponent;
    }();

    TarefaComponent.ɵfac = function TarefaComponent_Factory(t) {
      return new (t || TarefaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["TarefaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    TarefaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TarefaComponent,
      selectors: [["app-tarefa"]],
      decls: 42,
      vars: 2,
      consts: [[1, "row"], [1, "col-lg-12"], ["id", "wrapper", 1, "ibox", "float-e-margins"], [1, "ibox-title"], [1, "ibox-content"], [1, "col-sm-3", "b-r"], [1, "m-t-none", "m-b"], ["novalidate", "", 3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "titulo", "placeholder", "Digite o t\xEDtulo *", 1, "form-control"], ["type", "text", "formControlName", "descricao", "placeholder", "Descri\xE7\xE3o", 1, "form-control"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-outline", "pull-right", "m-t-n-xs", 3, "click"], [1, "col-sm-9"], [1, "table-responsive"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "margin-right: 2px;", "class", "btn btn-info btn-sm", 3, "click", 4, "ngIf"], ["style", "margin-right: 2px;", "class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-info", "btn-sm", 2, "margin-right", "2px", 3, "click"], [1, "fa", "fa-paste"], [1, "btn", "btn-primary", "btn-sm", 2, "margin-right", "2px", 3, "click"], [1, "fa", "fa-check"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fa", "fa-close"]],
      template: function TarefaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Tarefas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nova Tarefa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TarefaComponent_Template_button_click_17_listener() {
            return ctx.cadastrar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "C\xF3d. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "T\xEDtulo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Descri\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Data Cria\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Data Atualiza\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TarefaComponent_tr_41_Template, 8, 7, "tr", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tarefas);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmVmYXMvY29tcG9uZW50cy90YXJlZmEvdGFyZWZhLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarefaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tarefa',
          templateUrl: './tarefa.component.html',
          styleUrls: ['./tarefa.component.css']
        }]
      }], function () {
        return [{
          type: _services__WEBPACK_IMPORTED_MODULE_3__["TarefaService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tarefas/index.ts":
  /*!**********************************!*\
    !*** ./src/app/tarefas/index.ts ***!
    \**********************************/

  /*! exports provided: TarefasModule, TarefaRoutes, TarefasRoutingModule */

  /***/
  function srcAppTarefasIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tarefas_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tarefas.module */
    "./src/app/tarefas/tarefas.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefasModule", function () {
      return _tarefas_module__WEBPACK_IMPORTED_MODULE_0__["TarefasModule"];
    });
    /* harmony import */


    var _tarefas_router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tarefas.router.module */
    "./src/app/tarefas/tarefas.router.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefaRoutes", function () {
      return _tarefas_router_module__WEBPACK_IMPORTED_MODULE_1__["TarefaRoutes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefasRoutingModule", function () {
      return _tarefas_router_module__WEBPACK_IMPORTED_MODULE_1__["TarefasRoutingModule"];
    });
    /***/

  },

  /***/
  "./src/app/tarefas/services/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/tarefas/services/index.ts ***!
    \*******************************************/

  /*! exports provided: TarefaService */

  /***/
  function srcAppTarefasServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _tarefa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./tarefa.service */
    "./src/app/tarefas/services/tarefa.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TarefaService", function () {
      return _tarefa_service__WEBPACK_IMPORTED_MODULE_0__["TarefaService"];
    });
    /***/

  },

  /***/
  "./src/app/tarefas/services/tarefa.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/tarefas/services/tarefa.service.ts ***!
    \****************************************************/

  /*! exports provided: TarefaService */

  /***/
  function srcAppTarefasServicesTarefaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefaService", function () {
      return TarefaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TarefaService = /*#__PURE__*/function () {
      function TarefaService(http) {
        _classCallCheck(this, TarefaService);

        this.http = http;
        this.PATH = '/tarefas';
      }

      _createClass(TarefaService, [{
        key: "tarefa",
        value: function tarefa(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL).concat(this.PATH, "/").concat(id));
        }
      }, {
        key: "deleteTarefa",
        value: function deleteTarefa(id) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL).concat(this.PATH, "/").concat(id));
        }
      }, {
        key: "listarTarefas",
        value: function listarTarefas() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + this.PATH);
        }
      }, {
        key: "inserir",
        value: function inserir(tarefa) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL + this.PATH, tarefa);
        }
      }, {
        key: "atualizar",
        value: function atualizar(tarefa) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL).concat(this.PATH, "/").concat(tarefa.id), tarefa);
        }
      }]);

      return TarefaService;
    }();

    TarefaService.ɵfac = function TarefaService_Factory(t) {
      return new (t || TarefaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TarefaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TarefaService,
      factory: TarefaService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarefaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tarefas/tarefas.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/tarefas/tarefas.module.ts ***!
    \*******************************************/

  /*! exports provided: TarefasModule */

  /***/
  function srcAppTarefasTarefasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefasModule", function () {
      return TarefasModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components */
    "./src/app/tarefas/components/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services */
    "./src/app/tarefas/services/index.ts");

    var TarefasModule = function TarefasModule() {
      _classCallCheck(this, TarefasModule);
    };

    TarefasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TarefasModule
    });
    TarefasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TarefasModule_Factory(t) {
        return new (t || TarefasModule)();
      },
      providers: [_services__WEBPACK_IMPORTED_MODULE_6__["TarefaService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TarefasModule, {
        declarations: [_components__WEBPACK_IMPORTED_MODULE_4__["TarefaComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["GerenciadorComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["TarefaDetalhesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarefasModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components__WEBPACK_IMPORTED_MODULE_4__["TarefaComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["GerenciadorComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["TarefaDetalhesComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
          providers: [_services__WEBPACK_IMPORTED_MODULE_6__["TarefaService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/tarefas/tarefas.router.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/tarefas/tarefas.router.module.ts ***!
    \**************************************************/

  /*! exports provided: TarefaRoutes, TarefasRoutingModule */

  /***/
  function srcAppTarefasTarefasRouterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefaRoutes", function () {
      return TarefaRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarefasRoutingModule", function () {
      return TarefasRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components */
    "./src/app/tarefas/components/index.ts");

    var TarefaRoutes = [{
      path: 'tarefas',
      component: _components__WEBPACK_IMPORTED_MODULE_2__["GerenciadorComponent"],
      children: [{
        path: '',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["TarefaComponent"]
      }, {
        path: 'detalhes/:id_tarefa',
        component: _components__WEBPACK_IMPORTED_MODULE_2__["TarefaDetalhesComponent"]
      }]
    }];

    var TarefasRoutingModule = function TarefasRoutingModule() {
      _classCallCheck(this, TarefasRoutingModule);
    };

    TarefasRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TarefasRoutingModule
    });
    TarefasRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TarefasRoutingModule_Factory(t) {
        return new (t || TarefasRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(TarefaRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TarefasRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarefasRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(TarefaRoutes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseURL: 'https://gerenciador-de-tarefas-api.herokuapp.com'
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
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
    /*! /home/mardonio/Documentos/Dev - Pessoal/Angular/GerenciadorDeTarefasFront/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map