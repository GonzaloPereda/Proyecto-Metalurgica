import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleSubMenu(event: Event) {
    event.preventDefault();
    const subMenuFrentes = document.getElementById('subMenuFrentes');
    if (subMenuFrentes) {
      event.stopPropagation();
      subMenuFrentes.classList.toggle('show');
    }
  }

  toggleSubMenuBarandas(event: Event) {
    event.preventDefault();
    const subMenuBarandas = document.getElementById('subMenuBarandas');
    if (subMenuBarandas) {
      event.stopPropagation();
      subMenuBarandas.classList.toggle('show');
    }
  }

  toggleSubMenuPorto(event: Event) {
    event.preventDefault();
    const subMenuTres = document.getElementById('subMenuTres');
    if (subMenuTres) {
      event.stopPropagation();
      subMenuTres.classList.toggle('show');
    }
  }
}
