import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductByVehiclePage } from './product-by-vehicle.page';

const routes: Routes = [
  {
    path: '',
    component: ProductByVehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductByVehiclePageRoutingModule {}
