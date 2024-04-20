import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { Injector, forwardRef, InjectionToken, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import {NoopAnimationsModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from "./layouts/layout.module";
import { MainMenuComponent } from './components/main-menu/main-menu.component';

export let AppInjector: Injector;

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    NoopAnimationsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,

  ],
  exports: [
  
  ],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
