import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HeaderModule } from './components/header/header.module';
import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { ImageViewerModule } from 'ng2-image-viewer';
import { BackOfficeComponent } from './modules/application/back-office/back-office.component';
import { BackOfficeModule } from './modules/application/back-office/back-office.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'cgf-bourse' }),
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    BackOfficeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
