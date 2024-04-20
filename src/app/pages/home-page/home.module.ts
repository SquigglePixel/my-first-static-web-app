import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { HomePageRoutingModule } from './home.routing.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomePageRoutingModule
  ],
  exports : [HomePageComponent]
})
export class HomeModule { 

  constructor(  ) { console.debug("HomeModule") }

}
