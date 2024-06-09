import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events.routing.module';
import { ZDogRondyPageComponent } from './z-dog-rondy-page/z-dog-rondy-page.component';



@NgModule({
  declarations: [
    ZDogRondyPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }