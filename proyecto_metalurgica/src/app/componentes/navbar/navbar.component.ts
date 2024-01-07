import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) { }
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

  scrollToBarandas(fragment: string) {
    this.router.navigate(['/barandas'], { fragment: fragment });

    setTimeout(() => {
      const element = document.getElementById(fragment);
  
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  
      this.closeNavbar();
    });
  }

  scrollToFrentes(fragment: string) {
    this.router.navigate(['/frentes'], { fragment: fragment });
    setTimeout(() => {
      const element = document.getElementById(fragment);
  
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  
      this.closeNavbar();
    });
  }

  scrollToPpote(fragment: string) {
    this.router.navigate(['/puertas'], { fragment: fragment });
    setTimeout(() => {
      const element = document.getElementById(fragment);
  
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  
      this.closeNavbar();
    });
  }

  // ngAfterViewInit() {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       const fragment = this.router.parseUrl(this.router.url).fragment;
  //       if (fragment) {
  //         this.viewportScroller.scrollToAnchor(fragment);
  //       }
  //     }
  //   });
  // }

  closeNavbar() {
    const navbarToggler = document.getElementById('navbarNavAltMarkup');
    if (navbarToggler) {
      navbarToggler.classList.remove('show');
    }
  }
  
  
}
