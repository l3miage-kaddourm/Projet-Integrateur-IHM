// payment-form.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../services/basket.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  cardHolderName: string = '';

  constructor(private router: Router, private basketService : BasketService) {}

  validerPaiement(): void {
    if (this.isFormValid()) {
      alert('Commande passée avec succès !');
      this.basketService.clearPanier();
      this.router.navigate(['/']);
    }
  }

  isFormValid(): boolean {
    return this.cardNumber.replace(/\s/g, '').length === 16 &&
           this.cvv.length === 3 &&
           this.validateExpiryDate(this.expiryDate);
  }

  validateExpiryDate(expiryDate: string): boolean {
    const pattern = /(0[1-9]|1[0-2])\/[0-9]{2}/;
    if (!pattern.test(expiryDate)) {
      return false;
    }
    const [month, year] = expiryDate.split('/').map(Number);
    return month >= 1 && month <= 12;
  }

  formatCardNumber(): void {
    this.cardNumber = this.cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
  }

  formatExpiryDate(): void {
    if (this.expiryDate.length === 2 && !this.expiryDate.includes('/')) {
      this.expiryDate += '/';
    }
    if (this.expiryDate.length > 5) {
      this.expiryDate = this.expiryDate.slice(0, 5);
    }
  }
}
