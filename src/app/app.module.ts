import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsManagementComponent } from './products-management/products-management.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterCategoryComponent } from './register-category/register-category.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsManagementComponent,
    CategoryComponent,
    ClientComponent,
    RegisterCategoryComponent,
    RegisterClientComponent,
    RegisterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
