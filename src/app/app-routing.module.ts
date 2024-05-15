import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { BasketComponent } from './basket/basket.component';
import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path : 'basket', component: BasketComponent},
  { path : 'produit', component: ProduitComponent},
  { path: 'home', component: HomeComponent},
  { path: 'payment', component: PaymentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
