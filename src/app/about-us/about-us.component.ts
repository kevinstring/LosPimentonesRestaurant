import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
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
