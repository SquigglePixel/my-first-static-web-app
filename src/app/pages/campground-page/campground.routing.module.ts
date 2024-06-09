import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundPageComponent } from './campground-page.component';


const routes: Routes = [
  {
    path: '',
    component: CampgroundPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampgroundRoutingModule { }