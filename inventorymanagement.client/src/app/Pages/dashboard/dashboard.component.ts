import { AfterViewInit, Component } from '@angular/core';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, PieController, ArcElement } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, PieController, ArcElement);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit {
  products = [
    { id: 1, title: 'Product A', price: 100, stock: 20, sku: 'SKU001', rating: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Product B', price: 150, stock: 15, sku: 'SKU002', rating: 4.5, image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Product C', price: 200, stock: 10, sku: 'SKU003', rating: 4.5, image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Product D', price: 250, stock: 5, sku: 'SKU004', rating: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Product E', price: 300, stock: 8, sku: 'SKU005', rating: 5.0, image: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Product F', price: 350, stock: 12, sku: 'SKU006', rating: 4.2, image: 'https://via.placeholder.com/150' }
  ];

  lowStockProducts = this.products.filter(product => product.stock < 10);

  ngAfterViewInit(): void {
    // Expense Pie Chart
    const ctx = document.getElementById('expensePieChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Rent', 'Supplies', 'Utilities', 'Salaries'],
        datasets: [{
          data: [3000, 1500, 800, 4200],
          backgroundColor: ['#3B82F6', '#F59E0B', '#10B981', '#EF4444'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });

    // Sales Line Chart
    const lineCtx = document.getElementById('salesLineChart') as HTMLCanvasElement;
    new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Monthly Sales',
          data: [5000, 7000, 6000, 8000, 7500, 9000],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.3 // smooth curves
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: { legend: { position: 'top' } },
        scales: {
          y: { beginAtZero: true },
          x: { grid: { display: false } }
        }
      }
    });
  }
}
