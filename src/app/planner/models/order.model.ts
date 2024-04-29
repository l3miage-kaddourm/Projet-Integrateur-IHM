export interface Order {
	orderNum: string;
	date: Date | string;
	clientName: string;
	email: string;
	address: string;
	city: string;
	postalCode: string;
	details: OrderDetail[];
}

export interface OrderDetail {
	itemId: string;
	description: string;
	quantity: number;
  }
