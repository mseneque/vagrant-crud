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
var AuthService = (function () {
    // provides interation with the API for authentication
    function AuthService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // private methods
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // TODO: Add proper error handling
        return Promise.reject(error.message || error);
    };
    // public methods
    AuthService.prototype.login = function (email, password) {
        console.log('auth.service.ts - ' + email + ',   ' + password);
        console.log('JSON.stringify - ' + JSON.stringify({ email: email, password: password }));
        var url = 'api-token-auth/';
        var data = JSON.stringify({ email: email, password: password });
        // let options = {headers: this.headers};
        return this.http.post(url, data, { headers: this.headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            console.log('1');
            var user = response.json();
            console.log('2');
            if (user && user.token) {
                console.log('1-1');
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('selectedHero', JSON.stringify(user));
            }
            console.log('3');
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('selectedHero');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map