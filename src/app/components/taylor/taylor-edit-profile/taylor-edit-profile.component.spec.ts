import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorEditProfileComponent } from './taylor-edit-profile.component';

describe('TaylorEditProfileComponent', () => {
  let component: TaylorEditProfileComponent;
  let fixture: ComponentFixture<TaylorEditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorEditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
