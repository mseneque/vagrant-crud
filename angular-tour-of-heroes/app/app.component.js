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
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    //The constructor itself does nothing. The parameter simultaneously defines a 
    //private heroService property and identifies it as a HeroService injection site.
    //Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.heroes = this.heroService.getHeroes();
        // Now it will act on the Promise when it is resolved.
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    // ngOnInit is a lifecycle hook. Used to load service on Initialisation, similar to constructor.
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n      \t[class.selected]=\"hero === selectedHero\"\n      \t(click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
            styles: ["\n  \t.selected {\n  \t\tbackground-color: #CFD8DC !important;\n  \t\tcolor: white;\n  \t}\n  \t.heroes {\n  \t\tmargin: 0 0 2em 0;\n  \t\tlist-style-type: none;\n  \t\tpadding: 0;\n  \t\twidth: 15em;\n  \t}\n  \t.heroes li {\n  \t\tcursor: pointer;\n  \t\tposition: relative;\n  \t\tleft: 0;\n  \t\tbackground-color: #EEE;\n  \t\tmargin: .5em;\n  \t\tpadding: .3em 0;\n  \t\theight: 1..6em;\n  \t\tborder-radius: 4px;\n  \t}\n  \t.heroes li.selected:hover {\n  \t\tbackground-color: #BBD8DC !important;\n  \t\tcolor: white;\n  \t}\n  \t.heroes li:hover {\n  \t\tcolor: #607D8B;\n  \t\tbackground-color: #DDD;\n  \t}\n  \t.heroes .text {\n    position: relative;\n    top: -3px;\n  \t}\n  \t.heroes .badge {\n  \t\tdisplay: inline-block;\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.8em 0.7em 0 0.7em;\n\t    background-color: #607D8B;\n\t    line-height: 1em;\n\t    position: relative;\n\t    left: -1px;\n\t    top: -4px;\n\t    height: 1.8em;\n\t    margin-right: .8em;\n\t    border-radius: 4px 0 0 4px;\n  \t}\n  "],
            providers: [hero_service_1.HeroService] // otherwise; EXCEPTION: No provider for HeroService! (AppComponent -> HeroService)
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map