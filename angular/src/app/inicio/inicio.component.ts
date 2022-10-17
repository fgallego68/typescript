import { Component, OnInit } from '@angular/core';
import { FrameworkService } from './../framework.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private _servicio:FrameworkService) { }

  ngOnInit(): void {
  }

}
