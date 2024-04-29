import { Component, Input } from '@angular/core';
import { OrderDetail } from '../../models/order.model';

@Component({
	selector: 'app-order-detail',
	templateUrl: './order-detail.component.html',
	styleUrl: './order-detail.component.css'
})
export class OrderDetailComponent {
	@Input() order!: OrderDetail[];
}
