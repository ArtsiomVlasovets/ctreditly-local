import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CreditlyServicesService } from 'src/app/creditly-services.service';

@Component({
  selector: 'app-mortgage-co',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss']
})
export class MortgageCoComponent implements OnInit {

  
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

  mortgateList: any[] = [];


  constructor(private apiService: CreditlyServicesService, private router: Router) {
   
  }
 

  ngOnInit() {
    this.findFinance();
  }

  findFinance() {
  
    const data = {
      APRSorting: 0,
      AnnualFeeChk: false,
      BankID: 0,
      DownPayment: 0,
      Gender: 1,
      HasNoSalaryTransfer: true,
      LoanAmount: 100000,
      LoanCategoryMasterID: 2,
      LoanTypeID: 0,
      LoanUnitTypeID: 0,
      MaxLoanAmount: 0,
      MaxPeriod: 0,
      MinLoanAmount: 0,
      MinPeriod: 0,
      MonthlyObligation: 0,
      Murabaha: false,
      NationalityID: 0,
      NetSalary: 15000,
      PageNumber: 1,
      PageSize: 50,
      Period: 20,
      Shariah_Compliant: false,
      SupportedByREDF: false,
      Tawaruq: false,
      UserID: 0,
      WorkTypeID: 0,
    };
    
    this.apiService.financeList(data).subscribe(
      (val) => {
        this.mortgateList = val?.products ? val?.products : [];

        console.log('mortgage list', this.mortgateList);
      });
  }
 
}
