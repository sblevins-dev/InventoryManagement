import { Component, OnInit } from '@angular/core';

export interface ProductOrder {
  sku: string;
  title: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  supplier: string;
  orderDate: Date;
  expectedDelivery: Date;
  status: 'Pending' | 'Shipped' | 'Received' | 'Cancelled';
  products: ProductOrder[];
  totalCost: number;
}

// Mock data
export const ORDERS: Order[] = [
  {
    id: 'ORD-1001',
    supplier: 'Acme Supplies',
    orderDate: new Date('2025-09-15'),
    expectedDelivery: new Date('2025-09-22'),
    status: 'Pending',
    products: [
      { sku: 'SKU-001', title: 'Widget A', quantity: 50, unitPrice: 10 },
      { sku: 'SKU-002', title: 'Widget B', quantity: 30, unitPrice: 15 }
    ],
    totalCost: 50*10 + 30*15
  },
  {
    id: 'ORD-1002',
    supplier: 'Global Parts',
    orderDate: new Date('2025-09-10'),
    expectedDelivery: new Date('2025-09-18'),
    status: 'Received',
    products: [
      { sku: 'SKU-003', title: 'Gadget X', quantity: 20, unitPrice: 25 },
      { sku: 'SKU-004', title: 'Gadget Y', quantity: 10, unitPrice: 40 }
    ],
    totalCost: 20*25 + 10*40
  },
  {
    id: 'ORD-1003',
    supplier: 'SupplyCo',
    orderDate: new Date('2025-09-05'),
    expectedDelivery: new Date('2025-09-12'),
    status: 'Shipped',
    products: [
      { sku: 'SKU-005', title: 'Thingamajig', quantity: 15, unitPrice: 35 },
    ],
    totalCost: 15*35
  },
  {
    id: 'ORD-1004',
    supplier: 'Parts Unlimited',
    orderDate: new Date('2025-09-01'),
    expectedDelivery: new Date('2025-09-07'),
    status: 'Cancelled',
    products: [
      { sku: 'SKU-006', title: 'Doodad', quantity: 100, unitPrice: 5 },
    ],
    totalCost: 100*5
  }
];


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  ngOnInit(): void {
      this.orders = ORDERS;
  }
}
