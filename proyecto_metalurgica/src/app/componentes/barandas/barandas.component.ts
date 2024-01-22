import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barandas',
  templateUrl: './barandas.component.html',
  styleUrls: ['./barandas.component.css']
})
export class BarandasComponent implements OnInit{

  itemsPerSlide!: number;
  singleSlideOffset = true;
  noWrap = false;

  imagenesH = [
    'assets/barandas/h/1.jpg',
    'assets/barandas/h/2.jpg',
    'assets/barandas/h/3.jpg',
    'assets/barandas/h/4.jpg',
    'assets/barandas/h/5.jpg',
    'assets/barandas/h/6.jpg',
    'assets/barandas/h/7.jpg',
    'assets/barandas/h/8.jpg',
    'assets/barandas/h/9.jpg',
    'assets/barandas/h/10.jpg',
    'assets/barandas/h/11.jpg',
    'assets/barandas/h/12.jpg',
    'assets/barandas/h/13.jpg',
    'assets/barandas/h/14.jpg',
    'assets/barandas/h/15.jpg',
    'assets/barandas/h/16.jpg',
  ];

  imagenesVisiblesH = this.imagenesH;

  ngOnInit() {
    this.itemsPerSlide = window.innerWidth >= 768 ? 5 : 3;
  }

  onResize(event: any) {
    this.itemsPerSlide = event.target.innerWidth >= 768 ? 5 : 3;
  }

  // cantidadVisibleH = 8; 
  // imagenesVisiblesH = this.imagenesH.slice(0, this.cantidadVisibleH);

  // verMasH() {
  //   this.cantidadVisibleH += 4; 
  //   this.imagenesVisiblesH = this.imagenesH.slice(0, this.cantidadVisibleH);
  // }

  // verMenosH() {
  //   this.cantidadVisibleH -= 4;
  //   this.imagenesVisiblesH = this.imagenesH.slice(0, this.cantidadVisibleH);
  // }

  imagenesBotones = [
    'assets/barandas/botones/1.jpg',
    'assets/barandas/botones/2.jpg',
    'assets/barandas/botones/3.jpg',
    'assets/barandas/botones/4.jpg',
    'assets/barandas/botones/5.jpg',
    'assets/barandas/botones/6.jpg',
    'assets/barandas/botones/7.jpg',
    'assets/barandas/botones/8.jpg',
    'assets/barandas/botones/9.jpg',
    'assets/barandas/botones/10.jpg',
    'assets/barandas/botones/11.jpg',
    'assets/barandas/botones/12.jpg',
    'assets/barandas/botones/13.jpg',
    'assets/barandas/botones/14.jpg',
    'assets/barandas/botones/15.jpg',
    'assets/barandas/botones/16.jpg',
  ];

  cantidadVisibleBotones = 8; 
  imagenesVisiblesBotones = this.imagenesBotones.slice(0, this.cantidadVisibleBotones);

  verMasBotones() {
    this.cantidadVisibleBotones += 4; 
    this.imagenesVisiblesBotones = this.imagenesBotones.slice(0, this.cantidadVisibleBotones);
  }

  verMenosBotones() {
    this.cantidadVisibleBotones -= 4;
    this.imagenesVisiblesBotones = this.imagenesBotones.slice(0, this.cantidadVisibleBotones);
  }

  imagenesCanos = [
    'assets/barandas/caños/1.jpg',
    'assets/barandas/caños/2.jpg',
    'assets/barandas/caños/3.jpg',
    'assets/barandas/caños/4.jpg',
    'assets/barandas/caños/5.jpg',
    'assets/barandas/caños/6.jpg',
    'assets/barandas/caños/7.jpg',
    'assets/barandas/caños/8.jpg',
    'assets/barandas/caños/9.jpg',
    'assets/barandas/caños/10.jpg',
    'assets/barandas/caños/11.jpg',
    'assets/barandas/caños/12.jpg',
    'assets/barandas/caños/13.jpg',
    'assets/barandas/caños/14.jpg',
    'assets/barandas/caños/15.jpg',
    'assets/barandas/caños/16.jpg',
    'assets/barandas/caños/17.jpg',
    'assets/barandas/caños/18.jpg',
    'assets/barandas/caños/19.jpg',
    'assets/barandas/caños/20.jpg',
    'assets/barandas/caños/21.jpg',
    'assets/barandas/caños/22.jpg',
    'assets/barandas/caños/23.jpg',
    'assets/barandas/caños/24.jpg',
    'assets/barandas/caños/25.jpg',
    'assets/barandas/caños/26.jpg',
    'assets/barandas/caños/27.jpg',
    'assets/barandas/caños/28.jpg',
    
  ];

  cantidadVisibleCanos = 8; 
  imagenesVisiblesCanos = this.imagenesCanos.slice(0, this.cantidadVisibleCanos);

  verMasCanos() {
    this.cantidadVisibleCanos += 4; 
    this.imagenesVisiblesCanos = this.imagenesCanos.slice(0, this.cantidadVisibleCanos);
  }

  verMenosCanos() {
    this.cantidadVisibleCanos -= 4;
    this.imagenesVisiblesCanos = this.imagenesCanos.slice(0, this.cantidadVisibleCanos);
  }

}
