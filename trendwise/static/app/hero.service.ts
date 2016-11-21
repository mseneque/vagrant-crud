import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

// Original Service Without the Promise (not Async) ****
// @Injectable()
// export class HeroService {
//   getHeroes(): Hero[] {
//   return HEROES;
//   }
// }

// Updated the service to have a promise, it is now (async) (non-blocking)
@Injectable()
export class HeroService {

	private heroesUrl = 'app/heroes';  // URL to web api
  private registerUrl = 'api/v1/accounts/';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

  private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // TODO: Add proper error handling
		return Promise.reject(error.message || error);
	}

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => response.json().data as Hero[])
			.catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
  	return this.getHeroes()
  		.then(heroes => heroes.find(hero => hero.id === id));
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

  register(email: string, password: string, fave_hero: string): Promise<Hero> {
    return this.http
      .post(this.registerUrl,
        JSON.stringify([
          {email: email},
          {fave_hero: fave_hero},
          {password: password}]
        ),
          {headers: this.headers}
        )
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

}