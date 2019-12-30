import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {  
  products:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService) {
    this.getSearch();
   }


  ngOnInit() {
  }
  gotoProducts()
  {
    this.route.navigate(['/products']);
  }
  gotoPriccelist()
  {
    this.route.navigate(['/price-list']);
  }
  getSearch()
  {
     this.restProvider.getAllProducts()
     .then(data=>{
       this.products=data;
       console.log(this.products);
      });
     }
}
