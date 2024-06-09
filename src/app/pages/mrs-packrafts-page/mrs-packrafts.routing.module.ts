import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MrsPackraftsPageComponent } from './mrs-packrafts-page.component';


const routes: Routes = [
  {
    path: '',
    component: MrsPackraftsPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MrsPackraftsRoutingModule { }