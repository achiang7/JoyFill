import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { OverviewLandingPageComponent } from './landing-page/overview-landing-page/overview-landing-page.component';

import { AuthGuard } from './homepage/homepage-services/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewLandingPageComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: './homepage/home/home.module#HomePageModule'
  },
  // {
  //   path: 'user-profile',
  //   loadChildren: () => import('./profile/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  // },
  // {
  //   path: 'user-joymap',
  //   loadChildren: () => import('./profile/user-joymap/user-joymap.module').then( m => m.UserJoymapPageModule)
  // },

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
