import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorAssistanceComponent } from './taylor-assistance.component';

describe('TaylorAssistanceComponent', () => {
  let component: TaylorAssistanceComponent;
  let fixture: ComponentFixture<TaylorAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
