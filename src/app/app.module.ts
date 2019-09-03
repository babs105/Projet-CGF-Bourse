import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ConnexionComponent } from './modules/general/connexion/connexion.component';
import { InscriptionComponent } from './modules/general/inscription/inscription.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ConnexionModule } from './modules/general/connexion/connexion.module';
import { InscriptionModule } from './modules/general/inscription/inscription.module';
import { AboutModule } from './modules/general/about/about.module';
import { ContactModule } from './modules/general/contact/contact.module';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';

import { FooterModule } from './components/footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

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
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
