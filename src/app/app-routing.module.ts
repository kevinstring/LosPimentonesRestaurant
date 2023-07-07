import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { TarjetaDetalleComponent } from './tarjeta-detalle/tarjeta.component';
import { TarjetaAlmuerzosComponent } from './tarjetaAlmuerzos/tarjeta.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'tarjeta/:variable/:nombre', component:TarjetaDetalleComponent},
  {path:'verTarjetas', component:TarjetaAlmuerzosComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'ubicacion', component:UbicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
