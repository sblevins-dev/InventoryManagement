import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, title: 'Product A', price: 100, stock: 20, sku: 'SKU001', rating: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product B', price: 150, stock: 15, sku: 'SKU002', rating: 4.5, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product C', price: 200, stock: 10, sku: 'SKU003', rating: 4.5, image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Product D', price: 250, stock: 5, sku: 'SKU004', rating: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Product E', price: 300, stock: 8, sku: 'SKU005', rating: 5.0, image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Product F', price: 350, stock: 12, sku: 'SKU006', rating: 4.2, image: 'https://via.placeholder.com/150' }
  ];
}
