import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProductsComponent } from './Pages/products/products.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { SuppliersComponent } from './Pages/suppliers/suppliers.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'suppliers', component: SuppliersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
