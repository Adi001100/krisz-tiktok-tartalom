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
import { CommonModule } from '@angular/common';
import { HowWeWorkComponent } from "./components/how-we-work/how-we-work.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, ServicesComponent, AboutComponent, PackagesComponent, PortfolioComponent, GyikComponent, ContactComponent, HowWeWorkComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'krisz-tiktok-tartalom';

  images: { src: string; alt: string; top: string; left: string; width: string }[] = [];

  allImages = [
    { src: 'assets/bab4.png', alt: 'tartalom', top: '1%', left: '80%', width: '12.5rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '4%', left: '21%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '9%', left: '70%', width: '12.5rem' },
    { src: 'assets/bab1.png', alt: 'tiktok', top: '16%', left: '17%', width: '12.5rem' },
    { src: 'assets/kukac.png', alt: 'kukac', top: '21%', left: '-24%', width: '35rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '25%', left: '64%', width: '12.5rem' },
    { src: 'assets/bab4.png', alt: 'tartalom', top: '31%', left: '80%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '38%', left: '15%', width: '12.5rem' },
    { src: 'assets/bab1.png', alt: 'tiktok', top: '42%', left: '83%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '47%', left: '43%', width: '12.5rem' },
    { src: 'assets/kukac.png', alt: 'kukac', top: '53%', left: '-22%', width: '35rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '57%', left: '60%', width: '12.5rem' },
    { src: 'assets/bab4.png', alt: 'tartalom', top: '60%', left: '80%', width: '12.5rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '62%', left: '30%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '67%', left: '40%', width: '12.5rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '70%', left: '60%', width: '12.5rem' },
    { src: 'assets/bab1.png', alt: 'tiktok', top: '71%', left: '20%', width: '12.5rem' },
    { src: 'assets/bab4.png', alt: 'tartalom', top: '72%', left: '80%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '73%', left: '40%', width: '12.5rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '76%', left: '60%', width: '12.5rem' },
    { src: 'assets/bab1.png', alt: 'tiktok', top: '82%', left: '73%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '85%', left: '40%', width: '12.5rem' },
    { src: 'assets/bab4.png', alt: 'tartalom', top: '90%', left: '80%', width: '12.5rem' },
    { src: 'assets/bab3.png', alt: 'video', top: '93%', left: '60%', width: '12.5rem' },
    { src: 'assets/bab2.png', alt: 'videovagas', top: '96%', left: '20%', width: '12.5rem' },

    { src: 'assets/fenygomb.png', alt: 'fenygomb', top: '-10%', left: '-55%', width: '100rem' },
    { src: 'assets/fenygomb.png', alt: 'fenygomb', top: '72%', left: '50%', width: '100rem' },
    { src: 'assets/fenygomb.png', alt: 'fenygomb', top: '30%', left: '-55%', width: '100rem' },
    { src: 'assets/fenygomb.png', alt: 'fenygomb', top: '10%', left: '50%', width: '100rem' },
    { src: 'assets/fenygomb.png', alt: 'fenygomb', top: '50%', left: '50%', width: '100rem' },
    // { src: 'assets/fenygomb.png', alt: 'fenygomb', top: '80%', left: '-55%', width: '100rem' },
    { src: 'assets/kukac.png', alt: 'kukac', top: '80%', left: '-22%', width: '35rem' },
  ];

  fixedTopValues = ['1%', '4%', '9%', '16%', '21%', '25%', '31%', '38%', '42%', '47%', '53%', '57%', '60%', '62%', '67%', '70%', '71%', '72%', '73%', '76%', '82%', '85%', '90%', '93%', '96%'];

  ngOnInit() {
    this.assignRandomSrcValues();
  }

  assignRandomSrcValues() {
    // Másolatot készítünk az összes elérhető `src` értékről
    const availableSrcs = this.allImages
      .filter(img => img.alt !== 'fenygomb' && img.alt !== 'kukac')
      .map(img => img.src);
  
    this.images = this.allImages.map(img => {
      // Ha az elem "fénygömb" vagy "kukac", megtartjuk az eredeti értékét
      if (img.alt === 'fénygömb' || img.alt === 'kukac') {
        return { ...img };
      }
  
      if (availableSrcs.length === 0) {
        return { ...img };
      }
  
      const randomIndex = Math.floor(Math.random() * availableSrcs.length);
      const randomSrc = availableSrcs[randomIndex];
  
      availableSrcs.splice(randomIndex, 1);
  
      return { ...img, src: randomSrc };
    });
  }
}
