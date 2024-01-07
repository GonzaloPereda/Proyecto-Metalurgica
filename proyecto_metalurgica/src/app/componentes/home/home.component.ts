import { Component, AfterViewInit  } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $('#carouselExampleControls').carousel();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
