import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from "./app.service";
import {Cotizacion} from "../Models/Cotizacion";
import {untagTsFile} from "@angular/compiler-cli/src/ngtsc/shims";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient, private app: AppService) {  }

  public getData(){
    this.getDataDB().subscribe((cotizaciones: Cotizacion[]) => {
      this.app.cotizaciones.next(cotizaciones);
    })
  }

  private getDataDB():any {
    try{
      return this.httpClient.get('http://18.190.81.42/api/cotizaciones');
    }catch (e) {
      console.log(e)
    }
  }

  public deleteData(id: number | undefined){
    this.deleteDataDB(id).subscribe((success: Cotizacion) => {
      console.log("Success")
    })
  }

  private deleteDataDB(id: number | undefined):any {
    if (id){
      const url = "http://18.190.81.42/api/delete/" + id.toString()
      try{
        return this.httpClient.delete(url);
      }catch (e) {
        console.log(e)
      }
    }else{
      return console.log("No existe id.")
    }

  }
}
