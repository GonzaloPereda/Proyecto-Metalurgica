import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleSubMenu(event: Event) {
    event.preventDefault(); // Evita que el evento se propague y cause problemas con Bootstrap
    const subMenu = document.getElementById('subMenu');
    if (subMenu) {
      event.stopPropagation();
      subMenu.classList.toggle('show');
    }
  }
}
