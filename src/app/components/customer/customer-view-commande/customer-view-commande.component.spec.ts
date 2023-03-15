import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewCommandeComponent } from './customer-view-commande.component';

describe('CustomerViewCommandeComponent', () => {
  let component: CustomerViewCommandeComponent;
  let fixture: ComponentFixture<CustomerViewCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerViewCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerViewCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
