import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCouturierComponent } from './accueil-couturier.component';

describe('AccueilCouturierComponent', () => {
  let component: AccueilCouturierComponent;
  let fixture: ComponentFixture<AccueilCouturierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilCouturierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilCouturierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
