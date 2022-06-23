import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { ForminputComponent } from "./forminput/forminput.component";
import { ButtonComponent } from "./button/button.component";
import { DynamicFieldDirective } from "./directives/dynamic-field.directive";

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [
		FormComponent,
		ForminputComponent,
		ButtonComponent,
		DynamicFieldDirective
	],
	exports: [
		FormComponent
	],
	entryComponents: [
		ForminputComponent,
		ButtonComponent,
	]
})
export class FormModule { }