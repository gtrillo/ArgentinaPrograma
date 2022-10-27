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
import { BotonEditarComponent } from './boton-editar/boton-editar.component';
import { BotonEliminarComponent } from './boton-eliminar/boton-eliminar.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina404Component } from './pagina404/pagina404.component'
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LheaderComponent } from './vista_lectura/lheader/lheader.component';
import { LbannerComponent } from './vista_lectura/lbanner/lbanner.component';
import { LfotoPerfilComponent } from './vista_lectura/lfoto-perfil/lfoto-perfil.component';
import { LexperienciaComponent } from './vista_lectura/lexperiencia/lexperiencia.component';
import { LeducacionComponent } from './vista_lectura/leducacion/leducacion.component';
import { LproyectosComponent } from './vista_lectura/lproyectos/lproyectos.component';
import { LredesSocialesComponent } from './vista_lectura/lredes-sociales/lredes-sociales.component';
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
    SkillsComponent,
    BotonEditarComponent,
    BotonEliminarComponent,
    LoginComponent,
    InicioComponent,
    Pagina404Component,
    ProyectosComponent,
    LheaderComponent,
    LbannerComponent,
    LfotoPerfilComponent,
    LexperienciaComponent,
    LeducacionComponent,
    LproyectosComponent,
    LredesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
