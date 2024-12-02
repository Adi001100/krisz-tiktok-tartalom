import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { GyikComponent } from './components/gyik/gyik.component';
import { HomeComponent } from './components/home/home.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gyik', component: GyikComponent },
  { path: '**', redirectTo: '' } // Wildcard route az ismeretlen útvonalak kezelésére
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule {}
