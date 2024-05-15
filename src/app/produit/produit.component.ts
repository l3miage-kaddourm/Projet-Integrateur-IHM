import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { BasketService } from '../services/basket.service';
import { SearchService } from '../services/search.service';
import { Produit } from '../interfaces/produit';
import { ImageMappingService } from '../services/image-mapping.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produits: Produit[] = [];
  filteredProduits: Produit[] = [];

  constructor(
    private produitService: ProduitService,
    private panierService : BasketService,
    private searchService: SearchService,
    private imageMappingService: ImageMappingService
  ) { }

  ngOnInit(): void {
    this.getProduits();
    this.searchService.searchQuery$.subscribe(query => {
      this.filterProduits(query);
    });
  }

  getProduits(): void {
    this.produitService.getProduits()
      .subscribe(produits => {
        this.produits = produits;
        this.filteredProduits = produits;
      });
  }

  filterProduits(query: string): void {
    if (query) {
      this.filteredProduits = this.produits.filter(produit =>
        produit.titre.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredProduits = this.produits;
    }
  }

  ajouterAuPanier(produit: Produit): void {
    this.panierService.ajouterAuPanier(produit);
  }

  incrementQuantity(produit: Produit): void {
    this.panierService.incrementQuantity(produit);
  }

  decrementQuantity(produit: Produit): void {
    this.panierService.decrementQuantity(produit);
  }

  isInCart(produit: Produit): boolean {
    return this.panierService.isInCart(produit);
  }

  getQuantity(produit: Produit): number {
    return this.panierService.getQuantity(produit);
  }

  toggleDescription(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.toggle('expanded');
  }

  getImage(titre: string): string {
    return this.imageMappingService.getImage(titre);
  }
}

