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
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var RegisterComponent = (function () {
    function RegisterComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function (email, fave_hero, super_power, password, confirm_password) {
        var _this = this;
        email = email.trim();
        fave_hero = fave_hero.trim();
        super_power = super_power.trim();
        if (!(email && fave_hero && super_power
            && password && confirm_password)) {
            // TODO: Show previous values upon return
            return;
        }
        this.heroService
            .register(email, fave_hero, super_power, password, confirm_password)
            .subscribe(function (hero) { return _this.heroes.push(hero); });
        // Subscribe pushes new person to the list, (causes exception error)
        // TODO: redirect the user to the logged in view of the heros and super powers.
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map