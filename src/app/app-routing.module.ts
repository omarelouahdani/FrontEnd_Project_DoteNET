import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProductComponent } from './register-product/register-product.component';

import { RegisterCategoryComponent } from './register-category/register-category.component';

import { ClientComponent } from './client/client.component';

import { RegisterClientComponent } from './register-client/register-client.component';

import { ProductsManagementComponent } from './products-management/products-management.component';
import { CategoryComponent } from './category/category.component';



const routes: Routes = [
  //user
  {path:'products', component:ProductsManagementComponent},
 
  {path:'', redirectTo:'home',pathMatch:'full'},
 
  {path:'clients',component:ClientComponent},
 
  {path:'categories',component:CategoryComponent},
 
  {path:'categories/register',component:RegisterCategoryComponent},
  {path:'products/register',component:RegisterProductComponent},
  {path:'clients/register',component:RegisterClientComponent},
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
