import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GenerateCustomInputsDirective } from './generate-input-directive/generate-input-directive.component';
import { OnlyNumberComponentComponent } from './only-number-component/only-number-component.component';
import { OnlyEmailComponentComponent } from './only-email-component/only-email-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateCustomInputsDirective,
    OnlyNumberComponentComponent,
    OnlyEmailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
