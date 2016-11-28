import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from '../_models/hero';
import { HeroService } from '../_services/hero.service';
import { AlertService } from '../_services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    // Use the constructor to inject these services and saving the values to private fields.
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private alertService: AlertService
    ) {}

    @Input()
    hero: Hero;

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id'])) // '+' converst a string to a number
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .subscribe(
                data => {
                    this.goBack();
                    this.alertService.success('Successfully Updated!');                    
                },
                error => {
                    this.alertService.error(error);
                });
    }
}

