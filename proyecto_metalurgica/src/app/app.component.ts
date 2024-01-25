import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_metalurgica';
  phoneNumber = '1126173500'; 
  message = 'Hola, estoy interesado en tu servicio';
  whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
}
