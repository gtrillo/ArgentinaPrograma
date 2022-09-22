import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArpComponent } from './logo-arp/logo-arp.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { BannerComponent } from './banner/banner.component';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { BotonAgregarComponent } from './boton-agregar/boton-agregar.component';
import { EducacionComponent } from './educacion/educacion.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArpComponent,
    RedesSocialesComponent,
    BannerComponent,
    FotoPerfilComponent,
    ExperienciaComponent,
    BotonAgregarComponent,
    EducacionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
