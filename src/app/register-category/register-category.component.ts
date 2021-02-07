import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit {

  category : Category ;
  message : any;
  categories; 
  url: string="/api/categories"
 

  constructor(private catalService : CatalogueService, private router : Router) { 

  }

  ngOnInit() {
    this.category = this.catalService.category;
    this.catalService.getResource(this.url).subscribe((data: Category[]) => {  
     
      this.categories = data;  
     
      console.log(  this.categories ) 
    }) 
  }
  

  public addCategory(){
    
    this.catalService.registerResource(this.category, "/api/categories")
    .subscribe((data)=> this.message =data);
 
    this.ngOnInit();
    this.router.navigate(['/categories']);
  

  }
  
  processForm(){
  
    if(this.catalService.category.Id==0){
      this.addCategory();
    }else{
      this.catalService.updateResource("/api/categories",this.category).subscribe((data)=> this.message =data);
      this.router.navigate(['/categories']);

  

    }
  }

}
