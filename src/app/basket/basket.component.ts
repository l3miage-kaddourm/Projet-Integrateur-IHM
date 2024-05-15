import { Component, OnInit } from '@angular/core';
import { BasketService } from '../services/basket.service';
import { Produit } from '../interfaces/produit';
import { ImageMappingService } from '../services/image-mapping.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  panier: { produit: Produit, quantity: number }[] = [];
  total: number = 0;

  constructor(
    private panierService: BasketService,
    private imageMappingService: ImageMappingService
  ) { }

  ngOnInit(): void {
    this.getPanier();
    this.calculateTotal();
  }

  getPanier(): void {
    this.panier = this.panierService.getPanier();
  }

  calculateTotal(): void {
    this.total = this.panier.reduce((acc, item) => acc + item.produit.prix * item.quantity, 0);
  }

  incrementQuantity(produit: Produit): void {
    this.panierService.incrementQuantity(produit);
    this.calculateTotal();
    this.getPanier();
  }

  decrementQuantity(produit: Produit): void {
    this.panierService.decrementQuantity(produit);
    this.calculateTotal();
    this.getPanier();
  }

  removeItem(produit: Produit): void {
    this.panierService.removeItem(produit);
    this.calculateTotal();
    this.getPanier();
  }

  getImage(titre: string): string {
    return this.imageMappingService.getImage(titre);
  }
}
