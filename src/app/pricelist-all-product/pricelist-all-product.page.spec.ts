import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricelistAllProductPage } from './pricelist-all-product.page';

describe('PricelistAllProductPage', () => {
  let component: PricelistAllProductPage;
  let fixture: ComponentFixture<PricelistAllProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricelistAllProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricelistAllProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
