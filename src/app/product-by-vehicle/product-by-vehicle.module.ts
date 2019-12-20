import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductByVehiclePageRoutingModule } from './product-by-vehicle-routing.module';

import { ProductByVehiclePage } from './product-by-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductByVehiclePageRoutingModule
  ],
  declarations: [ProductByVehiclePage]
})
export class ProductByVehiclePageModule {}
