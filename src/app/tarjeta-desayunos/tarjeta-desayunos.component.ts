import { Component, Input, OnInit } from '@angular/core';
import { ComidaService } from '../Comida.service';
import { Desayuno } from '../Comida';

@Component({
  selector: 'app-tarjeta-desayunos',
  templateUrl: './tarjeta-desayunos.component.html',
  styleUrls: ['./tarjeta-desayunos.component.css']
})
export class TarjetaDesayunosComponent implements OnInit {

  @Input() des:Desayuno;
  constructor(private RestService:ComidaService){}

  ngOnInit(){

  }


}
