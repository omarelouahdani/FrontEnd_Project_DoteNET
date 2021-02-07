import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clients;
  public client : Client = new Client();
  public searchCat: string=""; 
  public url: string="/api/clients"; 
  

  constructor(private catalService:CatalogueService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log( this.catalService); 
    this.catalService.getResource(this.url)
    .subscribe(data=>{
this.clients=data;

    },err=>{
console.log(err);
    })
  }
 
  OnDeleteClient(p){
    var val = confirm("Voulez-vous supprimer ce client ?");

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
  updateClient(c){
    this.catalService.initClient(c); 
  
    this.router.navigate(['clients/register']);
    
  }
  newClient(){
    this.catalService.initClient(null);
    this.router.navigate(['clients/register'])


  }

}
