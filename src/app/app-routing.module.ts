import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CotizacionesComponent} from "./components/cotizaciones/cotizaciones.component";
import {HomeComponent} from "./components/home/home.component";
import {ChatComponent} from "./components/chat/chat.component";

//RUTAS DE LA PAGINA
const routes: Routes = [
  {path: 'cotizaciones', component: CotizacionesComponent},
  {path: 'chat', component: ChatComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
