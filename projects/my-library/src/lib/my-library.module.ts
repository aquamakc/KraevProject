import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MyLibraryComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    MyLibraryComponent,
    FooterComponent
  ]
})
export class MyLibraryModule { }
