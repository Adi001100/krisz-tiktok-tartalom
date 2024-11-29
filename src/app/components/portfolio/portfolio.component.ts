import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';

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
  currentIndex: number = 0;
  direction: number = 1; // 1: előre, -1: vissza
  visibleSlides: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibleSlides();

      setInterval(() => {
        this.nextSlide();
      }, 2000);

      window.addEventListener('resize', () => {
        this.updateVisibleSlides();
      });
    }
  }

  updateVisibleSlides(): void {
    this.visibleSlides = Math.floor(window.innerWidth / 375) + 1; // 375px szélességű képek
  }

  nextSlide(): void {
    const maxIndex = this.svgs.length - this.visibleSlides;

    if (this.currentIndex >= maxIndex) {
      this.direction = -1; // Visszafele mozog
    }
    if (this.currentIndex <= 0) {
      this.direction = 1; // Előrefele mozog
    }

    this.currentIndex += this.direction;
  }
}
