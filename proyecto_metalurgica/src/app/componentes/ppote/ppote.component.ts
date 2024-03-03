import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppote',
  templateUrl: './ppote.component.html',
  styleUrls: ['./ppote.component.css']
})
export class PpoteComponent implements OnInit {

  itemsPerSlide!: number;
  singleSlideOffset = true;
  noWrap = false;

  imagenesPortones = [
    'assets/portones/1.jpg',
    'assets/portones/2.jpg',
    'assets/portones/3.jpg',
    'assets/portones/4.jpg',
    'assets/portones/5.jpg',
    'assets/portones/6.jpg',
    'assets/portones/7.jpg',
    'assets/portones/8.jpg',
    
  ];

  imagenesVisiblesPortones = this.imagenesPortones

  ngOnInit() {
    this.itemsPerSlide = window.innerWidth >= 820 ? 5 : 3;
  }

  onResize(event: any) {
    this.itemsPerSlide = event.target.innerWidth >= 820 ? 5 : 3;
  }

  // cantidadVisiblePortones = 8; 
  // imagenesVisiblesPortones = this.imagenesPortones.slice(0, this.cantidadVisiblePortones);

  // verMasPortones() {
  //   this.cantidadVisiblePortones += 4; 
  //   this.imagenesVisiblesPortones = this.imagenesPortones.slice(0, this.cantidadVisiblePortones);
  // }

  // verMenosPortones() {
  //   this.cantidadVisiblePortones -= 4;
  //   this.imagenesVisiblesPortones = this.imagenesPortones.slice(0, this.cantidadVisiblePortones);
  // }

  imagenesPuertas = [
    'assets/puertas/1.jpg',
    'assets/puertas/2.jpg',
    'assets/puertas/3.jpg',
    'assets/puertas/4.jpg',
    'assets/puertas/5.jpg',
    'assets/puertas/6.jpg',
    'assets/puertas/7.jpg',
    'assets/puertas/8.jpg',
    'assets/puertas/9.jpg',
    'assets/puertas/10.jpg',
    'assets/puertas/11.jpg',
    'assets/puertas/12.jpg',
    'assets/puertas/13.jpg',
    'assets/puertas/14.jpg',
    
  ];

  imagenesVisiblesPuertas = this.imagenesPuertas
  // cantidadVisiblePuertas = 8; 
  // imagenesVisiblesPuertas = this.imagenesPuertas.slice(0, this.cantidadVisiblePuertas);

  // verMasPuertas() {
  //   this.cantidadVisiblePuertas += 4; 
  //   this.imagenesVisiblesPuertas = this.imagenesPuertas.slice(0, this.cantidadVisiblePuertas);
  // }

  // verMenosPuertas() {
  //   this.cantidadVisiblePuertas -= 4;
  //   this.imagenesVisiblesPuertas = this.imagenesPuertas.slice(0, this.cantidadVisiblePuertas);
  // }

  imagenesTechos = [
    'assets/techos/1.jpg',
    'assets/techos/2.jpg',
    'assets/techos/3.jpg',
    'assets/techos/4.jpg',
    'assets/techos/5.jpg',
    'assets/techos/6.jpg',
    'assets/techos/7.jpg',
    'assets/techos/8.jpg',
    'assets/techos/9.jpg',
    'assets/techos/10.jpg',
    'assets/techos/11.jpg',
    'assets/techos/12.jpg',
    'assets/techos/13.jpg',
    'assets/techos/14.jpg',
    'assets/techos/15.jpg',
    'assets/techos/16.jpg',
    'assets/techos/17.jpg',
    'assets/techos/18.jpg',
    'assets/techos/19.jpg',
    'assets/techos/20.jpg',
    'assets/techos/21.jpg',
    'assets/techos/22.jpg',
    'assets/techos/23.jpg',
    'assets/techos/24.jpg',
    'assets/techos/25.jpg',
    'assets/techos/26.jpg',
    'assets/techos/27.jpg',

  ];

  imagenesVisiblesTechos = this.imagenesTechos

  // cantidadVisibleTechos = 8; 
  // imagenesVisiblesTechos = this.imagenesTechos.slice(0, this.cantidadVisibleTechos);

  // verMasTechos() {
  //   this.cantidadVisibleTechos += 4; 
  //   this.imagenesVisiblesTechos = this.imagenesTechos.slice(0, this.cantidadVisibleTechos);
  // }

  // verMenosTechos() {
  //   this.cantidadVisibleTechos -= 4;
  //   this.imagenesVisiblesTechos = this.imagenesTechos.slice(0, this.cantidadVisibleTechos);
  // }

}
