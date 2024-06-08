import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventuresComponent } from './adventures.component';
import { AdventuresRoutingModule } from './adventures.routing.module';
import { PackraftingPageComponent } from './packrafting-page/packrafting-page.component';
import { LlamaTrekkingPageComponent } from './llama-trekking-page/llama-trekking-page.component';
import { FishingPageComponent } from './fishing-page/fishing-page.component';
import { DiscGolfPageComponent } from './disc-golf-page/disc-golf-page.component';



@NgModule({
  declarations: [AdventuresComponent, PackraftingPageComponent, LlamaTrekkingPageComponent, FishingPageComponent, DiscGolfPageComponent],
  imports: [
    CommonModule,
    AdventuresRoutingModule
  ]
})
export class AdventureseModule { }




