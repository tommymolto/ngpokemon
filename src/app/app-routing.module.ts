import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MiolocompassoComponent} from './miolocompasso/miolocompasso.component';
import {SobreComponent} from './sobre/sobre.component';
import {ContatoComponent} from './contato/contato.component';
import { Erro404Component } from './erro404/erro404.component';

const routes: Routes = [
  {path:'', component: MiolocompassoComponent},
  {path:'sobre', component: SobreComponent},
  {path:'contato', component: ContatoComponent},
  {path: '*', component: Erro404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
