import { Component } from '@angular/core';

@Component({
  selector: 'home-only-number-component',
  templateUrl: './only-number-component.component.html',
  styleUrls: ['./only-number-component.component.scss']
})
export class OnlyNumberComponentComponent {

  isValid: boolean = false;

  constructor() { }

  regexpNumber = new RegExp('^[0-9]+$');
  textValue:string = "";

  changed()
  {
    this.isValid = this.regexpNumber.test(this.textValue);
  }

}
