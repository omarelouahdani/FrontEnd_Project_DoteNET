import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from './model/product.model';
import { Category } from './model/category.model';
import { Client } from './model/client.model';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:String = "https://localhost:5001";
  public category: Category= new Client(); 
  public client: Client= new Category(); 
  public product: Product= new Product(); 
  constructor(private http:HttpClient, private router:Router) { }

  public getResource(url){
    return this.http.get(this.host+url)

    
  }
  public getCategories(url): Observable<Category[]> {
    return this.http.get<Category[]>(this.host+url); 

    
  }

  public deleteResource(id: number, url){
    return this.http.delete(this.host+url+"/"+id,  { responseType: 'text' });

    
   }

  registerResource(object, url): Observable<Object>{
  
   console.log("Object : "+object.Name)
  return this.http.post(this.host+url,object);

}
updateResource(url,object): Observable<Object> {
    
  
  return this.http.put(this.host+url+"/"+object.Id,object);
}

  
  updateresource(r, url): Observable<Object> {
   
    return this.http.put(this.host+url, r);
  }
  initCategory(category){

    if(category==null){
     
      this.category.Id=0; 
      this.category.Name=""; 
    }else{
      this.category.Id= category.id; 
      this.category.Name= category.name; 
    }
  
  }
  initProduct(product){
    if(product==null){
     
      this.product.Id=0; 
      this.product.Name=""; 
      this.product.category=null; 
    }else{
      this.product.Id= product.id; 
      this.product.Name= product.name; 
      this.product.category=null; 
    }

  }

  initClient(client){

    if(client==null){
     
      this.client.Id=0; 
      this.client.Name=""; 
    }else{
      this.client.Id= client.id; 
      this.client.Name= client.name; 
    }
  
  }
}
