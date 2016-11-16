import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/**** Original Service Without the Promise (not Async) ****
@Injectable()
export class HeroService {
  getHeroes(): Hero[] {
  return HEROES;
  }
}*/

// Updated the service to have a promise, it is now (async) (non-blocking)
@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}