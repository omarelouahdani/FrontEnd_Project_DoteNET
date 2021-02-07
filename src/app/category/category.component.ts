import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories;
  public category : Category = new Category();
  public searchCat: string=""; 
  public url: string="/api/categories"; 
  

  constructor(private catalService:CatalogueService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.catalService.getResource(this.url).subscribe((data: Category[]) => {  
     
      this.categories = data;  
     
      console.log(  this.categories ) 
    }) 
  }
 
  OnDeleteCategory(p){
    var val = confirm("Voulez-vous supprimer ce catégorie ?");

if( val == true ) {
  console.log(p)
  this.catalService.deleteResource(p, this.url) .subscribe(
    data => {
      console.log(data);
      
  this.ngOnInit();
    },
    error => console.log(error));
       
} 
    
  }  
  updateCategory(category){
 
    this.catalService.initCategory(category); 
  
    this.router.navigate(['categories/register']);
    
  }
  newCategory(){
  
    this.catalService.initCategory(null);
    this.router.navigate(['categories/register'])


  }
 

}
