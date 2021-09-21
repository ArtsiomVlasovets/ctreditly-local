import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-personal-co',
  templateUrl: './personal-co.component.html',
  styleUrls: ['./personal-co.component.scss']
})
export class PersonalCoComponent implements OnInit {
  @Input() Label: string;
  
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

  personalFinanceList: any[] = [];
  cardListShow=false;

  constructor(private apiService: CreditlyServicesService, private router: Router) {
   
  }

  ngOnInit(){
    this.findFinance();
  }
  

 

  findFinance() {
   
    let data = {
      "PageNumber": 1,
      "PageSize": 100,
      "WorkTypeID": 0,
      "NetSalary": 15000,
      "NationalityID": 1,
      "DownPayment": 0.0,   
      "Gender": 1,
      "Period": 3,
      "MonthlyObligation": 0.0,
      "LoanTypeID": 0,
      "BankID": 0,
      "LoanUnitTypeID": 0,
      "LoanCategoryMasterID": 1,
      "PersonalFinanceAmount":1000.00,
      "PersonalFinancePeriod":3.0,
      "PersonalFinanceStartPaying": "2021-07-21T04:54:31.577",
      "PersonalFinancePaidAmount": 1000.00,
      "PersonalFinanceRate":1.1,
      "Murabaha":false,
      "Tawaruq":false,
      "HasNoSalaryTransfer": true,
      "SupportedByREDF": false,
      "Shariah_Compliant": true,
      "LoanAmount": 500000.0,
      "MaxLoanAmount": 20000000.0,
      "MaxPeriod": 30.0,
      "MinLoanAmount": 200000.0,
      "MinPeriod": 5.0,
      "AnnualFeeChk": false,
      "UserID": 0,
          "APRSorting": 0
    };

    this.apiService.financeList(data).subscribe(
      (val) => {
        this.personalFinanceList = val?.products ? val?.products : [];

        console.log(this.personalFinanceList);
      }
    );
  }

}
