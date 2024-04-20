import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { AdventuresComponent } from './pages/adventures/adventures.component';

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
    path: '**',
    redirectTo: '/home'
  },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
