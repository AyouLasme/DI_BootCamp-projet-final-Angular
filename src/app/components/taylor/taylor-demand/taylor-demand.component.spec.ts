import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorDemandComponent } from './taylor-demand.component';

describe('TaylorDemandComponent', () => {
  let component: TaylorDemandComponent;
  let fixture: ComponentFixture<TaylorDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
