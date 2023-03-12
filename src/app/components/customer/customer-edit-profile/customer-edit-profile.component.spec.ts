import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditProfileComponent } from './customer-edit-profile.component';

describe('CustomerEditProfileComponent', () => {
  let component: CustomerEditProfileComponent;
  let fixture: ComponentFixture<CustomerEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
