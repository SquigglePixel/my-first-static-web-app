import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AdventuresComponent } from './adventures/adventures.component';
import { HomeModule } from './home-page/home.module';
import { ClinicsComponent } from './clinics/clinics.component';

@NgModule({  
  imports: [
    CommonModule,
    HomeModule
  ], declarations: [ClinicsComponent]
})
export class PageModule { }
