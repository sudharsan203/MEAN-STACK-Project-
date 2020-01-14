import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {AuthenticationService} from './authentication.service'
import { HomePageModule } from './home/home.module';
import { StorageServiceModule} from 'angular-webstorage-service';
import { LoadingServiceService } from './loading-service.service';
import { HomePage } from './home/home.page';
@NgModule({
  
  declarations: [AppComponent],
  entryComponents: [],
 


  imports: [BrowserModule,StorageServiceModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule], 
  providers: [
    AuthenticationService,
    StatusBar,
    SplashScreen,
    LoadingServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})


@NgModule({
  declarations: [
    AppComponent, 
    HomePage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     HttpClientModule    
    ],
  providers: [
    LoadingServiceService,
    AuthenticationService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}






