import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ProductsComponent } from './Pages/products/products.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { SuppliersComponent } from './Pages/suppliers/suppliers.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { authGuard } from './Guards/auth.guard';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { homeRedirectGuard } from './Guards/home-redirect.guard';

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [homeRedirectGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [authGuard] },
  { path: 'suppliers', component: SuppliersComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
