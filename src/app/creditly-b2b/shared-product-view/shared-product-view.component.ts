import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditlyServicesService } from 'src/app/creditly-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shared-product-view',
  templateUrl: './shared-product-view.component.html',
  styleUrls: ['./shared-product-view.component.scss']
})
export class SharedProductViewComponent implements OnInit {

  productUrl: any;
  categoryID: any;
  product = [];
  financeProduct = [];
  autoLoanItem = [];
  showCardDetailsFlag: boolean = false;

  banksList= JSON.parse(localStorage.getItem("masterData"))?.banks;
  profileDate = JSON.parse(localStorage.getItem('loginResponse'));
  value: number = this.profileDate?.userPersonalProfile?.netSalary?this.profileDate?.userPersonalProfile?.netSalary:60000;
  options: Options = {
    floor: 3000,
    ceil: 200000
  };
  term: boolean = false;
  
  constructor(private route: ActivatedRoute, private creditlyServices: CreditlyServicesService) {
    this.productUrl = this.route.snapshot.queryParamMap.get("title");
    this.categoryID = this.route.snapshot.queryParamMap.get("prodType");
  }

  /* product = localStorage.getItem("CategoryID") == "1" ? [JSON.parse(localStorage.getItem("selectedCard"))] : [];
  financeProduct = localStorage.getItem("CategoryID") == "2" ? [JSON.parse(localStorage.getItem("selectedCard"))] : []
  autoLoanItem = localStorage.getItem("CategoryID") == "AutoLoan" ? [JSON.parse(localStorage.getItem("selectedCard"))] : []; */

  ngOnInit(): void {
    this.getProductDetails();
    console.log("categoryID",this.categoryID);
  }

  public getBankName(bankId): void {
    let item = this.banksList.filter(item => item.id == bankId);
    return item[0].name
  }

  public getProductDetails(): void {
    let req = {
      URL: this.productUrl
    }
    this.creditlyServices.getSharedProductDetails(req).subscribe((resp) => {
      console.log("getSharedProductDetails resp", resp);
      if (resp) {
        switch (this.categoryID) {
          case '1':
            this.product.push(resp);
            break;
          case '2': this.financeProduct.push(resp);
            break;
          case 'AutoLoan': this.autoLoanItem.push(resp);
            break;
        }
      } else{
        this.creditlyServices.notify(resp,'error');
      }
    })
  }

  public showCardDetails() {
    this.showCardDetailsFlag = !this.showCardDetailsFlag;
  }

  FilterValue(id, array) {
    return array?.filter((val) => val.name == "Management Fees")[0]?.value
      ? array?.filter((val) => val.name == "Management Fees")[0]?.value
      : 0;
  }
  FilterValue2(id, array) {
    return array?.filter((val) => val.name == "Early Settlement Fees")[0]?.value
      ? array?.filter((val) => val.name == "Early Settlement Fees")[0]?.value
      : 0;
  }

  acceptTerm() {
    this.term = !this.term;
  }

  public apply(): void {
    Swal.fire("apply product....!")
  }

}
