import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryPersonComponent } from './planner/components/delivery-person/delivery-person.component';
import { PlannerDashboardComponent } from './planner/components/planner-dashboard/planner-dashboard.component';
import { OrdersComponent } from './planner/components/orders/orders.component';
import { ToursComponent } from './planner/components/tours/tours.component';


// Define your routes
const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: PlannerDashboardComponent },
	{ path: 'delivery-person', component: DeliveryPersonComponent },
	{ path: 'orders', component: OrdersComponent },
	{ path: 'tour', component: ToursComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }	
