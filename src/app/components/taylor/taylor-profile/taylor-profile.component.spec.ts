import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorProfileComponent } from './taylor-profile.component';

describe('TaylorProfileComponent', () => {
  let component: TaylorProfileComponent;
  let fixture: ComponentFixture<TaylorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
