import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventuresComponent } from './adventures.component';
import { PackraftingPageComponent } from './packrafting-page/packrafting-page.component';

const routes: Routes = [
  {
  path: '',
  component: AdventuresComponent
  },
  {
  path: 'packrafting',
  component: PackraftingPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }