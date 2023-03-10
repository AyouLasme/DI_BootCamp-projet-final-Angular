import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCouturierComponent } from './profil-couturier.component';

describe('ProfilCouturierComponent', () => {
  let component: ProfilCouturierComponent;
  let fixture: ComponentFixture<ProfilCouturierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCouturierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCouturierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
