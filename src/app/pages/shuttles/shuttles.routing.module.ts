import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShuttlesComponent } from './shuttles.component';
import { GilaRiverPageComponent } from './gila-river-page/gila-river-page.component';
import { SanFrancisoRiverPageComponent } from './san-franciso-river-page/san-franciso-river-page.component';
import { BlueRiverPageComponent } from './blue-river-page/blue-river-page.component';


const routes: Routes = [
  {
    path: '',
    component: ShuttlesComponent
  },
  {
    path: 'gila-river',
    component: GilaRiverPageComponent 
  },
  {
    path: 'san-franciso-river',
    component: SanFrancisoRiverPageComponent
  },
  {
    path: 'blue-river',
    component: BlueRiverPageComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuttlesRoutingModule { }