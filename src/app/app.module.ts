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
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CommonModule } from "@angular/common";
import { GeoApiGouvAddressModule } from "@placeme/ngx-geo-api-gouv-address";
import { DeliveryPersonPageComponent } from './delivery-person-page/delivery-person-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateTourComponent } from './planner/components/create-tour/create-tour.component';
import { EmailPipe } from './email.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

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
		DeliveryPersonPageComponent,
		SignInComponent,
		CreateTourComponent,
		EmailPipe
	],

	imports: [
		BrowserModule,
		AppRoutingModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		HttpClientModule,
		DragDropModule,
		CommonModule,
		GeoApiGouvAddressModule.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
		MatFormFieldModule,
		BrowserAnimationsModule,
		MatTableModule,
	],

	providers: [
		provideClientHydration(),
		provideAnimationsAsync(),
		provideHttpClient(withFetch()),
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
