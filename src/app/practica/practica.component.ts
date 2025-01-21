import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';

@Component({
  selector: 'app-practica',
  imports: [NgFor],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {

  public datos:any[]=[];//guardar los datos que se obtengan del servicio

  constructor(private servicio:ServiciopracticaService) {}//inyectar la dependencia de ServiciopracticaService

  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos)=>{
        this.datos=datos;//renderiza y pinta en template html
      });
  }//cierra ngOnInit
}//cierra clase