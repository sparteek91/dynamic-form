import { Component } from '@angular/core';
import { formConfig } from "./config";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	formConfig: any[] = formConfig;

	constructor() {

	}

	formSubmitted(value: any): void {
		console.log(value);
	}
}
