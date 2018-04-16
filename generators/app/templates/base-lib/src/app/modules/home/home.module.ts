import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { <%= capModule %>Component } from './<%= module %>.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    <%= capModule %>Component
  ],
  exports: [
    <%= capModule %>Component
  ]
})
export class <%= capModule %>Module { }
