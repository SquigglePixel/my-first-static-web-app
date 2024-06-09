import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { ZDogRondyPageComponent } from './z-dog-rondy-page/z-dog-rondy-page.component';


const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'z-dog-rondy',
    component: ZDogRondyPageComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }