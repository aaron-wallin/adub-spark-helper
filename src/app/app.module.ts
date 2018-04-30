import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SectionGigsComponent } from './sections/section.gigs.component';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    SectionGigsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
