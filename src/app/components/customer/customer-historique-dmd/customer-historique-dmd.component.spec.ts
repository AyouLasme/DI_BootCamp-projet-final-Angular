import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHistoriqueDmdComponent } from './customer-historique-dmd.component';

describe('CustomerHistoriqueDmdComponent', () => {
  let component: CustomerHistoriqueDmdComponent;
  let fixture: ComponentFixture<CustomerHistoriqueDmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHistoriqueDmdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerHistoriqueDmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
