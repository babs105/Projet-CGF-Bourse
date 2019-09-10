import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileClientRoutingModule } from './profile-client-routing.module';
import { ProfileClientComponent } from './profile-client.component';

@NgModule({
  declarations: [ProfileClientComponent],
  imports: [
    CommonModule,
    ProfileClientRoutingModule
  ],
  exports: [
    ProfileClientComponent
  ]
})
export class ProfileClientModule { }
