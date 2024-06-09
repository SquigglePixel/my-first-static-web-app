import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiverAccessPageComponent } from './river-access-page.component';


const routes: Routes = [
  {
    path: '',
    component: RiverAccessPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiverAccessRoutingModule { }