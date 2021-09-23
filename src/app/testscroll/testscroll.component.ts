import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testscroll',
  templateUrl: './testscroll.component.html',
  styleUrls: ['./testscroll.component.scss']
})
export class TestscrollComponent implements OnInit {
  blockInfiniteScroll = false;
  constructor() { }

  ngOnInit(): void {
  }

    scrollDistance = 1;
  scrollUpDistance = 2;
  throttle =3000;
  onScrollDown() {
    console.log('scrolled!!');
  }
  onUp() {
    console.log('scrolled up!!');
  }

}
