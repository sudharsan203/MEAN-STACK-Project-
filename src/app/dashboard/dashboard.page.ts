import { Component, OnInit, ViewChild, Renderer, Pipe, PipeTransform } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController, IonSlides } from '@ionic/angular';
import { Key } from 'Ionic_TPL/node_modules/protractor/built';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
@Pipe({
  name: 'filter'
})
export class DashboardPage implements OnInit {
 
  items: any[]
  fieldName: string
  products:any;
  public searchInput='';
  searchproduct = [];
  searchcomp = [];
  searchitem:any;
  searchcompany:any;
  first_name:any;
  searchText: string;
  overlayHidden: boolean = false;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService, public renderer: Renderer,public router:ActivatedRoute) {
    
//    this.initializeItems();

   }
   public hideOverlay() {
    this.overlayHidden = true;
  }
  ngOnInit() {

    this.router.paramMap.subscribe(paramMap => {
     this.first_name = paramMap.get("first_name");

    })
    this.restProvider.getProductsAlltypes().then(data => {
      this.searchitem = data; })
    this.restProvider.getCompany().then(data2 => {
      this.searchcompany = data2; })
  }
  // initializeItems() {
  //   this.searchproduct = [];
  //   this.searchcomp = [];
  // }
  // getItems(ev) {
  //   // Reset items back to all of the items
  //   this.initializeItems();

  //   // set val to the value of the ev target
  //   var val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.searchproduct = this.searchitem.filter((item) => {
  //       return (item.p_name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
  //     })
  //     this.searchcomp = this.searchcompany.filter((item) => {
  //       return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
 
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
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  slideOptions = {
    initialSlide: 0,
    speed: 400,
  };
  
}
