import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturesComponent } from './features/features.component';
import { ShopComponent } from './shop/shop.component';
import {EnterpriceComponent} from './layouts/enterprice/enterprice.component';
import {AccueilVideoComponent} from './accueil-video/accueil-video.component';
import {enterpriceVideoComponent} from './layouts/enterprice/enterprice-video/enterprice-video.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: EnterpriceComponent
  },
  {
    path: 'landing/:id/service-detail',
   component: enterpriceVideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
