import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  @Input() title: string = 'Üzenet';
  @Input() message: string = '';
  @Input() isVisible: boolean = false;
  @Input() isSuccess: boolean = true;
  
  @Output() closePopup = new EventEmitter<void>();

  close(): void {
    this.closePopup.emit();
  }
}
