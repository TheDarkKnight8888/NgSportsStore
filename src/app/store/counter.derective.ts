import { Directive, ViewContainerRef, TemplateRef, Input, Attribute,
    SimpleChange  } from '@angular/core';

@Directive({
    selector: '[counterOf]'
})
export class CounterDirective {
    constructor(private container: ViewContainerRef, private template: TemplateRef<object>) {}

    @Input('counterOf')
    counter: number;

    ngOnChanges(changes: SimpleChange) {
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDerectiveContext(i + 1));
        }
    }
}

class CounterDerectiveContext {
    constructor(public $implicit: any) {}
}
