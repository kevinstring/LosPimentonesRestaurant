import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComidaService } from '../Comida.service';

@Component({
  selector: 'app-tarjetaDetalle',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaDetalleComponent implements OnInit{

  public pedido:any=[]
  public hide=true;
  constructor(private route:ActivatedRoute, private comidaService:ComidaService){}
   
    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap:any)=>{
          const {params} = paramMap
          this.cargarData(params.nombre,params.variable);
          console.log(params.variable,params.nombre)
         
        })

    }
    cargarData(nombre:string,id:number){
      this.comidaService.pedidos(nombre,id)
      .subscribe(respuesta=>{
         
          this.pedido=respuesta;
          console.log(this.pedido)
    
      })
    }
    mostrarMenu(){
      this.hide=false;
      
     }
     
      esconderMenu(){
        this.hide=true;
      }
}
