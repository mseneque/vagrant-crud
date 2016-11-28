import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../_models/hero';
import { HeroService } from '../_services/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css'],
  providers: [HeroService] // otherwise; EXCEPTION: No provider for HeroService! (AppComponent -> HeroService)

})
export class HeroesComponent implements OnInit{

  errorMessage: string;
  heroes: Hero[] = [];
  selectedHero: Hero;

  // next_page: string;
  // current_page: string;
  // prev_page: string;
  count: number;

	//The constructor itself does nothing. The parameter simultaneously defines a 
	//private heroService property and identifies it as a HeroService injection site.
	//Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
	constructor(private heroService: HeroService, private router: Router) {
    this.selectedHero = JSON.parse(localStorage.getItem('selectedHero'))
  } 

  // ngOnInit is a lifecycle hook. Used to load service on Initialisation, similar to constructor.
  ngOnInit(): void { 
    // this.next_page = null;
    // this.current_page = 'api/v1/accounts/';
    // this.prev_page = null;
    this.count = 0;
    this.getHeroes(); 
  }

  onSelect(hero: Hero): void {
  	this.selectedHero = hero;
  }

  getHeroes(): void {
  	// Now it will subscribe the observable when it is resolved.
  	this.heroService.getHeroes()
      .subscribe(
        heroes => { 
          this.heroes = heroes['results'],
          this.count = heroes['count'];
          // this.next_page = heroes['next'],
          // this.prev_page = heroes['previous']
        },
        error => this.errorMessage = <any>error);  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  // gotoNextPage(): void {
  //   this.current_page = this.next_page;
  //   this.getHeroes();
  // }

  // gotoPrevPage(): void {
  //   this.current_page = this.prev_page;
  //   this.getHeroes();
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero); // Adds the new hero to the list of Heroes
        this.selectedHero = null;
      },
      error => this.errorMessage = <any>error);
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
  }
};
