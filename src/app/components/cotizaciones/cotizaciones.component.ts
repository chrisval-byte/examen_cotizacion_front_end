import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";
import {AppService} from "../../service/app.service";
import {Cotizacion} from "../../Models/Cotizacion";

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {
  cotizaciones: Cotizacion[] = []
  constructor(private dataService: DataService, private app: AppService) {
    this.obtenerCotizaciones()
    this.app.cotizaciones.subscribe((data: Cotizacion[]) => {
      this.cotizaciones = data
    })
  }

  ngOnInit(): void {
  }

  obtenerCotizaciones(){
    this.dataService.getData()
  }

  borrarCotizacion(id:number | undefined){
    this.dataService.deleteData(id)
    this.cotizaciones.forEach(x => {
      if(id == x.id){
        this.cotizaciones.pop()
      }
    })
  }

}
