import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosPageComponent } from './videos-page.component';


const routes: Routes = [
  {
    path: '',
    component: VideosPageComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }