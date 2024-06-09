import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuttlesComponent } from './shuttles.component';
import { ShuttlesRoutingModule } from './shuttles.routing.module';
import { GilaRiverPageComponent } from './gila-river-page/gila-river-page.component';
import { SanFrancisoRiverPageComponent } from './san-franciso-river-page/san-franciso-river-page.component';
import { BlueRiverPageComponent } from './blue-river-page/blue-river-page.component';


@NgModule({
  declarations: [ShuttlesComponent, GilaRiverPageComponent, SanFrancisoRiverPageComponent, BlueRiverPageComponent],
  imports: [
    CommonModule,
    ShuttlesRoutingModule
  ]
})
export class ShuttlesModule { }

