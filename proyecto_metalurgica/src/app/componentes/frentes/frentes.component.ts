import { Component } from '@angular/core';

@Component({
  selector: 'app-frentes',
  templateUrl: './frentes.component.html',
  styleUrls: ['./frentes.component.css']
})
export class FrentesComponent {

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

  ];

  cantidadVisibleAcero = 8; 
  imagenesVisiblesAcero = this.imagenesAcero.slice(0, this.cantidadVisibleAcero);

  verMasAcero() {
    this.cantidadVisibleAcero += 4; 
    this.imagenesVisiblesAcero = this.imagenesAcero.slice(0, this.cantidadVisibleAcero);
  }

  verMenosAcero() {
    this.cantidadVisibleAcero -= 4;
    this.imagenesVisiblesAcero = this.imagenesAcero.slice(0, this.cantidadVisibleAcero);
  }

  imagenesChapa = [
    'assets/frentes/chapa/1.jpg',
    'assets/frentes/chapa/2.jpg',
    'assets/frentes/chapa/3.jpg',
    'assets/frentes/chapa/4.jpg',
  ];

  cantidadVisibleChapa = 8; 
  imagenesVisiblesChapa = this.imagenesChapa.slice(0, this.cantidadVisibleChapa);

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
    'assets/frentes/combinada/13.jpg',
    'assets/frentes/combinada/14.jpg',

  ];

  cantidadVisibleCombinada = 8; 
  imagenesVisiblesCombinada = this.imagenesCombinada.slice(0, this.cantidadVisibleCombinada);

  verMasCombinada() {
    this.cantidadVisibleCombinada += 4; 
    this.imagenesVisiblesCombinada = this.imagenesCombinada.slice(0, this.cantidadVisibleCombinada);
  }

  verMenosCombinada() {
    this.cantidadVisibleCombinada -= 4;
    this.imagenesVisiblesCombinada = this.imagenesCombinada.slice(0, this.cantidadVisibleCombinada);
  }
}
