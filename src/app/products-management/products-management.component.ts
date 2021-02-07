import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {

  public products;
  public product : Product = new Product();
  public searchCat: string=""; 
  public url: string="/api/products"; 
  

  constructor(private catalService:CatalogueService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.catalService.getResource(this.url)
    .subscribe(data=>{
      console.log(data)
this.products=data;

    },err=>{
console.log(err);
    })
  }
 
  OnDeleteProduct(p){
    var val = confirm("Voulez-vous supprimer ce produit ?");

if( val == true ) {
  console.log("Produit : "+p)
  this.catalService.deleteResource(p, this.url) .subscribe(
    data => {
      console.log(data);
      
  this.ngOnInit();
    },
    error => console.log(error));
       
} 
    
  }  
  updateProduct(c){
    this.catalService.initProduct(c); 
  
    this.router.navigate(['products/register']);
    
  }
  newProduct(){
    this.catalService.initProduct(null);
    this.router.navigate(['products/register'])


  }


}
