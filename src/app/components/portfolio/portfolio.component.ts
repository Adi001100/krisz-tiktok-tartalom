import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
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
  position: number = 0;
  speed: number = 2;
  slideWidth: number = 375;
  animationFrameId: any = null;
  restartTimeoutId: any = null;
  restartDelay: number = 3000;

  touchStartX: number = 0; // Az érintés kezdő X-koordinátája
  touchEndX: number = 0;   // Az érintés végső X-koordinátája
  swipeThreshold: number = 50; // Minimális távolság a swipe érzékeléshez

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.extendedSvgs = [...this.svgs, ...this.svgs];
      this.startAutoScroll();
    }
  }

  startAutoScroll(): void {
    if (this.animationFrameId) {
      return;
    }
    const scroll = () => {
      this.position -= this.speed;

      const resetThreshold = this.svgs.length * this.slideWidth;
      if (Math.abs(this.position) >= resetThreshold) {
        this.position = 0;
      }

      this.animationFrameId = requestAnimationFrame(scroll);
    };

    this.animationFrameId = requestAnimationFrame(scroll);
  }

  stopAutoScroll(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  restartAutoScroll(): void {
    if (this.restartTimeoutId) {
      clearTimeout(this.restartTimeoutId);
    }

    this.restartTimeoutId = setTimeout(() => {
      this.startAutoScroll();
    }, this.restartDelay);
  }

  prevSlide(): void {
    this.stopAutoScroll();
    this.position += this.slideWidth;

    const maxPosition = -(this.svgs.length * this.slideWidth);
    if (this.position > 0) {
      this.position = maxPosition + this.slideWidth;
    }

    this.restartAutoScroll();
  }

  nextSlide(): void {
    this.stopAutoScroll();
    this.position -= this.slideWidth;

    const resetThreshold = -(this.svgs.length * this.slideWidth);
    if (this.position <= resetThreshold) {
      this.position = 0;
    }

    this.restartAutoScroll();
  }

  onTouchStart(event: TouchEvent): void {
    this.stopAutoScroll();
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    const distance = this.touchEndX - this.touchStartX;

    if (Math.abs(distance) > this.swipeThreshold) {
      if (distance > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }

    this.restartAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
    if (this.restartTimeoutId) {
      clearTimeout(this.restartTimeoutId);
    }
  }
}
