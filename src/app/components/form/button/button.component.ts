import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	config: any;
	group!: FormGroup;
	
	constructor() { }

	ngOnInit(): void {
		console.log(this.group)
	}

}