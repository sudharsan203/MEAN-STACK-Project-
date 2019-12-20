import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiurl='http://localhost:50844/api';
  constructor(public http:HttpClient) {
    console.log('Hello Rest Provider');
    this.getAllProducts();
    this.getCompany();
    this.getVehicle();
    this.getProductByVehicle();
    this.getProductDetails();
   }
   getAllProducts()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/products').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getCompany()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/companies').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getVehicle()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/vehicles').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getProductByVehicle()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/products').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getProductDetails()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/products').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
  }
