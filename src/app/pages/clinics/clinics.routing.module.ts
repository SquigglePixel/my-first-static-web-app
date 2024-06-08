import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicsComponent } from './clinics.component';
import { PackraftOnePageComponent } from './packraft-one-page/packraft-one-page.component';
import { GilaPrimerPageComponent } from './gila-primer-page/gila-primer-page.component';
import { PackraftOneLabPageComponent } from './packraft-one-lab-page/packraft-one-lab-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClinicsComponent
  },
  {
    path: 'packraft-one',
    component: PackraftOnePageComponent
  },
  {
    path: 'gila-primer',
    component: GilaPrimerPageComponent
  },  
  ,
  {
    path: 'packraft-one-lab',
    component: PackraftOneLabPageComponent
  }, 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicsRoutingModule { }