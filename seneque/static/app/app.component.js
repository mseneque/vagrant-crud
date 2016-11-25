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
// Add the RxJS Observable operators.
require('./_helpers/rxjs-operators');
// App Component is considered the root base page.
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n\t\t\t<a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n\t\t\t<a routerLink=\"/register\" routerLinkActive=\"active\">Register a Hero</a>\n\t\t\t<a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n\t\t</nav>\n\t\t<alert></alert>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map