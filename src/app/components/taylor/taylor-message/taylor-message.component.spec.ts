import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorMessageComponent } from './taylor-message.component';

describe('TaylorMessageComponent', () => {
  let component: TaylorMessageComponent;
  let fixture: ComponentFixture<TaylorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
