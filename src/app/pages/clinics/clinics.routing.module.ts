import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventuresComponent } from './adventures.component';
import { PackraftingPageComponent } from './packrafting-page/packrafting-page.component';
import { LlamaTrekkingPageComponent } from './llama-trekking-page/llama-trekking-page.component';
import { FishingPageComponent } from './fishing-page/fishing-page.component';
import { DiscGolfPageComponent } from './disc-golf-page/disc-golf-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdventuresComponent
  },
  {
    path: 'packrafting',
    component: PackraftingPageComponent
  },
  {
    path: 'llama-trekking',
    component: LlamaTrekkingPageComponent
  },
  {
    path: 'fishing',
    component: FishingPageComponent
  },
  {
    path: 'disc-golf',
    component: DiscGolfPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }