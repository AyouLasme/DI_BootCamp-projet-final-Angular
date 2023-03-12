import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSpaceComponent } from './customer-space.component';

describe('CustomerSpaceComponent', () => {
  let component: CustomerSpaceComponent;
  let fixture: ComponentFixture<CustomerSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
