import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../interfaces/produit'; 

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = "/apibackend"

  constructor(private http: HttpClient) { }

  getProduits(): Observable<Produit[]> {
    return this.http.get<any>(`${this.apiUrl}/produits/getProduits`);
  }

  // private handleError(error: HttpErrorResponse) {
  //   // Handle different error scenarios
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side error
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // Server-side error
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // Return an observable with a user-facing error message
  //   return throwError('Something went wrong; please try again later.');
  // }
}

