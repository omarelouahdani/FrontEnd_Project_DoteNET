import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

 
  public selectedOptionCat: string;
  public categories;
  product: Product= new Product();
  submitted = false;
  op:boolean = false; 


  constructor(private catService: CatalogueService, private router:Router) { 
    
  }

  ngOnInit() {
    
    this.categories = this.catService.getResource('/api/categories').subscribe(data=>{
      this.categories=data;
      this.categories = this.categories;
                    },err=>{
              console.log(err);
                    })
  }
  
  public addProduct(){
    
    this.catService.registerResource(this.product, "/api/products");
 
    this.ngOnInit();
    this.router.navigate(['/products']);
  

  }
  
  onSubmit(){
  
    if(this.catService.product.Id==0){
      this.addProduct();
    }else{
      this.catService.updateResource("/api/products",this.product);
      this.router.navigate(['/products']);

  

    }
  }
  selectOption(c){
    this.product.category=c; 
  }

}
