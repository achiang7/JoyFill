import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { OverviewLandingPageComponent } from './landing-page/overview-landing-page/overview-landing-page.component';

import { AuthGuard } from './homepage/homepage-services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  {
    path: 'overview',
    component: OverviewLandingPageComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './homepage/home/home.module#HomePageModule'
  },
  {
    path: 'home',
    loadChildren: () => import('./homepage/home/home.module').then( m => m.HomePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
