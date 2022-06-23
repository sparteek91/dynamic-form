import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@Input() formConfig: any[] = [];
	@Output() submitted: EventEmitter<any> = new EventEmitter();
	form!: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.createGroup();
	}

	private createGroup(): FormGroup {
		const group = this.fb.group({});
		this.formConfig.forEach(control => group.addControl(control.name, this.fb.control('', control.validator)));
		return group;
	}

}
