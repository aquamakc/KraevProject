import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import { OnlyEmailComponentComponent } from '../only-email-component/only-email-component.component';
import { OnlyNumberComponentComponent } from '../only-number-component/only-number-component.component';

@Directive({
  selector: '[generator]'
})
export class GenerateCustomInputsDirective implements OnDestroy {
  constructor(private resolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  @Input() set type(t: string)
  {
    this.createComponent(t);
  }

  createComponent(type: string) {
    let componentType = undefined;
    switch(type)
    {
      case "email":
        componentType = OnlyNumberComponentComponent;
        break;
      case "number":
        componentType = OnlyEmailComponentComponent;
        break;
      default:
        return;
    }
    const factory = this.resolver.resolveComponentFactory(componentType);
    this.viewContainerRef.createComponent(factory);
  }

  ngOnDestroy(): void {
      this.viewContainerRef.clear();
  }
}