import { Component } from '@angular/core'
import {AuthenticationService, TokenPayload} from '../authentication.service'
import {Router} from '@angular/router'

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
    last_name:'',
    email:'',
    password:'',
    type:''
  }
    constructor(private route:Router,
      public auth: AuthenticationService
      ) {}
      
      
    dashboard(){
     this.auth.register(this.credentials).subscribe(
       () =>{
         this.route.navigateByUrl('/dashboard')
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
    
  }