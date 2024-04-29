import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerHeaderComponent } from './planner/components/planner-header/planner-header.component';
import { PlannerFooterComponent } from './planner/components/planner-footer/planner-footer.component';
import { PlannerLayoutComponent } from './planner/planner-layout/planner-layout.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlannerDashboardComponent } from './planner/components/planner-dashboard/planner-dashboard.component';
import { PlannerBoxComponent } from './planner/components/planner-box/planner-box.component';
import { OrdersComponent } from './planner/components/orders/orders.component';
import { DeliveryPersonComponent } from './planner/components/delivery-person/delivery-person.component';
import { OrderDetailComponent } from './planner/components/order-detail/order-detail.component';
import { ToursComponent } from './planner/components/tours/tours.component';


@NgModule({
	declarations: [
		AppComponent,
		PlannerHeaderComponent,
		PlannerFooterComponent,
		PlannerLayoutComponent,
		PlannerDashboardComponent,
		PlannerBoxComponent,
		OrdersComponent,
		DeliveryPersonComponent,
		OrderDetailComponent,
		ToursComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
	],
	providers: [
		provideClientHydration(),
		provideAnimationsAsync()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
