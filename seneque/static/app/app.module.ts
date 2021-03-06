import { NgModule }      from '@angular/core'; 

// Imports
import { BrowserModule }    from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }       from '@angular/http';

// Declatations
import { AppComponent }    	   from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { RegisterComponent }   from './register/register.component';
import { AlertComponent }      from './_directives/alert.component';
import { LoginComponent }      from './login/login.component';

// Providers
import { HeroService }  from './_services/hero.service';
import { AlertService } from './_services/alert.service';
import { AuthService }  from './_services/auth.service';

// Guards
import { RouteGuard } from './_guards/route.guard';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './_helpers/in-memory-data.service';


@NgModule({
	// Imports
  imports:  [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule // In memory API simulation
      .forRoot(
        InMemoryDataService,
        {passThruUnknownUrl: true}
      )
  ],

  // Declarations
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    RegisterComponent,
    AlertComponent,
    LoginComponent
  ],

  // Providers (& Guards)
  providers: [  
    RouteGuard,
  	HeroService,
    AlertService,
    AuthService
  ],

  // Entry point for the app code
  bootstrap: [ AppComponent ]
})

export class AppModule { }

