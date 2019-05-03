import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ocultar: boolean = true;
  usuario: string;
  pas: string;


  recetas : Array<object> = [
    { receta: 'receta 1', plato: 'arroz con pollo' },
    { receta: 'receta 2', plato: 'tacu tacu' },
    { receta: 'receta 3', plato: 'ceviche' }
  ];


  constructor() { }

  ngOnInit() {
  }

  capturar1(valor: string){
this.usuario= valor;

  }

  capturar2(valor: string) {
    this.pas = valor;

  }

  ingresar( ){
    alert(this.usuario + ' ' + this.pas);
  }

  registrar(){

  }
}
