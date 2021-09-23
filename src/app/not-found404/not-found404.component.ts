import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-found404',
  templateUrl: './not-found404.component.html',
  styleUrls: ['./not-found404.component.scss']
})
export class NotFound404Component implements OnInit {
  
  constructor(private router: Router,private _location: Location ) {
   }

  ngOnInit(): void {
  }


  backroute() {
    // this.router.navigate(['..']);
    this._location.back();
  }

}
