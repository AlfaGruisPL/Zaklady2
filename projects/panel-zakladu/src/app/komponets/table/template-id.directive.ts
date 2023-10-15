import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[TemplateId]',
  standalone: true,
})
export class TemplateIdDirective {
  @Input('TemplateId')
  id: string | undefined;

  constructor(public template: TemplateRef<any>) {}
}
