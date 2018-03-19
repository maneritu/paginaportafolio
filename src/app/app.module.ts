import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//rutas

import { app_routing } from './app.routes';

//servicios

import { InformacionService } from './services/informacion.service';


//Componentes
import { AppComponent } from './app.component';
import  { PruebaComponent} from './prueba/prueba.component';
import { HeaderComponent} from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';




@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    NosotrosComponent,
    DetalleComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
