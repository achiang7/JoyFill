import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { OverviewLandingPageComponent } from './landing-page/overview-landing-page/overview-landing-page.component';

import { AuthGuard } from './homepage/homepage-services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './homepage/home/home.module#HomePageModule'
  },
  {
    path: 'overview',
    component: OverviewLandingPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'complete-profile',
    loadChildren: () => import('./complete-profile/complete-profile.module').then( m => m.CompleteProfilePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/user-profile.module').then( m => m.UserProfilePageModule)
  },

  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OverviewLandingPageComponent]
