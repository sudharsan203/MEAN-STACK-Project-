import { Component, OnInit, ViewChild, Renderer, ViewChildren, QueryList,AfterViewInit, ElementRef,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServiceService } from '../service.service';
//import 'rxjs/add/operator/map';
import {AccordionComponent} from '../accordion/accordion.component' 


@Component({
  selector: 'app-pricelist-all-product',
  templateUrl: './pricelist-all-product.page.html',
  styleUrls: ['./pricelist-all-product.page.scss'],


})
export class PricelistAllProductPage implements OnInit {
  
  accordionExapanded = true;
  products:any;
    product_types:any;
  @ViewChild('cc', {static: true}) cardContent: any;
  @Input ('title') title:string;

    constructor(private route: Router, public restProvider: ServiceService) {
      
     }

  ngOnInit() {
     this.getProductTypes();
  }
    
     getProductTypes()
     {
       this.restProvider.getProductType()
         .then(data=>{
           this.product_types=data; 

         });    

     }

    goback()
    {
      this.route.navigate(['/price-list'])
    }   

}
