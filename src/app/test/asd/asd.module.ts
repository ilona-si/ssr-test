import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VovaComponent } from './vova/vova.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    VovaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ]
})
export class AsdModule {
}
