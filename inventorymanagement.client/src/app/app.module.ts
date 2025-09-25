import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/nav/nav.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { TableComponent } from './Components/table/table.component';
import { ProductsComponent } from './Pages/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrdersComponent } from './Pages/orders/orders.component';
import { SuppliersComponent } from './Pages/suppliers/suppliers.component';

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
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
