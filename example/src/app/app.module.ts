import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgElmModule } from 'ng-elm';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgElmModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
