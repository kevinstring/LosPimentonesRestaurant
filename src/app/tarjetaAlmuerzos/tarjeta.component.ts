import { Component, Input, OnInit } from '@angular/core';
import { ComidaService } from '../Comida.service';
import { Arepas } from '../Comida';

@Component({
  selector: 'app-tarjetaAlmuerzo',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaAlmuerzosComponent implements OnInit {

 @Input() are:Arepas;
  constructor(private RestService:ComidaService){}

  ngOnInit(){
 
    
   
  }


}