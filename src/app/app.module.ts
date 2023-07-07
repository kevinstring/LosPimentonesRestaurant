import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TarjetaDetalleComponent } from './tarjeta-detalle/tarjeta.component';
import { PrincipalComponent } from './principal/principal.component';
import { TarjetaAlmuerzosComponent } from './tarjetaAlmuerzos/tarjeta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TarjetaDesayunosComponent } from './tarjeta-desayunos/tarjeta-desayunos.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { QuetzalPipe } from './quetzal.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TarjetaAlmuerzosComponent,
    TarjetaDetalleComponent,
    PrincipalComponent,
    TarjetaDesayunosComponent,
    AboutUsComponent,
    UbicacionComponent,
    QuetzalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
