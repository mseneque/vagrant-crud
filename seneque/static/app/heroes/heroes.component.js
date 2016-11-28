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
var hero_service_1 = require('../_services/hero.service');
var HeroesComponent = (function () {
    //The constructor itself does nothing. The parameter simultaneously defines a 
    //private heroService property and identifies it as a HeroService injection site.
    //Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes_results = [];
        this.selectedHero = JSON.parse(localStorage.getItem('selectedHero'));
    }
    // ngOnInit is a lifecycle hook. Used to load service on Initialisation, similar to constructor.
    HeroesComponent.prototype.ngOnInit = function () {
        // this.next_page = null;
        // this.current_page = 'api/v1/accounts/';
        // this.prev_page = null;
        this.count = 0;
        this.getHeroes();
        var temp = {
            id: null,
            email: null,
            fave_hero: "Select a Hero",
            super_power: "--------"
        };
        this.onSelect(temp);
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // Now it will subscribe the observable when it is resolved.
        this.heroService.getHeroes()
            .subscribe(function (heroes) {
            _this.heroes_results = heroes['results'],
                _this.count = heroes['count'];
            // this.next_page = heroes['next'],
            // this.prev_page = heroes['previous']
        }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id)
            .subscribe(function () {
            _this.heroes_results = _this.heroes_results.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    //--- fix up the code below to work with the djangorestframework api ---
    // gotoNextPage(): void {
    //   this.current_page = this.next_page;
    //   this.getHeroes();
    // }
    // gotoPrevPage(): void {
    //   this.current_page = this.prev_page;
    //   this.getHeroes();
    // }
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes_results.push(hero); // Adds the new hero to the list of Heroes
            _this.selectedHero = null;
        }, function (error) { return _this.errorMessage = error; });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['heroes.component.css'],
            providers: [hero_service_1.HeroService] // otherwise; EXCEPTION: No provider for HeroService! (AppComponent -> HeroService)
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
;
//# sourceMappingURL=heroes.component.js.map