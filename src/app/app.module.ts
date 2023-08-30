import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test3Component } from './test/test3.component';
import { WyswietlanieDanychComponent } from './wyswietlanie-danych/wyswietlanie-danych.component';
import { DyrektywyComponent } from './dyrektywy/dyrektywy.component';
import { DataBindingComponent } from './data-binding/data-binding.component'
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test3Component,
    WyswietlanieDanychComponent,
    DyrektywyComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
