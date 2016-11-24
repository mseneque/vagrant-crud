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
// import { Headers } from '@angular/http';
var forms_1 = require('@angular/forms');
// import { Hero } from '../_models/hero';
var hero_service_1 = require('../_services/hero.service');
var alert_service_1 = require('../_services/alert.service');
var RegisterComponent = (function () {
    // heroes: Hero[];
    // hero: Hero;
    function RegisterComponent(heroService, router, alertService) {
        this.heroService = heroService;
        this.router = router;
        this.alertService = alertService;
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        // initialize form group, controls and validators
        // this data will be sent JSON to registerData onSubmit of form
        this.form = new forms_1.FormGroup({
            email: new forms_1.FormControl(''),
            fave_hero: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.pattern('[\\w\\-\\s\\/]+'),
                forms_1.Validators.required
            ])),
            super_power: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    };
    RegisterComponent.prototype.onSubmit = function (registerData) {
        var _this = this;
        console.log(registerData);
        this.loading = true;
        this.heroService.register(registerData)
            .subscribe(function (hero) {
            //this.heroes.push(hero),
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-register',
            templateUrl: 'register.component.html',
            styleUrls: ['register.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router, alert_service_1.AlertService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map