import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'price-list',
    loadChildren: () => import('./price-list/price-list.module').then( m => m.PriceListPageModule)
  },
  {
    path: 'all-products',
    loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
  },
  {
    path: 'all-products',
    loadChildren: () => import('./all-products/all-products.module').then( m => m.AllProductsPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'product-by-vehicle',
    loadChildren: () => import('./product-by-vehicle/product-by-vehicle.module').then( m => m.ProductByVehiclePageModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle/vehicle.module').then( m => m.VehiclePageModule)
  },
  {
    path: 'pricelist-all-product',
    loadChildren: () => import('./pricelist-all-product/pricelist-all-product.module').then( m => m.PricelistAllProductPageModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./company/company.module').then( m => m.CompanyPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
