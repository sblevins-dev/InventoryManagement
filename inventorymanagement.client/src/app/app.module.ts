import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { ProductsComponent } from './Pages/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { SuppliersComponent } from './Pages/suppliers/suppliers.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    ProductsComponent,
    FooterComponent,
    OrdersComponent,
    SuppliersComponent,
    SidebarComponent,
    SignInComponent,
    LandingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
