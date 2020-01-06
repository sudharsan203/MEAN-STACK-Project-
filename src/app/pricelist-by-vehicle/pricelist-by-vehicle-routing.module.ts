import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricelistByVehiclePage } from './pricelist-by-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: PricelistByVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricelistByVehiclePageRoutingModule {}
