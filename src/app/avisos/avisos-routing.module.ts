import { AvisosComponent } from './avisos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: AvisosComponent,
    children: [
      {path: '', component: ListaComponent},
      {path: 'adicionar', component: FormComponent},
      {path: 'editar/:id', component: FormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvisosRoutingModule { }
