import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { fail } from 'node:assert';

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
  popupSuccess: boolean = true;

  constructor(private http: HttpClient) { }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  onSubmit(): void {
    if (!this.name.trim()) {
      this.showPopup('Hiba', 'A név megadása kötelező!', false);
      return;
    }

    if (!this.email.trim() || !this.email.includes('@')) {
      this.showPopup('Hiba', 'Kérjük, adjon meg érvényes email címet!', false);
      return;
    }

    if (!this.selectedOption) {
      this.showPopup('Hiba', 'Kérjük, válasszon egy opciót!', false);
      return;
    }

    const payload = {
      name: this.name,
      email: this.email,
      message: this.message || '',
      option: this.selectedOption
    };

    console.log(payload);

    this.http.post('http://localhost/php-mailer/EmailSender.php', payload, { responseType: 'json' }).subscribe(
      (response: any) => {
        if (response.status === 'success') {
          this.showPopup('Sikeres küldés', 'Üzenetét sikeresen elküldtük!', true);
          setTimeout(() => {
            this.resetForm();
            this.closePopup();
          }, 3000);
        } else {
          this.showPopup('Hiba', response.message || 'Ismeretlen hiba történt.', false);
        }
        this.resetForm();
      },
      (error) => {
        this.showPopup('Hiba', 'Hiba történt az üzenet küldésekor. Kérjük, próbálja meg később.', false);
      }
    );
  }

  showPopup(title: string, message: string, isSuccess: boolean): void {
    this.responseTitle = title;
    this.responseMessage = message;
    this.popupSuccess = isSuccess;
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