import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaAlmuerzosComponent } from './tarjeta.component';

describe('TarjetaAlmuerzosComponent', () => {
  let component: TarjetaAlmuerzosComponent;
  let fixture: ComponentFixture<TarjetaAlmuerzosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaAlmuerzosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaAlmuerzosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
