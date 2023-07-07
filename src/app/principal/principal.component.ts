import { ASTWithSource, VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import {Arepas, Desayuno } from '../Comida';
import { ComidaService } from '../Comida.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public variable=1;  
  public arepa:Arepas[]=[];
  public desayuno:Desayuno[]=[];
  ver=false;
  are=false;
   hide=true;
  constructor(private RestService:ComidaService){}

  ngOnInit(){

   
  }
  
public cargarDataArepas(){
  this.RestService.get("arepas")
  .subscribe(respuesta=>{
    this.arepa=respuesta;
    this.ver=false;
this.are=true;

  })


}
public cargarDataDes(){
  this.RestService.get('desayunos')
  .subscribe(respuesta=>{
    console.log(respuesta)
    this.desayuno=respuesta;
    this.ver=true;
    this.are=false;

  })
}

 mostrarMenu(){
this.hide=false;
}

 esconderMenu(){
  this.hide=true;
 }

}
