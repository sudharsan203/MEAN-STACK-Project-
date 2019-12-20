import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  splash = true;
  //tabBarElement : any;
  constructor(private route: Router) { }

  dashboard() {
    this.route.navigate(['/dashboard']);
  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 1000);
  }
  ngOnInit()
  {
    this.ionViewDidLoad();
  }
}
