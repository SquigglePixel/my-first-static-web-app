import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicsComponent } from './clinics.component';
import { PackraftOnePageComponent } from './packraft-one-page/packraft-one-page.component';
import { GilaPrimerPageComponent } from './gila-primer-page/gila-primer-page.component';
import { ClinicsRoutingModule } from './clinics.routing.module';
import { PackraftOneLabPageComponent } from './packraft-one-lab-page/packraft-one-lab-page.component';
import { DeluxePackraftPackagePageComponent } from './deluxe-packraft-package-page/deluxe-packraft-package-page.component';
import { FlyTenkaraOnePageComponent } from './fly-tenkara-one-page/fly-tenkara-one-page.component';
import { FlyAndTenkaraOneLabPageComponent } from './fly-and-tenkara-one-lab-page/fly-and-tenkara-one-lab-page.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [ClinicsComponent, PackraftOnePageComponent, GilaPrimerPageComponent, PackraftOneLabPageComponent, DeluxePackraftPackagePageComponent, FlyTenkaraOnePageComponent, FlyAndTenkaraOneLabPageComponent],
  imports: [
    CommonModule,
    ClinicsRoutingModule,
    NgxPayPalModule
  ]
})
export class ClinicsModule { }




