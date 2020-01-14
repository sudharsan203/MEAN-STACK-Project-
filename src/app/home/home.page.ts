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

    

    dashboard(){
    // let key = 'khash elcoe';
    // // localStorage.setItem(key, 'Value');
    // localStorage.setItem(key, JSON.stringify(key));
    // console.log(key)
    // let item = JSON.parse(localStorage.getItem(key));
  // let myItem = localStorage.getItem("key");
   // console.log(item)
    //console.log(myItem)

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
  