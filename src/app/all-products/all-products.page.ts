import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.page.html',
  styleUrls: ['./all-products.page.scss'],
})
export class AllProductsPage implements OnInit {
  products:any;
  public searchInput='';
  searchproduct = [];
  searchitem:any;


  public showSearchBar = false;

  constructor(public loading: LoadingServiceService,private route: Router,public navCtrl: NavController, public restProvider: ServiceService) {
    
   }

  ngOnInit() {
    this.loading.present();
    this.restProvider.getProductsAlltypes()
    .then(data=>{
     this.products=data;
     this.loading.dismiss();
    } ,error => {
        console.log(error);
        this.loading.dismiss();
      })
    
    this.restProvider.getProductsAlltypes().then(data => {
      this.searchitem = data; })
  }
  initializeItems() {
    this.searchproduct = [];

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
    }
  }
  gotoProductdetails()
  {
    this.route.navigate(['/productDetail']);
  }
  
  onclick(event: Event) {
    this.showSearchBar = !this.showSearchBar;

  }
 
  }


