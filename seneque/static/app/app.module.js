"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// Imports
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var http_1 = require('@angular/http');
// Declatations
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var heroes_component_1 = require('./heroes/heroes.component');
var register_component_1 = require('./register/register.component');
var alert_component_1 = require('./_directives/alert.component');
var login_component_1 = require('./login/login.component');
// Providers
var hero_service_1 = require('./_services/hero.service');
var alert_service_1 = require('./_services/alert.service');
var auth_service_1 = require('./_services/auth.service');
// Guards
var route_guard_1 = require('./_guards/route.guard');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./_helpers/in-memory-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // Imports
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule // In memory API simulation
                    .forRoot(in_memory_data_service_1.InMemoryDataService, { passThruUnknownUrl: true })
            ],
            // Declarations
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                register_component_1.RegisterComponent,
                alert_component_1.AlertComponent,
                login_component_1.LoginComponent
            ],
            // Providers (& Guards)
            providers: [
                route_guard_1.RouteGuard,
                hero_service_1.HeroService,
                alert_service_1.AlertService,
                auth_service_1.AuthService
            ],
            // Entry point for the app code
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map