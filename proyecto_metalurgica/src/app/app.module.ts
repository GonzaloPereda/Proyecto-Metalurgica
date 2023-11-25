import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { RouterModule ,Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  {path: "home" , component: HomeComponent},
  {path: "contacto" , component: ContactoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
