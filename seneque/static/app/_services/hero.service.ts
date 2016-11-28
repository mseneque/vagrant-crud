import { Injectable }      from '@angular/core';
import { Response, Http }  from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';
import { Hero }            from '../_models/hero';
import { Observable }      from 'rxjs/observable';

import '../_helpers/rxjs-operators';

// Updated the service to have a promise, it is now (async) (non-blocking)
@Injectable()
export class HeroService {
    constructor(private http: Http) {}

    private heroesUrl = 'app/heroes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    
    // private methods

    private extractData(response: Response) {
        return response.json() || { error: 'error' };
    }

    private getOptions() {
        // create header to include JSON Web Token for authorisation
        let selectedHero = JSON.parse(localStorage.getItem('selectedHero'));
        if (selectedHero && selectedHero.token) {
            console.log('selectedHero = ', selectedHero);
            // let headers = new Headers({ 'Authorization': 'Bearer ' + selectedHero.token });
            let headers = new Headers({ 'Authorization': 'JWT ' + selectedHero.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // TODO: Add proper error handling
        return Promise.reject(error.message || error);
    }

    // public methods

    // interacts with fake in memory API

    create(heroName: string): Promise<Hero> {
        return this.http.post(this.heroesUrl, JSON.stringify({name: heroName}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Interacts with Real API

    register(registerData: any): 
        Observable<Hero> {
            const url = 'api/v1/accounts/';
            let options = {headers: this.headers};
        return this.http.post(url, registerData, options)
            .map(this.extractData) // .do(data => console.log(data))
            .catch(this.handleError);
    }

    getHeroes(): Observable<Hero[]> {
        return this.http.get('api/v1/accounts/')
            .map(this.extractData)
            .do(data => {console.log('print the api/v1/accounts/'), console.log(data)}) // diplay results in console
            .catch(this.handleError);
    }

    getHero(id: number): Observable<Hero> {
        return this.getHeroes()
            .map(heroes => heroes['results'].find(hero => hero.id === id))
            // .do(data => console.log(data)) // diplay results in console
    } 

    update(hero: Hero): Observable<Hero> {
        const url = `api/v1/accounts/${hero.id}/`;
        let options = this.getOptions();
        return this.http.put(url, hero, options)
            .map(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `api/v1/accounts/${id}/`;
        let options = this.getOptions();
        return this.http.delete(url, options)
            .map(() => null)
            .catch(this.handleError);
            // .toPromise()
            // .then(() => null)
            // .catch(this.handleError);
    }
}