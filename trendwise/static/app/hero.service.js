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
require('./rxjs-operators');
// Updated the service to have a promise, it is now (async) (non-blocking)
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'app/heroes'; // URL to web api
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
    }
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // TODO: Add proper error handling
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.getHeroes = function () {
        return this.http
            .get(this.heroesUrl)
            .map(this.extractData)
            .do(function (data) { return console.log(data); }) // diplay results in console
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .map(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); })
            .do(function (data) { return console.log(data); }); // diplay results in console
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (heroName) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: heroName }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.register = function (email, fave_hero, super_power, password, confirm_password) {
        var url = 'api/v1/accounts/';
        var postData = JSON.stringify({
            email: email,
            fave_hero: fave_hero,
            super_power: super_power,
            password: password,
            confirm_password: confirm_password
        });
        var options = { headers: this.headers };
        return this.http
            .post(url, postData, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map