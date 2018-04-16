import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  <%= capModule %>Module } from './modules/<%= module %>/<%= module %>.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     <%= capModule %>Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
