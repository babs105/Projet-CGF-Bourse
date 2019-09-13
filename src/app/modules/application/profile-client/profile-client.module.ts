import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProfileClientRoutingModule } from './profile-client-routing.module';
import { ProfileClientComponent } from './profile-client.component';
import { FormOuvertureCompteComponent } from './components/form-ouverture-compte/form-ouverture-compte.component';
import { FormCoventionComponent } from './components/form-covention/form-covention.component';

@NgModule({
  declarations: [ProfileClientComponent, FormOuvertureCompteComponent, FormCoventionComponent],
  imports: [
    CommonModule,
    ProfileClientRoutingModule,
    FormsModule
  ],
  exports: [
    ProfileClientComponent
  ]
})
export class ProfileClientModule { }
