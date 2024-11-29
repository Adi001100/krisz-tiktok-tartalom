import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gyik',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gyik.component.html',
  styleUrl: './gyik.component.css'
})
export class GyikComponent {

  faqs = [
    {
      question: 'MIÉRT JÓK A VIDEÓS TARTALMAK?',
      answer: 'A videós tartalmak hatékonyak, mert vizuálisan és érzelmileg is lekötik a nézőket, könnyen érthetők, és gyorsan átadják az információt. Emellett növelik az elköteleződést, megoszthatók, és jobban megmaradnak az emberek emlékezetében.',
      isOpen: false
    },
    {
      question: 'KELL-E BÁRMIFÉLE ESZKÖZT BIZTOSÍTANOM A VIDEÓK ELKÉSZÍTÉSÉHEZ?',
      answer: 'A forgatáshoz az eszközöket mi biztosítjuk. Ha a termékedről szeretnél videót, akkor a videóban szereplő termékeket kell biztosítanod, illetve ha a szolgáltatásod egy jellegzetes helyszínen történik, akkor a helyszín biztosítása lenne szükséges.',
      isOpen: false
    },
    {
      question: 'CSOMAGAJÁNLATOKTÓL ELTÉRŐ MENNYISÉGBEN IS VÁLLALTOK VIDEÓKAT?',
      answer: 'Természetesen, de a tapasztalatunk szerint nem érdemes havi 8 videó alatt belevágni a Social Media tartalom gyártásába. Viszont keress fel minket bátran, egyedi ajánlatot adunk az elképzeléseidnek megfelelően!',
      isOpen: false
    },
    {
      question: 'KELL-E SZEREPELNEM A VIDEÓKBAN?',
      answer: 'Nem kötelező. Ha nem érzed magad jól a kamera előtt és nem szeretnél szerepelni, akkor szereplőt tudunk biztosítani.',
      isOpen: false
    },
    {
      question: 'KI TÖLTI FEL A VIDEÓKAT?',
      answer: 'Akár te magad is, de az áraink tartalmazzák ennek a díját, így egyszerűbb ránk bíznod a feladatot.',
      isOpen: false
    },
    {
      question: 'VAN ÉRTELME HIRDETÉS NÉLKÜL IS TARTALMAT GYÁRTANI?',
      answer: 'Alapvetően igen, de egyes videókat érdemes kis összeggel megtámogatni a nagyobb célközönség elérése érdekében.',
      isOpen: false
    }
  ];

  toggleFAQ(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
