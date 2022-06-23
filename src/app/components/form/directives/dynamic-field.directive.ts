import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { ForminputComponent } from '../forminput/forminput.component';

const components: any = {
    button: ButtonComponent,
    input: ForminputComponent,
};

@Directive({
    selector: '[dynamicField]',
})

export class DynamicFieldDirective implements OnInit {
    @Input() config: any;
    @Input() group!: FormGroup;
    component: any;

    constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

    ngOnInit() {
        const component: any = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    }
}