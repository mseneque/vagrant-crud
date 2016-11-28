import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';


@Injectable()
export class AuthService {
    // provides interation with the API for authentication
    constructor(private http: Http) { }

    private headers = new Headers({'Content-Type': 'application/json'});

    // private methods

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // TODO: Add proper error handling
        return Promise.reject(error.message || error);
    }

    // public methods
 
    login(email: string, password: string) {
        console.log('auth.service.ts - ' + email + ',   ' + password);
        console.log('JSON.stringify - ' + JSON.stringify({ email: email, password: password }));

        const url = 'api-token-auth/';
        let data: any = JSON.stringify({ email: email, password: password });
        // let options = {headers: this.headers};

        return this.http.post(url, data, {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('selectedHero', JSON.stringify(user));
                }
            })
            .catch(this.handleError);
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('selectedHero');
    }
}