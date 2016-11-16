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
// This will eventually fetch from a web service, just hard-coded for now.
// To expose this data to the template, need to assign it in the 'AppComponent' class
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magenta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n      \t[class.selected]=\"hero === selectedHero\"\n      \t(click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
            styles: ["\n  \t.selected {\n  \t\tbackground-color: #CFD8DC !important;\n  \t\tcolor: white;\n  \t}\n  \t.heroes {\n  \t\tmargin: 0 0 2em 0;\n  \t\tlist-style-type: none;\n  \t\tpadding: 0;\n  \t\twidth: 15em;\n  \t}\n  \t.heroes li {\n  \t\tcursor: pointer;\n  \t\tposition: relative;\n  \t\tleft: 0;\n  \t\tbackground-color: #EEE;\n  \t\tmargin: .5em;\n  \t\tpadding: .3em 0;\n  \t\theight: 1..6em;\n  \t\tborder-radius: 4px;\n  \t}\n  \t.heroes li.selected:hover {\n  \t\tbackground-color: #BBD8DC !important;\n  \t\tcolor: white;\n  \t}\n  \t.heroes li:hover {\n  \t\tcolor: #607D8B;\n  \t\tbackground-color: #DDD;\n  \t}\n  \t.heroes .text {\n    position: relative;\n    top: -3px;\n  \t}\n  \t.heroes .badge {\n  \t\tdisplay: inline-block;\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.8em 0.7em 0 0.7em;\n\t    background-color: #607D8B;\n\t    line-height: 1em;\n\t    position: relative;\n\t    left: -1px;\n\t    top: -4px;\n\t    height: 1.8em;\n\t    margin-right: .8em;\n\t    border-radius: 4px 0 0 4px;\n  \t}\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map