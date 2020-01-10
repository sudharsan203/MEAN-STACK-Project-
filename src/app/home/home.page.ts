import { Component } from '@angular/core'
import {AuthenticationService, TokenPayload} from '../authentication.service'
import {Router} from '@angular/router'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  splash =true;
  credentials : TokenPayload = {
    _id:'',
    first_name:'',
    phone: undefined ,
    email:'',
    // password:'',
    type:''
  }
    constructor(public toastController: ToastController,private route:Router,
      public auth: AuthenticationService
      ) {}
      async presentToast() {
        const toast = await this.toastController.create({
          message: ' Login Successful ',
          position: "top",
          duration: 2000
        });
        toast.present();
      }

      async presentToastWithOptions() {
        const toast = await this.toastController.create({
          header: 'No Data',
          message: 'Click to Close',
          position: 'middle',
          buttons: [
            {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        toast.present();
      }

    dashboard(){
     this.auth.register(this.credentials).subscribe(
       () =>{
         this.route.navigateByUrl('/dashboard')
         this.presentToast()
       },
       err =>{
         console.error('error rrrr',err)
       }
     )
    }
    ionViewDidLoad(){
      setTimeout(()=>
        this.splash = false,1000);
    }
    ngOnInit(){
      this.ionViewDidLoad();
    }
    gotoDash()
  {
    this.route.navigate(['/dashboard']);
  }
    
  }
  