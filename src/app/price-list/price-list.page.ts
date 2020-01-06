import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.page.html',
  styleUrls: ['./price-list.page.scss'],
})
export class PriceListPage implements OnInit {
  products:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService) { 
  
}
  ngOnInit() {
  }
  gotoPriceallproducts()
  {
    this.route.navigate(['/pricelist-all-product']);
  }
  getAllProducts()
  {
     this.restProvider.getAllProducts()
     .then(data=>{
       this.products=data;
       console.log(this.products);
     });
  }
 

}
