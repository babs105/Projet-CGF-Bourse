import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ProfileClientRoutingModule } from './profile-client-routing.module';
import { ProfileClientComponent } from './profile-client.component';
import { FormOuvertureCompteComponent } from './components/form-ouverture-compte/form-ouverture-compte.component';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
// import { ImageViewerModule } from 'ng2-image-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ProfileClientComponent, FormOuvertureCompteComponent],
  imports: [
    CommonModule,
    ProfileClientRoutingModule,
    FormsModule,
    PdfViewerModule
  ],
  exports: [
    ProfileClientComponent
  ]
})
export class ProfileClientModule { }
