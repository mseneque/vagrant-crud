import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    moduleId: module.id, // for module-relative path loading of the 'templateUrl' below
    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
    providers: [HeroService]
})

export class RegisterComponent implements OnInit {
  
    // private headers = new Headers({'Content-Type': 'application/json'});
    // private post_string: string 

    heroes: Hero[];
    // email: string = 'test1';
    // fave_hero: string = 'test2';
    // password: string = 'test3';

    constructor(
        private heroService: HeroService,
        private router: Router
    ) {} 

    ngOnInit(): void {}

    register(email: string,
            fave_hero: string,
            super_power: string,
            password: string,
            confirm_password: string
        ): void {
            if (!(email && fave_hero && super_power 
            && password && confirm_password))
                { 
                    // TODO: Show previous values upon return
                    return; 
                }
            this.heroService
                .register(email, fave_hero, super_power, password, confirm_password)
                .subscribe(hero => {
                    this.heroes.push(hero); // Adds (pushes) new person to the list
            })
        // TODO: redirect the user to the logged in view of the heros and super powers.

        // email = email.trim();
        // fave_hero = fave_hero.trim();   
    }

}