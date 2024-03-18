import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  itemsPerSlide!: number;
  singleSlideOffset = true;
  noWrap = false;

  
  ngOnInit() {
    this.itemsPerSlide = window.innerWidth >= 820 ? 5 : 3;
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
