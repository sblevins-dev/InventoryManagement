import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  category: string;
  stock: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  products: Product[] = [
    { name: 'Laptop', price: 999, category: 'Electronics', stock: 10 },
    { name: 'Headphones', price: 199, category: 'Audio', stock: 25 },
    { name: 'Shoes', price: 79, category: 'Fashion', stock: 50 },
    { name: 'Coffee Mug', price: 15, category: 'Home', stock: 100 }
  ];

  editProduct(product: Product) {
    console.log('Editing', product);
    // Add your edit logic here
  }

  deleteProduct(product: Product) {
    console.log('Deleting', product);
    // Add your delete logic here
  }
}
