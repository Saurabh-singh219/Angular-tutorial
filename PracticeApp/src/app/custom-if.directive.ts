import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor(private templateRef: TemplateRef<any>,
    private container: ViewContainerRef) { }

  @Input() set appCustomIf(x: string) {
    x==='show' ? this.container.createEmbeddedView(this.templateRef) : this.container.clear();
  }
}
