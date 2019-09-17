import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { BackOfficeComponent } from './back-office.component';
import { ListDemandeComponent } from './components/list-demande/list-demande.component';

@NgModule({
  declarations: [BackOfficeComponent, ListDemandeComponent],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ],
  exports:[
    BackOfficeComponent
  ]
})
export class BackOfficeModule { }
