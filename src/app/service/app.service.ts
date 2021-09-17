import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cotizacion} from "../Models/Cotizacion";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  cotizaciones = new BehaviorSubject<Cotizacion[]>([]);
  constructor() { }
}
