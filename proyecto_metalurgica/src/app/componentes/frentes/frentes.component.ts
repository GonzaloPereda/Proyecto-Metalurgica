import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-frentes',
  templateUrl: './frentes.component.html',
  styleUrls: ['./frentes.component.css']
})
export class FrentesComponent implements OnInit{

  constructor(private route: ActivatedRoute, private location: Location) { }

  itemsPerSlide!: number;
  singleSlideOffset = true;
  noWrap = false;

  imagenesAcero = [
    'assets/frentes/acero/1.jpg',
    'assets/frentes/acero/2.jpg',
    'assets/frentes/acero/3.jpg',
    'assets/frentes/acero/4.jpg',
    'assets/frentes/acero/5.jpg',
    'assets/frentes/acero/6.jpg',
    'assets/frentes/acero/7.jpg',
    'assets/frentes/acero/8.jpg',
    'assets/frentes/acero/9.jpg',
    'assets/frentes/acero/10.jpg',
    'assets/frentes/acero/11.jpg',
    'assets/frentes/acero/12.jpg',
    'assets/frentes/acero/13.jpg',
    'assets/frentes/acero/14.jpg',
    'assets/frentes/acero/15.jpg',
    'assets/frentes/acero/16.jpg',
    'assets/frentes/acero/17.jpg',
    'assets/frentes/acero/18.jpg',
    'assets/frentes/acero/19.jpg',
    'assets/frentes/acero/20.jpg',
    'assets/frentes/acero/21.jpg',
    'assets/frentes/acero/22.jpg',
    'assets/frentes/acero/23.jpg',
    'assets/frentes/acero/24.jpg',
    'assets/frentes/acero/25.jpg',

  ];

  imagenesVisiblesAcero = this.imagenesAcero

  ngOnInit() {
    this.itemsPerSlide = window.innerWidth >= 820 ? 5 : 3;

    this.route.url.subscribe(url => {
      if (url.length && url[0].path === 'frentes') {
        // Desplázate hacia arriba de la sección
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  onResize(event: any) {
    this.itemsPerSlide = event.target.innerWidth >= 820 ? 5 : 3;
  }

  // cantidadVisibleAcero = 8; 
  // imagenesVisiblesAcero = this.imagenesAcero.slice(0, this.cantidadVisibleAcero);

  // verMasAcero() {
  //   this.cantidadVisibleAcero += 4; 
  //   this.imagenesVisiblesAcero = this.imagenesAcero.slice(0, this.cantidadVisibleAcero);
  // }

  // verMenosAcero() {
  //   this.cantidadVisibleAcero -= 4;
  //   this.imagenesVisiblesAcero = this.imagenesAcero.slice(0, this.cantidadVisibleAcero);
  // }

  imagenesChapa = [
    'assets/frentes/chapa/1.jpg',
    'assets/frentes/chapa/2.jpg',
    'assets/frentes/chapa/3.jpg',
    'assets/frentes/chapa/3.jpg',
    'assets/frentes/chapa/3.jpg',
  ];

  imagenesVisiblesChapa = this.imagenesChapa

  // cantidadVisibleChapa = 8; 
  // imagenesVisiblesChapa = this.imagenesChapa.slice(0, this.cantidadVisibleChapa);

  // verMasChapa() {
  //   this.cantidadVisibleChapa += 4; 
  //   this.imagenesVisiblesChapa = this.imagenesChapa.slice(0, this.cantidadVisibleChapa);
  // }

  // verMenosChapa() {
  //   this.cantidadVisibleChapa -= 4;
  //   this.imagenesVisiblesChapa = this.imagenesChapa.slice(0, this.cantidadVisibleChapa);
  // }

  imagenesCombinada = [
    'assets/frentes/combinada/1.jpg',
    'assets/frentes/combinada/2.jpg',
    'assets/frentes/combinada/3.jpg',
    'assets/frentes/combinada/4.jpg',
    'assets/frentes/combinada/5.jpg',
    'assets/frentes/combinada/6.jpg',
    'assets/frentes/combinada/7.jpg',
    'assets/frentes/combinada/8.jpg',
    'assets/frentes/combinada/9.jpg',
    'assets/frentes/combinada/10.jpg',
    'assets/frentes/combinada/11.jpg',
    'assets/frentes/combinada/12.jpg',

  ];

  imagenesVisiblesCombinada = this.imagenesCombinada

  // cantidadVisibleCombinada = 8; 
  // imagenesVisiblesCombinada = this.imagenesCombinada.slice(0, this.cantidadVisibleCombinada);

  // verMasCombinada() {
  //   this.cantidadVisibleCombinada += 4; 
  //   this.imagenesVisiblesCombinada = this.imagenesCombinada.slice(0, this.cantidadVisibleCombinada);
  // }

  // verMenosCombinada() {
  //   this.cantidadVisibleCombinada -= 4;
  //   this.imagenesVisiblesCombinada = this.imagenesCombinada.slice(0, this.cantidadVisibleCombinada);
  // }
}
