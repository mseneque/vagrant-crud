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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
require('../_helpers/rxjs-operators');
// Updated the service to have a promise, it is now (async) (non-blocking)
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
    }
    // private methods
    HeroService.prototype.extractData = function (response) {
        return response.json() || { error: 'error' };
    };
    HeroService.prototype.getOptions = function () {
        // create header to include JSON Web Token for authorisation
        var selectedHero = JSON.parse(localStorage.getItem('selectedHero'));
        if (selectedHero && selectedHero.token) {
            console.log('selectedHero = ', selectedHero);
            // let headers = new Headers({ 'Authorization': 'Bearer ' + selectedHero.token });
            var headers = new http_2.Headers({ 'Authorization': 'JWT ' + selectedHero.token });
            return new http_2.RequestOptions({ headers: headers });
        }
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // TODO: Add proper error handling
        return Promise.reject(error.message || error);
    };
    // public methods
    // interacts with fake in memory API
    HeroService.prototype.create = function (heroName) {
        return this.http.post(this.heroesUrl, JSON.stringify({ name: heroName }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Interacts with Real API
    HeroService.prototype.register = function (registerData) {
        var url = 'api/v1/accounts/';
        var options = { headers: this.headers };
        return this.http.post(url, registerData, options)
            .map(this.extractData) // .do(data => console.log(data))
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroes = function () {
        return this.http.get('api/v1/accounts/')
            .map(this.extractData)
            .do(function (data) { console.log('print the api/v1/accounts/'), console.log(data); }) // diplay results in console
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .map(function (heroes) { return heroes['results'].find(function (hero) { return hero.id === id; }); });
        // .do(data => console.log(data)) // diplay results in console
    };
    HeroService.prototype.update = function (hero) {
        var url = "api/v1/accounts/" + hero.id + "/";
        var options = this.getOptions();
        return this.http.put(url, hero, options)
            .map(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = "api/v1/accounts/" + id + "/";
        var options = this.getOptions();
        return this.http.delete(url, options)
            .map(function () { return null; })
            .catch(this.handleError);
        // .toPromise()
        // .then(() => null)
        // .catch(this.handleError);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map