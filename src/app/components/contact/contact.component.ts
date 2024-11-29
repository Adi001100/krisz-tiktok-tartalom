import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PopupComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  options: string[] = ['"PRÓBA"', '“FORYOUPAGE”', '"VIRAL"', '"EGYÉNI"'];
  selectedOption: string | null = null;
  responseMessage: string = '';
  responseTitle: string = '';
  isPopupVisible: boolean = false;

  constructor(private http: HttpClient) {}

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  onSubmit(): void {
    if (!this.selectedOption) {
      this.showPopup('Hiba', 'Kérjük, válasszon egy opciót!');
      return;
    }

    const payload = {
      name: this.name,
      email: this.email,
      message: this.message || '',
      option: this.selectedOption
    };

    this.http.post('http://localhost/php-mailer/EmailSender.php', payload).subscribe(
      () => {
        this.showPopup('Sikeres küldés', 'Üzenetét sikeresen elküldtük!');
        this.resetForm();
      },
      () => {
        this.showPopup('Hiba', 'Hiba történt az üzenet küldésekor.');
        this.resetForm();
      }
    );
  }

  showPopup(title: string, message: string): void {
    this.responseTitle = title;
    this.responseMessage = message;
    this.isPopupVisible = true;
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  resetForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
    this.selectedOption = null;
  }
}