import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorHomeComponent } from './taylor-home.component';

describe('TaylorHomeComponent', () => {
  let component: TaylorHomeComponent;
  let fixture: ComponentFixture<TaylorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
