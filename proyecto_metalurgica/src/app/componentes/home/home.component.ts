import { Component, AfterViewInit , OnInit  } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})


export class HomeComponent implements AfterViewInit {
  previousScrollY: number = 0;
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
      const currentScrollY = window.scrollY;

      if (currentScrollY > this.previousScrollY) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      this.previousScrollY = currentScrollY;
    }
  }

  ngAfterViewInit(): void {
    $('#carouselExampleControls').carousel();
  }

}
