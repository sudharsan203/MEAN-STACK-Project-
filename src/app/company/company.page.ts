import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';
import { LoadingServiceService } from '../loading-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  company:any;
  constructor(public loading:LoadingServiceService,private route: Router,public navCtrl: NavController, public restProvider: ServiceService) { 
    this.getCompany();
  }

  ngOnInit() {
    this.loading.present();
  }
  gotoVehicle()
  {
    this.route.navigate(['/vehicle']);
  }
  getCompany()
  {
     this.restProvider.getCompany()
     .then(data=>{
       this.company=data;
       this.loading.dismiss();
       console.log(this.company);
     });
  }
}
