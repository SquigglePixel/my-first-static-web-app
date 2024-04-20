import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { SkeletonLayoutComponent } from './skeleton-layout/skeleton-layout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../components/components.module';

export { SkeletonLayoutComponent, ContentLayoutComponent }

@NgModule({
  declarations: [ SkeletonLayoutComponent, ContentLayoutComponent ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  exports: [
    ContentLayoutComponent,
    SkeletonLayoutComponent
  ]
})
export class LayoutModule { }