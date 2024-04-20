import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventuresComponent } from './adventures.component';
import { HomePageRoutingModule } from './adventures.routing.module';
import { PackraftingPageComponent } from './packrafting-page/packrafting-page.component';



@NgModule({
  declarations: [AdventuresComponent, PackraftingPageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class AdventureseModule { }




