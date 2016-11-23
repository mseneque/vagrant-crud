import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';

import { Hero } from '../_models/hero';
import { HeroService } from '../_services/hero.service';


@Component({
    moduleId: module.id, // for module-relative path loading of the 'templateUrl' below
    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
    providers: [HeroService]
})

export class RegisterComponent implements OnInit {
    
    heroes: Hero[];

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
            email = email.trim();
            fave_hero = fave_hero.trim();
            super_power = super_power.trim();

            if (!(email && fave_hero && super_power 
            && password && confirm_password))
                { 
                    // TODO: Show previous values upon return
                    return; 
                }
            this.heroService
                .register(email, fave_hero, super_power, password, confirm_password)
                .subscribe(hero => this.heroes.push(hero)) 
                // Subscribe pushes new person to the list, (causes exception error)
                
            
        // TODO: redirect the user to the logged in view of the heros and super powers.

           
    }

}