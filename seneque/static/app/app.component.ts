import { Component } from '@angular/core';

// Add the RxJS Observable operators.
import './_helpers/rxjs-operators';

// App Component is considered the root base page.

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
			<a routerLink="/login" routerLinkActive="active">Login</a>
		</nav>
		<alert></alert>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app.component.css']
}) 

export class AppComponent {
	title = 'Tour of Heroes';
}
