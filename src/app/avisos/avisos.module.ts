import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AvisosRoutingModule } from './avisos-routing.module';

import { AvisosComponent } from './avisos.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

import { AvisosService } from './avisos.service';

@NgModule({
  declarations: [AvisosComponent, ListaComponent, FormComponent],
  imports: [
    CommonModule,
    AvisosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AvisosService]
})
export class AvisosModule { }
