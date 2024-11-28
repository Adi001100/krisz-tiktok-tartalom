import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from "./components/home/home.component";
import { ServicesComponent } from "./components/services/services.component";
import { AboutComponent } from "./components/about/about.component";
import { PackagesComponent } from "./components/packages/packages.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { GyikComponent } from "./components/gyik/gyik.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, ServicesComponent, AboutComponent, PackagesComponent, PortfolioComponent, GyikComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'krisz-tiktok-tartalom';
}
