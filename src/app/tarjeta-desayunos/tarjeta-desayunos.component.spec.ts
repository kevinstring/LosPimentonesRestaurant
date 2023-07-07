import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDesayunosComponent } from './tarjeta-desayunos.component';

describe('TarjetaDesayunosComponent', () => {
  let component: TarjetaDesayunosComponent;
  let fixture: ComponentFixture<TarjetaDesayunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDesayunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
