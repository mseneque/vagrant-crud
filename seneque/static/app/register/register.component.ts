import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HeroService } from '../_services/hero.service';
import { AlertService } from '../_services/alert.service';


@Component({
    moduleId: module.id, // for module-relative path loading of the 'templateUrl' below
    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
    providers: [HeroService]
})

export class RegisterComponent implements OnInit {
    loading: boolean = false;
    form: any;

    constructor(
        private heroService: HeroService,
        private router: Router,
        private alertService: AlertService
    ) {} 

    ngOnInit(): void {
        // initialize form group, controls and validators
        // this data will be sent JSON to registerData onSubmit of form
        this.form = new FormGroup({
            email: new FormControl(''),
            fave_hero: new FormControl('', Validators.compose([
                Validators.pattern('[\\w\\-\\s\\/]+'), // Alphanumeric
                Validators.required
            ])),
            super_power: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    onSubmit(registerData): void {
        console.log(registerData);
        this.loading = true;        

        this.heroService.register(registerData)
            .subscribe(
                hero => { 
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                })
       
    }
}