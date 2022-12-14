import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular demo';
  mostrar = true;
  fondo = 'color-white';
  lenguajes:string[]=['js', 'PHP', 'java'];
  frameworks:Array<any>=[
    {nombre:'Angular',pop:'70%',edad:9},
    {nombre:'Reactjs',pop:'90%',edad:5},
    {nombre:'Vuejs',pop:'20%',edad:3}
  ];
}
