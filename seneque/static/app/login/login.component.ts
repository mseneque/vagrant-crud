import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    form: any;
    loading: boolean = false;
 
    constructor(
        private router: Router,
        private authenticationService: AuthService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // resets the login status
        this.authenticationService.logout();
        // initialise the form group and expected inputs
        this.form = new FormGroup({
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }
 
    login(formData: any): void {
        this.loading = true;
        this.authenticationService.login(formData['email'], formData['password'])
            .subscribe(
                data => {
                    console.log('data from login()');
                    this.router.navigate(['/heroes']);
                },
                error => {
                    console.log('error from login()');
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}