import { NgModule }      from '@angular/core'; 

// Imports
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }       from '@angular/http';

// Declatations
import { AppComponent }    	   from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { RegisterComponent }   from './register.component';

// Providers
import { HeroService } from './hero.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
	// Imports
  imports:  [
    BrowserModule,
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
    RegisterComponent
  ],

  // Providers
  providers: [  
  	HeroService
  ],

  // Entry point for the app code
  bootstrap: [ AppComponent ]
})

export class AppModule { }

