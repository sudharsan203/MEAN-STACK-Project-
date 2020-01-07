import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiurl='http://localhost:3001';
  constructor(public http:HttpClient) {
    
   }
   getSearch(name:String)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/search/'+name).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getAllProducts()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/product').subscribe(data=>{
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
   getCompanyById(name:String)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/companies/'+name).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
   getAllVehicle()
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/vehicles/').subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
   getProductType()
   {
     return new Promise(resolve=>{
       this.http.get(this.apiurl+'/producttypes').subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
 
       });
      });
   }
   getProductsAlltypes()
   {
     return new Promise(resolve=>{
       this.http.get(this.apiurl+'/productbytypes/').subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
 
       });
      });
   }
   getProductsByType(name:string)
   {
     return new Promise(resolve=>{
       this.http.get(this.apiurl+'/productbytypes/'+name).subscribe(data=>{
         resolve(data);
       },err=>{
         console.log(err);
 
       });
      });
   }
   getVehicle(name:String)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/vehicles/'+name).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
   getVeh(name:String)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/veh/'+name).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   getProductByVehicle(name:String)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/productByVehicle/'+name).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }

   
   getProductDetails(name:String)
   {
    return new Promise(resolve=>{
      this.http.get(this.apiurl+'/product/'+name).subscribe(data=>{
        resolve(data);
      },err=>{
        console.log(err);

      });
     });
   }
  }
