import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  svgs: string[] = [
    'assets/1.svg',
    'assets/2.svg',
    'assets/3.svg',
    'assets/4.svg',
    'assets/5.svg',
    'assets/6.svg',
    'assets/7.svg',
    'assets/8.svg',
    'assets/9.svg'
  ];
  extendedSvgs: string[] = [];
  currentIndex: number = 0;
  transitionEnabled: boolean = true;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Duplázd meg az SVG listát a végtelen görgetéshez
      this.extendedSvgs = [...this.svgs, ...this.svgs];

      // Indítsd el az automatikus görgetést
      this.startAutoScroll();
    }
  }

  // Automatikus görgetés
  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // 3 másodperces intervallum
  }

  // Állítsd le az automatikus görgetést
  stopAutoScroll(): void {
    clearInterval(this.intervalId);
  }

  // Következő dia
  nextSlide(): void {
    this.currentIndex++;

    // Ha eléri a lista végét, ugrik az elejére
    if (this.currentIndex >= this.svgs.length) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = 0;
      }, 500);
    } else {
      this.transitionEnabled = true;
    }
  }

  // Előző dia
  prevSlide(): void {
    this.currentIndex--;

    // Ha visszateker az elejére, ugrik a lista végére
    if (this.currentIndex < 0) {
      setTimeout(() => {
        this.transitionEnabled = false;
        this.currentIndex = this.svgs.length - 1;
      }, 500);
    } else {
      this.transitionEnabled = true;
    }
  }

  // Manuális irányítás (gombok)
  onManualControl(): void {
    this.stopAutoScroll(); // Állítsd le az automatikus görgetést
    this.startAutoScroll(); // Indítsd újra, hogy a felhasználó irányítása után folytassa
  }
}
