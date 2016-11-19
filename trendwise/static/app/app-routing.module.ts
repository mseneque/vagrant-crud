import { NgModule }      from '@angular/core'; 

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }  from '@angular/router'; //add the configured RouterModule to the AppModule imports array.

// Declatations
import { AppComponent }    	   from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'	},
	{	path: 'heroes',     component: HeroesComponent },
	{	path: 'dashboard',  component: DashboardComponent },
	{ path: 'detail/:id',	component: HeroDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {};