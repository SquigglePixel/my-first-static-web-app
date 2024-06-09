import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalsPageComponent } from './rentals-page.component';


const routes: Routes = [
  {
    path: '',
    component: RentalsPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule { }