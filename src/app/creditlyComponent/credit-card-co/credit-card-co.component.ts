import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-credit-card-co',
  templateUrl: './credit-card-co.component.html',
  styleUrls: ['./credit-card-co.component.scss']
})
export class CreditCardCoComponent implements OnInit {


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

  cardListShow=false;
  cards: any[] = [];
  constructor(private router: Router, private creditlyServices: CreditlyServicesService, private ngNavigatorShareService: NgNavigatorShareService) {
   

  }

  ngOnInit() {
    this.cardList();
  }

  cardList() {
    const data = {
      "PageNumber":1,
    "PageSize":100,
    "WorkTypeID": 0,
    "NetSalary": 15000,
    "NationalityID": 1,
    "Gender": 0,
    "MonthlyObligation": 0.0,
    "CardTypeID": 0,
    "BankID": 0,
    "IsCashBack" :false,
    "IsLoungeAccess":false,
    "IsNoAnualFee":false,
    "HasNoSalaryTransfer": true,
    "Shariah_Compliant": false,
    "AnnualFeeChk": false,
    "UserID": 0,
    "APRSorting": 0
    }
    this.creditlyServices.cardList(data).subscribe(val => {
      this.cards = val.products;
      console.log(val)
    });
  }


 

}
