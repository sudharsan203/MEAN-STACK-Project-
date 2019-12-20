import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  apiurl='http://localhost:50844/api';
  constructor(public http:HttpClient) {
    console.log('Hello Rest Provider');
    this.getAllProducts();
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
}
