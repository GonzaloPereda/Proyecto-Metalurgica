import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule ,Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FrentesComponent } from './componentes/frentes/frentes.component';
import { BarandasComponent } from './componentes/barandas/barandas.component';
import { PpoteComponent } from './componentes/ppote/ppote.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "contacto" , component: ContactoComponent},
  {path: "frentes" , component: FrentesComponent},
  {path: "barandas" , component: BarandasComponent},
  {path: "puertas" , component: PpoteComponent},
  {path: "servicios-metalurgicos" , component: ServiciosComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    FooterComponent,
    FrentesComponent,
    BarandasComponent,
    PpoteComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CarouselModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
