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

const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "contacto" , component: ContactoComponent},
  {path: "frentes" , component: FrentesComponent},
  {path: "barandas" , component: BarandasComponent},
  {path: "puertas" , component: PpoteComponent},
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
    PpoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
