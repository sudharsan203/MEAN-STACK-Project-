import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {
  company:any;
  constructor(private route: Router,public navCtrl: NavController, public restProvider: ServiceService) { 
    this.getCompany();
  }

  ngOnInit() {
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
       console.log(this.company);
     });
  }
}
