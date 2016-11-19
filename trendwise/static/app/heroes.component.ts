import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css'],
  providers: [HeroService] // otherwise; EXCEPTION: No provider for HeroService! (AppComponent -> HeroService)

})
export class HeroesComponent implements OnInit{

  heroes: Hero[];
  selectedHero: Hero;

	//The constructor itself does nothing. The parameter simultaneously defines a 
	//private heroService property and identifies it as a HeroService injection site.
	//Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
	constructor(
    private heroService: HeroService,
    private router: Router
    ) {} 

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

  getHeroes(): void {
  	// this.heroes = this.heroService.getHeroes();
  	// Now it will act on the Promise when it is resolved.
  	this.heroService.getHeroes()
  		.then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero); // Adds the new hero to the list of Heroes
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
  }

  // ngOnInit is a lifecycle hook. Used to load service on Initialisation, similar to constructor.
  ngOnInit(): void {
  	this.getHeroes();
  }



  };

