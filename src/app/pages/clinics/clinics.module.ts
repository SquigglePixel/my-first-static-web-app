import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicsComponent } from './clinics.component';
import { PackraftOnePageComponent } from './packraft-one-page/packraft-one-page.component';
import { GilaPrimerPageComponent } from './gila-primer-page/gila-primer-page.component';
import { ClinicsRoutingModule } from './clinics.routing.module';
import { PackraftOneLabPageComponent } from './packraft-one-lab-page/packraft-one-lab-page.component';


@NgModule({
  declarations: [ClinicsComponent, PackraftOnePageComponent, GilaPrimerPageComponent, PackraftOneLabPageComponent],
  imports: [
    CommonModule,
    ClinicsRoutingModule
  ]
})
export class ClinicsModule { }




