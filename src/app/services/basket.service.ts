import { Injectable } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private panier: { produit: Produit, quantity: number }[] = [];

  ajouterAuPanier(produit: Produit): void {
    const item = this.panier.find(item => item.produit.reference === produit.reference);
    if (item) {
      item.quantity++;
    } else {
      this.panier.push({ produit, quantity: 1 });
    }
  }

  incrementQuantity(produit: Produit): void {
    const item = this.panier.find(item => item.produit.reference === produit.reference);
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(produit: Produit): void {
    const item = this.panier.find(item => item.produit.reference === produit.reference);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.panier = this.panier.filter(item => item.produit.reference !== produit.reference);
      }
    }
  }

  isInCart(produit: Produit): boolean {
    return this.panier.some(item => item.produit.reference === produit.reference);
  }

  getQuantity(produit: Produit): number {
    const item = this.panier.find(item => item.produit.reference === produit.reference);
    return item ? item.quantity : 0;
  }

  getPanier(): { produit: Produit, quantity: number }[] {
    return this.panier;
  }

  getTotal(): number {
    return this.panier.reduce((total, item) => total + item.produit.prix * item.quantity, 0);
  }

  removeItem(produit: Produit): void {
    this.panier = this.panier.filter(item => item.produit.reference !== produit.reference);
  }

  clearPanier(): void {
    this.panier = [];
  }
}
