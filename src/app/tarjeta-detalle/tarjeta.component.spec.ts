import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDetalleComponent } from './tarjeta.component';

describe('TarjetaComponent', () => {
  let component: TarjetaDetalleComponent;
  let fixture: ComponentFixture<TarjetaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
