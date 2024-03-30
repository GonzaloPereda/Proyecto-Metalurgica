import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  constructor(private route: ActivatedRoute, private location: Location) { }

  itemsPerSlide!: number;
  singleSlideOffset = true;
  noWrap = false;

  
  ngOnInit() {
    this.itemsPerSlide = window.innerWidth >= 820 ? 5 : 3;

    this.route.url.subscribe(url => {
      if (url.length && url[0].path === 'servicios-metalurgicos') {
        // Desplázate hacia arriba de la sección
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  onResize(event: any) {
    this.itemsPerSlide = event.target.innerWidth >= 820 ? 5 : 3;
  }

  imagenesCorte = [
    'assets/corte/1.jpg',
    'assets/corte/2.jpg',
    'assets/corte/3.jpg',
    'assets/corte/4.jpg',
    'assets/corte/1.jpg',
  ];

  imagenesVisiblesCorte = this.imagenesCorte;

  imagenesCilindrado = [
    'assets/cilindrados/1.jpg',
    'assets/cilindrados/2.jpg',
    'assets/cilindrados/3.jpg',
    'assets/cilindrados/1.jpg',
    'assets/cilindrados/2.jpg',
  ];

  imagenesVisiblesCilindrado = this.imagenesCilindrado;

}
