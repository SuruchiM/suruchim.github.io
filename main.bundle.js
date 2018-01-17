webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.NumberInput\r\n{\r\n    color: gray;\r\n    width: 60%;\r\n}\r\n\r\n.Input{\r\n    width: 60%;\r\n}\r\n\r\n.FixedHeader_DataGrid\r\n{\r\n    border: 1px solid lightblue;\r\n    \r\n}\r\n\r\n.SearchDiv\r\n{\r\n    font-size: 12px;\r\n}\r\n\r\n.DataGrid{\r\n    border: 1px solid lightblue;    \r\n}\r\n\r\n.GridHeader{\r\n    border: 0px solid lightblue;\r\n    font: caption;\r\n    background-color: lightblue;\r\n    overflow-y: hidden;\r\n    font-size: 12px;\r\n}\r\n\r\n.GridBody\r\n{\r\n    border: 0px solid black;\r\n    font-size: 11px;\r\n}\r\n\r\n.CellStyle{\r\n    font-size: 11px;\r\n    border: 0px solid black;\r\n}\r\n\r\n.Login{\r\n    -ms-flex-item-align: center;\r\n        align-self: center;\r\n}\r\n\r\n.Default{\r\n    background-color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;\" [hidden]=\"isAuthenticated\" >\n  <h2>\n    Welcome to {{ title }}!\n  </h2>\n  <img src=\"assets\\medical-background.png\" alt=\"test\" style=\"width:100%\">\n  \n</div>\n<body>\n    <div [hidden]=\"isAuthenticated\" style=\"text-align:center\">\n        <table class =\"DataGrid\">\n          <tr>\n            <td><label id=\"lblUserName\" for=\"txtUserName\">UserName</label></td>\n            <td><input id=\"txtPassword\" type=\"text\" [(ngModel)]=\"userName\" required=\"required\"/></td>\n          </tr>\n          <tr>\n              <td><label id=\"lblPassword\" for=\"txtPassword\">Password</label></td>\n              <td><input id=\"txtPassword\" type=\"text\" [(ngModel)]=\"userPassword\" required=\"required\"/></td>\n          </tr>\n          <tr>\n            <button id= \"btnLogin\" (click)=\"Login()\">Login</button>\n          </tr>\n        </table>   \n  </div>\n  <div [hidden]=\"!isAuthenticated\">\n    <div style=\"color: blue\">Welcome <b>{{userName}} !</b>&nbsp; Select the Filter Criterias to Search the Providers.\n    </div>\n    <br/>\n    <div>\n      <table class=\"SearchDiv\"><tr><td>\n    <table >\n      <tr>\n        <td>\n          Discharges:&nbsp;\n        </td>\n        <td>\n            <input id=\"txtMinDischarges\" type=\"text\"  placeholder = \"<<Min>>\" class=\"Input\" [(ngModel)]=\"minDischarges\" (change)=\"CheckValue('minDischarges')\"/>\n        </td>\n        <td>\n            <input id=\"txtMaxDischarges\" type=\"text\"  placeholder = \"<<Max>>\" class=\"Input\" [(ngModel)]=\"maxDischarges\" (change)=\"CheckValue('maxDischarges')\"/>\n        </td>\n      </tr>\n      <tr>\n          <td>\n            Average Covered Charges:&nbsp;\n          </td>\n          <td>\n              <input id=\"txtMinAvgCoveredCharges\" type=\"text\"  placeholder = \"<<Min>>\" class=\"Input\" [(ngModel)]=\"minAvgCoveredCharges\" (change)=\"CheckValue('minAvgCoveredCharges')\"/>\n          </td>\n          <td>\n              <input id=\"txtMaxAvgCoveredCharges\" type=\"text\" placeholder = \"<<Max>>\" class=\"Input\" [(ngModel)]=\"maxAvgCoveredCharges\" (change)=\"CheckValue('maxAvgCoveredCharges')\"/>\n          </td>\n        </tr>\n        <tr>\n            <td>\n              Average Medicare Payments:&nbsp;\n            </td>\n            <td>\n                <input id=\"txtMinAvgMedicarePayments\" type=\"text\"  placeholder = \"<<Min>>\" class=\"Input\" [(ngModel)]=\"minAvgMedicarePayments\" (change)=\"CheckValue('minAvgMedicarePayments')\"/>\n            </td>\n            <td>\n                <input id=\"txtMaxAvgMedicarePayments\" type=\"text\"  placeholder = \"<<Max>>\" class=\"Input\" [(ngModel)]=\"maxAvgMedicarePayments\" (change)=\"CheckValue('maxAvgMedicarePayments')\"/>\n            </td>\n          </tr>\n          <tr>\n              <td>\n                State:&nbsp;\n              </td>\n              <td>\n                  <input id=\"txtState\" type=\"text\"  value = \"\" class=\"Input\" [(ngModel)]=\"state\"/>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <button id= \"btnSearch\" (click)=\"SearchClick()\">Search</button>\n                &nbsp;\n                  <button id= \"btnReset\" (click)=\"ResetClick()\">Reset</button>\n                </td>\n            </tr>\n    </table></td>\n    <td>\n      <table>\n        <tr>\n          <td>\n             Select List of Columns to be displayed in the grid:\n          </td>\n        </tr>\n        <tr>\n            <td> <input type=\"checkbox\" checked = \"checked\"  (click) = \"CheckboxSelection('Provider Name')\">Provider Name</td>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Provider Street Address')\">Provider Street Address</td>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Provider City')\">Provider City</td>\n        </tr>\n        <tr>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Provider State')\">Provider State</td>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Provider Zip Code')\">Provider Zip Code</td>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Hospital Referral Region Description')\">Hospital Referral Region Description</td>\n        </tr>\n        <tr>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Total Discharges')\">Total Discharges</td>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Average Covered Charges')\">Average Covered Charges</td>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Average Total Payments')\">Average Total Payments</td>\n        </tr>\n        <tr>\n            <td> <input type=\"checkbox\" checked=\"checked\" (click) = \"CheckboxSelection('Average Medicare Payments')\">Average Medicare Payments</td>\n        </tr>\n      </table>\n    </td>\n    </tr>\n      </table>\n  </div>\n  <div style=\"text-align:center\" [hidden] = \"isResultsLoaded\">\n    <img src=\"assets\\spinner.gif\" alt=\"Loading Search Results\" style=\"width:4%\">\n  </div>\n    <div >\n      <table class=\"DataGrid\" style=\"height:400px;display:block;overflow:scroll\">\n        <thead class=\"GridHeader\">\n          <tr>\n              <th *ngFor=\"let data of displayColumns\">{{data.DisplayName}}</th>\n          </tr>\n        </thead>\n        <tbody class=\"GridBody\">\n          <tr *ngFor= \"let data of gridData\">\n              <td class =\"CellStyle\" *ngFor=\"let displayCols of displayColumns\">{{data[displayCols.Key]}}</td>\n          </tr>\n        </tbody>\n      </table>\n      </div>\n      <div style=\"text-align:right\">\n        <button type=\"button\" (click) = \"PageLinkClick('first')\" >first</button>\n        <button type=\"button\" (click) = \"PageLinkClick('prev')\" >prev</button>\n        <button type=\"button\" (click) = \"PageLinkClick('next')\" >next</button>\n        <button type=\"button\" (click) = \"PageLinkClick('last')\" >last</button>\n        Total Records : {{providerDataAll.length}}\n        </div>\n  </div>\n</body>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__provider_data_service__ = __webpack_require__("../../../../../src/app/provider-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_providerDataService, _loginService) {
        this._providerDataService = _providerDataService;
        this._loginService = _loginService;
        this.title = 'National HealthCare Provider';
        this.isAuthenticated = false;
        this.isResultsLoaded = true;
        this.gridPageSize = parseInt(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].pageSize);
        this.columnAll = [
            { "DisplayName": "Provider Name", "Key": "Provider Name" },
            { "DisplayName": "Provider Street Address", "Key": "Provider Street Address" },
            { "DisplayName": "Provider City", "Key": "Provider City" },
            { "DisplayName": "Provider State", "Key": "Provider State" },
            { "DisplayName": "Provider Zip Code", "Key": "Provider Zip Code" },
            { "DisplayName": "Hospital Referral Region Description", "Key": "Hospital Referral Region Description" },
            { "DisplayName": "Total Discharges", "Key": "Total Discharges" },
            { "DisplayName": "Average Covered Charges", "Key": "Average Covered Charges" },
            { "DisplayName": "Average Total Payments", "Key": "Average Total Payments" },
            { "DisplayName": "Average Medicare Payments", "Key": "Average Medicare Payments" }
        ];
        this.displayColumns = [
            { "DisplayName": "Provider Name", "Key": "Provider Name" },
            { "DisplayName": "Provider Street Address", "Key": "Provider Street Address" },
            { "DisplayName": "Provider City", "Key": "Provider City" },
            { "DisplayName": "Provider State", "Key": "Provider State" },
            { "DisplayName": "Provider Zip Code", "Key": "Provider Zip Code" },
            { "DisplayName": "Hospital Referral Region Description", "Key": "Hospital Referral Region Description" },
            { "DisplayName": "Total Discharges", "Key": "Total Discharges" },
            { "DisplayName": "Average Covered Charges", "Key": "Average Covered Charges" },
            { "DisplayName": "Average Total Payments", "Key": "Average Total Payments" },
            { "DisplayName": "Average Medicare Payments", "Key": "Average Medicare Payments" }
        ];
        this.displayOptions = [
            { "All": true },
            { "Provider Name": true },
            { "Provider Street Address": true },
            { "Provider City": true },
            { "Provider State": true },
            { "Provider Zip Code": true },
            { "Hospital Referral Region Description": true },
            { "Total Discharges": true },
            { "Average Covered Charges": true },
            { "Average Total Payments": true },
            { "Average Medicare Payments": true }
        ];
    }
    AppComponent.prototype.CheckValue = function (fieldName) {
        if (fieldName == 'minDischarges' && isNaN(this.minDischarges))
            this.minDischarges = null;
        else if (fieldName == 'maxDischarges' && isNaN(this.maxDischarges))
            this.maxDischarges = null;
        else if (fieldName == 'minAvgCoveredCharges' && isNaN(this.minAvgCoveredCharges))
            this.minAvgCoveredCharges = null;
        else if (fieldName == 'maxAvgCoveredCharges' && isNaN(this.maxAvgCoveredCharges))
            this.maxAvgCoveredCharges = null;
        else if (fieldName == 'minAvgMedicarePayments' && isNaN(this.minAvgMedicarePayments))
            this.minAvgMedicarePayments = null;
        else if (fieldName == 'maxAvgMedicarePayments' && isNaN(this.maxAvgMedicarePayments))
            this.maxAvgMedicarePayments = null;
    };
    AppComponent.prototype.Logout = function () {
        this.isAuthenticated = false;
        this.userName = "";
        this.userPassword = "";
    };
    AppComponent.prototype.Login = function () {
        var _this = this;
        try {
            this._loginService.validateUser(this.userName, this.userPassword).subscribe(function (res) {
                _this.userData = res;
                if (_this.userData.length > 0) {
                    _this.isAuthenticated = true;
                }
                else {
                    _this.isAuthenticated = false;
                    alert("Please enter valid credentials!");
                }
            });
        }
        catch (error) {
            console.error();
        }
    };
    AppComponent.prototype.ResetClick = function () {
        this.minDischarges = null;
        this.maxDischarges = null;
        this.minAvgCoveredCharges = null;
        this.maxAvgCoveredCharges = null;
        this.minAvgMedicarePayments = null;
        this.maxAvgMedicarePayments = null;
        this.state = null;
        this.gridData = [];
    };
    AppComponent.prototype.SearchClick = function () {
        var _this = this;
        if (this.userData.length > 0) {
            this.isResultsLoaded = false;
            this._providerDataService.getProviderData(this.minDischarges, this.maxDischarges, this.minAvgCoveredCharges, this.maxAvgCoveredCharges, this.minAvgMedicarePayments, this.maxAvgMedicarePayments, this.state)
                .subscribe(function (Patientdata) {
                _this.isResultsLoaded = true;
                _this.providerDataAll = Patientdata;
                _this.gridData = _this.providerDataAll.slice(0, _this.gridPageSize);
                _this.currentPage = 1;
                var totalPages = _this.providerDataAll.length / _this.gridPageSize;
                var leftRec = _this.providerDataAll.length % _this.gridPageSize;
                if (leftRec > 0)
                    _this.lastPage = ((_this.providerDataAll.length - leftRec) / _this.gridPageSize) + 1;
                else
                    _this.lastPage = totalPages;
            });
        }
        else {
            this.isAuthenticated = false;
            alert("Please login again!");
        }
    };
    AppComponent.prototype.PageLinkClick = function (event) {
        if (event == "last") {
            this.currentPage = this.lastPage;
            this.gridData = this.providerDataAll.slice((this.currentPage - 1) * this.gridPageSize, this.providerDataAll.length);
        }
        else {
            if (event == "next" && this.currentPage < this.lastPage) {
                this.currentPage = this.currentPage + 1;
            }
            else if (event == "prev" && this.currentPage > 1) {
                this.currentPage = this.currentPage - 1;
            }
            else if (event == "first") {
                this.currentPage = 1;
            }
            this.gridData = this.providerDataAll.slice((this.currentPage - 1) * this.gridPageSize, (this.currentPage) * this.gridPageSize);
        }
    };
    AppComponent.prototype.CheckboxSelection = function (item) {
        var index = this.displayColumns.findIndex(function (obj) { return obj.Key == item; });
        if (index <= -1)
            this.displayColumns.push({ "DisplayName": item, "Key": item });
        else {
            this.displayColumns.splice(index, 1);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__provider_data_service__["a" /* ProviderDataService */], __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__provider_data_service__ = __webpack_require__("../../../../../src/app/provider-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__provider_data_service__["a" /* ProviderDataService */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.apiRoot = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    LoginService.prototype.validateUser = function (userName, userPassword) {
        var url = this.apiRoot + '/api/ProviderData/Login';
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
        params = params.append("user_name", userName);
        params = params.append("user_password", userPassword);
        try {
            return this.http.get(url, { params: params });
        }
        catch (error) {
            console.error("Error in Validating User");
        }
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/provider-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProviderDataService = /** @class */ (function () {
    function ProviderDataService(http) {
        this.http = http;
        this.apiRoot = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
    }
    ProviderDataService.prototype.getProviderData = function (minDischarges, maxDischarges, minAvgCoveredCharges, maxAvgCoveredCharges, minAvgMedicarePayments, maxAvgMedicarePayments, state) {
        var url = this.apiRoot + '/api/ProviderData/Get';
        var search = '?';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append("max_discharges", maxDischarges);
        params = params.append("min_discharges", minDischarges);
        params = params.append("max_average_covered_charges", maxAvgCoveredCharges);
        params = params.append("min_average_covered_charges", minAvgCoveredCharges);
        params = params.append("max_average_medicare_payments", maxAvgMedicarePayments);
        params = params.append("min_average_medicare_payments", minAvgMedicarePayments);
        params = params.append("state", state);
        try {
            return this.http.get(url, { params: params });
        }
        catch (error) {
            console.error("Error in Fetching Provider Details");
        }
    };
    ProviderDataService.prototype.handleError = function (error) {
        console.error('PatientdataService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ProviderDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProviderDataService);
    return ProviderDataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "http://healthcareproviderservices20180117120432.azurewebsites.net",
    pageSize: "20"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map