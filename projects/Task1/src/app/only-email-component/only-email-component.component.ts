import { Component } from '@angular/core';

@Component({
  selector: 'home-only-email-component',
  templateUrl: './only-email-component.component.html',
  styleUrls: ['./only-email-component.component.scss']
})
export class OnlyEmailComponentComponent {

  constructor() { }

  regexpNumber = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  textValue:string = "";
  isValid: boolean = false;

  changed()
  {
    this.isValid = this.regexpNumber.test(this.textValue);
  }

}
