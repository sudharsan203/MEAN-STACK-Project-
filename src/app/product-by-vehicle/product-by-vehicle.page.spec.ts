import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductByVehiclePage } from './product-by-vehicle.page';

describe('ProductByVehiclePage', () => {
  let component: ProductByVehiclePage;
  let fixture: ComponentFixture<ProductByVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductByVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductByVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
