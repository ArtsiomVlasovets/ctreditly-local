import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-application-success',
  templateUrl: './credit-card-application-success.component.html',
  styleUrls: ['./credit-card-application-success.component.scss']
})
export class CreditCardApplicationSuccessComponent implements OnInit {
  requestedCardData=JSON.parse(localStorage.getItem("requestedCardData"));
  CategoryID =parseInt(localStorage.getItem("CategoryID"))
  data=this.requestedCardData?.card?this.requestedCardData?.card:this.requestedCardData?.loan;
  type=localStorage.getItem('CategoryID');
  successMessageFlag : boolean ;
  constructor() {
    if(this.requestedCardData.responseStatusCode == 0) {
      this.successMessageFlag = true;
    } else {
      this.successMessageFlag = false;
    }
   }

  ngOnInit(): void {

  }

}
