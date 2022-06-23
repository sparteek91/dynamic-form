import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-forminput',
	templateUrl: './forminput.component.html',
	styleUrls: ['./forminput.component.scss']
})
export class ForminputComponent implements OnInit {
	config: any;
	group!: FormGroup;
	constructor() { }

	ngOnInit(): void {
		// console.log(this.config)
	}

}
