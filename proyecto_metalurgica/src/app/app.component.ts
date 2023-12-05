import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_metalurgica';
  phoneNumber = '1135571050'; // Reemplaza con tu número de teléfono
  message = 'Hola, estoy interesado en tu servicio'; // Mensaje predeterminado
  whatsappUrl = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
}
