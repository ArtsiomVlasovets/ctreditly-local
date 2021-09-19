import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-auto-lease-co',
  templateUrl: './auto-lease-co.component.html',
  styleUrls: ['./auto-lease-co.component.scss']
})
export class AutoLeaseCoComponent implements OnInit {

    
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin: 20,
    stagePadding:30,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
