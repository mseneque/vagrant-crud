import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id, // for module-relative loading of the templateUrl
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.comonent.css']
})

export class DashboardComponent implements OnInit{

	// set heroes to Hero class
	heroes: Hero[] = [];

	// HeroService injection, it DOESN'T create a new instance. It injects the existing instance.
	constructor(private heroService: HeroService) {};

	// Gets the heroes using the heroService(HeroService)
	// The below code runs when the class is initialised
	ngOnInit(): void {
		// '.then' method to be used with type 'promise'
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(0, 4));
	}
}