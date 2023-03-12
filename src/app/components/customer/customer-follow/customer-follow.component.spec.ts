import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFollowComponent } from './customer-follow.component';

describe('CustomerFollowComponent', () => {
  let component: CustomerFollowComponent;
  let fixture: ComponentFixture<CustomerFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
