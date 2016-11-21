import { Component } from '@angular/core';

// App Component is considered the root base page.

@Component({
	moduleId: module.id,
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
			<a routerLink="/register" routerLinkActive="active">Register</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app.component.css']
}) 

export class AppComponent {
	title = 'Tour of Heroes';
}
