import { NgModule }      from '@angular/core'; 

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router'; //add the configured RouterModule to the AppModule imports array.

// Declatations
import { AppComponent }    	   from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { RegisterComponent }   from './register/register.component';
import { LoginComponent }      from './login/login.component';
import { RouteGuard }          from './_guards/route.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'heroes',     component: HeroesComponent },
	{ path: 'dashboard',  component: DashboardComponent },
	{ path: 'detail/:id',	component: HeroDetailComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {};