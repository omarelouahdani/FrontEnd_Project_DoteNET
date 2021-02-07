import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  client : Client ;
  message : any;
  clients; 
  url: string="/api/clients"
 

  constructor(private catalService : CatalogueService, private router : Router) { 

  }

  ngOnInit() {
    this.client = this.catalService.client;
    this.catalService.getResource(this.url).subscribe((data: Client[]) => {  
     
      this.clients = data;  
    
    }) 
  }
  

  public addCategory(){
    
    this.catalService.registerResource(this.client, this.url)
    .subscribe((data)=> this.message =data);
 
    this.ngOnInit();
    this.router.navigate(['/clients']);
  

  }
  
  processForm(){
  
    if(this.catalService.client.Id==0){
      this.addCategory();
    }else{
      this.catalService.updateResource(this.url,this.client).subscribe((data)=> this.message =data);
      this.router.navigate(['/clients']);

  

    }
  }

}
