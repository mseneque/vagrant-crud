import { Injectable }      from '@angular/core';
import { Response, Http }  from '@angular/http';
import { Headers, RequestOptions }  from '@angular/http';
import { Hero }            from './hero';
import { Observable }      from 'rxjs/observable';

import './rxjs-operators';


// Updated the service to have a promise, it is now (async) (non-blocking)
@Injectable()
export class HeroService {

	private heroesUrl = 'app/heroes';  // URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // TODO: Add proper error handling
        return Promise.reject(error.message || error);
    }

    getHeroes (): Observable<Hero[]> {
        return this.http
            .get(this.heroesUrl)
            .map(this.extractData)
            .do(data => console.log(data)) // diplay results in console
            .catch(this.handleError);
    }

    getHero(id: number): Observable<Hero> {
      	return this.getHeroes()
            .map(heroes => heroes.find(hero => hero.id === id))
            .do(data => console.log(data)) // diplay results in console
    } 

    update(hero: Hero): Promise<Hero> {
      	const url = `${this.heroesUrl}/${hero.id}`;
      	return this.http
      		.put(url, JSON.stringify(hero), {headers: this.headers})
      		.toPromise()
      		.then(() => hero)
      		.catch(this.handleError);
    } 

    create(heroName: string): Promise<Hero> {
      	return this.http
      		.post(this.heroesUrl, JSON.stringify({name: heroName}), {headers: this.headers})
      		.toPromise()
      		.then(res => res.json().data)
      		.catch(this.handleError);
    }

    delete(id: number): Promise<void> {
      	const url = `${this.heroesUrl}/${id}`;
      	return this.http
      		.delete(url, {headers: this.headers})
      		.toPromise()
      		.then(() => null)
      		.catch(this.handleError)
    }

    register(email: string, 
            fave_hero: string, 
            super_power: string, 
            password: string, 
            confirm_password: string): 
        Observable<Hero> {
            const url = 'api/v1/accounts/';
            let postData = JSON.stringify({
                email: email,
                fave_hero: fave_hero,
                super_power: super_power,
                password: password,
                confirm_password: confirm_password
            });
            let options = {headers: this.headers};

        return this.http
            .post(url, postData, options)
            .map(this.extractData)
            // .do(data => console.log(data))
            .catch(this.handleError);
    }

}