import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';
import { Arepas } from './Comida';
@Injectable({
  providedIn: 'root'
})
export class ComidaService {

constructor(private http:HttpClient) { }
  public get(clasi:string){
 return this.http.get(`https://lospimentones-e7007-default-rtdb.firebaseio.com/${clasi}.json`).pipe(map(a=>{
   const arepa:Arepas[]=[]
     for(let i in a){
      arepa.push(a[i]);
     }
     return arepa;
  } )); //Get a mi API 
  }

  pedidos(nombre:string,id:number  ){
    return this.http.get(`https://lospimentones-e7007-default-rtdb.firebaseio.com/${nombre}/${id-1}.json`)
  
  }
}
