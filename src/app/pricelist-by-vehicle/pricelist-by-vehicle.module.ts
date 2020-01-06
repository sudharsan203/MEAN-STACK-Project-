import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PricelistByVehiclePageRoutingModule } from './pricelist-by-vehicle-routing.module';

import { PricelistByVehiclePage } from './pricelist-by-vehicle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PricelistByVehiclePageRoutingModule
  ],
  declarations: [PricelistByVehiclePage]
})
export class PricelistByVehiclePageModule {}
