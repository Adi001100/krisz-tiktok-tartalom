import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  scrollToSection() {
    const element = document.getElementById('kapcsolat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
