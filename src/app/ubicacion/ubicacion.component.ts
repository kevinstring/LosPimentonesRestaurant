import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent  implements OnInit{
  public hide:string="none";
  constructor(){}
  ngOnInit() {
 

}
mostrarMenu(){
  this.hide='';
 }
 
  esconderMenu(){
   this.hide="none"
  }
 
}