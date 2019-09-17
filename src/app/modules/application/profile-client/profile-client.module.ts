import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProfileClientRoutingModule } from './profile-client-routing.module';
import { ProfileClientComponent } from './profile-client.component';
import { FormOuvertureCompteComponent } from './components/form-ouverture-compte/form-ouverture-compte.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ImageViewerModule } from 'ng2-image-viewer';

@NgModule({
  declarations: [ProfileClientComponent, FormOuvertureCompteComponent],
  imports: [
    CommonModule,
    ProfileClientRoutingModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    ImageViewerModule
  ],
  exports: [
    ProfileClientComponent
  ]
})
export class ProfileClientModule { }
