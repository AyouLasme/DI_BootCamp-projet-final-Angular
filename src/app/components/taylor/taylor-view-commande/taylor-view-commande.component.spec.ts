import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaylorViewCommandeComponent } from './taylor-view-commande.component';

describe('TaylorViewCommandeComponent', () => {
  let component: TaylorViewCommandeComponent;
  let fixture: ComponentFixture<TaylorViewCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaylorViewCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaylorViewCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
