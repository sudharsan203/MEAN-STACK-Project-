import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
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
  public searchInput='';
  searchproduct = [];
  searchcomp = [];
  searchitem:any;
  searchcompany:any;

  ;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService, public renderer: Renderer) {
    
    this.initializeItems();
   }


  ngOnInit() {
    this.restProvider.getProductsAlltypes().then(data => {
      this.searchitem = data; })
    this.restProvider.getCompany().then(data2 => {
      this.searchcompany = data2; })
  }
  initializeItems() {
    this.searchproduct = [];
    this.searchcomp = [];
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchproduct = this.searchitem.filter((item) => {
        return (item.p_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
      this.searchcomp = this.searchcompany.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getClear(ev) {
    
  }
  gotoAllProducts()
  {
    this.route.navigate(['/all-products']);
  }
  gotoProducts()
  {
    this.route.navigate(['/products']);
  }
  gotoPriccelist()
  {
    this.route.navigate(['/price-list']);
  }
 
  
}
