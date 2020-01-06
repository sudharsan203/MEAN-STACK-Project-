import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricelistByVehiclePage } from './pricelist-by-vehicle.page';

describe('PricelistByVehiclePage', () => {
  let component: PricelistByVehiclePage;
  let fixture: ComponentFixture<PricelistByVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistByVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricelistByVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
