import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentLayoutComponent,
    loadChildren: () => import('./pages/home-page/home.module').then(x => x.HomeModule),
  },
  {
    path: 'adventures',
    component: ContentLayoutComponent,
    loadChildren: () => import('./pages/adventures/adventures.module').then(x => x.AdventureseModule),
  },
  {
    path: 'clinics',
    component: ContentLayoutComponent,
    loadChildren: () => import('./pages/clinics/clinics.module').then(x => x.ClinicsModule),
  },
  {
    path: '**',
    redirectTo: '/home'
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
