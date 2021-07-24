import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TypealongComponent } from './typealong/typealong.component';
import { SummaryPipe } from './ProperCase.Pipe';

@NgModule({
  declarations: [
    AppComponent,
    TypealongComponent,
    SummaryPipe
      
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
