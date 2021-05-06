(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\vince\Desktop\ppmt\client\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0E4G":
    /*!***************************************************************!*\
      !*** ./src/app/components/basic/landing/landing.component.ts ***!
      \***************************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function E4G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "H3jT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function LandingComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent(authService) {
          _classCallCheck(this, LandingComponent);

          this.authService = authService;
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this.isAuthenticated = authState.isAuthenticated;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
          }
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["Landing"]],
        decls: 10,
        vars: 1,
        consts: [[1, "full"], [1, "landing"], [1, "x-large"], [1, "lead"], ["class", "my-1", 4, "ngIf"], [1, "my-1"], ["routerLink", "/register", 1, "btn", "bg-primary"], ["routerLink", "login", 1, "btn", "bg-light"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Personal Project Management Tool ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Create your account to join active projects or start your own now ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LandingComponent_div_8_Template, 5, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "Footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
          }
        },
        directives: [_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "3LUQ":
    /*!*******************************************!*\
      !*** ./src/app/services/alert.service.ts ***!
      \*******************************************/

    /*! exports provided: AlertService */

    /***/
    function LUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! uuid */
      "4USb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.alertStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.initialAlertState = [];
          this.currentAlertState = _toConsumableArray(this.initialAlertState);
        }

        _createClass(AlertService, [{
          key: "getCurrentAlertState",
          value: function getCurrentAlertState() {
            return this.currentAlertState;
          }
        }, {
          key: "getAlertStateSubject",
          value: function getAlertStateSubject() {
            return this.alertStateSubject.asObservable();
          }
        }, {
          key: "removeAlert",
          value: function removeAlert(id) {
            this.currentAlertState = this.currentAlertState.filter(function (alert) {
              return alert.id !== id;
            });
            this.alertStateSubject.next(this.currentAlertState);
          }
        }, {
          key: "setAlert",
          value: function setAlert(msg, alertType) {
            var _this2 = this;

            var timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
            var newAlert = {
              msg: msg,
              alertType: alertType,
              id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])()
            };
            this.currentAlertState = [].concat(_toConsumableArray(this.currentAlertState), [newAlert]);
            this.alertStateSubject.next(this.currentAlertState);
            setTimeout(function () {
              _this2.removeAlert(newAlert.id);
            }, timeout);
          }
        }]);

        return AlertService;
      }();

      AlertService.ɵfac = function AlertService_Factory(t) {
        return new (t || AlertService)();
      };

      AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AlertService,
        factory: AlertService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "7mUt":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dashboard/update-project/update-project.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: UpdateProjectComponent */

    /***/
    function mUt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateProjectComponent", function () {
        return UpdateProjectComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");

      function UpdateProjectComponent_NotAuthorized_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "NotAuthorized");
        }
      }

      function UpdateProjectComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Update Project Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Update An Existing Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function UpdateProjectComponent_div_1_Template_form_submit_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "End Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
        }
      }

      var UpdateProjectComponent = /*#__PURE__*/function () {
        function UpdateProjectComponent(authService, projectService, route, router) {
          _classCallCheck(this, UpdateProjectComponent);

          this.authService = authService;
          this.projectService = projectService;
          this.route = route;
          this.router = router;
        }

        _createClass(UpdateProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              start: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              end: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)
            });
            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this3.isAuthenticated = authState.isAuthenticated;
            });
            this.projectState = this.projectService.getCurrentProjectState();
            this.projectStateSub = this.projectService.getProjectStateSubject().subscribe(function (projectState) {
              _this3.projectState = projectState;

              if (_this3.projectState.loadedProject && _this3.projectState.project === null) {
                _this3.projectService.resetState();

                _this3.router.navigate(["/NotFound"]);
              } else {
                _this3.form.setValue({
                  name: projectState.project.name,
                  description: projectState.project.description,
                  start: projectState.project.begin,
                  end: projectState.project.end
                });
              }
            });
            this.routeSub = this.route.params.subscribe(function (params) {
              _this3.projectService.getProject(params["id"]);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.projectService.updateProject(this.projectState.project.id, this.form.value.name, this.form.value.description, this.form.value.start, this.form.value.end);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
            this.projectStateSub.unsubscribe();
            this.routeSub.unsubscribe();
          }
        }]);

        return UpdateProjectComponent;
      }();

      UpdateProjectComponent.ɵfac = function UpdateProjectComponent_Factory(t) {
        return new (t || UpdateProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      UpdateProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UpdateProjectComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "container"], [1, "large", "primary"], [1, "lead"], [1, "fas", "fa-pen"], [1, "hide-mobile"], [1, "form", 3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "placeholder", "Project Name", "formControlName", "name"], ["type", "text", "placeholder", "Project Description", "formControlName", "description"], ["type", "date", "name", "start", "formControlName", "start"], ["type", "date", "name", "end", "formControlName", "end"], ["type", "submit", 1, "my-1", "btn", "bg-primary"]],
        template: function UpdateProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UpdateProjectComponent_NotAuthorized_0_Template, 1, 0, "NotAuthorized", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpdateProjectComponent_div_1_Template, 22, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__["NotAuthorizedComponent"], _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "9vc0":
    /*!*******************************************!*\
      !*** ./src/app/services/error.service.ts ***!
      \*******************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function vc0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "lGQG");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(alertService, authService) {
          _classCallCheck(this, ErrorInterceptor);

          this.alertService = alertService;
          this.authService = authService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this4 = this;

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              if (error.error.errors[0].msg === "Invalid token, authorization denied") {
                _this4.alertService.setAlert("Session expire", "danger");

                _this4.authService.logout();

                return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
              } else if (error.error.errors[0].msg === "Project Not Found" || error.error.errors[0].msg === "Project Task Not Found") {
                error.error.errors.forEach(function (error) {
                  return _this4.alertService.setAlert(error.msg, "danger");
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
              } else {
                error.error.errors.forEach(function (error) {
                  return _this4.alertService.setAlert(error.msg, "danger");
                });
                return rxjs__WEBPACK_IMPORTED_MODULE_0__["EMPTY"];
              }
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
        proxy: "http://localhost:4000"
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
    "Ce6/":
    /*!*******************************************************************!*\
      !*** ./src/app/components/basic/not-found/not-found.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function Ce6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "H3jT");

      var NotFoundComponent = function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      };

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["ng-component"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container", "full"], [1, "large", "text-primary"], [1, "fas", "fa-exclamation-triangle"], [1, "lead"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 404 Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sorry this page does not exist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "Footer");
          }
        },
        directives: [_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "G19n":
    /*!************************************************************!*\
      !*** ./src/app/components/auth/signup/signup.component.ts ***!
      \************************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function G19n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "H3jT");

      var SignUpComponent = /*#__PURE__*/function () {
        function SignUpComponent(authService, alertService, router) {
          _classCallCheck(this, SignUpComponent);

          this.authService = authService;
          this.alertService = alertService;
          this.router = router;
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this5.isAuthenticated = authState.isAuthenticated;

              if (_this5.isAuthenticated) {
                _this5.router.navigate(["/"]);
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            if (form.value.password !== form.value.password2) {
              this.alertService.setAlert('Password do not match', 'danger', 3000);
            } else {
              this.authService.signup(form.value.name, form.value.email, form.value.password);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
          }
        }]);

        return SignUpComponent;
      }();

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["ng-component"]],
        decls: 25,
        vars: 0,
        consts: [[1, "container"], [1, "large", "primary"], [1, "lead"], [1, "fas", "fa-user"], [1, "hide-mobile"], [1, "form", 3, "submit"], ["signupForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Full Name", "name", "name", "ngModel", ""], ["type", "text", "placeholder", "Email Address", "name", "email", "ngModel", ""], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", ""], ["type", "password", "placeholder", "Confirm Password", "name", "password2", "ngModel", ""], ["type", "submit", "value", "Register", 1, "my-1", "btn", "bg-primary"], ["routerLink", "/login"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Create Your Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignUpComponent_Template_form_submit_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.onSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Already have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "Footer");
          }
        },
        directives: [_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Gxf1":
    /*!*************************************************************!*\
      !*** ./src/app/components/taskboard/taskboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: TaskBoardComponent */

    /***/
    function Gxf1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskBoardComponent", function () {
        return TaskBoardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/project-task.service */
      "gYdh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _project_task_item_project_task_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./project-task-item/project-task-item.component */
      "klJl");

      function TaskBoardComponent_NotAuthorized_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "NotAuthorized");
        }
      }

      function TaskBoardComponent_div_1_ProjectTaskItem_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ProjectTaskItem", 11);
        }

        if (rf & 2) {
          var projectTask_r5 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectTask", projectTask_r5)("project", ctx_r2.id);
        }
      }

      function TaskBoardComponent_div_1_ProjectTaskItem_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ProjectTaskItem", 11);
        }

        if (rf & 2) {
          var projectTask_r6 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectTask", projectTask_r6)("project", ctx_r3.id);
        }
      }

      function TaskBoardComponent_div_1_ProjectTaskItem_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ProjectTaskItem", 11);
        }

        if (rf & 2) {
          var projectTask_r7 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectTask", projectTask_r7)("project", ctx_r4.id);
        }
      }

      var _c0 = function _c0(a1) {
        return ["../../create-project-task", a1];
      };

      function TaskBoardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Create Project Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " TODO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskBoardComponent_div_1_ProjectTaskItem_12_Template, 1, 2, "ProjectTaskItem", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " IN-PROGRESS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskBoardComponent_div_1_ProjectTaskItem_17_Template, 1, 2, "ProjectTaskItem", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " DONE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskBoardComponent_div_1_ProjectTaskItem_22_Template, 1, 2, "ProjectTaskItem", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.todoItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.inProgressItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.doneItems);
        }
      }

      var TaskBoardComponent = /*#__PURE__*/function () {
        function TaskBoardComponent(authService, projectService, route, router, projectTaskService) {
          _classCallCheck(this, TaskBoardComponent);

          this.authService = authService;
          this.projectService = projectService;
          this.route = route;
          this.router = router;
          this.projectTaskService = projectTaskService;
          this.todoItems = [];
          this.inProgressItems = [];
          this.doneItems = [];
        }

        _createClass(TaskBoardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this6.isAuthenticated = authState.isAuthenticated;
            });
            this.projectStateSub = this.projectService.getProjectStateSubject().subscribe(function (projectState) {
              if (projectState.loadedProject && projectState.project === null) {
                _this6.projectService.resetState();

                _this6.router.navigate(["/NotFound"]);
              } else {
                _this6.projectTaskService.getProjectTasks(_this6.id);
              }
            });
            this.routeSub = this.route.params.subscribe(function (params) {
              _this6.projectService.getProject(params["id"]);

              _this6.id = params["id"];
            });
            this.projectTaskState = this.projectTaskService.getCurrentProjectTaskState();
            this.projectTaskStateSub = this.projectTaskService.getProjectTaskStateSubject().subscribe(function (projectTaskState) {
              _this6.todoItems = [];
              _this6.inProgressItems = [];
              _this6.doneItems = [];
              _this6.projectTaskState = projectTaskState;

              for (var i = 0; i < _this6.projectTaskState.projectTasks.length; i++) {
                if (_this6.projectTaskState.projectTasks[i].status === "TO DO") {
                  _this6.todoItems.push(_this6.projectTaskState.projectTasks[i]);
                }

                if (_this6.projectTaskState.projectTasks[i].status === "IN PROGRESS") {
                  _this6.inProgressItems.push(_this6.projectTaskState.projectTasks[i]);
                }

                if (_this6.projectTaskState.projectTasks[i].status === "DONE") {
                  _this6.doneItems.push(_this6.projectTaskState.projectTasks[i]);
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
            this.projectStateSub.unsubscribe();
            this.routeSub.unsubscribe();
            this.projectTaskStateSub.unsubscribe();
          }
        }]);

        return TaskBoardComponent;
      }();

      TaskBoardComponent.ɵfac = function TaskBoardComponent_Factory(t) {
        return new (t || TaskBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_4__["ProjectTaskService"]));
      };

      TaskBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TaskBoardComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "container"], [1, "btn", "bg-light", "dark", 3, "routerLink"], [1, "fas", "fa-plus-circle"], [1, "my-1"], [1, "project-task"], [1, "project-task-category", "bg-dark"], [1, "white"], [3, "projectTask", "project", 4, "ngFor", "ngForOf"], [1, "project-task-category", "bg-primary"], [1, "project-task-category", "bg-success"], [3, "projectTask", "project"]],
        template: function TaskBoardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskBoardComponent_NotAuthorized_0_Template, 1, 0, "NotAuthorized", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskBoardComponent_div_1_Template, 23, 6, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__["NotAuthorizedComponent"], _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _project_task_item_project_task_item_component__WEBPACK_IMPORTED_MODULE_8__["ProjectTaskItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "H3jT":
    /*!**************************************************************!*\
      !*** ./src/app/components/layout/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function H3jT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      };

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["Footer"]],
        decls: 20,
        vars: 0,
        consts: [[1, "footer", "hide-mobile"], [1, "item"], [1, "footer-links"], ["href", "https://vincent-yang.com"], ["href", "https://github.com/Yangv19"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Author: Vincent Yang");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Personal Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Github");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 647-636-3461");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " v6yang@uwaterloo.ca");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "HzFZ":
    /*!**********************************************************!*\
      !*** ./src/app/components/auth/login/login.component.ts ***!
      \**********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function HzFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "H3jT");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(authService, alertService, router) {
          _classCallCheck(this, LoginComponent);

          this.authService = authService;
          this.alertService = alertService;
          this.router = router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this7.isAuthenticated = authState.isAuthenticated;

              if (_this7.isAuthenticated) {
                _this7.router.navigate(["/"]);
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            this.authService.login(form.value.email, form.value.password);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["ng-component"]],
        decls: 21,
        vars: 0,
        consts: [[1, "container"], [1, "large", "primary"], [1, "lead"], [1, "fas", "fa-user"], [1, "hide-mobile"], [1, "form", 3, "submit"], ["loginForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Email Address", "name", "email", "ngModel", ""], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", ""], ["type", "submit", "value", "Login", 1, "btn", "bg-primary"], [1, "my-1"], ["routerLink", "/register"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sign Into Your Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_8_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return ctx.onSubmit(_r0);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Don\"t have an account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "Footer");
          }
        },
        directives: [_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "ITEp":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/basic/not-authorized/not-authorized.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NotAuthorizedComponent */

    /***/
    function ITEp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotAuthorizedComponent", function () {
        return NotAuthorizedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../layout/footer/footer.component */
      "H3jT");

      var NotAuthorizedComponent = function NotAuthorizedComponent() {
        _classCallCheck(this, NotAuthorizedComponent);
      };

      NotAuthorizedComponent.ɵfac = function NotAuthorizedComponent_Factory(t) {
        return new (t || NotAuthorizedComponent)();
      };

      NotAuthorizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotAuthorizedComponent,
        selectors: [["NotAuthorized"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container", "full"], [1, "large", "text-primary"], [1, "fas", "fa-skull-crossbones"], [1, "lead"]],
        template: function NotAuthorizedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Alert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 401 Not Authorized");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sorry you are not authorized to view this page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "Footer");
          }
        },
        directives: [_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Lquv":
    /*!*************************************************************!*\
      !*** ./src/app/components/dashboard/dashboard.component.ts ***!
      \*************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function Lquv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../layout/spinner/spinner.component */
      "dmXF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./project-item/project-item.component */
      "pLSj");

      function DashboardComponent_NotAuthorized_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "NotAuthorized");
        }
      }

      function DashboardComponent_div_1_Spinner_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Spinner");
        }
      }

      function DashboardComponent_div_1_section_3_ProjectItem_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ProjectItem", 8);
        }

        if (rf & 2) {
          var project_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", project_r5);
        }
      }

      function DashboardComponent_div_1_section_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Projects ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Create A Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_1_section_3_ProjectItem_7_Template, 1, 1, "ProjectItem", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.projectState.projects);
        }
      }

      function DashboardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Spinner_1_Template, 1, 0, "Spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_1_section_3_Template, 8, 1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.projectState.loadedProjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.projectState.loadedProjects);
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(authService, projectService) {
          _classCallCheck(this, DashboardComponent);

          this.authService = authService;
          this.projectService = projectService;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this8.isAuthenticated = authState.isAuthenticated;
            });
            this.projectState = this.projectService.getCurrentProjectState();
            this.projectStateSub = this.projectService.getProjectStateSubject().subscribe(function (projectState) {
              _this8.projectState = projectState;
            });
            this.projectService.getProjects();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
            this.projectStateSub.unsubscribe();
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "x-large", "center"], ["routerLink", "../create-project", 1, "btn", "bg-light", "dark"], [1, "fas", "fa-plus-circle"], [1, "my-1"], [3, "project", 4, "ngFor", "ngForOf"], [3, "project"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_NotAuthorized_0_Template, 1, 0, "NotAuthorized", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 4, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__["NotAuthorizedComponent"], _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_8__["ProjectItemComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "RiFp":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/taskboard/update-project-task/update-project-task.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UpdateProjectTaskComponent */

    /***/
    function RiFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateProjectTaskComponent", function () {
        return UpdateProjectTaskComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/project-task.service */
      "gYdh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");

      function UpdateProjectTaskComponent_NotAuthorized_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "NotAuthorized");
        }
      }

      function UpdateProjectTaskComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Update Project Task Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Update This Project Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function UpdateProjectTaskComponent_div_1_Template_form_submit_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "                    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Due Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Select Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "HIGH");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "MEDIUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "LOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Select Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "TO DO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "IN PROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "DONE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
        }
      }

      var UpdateProjectTaskComponent = /*#__PURE__*/function () {
        function UpdateProjectTaskComponent(authService, route, router, projectTaskService) {
          _classCallCheck(this, UpdateProjectTaskComponent);

          this.authService = authService;
          this.route = route;
          this.router = router;
          this.projectTaskService = projectTaskService;
        }

        _createClass(UpdateProjectTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
              summary: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              criteria: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              due: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null),
              status: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null)
            });
            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this9.isAuthenticated = authState.isAuthenticated;
            });
            this.projectTaskStateSub = this.projectTaskService.getProjectTaskStateSubject().subscribe(function (projectTaskState) {
              _this9.projectTaskState = projectTaskState;

              if (projectTaskState.loadedProjectTask && projectTaskState.projectTask === null) {
                _this9.projectTaskService.resetState();

                _this9.router.navigate(["/NotFound"]);
              } else {
                _this9.form.setValue({
                  summary: projectTaskState.projectTask.summary,
                  criteria: projectTaskState.projectTask.criteria,
                  due: projectTaskState.projectTask.due,
                  priority: projectTaskState.projectTask.priority,
                  status: projectTaskState.projectTask.status
                });
              }
            });
            this.routeSub = this.route.params.subscribe(function (params) {
              _this9.projectTaskService.getProjectTask(params["projectId"], params["projectTaskId"]);

              _this9.id = params["projectId"];
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.projectTaskService.updateProjectTask(this.id, this.projectTaskState.projectTask.id, this.form.value.summary, this.form.value.criteria, this.form.value.due, this.form.value.priority, this.form.value.status);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
            this.routeSub.unsubscribe();
            this.projectTaskStateSub.unsubscribe();
          }
        }]);

        return UpdateProjectTaskComponent;
      }();

      UpdateProjectTaskComponent.ɵfac = function UpdateProjectTaskComponent_Factory(t) {
        return new (t || UpdateProjectTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_4__["ProjectTaskService"]));
      };

      UpdateProjectTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: UpdateProjectTaskComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "container"], [1, "large", "primary", "my-1"], [1, "lead"], [1, "fas", "fa-pen"], [1, "hide-mobile"], [1, "form", 3, "formGroup", "submit"], [1, "form-group"], ["type", "text", "placeholder", "Project Task summary", "formControlName", "summary"], ["placeholder", "Acceptance Criteria", "cols", "30", "rows", "5", "formControlName", "criteria"], ["type", "date", "formControlName", "due"], ["className", "form-group"], ["formControlName", "priority"], ["value", ""], ["value", "HIGH"], ["value", "MEDIUM"], ["value", "LOW"], ["formControlName", "status"], ["value", "TO DO"], ["value", "IN PROGRESS"], ["value", "DONE"], ["type", "submit", 1, "my-1", "btn", "bg-primary"]],
        template: function UpdateProjectTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UpdateProjectTaskComponent_NotAuthorized_0_Template, 1, 0, "NotAuthorized", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UpdateProjectTaskComponent_div_1_Template, 40, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__["NotAuthorizedComponent"], _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./services/auth.service */
      "lGQG");
      /* harmony import */


      var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/layout/navbar/navbar.component */
      "zbeM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.token) {
              this.authService.loadUser();
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "W0X1":
    /*!***********************************************!*\
      !*** ./src/app/routing/app-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function W0X1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/auth/login/login.component */
      "HzFZ");
      /* harmony import */


      var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/auth/signup/signup.component */
      "G19n");
      /* harmony import */


      var _components_basic_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/basic/landing/landing.component */
      "0E4G");
      /* harmony import */


      var _components_basic_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/basic/not-found/not-found.component */
      "Ce6/");
      /* harmony import */


      var _components_dashboard_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/dashboard/create-project/create-project.component */
      "giZg");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_dashboard_update_project_update_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/dashboard/update-project/update-project.component */
      "7mUt");
      /* harmony import */


      var _components_taskboard_create_project_task_create_project_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/taskboard/create-project-task/create-project-task.component */
      "s4UD");
      /* harmony import */


      var _components_taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/taskboard/taskboard.component */
      "Gxf1");
      /* harmony import */


      var _components_taskboard_update_project_task_update_project_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components/taskboard/update-project-task/update-project-task.component */
      "RiFp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _components_basic_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
      }, {
        path: "register",
        component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]
      }, {
        path: "login",
        component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
      }, {
        path: "dashboard",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
      }, {
        path: "create-project",
        component: _components_dashboard_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_5__["CreateProjectComponent"]
      }, {
        path: "update-project/:id",
        component: _components_dashboard_update_project_update_project_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProjectComponent"]
      }, {
        path: "taskboard/:id",
        component: _components_taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_9__["TaskBoardComponent"]
      }, {
        path: "create-project-task/:id",
        component: _components_taskboard_create_project_task_create_project_task_component__WEBPACK_IMPORTED_MODULE_8__["CreateProjectTaskComponent"]
      }, {
        path: "update-project-task/:projectId/:projectTaskId",
        component: _components_taskboard_update_project_task_update_project_task_component__WEBPACK_IMPORTED_MODULE_10__["UpdateProjectTaskComponent"]
      }, {
        path: "**",
        component: _components_basic_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/error.service */
      "9vc0");
      /* harmony import */


      var _services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/header.service */
      "hErN");
      /* harmony import */


      var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/layout/navbar/navbar.component */
      "zbeM");
      /* harmony import */


      var _components_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/layout/footer/footer.component */
      "H3jT");
      /* harmony import */


      var _components_basic_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/basic/landing/landing.component */
      "0E4G");
      /* harmony import */


      var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./routing/app-routing.module */
      "W0X1");
      /* harmony import */


      var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/auth/signup/signup.component */
      "G19n");
      /* harmony import */


      var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/auth/login/login.component */
      "HzFZ");
      /* harmony import */


      var _components_basic_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/basic/not-found/not-found.component */
      "Ce6/");
      /* harmony import */


      var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.component */
      "Lquv");
      /* harmony import */


      var _components_basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _components_layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/layout/spinner/spinner.component */
      "dmXF");
      /* harmony import */


      var _components_dashboard_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/dashboard/project-item/project-item.component */
      "pLSj");
      /* harmony import */


      var _components_dashboard_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/dashboard/create-project/create-project.component */
      "giZg");
      /* harmony import */


      var _components_dashboard_update_project_update_project_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/dashboard/update-project/update-project.component */
      "7mUt");
      /* harmony import */


      var _components_taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/taskboard/taskboard.component */
      "Gxf1");
      /* harmony import */


      var _components_taskboard_project_task_item_project_task_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/taskboard/project-task-item/project-task-item.component */
      "klJl");
      /* harmony import */


      var _components_taskboard_create_project_task_create_project_task_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/taskboard/create-project-task/create-project-task.component */
      "s4UD");
      /* harmony import */


      var _components_taskboard_update_project_task_update_project_task_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/taskboard/update-project-task/update-project-task.component */
      "RiFp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
          useClass: _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_basic_landing_landing_component__WEBPACK_IMPORTED_MODULE_9__["LandingComponent"], _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"], _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _components_basic_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"], _components_basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_15__["NotAuthorizedComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _components_layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_16__["SpinnerComponent"], _components_dashboard_project_item_project_item_component__WEBPACK_IMPORTED_MODULE_17__["ProjectItemComponent"], _components_dashboard_create_project_create_project_component__WEBPACK_IMPORTED_MODULE_18__["CreateProjectComponent"], _components_dashboard_update_project_update_project_component__WEBPACK_IMPORTED_MODULE_19__["UpdateProjectComponent"], _components_taskboard_taskboard_component__WEBPACK_IMPORTED_MODULE_20__["TaskBoardComponent"], _components_taskboard_project_task_item_project_task_item_component__WEBPACK_IMPORTED_MODULE_21__["ProjectTaskItemComponent"], _components_taskboard_create_project_task_create_project_task_component__WEBPACK_IMPORTED_MODULE_22__["CreateProjectTaskComponent"], _components_taskboard_update_project_task_update_project_task_component__WEBPACK_IMPORTED_MODULE_23__["UpdateProjectTaskComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "c3AT":
    /*!*********************************************!*\
      !*** ./src/app/services/project.service.ts ***!
      \*********************************************/

    /*! exports provided: ProjectService */

    /***/
    function c3AT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
        return ProjectService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].proxy;

      var ProjectService = /*#__PURE__*/function () {
        function ProjectService(http, alertService, router) {
          _classCallCheck(this, ProjectService);

          this.http = http;
          this.alertService = alertService;
          this.router = router;
          this.projectStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.initialState = {
            projects: [],
            project: null,
            loadedProjects: false,
            loadedProject: false
          };
          this.currentState = Object.assign({}, this.initialState);
        }

        _createClass(ProjectService, [{
          key: "getCurrentProjectState",
          value: function getCurrentProjectState() {
            return this.currentState;
          }
        }, {
          key: "getProjectStateSubject",
          value: function getProjectStateSubject() {
            return this.projectStateSubject.asObservable();
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            var _this10 = this;

            this.http.get(BACKEND_URL + "/api/projects").subscribe(function (res) {
              _this10.currentState = Object.assign(Object.assign({}, _this10.currentState), {
                projects: res,
                loadedProjects: true
              });

              _this10.projectStateSubject.next(Object.assign({}, _this10.currentState));
            });
          }
        }, {
          key: "deleteProject",
          value: function deleteProject(id) {
            var _this11 = this;

            this.http["delete"](BACKEND_URL + "/api/projects/" + id).subscribe(function (res) {
              _this11.alertService.setAlert("Post Removed", "success");

              _this11.getProjects();
            });
          }
        }, {
          key: "createProject",
          value: function createProject(name, description, begin, end) {
            var _this12 = this;

            var formData = {
              name: name,
              description: description,
              begin: begin,
              end: end
            };
            this.http.post(BACKEND_URL + "/api/projects", formData).subscribe(function (res) {
              _this12.alertService.setAlert("Project Created", "success");

              _this12.router.navigate(["dashboard"]);
            });
          }
        }, {
          key: "getProject",
          value: function getProject(id) {
            var _this13 = this;

            this.http.get(BACKEND_URL + "/api/projects/" + id).subscribe(function (res) {
              _this13.currentState = Object.assign(Object.assign({}, _this13.currentState), {
                project: res,
                loadedProject: true
              });

              _this13.projectStateSubject.next(Object.assign({}, _this13.currentState));
            }, function (err) {
              _this13.currentState = Object.assign(Object.assign({}, _this13.currentState), {
                project: null,
                loadedProject: true
              });

              _this13.projectStateSubject.next(Object.assign({}, _this13.currentState));
            });
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.currentState = Object.assign({}, this.initialState);
          }
        }, {
          key: "updateProject",
          value: function updateProject(id, name, description, begin, end) {
            var _this14 = this;

            var formData = {
              name: name,
              description: description,
              begin: begin,
              end: end
            };
            this.http.patch(BACKEND_URL + "/api/projects/" + id, formData).subscribe(function (res) {
              _this14.alertService.setAlert("Post updated", "success");

              _this14.router.navigate(["dashboard"]);
            });
          }
        }]);

        return ProjectService;
      }();

      ProjectService.ɵfac = function ProjectService_Factory(t) {
        return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ProjectService,
        factory: ProjectService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "dmXF":
    /*!****************************************************************!*\
      !*** ./src/app/components/layout/spinner/spinner.component.ts ***!
      \****************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function dmXF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SpinnerComponent = function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      };

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)();
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["Spinner"]],
        decls: 1,
        vars: 0,
        consts: [["src", "assets/img/spinner.gif", "alt", "", 1, "spinner"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    "eaaq":
    /*!************************************************************!*\
      !*** ./src/app/components/layout/alert/alert.component.ts ***!
      \************************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function eaaq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AlertComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var alert_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert bg-", alert_r1.alertType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r1.msg, "\n");
        }
      }

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(alertService) {
          _classCallCheck(this, AlertComponent);

          this.alertService = alertService;
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.alerts = this.alertService.getCurrentAlertState();
            this.alertStateSub = this.alertService.getAlertStateSubject().subscribe(function (alertState) {
              _this15.alerts = alertState;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.alertStateSub.unsubscribe();
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["Alert"]],
        decls: 1,
        vars: 1,
        consts: [[3, "class", 4, "ngFor", "ngForOf"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 2, 4, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "gYdh":
    /*!**************************************************!*\
      !*** ./src/app/services/project-task.service.ts ***!
      \**************************************************/

    /*! exports provided: ProjectTaskService */

    /***/
    function gYdh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectTaskService", function () {
        return ProjectTaskService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert.service */
      "3LUQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].proxy;

      var ProjectTaskService = /*#__PURE__*/function () {
        function ProjectTaskService(http, alertService, router) {
          _classCallCheck(this, ProjectTaskService);

          this.http = http;
          this.alertService = alertService;
          this.router = router;
          this.projectTaskStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.initialState = {
            projectTasks: [],
            projectTask: null,
            loadedProjectTasks: false,
            loadedProjectTask: false
          };
          this.currentState = Object.assign({}, this.initialState);
        }

        _createClass(ProjectTaskService, [{
          key: "getCurrentProjectTaskState",
          value: function getCurrentProjectTaskState() {
            return this.currentState;
          }
        }, {
          key: "getProjectTaskStateSubject",
          value: function getProjectTaskStateSubject() {
            return this.projectTaskStateSubject.asObservable();
          }
        }, {
          key: "getProjectTasks",
          value: function getProjectTasks(id) {
            var _this16 = this;

            this.http.get(BACKEND_URL + "/api/projectTasks/" + id).subscribe(function (res) {
              _this16.currentState = Object.assign(Object.assign({}, _this16.currentState), {
                projectTasks: res,
                loadedProjectTasks: true
              });

              _this16.projectTaskStateSubject.next(Object.assign({}, _this16.currentState));
            });
          }
        }, {
          key: "deleteProjectTask",
          value: function deleteProjectTask(projectId, projectTaskId) {
            var _this17 = this;

            this.http["delete"](BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId).subscribe(function (res) {
              _this17.alertService.setAlert("Project Task Removed", "success");

              _this17.getProjectTasks(projectId);
            });
          }
        }, {
          key: "createProjectTask",
          value: function createProjectTask(projectId, summary, criteria, due, priority, status) {
            var _this18 = this;

            var formData = {
              summary: summary,
              criteria: criteria,
              due: due,
              priority: priority,
              status: status
            };
            this.http.post(BACKEND_URL + "/api/projectTasks/" + projectId, formData).subscribe(function (res) {
              _this18.alertService.setAlert("ProjectTask Created", "success");

              _this18.router.navigate(["taskboard/" + projectId]);
            });
          }
        }, {
          key: "getProjectTask",
          value: function getProjectTask(projectId, projectTaskId) {
            var _this19 = this;

            this.http.get(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId).subscribe(function (res) {
              _this19.currentState = Object.assign(Object.assign({}, _this19.currentState), {
                projectTask: res,
                loadedProjectTask: true
              });

              _this19.projectTaskStateSubject.next(Object.assign({}, _this19.currentState));
            }, function (err) {
              _this19.currentState = Object.assign(Object.assign({}, _this19.currentState), {
                projectTask: null,
                loadedProjectTask: true
              });

              _this19.projectTaskStateSubject.next(Object.assign({}, _this19.currentState));
            });
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.currentState = Object.assign({}, this.initialState);
          }
        }, {
          key: "updateProjectTask",
          value: function updateProjectTask(projectId, projectTaskId, summary, criteria, due, priority, status) {
            var _this20 = this;

            var formData = {
              summary: summary,
              criteria: criteria,
              due: due,
              priority: priority,
              status: status
            };
            this.http.patch(BACKEND_URL + "/api/projectTasks/" + projectId + "/" + projectTaskId, formData).subscribe(function (res) {
              _this20.alertService.setAlert("Project Task updated", "success");

              _this20.router.navigate(["taskboard/" + projectId]);
            });
          }
        }]);

        return ProjectTaskService;
      }();

      ProjectTaskService.ɵfac = function ProjectTaskService_Factory(t) {
        return new (t || ProjectTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ProjectTaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ProjectTaskService,
        factory: ProjectTaskService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "giZg":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/dashboard/create-project/create-project.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CreateProjectComponent */

    /***/
    function giZg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function () {
        return CreateProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CreateProjectComponent_NotAuthorized_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "NotAuthorized");
        }
      }

      function CreateProjectComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Project Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create A New Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateProjectComponent_div_1_Template_form_submit_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSubmit(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "End Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CreateProjectComponent = /*#__PURE__*/function () {
        function CreateProjectComponent(authService, projectService) {
          _classCallCheck(this, CreateProjectComponent);

          this.authService = authService;
          this.projectService = projectService;
        }

        _createClass(CreateProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this21.isAuthenticated = authState.isAuthenticated;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            this.projectService.createProject(form.value.name, form.value.description, form.value.start, form.value.end);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
          }
        }]);

        return CreateProjectComponent;
      }();

      CreateProjectComponent.ɵfac = function CreateProjectComponent_Factory(t) {
        return new (t || CreateProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]));
      };

      CreateProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateProjectComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "container"], [1, "large", "primary"], [1, "lead"], [1, "fas", "fa-plus"], [1, "hide-mobile"], [1, "form", 3, "submit"], ["createProjectForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Project Name", "name", "name", "ngModel", ""], ["type", "text", "placeholder", "Project Description", "name", "description", "ngModel", ""], ["type", "date", "name", "start", "ngModel", ""], ["type", "date", "name", "end", "ngModel", ""], ["type", "submit", 1, "my-1", "btn", "bg-primary"]],
        template: function CreateProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateProjectComponent_NotAuthorized_0_Template, 1, 0, "NotAuthorized", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProjectComponent_div_1_Template, 23, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_4__["NotAuthorizedComponent"], _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "hErN":
    /*!********************************************!*\
      !*** ./src/app/services/header.service.ts ***!
      \********************************************/

    /*! exports provided: HeaderInterceptor */

    /***/
    function hErN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function () {
        return HeaderInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderInterceptor = /*#__PURE__*/function () {
        function HeaderInterceptor() {
          _classCallCheck(this, HeaderInterceptor);
        }

        _createClass(HeaderInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            if (localStorage.token) {
              var authRequest = req.clone({
                headers: req.headers.set("x-auth-token", localStorage.token)
              });
              return next.handle(authRequest);
            }

            return next.handle(req);
          }
        }]);

        return HeaderInterceptor;
      }();

      HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) {
        return new (t || HeaderInterceptor)();
      };

      HeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HeaderInterceptor,
        factory: HeaderInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "klJl":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/taskboard/project-task-item/project-task-item.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ProjectTaskItemComponent */

    /***/
    function klJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectTaskItemComponent", function () {
        return ProjectTaskItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/project-task.service */
      "gYdh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1, a2) {
        return ["../../update-project-task", a1, a2];
      };

      var ProjectTaskItemComponent = /*#__PURE__*/function () {
        function ProjectTaskItemComponent(projectTaskService) {
          _classCallCheck(this, ProjectTaskItemComponent);

          this.projectTaskService = projectTaskService;
        }

        _createClass(ProjectTaskItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.projectTask.priority === "HIGH") {
              this.priorityClass = "bg-danger";
            }

            ;

            if (this.projectTask.priority === "MEDIUM") {
              this.priorityClass = "bg-yellow";
            }

            ;

            if (this.projectTask.priority === "LOW") {
              this.priorityClass = "bg-light-blue";
            }

            ;
          }
        }, {
          key: "onClick",
          value: function onClick(projectId, projectTaskId) {
            this.projectTaskService.deleteProjectTask(projectId, projectTaskId);
          }
        }]);

        return ProjectTaskItemComponent;
      }();

      ProjectTaskItemComponent.ɵfac = function ProjectTaskItemComponent_Factory(t) {
        return new (t || ProjectTaskItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_1__["ProjectTaskService"]));
      };

      ProjectTaskItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectTaskItemComponent,
        selectors: [["ProjectTaskItem"]],
        inputs: {
          projectTask: "projectTask",
          project: "project"
        },
        decls: 13,
        vars: 11,
        consts: [[1, "bg-gray", "project-task-item"], [1, "btn", "bg-primary", 3, "routerLink"], [1, "btn", "bg-danger", 3, "click"]],
        template: function ProjectTaskItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Update ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectTaskItemComponent_Template_div_click_11_listener() {
              return ctx.onClick(ctx.project, ctx.projectTask.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.priorityClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Priority: ", ctx.projectTask.priority, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectTask.summary);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.projectTask.criteria);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Deadline: ", ctx.projectTask.due.slice(0, 10), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.project, ctx.projectTask.id));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "lGQG":
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /*! exports provided: AuthService */

    /***/
    function lGQG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].proxy;

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.authStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.initialAuthState = {
            isAuthenticated: false,
            user: null
          };
          this.currentState = Object.assign({}, this.initialAuthState);
        }

        _createClass(AuthService, [{
          key: "loadUser",
          value: function loadUser() {
            var _this22 = this;

            this.http.get(BACKEND_URL + "/api/users").subscribe(function (res) {
              _this22.currentState.isAuthenticated = true;
              _this22.currentState.user = res;

              _this22.authStateSubject.next({
                isAuthenticated: true,
                user: res
              });
            });
          }
        }, {
          key: "getCurrentAuthState",
          value: function getCurrentAuthState() {
            return this.currentState;
          }
        }, {
          key: "getAuthStateSubject",
          value: function getAuthStateSubject() {
            return this.authStateSubject.asObservable();
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem("token");
            this.currentState = Object.assign({}, this.initialAuthState);
            this.authStateSubject.next(this.initialAuthState);
          }
        }, {
          key: "signup",
          value: function signup(name, email, password) {
            var _this23 = this;

            var formData = {
              name: name,
              email: email,
              password: password
            };
            this.http.post(BACKEND_URL + "/api/users/register", formData).subscribe(function (res) {
              localStorage.setItem("token", res.token);

              _this23.loadUser();
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this24 = this;

            var formData = {
              email: email,
              password: password
            };
            this.http.post(BACKEND_URL + "/api/users/login", formData).subscribe(function (res) {
              localStorage.setItem("token", res.token);

              _this24.loadUser();
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "pLSj":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/dashboard/project-item/project-item.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProjectItemComponent */

    /***/
    function pLSj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectItemComponent", function () {
        return ProjectItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0(a1) {
        return ["../taskboard", a1];
      };

      var _c1 = function _c1(a1) {
        return ["../update-project", a1];
      };

      var ProjectItemComponent = /*#__PURE__*/function () {
        function ProjectItemComponent(projectService) {
          _classCallCheck(this, ProjectItemComponent);

          this.projectService = projectService;
        }

        _createClass(ProjectItemComponent, [{
          key: "onClick",
          value: function onClick(id) {
            this.projectService.deleteProject(id);
          }
        }]);

        return ProjectItemComponent;
      }();

      ProjectItemComponent.ɵfac = function ProjectItemComponent_Factory(t) {
        return new (t || ProjectItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]));
      };

      ProjectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectItemComponent,
        selectors: [["ProjectItem"]],
        inputs: {
          project: "project"
        },
        decls: 25,
        vars: 9,
        consts: [[1, "project"], [1, "project-1"], [1, "lead"], [1, "gray"], [1, "project-button", "light", 3, "routerLink"], [1, "fa", "fa-flag-checkered"], [1, "hide-mobile"], [1, "project-button", "success", 3, "routerLink"], [1, "fa", "fa-edit"], [1, "project-button", "danger"], [1, "fa", "fa-minus-circle"], [1, "hide-mobile", 3, "click"]],
        template: function ProjectItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Deadline:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Project Board ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Update Project Info ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectItemComponent_Template_span_click_23_listener() {
              return ctx.onClick(ctx.project.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Delete Project ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.end.slice(0, 10));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.project.id));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.project.id));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "s4UD":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/taskboard/create-project-task/create-project-task.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CreateProjectTaskComponent */

    /***/
    function s4UD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateProjectTaskComponent", function () {
        return CreateProjectTaskComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/project.service */
      "c3AT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/project-task.service */
      "gYdh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../basic/not-authorized/not-authorized.component */
      "ITEp");
      /* harmony import */


      var _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../layout/alert/alert.component */
      "eaaq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CreateProjectTaskComponent_NotAuthorized_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "NotAuthorized");
        }
      }

      function CreateProjectTaskComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "Alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create Project Task Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create A New Project Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateProjectTaskComponent_div_1_Template_form_submit_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onSubmit(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "                ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Due Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select Priority");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "HIGH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MEDIUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "LOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "TO DO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "IN PROGRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DONE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CreateProjectTaskComponent = /*#__PURE__*/function () {
        function CreateProjectTaskComponent(authService, projectService, route, router, projectTaskService) {
          _classCallCheck(this, CreateProjectTaskComponent);

          this.authService = authService;
          this.projectService = projectService;
          this.route = route;
          this.router = router;
          this.projectTaskService = projectTaskService;
        }

        _createClass(CreateProjectTaskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this25.isAuthenticated = authState.isAuthenticated;
            });
            this.projectStateSub = this.projectService.getProjectStateSubject().subscribe(function (projectState) {
              if (projectState.loadedProject && projectState.project === null) {
                _this25.projectService.resetState();

                _this25.router.navigate(["/NotFound"]);
              }
            });
            this.routeSub = this.route.params.subscribe(function (params) {
              _this25.projectService.getProject(params["id"]);

              _this25.id = params["id"];
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            this.projectTaskService.createProjectTask(this.id, form.value.summary, form.value.criteria, form.value.due, form.value.priority, form.value.status);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
            this.projectStateSub.unsubscribe();
            this.routeSub.unsubscribe();
          }
        }]);

        return CreateProjectTaskComponent;
      }();

      CreateProjectTaskComponent.ɵfac = function CreateProjectTaskComponent_Factory(t) {
        return new (t || CreateProjectTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_task_service__WEBPACK_IMPORTED_MODULE_4__["ProjectTaskService"]));
      };

      CreateProjectTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateProjectTaskComponent,
        selectors: [["ng-component"]],
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [1, "container"], [1, "large", "primary", "my-1"], [1, "lead"], [1, "fas", "fa-plus"], [1, "hide-mobile"], [1, "form", 3, "submit"], ["createProjectTaskForm", "ngForm"], [1, "form-group"], ["type", "text", "placeholder", "Project Task summary", "name", "summary", "ngModel", ""], ["placeholder", "Acceptance Criteria", "cols", "30", "rows", "5", "name", "criteria", "ngModel", ""], ["type", "date", "name", "due", "ngModel", ""], ["name", "priority", "ngModel", ""], ["value", ""], ["value", "HIGH"], ["value", "MEDIUM"], ["value", "LOW"], ["name", "status", "ngModel", ""], ["value", "TO DO"], ["value", "IN PROGRESS"], ["value", "DONE"], ["type", "submit", 1, "my-1", "btn", "bg-primary"]],
        template: function CreateProjectTaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CreateProjectTaskComponent_NotAuthorized_0_Template, 1, 0, "NotAuthorized", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProjectTaskComponent_div_1_Template, 41, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _basic_not_authorized_not_authorized_component__WEBPACK_IMPORTED_MODULE_6__["NotAuthorizedComponent"], _layout_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zbeM":
    /*!**************************************************************!*\
      !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
      \**************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function zbeM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavbarComponent_ul_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_6_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(authService) {
          _classCallCheck(this, NavbarComponent);

          this.authService = authService;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.isAuthenticated = this.authService.getCurrentAuthState().isAuthenticated;
            this.authStateSub = this.authService.getAuthStateSubject().subscribe(function (authState) {
              _this26.isAuthenticated = authState.isAuthenticated;
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authStateSub.unsubscribe();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["Navbar"]],
        decls: 8,
        vars: 2,
        consts: [[1, "navbar", "bg-primary"], ["routerLink", "/"], [1, "fas", "fa-tasks"], [1, "hide-mobile"], [4, "ngIf"], ["routerLink", "/dashboard"], [1, "fas", "fa-columns"], [3, "click"], [1, "fas", "fa-sign-out-alt"], ["routerLink", "/register"], [1, "fas", "fa-plus"], ["routerLink", "/login"], [1, "fas", "fa-sign-in-alt"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Personal Project Management Tool");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_ul_6_Template, 11, 0, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_ul_7_Template, 11, 0, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map