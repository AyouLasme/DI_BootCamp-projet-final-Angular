import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorSpaceComponent } from './taylor-space.component';

describe('TaylorSpaceComponent', () => {
  let component: TaylorSpaceComponent;
  let fixture: ComponentFixture<TaylorSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorSpaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
